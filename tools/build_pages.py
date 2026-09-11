"""Пересобрать данные и страницы витрин из карточки Google Play.

    python tools/build_pages.py [путь к play-listing.md]

Источник — `store/play-listing.md` мобильного репозитория: те же тексты, что
опубликованы в магазине и там уже проверены живыми людьми. Скрипт кладёт их в
`_data/pages.json`, режет заголовки и описания для поисковой выдачи по границе
фразы, делает og-картинки из витрин Play и переписывает двенадцать
страниц-витрин.

Что он НЕ трогает: `_data/i18n.json` (подписи вокруг текстов, переведены
руками) и `_data/langs.json` (список языков). Добавляешь язык — правишь эти
два файла, потом гоняешь скрипт.
"""
import io
import json
import os
import re
import sys

from PIL import Image

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STORE = 'C:/projects/ynab_flutter/store'
LISTING = sys.argv[1] if len(sys.argv) > 1 else f'{STORE}/play-listing.md'

TITLE_MAX, DESC_MAX = 62, 158

# Коды Play -> коды наших страниц.
CODES = {'ru-RU': 'ru', 'en-US': 'en', 'uk': 'uk', 'de-DE': 'de', 'fr-FR': 'fr',
         'es-ES': 'es', 'it-IT': 'it', 'pl-PL': 'pl', 'pt-BR': 'pt',
         'pt-PT': 'pt-PT', 'nl-NL': 'nl', 'tr-TR': 'tr'}


def parse_listing(path):
    """Карточка Play -> название, подпись, вступление и секции для каждого языка.

    Секции в полном описании размечены ЗАГЛАВНЫМ заголовком, пункты — знаком
    «•». Так набрано во всех двенадцати языках, поэтому разбор один на всех.
    """
    src = io.open(path, encoding='utf-8').read()
    out = {}
    for block in re.split(r'^## ', src, flags=re.M)[1:]:
        code = block.split(chr(10), 1)[0].strip()
        if code not in CODES:
            continue

        def field(title):
            m = re.search(r'### ' + title + r'[^\n]*\n+```\n(.*?)\n```',
                          block, re.S)
            return m.group(1).strip() if m else None

        name = field('Название')
        tagline = field('Краткое описание')
        full = field('Полное описание')
        if not (name and tagline and full):
            print('!', code, 'неполный блок — пропущен')
            continue

        intro, sections = [], []
        cur, buf = None, []

        def flush():
            if not buf:
                return
            text = ' '.join(x.strip() for x in buf).strip()
            if cur is None:
                intro.append(text)
            else:
                cur.setdefault('body', []).append(text)
            buf.clear()

        for line in full.split(chr(10)):
            s = line.strip()
            letters = [c for c in s if c.isalpha()]
            is_head = (s and letters and all(c.isupper() for c in letters)
                       and not s.startswith('•'))
            if not s:
                flush()
            elif is_head:
                flush()
                cur = {'title': s}
                sections.append(cur)
            elif s.startswith('•'):
                flush()
                cur.setdefault('items', []).append(s[1:].strip())
            elif cur is not None and cur.get('items') and line.startswith('  '):
                cur['items'][-1] += ' ' + s          # перенос пункта
            else:
                buf.append(s)
        flush()
        out[CODES[code]] = {
            'name': plain_dashes(name), 'tagline': plain_dashes(tagline),
            'intro': [plain_dashes(x) for x in intro],
            'sections': [
                {k: (plain_dashes(v) if isinstance(v, str)
                     else [plain_dashes(i) for i in v])
                 for k, v in sec.items()}
                for sec in sections],
        }
    return out


def plain_dashes(text):
    """Длинные и средние тире -> дефис (решение Олега, 11 сентября 2026).

    Нормализуем ЗДЕСЬ, а не в `store/play-listing.md`: там лежит то, что
    опубликовано в Google Play, и трогать его ради вида сайта нельзя — иначе
    исходник разойдётся с магазином. Сайт получает свой вид при сборке.
    """
    return text.replace(chr(8212), '-').replace(chr(8211), '-')


def clip(text, limit, seps=('. ', '; ', ': ', ' (', ' — ', ' - ', ', ')):
    """Самый длинный кусок текста до разделителя, влезающий в limit.

    Режем по границе фразы, а не по счётчику символов: обрубок вида
    «Monat planen,» в выдаче читается как небрежность.
    """
    if len(text) <= limit:
        return text.rstrip(' ,;:—-')
    best = ''
    for sep in seps:
        pos = 0
        while True:
            i = text.find(sep, pos)
            if i < 0:
                break
            cand = text[:i]
            if len(cand) <= limit and len(cand) > len(best):
                best = cand
            pos = i + 1
    if best:
        return best.rstrip(' ,;:—-')
    return text[:limit].rsplit(' ', 1)[0].rstrip(' ,;:—-')


def build_og(langs):
    """og:image на каждый язык — витрины Play нарисованы на всех двенадцати.

    1200×630 — рекомендация Open Graph; витрина 1024×500 вписывается с полями
    её собственного фонового цвета, чтобы ничего не растягивать.
    """
    for lang in langs:
        code = lang['code']
        src = f'{STORE}/play-feature-{code}.png'
        if not os.path.exists(src):
            print('!', code, 'нет витрины', src)
            continue
        im = Image.open(src).convert('RGB')
        bg = im.getpixel((4, 4))
        canvas = Image.new('RGB', (1200, 630), bg)
        k = min(1200 / im.width, 630 / im.height)
        im2 = im.resize((int(im.width * k), int(im.height * k)), Image.LANCZOS)
        canvas.paste(im2, ((1200 - im2.width) // 2, (630 - im2.height) // 2))
        canvas.save(f'{SITE}/img/og-{code}.jpg', 'JPEG', quality=85,
                    optimize=True)


def build_pages(pages, langs):
    for lang in langs:
        code, url = lang['code'], lang['url']
        p = pages[code]
        name, tag = p['name'], p['tagline']

        title = f'{name} - {tag}'
        if len(title) > TITLE_MAX:
            tail = clip(tag, TITLE_MAX - len(name) - 3)
            title = f'{name} - {tail}' if len(tail) > 12 else name

        desc = tag if tag.endswith('.') else tag + '.'
        intro = p['intro'][0] if p['intro'] else ''
        room = DESC_MAX - len(desc) - 1
        if intro and room > 45:
            tail = clip(intro, room)
            if len(tail) > 40:
                desc = f'{desc} {tail}.'

        fm = ['---', 'layout: showcase', f'lang: {code}']
        if code != 'en':
            fm.append(f'permalink: {url}')
        fm += [f'title: {json.dumps(title, ensure_ascii=False)}',
               f'description: {json.dumps(desc, ensure_ascii=False)}',
               f'image: /img/og-{code}.jpg', '---', '']
        fname = 'index.md' if code == 'en' else url.strip('/') + '.md'
        io.open(f'{SITE}/{fname}', 'w', encoding='utf-8',
                newline=chr(10)).write(chr(10).join(fm))
        print('%-10s title=%2d desc=%3d' % (fname, len(title), len(desc)))


def main():
    langs = json.load(io.open(f'{SITE}/_data/langs.json', encoding='utf-8'))
    pages = parse_listing(LISTING)
    io.open(f'{SITE}/_data/pages.json', 'w', encoding='utf-8',
            newline=chr(10)).write(json.dumps(pages, ensure_ascii=False, indent=1))
    missing = [l['code'] for l in langs if l['code'] not in pages]
    if missing:
        print('! нет текстов для:', ' '.join(missing))
        return 1
    build_og(langs)
    build_pages(pages, langs)
    print('готово:', len(langs), 'языков')
    return 0


if __name__ == '__main__':
    sys.exit(main())
