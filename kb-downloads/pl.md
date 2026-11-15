# Mój budżet — Baza wiedzy

## Co potrafi aplikacja {#about}

„Mój budżet” to nie dziennik wydatków, tylko pełny budżet oparty na metodzie kopert. Potrafi dużo, a większość z tego nie siedzi głęboko w menu, tylko w gestach i drobiazgach. Ta strona to krótka wycieczka; potem każdy ekran ma swój artykuł.

### Najważniejsze {#about-main}

Dziennik wydatków odpowiada na pytanie „gdzie poszły pieniądze”. Budżet odpowiada na ważniejsze: **„na co jeszcze wystarczy”** — dziś, do wypłaty, do urlopu.

##### Koperty

Każdy złoty dostaje zadanie: jedzenie, czynsz, urlop. Widzisz, ile zostało w każdej kopercie, a przekroczenie od razu robi się czerwone. Więcej w [„Jak działa budżet”](#start).

##### Twoje dane są Twoje

Budżet mieszka w Twoim telefonie i w Twojej chmurze. Twórca aplikacji nie ma do niego dostępu. Chmurę możesz zamknąć hasłem — AES-256. Więcej w [„Chmura i kopie zapasowe”](#sync-password).

##### Przeprowadzka z YNAB

Konta, kategorie i całą historię z YNAB 4 albo webowego YNAB przenosisz plikiem, a mały słowniczek pokazuje, jak nazywają się tu znajome pojęcia. Więcej w [„Pierwsze kroki”](#first-steps).

### Szybkie wpisywanie {#about-input}

Zakup łatwiej zapisać przy kasie, niż przypominać go sobie wieczorem. Dlatego sposobów jest kilka.

##### Do skrzynki

Przy kasie nie ma czasu wybierać kategorii i konta? Wpisz samą kwotę. Przycisk „Do skrzynki” zapisze ją z oznaczeniem „Rozdziel”, a w domu formularz otworzy te transakcje po kolei. Włącza się w „Ustawienia → Dane → Skrzynka”. Więcej w [„Formularz transakcji”](#entry-inbox).

##### Głosem

„Biedronka 211 Zakupy spożywcze z konta Konto osobiste” — i formularz jest wypełniony. Więcej w [„Wprowadzanie głosem”](#voice).

##### Z paragonu

Skieruj aparat na kod QR paragonu — kwota i data wpiszą się same, a od drugiego razu aplikacja rozpozna sklep po kasie. Działa tam, gdzie aplikacja umie czytać paragony Twojego kraju. Więcej w [„Skaner paragonów”](#receipt).

##### Z ekranu głównego

Widżety i skróty otwierają formularz jednym dotknięciem, bez wchodzenia do aplikacji. Więcej w [„Widżety i skróty”](#widgets).

##### Klawiatura-kalkulator

Kwoty wpisuje się na własnej klawiaturze aplikacji z dodawaniem i odejmowaniem, dzieli na kilka kategorii, przelewa między kontami — nawet w różnych walutach. Więcej w [„Formularz transakcji”](#entry).

### Plany {#about-plans}

##### Cele

Pięć rodzajów: co miesiąc, na datę, utrzymanie salda, procent dochodu i lista zakupów. Aplikacja liczy, ile odkładać. Więcej w [„Cele”](#goals).

##### Płatności zaplanowane

Czynsz, subskrypcje, raty kredytu — z przypomnieniem z wyprzedzeniem i zapisem jednym dotknięciem. Więcej w [„Płatności zaplanowane”](#scheduled).

##### Karty kredytowe i długi

Pieniądze na spłatę karty odkładają się same, a dług widać miesiąc po miesiącu. Więcej w scenariuszu [„Karty kredytowe i długi”](#scenario-credit).

##### Tagi i „kto komu ile”

Wyjazd, remont, wspólne wydatki z przyjaciółmi — tag zbiera je z różnych kategorii i liczy, kto komu ile winien. Więcej w [„Odbiorcy i tagi”](#payees-tags).

### Raporty {#about-reports}

Dziesięć raportów: gdzie poszły pieniądze, trend i odchylenie od zwykłego, przepływ pieniędzy od dochodów do wydatków, przychody i wydatki według miesięcy, wiek pieniędzy, wartość netto, dług na kartach. A „Przegląd” to Twój ekran główny: bloki wybierasz i układasz sam. Więcej w [„Raporty”](#reports) i [„Przegląd”](#overview).

### Urządzenia i chmura {#about-devices}

Jeden budżet na telefonie, tablecie i komputerze z Windows — we dwoje albo dla całej rodziny. Synchronizacja przez Google Drive, Dropbox albo WebDAV — Nextcloud, ownCloud, pCloud, własny serwer; kopie zapasowe robią się same według harmonogramu. Więcej w scenariuszach [„Jeden budżet na kilku urządzeniach”](#scenario-devices) i [„We dwoje lub więcej w jednym budżecie”](#scenario-together).

### Po swojemu {#about-yours}

Trzynaście języków, sześćdziesiąt walut, formaty kwot i dat Twojego kraju. Siedem stylów w jasnym i ciemnym wydaniu, czcionki, gęstość, zaokrąglenia, ikony. Kilka budżetów: osobisty, rodzinny, firmowy. Więcej w [„Ustawienia”](#settings).

### Od czego zacząć {#about-start}

1. [„Jak działa budżet”](#start) — metoda kopert w dziesięć minut.
2. [„Pierwsze kroki”](#first-steps) — od instalacji do pierwszego miesiąca.
3. [Scenariusze](#scenario-paycheck) — gotowe odpowiedzi: od wypłaty do wypłaty, freelance, karty kredytowe, wyjazd z przyjaciółmi.

## Jak działa budżet {#start}

Metoda kopert w dziesięć minut: skąd przychodzą pieniądze, jak je podzielić i co się dzieje, gdy kończy się miesiąc.

### Koperty: główna idea {#start-idea}

Wyobraź sobie, że wypłatę wybrałeś w gotówce i rozłożyłeś do kopert: „Zakupy spożywcze”, „Media i rachunki”, „Urlop”. Kupując jedzenie, bierzesz pieniądze tylko z tej koperty. Pusta koperta oznacza, że na to pieniędzy już nie ma. Aplikacja robi dokładnie to samo, tylko bez papieru.

(1)
##### Pieniądze na kontach

Konto osobiste — 5100 zł

Gotówka — 600 zł

(2)
##### „Nierozdysponowane”

5700 zł — jeszcze bez zadania

(3)
##### Koperty kategorii

Zakupy spożywcze — 1650 zł

Media i rachunki — 510 zł

…i tak dalej, aż zostanie 0

(4)
##### Wydatek

Kupiłeś chleb — koperta „Zakupy spożywcze” schudła

Każdy złoty na kontach leży dokładnie w jednym miejscu: albo w jakiejś kopercie, albo w „nierozdysponowane”. Dlatego w każdej chwili widać, na co jeszcze Cię stać, a na co nie. Pierwszy cel — sprowadzić „nierozdysponowane” do zera: wtedy **każdy złoty ma zadanie**. To nie meta, tylko pierwszy krok — dokąd metoda prowadzi dalej, jest [na końcu artykułu](#start-ladder).

Czym to się różni od zwykłego „zapisywania wydatków” — [niżej](#start-vs).

### Czym to się różni od zapisywania wydatków {#start-vs}

Wiele osób latami zapisuje wydatki — w zeszycie, w arkuszu, w aplikacji banku — i nadal nie widzi, dlaczego pieniądze kończą się przed końcem miesiąca. Zapisywanie wydatków uczciwie opowiada o przeszłości. Koperty pomagają sterować przyszłością.

|  | Zapisywanie wydatków | Budżet kopertowy |
|---|---|---|
| Kiedy myślisz o pieniądzach | Po wydaniu: patrzysz, dokąd poszły. | Przed wydaniem: decydujesz, ile możesz wydać. |
| Główne pytanie | „Gdzie poszły pieniądze?” | „Na co mnie jeszcze stać?” |
| Przekroczenie | Dowiadujesz się pod koniec miesiąca, kiedy jest za późno. | Widzisz je od razu: koperta robi się czerwona w chwili zakupu — i przekładasz pieniądze z innej. |
| Pieniądze w banku | Jedna liczba: „na koncie jest 4200 zł, więc mam pieniądze”. | Podzielone według zadań: część jest już obiecana czynszowi, część urlopowi. Wolne jest tylko to, co leży we właściwej kopercie. |
| Wypłata | Po prostu przychód, który „jakoś się rozejdzie”. | Pieniądze, którym od razu dajesz zadanie. |
| Nieregularne wydatki | Ubezpieczenie albo naprawa spadają jak grom z jasnego nieba. | Co miesiąc odkładasz trochę — gdy przychodzi rachunek, pieniądze już czekają. |

(4200)
#### Przykład: „na koncie jeszcze sporo”

Jest połowa miesiąca, na koncie 4200 zł. Masz ochotę na słuchawki za 840 zł.

*Jak to działa:*
**Zapisywanie wydatków** widzi 4200 zł i mówi: „śmiało”. Ale za tydzień czynsz — 2400 zł, do tego rachunki i jedzenie do wypłaty. Słuchawki kupione, na czynsz brakuje.

**Koperty** widzą te same 4200 zł, ale podzielone: „Czynsz” — 2400 zł, „Media i rachunki” — 510 zł, „Zakupy spożywcze” — 780 zł, „Rozrywka i hobby” — 510 zł. Na słuchawki wolne jest 510 zł. Chcesz kupić je teraz? Zdecyduj, z której koperty weźmiesz brakujące 330 zł. Decyzję podejmujesz Ty i podejmujesz ją przed zakupem, a nie po nim.

(?)
#### Czyli zapisywania wydatków tu nie ma?

Jest — i to dokładniejsze niż w zeszycie.

*Jak to działa:*
Każdy zakup jest zapisany, a „Gdzie poszły pieniądze”, „Wydatki miesiąca” i raporty pokazują, dokąd wszystko poszło. Tylko że tu to nie cel, a sprawdzenie planu: czy to, co postanowiłeś, zgodziło się z tym, co się wydarzyło? W następnym miesiącu zaplanujesz dokładniej.

(↻)
#### W skrócie

Zapisywanie wydatków to lusterko wsteczne. Koperty to kierownica.

*Jak to działa:*
Patrzeć w lusterko warto: widać, skąd jedziesz. Ale do przodu prowadzi tylko kierownica — decyzja o tym, dokąd pójdą pieniądze, podjęta z góry.

### Trzy liczby każdej kategorii {#start-envelope}

Obróć telefon poziomo — ekran „Budżet” zmieni się w tabelę, a trzy liczby koperty będą podpisane prosto w nagłówkach kolumn.

[Budżet w poziomie: kolumny Kategoria, Zaplanowano, Wydano, Dostępne; Media i rachunki 300, −278, 89]
Telefon obrócony poziomo: ten sam „Budżet” jako tabela. W zwykłym widoku „Dostępne” to kwota po prawej od kategorii, a „Wydano … z …” to linijka pod paskiem.

1. **„Zaplanowano”** — ile włożyłeś do koperty w tym miesiącu. To decyzja: „300 zł na rachunki w listopadzie”.

2. **„Wydano”** — ile już wyszło z koperty: wszystkie wydatki tej kategorii w miesiącu, ze znakiem minus. Zwrot za oddany towar zmniejsza tę liczbę.

3. **„Dostępne”** — ile jeszcze możesz wydać: przeniesione z poprzedniego miesiąca + zaplanowane − wydane.

   *Jak to działa:*
   Na zrzucie „Media i rachunki” mają zaplanowane 300, wydane 278 — wydawałoby się, że zostało 22. A dostępne jest 89: 67 zł nie zostało wydane w październiku i przeszło na listopad. Tak koperta się zbiera.

   Zielony chip oznacza, że w kopercie są pieniądze, szare zero — że jest pusta, a czerwony — minus: wydano więcej, niż było.

[Ekran Budżet: grupy kategorii, kwoty po prawej, paski i linijki wydatków]

Jak to wygląda na ekranie i co gdzie nacisnąć — w artykule [„Budżet”](#budget). Tu są tylko zasady, którym podlegają liczby.

(zł)
#### Przychód trafia do „nierozdysponowane”, a nie do kategorii

Wypłata sama nie wpada do koperty: trafia do „nierozdysponowane”, a dzielisz ją Ty.

*Jak to działa:*
W formularzu transakcji przychód domyślnie zapisuje się jako „Przychód na listopad”, czyli do „nierozdysponowane” tego miesiąca. Można też wybrać „Przychód na grudzień” — zobacz sekcję [„Wiek pieniędzy w szczegółach”](#overview) artykułu „Przegląd”.

(↺)
#### Zwrot wraca do koperty

Dostałeś pieniądze za oddany towar? Wracają do kategorii, z której wyszły, a nie do przychodów.

*Jak to działa:*
Jak to zapisać — artykuł [„Formularz transakcji”](#entry), sekcja „Zwrot za oddany towar”.

(⇄)
#### Przelew to nie wydatek

Wypłaciłeś gotówkę, spłaciłeś kartę kredytową, przełożyłeś pieniądze na oszczędności — pieniądze nadal są Twoje.

*Jak to działa:*
Przelew między kontami budżetowymi nie dotyka żadnej koperty. Kopert dotyczy tylko przelew na konto poza budżetem (oszczędności, lokata) — wtedy aplikacja pyta o kategorię.

### Miesiąc po miesiącu {#start-months}

Budżet żyje miesiącami. Co dzieje się z kopertą, gdy kończy się miesiąc — to jedna z kluczowych zasad.

(+)
#### Plus przechodzi dalej

Nie wydałeś wszystkiego? Reszta przechodzi na następny miesiąc i zostaje w kopercie.

*Jak to działa:*
Tak oszczędza się na duże i nieregularne rzeczy: wkładaj co miesiąc 450 zł do koperty „Urlop”, nie wydawaj — i do lata będzie 2700 zł. Pieniądze na przyszłość można też odłożyć od razu: rozdysponować można dowolny miesiąc naprzód — strzałka „›” na ekranie „Budżet”.

(−)
#### Minus się zeruje

Wydałeś więcej, niż było w kopercie? Kategoria robi się czerwona. Gdy kończy się miesiąc, minus znika — ale nie bez śladu.

*Jak to działa:*
Minus z własnych pieniędzy (czerwony, ikona portfela) zmniejsza „nierozdysponowane” następnego miesiąca: pieniądze przecież już wydano. Dlatego minus lepiej pokryć od razu, przekładając pieniądze z innej kategorii: naciśnij czerwoną kwotę na ekranie „Budżet”.

Minus na karcie kredytowej (żółty, ikona karty) to inna historia: nie zjada Twoich pieniędzy, tylko powiększa dług na karcie. „Nierozdysponowane” go nie zabiera, ale dług i tak trzeba będzie spłacić.

(≡)
#### „Budżet miesiąca” na ekranie „Przegląd”

Cały rachunek miesiąca jako jedna drabinka: przeniesione z poprzedniego miesiąca, przychód, rozdysponowane i wynik „nierozdysponowane”.

*Jak to działa:*
Jeśli liczba na chipie wydaje się dziwna, zajrzyj tutaj: zobaczysz, skąd się wzięła. Więcej w artykule [„Przegląd”](#overview).

### Karta kredytowa w budżecie {#start-credit}

Karta kredytowa to najmniej oczywista część metody kopert. Zasada jest jedna: zakup kartą kredytową wydaje pieniądze z koperty tak samo jak zakup kartą debetową.

(1)
#### Zakup

Kupiłeś jedzenie kartą kredytową za 105 zł — koperta „Zakupy spożywcze” schudła o 105 zł, jak zwykle.

(2)
#### Pieniądze na spłatę odkładają się same

Aplikacja przenosi te 105 zł do grupy „Płatności kartami”, do kategorii Twojej karty kredytowej.

*Jak to działa:*
Dzięki temu w dniu spłaty pieniądze na nią są już odłożone i nie wydasz ich przypadkiem. Sam niczego odkładać nie musisz.

(3)
#### Spłata karty

Kartę kredytową spłacasz przelewem ze zwykłego konta na kartę. Odłożone pieniądze idą na spłatę.

*Jak to działa:*
Jak zapisać przelew — artykuł [„Formularz transakcji”](#entry).

### Cztery zasady metody {#start-rules}

Aplikacja nie zmusza Cię do ich przestrzegania — podsuwa je po jednej, kiedy dana zasada staje się aktualna.

(1)
#### Daj każdemu złotemu zadanie

Rozdysponowuj pieniądze, aż „nierozdysponowane” będzie zerem. Pieniądze bez zadania rozchodzą się niepostrzeżenie.

(2)
#### Przyjmij prawdziwe wydatki

Ubezpieczenie raz w roku, naprawa auta, prezenty na święta — to też wydatki. Odkładaj na nie trochę co miesiąc.

*Jak to działa:*
Pomagają cele „Do daty”: aplikacja liczy, ile wkładać co miesiąc, żeby zdążyć.

(3)
#### Reaguj elastycznie

Przekroczenie to nie porażka. Przełóż pieniądze z innej koperty i jedź dalej.

*Jak to działa:*
Budżet to plan, a nie przysięga. Ważne, żeby koperty uczciwie pokazywały, ile zostało.

(4)
#### Postarzaj pieniądze

Cel — wydawać pieniądze zarobione miesiąc temu, a nie wczoraj.

*Jak to działa:*
Pilnuje tego „Wiek pieniędzy” na ekranie „Przegląd”. Gdy dojdzie do 30 dni, możesz żyć z pieniędzy poprzedniego miesiąca: szczegóły w artykule [„Przegląd”](#overview).

### Zero to dopiero pierwszy krok {#start-ladder}

„Nierozdysponowane” na zerze to dobry cel, ale nie ostateczny. Metoda prowadzi dalej: od „dociągam do wypłaty” do „moje pieniądze pracują na mnie”. Stopnie idą po kolei — przeskakiwać je ryzykownie: inwestowanie bez poduszki oznacza sprzedaż inwestycji przy pierwszej awarii auta.

(1)
#### Każdy złoty ma zadanie

Wszystkie pieniądze na kontach są rozłożone do kopert. Wiesz, na co Cię stać do końca miesiąca.

**Jak poznać, że tu jesteś:** „nierozdysponowane” to zero, i żadna kategoria nie jest czerwona.

**Jak pomaga aplikacja:** chip „Nierozdysponowane”, automatyczne rozdysponowanie, „Pokryj wszystkie przekroczenia”.

(2)
#### Koperty na nieregularne wydatki

Ubezpieczenie, naprawa auta, prezenty i urlop nie zaskakują już znienacka: co miesiąc idzie na nie trochę.

**Jak poznać, że tu jesteś:** przychodzi duży rachunek, a pieniądze na niego już czekają w swojej kopercie.

**Jak pomaga aplikacja:** cele „Do daty” i „Co miesiąc” liczą, ile wkładać; blok „Co przed nami” na ekranie „Przegląd” przypomina, gdzie brakuje pieniędzy.

(3)
#### Miesiąc do przodu

Wydajesz pieniądze zarobione miesiąc temu. Temu miesiącowi nowa wypłata nie jest potrzebna — idzie na następny.

**Jak poznać, że tu jesteś:** „Wiek pieniędzy” to 30 dni lub więcej.

**Jak pomaga aplikacja:** „Wiek pieniędzy” na ekranie „Przegląd”, przychód „na następny miesiąc” w formularzu — szczegóły w artykule [„Przegląd”](#overview), sekcja „Wiek pieniędzy w szczegółach”.

(4)
#### Fundusz awaryjny

Zapas na trzy do sześciu miesięcy zwykłych wydatków. Utrata pracy czy choroba to wtedy kłopot, a nie katastrofa.

**Jak poznać, że tu jesteś:** w „Na czarną godzinę” leżą wydatki kilku miesięcy.

**Jak pomaga aplikacja:** cel „Saldo” na kategorii „Na czarną godzinę”; średnie miesięczne wydatki — w raportach i na ekranie kategorii.

(5)
#### Pieniądze pracują na Ciebie

Poduszka jest, nieregularne wydatki pokryte, jesteś miesiąc do przodu — i teraz nadwyżka może nie tylko leżeć: lokata, obligacje, inwestycje. Pieniądze zaczynają zarabiać pieniądze.

**Jak poznać, że tu jesteś:** co miesiąc część dochodu idzie do „Inwestycje”, i nie ruszasz jej na bieżące wydatki.

**Jak pomaga aplikacja:** grupa „Oszczędności” z kategorią „Inwestycje”; „Zapłać sobie” na ekranie „Przegląd” pokazuje, jaki procent dochodu odkładasz (norma — 10 % i więcej); konto „Tylko ewidencja” na lokatę albo rachunek maklerski; „Majątek” na ekranie „Przegląd” — jak rośnie wszystko, co masz.

Ile potrwa ta droga, zależy od dochodu i nawyków. Pierwszy krok to zwykle pierwszy miesiąc. Miesiąc do przodu zajmuje od trzech miesięcy do roku. Ważne, by co miesiąc robić krok, a nie skok.

Gotowy? Dalej — [„Pierwsze kroki”](#first-steps): od pierwszego uruchomienia do pierwszego miesiąca.

## Pierwsze kroki {#first-steps}

Od pierwszego uruchomienia do działającego budżetu: kreator, lista „Pierwsze kroki” i co robić w pierwszym miesiącu.

*Jak działa sama metoda — w [„Jak działa budżet”](start.md)*

### Pierwsze uruchomienie: od czego zaczniemy {#first-steps-welcome}

Przy pierwszym uruchomieniu otwiera się kreator. Pierwszy ekran proponuje troje drzwi. Język zmienisz od razu tutaj, przyciskiem w prawym górnym rogu: kategorie, które aplikacja zaproponuje domyślnie, też będą w tym języku.

[Krok 1 z 6: powitanie, przycisk języka, trzy warianty: Zaczynam od zera, Mam już budżet, Przechodzę z YNAB]

(A)
#### „Zaczynam od zera”

Kreator przeprowadzi Cię przez pięć kroków: waluta i nazwa, konta, kategorie, pierwsze rozdysponowanie. Kroki są opisane niżej.

(B)
#### „Mam już budżet”

Prowadziłeś budżet na innym telefonie albo przed ponowną instalacją. Aplikacja wczyta go z chmury — Google Drive, Dropbox albo WebDAV — albo z pliku kopii zapasowej.

*Jak to działa:*
O nazwę tu nie pyta: przychodzi razem z budżetem i jest adresem jego folderu w chmurze.

(C)
#### „Przechodzę z YNAB”

YNAB 4 albo webowy YNAB: konta, kategorie i historia przechodzą z pliku.

*Jak to działa:*
Najpierw waluta i nazwa, potem wybierasz plik eksportu, a na końcu jest słowniczek: jak nazywa się tu każde pojęcie YNAB. Słowniczek otworzysz też później, przy imporcie z ustawień.

Około pięciu minut. Każdy krok można pominąć — lista „Pierwsze kroki” na ekranie „Przegląd” przypomni, co zostało.

### Od zera: pięć kroków {#first-steps-fresh}

Na dole każdego kroku są „Dalej” i „Pomiń”. Systemowy przycisk Wstecz cofa o krok, zamiast zamykać aplikację.

[Krok 2. Waluta i nazwa]

(•)
#### Krok 2. Waluta i nazwa

Walutę aplikacja wstawia według kraju telefonu — sprawdź ją. To symbol, w którym prowadzisz budżet; aplikacja nie przelicza kwot.

*Jak to działa:*
Wymyśl własną nazwę: „Rodzinny”, „Osobisty”. Zostawisz pole puste — budżet będzie się nazywał „Mój budżet”. Nazwa widnieje w nagłówku i w nazwie folderu w chmurze, więc budżet łatwo rozpoznać na każdym urządzeniu.

[Krok 3. Gdzie są twoje pieniądze]

(•)
#### Krok 3. Gdzie są twoje pieniądze

Dodaj każde miejsce, w którym trzymasz pieniądze, z dzisiejszym saldem: portfel, karty we wszystkich bankach, kartę kredytową, oszczędności.

*Jak to działa:*
Pominiesz choćby jedną kartę — i budżet nie zgodzi się z tym, co naprawdę masz. Naciśnij „+” obok pasującego szablonu — otworzy się arkusz nowego konta z już wybranym typem. Saldo konta trafia prosto do „nierozdysponowane” — na zrzucie dwa konta wniosły 5700 zł. Więcej o kontach w artykule [„Konta”](#accounts).

[Krok 4. Twoje kategorie]

(•)
#### Krok 4. Twoje kategorie

Chipy „Na co wydajesz” dodają potrzebne kategorie: „Samochód”, „Dzieci”, „Zwierzęta domowe”. Niżej jest cała lista i możesz ją dopasować do siebie.

*Jak to działa:*
- dotknij kategorii, by zmienić jej nazwę;
- krzyżyk usuwa kategorię;
- „Dodaj kategorię” jest w każdej grupie, „Dodaj nową grupę” — na dole;
- ołówek obok nazwy grupy — zmiana nazwy grupy.

Zrzut pokazuje początek listy; jest dłuższa.

[Krok 5. Rozdysponuj pieniądze]

(•)
#### Krok 5. Rozdysponuj pieniądze

Podziel „nierozdysponowane” między koperty: dotknij kwoty obok kategorii i wpisz, ile jesteś gotów wydać na nią w tym miesiącu.

*Jak to działa:*
Na górze widać, ile zostało. Na zrzucie rozdysponowano 2520 zł, a zostało 3180 zł. Do zera nie trzeba tu dochodzić: zacznij od najważniejszego — mieszkanie, jedzenie, telefon — a resztę rozdysponujesz później na ekranie „Budżet”.

[Krok 6. Gotowe]

(•)
#### Krok 6. Gotowe

Jeszcze raz główna zasada: rozdysponowuj pieniądze, aż „nierozdysponowane” dojdzie do zera.

*Jak to działa:*
„Otwórz budżet” prowadzi na ekran „Budżet”. Stamtąd aplikacja podpowiada po drodze — po jednej wskazówce, kiedy jest na miejscu.

### Po kreatorze: lista „Pierwsze kroki” {#first-steps-first-steps}

Na górze ekranu „Przegląd” pojawia się karta z listą. Jest w niej to, czego budżet potrzebuje, zanim zacznie pokazywać prawdę. Kreator zalicza w niej to, co już zrobiłeś.

[Przegląd z kartą Pierwsze kroki: 3 z 6, rozwinięte Pieniądze rozdysponowane, 5700 nierozdysponowane, przycisk Do budżetu]

1. **Gotówka w portfelu** — Portfel jako osobne konto. Gotówka ginie najpierw: bez własnego konta budżet rozjeżdża się z pieniędzmi w ręku już przy pierwszym zakupie. Nie masz gotówki? — „Nie mam gotówki”.
2. **Karty ze wszystkich banków** — Wszystkie karty i konta są dodane. Jeśli dodałeś je w kreatorze, punkt jest już zaznaczony.
3. **Kategorie na miarę** — Lista kategorii dopasowana. Przeszedłeś krok kategorii — jest zaznaczony. Przycisk otwiera ten sam ekran co w kreatorze. Kategorii, która ma już transakcje, krzyżyk nie usuwa, tylko ukrywa: transakcje zostają na swoim miejscu.
4. **Pieniądze rozdysponowane** — „Nierozdysponowane” doszło do zera. Do tego czasu punkt pokazuje, ile zostało, i prowadzi na ekran „Budżet”.
5. **Pierwsza transakcja** — Zapisałeś pierwszy zakup — budżet ożył. Przycisk otwiera formularz.
6. **Kopia poza telefonem** — Chmura albo plik kopii zapasowej. Zgubisz telefon — a budżet nie przepadnie. Przyciski: podłączenie chmury albo „Kopie zapasowe”.

(1)
#### Zrobione punkty dostają ptaszek

Na górze „3 z 6”: ile zrobiono. Zrobiony punkt to jedna linijka z ptaszkiem.

(2)
#### Jeden punkt jest rozwinięty

Pierwszy niezrobiony — albo ten, który dotknąłeś. Mówi, co zrobić i po co.

(3)
#### Główny przycisk to drzwi

Prowadzi prosto tam, gdzie punkt się wykonuje: formularz konta, „Budżet”, formularz transakcji, logowanie do chmury. Czasem obok jest drugi — Twoja odpowiedź: „Nie mam gotówki”, „Wszystkie dodane”, „Zostaw tak”.

(⋮)
#### Ukryj listę

Menu karty → „Ukryj listę” (z „Cofnij” na dole ekranu). Gdy wszystko jest zrobione, karta mówi „Budżet gotowy” — naciśnij „Rozumiem”.

*Jak to działa:*
Dopóki lista jest otwarta, zwykłe wskazówki na ekranie „Przegląd” milczą — żeby to samo nie było mówione dwa razy. Przywrócić wszystkie wskazówki: „Ustawienia → Pomoc i kontakt → Wskazówki → Pokaż wskazówki ponownie”.

Jeśli przeszedłeś z YNAB, lista jest inna: uzgodnienie sald kont z bankiem, gotówka, rozdysponowanie i kopia zapasowa — konta i kategorie przyszły już w pliku.

### Pierwszy miesiąc {#first-steps-month1}

1. **Zapisuj każdy zakup** — od razu, przy kasie: „+ Transakcja”, aparat dla paragonu albo mikrofon. Pięć sekund teraz zamiast wieczoru z wyciągiem z banku później. Nie ma czasu? — „Skrzynka” (artykuł [„Formularz transakcji”](#entry)).
2. **Przyszły pieniądze — podziel je.** Każda wypłata trafia do „nierozdysponowane”; rozdaj ją do kopert na ekranie „Budżet”.
3. **Koperta zrobiła się czerwona — przełóż pieniądze** z innej. To normalne: pierwszy miesiąc zawsze pokazuje, czego nie doszacowałeś.
4. **Raz w tygodniu uzgadniaj konta** z bankiem — menu konta, „Uzgodnienie salda” (artykuł [„Konta”](#accounts)).
5. **Pod koniec miesiąca zajrzyj na ekran „Przegląd”**: „Gdzie poszły pieniądze”, „Wydatki miesiąca”. W następnym miesiącu rozdysponujesz już z doświadczeniem.

## Jeden budżet na kilku urządzeniach {#scenario-devices}

Telefon w kieszeni, tablet w domu, komputer w pracy — i ten sam budżet na każdym. Zapisujesz zakup przy kasie, a wieczorem jest już na laptopie. Jak to ustawić i o czym pamiętać.

*„Ustawienia”, sekcja „Synchronizacja”*

### Komu to potrzebne {#scenario-devices-who}

##### Telefon i komputer

Wydatki z telefonu, przy kasie. Planowanie miesiąca, raporty i przeglądy na dużym ekranie. Na komputer jest „Wersja na Windows”: ten sam budżet, własny wygląd pod mysz. Synchronizuje się przez Google Drive — jeśli w grę wchodzi komputer, na telefonie też wybierz tę chmurę.

##### Telefon i tablet

Dzielić wypłatę między koperty wygodnie na tablecie: „Budżet” w poziomie to tabela na cały ekran.

##### Nowy telefon

Stary się zepsuł albo kupiłeś nowy — lata budżetu przechodzą w kilka minut. To ten sam scenariusz: nowy telefon jest drugim urządzeniem.

Urządzenia łączy chmura: Google Drive, Dropbox albo WebDAV (Nextcloud, ownCloud, pCloud, własny serwer). Każde urządzenie wysyła tam swoje zmiany i odbiera cudze. Jak to działa w szczegółach — w artykule [„Chmura i kopie zapasowe”](#sync).

### Na pierwszym urządzeniu {#scenario-devices-first}

Na tym, na którym już prowadzisz budżet.

1. „Ustawienia”, sekcja „Synchronizacja” → „Autoryzacja”.
2. Zaloguj się do chmury. Do Google Drive — kontem Google, którego użyjesz też na innych urządzeniach. Do Dropbox — loginem i hasłem Dropbox, a nie przez Google. Będzie komputer z Windows? Wybierz Google Drive: wersja na Windows nie łączy się z innymi chmurami.
3. Chcesz zamknąć dane w chmurze hasłem? — „Ustaw hasło” w bloku „Szyfrowanie chmury”. Zapisz hasło: nikt go nie odzyska.
4. Wróć na ekran „Przegląd” i naciśnij ikonę synchronizacji w prawym górnym rogu. Budżet trafi do chmury.

[Ekran Autoryzacja: Szyfrowanie chmury, Google Drive, Dropbox, WebDAV]
„Autoryzacja” — tu podłącza się chmurę. Każda chmura w szczegółach — w artykule [„Chmura i kopie zapasowe”](sync.md#auth).

### Na drugim urządzeniu {#scenario-devices-second}

##### Aplikacja dopiero zainstalowana

1. W kreatorze pierwszego uruchomienia wybierz „Mam już budżet”.
2. Otworzy się „Wczytaj budżet z chmury”. Podłącz **tę samą** chmurę **tym samym** kontem.
3. Wybierz budżet z listy i naciśnij „Wczytaj budżet”.
4. Jeśli na pierwszym urządzeniu ustawiono hasło, ustaw tutaj takie samo.
5. Sprawdź walutę: „Ustawienia” → „Waluta budżetu”. Szczegóły — [niżej](#scenario-devices-per-device).

[Ekran Wczytaj budżet z chmury: krok 1 Podłącz chmurę, krok 2 Nazwa budżetu]
„Wczytaj budżet z chmury” — najpierw chmura, potem budżet z listy.

##### Aplikacja już zainstalowana, z własnym budżetem

„Ustawienia”, sekcja „Synchronizacja” → „Wczytaj budżet z chmury” — dalej te same kroki. Albo dotknij nazwy budżetu w nagłówku ekranu „Przegląd” — tam też jest „Wczytaj budżet z chmury”.

*Jak to działa:*
Jeśli budżet o tej samej nazwie ma już na tym urządzeniu własne dane, przy pierwszej synchronizacji aplikacja zapyta, czy to jeden budżet, czy dwa różne: „Z chmury” albo „Scal”. Więcej w artykule [„Chmura i kopie zapasowe”](#sync-trouble).

### Co jest wspólne, a co każde urządzenie trzyma u siebie {#scenario-devices-per-device}

Synchronizują się **dane budżetu**. Ustawienia wyglądu i bezpieczeństwa — nie: każde urządzenie ma własne.

| Wspólne na wszystkich urządzeniach | Osobne na każdym urządzeniu |
|---|---|
| Konta, ich ikony i kolory | Język i formaty |
| Kategorie i grupy, notatki kategorii | Wygląd: styl, motyw, czcionka, zaokrąglenia |
| Transakcje, tagi, odbiorcy | PIN i logowanie odciskiem palca |
| Kwoty odłożone według miesięcy, cele i wiersze „Lista” | Hasło chmury — ale musi być takie samo |
| Płatności zaplanowane | Przypomnienia |
| Zdjęcia i PDF — jeśli włączone „Synchronizuj zdjęcia” | Harmonogram kopii zapasowych |
| | **Waluta budżetu** |

##### Waluta budżetu — sprawdź na każdym urządzeniu

Symbol waluty budżetu mieszka na urządzeniu i nie trafia do chmury. Wczytany budżet dostaje walutę budżetu, który już był na tym urządzeniu — zwykle według kraju telefonu. Kwoty się nie zmieniają, tylko symbol obok nich. Zły symbol? — „Ustawienia” → „Waluta budżetu”.

##### Zdjęcia paragonów

Zaraz po instalacji zdjęcia zostają na urządzeniu, na którym je zrobiono. Żeby pojawiły się wszędzie, włącz „Synchronizuj zdjęcia” na ekranie „Synchronizacja” — na **każdym** urządzeniu.

### Na co dzień {#scenario-devices-daily}

##### Ręcznie synchronizować rzadko trzeba

Aplikacja synchronizuje się sama — kilka sekund po każdym otwarciu. Liczba na ikonie synchronizacji na ekranie „Przegląd” to ile Twoich zmian jeszcze nie poszło do chmury.

##### Zapisałeś zakup i chowasz telefon

Zminimalizowanej aplikacji Android nie pozwala dalej pracować, więc zmiany pójdą przy następnym otwarciu. Jeśli zaraz siadasz do komputera, naciśnij ikonę synchronizacji na telefonie — wtedy zakup już tam będzie.

##### Kolor ikony synchronizacji

Mignęła na zielono — wszystko w porządku. Na czerwono — nie wyszło; jedna porażka zwykle oznacza po prostu brak sieci. Jeśli ikona zostaje czerwona, synchronizacja nie udała się kilka razy z rzędu — otwórz ekran „Synchronizacja”, tam jest napisane, co się stało.

### Częste błędy {#scenario-devices-mistakes}

| Co się stało | Dlaczego i co zrobić |
|---|---|
| Na drugim urządzeniu nie ma zmian z pierwszego | Urządzenia zalogowały się do chmury **różnymi** kontami — każde pisze do swojej chmury. Zaloguj się wszędzie jednym kontem. |
| „Chmura jest chroniona hasłem” | Hasło jest ustawione na jednym urządzeniu, a na drugim nie ma go albo jest inne. Ustaw **to samo**. |
| Zdjęcia przyszły, ale się nie otwierają | To samo: hasło na urządzeniach się różni. |
| Zmieniłem nazwę budżetu — drugie urządzenie przestało widzieć zmiany | Nazwa budżetu to adres jego folderu w chmurze. Po zmianie nazwy nadaj budżetowi dokładnie taką samą nazwę na pozostałych urządzeniach. |
| „Konflikt” | Ten sam zapis zmieniono na dwóch urządzeniach przed synchronizacją. Karta pokazuje obie wersje — wybierz właściwą. |

### Bez chmury {#scenario-devices-no-cloud}

Nie chcesz chmury? Budżet można przenieść między własnymi urządzeniami bezpośrednio: plikiem albo przez Wi-Fi w tej samej sieci. To jednorazowe przeniesienie, a nie stała synchronizacja: zmiany trzeba będzie przenosić ponownie. Dobre na przeprowadzkę na nowy telefon. Więcej w artykule [„Chmura i kopie zapasowe”](#sync-local).

## We dwoje lub więcej w jednym budżecie {#scenario-together}

Rodzina ze wspólnymi pieniędzmi: płacą oboje, zapisują oboje, oboje widzą, ile zostało w każdej kopercie. Jak dogadać się z aplikacją i ze sobą nawzajem, żeby nie było zamieszania ani dubli.

*„Ustawienia”, sekcja „Synchronizacja”*

### Dla kogo {#scenario-together-who}

Pieniądze są wspólne: wypłaty idą do jednej puli, a czynsz, jedzenie i urlop są z niej opłacane. Każdy płaci swoją kartą albo gotówką, ale koperty są wspólne: oboje widzą „Zakupy spożywcze”, a kto pierwszy dojdzie do limitu, ten zobaczy czerwień.

Jeśli każde z was ma też własne pieniądze, których drugie nie powinno widzieć, zajrzyj do scenariusza [„Para: wspólne wydatki i własne pieniądze”](#scenario-couple).

### Ustawienie {#scenario-together-setup}

Technicznie to ten sam budżet na kilku urządzeniach — kroki są w scenariuszu [„Jeden budżet na kilku urządzeniach”](#scenario-devices). Różnica jest jedna i ważna.

##### Osobne konto w chmurze — tylko dla budżetu

Wszystkie urządzenia muszą logować się do chmury **jednym** kontem. Ale logowanie się na prywatne konto Google męża na telefonie żony to zły pomysł: telefon zacznie synchronizować jego kontakty, zdjęcia i pocztę.

Załóż **nowe** konto Google — tylko dla budżetu — i nim loguj się do chmury aplikacji na każdym urządzeniu. Prywatne konta każdy zachowuje swoje. Z Dropbox tak samo: osobny Dropbox, logowanie loginem i hasłem.

##### Jedno hasło chmury dla wszystkich

Jeśli ustawiasz hasło, ustaw **to samo** na każdym telefonie. Hasło się nie synchronizuje: wpisuje się je na każdym urządzeniu ręcznie.

### Kto za co płacił {#scenario-together-whose}

Aplikacja nie pamięta, na którym telefonie zapisano transakcję. Wydatki rozróżnia **konto**.

##### Konto dla każdej osoby

Daj każdemu własne konta: „Karta Oli”, „Karta Piotra”, „Gotówka Oli”. Na którym koncie zapisano zakup, ta osoba płaciła. Każde z was uzgadnia salda kont ze swoim bankiem — „Uzgodnienie salda” w artykule [„Konta”](#accounts).

Czyje wydatki w tym miesiącu — „Transakcje” → „⋮” → „Filtr”, filtr według konta.

##### Jeśli potrzebne „kto komu ile”

We wspólnym budżecie zwykle nie: pieniądze i tak są wspólne. Ale jeśli umówiliście się dzielić coś na pół — tag z włączonym „Rozliczenie” na tych zakupach pokaże, kto komu ile winien. Więcej w artykule [„Odbiorcy i tagi”](#payees-tags).

### Rozdysponowanie pieniędzy {#scenario-together-assign}

Dzielić wypłatę między koperty łatwiej jednej osobie — albo dwóm przy jednym ekranie.

##### Dlaczego nie każdy ze swojego telefonu

Jeśli oboje jednocześnie zmienicie, ile odłożono w tej samej kategorii, wygra ta zmiana, która ostatnia dotarła do chmury — albo aplikacja pokaże „Konflikt” i poprosi o wybór. Kwota w kopercie może nie być tą, na którą się umówiliście.

Umówcie się, kto rozdysponowuje. Przed rozpoczęciem otwórz aplikację i daj jej kilka sekund na synchronizację — żeby widzieć ostatnie wydatki drugiej osoby.

##### Co widzą oboje

„Nierozdysponowane”, saldo każdej koperty, „Przekroczenie” i „Kończy się” na ekranie „Przegląd” są wspólne. Jeśli „Zakupy spożywcze” zżółkną, oboje to widzą i rozmawiacie o tych samych liczbach.

### Płatności zaplanowane {#scenario-together-scheduled}

Czynsz i subskrypcje są wspólne, a termin przychodzi na oba telefony.

##### Potwierdza jedna osoba

Jeśli dwie osoby naciśną „Potwierdź” przy tej samej płatności, zanim telefony się zsynchronizują, transakcja zapisze się **dwa razy**. Umówcie się, kto potwierdza płatności zaplanowane, albo dajcie aplikacji się zsynchronizować przed potwierdzeniem. Zbędną transakcję usuń na ekranie „Transakcje”.

Przypomnienia o terminie przychodzą na oba telefony — temu, kto je włączył. Każdy ustawia je na swoim telefonie: „Ustawienia” → „Przypomnienia”.

### Na co dzień {#scenario-together-daily}

##### Zapisałeś? Synchronizuj

Aplikacja synchronizuje się przy otwarciu, a nie przy minimalizowaniu. Zapisałeś duży zakup i wiesz, że druga osoba zaraz zajrzy do budżetu? Naciśnij ikonę synchronizacji na ekranie „Przegląd”.

##### Wieczorne przypomnienie liczy was oboje

„Przypominaj o dodaniu wydatków” milczy, jeśli w budżecie są już dzisiejsze wydatki — także wpisane przez drugą osobę i przywiezione synchronizacją. Jeśli chcecie, żeby przypominało każdemu, niech każdy zapisuje swoje wydatki tego samego dnia.

##### „Ostatnie transakcje” są wspólne

Na ekranie „Przegląd” widzisz, co kupiła druga osoba: jej zakupy pojawiają się tam po synchronizacji.

### Częste błędy {#scenario-together-mistakes}

| Co się stało | Dlaczego i co zrobić |
|---|---|
| Na jednym telefonie jest więcej wydatków niż na drugim | Telefony zalogowały się do chmury różnymi kontami — to dwie różne chmury. Logujcie się wszędzie jednym, osobnym kontem dla budżetu. |
| Transakcja pojawiła się dwa razy | Wpisaliście ją oboje: na przykład wspólny paragon zapisał i ten, kto płacił, i ten, kto niósł torby. Umówcie się: zapisuje ten, czyja była karta. |
| Płatność zaplanowana zapisała się dwa razy | Oboje nacisnęli „Potwierdź”. Usuń zbędną transakcję; odtąd potwierdza jedna osoba. |
| „Chmura jest chroniona hasłem” na jednym telefonie | Na jednym telefonie ustawiono hasło, a na drugim nie ma go albo jest inne. Ustawcie to samo. |
| Symbol waluty różni się u was dwojga | Waluta budżetu mieszka na urządzeniu. Popraw ją w „Ustawienia” → „Waluta budżetu”. |

## "Para: wspólne wydatki i własne pieniądze" {#scenario-couple}

Każde z was ma własną pensję i własne wydatki, a mieszkanie, jedzenie i urlop dzielicie na pół. Jak to prowadzić w aplikacji dziś, czego ona jeszcze nie umie i jak rozliczać się raz w miesiącu.

*tag „wspólne” w formularzu transakcji i blok „Moje tagi” na ekranie „Przegląd”*

### Co działa dziś {#scenario-couple-today}

Chciałoby się tak: wspólny budżet „Nasz dom”, który prowadzicie oboje, plus osobisty dla każdego, którego drugie nie widzi. Przez jedną wspólną chmurę to **nie zadziała** — dlaczego, jest niżej. Ale zadziała, jeśli wspólny budżet przekazujecie sobie przez Wi-Fi w domu.

##### Dlaczego

Telefon loguje się do chmury jednym kontem, a każdy budżet na tym telefonie synchronizuje się z tą chmurą. Hasło chmury też jest jedno na telefon, a nie na budżet. Dlatego wspólny budżet we wspólnej chmurze i osobisty, ukryty przed partnerem, nie zamieszkają na jednym telefonie: osobisty trafiłby tam, gdzie wspólny.

Działają trzy sposoby.

##### Budżety osobiste i tag „wspólne”

Każde ma własny budżet — nikt nie widzi cudzych pieniędzy. Wspólne wydatki oznacza się tagiem, a raz w miesiącu porównujecie i wyrównujecie. Szczegóły — [niżej](#scenario-couple-tag).

##### Dwa budżety, wspólny przez Wi-Fi

Na każdym telefonie jest własny budżet i wspólny „Nasz dom”. Każde z was ma własną chmurę, a wspólny budżet przekazujecie sobie przez Wi-Fi w domu. Szczegóły — [niżej](#scenario-couple-wifi).

##### Jeden wspólny budżet na dwoje

Wszystkie pieniądze w jednym budżecie, osobiste — jako osobne kategorie. Oboje widzą wszystko. Dobre, jeśli nie macie przed sobą tajemnic. Szczegóły — [niżej](#scenario-couple-all-shared).

### Sposób z tagiem „wspólne” {#scenario-couple-tag}

Każde ma własny budżet na swoim telefonie: z własną chmurą albo bez chmury. Wspólne wydatki każde zapisuje w swoim budżecie jak zwykle i stawia na nich tag.

##### Jak ustawić — każde na swoim telefonie

1. Załóż kategorię na swoją część wspólnych wydatków — na przykład „Rodzina” w grupie „Wydatki stałe”. Co miesiąc wkładaj do niej tyle, ile umówiliście się dokładać do wspólnej puli.
2. Zapłaciłeś za coś wspólnego — zakupy do domu, rachunki? Zapisz zakup w tej kategorii.
3. W polu „Tagi” utwórz tag „wspólne” i stawiaj go na każdym takim zakupie.
4. Na ekranie „Przegląd”, w bloku „Moje tagi” → „⋮” → „Wybierz tagi…”, zaznacz „wspólne”, a okres ustaw na „Suma za ten miesiąc”.

*Dlaczego jedna kategoria, a nie „Zakupy spożywcze” i „Media i rachunki”:*
Osobisty budżet odpowiada na pytanie „ile wydaję ja”. Twoja część wspólnego domu to jedna pozycja, jak czynsz: „Rodzina”. Jeśli chcesz widzieć, na co idą wspólne pieniądze, otwórz ekran tagu „wspólne”: jest tam „Według kategorii”. Wtedy zapisuj wspólne wydatki w zwykłych kategoriach, a tag je zbierze.

### Koniec miesiąca: kto komu ile {#scenario-couple-month}

1. Każde z was sprawdza w „Moje tagi”, ile wydało na „wspólne” w tym miesiącu.
2. Dodajcie obie kwoty i podzielcie na pół — to część każdego.
3. Kto wydał mniej niż swoja część, przelewa różnicę drugiemu.

**Przykład.** Ola wydała na wspólne 3600 zł, Piotr — 2400 zł. Razem 6000 zł, więc część każdego to 3000 zł. Piotr przelewa Oli 600 zł.

##### Jak zapisać przelew

- **Piotr** — wydatek 600 zł w kategorii „Rodzina” z tagiem „wspólne”: to też jego wkład do wspólnej puli.
- **Ola** — przychodzące 600 zł od Piotra do tej samej kategorii „Rodzina”, z tym samym tagiem: pieniądze wróciły do koperty. Jak zapisać zwrot do kategorii — w artykule [„Formularz transakcji”](#entry).

W bloku „Moje tagi” u Piotra wyjdzie 3000 zł. U Oli zostanie 3600 zł: blok liczy tylko wydatki. Jej 3000 zł są na ekranie tagu „wspólne”: „Otrzymano” 600 zł i „Netto” 3000 zł.

Porównujcie według bloku „Moje tagi” **przed** przelewem — po nim liczby są już wyrównane.

*A „Rozliczenie” na tagu?:*
„Rozliczenie” liczy „wydano minus otrzymano” w **Twoim** budżecie — jest dobre, gdy dzielisz wydatek z kimś, kto nie pisze do Twojego budżetu: wyjazd z przyjaciółmi, wspólny prezent. Dla pary z dwoma budżetami pokazuje tylko Twoją połowę obrazu: wkładu drugiej osoby w Twoim budżecie nie ma. Dlatego tu porównujcie według bloku „Moje tagi”. O funkcji „Rozliczenie” — w artykule [„Odbiorcy i tagi”](#payees-tags).

### Dwa budżety, wspólny przez Wi-Fi {#scenario-couple-wifi}

Na każdym telefonie są dwa budżety: własny i wspólny „Nasz dom”. Każde z was ma własną chmurę — własne konto, własne hasło. Oba budżety trafiają do chmury właściciela telefonu, a druga osoba ich tam nie widzi. Przekazujecie sobie tylko „Nasz dom” — przez Wi-Fi, gdy oboje jesteście w domu.

##### Jak ustawić

1. Każde z was podłącza chmurę na swoim telefonie swoim kontem, jak zwykle.
2. Ola tworzy budżet „Nasz dom”: dotknij nazwy budżetu w nagłówku ekranu „Przegląd” — tam jest lista budżetów i nowy budżet. Piotr tworzy na swoim telefonie pusty budżet o tej samej nazwie.
3. Za pierwszym razem Piotr odbiera „Nasz dom” od Oli przez Wi-Fi (jak — niżej) i wybiera „Zastąp całkowicie”: jego pusty budżet staje się kopią budżetu Oli.

##### Wymiana w domu

1. **Oboje otwórzcie „Nasz dom”.** Wymiana odbywa się między otwartymi budżetami.
2. „Ustawienia” → „Przesyłanie lokalne”. Ola: „Uruchom serwer”. Piotr: „Zeskanuj QR” → „Odbierz dane” → „Scal”.
3. Ola: „Zatrzymaj serwer”.

Wymiana idzie w obie strony: Piotr dostaje zmiany Oli, a jego zmiany idą do Oli — i transakcje, i zdjęcia paragonów. Nie ma znaczenia, kto z was wysyła, a kto odbiera.

**„To chyba inny budżet” — naciśnij „Anuluj”.** Jeśli ktoś z was ma otwarty własny budżet zamiast budżetu „Nasz dom”, oba budżety nie mają wspólnych kont ani transakcji, i aplikacja pyta przed scaleniem. „Kontynuuj mimo to” wlałoby osobiste wydatki do wspólnego budżetu, a rozdzielić ich z powrotem nie będzie jak.

*A jeśli budżety jednak się scaliły?:*
Ręcznie ich nie rozdzielisz, ale oba można cofnąć do automatycznej kopii zapasowej — aplikacja robi je sama, domyślnie co 5 dni. Wymiana idzie w obie strony, więc zepsute są dwa budżety: osobisty Piotra (wszedł do niego „Nasz dom”) i „Nasz dom” Oli (weszły do niego osobiste wydatki Piotra). Każde naprawia swój na swoim telefonie.

1. Otwórz zepsuty budżet. „Ustawienia” → „Kopie zapasowe”.
2. Znajdź kopię **tego** budżetu (jego nazwa jest w wierszu kopii) z datą **sprzed** wymiany. Naciśnij ikonę zegara ze strzałką → „Przywróć”. Potem **nie naciskaj „Synchronizuj”**: scalony budżet wciąż jest w chmurze.
3. Usuń plik synchronizacji tego budżetu w swojej chmurze — jak w artykule [„Chmura i kopie zapasowe”](#sync-rollback), kroki 2–4. Każde z was ma własną chmurę i tylko Twój telefon zapisuje tam ten budżet, więc część o kilku urządzeniach Cię nie dotyczy.
4. Zmiany zrobione po kopii przepadną. Wspólne da się odzyskać: gdy Ola cofnie „Nasz dom”, wymieńcie się jeszcze raz, oboje w budżecie „Nasz dom”, a wspólne zmiany wrócą do niej z budżetu „Nasz dom” Piotra — jego kopia jest czysta. Osobiste wydatki wpisane po kopii trzeba będzie zapisać ponownie.

Przed pierwszą wymianą warto zrobić kopie ręcznie — każde na swoim telefonie i **obu** budżetów: kopia robi się dla otwartego budżetu. Otwórz własny budżet → „Kopie zapasowe” → „Utwórz kopię teraz”, potem otwórz „Nasz dom” i powtórz. Wtedy cofniesz się nie do automatycznej kopii sprzed pięciu dni, tylko do stanu tuż przed wymianą.

*Czy hasło chmury musi się zgadzać?:*
Nie. Przesyłanie przez Wi-Fi jest szyfrowane kodem potwierdzenia z ekranu wysyłającego telefonu; hasło kopii zapasowych w nim nie uczestniczy. Hasło w bloku „Szyfrowanie chmury” zamyka tylko **Twoją** chmurę. Musi być takie samo tylko wtedy, gdy dwa telefony piszą do jednej chmury — a tu chmury są różne.

*A jeśli zmienialiście coś poza domem?:*
Każde z was trzyma „Nasz dom” na swoim telefonie: zapisz zakup w sklepie, a od razu jest w Twojej kopii i Twojej chmurze. Wymieńcie się w domu — i oboje mają wszystko. Jeśli na jednym telefonie jest jeszcze starsza wersja aplikacji, zmiany odbierającego nie pójdą z powrotem — aplikacja o tym powie; wtedy wymieńcie się jeszcze raz, zamieniając się rolami. Jeśli oboje zmieniliście tę samą transakcję, zostaje późniejsza zmiana, jak przy zwykłej synchronizacji.

Cena: wspólny budżet jest zgodny dopiero wtedy, gdy oboje jesteście w domu i się wymieniliście.

### Jeden wspólny budżet na dwoje {#scenario-couple-all-shared}

Jeśli osobistych tajemnic nie ma, najprościej trzymać wszystko razem — wtedy widzicie cały obraz i jedno „nierozdysponowane” na dwoje.

- Ustawienie — jak w scenariuszu [„We dwoje lub więcej w jednym budżecie”](#scenario-together): osobne konto w chmurze dla budżetu, zalogowane na obu telefonach.
- Osobiste pieniądze — jako własne kategorie: „Osobiste Oli”, „Osobiste Piotra”. Co miesiąc trafia do nich umówiona kwota; jak ją wydać — decyduje właściciel.
- Konta — każde ma własne: „Karta Oli”, „Karta Piotra”. Tak widać, kto płacił.

Cena: oboje widzicie wszystko — i wydatki z kategorii osobistych, i salda kart.

### Czego jeszcze nie ma {#scenario-couple-not-yet}

Wspólnego budżetu, który sam synchronizuje się przez chmurę u was obojga, obok osobistych ukrytych przed partnerem, i przeniesienia wspólnego wydatku z osobistego budżetu do wspólnego jednym dotknięciem — jeszcze nie ma. Zrobimy to, gdy będzie potrzebne. Jeśli to o Tobie, napisz na „Czat na Telegramie” („Ustawienia”, sekcja „Pomoc i kontakt”): im więcej takich wiadomości, tym szybciej.

## Freelance i nieregularne dochody {#scenario-freelance}

Pieniądze przychodzą, kiedy zapłaci klient: raz uczta, raz post. Jak przy takich dochodach przestać żyć od przelewu do przelewu, odkładać na podatki i wiedzieć, ile naprawdę zarabiasz.

*„Budżet”, „Przegląd”, „Raporty” — wszystko niżej*

### Główna idea {#scenario-freelance-idea}

Przy pensji miesiąc jest przewidywalny: wypłata 5-go, wystarcza do następnego 5-go. Freelancer nie zna z góry dochodu miesiąca — więc nie da się planować od niego. Planuj od pieniędzy, które **już masz**.

##### Wydawaj to, co zarobiłeś wcześniej

Miesiąc żyje z tego, co przyszło wcześniej. To, co przychodzi teraz, pracuje na następny miesiąc. [Jak](#scenario-freelance-last-month).

##### Wygładzaj poduszką

Dobry miesiąc dosypuje do rezerwy, chudy z niej bierze. [Jak](#scenario-freelance-buffer).

##### Odkładaj podatek od razu

Procent z każdej wpłaty idzie do własnej koperty, zanim pieniądze się rozejdą. [Jak](#scenario-freelance-taxes).

### Wydawaj pieniądze z poprzedniego miesiąca {#scenario-freelance-last-month}

Zapisuj każdą wpłatę nie na ten miesiąc, tylko na **następny**. Wtedy 1-go cały miesiąc jest już opłacony zarobionymi pieniędzmi, a dzielisz je między koperty raz — a nie po kawałku po każdej wpłacie.

##### Jak zapisać wpłatę

1. „+ Transakcja” → „+ Przychodzące”, odbiorca — klient, kwota.
2. Dotknij pola „Kategoria” — otworzy się „Gdzie zaksięgować przychód”.
3. Wybierz „Przychód na grudzień” zamiast „Przychód na listopad”. Zapisz.

Data transakcji zostaje prawdziwa. Zmienia się tylko miesiąc budżetu, w którym pojawią się pieniądze.

##### Od czego zacząć

W pierwszym miesiącu trzeba będzie i wydawać to, co jest, i odkładać na następny. Zacznij od wpłaty, której jeszcze nie rozdysponowałeś. Dopóki nie uzbiera się na miesiąc do przodu, kładź na następny miesiąc choć część: ile już tam jest, aplikacja pokazuje w „Budżet miesiąca” na ekranie „Przegląd” — linijka „Budżet grudnia”.

Cel — „Wiek pieniędzy” 30 dni lub więcej: znaczy, że wydajesz pieniądze z poprzedniego miesiąca. Więcej w artykule [„Przegląd”](#overview-age-month).

### Poduszka na chude miesiące {#scenario-freelance-buffer}

Nawet z pieniędzmi na miesiąc do przodu zdarzają się dwa chude miesiące z rzędu. Poduszka to koperta, która przez nie przeprowadzi.

##### Jak ustawić

1. Kategoria „Na czarną godzinę” — albo własna, „Poduszka”.
2. Cel „Saldo”: kwota to zwykłe wydatki z 3–6 miesięcy. Ile to jest — „Średni dochód miesięcznie” i „Trend wydatków”, niżej.
3. W dobrym miesiącu wkładaj do poduszki wszystko ponad zwykłe.

Cel „Saldo” pilnuje, żeby rezerwa nie topniała: wydasz część — aplikacja poprosi, by ją oddać. Więcej w artykule [„Cele”](#goals-balance).

##### Chudy miesiąc

Na koperty nie wystarczyło, wydatki weszły na minus. Naciśnij czerwoną kwotę na ekranie „Budżet” → „Pokryj z innej kategorii” → w wierszu „Na czarną godzinę” „Weź …”. Pieniądze przejdą z poduszki tam, gdzie jest minus. Więcej w artykule [„Budżet”](#budget-screen).

### Podatki — od razu do własnej koperty {#scenario-freelance-taxes}

Podatek od wpłaty łatwo wydać: pieniądze są na karcie, a podatek płaci się za kwartał.

##### Cel „% dochodu”

1. Kategoria „Podatki”.
2. Cel „% dochodu” — procent, który płacisz. Pod procentem zostaw „Od dochodu z tego miesiąca”: podatek liczy się od pieniędzy, które przyszły, a nie od średniej.
3. Każda wpłata sama aktualizuje cel: przyszło więcej — cel urósł, a „jeszcze …” mówi, ile dołożyć.

Odłożone zbiera się w kopercie do terminu płatności: plus przechodzi z miesiąca na miesiąc. Więcej w artykule [„Cele”](#goals-percent).

*Jeśli zapisujesz przychód na następny miesiąc:*
Wtedy cel „% dochodu” tego miesiąca jest znany już 1-go: dochód miesiąca przyszedł w poprzednim. Wygodnie — podatek odkładasz od razu, razem z pozostałymi kopertami.

### Przyszły pieniądze — podziel je jednym dotknięciem {#scenario-freelance-income}

Dzielić każdą wpłatę ręcznie męczy. Automatyczne rozdysponowanie „Według procentów” zrobi to za Ciebie.

##### Ustaw raz

1. Na ekranie „Budżet” dotknij „nierozdysponowane” w nagłówku — otworzy się „Automatyczne rozdysponowanie budżetu”.
2. „Według procentów” → „Ustaw procenty”: na przykład „Podatki” — 5%, „Na czarną godzinę” — 20%, „Inwestycje” — 10%.
3. Procenty są zapamiętywane. To, czego procenty nie objęły, zostaje w „nierozdysponowane” — rozdysponuj to do kopert miesiąca sam.

Odtąd: przyszły pieniądze — dotknij „nierozdysponowane” → „Według procentów”. Aplikacja podzieli dokładnie to, co jest nierozdysponowane w tej chwili.

*Dlaczego procenty, a nie kwoty:*
Przy nieregularnych dochodach stała kwota raz jest niemożliwa, a raz śmieszna. Procent rośnie i maleje razem z dochodem. Zaokrąglanie — chipy „Do całych”, „Do 10”, „Do 100” na tym samym arkuszu.

### Klienci i projekty {#scenario-freelance-clients}

##### Klient to odbiorca

Zapisuj każdą wpłatę z klientem w polu „Odbiorca”. Dotknij klienta w „Ustawienia” → „Odbiorcy” — otworzy się jego ekran: „Trendy wpływów” pokazują, ile płaci średnio, a okres „Rok” — wszystkie jego wpłaty za rok. Widać, kto Cię karmi, a kto płaci dwa razy w roku. Więcej w artykule [„Odbiorcy i tagi”](#payees-tags-payee).

##### Projekt to tag

Utwórz tag projektu: „strona kawiarni”. Stawiaj go i na wpłacie klienta, i na kosztach projektu: subskrypcja usługi, taksówka na spotkanie, czcionka. Ekran tagu pokaże „Wydano”, „Otrzymano” i „Netto” — ile projekt naprawdę przyniósł. Więcej w artykule [„Odbiorcy i tagi”](#payees-tags).

### Oczekiwane wpłaty {#scenario-freelance-expected}

Faktura wystawiona, pieniądze obiecano do 15-go. Żeby nie zapomnieć i widzieć, co nadchodzi, utwórz płatność zaplanowaną.

1. „Ustawienia” → „Płatności zaplanowane” → „+ Płatność”.
2. „+ Przychodzące”, klient, kwota, obiecana data zapłaty, „Powtarzaj” — „Jednorazowo”.
3. Płatność pojawi się w „Co przed nami” i w „Kalendarz” na ekranie „Przegląd”.
4. Pieniądze przyszły w terminie — „Potwierdź” na ekranie potwierdzenia. Wcześniej — przesuń wiersz płatności w lewo — „Zapisz”. Klient się spóźnia — otwórz płatność i zmień pole „Data”.

Dopóki płatność nie jest potwierdzona, nie ma jej w budżecie: obiecanymi pieniędzmi koperty się nie napełniają. Więcej w artykule [„Płatności zaplanowane”](#scheduled).

### Na co patrzeć {#scenario-freelance-reports}

| Gdzie | Co mówi |
|---|---|
| „Przegląd” → „Budżet miesiąca” | „Średni dochód miesięcznie” z 12 miesięcy i „Budżet grudnia” — ile już masz na następny miesiąc. |
| „Przegląd” → „Wiek pieniędzy” | 30 dni lub więcej — żyjesz z pieniędzy poprzedniego miesiąca. |
| „Przegląd” → „Wydatki miesiąca” | Czy wydajesz teraz więcej niż zwykle. |
| „Raporty” → „Przychody i wydatki” | Tabela według miesięcy: przychody według źródeł — każdy klient ma własny wiersz — wydatki według grup i „Stopa oszczędności”. Widać i sezonowość, i kto ile płaci. |
| „Raporty” → „Trend wydatków” | Twoje zwykłe miesięczne wydatki — podstawa do wielkości poduszki. |
| „Raporty” → „Przepływ pieniędzy” | Dokąd poszły zarobione pieniądze za okres — i ile zostało. |
| „Raporty” → „Wiek pieniędzy” | Jak rośnie Twój zapas czasu miesiąc po miesiącu. |

Więcej o raportach w artykule [„Raporty”](#reports).

### Firmowe pieniądze osobno {#scenario-freelance-business}

Jeśli praca ma własne konto i własne wydatki — usługi, sprzęt, księgowa — można je prowadzić w **drugim budżecie**, na przykład „Praca”. Dotknij nazwy budżetu w nagłówku ekranu „Przegląd” — tam jest przełącznik budżetów i nowy budżet.

W budżecie firmowym są wpłaty i wydatki firmowe. To, co bierzesz na życie, idzie przelewem na osobistą kartę: w budżecie firmowym to wydatek, w osobistym — przychód. Wtedy budżet osobisty żyje co miesiąc z równej kwoty, a wszystkie wzloty i spadki zostają w firmowym.

## Od wypłaty do wypłaty {#scenario-paycheck}

Pieniądze kończą się przed końcem miesiąca, a do wypłaty jeszcze tydzień. Jak podzielić to, co jest, dociągnąć do następnej wypłaty bez czerwieni i krok po kroku wyrwać się z kołowrotka.

*„Budżet”, „Przegląd” i ekran kategorii — wszystko niżej*

### Główna idea {#scenario-paycheck-idea}

Koperty nie dadzą Ci więcej pieniędzy, niż masz. Ale pokażą **z góry**, czy wystarczy do wypłaty — nie ostatniego dnia, tylko pierwszego.

##### Rozdysponuj tylko to, co masz

Kopertę napełniają pieniądze, które już są na kontach. Obiecana wypłata to jeszcze nie pieniądze. [Jak](#scenario-paycheck-now).

##### Najpierw to, co niezbędne

Mieszkanie, jedzenie, dojazd do pracy, leki, rata kredytu. Wszystko inne potem. [Jak](#scenario-paycheck-now).

##### Minus to nie porażka

Przełóż pieniądze z innej koperty i jedź dalej. [Jak](#scenario-paycheck-minus).

### Dzień wypłaty — podziel od razu {#scenario-paycheck-now}

Dopóki pieniądze nie są podzielone, wydaje się, że jest ich dużo. Rozłożone do kopert mówią prawdę: 600 zł na jedzenie do 5-go i tyle.

##### Po kolei

1. Otwórz „Budżet”. Na górze jest „nierozdysponowane”: tyle pieniędzy wciąż nie ma zadania.
2. Najpierw napełnij koperty, bez których nie dotrwasz do następnej wypłaty: czynsz, rachunki, „Zakupy spożywcze”, dojazd do pracy, leki, minimalna rata kredytu.
3. Potem wszystko inne, aż „nierozdysponowane” dojdzie do zera.
4. Nie starcza na wszystko? Część kopert zostanie pusta. To nie błąd, tylko uczciwa odpowiedź: na to w tym miesiącu pieniędzy nie ma.

Jak włożyć pieniądze do koperty — krok po kroku w artykule [„Budżet”](#budget-screen).

*Chip zrobił się czerwony — „Rozdysponowano za dużo”:*
Rozdałeś więcej, niż masz na kontach. Zmniejsz odłożone w jednej z kopert — dotknij kwoty i wpisz mniej. Pieniądze wrócą do „nierozdysponowane”.

### Dwie wypłaty w miesiącu {#scenario-paycheck-two}

Pieniądze dwa razy w miesiącu — dzielisz dwa razy. Pierwsza wypłata idzie na to, co potrzebne do drugiej. Druga — na resztę i na to, co po niej.

##### Rachunki przed wypłatą — jako płatności zaplanowane

Utwórz płatności zaplanowane na czynsz, rachunki, telefon: „Ustawienia” → „Płatności zaplanowane” → „+ Płatność”. Pojawią się w bloku „Co przed nami” i w „Kalendarz” na ekranie „Przegląd”, a dzień przed terminem przyjdzie przypomnienie. Widać, które rachunki przypadają przed wypłatą, a które po niej — i co pokryć z pierwszej. Więcej w artykule [„Płatności zaplanowane”](#scheduled).

### Ile można wydać dziennie {#scenario-paycheck-until}

##### „≈ … dziennie”

Dotknij kategorii na ekranie „Budżet” — otworzy się jej ekran. Pod „Dostępne” jest, ile możesz wydawać każdego dnia do końca miesiąca, nie wchodząc na minus. Przy 420 zł w „Zakupy spożywcze” i dziesięciu dniach do końca miesiąca — „≈ 42,00 zł dziennie”. Więcej w artykule [„Ekran kategorii”](#category-screen).

##### „Kończy się” na ekranie „Przegląd”

W kopercie są jeszcze pieniądze, ale wydajesz szybciej, niż mija miesiąc — kategoria pojawia się na żółto w bloku „Kończy się”. To sygnał, by zwolnić teraz, a nie za tydzień. Więcej w artykule [„Przegląd”](#overview-blocks).

##### „Wydatki miesiąca”

Blok na ekranie „Przegląd”: czy w tym miesiącu wydajesz więcej niż zwykle do tego dnia.

### Czerwony minus {#scenario-paycheck-minus}

Wydałeś więcej, niż było w kopercie — kwota jest czerwona. Pokryj ją od razu, przed końcem miesiąca.

1. Naciśnij czerwoną kwotę na ekranie „Budżet”.
2. W arkuszu „Przekroczenie” naciśnij „Pokryj z innej kategorii”. Otworzy się „Skąd wziąć pieniądze”: „Nierozdysponowane” i każda koperta, w której są pieniądze.
3. Naciśnij „Weź …” obok koperty, którą możesz uszczuplić. Minus pokryty — „Przekroczenie pokryte!”.

Więcej w artykule [„Budżet”](#budget-screen).

*Minus dotrwał do końca miesiąca:*
Zeruje się, ale nie bez śladu: „nierozdysponowane” następnego miesiąca zmniejsza się o tę samą kwotę. Następna wypłata wychodzi mniejsza dokładnie o ten minus. Więcej w artykule [„Jak działa budżet”](#start-months).

*Kilka minusów, a w „nierozdysponowane” coś jest:*
Dotknij „nierozdysponowane” w nagłówku ekranu „Budżet” → „Pokryj wszystkie przekroczenia”. Aplikacja pokryje wszystkie minusy miesiąca z nierozdysponowanych pieniędzy za jednym razem.

### Karta kredytowa to nie wyjście {#scenario-paycheck-card}

Koperta pusta, a na karcie kredytowej jest limit. Pokusa zrozumiała, ale zakup kartą kredytową z pustej koperty to **żółty** minus: pieniędzy nie ma, a dług rośnie. W następnym miesiącu trzeba będzie go spłacić z nowej wypłaty — czyli znów będzie mniejsza. Więcej w scenariuszu [„Karty kredytowe i długi”](#scenario-credit-yellow).

### Zapisuj codziennie {#scenario-paycheck-daily}

Koperta mówi prawdę tylko wtedy, gdy wszystkie wydatki są w niej zapisane. Jeden zapomniany wczorajszy zakup — i „≈ … dziennie” Cię okłamuje.

- Wieczorne przypomnienie: „Ustawienia” → „Planowanie” → „Przypomnienia” → „Wydatki z dnia” → „Przypominaj o dodaniu wydatków”. Przychodzi tylko wtedy, gdy tego dnia nic nie wpisałeś. **Zaraz po instalacji:** wyłączone.
- Najszybciej zapisać przy kasie: [głosem](#voice) albo [skanerem paragonów](#receipt). Nie ma czasu wybrać kategorii? — [„Do skrzynki”](#entry-inbox), a wieczorem rozdziel.

### Jak wyrwać się z kołowrotka {#scenario-paycheck-out}

Cel to nie tylko wiązać koniec z końcem, ale kiedyś żyć z pieniędzy zarobionych miesiąc temu. Idź krok po kroku, po jednym.

(1)
##### Mała poduszka

Kategoria „Na czarną godzinę” z celem „Saldo” — na początek choćby na tydzień wydatków. Zepsuje się telefon — pieniądze wezmą się stąd, a nie z koperty na jedzenie. Więcej w artykule [„Cele”](#goals-balance).

(2)
##### Nieregularne wydatki — po trochu

Ubezpieczenie, prezenty i naprawa butów przestają rozwalać miesiąc, jeśli odkładasz na nie co miesiąc. Cel „Do daty” policzy ile. Więcej w scenariuszu [„Oszczędzanie na coś dużego”](#scenario-saving).

(3)
##### Pieniądze na miesiąc do przodu

Co miesiąc zostawiaj trochę ponad. Gdy uzbierasz cały miesiąc, zapisz wypłatę na następny miesiąc: „Kategoria” → „Przychód na grudzień”. Odtąd każdy miesiąc jest opłacony z góry, a dzień wypłaty przestaje mieć znaczenie.

Ile już masz na następny miesiąc — „Budżet miesiąca” na ekranie „Przegląd”, linijka „Budżet grudnia”. Jak idzie — „Wiek pieniędzy”: 30 dni lub więcej znaczy, że wyrwałeś się z kołowrotka. Więcej w artykule [„Przegląd”](#overview-age-month) i w artykule [„Jak działa budżet”](#start-ladder).

## Karty kredytowe i długi {#scenario-credit}

Karta kredytowa, kredyt na samochód, dług sprzed aplikacji. Jak je ustawić, jak płacić, żeby budżet nie kłamał, i jak patrzeć, jak dług maleje.

*„Konta”, „Budżet” → „Płatności kartami”, „Raporty” → „Dług na kartach” i „Majątek”*

### Karta kredytowa {#scenario-credit-card}

Zasada jest jedna: zakup kartą kredytową wydaje pieniądze z koperty tak samo jak zakup kartą debetową. Różnica w tym, gdzie te pieniądze czekają: nie na koncie, tylko w kategorii karty kredytowej, dopóki nie zapłacisz bankowi.

##### Jak ustawić

1. „Konta” → „⋮” → „Dodaj konto”.
2. Typ — „Karta kredytowa”. Nazwa — tak, jak nazywasz kartę.
3. Kwota — ile jesteś teraz winien bankowi. Wpisz ją i naciśnij „±”, żeby była ujemna.
4. Zapisz. Karta trafi do sekcji „Karty kredytowe”, a na ekranie „Budżet” w grupie „Płatności kartami” pojawi się kategoria o tej samej nazwie.

Tej kategorii nie ruszaj: aplikacja liczy w niej dług właśnie tej karty. Więcej w artykule [„Konta”](#accounts-screen).

##### Zakup

Zapisuj jak zwykle: konto — karta kredytowa, kategoria — to, co kupiłeś. Kupiłeś jedzenie za 105 zł — „Zakupy spożywcze” schudły o 105 zł, a te same 105 zł przeszły do kategorii karty kredytowej na spłatę. Sam niczego odkładać nie musisz.

### Dług sprzed startu {#scenario-credit-old-debt}

Dług początkowy — 2400 zł na karcie z zeszłego roku — aplikacja sama nie odkłada: w kopertach nigdy nie było na niego pieniędzy.

Odłóż na niego w kategorii karty kredytowej, jak w każdej kopercie: na ekranie „Budżet” dotknij jej kwoty i wpisz, ile dasz radę w tym miesiącu. Od razu całość albo po trochu — Twój wybór. Dopóki nie odłożysz, na spłatę pieniędzy nie ma.

### Żółty minus {#scenario-credit-yellow}

Wydałeś kartą kredytową więcej, niż było w kopercie — kwota zrobiła się **żółta**, z ikoną karty. Czerwona, z ikoną portfela, to minus z własnych pieniędzy.

##### Czerwony zjada Twoje pieniądze

Minus na karcie debetowej albo w gotówce. Na koniec miesiąca zmniejsza „nierozdysponowane” następnego miesiąca.

##### Żółty powiększa dług

Nie wydałeś pieniędzy — pożyczyłeś je. Do kategorii karty kredytowej trafiła tylko pokryta część; na resztę pieniędzy na spłatę nie ma.

##### Co zrobić

Żółty minus pokrywa się jak czerwony: dotknij kwoty → „Pokryj z innej kategorii” → „Weź …” z innej koperty. Wtedy pieniądze na spłatę dołożą się same. Nie dałeś rady? W następnym miesiącu włóż różnicę prosto do kategorii karty kredytowej.

### Spłata karty {#scenario-credit-payment}

Ile zapłacić bankowi, pokazuje kategoria karty kredytowej na ekranie „Budżet”: tyle jest już odłożone na spłatę.

1. „+ Transakcja”, konto — Twoja karta debetowa.
2. „Odbiorca” → sekcja „Przelewy” → Twoja karta kredytowa. Nagłówek formularza zrobi się szary, a kategoria nie jest potrzebna.
3. Kwota — ile płacisz. Zapisz.

Pieniędzy na karcie debetowej ubywa, długu na karcie kredytowej też, a razem z nim odłożonego w kategorii karty kredytowej. Koperty się nie zmieniają: wydałeś wcześniej, kiedy robiłeś zakupy. Więcej w artykule [„Formularz transakcji”](#entry-transfer).

*Spłacić całość czy minimalną kwotę:*
W kategorii karty kredytowej leży dokładnie tyle, ile wydałeś kartą ze swoich kopert. Spłacaj co miesiąc wszystko, co odłożone, a nowy dług się nie zbiera. Spłacisz tylko minimum — reszta zostanie w kategorii i poczeka; od pozostałego długu bank nalicza odsetki.

### Odsetki i opłaty karty {#scenario-credit-card-interest}

Bank naliczył odsetki albo opłatę za obsługę — to wydatek.

Zapisz wydatek: konto — karta kredytowa, odbiorca — bank, kategoria — własna, na przykład „Odsetki i opłaty”. Koperta się zmniejsza, a pieniądze na spłatę odkładają się, jak przy każdym zakupie. Widać to też w raportach: ile kosztuje Cię ten kredyt.

### Kredyt {#scenario-credit-loan}

Kredyt na samochód, hipoteka, raty — pieniądze, które już wydałeś i oddajesz w częściach.

##### Jak ustawić

1. „Konta” → „⋮” → „Dodaj konto”.
2. Typ — „Kredyt”. Kwota — ile zostało do spłaty według wyciągu z banku, ze znakiem minus („±”).
3. Konto trafi do sekcji „Długi”. Jest poza budżetem: te pieniądze nie mają kopert, a dług początkowy budżetu nie dotyka.

##### Koperta na ratę

Utwórz kategorię na miesięczną ratę — na przykład „Kredyty” w grupie „Wydatki stałe” — i cel „Co miesiąc” na kwotę raty. Co miesiąc cel przypomni, żeby odłożyć pieniądze. Więcej w artykule [„Cele”](#goals-monthly).

### Rata kredytu {#scenario-credit-loan-payment}

1. „+ Transakcja”, konto — karta, z której płacisz.
2. „Odbiorca” → „Przelewy” → konto kredytu.
3. Kredyt jest poza budżetem, więc aplikacja pyta o kategorię: wybierz „Kredyty”. Pieniądze wychodzą z koperty, a dług na koncie kredytu maleje.

*Bank pisze, że 240 zł raty to odsetki:*
Całą ratę zapisz jednym przelewem, jak wyżej. A raz w miesiącu zapisz odsetki na samym koncie kredytu: „Wychodzące”, konto — kredyt, odbiorca — bank, kwota — odsetki. Kategoria nie jest potrzebna: konto jest poza budżetem. Wtedy dług w aplikacji zgadza się z bankiem, a koperta „Kredyty” oddaje dokładnie Twoją ratę.

*Przypomnienie o racie:*
Utwórz płatność zaplanowaną jako przelew: „Ustawienia” → „Płatności zaplanowane” → „+ Płatność”, „Odbiorca” → „Przelewy” → konto kredytu, kategoria „Kredyty”, „Powtarzaj” — „Co miesiąc”. Płatność pojawi się na ekranach obu kont, przypomnienie przyjdzie z wyprzedzeniem, a „Potwierdź” zapisze przelew. Tak samo ze spłatą karty kredytowej: z karty debetowej na kredytową. Więcej w artykule [„Płatności zaplanowane”](#scheduled-new).

### Patrzymy na dług {#scenario-credit-watch}

| Gdzie | Co mówi |
|---|---|
| „Konta” | Sekcje „Karty kredytowe” i „Długi” — ile jesteś winien teraz. |
| „Budżet” → „Płatności kartami” | Ile odłożono na spłatę każdej karty. |
| „Raporty” → „Dług na kartach” | Dług na wszystkich kartach kredytowych miesiąc po miesiącu: maleje czy rośnie. Dostępny, jeśli masz kartę kredytową. |
| „Raporty” → „Majątek” | Wszystko, co masz, minus wszystkie długi. Każda rata kredytu podnosi linię. |

Więcej o raportach w artykule [„Raporty”](#reports-capital).

## Oszczędzanie na coś dużego {#scenario-saving}

Laptop, remont, samochód, wkład własny na mieszkanie. Jak odkładać po trochu, widzieć, czy zdążysz w terminie, i nie wydać oszczędności przez przypadek.

*„Budżet”, „Cele”, ekran kategorii*

### Koperta tylko na zakup {#scenario-saving-envelope}

Pieniądze na laptop wymieszane z pieniędzmi na życie idą na pierwszy ogień. Osobna koperta je chroni: dopóki leżą w „Laptop”, nie widać ich w „Zakupy spożywcze”.

1. Na ekranie „Budżet” znajdź grupę, w której są „Duże zakupy” i „Podróże i urlop”.
2. Naciśnij „⊕” obok jej nazwy — nowa kategoria. Nazwij ją jak zakup: „Laptop”.
3. Albo oszczędzaj w gotowych „Duże zakupy”, jeśli zakup jest jeden.

Więcej w artykule [„Budżet”](#budget-screen).

### Cel „Do daty” {#scenario-saving-goal}

Powiedz aplikacji ile i do którego miesiąca — ona policzy, ile wkładać co miesiąc.

1. Dotknij kategorii na ekranie „Budżet” → karta „Cel” → „Dodaj cel”.
2. „Rodzaj celu” — „Do daty”.
3. „Kwota” — cena zakupu, „Uzbierać do miesiąca” — kiedy jest potrzebny.
4. „Zapisz”.

Laptop za 7200 zł za pół roku — cel poprosi o 1200 zł miesięcznie. Opuścisz miesiąc — brak rozłoży się na pozostałe i rata urośnie. Włożysz więcej — następne się zmniejszą. Więcej w artykule [„Cele”](#goals-bydate).

*Oszczędzanie bez terminu:*
Cel „Saldo”: w kopercie ma leżeć taka kwota, a kiedy — nieważne. Pasuje do „kiedyś nowe auto” i do poduszki na czarną godzinę. Więcej w artykule [„Cele”](#goals-balance).

### Czy zdążę {#scenario-saving-pace}

##### Szybkie oszacowanie na ekranie kategorii

Dotknij kategorii — cel „Do daty” ma pod paskiem przełącznik: „Według kwoty” i „Do daty”. Przesuń „Odkładać miesięcznie” — widać, w którym miesiącu zdążysz. Przesuń miesiąc — widać, ile wkładać. Nowa data się podoba? — „Ustaw jako termin celu: …”. Więcej w artykule [„Cele”](#goals-card).

##### W tym miesiącu brakuje

Na ekranie „Budżet” pod kwotą jest flaga i „jeszcze …”. Chip „Niedofinansowane” nad listą zostawi tylko te kategorie. Na ekranie „Przegląd” brak widać w blokach „Cele” i „Co przed nami”.

### Gdzie leżą pieniądze {#scenario-saving-where}

Oszczędności często trzyma się na osobnym koncie: oszczędnościowym, lokacie, w skarbonce. To, jak ustawisz to konto, decyduje, czy pieniądze zostaną w kopercie.

##### W budżecie — na zakup

Konto typu „Konto bankowe”. Przełożyłeś 1200 zł z konta osobistego na oszczędnościowe — koperta „Laptop” się nie zmieniła: pieniądze się przeniosły, ale nadal są Twoje i nadal w budżecie. Cel to widzi i nie prosi ponownie. **Oszczędzasz na zakup? Wybierz ten wariant.**

##### Poza budżetem — na majątek

Konto typu „Tylko ewidencja”: inwestycje, lokata emerytalna. Przelew tam aplikacja zapisuje jako wyjście pieniędzy z koperty — pyta o kategorię, a koperta się opróżnia. Na zakup to nie zadziała: cel znów poprosi o pieniądze, choć je masz.

Więcej w artykule [„Konta”](#accounts-kinds).

### Kilka celów naraz {#scenario-saving-many}

Urlop, laptop i prezenty na święta — w tym miesiącu może nie starczyć na wszystko.

„Budżet” → „⋮” → „Rozdysponuj na cele”. Aplikacja rozłoży „nierozdysponowane” na wszystkie cele naraz. Nie starcza na wszystkie? Cele dostają pieniądze po kolei, z góry na dół, tak jak ułożone są kategorie na ekranie „Budżet”. Ważniejsze trzymaj wyżej: „⋮” → „Zmień kolejność”. Więcej w artykule [„Cele”](#goals-allocate).

### Zakup {#scenario-saving-buy}

1. Zapisz zakup jak zwykle — w kategorii „Laptop”. Koperta się opróżni — na to oszczędzałeś.
2. Wyszło taniej? Reszta zostaje w kopercie. Potrzebna gdzie indziej? Na ekranie „Budżet” dotknij kwoty „Laptop” i wpisz mniej: różnica wróci do „nierozdysponowane”.
3. Wyszło drożej? Kwota zrobi się czerwona. Dotknij jej → „Weź …” z innej koperty.
4. Cel już niepotrzebny? „Budżet” → „⋮” → „Cele” → dotknij kategorii → „Usuń”. Pieniądze w kopercie zostają. Samej kategorii z zakupem usunąć się nie da — tylko ukryć.

*Kupiłem kartą kredytową:*
Tak też można: pieniądze z „Laptop” odłożą się na spłatę karty. Kupiłeś na kredyt albo na raty? To dług; jak go prowadzić — w scenariuszu [„Karty kredytowe i długi”](#scenario-credit-loan).

### Ile odkładam {#scenario-saving-pay-yourself}

Blok „Zapłać sobie” na ekranie „Przegląd” pokazuje, jaki procent dochodu odkładasz — za miesiąc, trzy miesiące i rok. Norma to 10%. Które kategorie liczą się jako „odłożone”, wybierasz w „Ustawienia → Budżet → Zapłać sobie”: „Duże zakupy”, „Laptop”, „Na czarną godzinę”. Więcej w artykule [„Przegląd”](#overview-blocks).

## Wyjazd z przyjaciółmi {#scenario-trip}

Za nocleg dla czterech zapłaciłeś Ty, za kolację — kolega, paliwo na pół, a za granicą do tego gotówka w innej walucie. Jak odłożyć na wyjazd, zobaczyć, ile kosztował, i nie pogubić się w tym, kto komu ile winien.

*tag wyjazdu, „Rozliczenie” na ekranie tagu, formularz transakcji*

### Przed wyjazdem {#scenario-trip-before}

Oszczędzaj w „Podróże i urlop” z celem „Do daty”: kwota — ile planujesz wydać, miesiąc — kiedy jedziesz. Aplikacja policzy miesięczną wpłatę. Więcej w scenariuszu [„Oszczędzanie na coś dużego”](#scenario-saving-goal).

### Tag wyjazdu {#scenario-trip-tag}

Wydatki z wyjazdu trafiają do różnych kategorii — „Zakupy spożywcze”, „Transport”, „Podróże i urlop”. Tag zbiera je razem.

1. Przy pierwszym zakupie na wyjeździe otwórz „Dodatkowo” → „Tagi” → wpisz nazwę, na przykład „Chorwacja”, → „Utwórz tag „…””.
2. Stawiaj ten tag na każdym zakupie z wyjazdu.
3. „⋮” tagu → „Pokaż w Moich tagach” — suma wyjazdu będzie na ekranie „Przegląd”.

Ekran tagu pokazuje „Wydano” i „Według kategorii” — ile kosztował wyjazd i dokąd poszły pieniądze. Więcej w artykule [„Odbiorcy i tagi”](#payees-tags-tag).

### Płacisz za wszystkich {#scenario-trip-pay-for-all}

Zapłaciłeś za nocleg dla czterech: 2400 zł. Twoja część to 600 zł, a pozostałe 1800 zł powinny do Ciebie wrócić.

##### Podziel kwotę na swoją część i część znajomych

1. Zapisz zakup za 2400 zł, konto — Twoja karta, tag — „Chorwacja”.
2. „Kategoria” → „Podziel kwotę”.
3. Pierwsza część — „Podróże i urlop”, 600 zł: to Twoja część.
4. Druga część — też „Podróże i urlop”, 1800 zł, a na niej „+ tag” → nowy tag „Chorwacja: znajomi oddadzą”.
5. Otwórz ekran tagu „Chorwacja: znajomi oddadzą” → „⋮” → „Rozliczenie”.

Teraz ekran tagu mówi „do zebrania 1800 zł”: tyle Ci są winni. Więcej o podzielonych kwotach w artykule [„Formularz transakcji”](#entry-split).

*Dlaczego drugi tag, a nie jeden:*
„Rozliczenie” liczy wydano minus otrzymano. Gdybyś włączył je na tagu „Chorwacja”, Twoja własna część też wisiałaby tam jako „Do zebrania”, i rozliczenie nigdy by się nie zgodziło. Tag tylko na części znajomych dochodzi do zera, gdy wszyscy oddadzą.

### Kolega oddał {#scenario-trip-paid-back}

1. „+ Transakcja” → „Przychodzące”. Odbiorca — kolega, kwota — ile oddał, konto — gdzie wpłynęły pieniądze.
2. „Kategoria” → „Do kategorii wydatków…” → „Podróże i urlop”. To nie przychód — to Twoje pieniądze wracają do koperty.
3. Tagi — „Chorwacja” i „Chorwacja: znajomi oddadzą”.

Gdy oddadzą wszyscy trzej, ekran tagu „Chorwacja: znajomi oddadzą” pokaże na zielono „Rozliczone”. A w tagu „Chorwacja” „Netto” będzie o 1800 zł mniejsze niż „Wydano” — za nocleg zostanie dokładnie Twoja część. Więcej w artykule [„Formularz transakcji”](#entry-refund).

### Zapłacił kolega {#scenario-trip-friend-paid}

Kolega zapłacił za kolację, a Twoja część to 150 zł. Z Twojej karty pieniądze jeszcze nie wyszły — nie ma czego zapisywać.

Gdy oddasz koledze, wtedy zapisz: wydatek, odbiorca — kolega, kategoria — „Podróże i urlop”, tag — „Chorwacja”. Dopóki nie oddasz, trzymaj dług w głowie albo w notatce — aplikacja nie śledzi cudzych portfeli.

### Za granicą {#scenario-trip-abroad}

##### Płacisz swoją kartą

Bank pobiera pieniądze w walucie Twojej karty. Zapisz kwotę, którą pobrał bank — widać ją w aplikacji banku. Kwotę w lokalnej walucie, jeśli potrzebna, wpisz do notatki: „kolacja 42 €”.

##### Wziąłeś gotówkę w obcej walucie

Utwórz konto „Gotówka €”: „Konta” → „⋮” → „Dodaj konto”, typ „Tylko ewidencja”, „Waluta konta” — €. Własną walutę może mieć tylko konto poza budżetem. Jak z nim pracować — niżej.

##### Wymiana i wydawanie gotówki

1. Wymieniłeś pieniądze — zapisz przelew z karty na „Gotówka €”. Pod odbiorcą pojawią się „Wpłynęło” i „Kurs”: ile euro dostałeś.
2. Konto jest poza budżetem, więc aplikacja pyta o kategorię: „Podróże i urlop”. Pieniądze wyszły z koperty już przy wymianie.
3. Wydatki gotówką zapisuj w euro na koncie „Gotówka €” — kategoria nie jest potrzebna, koperta już zapłaciła. Tag „Chorwacja” stawiaj jak zwykle.
4. Zostały euro i wymieniłeś je z powrotem? Przelew z „Gotówka €” na kartę, „Kategoria” → „Do kategorii wydatków…” → „Podróże i urlop”. Pieniądze wrócą do koperty.

Więcej o walutach w scenariuszu [„Kilka walut i nietypowe przypadki”](#scenario-currencies).

### Po wyjeździe {#scenario-trip-after}

- Ekran tagu „Chorwacja”: „Netto” — ile kosztował Cię wyjazd po wszystkich zwrotach, „Według kategorii” — dokąd poszły pieniądze. Przyda się, gdy będziesz odkładać na następny. Wydatki w euro są osobną linijką: przeliczenia po kursie nie ma, a sama wymiana to przelew, więc nie ma jej w „Wydano”.
- Tag niepotrzebny już w wyborze? „⋮” tagu → „Ukryj z wyboru”. Na transakcjach zostaje.
- W „Podróże i urlop” zostały pieniądze? Niech leżą do następnego urlopu: plus przechodzi z miesiąca na miesiąc.

## Kilka walut i nietypowe przypadki {#scenario-currencies}

Pensja w jednej walucie, oszczędności w drugiej, trochę bitcoina i wyjazdy za granicę. Co aplikacja umie z walutami, gdzie są granice i jak prowadzić rachunki, żeby koperty nie kłamały.

*„Ustawienia” → „Waluta budżetu”, konta poza budżetem, przelew z kursem*

### Główna zasada {#scenario-currencies-rule}

**Budżet ma jedną walutę.** Wszystkie koperty, wszystkie konta budżetowe i „nierozdysponowane” są w niej. Inne waluty mieszkają na kontach **poza budżetem**: widzisz, ile tam jest, ale tych pieniędzy nie dzieli się między koperty.

*Dlaczego tak:*
Koperta odpowiada na pytanie „ile mogę wydać na jedzenie”. Gdyby leżały w niej i złote, i euro, odpowiedź zmieniałaby się codziennie razem z kursem. Jedna waluta w kopertach — i odpowiedź jest zawsze ta sama.

### Waluta budżetu {#scenario-currencies-budget-currency}

„Ustawienia” → „Budżet” → „Waluta budżetu”. Na liście jest sześćdziesiąt walut, bieżąca w pierwszym wierszu, na górze wyszukiwanie po nazwie i symbolu: „zloty” znajdzie „Złoty”.

Zmienia się tylko symbol — aplikacja nie przelicza kwot. Jeśli prowadziłeś budżet w złotych i wybierzesz euro, 1000 zł zmieni się w 1000 €. Dlatego walutę wybiera się na starcie, a nie w środku prowadzenia rachunków.

*Budżet na każdą walutę:*
Każdy budżet ma własną walutę. Żyjesz między dwoma krajami? Można prowadzić dwa budżety: „Dom” w złotych i „Berlin” w euro. Dotknij nazwy budżetu w nagłówku ekranu „Przegląd” — tam jest przełącznik budżetów i nowy budżet; o walutę aplikacja zapyta przy tworzeniu.

### Konto w innej walucie {#scenario-currencies-foreign-account}

1. „Konta” → „⋮” → „Dodaj konto”.
2. Typ — „Tylko ewidencja” (albo „Kredyt”, jeśli to dług). Własną walutę może mieć tylko konto poza budżetem.
3. W sekcji „Waluta konta” dotknij pola „Waluta” — otworzy się lista sześćdziesięciu walut, taka sama jak dla budżetu: bieżąca w pierwszym wierszu, na górze wyszukiwanie po nazwie i symbolu. Nazwy są w języku danego kraju: „zloty” znajdzie „Złoty”.
4. Kryptowaluta — chipy pod polem: ₿, USDT, USDC.
5. Nie ma jej? Wpisz sam w „Albo wpisz własną (ticker)”: ETH, ticker akcji albo funduszu. Kwoty konta będą nim podpisane.
6. Kwota — ile jest na koncie w tej walucie.

Konto trafi do sekcji „Poza budżetem”, z kwotami we własnym symbolu: „1 200,00 €”. Więcej w artykule [„Konta”](#accounts-kinds).

### Wymiana {#scenario-currencies-exchange}

Kupiłeś euro za złote? To przelew między własnymi kontami, tylko z kursem.

1. „+ Transakcja”, konto — Twoja karta w złotych, „Odbiorca” → „Przelewy” → konto w euro.
2. Kwota — ile złotych wyszło.
3. Pod odbiorcą są „Wpłynęło” i „Kurs”. Wpisz albo kurs, albo ile euro wpłynęło — drugie się policzy. Przycisk obok kursu odwraca jego kierunek: złotych za jedno euro albo euro za jednego złotego.
4. Konto w euro jest poza budżetem — aplikacja pyta o kategorię: z której koperty wyszły pieniądze. Na przykład „Na czarną godzinę” albo „Inwestycje”.

Więcej w artykule [„Formularz transakcji”](#entry-transfer).

*Sprzedałeś euro z powrotem:*
Przelew z konta w euro na kartę. Pole „Kategoria” otworzy „Gdzie zaksięgować przychód”: „Przychód na …” — jeśli to nowe pieniądze do rozdania, „Do kategorii wydatków…” — jeśli wracają do koperty, z której wyszły.

### Mieszkasz w jednym kraju, oszczędzasz w innym {#scenario-currencies-two-countries}

Budżet jest w walucie, w której dostajesz pensję i wydajesz na co dzień: złote, euro, funty. Pieniądze w ojczyźnie, lokata w innej walucie, dolary „na czarną godzinę” — konta poza budżetem, każde we własnej walucie. Koperty liczą to, z czego żyjesz, a reszta jest widoczna obok, na ekranie „Konta”.

Wydatki kartą za granicą zapisuj kwotą, którą bank pobrał w walucie Twojej karty. Kwotę w lokalnej walucie, jeśli potrzebna, wpisz do notatki. Więcej w scenariuszu [„Wyjazd z przyjaciółmi”](#scenario-trip-abroad).

### Kryptowaluta {#scenario-currencies-crypto}

Konto poza budżetem, chip ₿, USDT albo USDC pod polem „Waluta” — i przełącznik „Kryptowaluta” włączy się sam: „8 miejsc po przecinku”. Przy własnym tickerze (ETH, SOL) włącz go ręcznie. Wybrałeś zwykłą walutę z listy? Przełącznik się wyłączy.

Liczbę miejsc po przecinku wybiera się raz: gdy konto ma już transakcje, przełącznik mówi „Nie można zmienić: konto ma transakcje”.

### Waluty bez groszy {#scenario-currencies-no-cents}

Jen, won i dong nie mają drobnych jednostek, ale aplikacja i tak pokazuje „,00”. To tylko wygląd: liczby całe wpisuj jak zwykle. Przy wpisywaniu „Z przecinkiem” 1500 to 1500, a nie 15,00. Jak wpisuje się kwoty — „Ustawienia” → „Język i formaty” → „Wpisywanie kwoty”.

### Jak zapisywane są kwoty {#scenario-currencies-format}

„Ustawienia” → „Język i formaty” → „Format kwot”: separator tysięcy i części dziesiętnej, symbol waluty z lewej albo z prawej. Od razu po instalacji idzie za językiem interfejsu: po polsku „1 234,56 zł”. Angielski na telefonie z Indii od razu dostaje lakhy i crore: „₹12,34,567.89”. Więcej w artykule [„Ustawienia”](#settings-formats).

### Czego brakuje {#scenario-currencies-not-yet}

- **Kursów z internetu.** Kurs wpisujesz sam, przy wymianie. To też ochrona: aplikacja nie pyta żadnej usługi o kursy, więc nikt z zewnątrz nie dowie się, w jakich walutach trzymasz pieniądze. Twoje dane zostają u Ciebie — tak mówi też [polityka prywatności](#settings-s-about).
- **Przeliczania na jedną walutę.** „Majątek” sumuje tylko konta w walucie budżetu: konto w euro do niego nie wchodzi. Na ekranie „Konta” sekcja, w której jest konto w innej walucie, nie pokazuje sumy — złotych z euro dodać się nie da.
- **Kont budżetowych w innej walucie.** Dlaczego — [wyżej](#scenario-currencies-rule).

## Przegląd {#overview}

Pierwszy ekran po uruchomieniu: czy pieniędzy wystarcza, co jest pilne i co przed nami — w jednej taśmie kart.

*Zakładka „Przegląd” pośrodku na dole ekranu*

### Po co ten ekran {#overview-why}

„Przegląd” otwiera się pierwszy przy każdym uruchomieniu aplikacji. To poranne spojrzenie na pieniądze: czy wszystko w porządku, czego ubywa, co przed nami. Pieniędzy tu się nie dzieli i transakcji się nie poprawia — od tego są „Budżet” i „Transakcje”. Tu patrzysz i decydujesz, dokąd iść dalej.

##### Czy wszystko w porządku

Czy są nierozdysponowane pieniądze, gdzie jest minus, które koperty pustoszeją szybciej, niż mija miesiąc.

##### Co już się stało

Ostatnie transakcje, duże wydatki, kalendarz dni z wydatkami.

##### Co przed nami

Płatności zaplanowane, cele, którym brakuje pieniędzy, i wydatki tego miesiąca na tle zwykłych.

Zminimalizuj aplikację na dłużej niż pół minuty, a po powrocie znów otworzy „Przegląd”. Jeśli wolisz wracać tam, gdzie skończyłeś, wybierz to w „Ustawienia → Wygląd → Wracaj do”.

### Co gdzie jest na ekranie {#overview-screen}

Dotknij dowolnego zrzutu, żeby otworzyć go na cały ekran.

[Ekran „Przegląd”: nagłówek, chip „Nierozdysponowane” i „Wiek pieniędzy”, „Ostatnie transakcje”, „Kończy się”]

1. **Ustawienia** — koło zębate. Wszystkie ustawienia aplikacji: synchronizacja, kopie zapasowe, wygląd, język.

2. **Nazwa budżetu** — dotknij, by otworzyć listę budżetów i przełączyć się na inny.

   *Jak to działa:*
   Budżetów może być kilka: na przykład osobisty i rodzinny albo stary, którego nie chcesz usuwać. Utworzyć, zmienić nazwę albo usunąć budżet — menu „⋮” → „Budżety” ([niżej](#overview-menu)).

3. **Synchronizacja** — dwie strzałki w kółku. Dotknij — Twoje zmiany pójdą do chmury, a zmiany z innych urządzeń przyjdą tutaj.

   *Jak to działa:*
   Liczba na ikonie to ile zmian jeszcze nie wysłano. Zaraz po synchronizacji ikona miga przez 15 sekund: na zielono — wyszło, na czerwono — nie. Przytrzymaj na niej palec, a aplikacja powie, co się stało.

   Jedna porażka to zwykle sieć: metro, działka. Jeśli nie wyjdzie cztery razy z rzędu, ikona zostaje czerwona z „!” w środku, dopóki się nie uda. Chmura niepodłączona — ikona ma zwykły kolor, bez liczby.

4. **Menu „⋮”** — budżety, wybór bloków, „Ukryj kwoty”. Opisane [niżej](#overview-menu).

5. **„Nierozdysponowane”** — pieniądze, które są na kontach, ale nie są jeszcze rozłożone do kopert. Dotknij, a aplikacja podpowie, jak je rozdać.

   *Jak to działa:*
   Podpis zmienia się razem z liczbą:

   - **„Nierozdysponowane”** — jest co rozdać. Na zrzucie to 900 zł: przyszła wypłata, a koperty na listopad są już napełnione.
   - **„Wszystko rozdysponowano”**, na zielono — każdy złoty ma zadanie. To jest cel.
   - **„Rozdysponowano za dużo”**, na czerwono — do kopert włożono więcej, niż jest na kontach. Zabierz nadmiar z którejś kategorii na ekranie „Budżet”.

   Nacisnąć można tylko wtedy, gdy jest co rozdać. Otworzy się arkusz „Automatyczne rozdysponowanie budżetu”: „Pokryj wszystkie przekroczenia”, „Niedofinansowane”, „Rozdysponowane w zeszłym miesiącu” i inne sposoby. Obok każdego — ile by zabrał. Nic się nie zmieni, dopóki nie potwierdzisz. Więcej o kopertach — w artykule [„Budżet”](#budget).

6. **„Wiek pieniędzy”** — ile dni średnio leżą Twoje pieniądze, zanim je wydasz.

   *Jak to działa:*
   Na zrzucie to 52 dni: to, co wydajesz dziś, przyszło do Ciebie prawie dwa miesiące temu. Aplikacja bierze ostatnie dziesięć wydatków i patrzy, który przychód zapłacił za każdy — najstarsze pieniądze wydają się pierwsze.

   Poniżej 30 dni — żyjesz od wypłaty do wypłaty i każde opóźnienie pensji uderza w budżet. Powyżej 30 — wydajesz pieniądze z poprzedniego miesiąca, a nowa wypłata spokojnie czeka w kolejce. Minus — wydano więcej, niż było pieniędzy na kontach budżetowych. Klepsydra na ikonie mówi to samo: pełna — 30 dni i więcej, w połowie pusta — mniej, pusta — minus.

   Wiek można liczyć na trzy sposoby, a od 30 dni ma sens żyć z pieniędzy poprzedniego miesiąca. Wszystko to — [niżej](#overview-age).

7. **Bloki** — karty z podsumowaniami, jedna pod drugą. Które pokazywać i w jakiej kolejności — decydujesz Ty. Każdy blok jest opisany [niżej](#overview-blocks).

8. **„+ Transakcja”** — zapisz wydatek albo przychód. Nad nim — aparat (paragon po kodzie QR) i mikrofon (głosem). Przewiń w dół, a przyciski zwiną się w jeden „+”.

   *Jak to działa:*
   To ten sam formularz co na ekranie [„Transakcje”](#transactions): każda zakładka ma do niego wejście.

### Bloki po kolei {#overview-blocks}

Pod chipem „Nierozdysponowane” (objaśnienia 5 i 6) idą karty. Tu są w kolejności, jaką mają zaraz po instalacji. Blok, który nie ma nic do pokazania, sam się chowa: nie ma tagów — nie ma bloku „Moje tagi”, nie ma celów — nie ma bloku „Cele”.

Usunąć blok, przywrócić go albo przesunąć wyżej — „⋮” → „Widżety” ([niżej](#overview-menu)).

[Blok „Ostatnie transakcje” na zrzucie ekranu „Przegląd”]

#### Ostatnie transakcje

Pięć ostatnich wpisów: data, odbiorca, kwota, kategoria i notatka. Wygodne, żeby sprawdzić, czy wszystko z wczoraj jest zapisane.

*Jak to działa:*
Przychód ma znak „+”, wydatek „−”. Kwota podzielona („Rossmann” na zrzucie) ma obok ikonę widelca, a jej kategorie są wymienione po kropce. Na zrzucie są dwa wpływy: wypłata i 129 zł od Andrzeja — kolega oddał swoją połowę za „Rossmann”. To nie przychód, tylko zwrot do „Zakupy spożywcze” (jak go zapisać — w artykule [„Formularz transakcji”](#entry)).

Wierszy tu się nie naciska. Żeby poprawić transakcję, otwórz [„Transakcje”](#transactions).

[Blok „Przekroczenia i ostrzeżenia” na zrzucie ekranu „Przegląd”]

#### Przekroczenia i „Kończy się”

Koperty, które potrzebują uwagi teraz. Dotknij wiersza, by otworzyć ekran tej kategorii.

*Jak to działa:*
- **„Przekroczenie”**, na czerwono — kategoria jest na minusie: wydałeś więcej, niż odłożyłeś. Ikona portfela oznacza minus z własnych pieniędzy; zabierze z „nierozdysponowane” następnego miesiąca. Ikona karty i żółty kolor oznaczają minus na karcie kredytowej: zamiast zjeść Twoje pieniądze, urósł w dług na karcie. Usunąć minus — na ekranie [„Budżet”](#budget).
- **„Kończy się”**, na żółto — w kopercie jest jeszcze dość pieniędzy, ale wydajesz szybciej, niż mija miesiąc. Aplikacja dzieli plan miesiąca równo na dni i daje 15% zapasu. Na zrzucie dziś jest 10 listopada, a na „Zakupy spożywcze” wydano więcej, niż wypadało do tego dnia, nawet z zapasem.
- **„Wszystko pod kontrolą”** — bez minusów i bez ostrzeżeń. Blok pokazuje to zamiast pustki.

Kategorie, w których zostało dokładnie zero, się tu nie pojawiają: plan wykonano co do grosza.

[Blok „Gdzie poszły pieniądze” na zrzucie ekranu „Przegląd”]

#### Gdzie poszły pieniądze

Pięć najdroższych kategorii miesiąca: kwota, procent wszystkich wydatków i pasek tej samej długości.

*Jak to działa:*
Na zrzucie „Czynsz” to 76% wydatków listopada: czynsz płaci się 1-go, od razu w całości, a inne wydatki zbierają się dzień po dniu. Pod koniec miesiąca procenty się wyrównają.

Przesuń kartę palcem w prawo, żeby zobaczyć poprzedni miesiąc, w lewo — następny. Powrót do bieżącego miesiąca — chip „Dziś”, który pojawia się w nagłówku karty, gdy przejdziesz do innego miesiąca.

[Blok „Co przed nami” na zrzucie ekranu „Przegląd”]

#### Co przed nami

Najbliższe płatności zaplanowane i cele, którym brakuje pieniędzy — do sześciu wierszy, według daty.

*Jak to działa:*
Płatność zaplanowana ma ikonę kalendarza, cel — flagę. Na zrzucie są dwa cele: „Na czarną godzinę” brakuje 3375 zł do końca listopada, „Podróże i urlop” — 300 zł. Kwota na żółto to ile jeszcze trzeba włożyć.

Wierszy się nie naciska: włożyć pieniądze do kategorii — ekran [„Budżet”](#budget), płatności zaplanowane — „Ustawienia → Planowanie”.

[Blok „Budżet miesiąca” na zrzucie ekranu „Przegląd”]

#### Budżet miesiąca

Skąd się wzięła liczba „Nierozdysponowane”: drabinka od reszty z poprzedniego miesiąca do wyniku.

*Jak to działa:*
Czytaj z góry na dół, jak paragon:

- **Przeniesione z października** — ile nie zostało rozdysponowane w poprzednim miesiącu.
- **Budżet listopada** — przychód tego miesiąca: na zrzucie dwie wypłaty po 4200 zł.
- **Rozdysponowano w listopadzie** — ile już rozłożono do kopert.
- **Nierozdysponowane** — wynik, ta sama liczba co na chipie na górze ekranu.

Pod kreską jest „Plan”: ile już jest na grudzień, średni dochód miesięcznie i ile miesięcznie proszą Twoje cele, z procentem dochodu. Czasem pojawia się więcej wierszy — przekroczenie z poprzedniego miesiąca, pieniądze z oszczędności, pieniądze odłożone naprzód; puste wiersze blok chowa.

Kartę można przesuwać w obie strony, także naprzód: pieniądze na grudzień da się rozdysponować już w listopadzie.

[Blok „Majątek” na zrzucie ekranu „Przegląd”]

#### Majątek

Wszystko, co masz, minus długi — i jak to się zmieniło.

*Jak to działa:*
Dużą czcionką — Twój majątek dziś: na zrzucie 36 630 zł. Po prawej — o ile urósł za okres (+13 033 zł za 6 miesięcy), niżej — linia według miesięcy i rozbicie: „Aktywa” (wszystkie konta na plusie) i „Długi” (karty kredytowe i kredyty).

W „⋮” bloku: okres — 6 miesięcy, 12 miesięcy, ten rok albo cały czas — i „Konta w innych walutach”: takie konta pojawiają się osobnymi wierszami we własnej walucie, bez przeliczania i poza wspólną sumą.

**Zaraz po instalacji:** blok jest wyłączony; włącz go w „⋮” → „Widżety”.

[Blok „Cele” na zrzucie ekranu „Przegląd”]

#### Cele

Ile kategorii nie dobija w tym miesiącu do celu i o ile. Dotknij, by otworzyć ekran „Cele”.

*Jak to działa:*
Na zrzucie dwóm celom brakuje razem 3675 zł. Cele ustawia się na ekranie kategorii albo na ekranie „Cele”: „Odkładać co miesiąc”, „Uzbierać do …”, „Utrzymywać saldo”, „Procent dochodu” albo „lista”.

[Blok „Zapłać sobie” na zrzucie ekranu „Przegląd”]

#### Zapłać sobie

Jaki procent dochodu odkładasz dla siebie z przyszłości — za miesiąc, trzy miesiące i rok.

*Jak to działa:*
Zasada stara i prosta: z każdej wypłaty najpierw zapłać sobie, a dopiero potem wszystkim innym. Norma to 10% dochodu.

Na zrzucie w listopadzie odłożono 11,2% — o 102,00 zł powyżej normy. Jeśli jest poniżej normy, pod procentem stoi „brakuje” z kwotą.

Które kategorie liczą się jako „odłożone”, wybierasz sam: „Ustawienia → Budżet → Zapłać sobie”. Zwykle to oszczędności: „Na czarną godzinę”, „Inwestycje”. Nic nie wybrano — bloku nie ma.

[Blok „Duże wydatki” na zrzucie ekranu „Przegląd”]

#### Duże wydatki

Trzy największe wydatki miesiąca — data, odbiorca, kwota, kategoria i notatka.

*Jak to działa:*
Pomaga wyłapać to, co odstaje: niespodziewanie drogie zakupy widać od razu, a nie pod koniec miesiąca.

**Zaraz po instalacji:** blok jest wyłączony; włącz go w „⋮” → „Widżety”.

[Blok „Kalendarz” na zrzucie ekranu „Przegląd”]

#### Kalendarz

Miesiąc jako siatka dni: im jaśniejsza komórka, tym więcej wydano. Dotknij dnia, by zobaczyć, co się w nim stało.

*Jak to działa:*
Szczegółowo, z trybami i menu — [niżej](#overview-heatmap).

[Blok „Moje tagi” na zrzucie ekranu „Przegląd”]

#### Moje tagi

Do czterech tagów: ile pod nimi wydano, w jakim okresie i ile było transakcji.

*Jak to działa:*
Tag z „Rozliczenie” pokazuje po prawej, ile zebrać albo oddać, żeby wyjść na zero: na zrzucie „#na pół” pokazuje „do zebrania 129,00 zł”: zakup w „Rossmann” podzielono z kolegą, a on oddał już połowę. Dotknij tagu, by otworzyć jego ekran. „Wszystkie tagi ›” na dole bloku — cała lista.

W „⋮” bloku: „Wybierz tagi…” — które cztery pokazywać i w jakiej kolejności; i okres — „Suma za cały okres” albo „Suma za ten miesiąc”. Nic nie wybierzesz — aplikacja sama pokaże tagi z transakcjami z ostatnich 30 dni. Nie ma tagów — nie ma bloku.

O samych tagach — w artykule [„Transakcje”](#transactions).

[Blok „Wydatki miesiąca” na zrzucie ekranu „Przegląd”]

#### Wydatki miesiąca

Ile wydałeś od początku miesiąca — na tle tego, ile zwykle wydajesz do tego dnia.

*Jak to działa:*
Dużą czcionką — wydatki od 1-go: 4863 zł. Po prawej — różnica od zwykłego: +179 zł, czyli trochę więcej niż zwykle. Jasna linia to ten miesiąc, cienka — zwykły.

„Zwykle” to środek Twoich minionych miesięcy z ostatniego roku: jeden wyjątkowo drogi miesiąc go nie przesunie. Kartę można przesuwać jak „Gdzie poszły pieniądze”.

### Kalendarz w szczegółach {#overview-heatmap}

Najżywszy blok ekranu „Przegląd”: cały miesiąc na jednej karcie. Przebiegnij po nim wzrokiem — i widać, które dni były drogie, a które minęły zupełnie bez wydatków.

[Blok „Kalendarz”: chipy Wydatki, Przychody, Zaplanowane, siatka listopada, dziś — dzień 10, „3 dni bez wydatków”]

(E)
#### Tryby

Co kolorować: „Wydatki”, „Przychody” albo „Zaplanowane”.

*Jak to działa:*
- **„Wydatki”** — sześć odcieni. Najjaśniejsza komórka to najdroższy dzień miesiąca, a każdy stopień niżej — o połowę mniej. Jasność odpowiada na pytanie „ile razy ten dzień był tańszy od najdroższego”.
- **„Przychody”** — to samo dla wpływów, na zielono.
- **„Zaplanowane”** — dni terminów płatności zaplanowanych. Miniony dzień, w którym wszystko zapisano, dostaje ptaszek; gdzie płatność pominięto, numer dnia jest czerwony.

W trybie „Wydatki” przyszły dzień z płatnością zaplanowaną jest obwiedziony linią przerywaną.

(F)
#### Menu kalendarza

Trzy kropki w nagłówku karty, po prawej od miesiąca. Ustawia, co jeszcze rysować na siatce i co pokazywać w arkuszu dnia.

*Jak to działa:*
**Arkusz dnia** to nie punkt menu. Otwiera się, gdy dotkniesz liczby w siatce kalendarza: od dołu wysuwa się lista tego, co działo się tego dnia (zrzut [niżej](#overview-day)). Menu tylko ustawia, co jest w tym arkuszu.

Punkty w trybie „Wydatki”:

- **„Przychody jako kropki”** — dzień, w którym przyszły pieniądze, dostaje w komórce zieloną kropkę.
- **„Cały dzień w arkuszu dnia”** — dotknij liczby, a arkusz dnia pokaże nie tylko wydatki, ale i przychody tego dnia: zwiniętym wierszem na dole; dotknij, by rozwinąć. Wyłączone — arkusz pokazuje tylko wydatki.

W trybie „Zaplanowane” punkty są inne: pokazywać przyszłe płatności wypełnieniem komórki albo kropką i czy wyróżniać na czerwono numer dnia z pominiętą płatnością.

**Zaraz po instalacji** „Przychody jako kropki” i „Cały dzień w arkuszu dnia” są wyłączone.

(G)
#### Dziś

Dzisiejszy dzień jest obwiedziony.

*Jak to działa:*
Przesuń kalendarz palcem, żeby zobaczyć inny miesiąc, wstecz i naprzód bez ograniczeń: to także zwykły kalendarz, w którym widać, na jaki dzień tygodnia wypada data. Powrót — chip „Dziś” w nagłówku karty.

(H)
#### Dni bez wydatków

Ile dni miesiąca minęło bez jednego wydatku. Po prawej — skala jasności.

*Jak to działa:*
Pusta komórka w przeszłości to dzień bez wydatków. Jeśli jedyne, co tego dnia było, to zwrot ze sklepu, zamiast wypełnienia jest puste kółko.

#### Arkusz dnia: dotknij liczby w kalendarzu {#overview-day}

Od dołu wysuwa się arkusz: w nagłówku data i suma dnia, a pod spodem każda transakcja. Kwota podzielona jest pokazana w częściach: na zrzucie „Rossmann” — 183 zł na jedzenie i 75 zł na chemię domową.

[Arkusz dnia 10 listopada: suma −129,00 zł, dwie części zakupu w „Rossmann”, zwrot od Andrzeja]

Jak go otworzyć: na ekranie „Przegląd” znajdź „Kalendarz” i dotknij liczby potrzebnego dnia — na zrzucie wyżej to 10, obwiedzione jako „dziś” (G). Arkusz pokazuje to, co koloruje kalendarz: w trybie „Wydatki” — wydatki dnia, w „Przychody” — wpływy. Żeby widzieć jedno i drugie naraz, włącz „Cały dzień w arkuszu dnia” w menu kalendarza (F). Żeby zamknąć arkusz, przesuń go w dół albo dotknij poza nim.

W trybie „Zaplanowane” arkusz jest inny: co nie zapisane, co zapisane i co jeszcze przed nami. Przesuń termin w lewo — „Zapisz”, w prawo — „Usuń”.

### Wiek pieniędzy w szczegółach {#overview-age}

Liczba na chipie odpowiada na pytanie: ile dni moje pieniądze leżały, zanim je wydałem. Wypłata przyszła 1 października, a 5 listopada kupujesz chleb z tego, co zostało z październikowych pieniędzy — te pieniądze mają 35 dni. Aplikacja bierze ostatnie dziesięć wydatków, dla każdego szuka, który przychód za niego zapłacił (najstarsze pieniądze najpierw), i pokazuje średnią.

##### Poniżej 30 dni

Od wypłaty do wypłaty: dzisiejsze wydatki opłaca ostatnia wypłata, i każde opóźnienie uderza od razu.

##### 30 i więcej

Miesiąc do przodu: wydajesz pieniądze z poprzedniego miesiąca. To cel metody — [co dalej](#overview-age-month).

##### Minus

Wydano więcej, niż było na kontach budżetowych.

#### Trzy sposoby liczenia {#overview-age-modes}

Wiek pieniędzy to wskaźnik dyskusyjny i jednej poprawnej formuły nie ma. Dlatego sposób wybierasz sam: „Ustawienia → Budżet → Wiek pieniędzy”. Liczba zmienia się od razu — i na chipie, i w raporcie „Wiek pieniędzy”.

##### Klasyczny (YNAB FIFO) · zaraz po instalacji

Sposób YNAB. Przelewów nie widzi wcale — ani na oszczędności, ani z nich. Wydatek, na który nie było pieniędzy, waży równo −1 dzień, czy to sto złotych, czy dziesięć tysięcy.

Dobry, jeśli oszczędności nie ruszasz: wtedy jest uczciwy i zgadza się z YNAB. Zły, jeśli żyjesz z przelewów z oszczędności: pieniądze wpływają na konto, on ich nie widzi i rysuje wesołe dodatnie dni. Na prawdziwym budżecie konta były 9000 zł na minusie, pokrytym przelewami z „Inwestycje” — a Klasyczny pokazywał +10 dni.

##### Z uwzględnieniem oszczędności · najbliżej prawdy

Przelew z oszczędności to pieniądze wchodzące do budżetu, przelew na oszczędności — wychodzące. Wydatki ponad to, co było, mierzy się w dniach Twojego dochodu: wydałeś ponad stan tygodniowy dochód — około minus 7 dni.

Wynik to średnia z ostatnich 10 wydatków, więc jeden wydatek na minusie wśród pokrytych zostaje złagodzony.

##### Z oszczędnościami i głębokością minusa

To samo co poprzedni, dopóki budżet jest na plusie. Ale gdy jest na minusie, pokazuje nie średnią, tylko głębokość dziury: ile dni zwykłego dochodu zajmie jej zamknięcie.

To już nie wiek, tylko sygnał alarmowy. Wygodny, gdy wychodzisz z minusa: liczba uczciwie maleje z każdą wypłatą.

##### Który wybrać

Najbliżej prawdy jest **„Z uwzględnieniem oszczędności”**: liczy dokładnie pieniądze na kontach budżetowych, ze wszystkim, co przyszło z oszczędności i do nich poszło. Klasyczny jest uczciwy tylko wtedy, gdy oszczędności nie ruszasz. Głębokość minusa — dla tych, kto jest teraz na minusie i chce widzieć, ile zostało. Jeśli nie przekładasz pieniędzy na oszczędności i z powrotem i nie wydajesz więcej, niż masz, wszystkie trzy pokażą tę samą liczbę.

#### Wiek 30 dni i więcej: żyj z pieniędzy poprzedniego miesiąca {#overview-age-month}

Skoro wydatki opłaca już poprzednia wypłata, temu miesiącowi bieżąca nie jest potrzebna. Oddaj ją od razu następnemu miesiącowi: wtedy każdy miesiąc zaczyna się z gotowymi pieniędzmi i rozdysponowujesz je z góry, zamiast czekać na wypłatę.

##### Jak to zrobić

1. Zapisz wypłatę jak zwykle: „+ Transakcja” → „Przychodzące”, odbiorca, kwota.
2. Dotknij pola „Kategoria”. Otworzy się arkusz „Gdzie zaksięgować przychód”.
3. Wybierz „Przychód na grudzień” — następny miesiąc — zamiast „Przychód na listopad”. Zapisz.

Data transakcji zostaje prawdziwa — dzień, w którym przyszły pieniądze. Zmienia się tylko miesiąc budżetu, w którym się pojawią. Już zapisaną wypłatę przenosi się tak samo: otwórz ją i zmień kategorię.

##### Od której wypłaty zacząć

Od tej, której jeszcze nie rozłożyłeś do kopert. Przeniesienie zmniejsza „nierozdysponowane” tego miesiąca o kwotę wypłaty. Jeśli potem pojawi się czerwone „Rozdysponowano za dużo”, te pieniądze już pracują w tym miesiącu: wróć wypłatę do tego miesiąca i przenieś następną.

##### Jak zmienia się budżet

- **Ten miesiąc** żyje z tego, co przyszło wcześniej. Nowa wypłata nie trafia już do jego „nierozdysponowane”.
- **Następny miesiąc** dostaje pieniądze z góry. Na ekranie „Budżet” przewiń naprzód strzałką „›” — wypłata już jest w jego „nierozdysponowane”, i koperty można napełnić przed 1-ym. Na ekranie „Przegląd”, w „Budżet miesiąca” pod kreską — wiersz „Budżet grudnia”.
- **1-go** cały miesiąc jest już opłacony. Pieniądze rozdysponowuje się raz, na początku miesiąca, a nie po kawałku po każdej wpłacie. „Rozdysponowane w zeszłym miesiącu” w automatycznym rozdysponowaniu robi to jednym dotknięciem.
- **Cele „% dochodu”** od dochodu miesiąca są znane od pierwszego dnia: dochód miesiąca przyszedł w poprzednim.
- **Raporty** („Przychody i wydatki”, „Zapłać sobie”) liczą taką wypłatę w miesiącu, na który jest odłożona.
- **Sam wiek pieniędzy** od tej metki nie rośnie: rośnie, gdy wydajesz mniej, niż zarabiasz. Metka utrwala zapas — pieniądze następnego miesiąca nie rozpuszczą się w tym. Dopóki nie przyjdzie jego miesiąc, taki przychód nie liczy się do wieku.

### Menu „⋮” {#overview-menu}

Budżety, wygląd ekranu „Przegląd” i tryb wyświetlania.

[Menu „⋮” ekranu „Przegląd”: Budżety, Widżety, Ukryj kwoty, Wskazówki, Baza wiedzy]

(A)
#### Budżety

Wszystko o budżetach na jednym arkuszu.

*Jak to działa:*
„Utwórz nowy budżet”, „Wybierz budżet”, „Usuń budżet”. Ostatniego pozostałego budżetu usunąć się nie da — aplikacji potrzebny jest choć jeden. Żeby po prostu przełączyć się na inny budżet, szybciej dotknąć nazwy na górze ekranu.

(B)
#### Widżety

Które bloki pokazywać na ekranie „Przegląd” i w jakiej kolejności.

*Jak to działa:*
Ptaszek — blok widoczny, pusto — ukryty. Żeby przesunąć blok wyżej albo niżej, przeciągnij go za uchwyt po prawej. Ustawienie mieszka na tym urządzeniu: na tablecie „Przegląd” może wyglądać inaczej niż na telefonie.

(C)
#### Ukryj kwoty

Kropki zamiast liczb. Na chwilę, gdy ekran widzi ktoś jeszcze.

*Jak to działa:*
Odwróciłeś telefon do kogoś, robisz zrzut dla wsparcia, nagrywasz wideo — włącz, a kwoty na wszystkich ekranach zmienią się w „••••”. Znak „+” albo „−” zostaje: mówi, w którą stronę poszły pieniądze, ale nie ile. Paski, wykresy i kolory zostają, jak były.

Dopóki tryb jest włączony, w nagłówku ekranu „Przegląd” jest przekreślone oko — dotknij go, by przywrócić kwoty. Albo w tym samym „⋮” — punkt nazywa się teraz „Pokaż kwoty”. Tryb przetrwa ponowne uruchomienie aplikacji.

(D)
#### Wskazówki

Wszystkie wskazówki tego ekranu w jednym miejscu.

(E)
#### Baza wiedzy

Ten artykuł na stronie: otworzy się w przeglądarce, w języku aplikacji.

[Arkusz „Widżety przeglądu”: bloki z ptaszkami i uchwytami do przeciągania]
**„Widżety”.** Ptaszek — pokazuj, uchwyt po prawej — przeciągnij.

### Co można zrobić na ekranie {#overview-gestures}

Większość wierszy na ekranie „Przegląd” jest tylko do czytania. Nacisnąć można te, które gdzieś prowadzą.

| Zrób to | Co się stanie |
|---|---|
| Pociągnij ekran w dół | Przelicz wszystkie bloki. |
| Dotknij nazwy budżetu | Przełącz na inny budżet. |
| Dotknij „Nierozdysponowane” | Arkusz „Automatyczne rozdysponowanie budżetu” — jeśli jest co rozdać. |
| Przesuń kartę w lewo albo w prawo | Inny miesiąc — w „Gdzie poszły pieniądze”, „Budżet miesiąca”, „Kalendarz” i „Wydatki miesiąca”. Przy pierwszym uruchomieniu palec sam pokaże ten gest. |
| Dotknij wiersza przekroczenia | [Ekran kategorii](#category): saldo, wydatki, transakcje miesiąca. |
| Dotknij dnia kalendarza | Arkusz dnia: co się działo tego dnia. |
| Dotknij „Cele” albo tagu | Ekran „Cele” albo ekran tagu. |

## Budżet {#budget}

Twoje koperty. Tu decydujesz, ile pieniędzy odłożyć na jedzenie, czynsz i wszystko inne — i widzisz, ile zostało w każdej kopercie.

*Zakładka „Budżet” na dole ekranu*

### Po co ten ekran {#budget-why}

Wyobraź sobie stos kopert z napisami „Zakupy spożywcze”, „Czynsz”, „Media i rachunki”. W dzień wypłaty rozkładasz do nich pieniądze. Kiedy wydajesz, bierzesz z właściwej koperty. Koperta pusta — na to w tym miesiącu pieniędzy już nie ma, chyba że przełożysz trochę z innej.

Ekran „Budżet” to właśnie ten stos kopert. Każdy wiersz to koperta (w aplikacji nazywa się kategorią), a kwota po prawej — ile jest w niej teraz. Główna zasada jest jedna: rozdaj wszystkie pieniądze do kopert, aż na górze pojawi się „Wszystko rozdysponowano”.

##### Podziel wypłatę

Przyszły pieniądze — na górze pojawiło się „nierozdysponowane”. Rozdaj je do kopert.

##### Sprawdź przed zakupem

„Stać mnie na nowe buty?” — spójrz na kwotę obok „Odzież i obuwie”.

##### Usuń czerwień

Wydałeś więcej, niż odłożyłeś? Przełóż pieniądze z innej koperty.

### Co gdzie jest na ekranie {#budget-screen}

Dotknij dowolnego zrzutu, żeby otworzyć go na cały ekran.

[Ekran „Budżet”, sierpień: „Wszystko rozdysponowano”, chipy „Za mało” i „Dostępne”, grupy kategorii z saldami i paskami]

1. **Miesiąc** — który miesiąc teraz dzielisz.

   *Jak to działa:*
   Strzałki „‹” i „›” przewijają miesiące. Dotknij nazwy, by otworzyć wybór miesiąca i nie przewijać po jednym.

   Naprzód można iść bez ograniczeń — i to się przydaje: już we wrześniu możesz odłożyć pieniądze na grudniowe prezenty. Każdy miesiąc ma własne koperty, a to, co zostało w kopercie, samo przechodzi na następny miesiąc.

2. **„Nierozdysponowane”** — pieniądze, których nie ma jeszcze w żadnej kopercie. Najważniejsza liczba na ekranie.

   *Jak to działa:*
   Przychodzi wypłata — trafia tutaj. Twoje zadanie — rozdać ją do kopert, aż dojdzie do zera. To miejsce ma trzy stany:

   - **liczba na kolorowym chipie** — pieniądze czekają na zadanie. Dotknij chipa, by otworzyć automatyczne rozdysponowanie: aplikacja zaproponuje podzielić pieniądze jak w zeszłym miesiącu, według średnich wydatków, według celów albo według Twoich procentów;
   - **„✓ Wszystko rozdysponowano”** — cel osiągnięty: każdy złoty ma zadanie. Jak na zrzucie;
   - **czerwone „rozdysponowano za dużo”** — włożyłeś do kopert więcej, niż masz. Dotknij — i zabierz nadmiar z kopert.

3. **Menu „⋮”** — cele, kolejność, wygląd wierszy. Każdy punkt jest opisany [niżej](#budget-menu).

4. **Chipy filtra** — pokazują tylko koperty, które potrzebują uwagi.

   *Jak to działa:*
   „Przekroczone” — koperty na minusie. „Za mało” — koperty, którym jeszcze brakuje do celu tego miesiąca. „Dostępne” — tam, gdzie są pieniądze. Liczba na chipie to ile jest takich kopert; na zrzucie dwie czekają na pieniądze do celu, a w dziewięciu są pieniądze.

   Chipa z zerem nie widać: jeśli nic nie jest przekroczone, „Przekroczone” po prostu się nie pojawia. Naciśnij „Wszystkie”, żeby wrócić do całej listy.

5. **Grupa** — półka podobnych kopert.

   *Jak to działa:*
   „Wydatki stałe”, „Wydatki codzienne”… Po prawej — ile jest we wszystkich kopertach tej grupy. Dotknij nazwy, by zwinąć grupę z widoku. Przytrzymaj — menu: „Zmień nazwę grupy”, dodaj kategorię albo nową grupę, usuń.

   Włącz „Procent dochodu” w menu „⋮” — a pod kwotą grupy zobaczysz, jaki procent dochodu miesiąca włożyłeś do wszystkich jej kopert razem. Od razu widać, że „Wydatki stałe” biorą, powiedzmy, pół wypłaty, a „Wydatki codzienne” dostają jedną trzecią. Procent liczy wszystkie koperty grupy, nawet jeśli grupa jest zwinięta albo część kopert ukrył filtr.

6. **⊕ obok grupy** — nowa koperta w tej grupie.

7. **Kategoria** — jedna koperta.

   *Jak to działa:*
   Dotknij wiersza, by otworzyć [ekran kategorii](#category): wszystkie wydatki z tej koperty za miesiąc i trendy z minionych miesięcy.

   Wiersz można przesunąć palcem w lewo albo w prawo — żeby zmienić nazwę, przenieść do innej grupy albo usunąć. Jak dokładnie — w sekcji [„Co można zrobić z wierszem”](#budget-gestures).

8. **Kwota po prawej** — ile jest w kopercie teraz. Jej kolor to główna podpowiedź ekranu.

   *Jak to działa:*
   - **Zielona** — pieniądze są, możesz wydawać.
   - **Szara 0,00** — koperta pusta. Przy już zapłaconym czynszu to normalne.
   - **Czerwona, z ikoną portfela** — wydałeś więcej, niż było. Ten minus zje pieniądze następnego miesiąca.
   - **Żółta, z ikoną karty** — też minus, ale płaciłeś kartą kredytową: urósł dług na karcie, a pieniędzy budżetu nie ruszono.

   #### Jak włożyć pieniądze do koperty

   1. Dotknij kwoty po prawej.
   2. Otworzy się okno z klawiaturą. Pokazuje nie saldo, tylko ile już odłożyłeś w tej kopercie w tym miesiącu.
   3. Wpisz nową kwotę — pierwsza cyfra zastępuje starą. Chcesz dodać, a nie zastąpić? Naciśnij „+”, wpisz 105 i „=”.
   4. Koperta ma cel? Naciśnij „Do celu: …” — potrzebna kwota wpisze się sama.
   5. Naciśnij „Gotowe”.

   Pieniądze biorą się z „nierozdysponowane” na górze — zmniejsza się dokładnie o tyle samo.

   #### Jak usunąć czerwony minus

   1. Dotknij czerwonej kwoty.
   2. Otworzy się arkusz „Przekroczenie: Zakupy spożywcze” z dwoma punktami. „Zmień budżet” otwiera klawiaturę kwoty tej koperty, żeby dołożyć z „nierozdysponowane”. „Pokryj z innej kategorii” przekłada pieniądze z innych kopert; o tym niżej.
   3. Naciśnij „Pokryj z innej kategorii”. Na górze — „Do pokrycia: 105 zł”, niżej — „Skąd wziąć pieniądze:”: pierwszy wiersz to „Nierozdysponowane”, potem każda koperta, w której są pieniądze, z saldem każdej.
   4. Każdy wiersz ma przycisk „Weź …”: aplikacja już policzyła, ile można stamtąd wziąć. Naciśnij go obok koperty, którą możesz uszczuplić. Na przykład „Rozrywka i hobby”.
   5. Otworzy się klawiatura z tą kwotą. Zgadzasz się — naciśnij „Weź …”. Chcesz wziąć mniej? Wpisz własną kwotę.
   6. Jedna koperta nie wystarczyła? Resztę weź z następnej. Gdy minus zniknie, arkusz powie „Przekroczenie pokryte!”.

9. **Pasek** — ile z odłożonego już wydano.

   *Jak to działa:*
   Przy „Media i rachunki” na zrzucie pasek jest prawie pełny: prawie wszystko odłożone na miesiąc już poszło. Wyjdziesz poza koniec — pasek zrobi się czerwony.

   Jeśli koperta ma cel, pasek pokazuje już nie wydatki, tylko na ile cel jest wykonany. Paski można wyłączyć w menu „⋮”.

   W bieżącym miesiącu pasek wydatków ma cienką pionową kreskę — dziś: ile miesiąca już minęło. Jeśli wypełnienie przeszło kreskę, wydajesz szybciej, niż mija miesiąc, i koperta może nie dotrwać do końca miesiąca. Pasek celu takiej kreski nie ma.

10. **„Wydano … z …”** — wydatki tego miesiąca na tle tego, co odłożono w tym miesiącu.

    *Jak to działa:*
    „Wydano 278,00 zł z 300,00 zł” przy „Media i rachunki”: odłożyłeś 300 zł, wydałeś 278 zł. Czemu więc po prawej stoi 89, a nie 22? Bo w kopercie leżały też pieniądze z minionych miesięcy — saldo przechodzi razem z kopertą.

    Z tego samego powodu „Zakupy spożywcze” mają czerwoną linijkę — „Wydano 400,00 zł ponad 1 200,00 zł” — a kwota po prawej jest zielona: plan miesiąca przekroczono, ale zapas z minionych miesięcy pokrył przekroczenie. Koperta jest na plusie, wszystko w porządku.

11. **Flaga celu** — „Osiągnięty” albo „jeszcze …”.

    *Jak to działa:*
    Cel mówi kopercie, ile ma w niej leżeć: „1200 zł na jedzenie co miesiąc” albo „3900 zł na urlop do lipca”. Flaga pod kwotą pokazuje, czy cel w tym miesiącu jest wykonany, a jeśli nie — ile jeszcze dołożyć. Cele ustawia się na ekranie kategorii.

12. **„Dziś”** — wróć do bieżącego miesiąca. Pojawia się, gdy przeszedłeś do innego.

13. **Nowy wydatek** — te same trzy przyciski co na ekranie „Transakcje”. [Więcej w artykule „Transakcje”](#transactions)

### Menu „⋮” {#budget-menu}

Cele, kolejność kopert i co pokazywać w wierszach.

[Otwarte menu „⋮” ekranu „Budżet”: Cele, Rozdysponuj na cele, Zmień kolejność, Paski postępu, Procent dochodu, Ukryte kategorie, Wskazówki, Baza wiedzy]

(A)
#### Cele

Wszystkie cele budżetu na jednym ekranie. Więcej w artykule [„Cele”](#goals).

*Jak to działa:*
Widać, które koperty idą zgodnie z planem, a którym brakuje. Dotknij celu, by go zmienić.

(B)
#### Rozdysponuj na cele

Dołóż każdej kopercie tyle, ile brakuje jej do celu. Więcej w artykule [„Cele”](#goals).

*Jak to działa:*
Aplikacja bierze pieniądze z „nierozdysponowane” i rozdaje je kopertom z celami — każdej dokładnie tyle, ile brakuje. Najpierw pokazuje plan: co dokąd — i dopiero po Twoim „tak” rozdysponowuje.

Jeśli wszystkie cele miesiąca są już wykonane, pokazuje, ile każdy z nich ma — żeby było widać, dlaczego nie ma czego rozdawać.

(C)
#### Zmień kolejność

Przestaw koperty i grupy.

*Jak to działa:*
Na wierszach pojawią się uchwyty — przeciągaj je. Najczęściej używane koperty wygodnie trzymać na górze. Gdy skończysz, ten sam punkt menu nazywa się „Zakończ sortowanie”.

(D)
#### Paski postępu

Pokazuj pasek i linijkę „Wydano … z …” pod każdą kopertą.

*Jak to działa:*
Wyłącz, jeśli chcesz krótkiej listy: zostaną same nazwy i kwoty. Koperty z celem zawsze zachowują pasek — pokazuje cel.

**Zaraz po instalacji:** włączone.

(E)
#### Procent dochodu

Jaki procent dochodu miesiąca odkładasz w każdej kopercie.

*Jak to działa:*
Obok kwoty pojawia się etykieta w rodzaju „12%”: czynsz zjada 40% dochodu, jedzenie 15%. Każda grupa pokazuje pod swoją kwotą własny łączny procent, ze wszystkich swoich kopert. Wydatki procentu nie zmieniają — tylko to, ile odkładasz, i sam dochód miesiąca.

**Od czego liczony jest procent.** Nie od wszystkich pieniędzy, które rozdajesz, tylko od linijki „Budżet listopada” w karcie „Budżet miesiąca” na ekranie „Przegląd”: od dochodu przypisanego do tego miesiąca. „Przeniesione z października” do niego nie wchodzi. Rozdasz też resztę z poprzedniego miesiąca — procenty wyjdą wyższe, niż są naprawdę, a razem mogą przekroczyć 100%. Ile z rozdysponowanego to dochód tego miesiąca, a ile reszta — widać w tej samej karcie ([„Przegląd”](#overview-blocks)).

**Zaraz po instalacji:** wyłączone. **Zobacz też:** automatyczne rozdysponowanie „Według procentów” — dotknij „nierozdysponowane”.

(F)
#### Ukryte kategorie

Koperty, które odłożyłeś z widoku.

*Jak to działa:*
Koperty, w której były wydatki, usunąć się nie da — raporty potrzebują jej historii. Można ją ukryć: znika z listy, a dawne wydatki zostają. Tutaj ukryte koperty się przywraca.

(G)
#### Wskazówki

Wszystkie wskazówki tego ekranu w jednym miejscu.

(H)
#### Baza wiedzy

Ten artykuł na stronie: otworzy się w przeglądarce, w języku aplikacji.

### Co można zrobić z wierszem {#budget-gestures}

W wierszu nie ma przycisków „zmień” i „usuń”. Zamiast nich przesuwasz wiersz koperty palcem w bok — do przycisku, który wyłania się spod spodu. Pierwszy wiersz listy raz pokaże sam, jak to wygląda.

| Zrób to | Co się stanie |
|---|---|
| Dotknij wiersza | [Ekran kategorii](#category): wydatki tej koperty za miesiąc i trendy. |
| Dotknij kwoty | Włóż pieniądze do koperty, a przy czerwonej — usuń minus. Kroki są w punkcie [„Kwota po prawej”](#budget-balance) wyżej. |
| Przesuń w lewo | Po prawej pojawia się przycisk „Edytuj”. Naciśnij, by otworzyć „Edytuj kategorię”: nowa nazwa i pole „Grupa”. Wybierz w nim inną grupę — a koperta przejdzie tam, ze wszystkimi pieniędzmi i historią. |
| Przesuń w prawo | Po lewej pojawia się czerwony przycisk „Usuń”. Pusta koperta, bez jednego zakupu, usuwa się po pytaniu „Usunąć kategorię?”. Jeśli były wydatki, aplikacja powie „Nie można usunąć — są transakcje” i zaproponuje „Ukryj”: koperta zniknie z listy, a jej historia zostanie. Przywrócić ukrytą — menu „⋮” → „Ukryte kategorie”. |
| Przytrzymaj grupę | Menu grupy: „Zmień nazwę grupy”, dodaj kategorię albo nową grupę, usuń grupę. |

Kopert z grupy „Płatności kartami” przesuwać się nie da: zarządza nimi sama karta kredytowa, a pieniądze odkładają się w nich automatycznie.

## Cele {#goals}

Ile pieniędzy potrzebuje każda koperta — i ile jeszcze włożyć w tym miesiącu.

*„Budżet” → „⋮” → „Cele”*

### Po co cele {#goals-why}

Koperta odpowiada na pytanie „ile tu jest”. Cel odpowiada na „ile tu powinno być”. Aplikacja porównuje jedno z drugim i mówi, ile jeszcze włożyć.

**„Jedzenie to 1200 zł miesięcznie”** — cel „Miesięcznie” na „Zakupy spożywcze”. Co miesiąc aplikacja przypomni, żeby odłożyć te 1200 zł.

**„Urlop w marcu, potrzebuję 6000 zł”** — cel „Do daty”. Aplikacja sama rozłoży kwotę na miesiące: tyle w listopadzie, tyle w grudniu.

**„W funduszu na czarną godzinę ma leżeć 12 000 zł”** — cel „Saldo”. Wydasz część — aplikacja poprosi, by ją oddać.

Sam cel pieniędzy nie przekłada: tylko liczy. Pieniądze do koperty wkładasz Ty — na ekranie „Budżet” albo jednym przyciskiem „Rozdysponuj na cele” (więcej o nim [niżej](#goals-allocate)). Każda kategoria ma jeden cel.

### Co gdzie jest na ekranie {#goals-screen}

Ekran „Cele” otwiera się z ekranu „Budżet”: „⋮” → „Cele”. Są na nim wszystkie kategorie ze swoimi celami na wybrany miesiąc. Zrzut pokazuje listopad w budżecie demonstracyjnym: pięć celów pięciu rodzajów.

[Ekran Cele: miesiąc listopad 2026, podsumowanie Razem 5 celów, Koszt miesiąca 7627, Brakuje 4825; grupy kategorii; Zakupy spożywcze — miesięcznie 1200, Osiągnięty; Prezenty — lista 520; Podróże — do daty 6000; Na czarną godzinę — saldo 12 000; Inwestycje — % dochodu 840]

(1)
**Miesiąc** — strzałki „‹ ›” przewijają miesiące, dotknięcie nazwy otwiera wybór miesiąca. Cele liczą się dla tego miesiąca. Wyjdziesz z bieżącego — na dole pojawi się przycisk „Dziś”.

(2)
**Menu „⋮”** — które kategorie pokazywać, paski postępu, wskazówki — [niżej](#goals-menu).

(3)
**Podsumowanie** — „Razem” to ile jest celów. „Koszt miesiąca” to ile potrzebują wszystkie cele w tym miesiącu. „Brakuje” to ile jeszcze nie włożono.

(4)
**Grupa** — te same grupy co na ekranie „Budżet”. Pod nazwą — ile celów ma grupa i ile im brakuje albo „wszystko pokryte”. Dotknięcie zwija grupę.

(5)
**Kategoria bez celu** — „brak celu”. Dotknij wiersza albo „⊕” — otworzy się „Nowy cel”.

(6)
**Kategoria z celem** — cały cel w trzech linijkach. Dotknięcie otwiera go do edycji.

*Jak to działa:*
Pierwsza linijka: nazwa kategorii, rodzaj celu („miesięcznie”, „do daty”, „saldo”, „% dochodu”, „lista”) i kwota celu. Druga: pasek — ile zrobiono — i stan: zielona flaga i „Osiągnięty” albo flaga i „jeszcze …” — ile dołożyć. Trzecia: warunek celu słowami i procent wykonania.

Na zrzucie „Zakupy spożywcze” są osiągnięte: w listopadzie w kopercie odłożono już 1200 zł. A „Podróże i urlop” brakuje w tym miesiącu 300 zł — tyle trzeba miesięcznie, żeby do marca uzbierać 6000 zł.

#### Menu „⋮” {#goals-menu}

[Menu ekranu Cele: Wszystkie kategorie, Tylko z celami, Niedofinansowane, Paski postępu, Wskazówki, Baza wiedzy]

(A, B, C)
#### Które kategorie pokazywać

„Wszystkie kategorie”, „Tylko z celami” albo „Niedofinansowane” — te, którym w tym miesiącu czegoś brakuje do celu. Wybór jest zapamiętywany; jeśli nie wszystko jest widoczne, na „⋮” zapala się kropka.

(D)
#### Paski postępu

czy pokazywać paski i procenty. Bez nich wiersz jest krótszy, a cel i kwota zostają na miejscu.

(E)
#### Wskazówki

wskazówki tego ekranu listą.

(F)
#### Baza wiedzy

Ten artykuł na stronie: otworzy się w przeglądarce, w języku aplikacji.

### Jak ustawić cel {#goals-new}

Cel ustawia się tutaj, na ekranie „Cele”, albo na ekranie samej kategorii — przyciskiem „Dodaj cel” w karcie „Cel”. To ten sam arkusz.

[Arkusz Nowy cel: Rodzaj celu Miesięcznie, Kwota Podaj…, przycisk Zapisz wyszarzony]

[Arkusz Rodzaj celu: Miesięcznie, Do daty, Saldo, % dochodu, Lista — każdy z wyjaśnieniem]

1. Dotknij kategorii bez celu. Otworzy się „Nowy cel”.
2. „Rodzaj celu” — dotknij i wybierz jeden z pięciu. Każdy mówi pod nazwą, do czego służy. Którego używać kiedy — [niżej](#goals-types).
3. „Kwota” — dotknij i wpisz na klawiaturze aplikacji. Przy „% dochodu” zamiast kwoty jest „Procent dochodu”, a przy „Lista” — wiersze listy.
4. „Do daty” ma jeszcze „Uzbierać do miesiąca” — miesiąc, do którego potrzebna jest cała kwota.
5. „Zapisz”. Dopóki kwota nie jest podana, przycisk jest szary.

**Zmienić albo usunąć** — dotknij kategorii z celem — otworzy się „Edytuj cel” z tymi samymi polami. Na dole — „Usuń” i „Zapisz”. Usunięty cel znika; pieniądze w kopercie zostają.

**Podpowiedź z płatności zaplanowanej** — jeśli kategoria ma płatność zaplanowaną, karta celu na ekranie kategorii pokazuje „Z płatności zaplanowanej: …”. Płatność co miesiąc podpowiada „miesięcznie” na jej kwotę; raz w roku — „uzbierać … do płatności”.

### Pięć rodzajów celu {#goals-types}

Rodzaj celu to zasada, według której aplikacja liczy, „ile potrzeba w tym miesiącu”. Niżej każda zasada z przykładem ze zrzutu.

#### „Miesięcznie” — na to, co wydajesz co miesiąc {#goals-monthly}

**Jak się liczy** — co miesiąc trzeba odłożyć tę samą kwotę. Cel patrzy na to, ile włożyłeś do koperty **w tym miesiącu**, a nie na to, ile w niej zostało.

*Jak to działa:*
„Zakupy spożywcze”, 1200 zł miesięcznie. Odłożyłeś w listopadzie 1200 zł — cel „Osiągnięty”, nawet jeśli połowa już wydana. Na wydatki te pieniądze właśnie są. Włożyłeś 810 zł — „jeszcze 390,00 zł”.

Na jedzenie, internet, transport, subskrypcje.

#### „Do daty” — uzbierać kwotę do określonego miesiąca {#goals-bydate}

[Arkusz Edytuj cel: Rodzaj celu Do daty, Kwota 6000, Uzbierać do miesiąca marzec 2027]

**Jak się liczy** — to, czego jeszcze brakuje do całej kwoty, dzieli się przez pozostałe miesiące, licząc ten. Wychodzi wpłata miesiąca.

*Jak to działa:*
„Podróże i urlop”, 6000 zł do marca. Na początku listopada w kopercie leży 2250 zł, więc brakuje 3750 zł. Do marca, licząc listopad, jest pięć miesięcy — 750 zł miesięcznie. Odłożono już w listopadzie 450 zł — cel mówi „jeszcze 300,00 zł”.

Opuścisz miesiąc — brak rozłoży się na pozostałe i wpłata sama urośnie. Włożysz więcej — następne wpłaty się zmniejszą.

Pasek pokazuje coś innego: ile z całej kwoty już leży w kopercie. Na zrzucie — 45%.

**Do czego** — urlop, ubezpieczenie raz w roku, prezenty na święta, wiosenny remont — wszystko, co nie zdarza się co miesiąc, ale jest przewidywalne.

#### „Saldo” — trzymaj zapas {#goals-balance}

**Jak się liczy** — w kopercie zawsze ma leżeć ta kwota. Ile brakuje na początku miesiąca, o tyle prosi cel.

*Jak to działa:*
„Na czarną godzinę”, 12 000 zł. W kopercie jest teraz 8625 zł — cel prosi „jeszcze 3375,00 zł”. Terminu nie ma: dokładaj, kiedy możesz. Wziąłeś część zapasu na naprawę? Cel znów poprosi, by ją oddać.

Na fundusz awaryjny, apteczkę, zapas na naprawę auta.

#### „% dochodu” — odkładaj procent dochodu {#goals-percent}

[Arkusz Edytuj cel: Rodzaj celu % dochodu, Procent dochodu 10%, wybrane Od dochodu z tego miesiąca, Od średniego dochodu; Dochód za listopad 8400, Cel na miesiąc 840]

**Jak się liczy** — cel miesiąca to Twój procent dochodu. Aplikacja pokazuje kwotę od razu w arkuszu: „Dochód za listopad: 8 400,00 zł · Cel na miesiąc: 840,00 zł”.

**„Od dochodu z tego miesiąca”** — liczony od pieniędzy, które **już przyszły**. Przyszła pierwsza część pensji — jeden cel; przyszła druga — cel urósł. Dopóki w miesiącu nie ma dochodu, cel jest zerem i liczy się jako wykonany. **Domyślnie:** wybrany ten.

**„Od średniego dochodu”** — średni dochód z ostatnich 12 miesięcy. Cel jest znany od 1-go i nie zmienia się w ciągu miesiąca — wygodne, jeśli dostajesz pensję pod koniec miesiąca.

**Do czego** — „odkładać 10% wszystkiego, co zarabiam” — inwestycje, oszczędności, darowizny.

#### „Lista” — co kupić w tym miesiącu {#goals-list}

Cel z wierszy: wypisz, na co pójdą pieniądze kategorii w tym miesiącu — a kwota celu zsumuje się sama. Każdy miesiąc ma własną listę.

[Arkusz Edytuj cel: Rodzaj celu Lista, Lista na listopad: Urodziny mamy 300, Tort 120 — zapisano 130, Koleżanka 100 — zapisano 70 · 2 transakcje; Dodaj wiersz; Cel na listopad 520]

[Ekran kategorii Prezenty i święta: karta Cel — 520 miesięcznie, z listy; Rozdysponować jeszcze 310; wiersze listy]

[Arkusz Wiersz listy: Koleżanka, Kwota planowana 100; Zapisano 70 z 100, Zmniejsz do 70; dwie transakcje — 60 i 10; Zapisz transakcję; Usuń, Zapisz]

**Wiersze** — wybierz „Lista” w „Rodzaj celu”, a wiersze miesiąca pojawią się od razu w arkuszu. „⊕ Dodaj wiersz” — nazwa i kwota. Na dole — „Cel na listopad”: suma wszystkich wierszy. Dopóki wierszy nie ma, „Zapisz” jest szary.

**Na ekranie kategorii** — wiersze mieszkają w karcie „Cel” pod paskiem. Tam się z nimi pracuje: dotknij wiersza, by go zmienić, przesuń w lewo — „Zapisz”, w prawo — „Usuń” (z „Cofnij” w komunikacie na dole).

**„Zapisz”** — otwiera zwykły formularz transakcji: kwota z planu (popraw ją na prawdziwą), ta kategoria, nazwa wiersza w notatce. Po zapisaniu pod wierszem na zielono: „✓ zapisano 130,00 zł · 12 lis”, a po prawej zostaje kwota planu: na zrzucie tort zaplanowano za 120 zł, a kupiono za 130 zł.

*Jak to działa:*
Wiersz można zapisać jeszcze raz: zakup bywa kilkoma płatnościami — opony, potem montaż. Formularz wstawi resztę planu, a pod wierszem pojawi się suma wszystkich zapisów i ich liczba. W arkuszu wiersza jest link do każdej transakcji i „Zapisz transakcję”; przycisk „Zmniejsz do …” zrównuje plan z zapisaną kwotą. Zapisanego wiersza nie da się przenieść na inny miesiąc.

**Przenieść na inny miesiąc** — przytrzymaj wiersz, by włączyć wybór. Zaznacz potrzebne; na dole — ich suma i „⋮”: „Przenieś na grudzień”, „Przenieś na inny miesiąc…”, „Usuń”.

**Nowy miesiąc** — lista jest pusta: „Lista na grudzień jest pusta” i przycisk „Weź wiersze z listopada · kwota”: wiersze poprzedniego miesiąca są kopiowane (bez znaczków „zapisano”), a poprzedni miesiąc się nie zmienia.

### Karta „Cel” na ekranie kategorii {#goals-card}

Dotknij kategorii na ekranie „Budżet” — otworzy się [jej ekran](#category). Jego karta „Cel” pokazuje cel na miesiąc ekranu i mówi, ile włożyć.

[Ekran kategorii Podróże i urlop: podsumowanie, karta Cel — Uzbierać 6000 do marca, Rozdysponować jeszcze 300 w tym miesiącu, przełącznik Według kwoty / Według terminu, Odkładać miesięcznie 1200, suwak, Uzbierać do miesiąca Luty 2027, 1 mies. przed terminem, Ustaw jako termin celu]

**Nagłówek** — opis celu i ołówek do edycji. Niżej — pasek i „Rozdysponować jeszcze … w tym miesiącu” albo „Cel miesiąca osiągnięty”.

**Oszacowanie „Według kwoty” / „Według terminu”** — przy celu „Do daty”, pod paskiem: a gdyby odkładać więcej albo mniej? „Według kwoty”: przesuń suwak „Odkładać miesięcznie” — „Uzbierać do miesiąca” pod nim pokaże, kiedy zdążysz, a linijka niżej powie „… mies. przed terminem”, „… mies. po terminie” albo „Dokładnie w terminie”. „Według terminu”: przesuń „Uzbierać do miesiąca” — pod suwakiem widać, ile odkładać miesięcznie. Potrzebna dokładna kwota? Dotknij „Odkładać miesięcznie” i wpisz ją na klawiaturze.

*Jak to działa:*
Oszacowanie niczego nie zapisuje: wyjdziesz z ekranu — i wszystko jest jak było. Nowa data się podoba? Naciśnij „Ustaw jako termin celu: …”, a cel ją przyjmie.

Na zrzucie: wkładając 1200 zł miesięcznie, pieniądze na urlop będą gotowe w lutym — miesiąc przed terminem.

**Brak celu** — karta ma jeden przycisk, „Dodaj cel”. Jeśli jest płatność zaplanowana, obok pojawia się podpowiedź „Z płatności zaplanowanej: …”.

### Rozdysponuj na cele {#goals-allocate}

Przyszła wypłata — podziel ją na wszystkie cele jednym przyciskiem. „Budżet” → „⋮” → „Rozdysponuj na cele”.

[Okno Rozdysponować na cele: 690 do 3 kategorii — Prezenty i święta +310, Podróże i urlop +300, Na czarną godzinę +80; Pozostanie 0,00; Anuluj, Rozdysponuj]

**Co robi** — bierze pieniądze z „nierozdysponowane” i wkłada do kopert, których celom w tym miesiącu czegoś brakuje. Najpierw pokazuje plan — ile do której koperty; „Rozdysponuj” to wykonuje, „Anuluj” niczego nie zmienia.

**Jeśli nie starcza na wszystko** — cele są pokrywane po kolei, z góry na dół, tak jak ułożone są kategorie na ekranie „Budżet”, a ostatni dostaje to, co zostało. Na zrzucie 690 zł wystarczyło na „Prezenty i święta” i „Podróże i urlop” w całości, a „Na czarną godzinę” dostała 80 zł z 3375 zł. Ważniejsze trzymaj wyżej — kolejność zmienia się na ekranie „Budżet”: „⋮” → „Zmień kolejność”.

**Jeśli nie ma czego rozdysponować** — „nierozdysponowane” jest puste — aplikacja to powie. Nie ma celów — podpowie, gdzie je ustawić. Wszystkie cele już wykonane — pokaże dla każdego, ile odłożono i ile trzeba.

**To samo w automatycznym rozdysponowaniu** — dotknij „nierozdysponowane” w nagłówku ekranu „Budżet” — tryb „Niedofinansowane” robi to samo. A kalkulator kwoty kategorii na ekranie „Budżet” ma przycisk „Do celu: …” — wpisuje dokładnie to, czego brakuje.

### Gdzie jeszcze widać cele {#goals-elsewhere}

Cel widać nie tylko tutaj.

**„Budżet”** — kategoria z celem ma pod kwotą flagę: „Osiągnięty” albo „jeszcze …”, a pasek pokazuje cel, a nie wydatki. Chip „Za mało” nad listą zostawia tylko kategorie, których celom czegoś brakuje. Więcej w artykule [„Budżet”](#budget).

**„Przegląd”** — blok „Cele” pokazuje, ile jest celów, ile wykonanych i ile jeszcze trzeba w tym miesiącu. Więcej w artykule [„Przegląd”](#overview).

## Ekran kategorii {#category}

Jedna koperta w całości: ile w niej było, ile odłożono i wydano, ile zostało i na ile dni wystarczy. A także cel, notatka, wydatki z minionych miesięcy i wszystkie transakcje miesiąca.

*„Budżet” → dotknij kategorii*

### Po co ten ekran {#category-why}

Na ekranie „Budżet” kategoria ma jeden wiersz i jedną liczbę. Tutaj jest wszystko, co za nią stoi.

##### Czy wystarczy do końca miesiąca

„Dostępne”, a pod nim „≈ … dziennie”: ile możesz wydawać każdego dnia do końca miesiąca, nie wchodząc na minus.

##### Dokąd poszły pieniądze

Wszystkie transakcje tej kategorii za miesiąc, według dni. Dotknij dowolnej, by otworzyć jej kartę.

##### Ile naprawdę potrzebujesz

„Trendy wydatków” pokazują, ile zwykle wychodzi miesięcznie. Jeśli odkładasz mniej, każdy miesiąc kończy się minusem.

### Jak otworzyć {#category-open}

- **„Budżet”** — dotknij wiersza kategorii. Ekran otworzy się na miesiącu wybranym na ekranie „Budżet”. To przy telefonie w pionie: w poziomie dotknięcie wiersza tabeli otwiera kalkulator kwoty, a na tablecie — panel po prawej ([niżej](#category-tablet)).
- **„Przegląd”** — dotknij wiersza w bloku „Przekroczenie” albo „Kończy się”.
- **„Raporty”** — dotknij wiersza listy w „Gdzie poszły pieniądze” albo kafelka w „Odchylenie”. Ekran otworzy się na miesiącu raportu.

### Co gdzie jest na ekranie {#category-screen}

Ekran się przewija: na górze podsumowanie, potem karty „Cel”, „Notatka” i „Trendy wydatków”, a pod nimi transakcje miesiąca. Dotknij zrzutu, by otworzyć go na cały ekran.

[Ekran kategorii Zakupy spożywcze: miesiąc ze strzałkami; podsumowanie — Od października, Zaplanowano, Wydano, Dostępne i ≈ dziennie; karta Cel — Odkładać 1200,00 miesięcznie, Cel miesiąca osiągnięty; Notatka; Trendy wydatków; Transakcje w miesiącu według dni: Rossmann, Lidl, Biedronka; przycisk Transakcja]

1. **Nazwa** — nazwa kategorii. Zmienia się ją w menu „⋮”.

2. **„⋮”** — ukryć, zmienić nazwę albo przenieść do innej grupy, usunąć. Szczegóły — [niżej](#category-menu).

3. **Miesiąc** — „‹ ›” przewijają miesiące: minione i przyszłe, bez ograniczeń. Szczegóły — [niżej](#category-months).

4. **„Od …”** — ile zostało w kopercie z poprzedniego miesiąca.

5. **„Zaplanowano na …”** — ile odłożyłeś w tej kopercie w tym miesiącu. Drobnym drukiem pod kwotą — jaki to procent dochodu miesiąca.

6. **„Wydano …”** — ile wyszło z koperty w tym miesiącu, po odjęciu zwrotów.

7. **„Dostępne”** — ile jest w kopercie teraz. Ta sama liczba co w wierszu kategorii na ekranie „Budżet”.

8. **„≈ … dziennie”** — ile można wydawać dziennie do końca miesiąca. Tylko w bieżącym miesiącu i tylko jeśli „Dostępne” jest powyżej zera.

9. **„Cel”** — cel kategorii na ten miesiąc: ile jeszcze odłożyć. Więcej w artykule [„Cele”](#goals-card).

10. **„Notatka”** — Twój własny tekst o tej kategorii. Szczegóły — [niżej](#category-note).

11. **„Trendy wydatków”** — ile średnio wychodzi miesięcznie. Szczegóły — [niżej](#category-trends).

12. **Data** — transakcje miesiąca według dni, najnowsze na górze. Szczegóły — [niżej](#category-ops).

13. **Transakcja** — wiersz jak na ekranie „Transakcje”, tylko bez kategorii: tu jest tylko jedna.

14. **„+ Transakcja”** — nowa transakcja z kategorią już wybraną w formularzu.

### Podsumowanie: skąd się biorą liczby {#category-stats}

Cztery wiersze podsumowania składają się w jedną formułę:

**„Od …”** + **„Zaplanowano”** − **„Wydano”** = **„Dostępne”**

##### Plus przechodzi na następny miesiąc, minus nie

Nie wydałeś wszystkiego? Reszta zostaje w kopercie i pojawi się w następnym miesiącu w wierszu „Od …”. Wydałeś więcej, niż było? W tym miesiącu „Dostępne” jest czerwone. Gdy kończy się miesiąc, minus się zeruje: w następnym miesiącu „Od …” będzie 0.

*Jak to działa:*
Dokąd idzie wyzerowany minus, zależy od tego, jak płaciłeś. Gotówką albo kartą debetową — zmniejsza „nierozdysponowane” następnego miesiąca. Kartą kredytową — stał się długiem na karcie. Więcej w artykule [„Budżet”](#budget).

##### Procent dochodu

Pod „Zaplanowano” — jaki procent dochodu miesiąca odłożyłeś w tej kopercie. Ten sam procent co w etykiecie „Procent dochodu” na ekranie „Budżet”. Nie ma dochodu w miesiącu — nie ma procentu. Liczony jest od linijki „Budżet …” karty „Budżet miesiąca” — bez reszty z poprzedniego miesiąca; dlaczego procent może wtedy wyglądać na zbyt wysoki — w artykule [„Budżet”](#budget-income-share).

##### „≈ … dziennie”

„Dostępne” dzieli się przez dni pozostałe do końca miesiąca, licząc dziś, i zaokrągla w dół — żeby dzień nigdy nie dostał więcej, niż jest. Wydałeś dziś mniej? Jutro liczba urośnie.

### Notatka {#category-note}

Napisz, co należy do tej kategorii, na co oszczędzasz, na co się umówiliście — wszystko, co pomoże za pół roku. Dotknij pola „Dodaj notatkę do kategorii…” i pisz: notatka zapisuje się sama, przycisku nie ma. Z chmurą dociera na inne urządzenia.

### „Trendy wydatków” {#category-trends}

Ile zwykle wychodzi z tej kategorii. Liczy 12 pełnych miesięcy przed bieżącym; bieżący miesiąc nie wchodzi, bo się jeszcze nie skończył. Wydatki są po odjęciu zwrotów.

[Karta Trendy wydatków kategorii Duże zakupy: Średnia w aktywnym miesiącu 1440, Średnie miesięczne wydatki 288, Wydano w poprzednim miesiącu 0]

**„Średnie miesięczne wydatki”** — ile średnio wychodzi miesięcznie, licząc też miesiące bez wydatków. Tyle warto odkładać co miesiąc, żeby koperta nie weszła na minus.

**„Średnia w aktywnym miesiącu”** — średnia tylko z miesięcy z wydatkami. Pojawia się, gdy wydatki nie były co miesiąc: na zrzucie „Duże zakupy” mają 1440 zł w miesiącu z zakupem i 288 zł średnio na każdy miesiąc.

**„Wydano …”** — ile wyszło w poprzednim miesiącu: porównaj z bieżącym.

**Procenty pod kwotami** — jaki to procent dochodu: przy średnich — średniego dochodu z tych samych miesięcy; przy poprzednim miesiącu — jego dochodu.

### Transakcje miesiąca {#category-ops}

Wszystkie transakcje tej kategorii za miesiąc ekranu, według dni: najnowsze na górze. Z kwoty podzielonej widać tylko jej część z tą kategorią — na zrzucie „Rossmann”.

| Zrób to | Co się stanie |
|---|---|
| Dotknij wiersza | Karta transakcji — taka sama jak na ekranie „Transakcje”. Więcej w artykule [„Transakcje”](#transactions-detail). |
| Dotknij kółka po prawej | Znacznik „Zaksięgowane”, jak na ekranie „Transakcje”. |
| Przesuń w lewo | „Edytuj” — formularz transakcji. |
| Przesuń w prawo | „Usuń” — po potwierdzeniu. Na dole pojawi się „Cofnij”. |

Kolejność transakcji w ciągu dnia i suma dnia obok daty ustawia się na ekranie „Transakcje”: „⋮” → „Sortowanie” i „Suma dnia”. Tutaj są takie same.

### Inny miesiąc {#category-months}

„‹” i „›” nad podsumowaniem przewijają miesiące. Wyjdziesz z bieżącego miesiąca — na dole po lewej pojawi się „Dziś”: dotknij, by wrócić do bieżącego miesiąca.

[Ten sam ekran za poprzedni miesiąc: podsumowanie bez wiersza ≈ dziennie, przycisk Dziś na dole po lewej]

W minionym miesiącu widać, ile było i ile wtedy wydano. Wiersza „≈ … dziennie” tam nie ma: miesiąc się skończył. W przyszłym miesiącu widać, ile już odłożono naprzód.

### Menu „⋮” {#category-menu}

[Menu: Ukryj kategorię, Edytuj kategorię, Wskazówki, Baza wiedzy, Usuń kategorię]

(A)
##### „Ukryj kategorię”

Kategoria znika z „Budżet” i z listy kategorii w formularzu transakcji. Pieniądze i transakcje zostają, a w obliczeniach liczy się jak dotąd. Przywrócić — tutaj: punkt zmieni się w „Pokaż kategorię”. Albo „Budżet” → „⋮” → „Ukryte kategorie”.

(B)
##### „Edytuj kategorię”

Arkusz z nazwą i polem „Grupa”. Szczegóły — [niżej](#category-edit).

(C)
##### „Wskazówki”

Wskazówki tego ekranu — także te, które już zamknąłeś.

(D)
##### „Baza wiedzy”

Ten artykuł na stronie: otworzy się w przeglądarce, w języku aplikacji.

(E)
##### „Usuń kategorię”

Tylko jeśli kategoria nie ma żadnych transakcji. Wtedy po pytaniu „Usunąć kategorię?” znika, jej cel też, a wszystko, co w niej odłożono, wraca do „nierozdysponowane”.

*Jak to działa:*
Jeśli transakcje są, aplikacja powie „Nie można usunąć — są transakcje” i zaproponuje „Ukryj”. Usunięta kategoria zniknęłaby z historii, a jej transakcje zostałyby bez koperty.

#### Zmiana nazwy i przeniesienie do innej grupy {#category-edit}

[Arkusz Edytuj kategorię: Nazwa Zakupy spożywcze, Grupa Wydatki codzienne, przyciski Usuń i Zapisz]

[Arkusz Grupa: Wydatki stałe, Wydatki codzienne, Wydatki nieregularne, Oszczędności]

(E)
##### „Nazwa”

Nowa nazwa kategorii. Transakcje, cel i pieniądze zostają przy niej.

(F)
##### „Grupa”

Dotknij, by otworzyć listę grup. Wybierz inną i naciśnij „Zapisz”: kategoria przejdzie na koniec tej grupy razem z pieniędzmi i historią.

*Jak to działa:*
Kategorie z grupy „Płatności kartami” tego pola nie mają: ich grupą zarządza aplikacja.

(G)
##### „Usuń”

To samo co „Usuń kategorię” w menu.

##### Jak przenieść kategorię do innej grupy

1. Otwórz kategorię: „Budżet” → dotknij jej wiersza.
2. „⋮” → „Edytuj kategorię”.
3. Dotknij pola „Grupa” i wybierz grupę.
4. „Zapisz”.

To samo można zrobić od razu na ekranie „Budżet”: przesuń wiersz kategorii w lewo → „Edytuj”.

### Na tablecie {#category-tablet}

Na tablecie w poziomie dotknięcie wiersza na ekranie „Budżet” nie zabiera Cię z tabeli: podsumowanie kategorii, cel, notatka, trendy i transakcje pojawiają się po prawej. Miesiąc jest tam ten sam co w tabeli; własnych strzałek nie ma.

Panel nie ma menu „⋮”. Żeby ukryć, zmienić nazwę albo usunąć kategorię, użyj jej ekranu: obróć tablet pionowo i dotknij wiersza albo otwórz kategorię z ekranu „Przegląd” lub z ekranu „Raporty”.

## Transakcje {#transactions}

Cała historia Twoich pieniędzy jako jedna taśma. Każdy zakup, każda wypłata, każde „przełożyłem trochę z konta na oszczędności”.

*Zakładka „Transakcje” na dole ekranu*

### Po co ten ekran {#transactions-why}

Ekran „Budżet” odpowiada na pytanie „ile jeszcze mogę wydać”. „Transakcje” odpowiadają na „to gdzie one właściwie poszły”. To Twój dziennik: wszystko, co zapisałeś, leży tu według dni, najświeższy dzień na górze.

##### Znajdź

„Ile kosztowała ta kolacja w marcu?” — kilka liter w wyszukiwarce i jest.

##### Popraw

Zła kategoria, zbędne zero, podwójny wpis — przesuń wiersz i popraw.

##### Uzgodnij z bankiem

Zaznaczaj to, co już przeszło po karcie — i od razu widać, czego bank jeszcze nie zaksięgował.

### Co gdzie jest na ekranie {#transactions-screen}

Dotknij dowolnego zrzutu, żeby otworzyć go na cały ekran.

[Ekran „Transakcje”: wyszukiwanie, menu, chipy typu transakcji, taśma transakcji według dni i przycisk dodawania]

1. **Wyszukiwanie** — znajduje wszystko po kilku literach, kwocie albo datach.

   *Jak to działa:*
   Wpisz „bied” — w taśmie zostaną tylko wyprawy do Biedronki. Szuka wszędzie: w odbiorcy, kategorii, notatce i kwocie. „143” znajdzie tę kwotę, „mleko” — notatkę „Mleko, jajka, chleb”.

   Daty wyszukiwanie rozumie tak, jak je piszesz:

   - **15.08.2026** — jeden dzień;
   - **15.08** — ten dzień w każdym roku: „co kupowałem na minione urodziny?”;
   - **08.2026** — cały sierpień;
   - **02.08.26-10.08.26** — od i do, oba dni włącznie. Z miesiącami też działa: **06.2026-08.2026** — całe lato.

   Między „od” i „do” wystarczy łącznik, myślnik albo spacja — aplikacja sama odgadnie, gdzie jest granica. Samej liczby, jak „8”, nie traktuje jako daty: inaczej szukanie 8 zł utonęłoby w całym sierpniu.

   Krzyżyk włącza szukanie po tagach: „#urlo” — wszystko z tagiem „urlop”, „#urlo kawiarnia” — tylko kawiarnie z urlopu. Dwa tagi przez spację — transakcje, które mają oba.

2. **Odbiorcy i tagi** — komu płacisz najczęściej i ile.

   *Jak to działa:*
   Osobny ekran z dwiema zakładkami. „Odbiorcy” — wszyscy, którym płaciłeś i którzy płacili Tobie, z sumą za ten rok (okres zmienia się w menu „⋮”). Często właśnie tu wychodzi, że „drobne” wyprawy do sklepiku na rogu złożyły się przez rok w urlop.

   „Tagi” — Twoje etykiety ponad kategoriami: „urlop”, „remont”, „prezent dla mamy”. Dotknij odbiorcy albo tagu, by otworzyć jego historię. [Artykuł „Odbiorcy i tagi”](#payees-tags)

3. **Menu „⋮”** — wszystko, co zmienia wygląd taśmy. Każdy punkt jest opisany [niżej](#transactions-menu).

4. **Typ transakcji** — tylko wydatki, tylko przychody, jednym dotknięciem.

   *Jak to działa:*
   Chcesz widzieć tylko wpływy? Naciśnij „Przychody”. „Przelewy” to sytuacje, gdy pieniądze tylko przeszły między Twoimi kontami: z konta na oszczędności, na spłatę karty kredytowej. „Notatki” to wpisy bez kwoty, przypomnienia dla siebie.

   Naciśnij ten sam chip jeszcze raz — wróci cała taśma.

5. **Data** — skocz do dowolnego dnia.

   *Jak to działa:*
   Przewijać palcem pół roku wstecz — przyjemność dla wytrwałych. Dotknij chipa daty, wybierz dzień w kalendarzu — i taśma już tam jest. Powrót do dziś — przycisk „Dziś” na dole po lewej.

6. **Flaga** — kolorowa zakładka dla siebie.

   *Jak to działa:*
   Flaga niczego nie liczy — to tylko zakładka. Czerwona — „sprawdzić, czy nie pobrano dwa razy”, zielona — „kolega obiecał oddać”. Kolory i ich znaczenie wymyślasz sam.

   Flagę ustawia się w formularzu transakcji albo na kilkunastu wierszach naraz przez zaznaczanie. Szary kontur oznacza „bez flagi”. Kształt flagi — kropka, trójkąt albo flaga z falą — w „Ustawienia → Wygląd”.

7. **Kategoria** — z której koperty wyszły pieniądze.

   *Jak to działa:*
   Kategoria to koperta na ekranie „Budżet”. Zakup w Biedronce z kategorią „Zakupy spożywcze” zmniejsza kopertę na jedzenie: tak budżet wie, ile jeszcze masz na jedzenie.

   Paragon był i na jedzenie, i na chemię? Kwotę można podzielić: każda część idzie do swojej koperty, a wiersz pokazuje chip dla każdej części. A przy wypłacie zamiast kategorii jest „Dostępne w tym miesiącu”: pieniądze przyszły i czekają, aż rozdasz je do kopert.

8. **Konto** — skąd pobrano albo dokąd wpłynęło.

   *Jak to działa:*
   Konto osobiste, gotówka, karta kredytowa — każde konto ma własną ikonę i kolor, więc rozpoznajesz je bez czytania. Przelew ma dwa wiersze, po jednym na każde konto: na jednym pieniądze wyszły, na drugim wpłynęły. Dlatego w tytule przelewu stoi nie sklep, tylko drugie konto: „Visa” na koncie osobistym, „Konto osobiste” na Visie.

9. **Zaksięgowane** — czy zgadza się z wyciągiem. Opcjonalne.

   *Jak to działa:*
   Zakup zapisałeś od razu przy kasie, a bank przetworzył go dzień czy dwa później. Kółko pomaga się nie pogubić: puste — w banku tej transakcji jeszcze nie ma, ptaszek — już jest. Zobaczyłeś zakup w aplikacji banku? Dotknij kółka.

   Raz w miesiącu można uzgodnić całe konto. Wtedy ptaszki zmieniają się w kłódki: „uzgodnione, więcej nie ruszam”.

   **Znacznik jest opcjonalny:** nie wpływa na budżet, tylko pomaga uzgodnić konto z bankiem. Jeśli nigdy go nie używałeś, po prostu pomiń — puste kółka są w porządku.

10. **Nowy wydatek** — trzy przyciski w prawym dolnym rogu.

    *Jak to działa:*
    „+ Transakcja” otwiera pusty formularz — kwotę, kategorię i konto wpisujesz sam.

    Nad nim są dwa okrągłe przyciski, żeby nie pisać. Fioletowy to aparat: skieruj go na kod QR paragonu, a aplikacja sama wpisze kwotę i datę (jeśli zna paragony Twojego kraju). Zielony to mikrofon: powiedz „kawa 15 z konta Konto osobiste”, a aplikacja wpisze kwotę i konto, a także odbiorcę i kategorię, jeśli rozpozna je wśród Twoich. Tak czy inaczej otworzy się ten sam formularz — sprawdź i zapisz. [Artykuł „Formularz transakcji”](#entry)

11. **Ikony aparatu i QR** — do transakcji dołączono zdjęcie paragonu i paragon elektroniczny. [Co to](#transactions-badges)

12. **Ikona PDF** — do transakcji dołączono plik: rachunek, fakturę, paragon ze sklepu internetowego. [Co to](#transactions-badges)

13. **Ikona widelca** — kwota jest podzielona na części w różnych kategoriach. [Co to](#transactions-badges)

14. **Krzyżyki — tagi** — Twoje etykiety „po co”; transakcja może mieć ich kilka. [Co to](#transactions-tags)

### Ekran ma dwa widoki {#transactions-two-views}

Nie martw się, jeśli Twój ekran nie wygląda jak na obrazku wyżej. Przyciski w prawym dolnym rogu zwijają się, żeby nie zasłaniać transakcji.

[Przyciski rozwinięte: „+ Transakcja”, nad nim aparat i mikrofon]
**Dopiero otworzyłeś ekran.** Trzy przyciski: „+ Transakcja”, aparat i mikrofon.

[Przyciski zwinięte: został tylko „+”]
**Przewinąłeś taśmę w dół.** Został tylko „+” — robi to samo.

Żeby wrócić aparat i mikrofon, przewiń taśmę trochę w górę — przyciski znów się rozwiną.

„+” można nacisnąć w obu widokach: zawsze otwiera formularz nowej transakcji.

### Ikony i tagi w wierszu {#transactions-badges}

Małe ikony obok transakcji mówią, że ma coś dodatkowego: dołączony paragon, plik albo kilka kategorii. Same niczego nie robią — żeby zobaczyć, co dołączono, dotknij wiersza.

Brak odbiorcy — w miejscu nazwy jest kreska „———”. To nie błąd: odbiorcy po prostu nie wpisano, a kierunek pokazuje znak kwoty.

#### Aparat — zdjęcie paragonu

Zdjęcie papierowego paragonu, metki albo czegokolwiek, co chcesz zachować obok zakupu.

**Nie przesadzaj.** Dołączaj zdjęcia do tego, czego naprawdę będziesz potrzebować, a nie do każdego bochenka chleba. [Dlaczego](#transactions-attach-weight)

*Jak dodać i po co:*
Formularz transakcji ma pole „Zdjęcia i PDF”. Naciśnij „Dodaj” i wybierz „Zrób zdjęcie” albo „Wybierz z galerii”. Zdjęć można dołączyć kilka.

Przydaje się, gdy miesiąc później trzeba oddać coś na gwarancji albo przypomnieć sobie, co było w tym zakupie za 143 zł. Zdjęcie jest przechowywane w telefonie; żeby pojawiło się też na innych urządzeniach, włącz „Synchronizuj zdjęcia” w ustawieniach synchronizacji.

#### Kwadrat QR — paragon elektroniczny

Kod albo link do paragonu, który wydała kasa.

*Jak dodać i po co:*
Na wielu paragonach na dole jest wydrukowany kod QR — po nim można znaleźć paragon w systemie sklepu albo urzędu skarbowego. Formularz transakcji ma pole „Paragon elektroniczny (URL lub kod)”: wklej tam link albo naciśnij ikonę skanera i skieruj aparat na kod QR.

Jeśli aplikacja zna paragony Twojego kraju, sprawdza też paragon z formularzem: wpisuje kwotę, jeśli jeszcze jej nie podałeś, a jeśli kwoty się różnią, mówi o tym i proponuje poprawkę. Daty w formularzu skaner nie zmienia. Paragon z nieznanego kraju zapisuje się po prostu tak, jak jest — i też się przyda: w karcie transakcji kod można skopiować, a link otworzyć.

#### Kartka „PDF” — dołączony plik

Rachunek, faktura za media, paragon ze sklepu internetowego — wszystko, co przychodzi jako plik.

**Nie przesadzaj.** PDF przy dodawaniu nie jest kompresowany — plik jest przechowywany tak, jak jest. [Dlaczego](#transactions-attach-weight)

*Jak dodać i po co:*
To samo pole „Zdjęcia i PDF” w formularzu: „Dodaj” → „Wybierz PDF”. Plik leży obok transakcji — koniec szukania rachunku w poczcie albo w „Pobranych”.

Dotknij dołączonego PDF — na dole pojawią się „Otwórz” (w aplikacji do PDF) i „Zapisz do pliku” (kopia do wybranego folderu).

#### Każde zdjęcie ma wagę {#transactions-h-weight}

Sama baza danych od zdjęć nie tyje: przechowuje tylko link do pliku. Ale plik mieszka w telefonie i, co ważniejsze, w całości trafia do **każdej kopii zapasowej**. Domyślnie przechowywanych jest do 19 kopii — 7 częstych i 12 miesięcznych, w telefonie i w chmurze.

Tak więc jedno zdjęcie paragonu o wadze 300 KB może zająć w kopiach prawie 6 MB, a sto takich zdjęć — ponad pół gigabajta. Jeśli włączone jest „Synchronizuj zdjęcia”, każde jeszcze jedzie do chmury i na inne urządzenia. Z PDF tak samo, tyle że przy dodawaniu nie są w ogóle kompresowane.

**Zasada jest prosta:** dołączaj to, czego będziesz potrzebować — kartę gwarancyjną, paragon za drogi zakup, rachunek do dokumentów. Chleb i mleko obejdą się bez zdjęć. A paragon elektroniczny (QR) waży tyle co linijka tekstu — można go zapisywać przy każdym zakupie.

#### Widelec — kwota podzielona na części

Jeden zakup — kilka kategorii. W formularzu to „Podziel kwotę” na liście kategorii; w karcie transakcji części są pod nagłówkiem „Podział”.

*Jak to działa:*
W „Rossmann” na zrzucie zapłaciłeś 258 zł jedną płatnością, ale kupiłeś i jedzenie, i chemię. Gdybyś zapisał wszystko w „Zakupy spożywcze”, koperta na jedzenie schudłaby o zbędne 75 zł, a „Chemia i artykuły domowe” zostałaby nietknięta — i budżet zacząłby kłamać.

Dlatego kwotę się dzieli: 183 zł do „Zakupy spożywcze”, 75 zł do „Chemia i artykuły domowe”. W taśmie taka transakcja ma chip na każdą część, a jej karta — sekcję „Podział”. Kwotę można podzielić w formularzu transakcji przy wyborze kategorii.

##### Wypłata gotówki przy kasie to też podział

Płacisz w sklepie kartą 300 zł i prosisz kasjera o 90 zł w gotówce. Bank pokazuje jedno obciążenie na 300 zł, ale naprawdę stały się dwie rzeczy: 210 zł poszło na jedzenie, a 90 zł po prostu przeszło z karty do portfela.

1. Zapisz transakcję na 300 zł z konta „Konto osobiste” i podziel kwotę.
2. Pierwsza część — 210 zł, kategoria „Zakupy spożywcze”.
3. Druga część — 90 zł: w wyborze kategorii przewiń do sekcji „Przelewy” i wybierz „Przelew: Gotówka”.

Taśma pokaże chip „Przelew: Gotówka”, konto „Gotówka” urośnie o 90 zł, a koperta na jedzenie zmniejszy się dokładnie o 210 zł. Zapiszesz wszystko w „Zakupy spożywcze” — budżet pomyśli, że zjadłeś o 90 zł więcej, a portfel pokaże mniej, niż w nim jest.

#### Rząd krzyżyków — tagi

Twoje etykiety ponad kategoriami: „#działka”, „#na pół”, „#urlop”. Transakcja może mieć ich ile chcesz.

*Jak to działa:*
Kategoria odpowiada na pytanie „na co wydałem”, a tag — „po co”. Mleko i chleb w „Biedronka” to „Zakupy spożywcze”, ale kupione na działkę. Oznacz je „#działka” — a potem od razu zobaczysz, ile kosztowało lato na działce, choć pieniądze poszły na jedzenie, paliwo i materiały budowlane.

„Lidl” na zrzucie ma od razu dwa tagi: zakupy na działkę i zapłacone na pół z kolegą. Transakcja może mieć tagów ile chcesz.

##### Jak dodać tag

1. W formularzu transakcji pod notatką dotknij pola „Tagi”.
2. Otworzy się lista, ostatnie tagi na górze. Zaznacz potrzebne.
3. Potrzebnego tagu jeszcze nie ma? Wpisz jego nazwę w linii „Znajdź lub utwórz tag” i naciśnij „Utwórz tag „…””.
4. Naciśnij „Gotowe”.

##### Gdzie potem patrzeć

- **Ile wydano pod tagiem** — ikona „Odbiorcy i tagi” w nagłówku (objaśnienie 2), zakładka „Tagi”. Dotknij tagu, by otworzyć jego ekran: ile wyszło przez cały czas, według kategorii i według miesięcy, i wszystkie transakcje.
- **Znajdź transakcje** — wpisz w wyszukiwarce „#” i początek tagu: „#dział” pokaże wszystko na działkę.
- **Kto komu ile** — przy tagu w rodzaju „#na pół” włącz „Rozliczenie” w menu „⋮” na jego ekranie. Aplikacja pokaże, ile jeszcze zebrać albo oddać, żeby wyjść na zero.

Tagu w wierszu się nie naciska — to etykieta, a nie przycisk.

Są jeszcze: **dwie strzałki** — przelew między Twoimi kontami; **kalendarzyk ze strzałką** — transakcja zapisana z płatności zaplanowanej; **karteczka** — notatka: wpis bez kwoty, przypomnienie dla siebie.

### Menu „⋮” {#transactions-menu}

Wszystko tutaj dotyczy tego, jak pokazywać taśmę. Żaden punkt nie zmienia ani nie usuwa Twoich wpisów — próbuj bez obaw.

[Otwarte menu „⋮”: Zaznaczanie transakcji, Filtr, Sortowanie, Suma dnia, Wskazówki, Baza wiedzy]

(A)
#### Zaznaczanie transakcji

Jedno działanie na kilkunastu wierszach naraz.

*Jak to działa:*
Trzeba postawić czerwoną flagę na kilkunastu zakupach, żeby sprawdzić je z wyciągiem? Nie musisz otwierać każdego. Włącz zaznaczanie i zaznacz wiersze — na dole pojawi się ich suma (przydaje się też do sumowania paragonów). Naciśnij „⋮” obok sumy: wszystkim naraz możesz ustawić kategorię, flagę albo znacznik „zaksięgowane”, powtórzyć je z dzisiejszą datą, przenieść na inne konto albo usunąć. Ostatni punkt, „Anuluj zaznaczenie”, wychodzi z zaznaczania, niczego nie zmieniając.

Skrót: przytrzymaj dowolny wiersz.

(B)
#### Filtr

Zostaw w taśmie tylko to, czego potrzebujesz.

*Jak to działa:*
Na przykład: „kawiarnie w zeszłym miesiącu, tylko karta”. Filtrować można po typie, okresie, kategorii, odbiorcy, koncie, kwocie i tagu. Filtry się sumują — każdy następny zawęża taśmę.

Dopóki filtr jest włączony, na „⋮” świeci liczba — przypomnienie, że taśma nie jest teraz pełna. Inaczej łatwo pomyśleć, że transakcje zniknęły.

**Zaraz po instalacji:** bez filtrów. **Kasuje się sam:** przy przełączeniu budżetu — inny budżet ma własne kategorie i konta. **Zobacz też:** [filtr raportów](#reports).

(C)
#### Sortowanie

Jak układać transakcje w ciągu jednego dnia.

*Jak to działa:*
Dni zawsze idą jak w kalendarzu — najświeższy na górze, i tego zmienić się nie da. Ale w ciągu dnia możesz ustawić własny porządek: duże wydatki na górze („Malejąco”), drobiazgi na górze („Rosnąco”) albo najpierw przychody. Wybrany porządek jest zapisany prosto w punkcie menu — żeby tydzień później nie dziwić się, czemu dzień wygląda na „pomieszany”.

**Zaraz po instalacji:** w kolejności wpisywania. **Działa też:** na ekranie konta, w transakcjach kategorii i u odbiorcy.

(D)
#### Suma dnia

Ile wyszło w ciągu dnia — tuż obok daty.

*Jak to działa:*
Włącz „Tylko wydatki” — a po prawej od każdej daty zobaczysz, ile wydałeś tego dnia. Świetny sposób na wyłapanie „drogich” dni: sobota z targiem i kinem od razu się wyróżnia.

„Wydatki i przychody” pokazuje różnicę jedną liczbą ze znakiem: „−300” — dzień poszedł na minus, „+4200” — przyszła wypłata. Przelewy między własnymi kontami i salda początkowe się nie liczą: to nie wydatki, pieniądze tylko się przeniosły.

**Zaraz po instalacji:** nie jest pokazywana. **Działa też:** na ekranie konta i w transakcjach kategorii.

(E)
#### Wskazówki

Wszystkie wskazówki tego ekranu w jednym miejscu.

*Jak to działa:*
W aplikacji wskazówki pojawiają się po jednej — kiedy są przydatne, żeby nie zasypać Cię wszystkim naraz. Tutaj są zebrane wszystkie, także te, do których jeszcze nie doszedłeś.

(F)
#### Baza wiedzy

Ten artykuł na stronie: otworzy się w przeglądarce, w języku aplikacji.

### Co można zrobić z wierszem {#transactions-gestures}

W wierszu nie ma przycisków „zmień” i „usuń” — żeby nie przeszkadzały w czytaniu. Zamiast nich dotknij wiersza albo przesuń go palcem w bok.

| Zrób to | Co się stanie |
|---|---|
| Dotknij | Otworzy się karta transakcji: wszystko o niej, zdjęcia paragonów, edycja. [Co w niej jest](#transactions-detail) |
| Przesuń w lewo | „Edytuj” — prosto do formularza. |
| Przesuń w prawo | „Usuń”. Rozmyśliłeś się? „Cofnij” zostaje na dole przez kilka sekund. |
| Przytrzymaj | Włącza się zaznaczanie kilku wierszy — jak punkt [„Zaznaczanie transakcji”](#transactions-select). |

#### Dotknąłeś transakcji — co jest w środku {#transactions-detail}

Od dołu wysuwa się karta transakcji: wszystko, co o niej zapisałeś, na jednym arkuszu. Nic się nie zmieni, dopóki nie naciśniesz „Edytuj” — możesz spokojnie oglądać.

[Karta transakcji „Biedronka”: kwota, odbiorca, kategoria, konto, data, paragon elektroniczny, notatka, tag „działka”, zdjęcie paragonu, przyciski „Powtórz”, „Edytuj”, „Utwórz płatność zaplanowaną”]
**Zakup z paragonem i zdjęciem.**

[Karta podziału „Rossmann”: części podziału — Zakupy spożywcze 183 zł i Chemia i artykuły domowe 75 zł]
**Kwota podzielona.** Na dole — części podziału.

- **Dużo na górze** — kwota ze znakiem: minus to wydatek, plus to przychód.
- **Odbiorca, kategoria, konto, data** — to, co zapisałeś w formularzu.
- **Paragon** — paragon elektroniczny. „Kopiuj” kładzie kod do schowka, żeby wkleić go, gdzie trzeba. Jeśli to link, jest też „Otwórz” — paragon otworzy się w przeglądarce.
- **Tagi** — etykiety transakcji jako chipy, jak w taśmie: „#działka”.
- **Zdjęcia** — miniatury dołączonych zdjęć i PDF. Dotknij zdjęcia, by otworzyć je na cały ekran.
- **Części podziału** — przy kwocie podzielonej: każda część z własną kategorią, notatką i kwotą.

##### Przyciski na dole

- **„Edytuj”** — otwórz tę transakcję w formularzu i zmień cokolwiek.
- **„Powtórz”** — nowa transakcja z tym samym odbiorcą, kategorią i kwotą. Wygodne przy tym, co kupujesz często: kawa, przejazd, obiad.
- **„Utwórz płatność zaplanowaną”** — zrób z tej transakcji płatność regularną: czynsz, subskrypcję, kredyt. Zostaje tylko wybrać, jak często się powtarza.

Kwota podzielona i przelew mają tylko „Edytuj”: aplikacja nie powtórzy ich po połowie.

## Raporty {#reports}

Dziesięć raportów: dokąd idą pieniądze, jak zmieniają się wydatki, skąd przychodzi dochód i czy rośnie Twój majątek.

*Zakładka „Raporty” na dole ekranu*

### Jak działa zakładka {#reports-how}

Na ekranie jeden raport naraz. Na górze — który raport i za jaki okres, pod spodem sam raport. Aplikacja pamięta raport i okres: otworzysz „Trend wydatków” za pół roku — i następnym razem otworzy się właśnie on.

[Raport Gdzie poszły pieniądze za wrzesień — listopad: pierścień, suma 17 679, lista kategorii]

1. **Nazwa raportu** — dotknij, by otworzyć listę wszystkich raportów (zrzut niżej).

2. **Filtry** — lejek: okres, kategorie, konta, tagi. Liczba na nim to ile filtrów jest włączonych.

   *Jak to działa:*
   Wyłącz kategorię „Czynsz” — zniknie z raportów wydatków, a obraz codziennych wydatków stanie się wyraźniejszy. Filtry są zapamiętywane dla każdego budżetu.

3. **Okres** — strzałki „‹ ›” przesuwają okno o miesiąc wstecz albo naprzód, a dotknięcie podpisu otwiera wybór okresu: miesiąc, 3, 6, 12 miesięcy, od początku roku albo własny zakres.

   *Jak to działa:*
   Odszedłeś od bieżącego miesiąca? Obok pojawi się „Dziś”, żeby wrócić. Każdy raport ma własny okres: wydatki wygodnie oglądać po miesiącu, a trend — po roku.

4. **Widok** — niektóre raporty mają kilka widoków: pierścień, bąbelki, kafelki, tabela albo wykres. Wybór jest zapamiętywany dla każdego raportu.

5. **Lista** — te same liczby jako wiersze: kolor, nazwa, kwota, procent. Dotknij wiersza, by otworzyć ekran kategorii albo odbiorcy.

[Arkusz wyboru raportu: sekcje Wydatki, Przepływy pieniędzy, Majątek]
**Wybór raportu.** Trzy sekcje — według pytania, na które odpowiada raport.

[Arkusz Filtry raportu: Okres, Kategorie, Konta, Tagi]
**Filtry raportu.** Każda sekcja się rozwija.

### Wydatki {#reports-spending}

Dokąd idą pieniądze i jak to się zmienia.

#### Gdzie poszły pieniądze {#reports-r-spending}

Wydatki za okres według kategorii — główny raport „dokąd wszystko poszło”. Trzy widoki tego samego: wybierz, który jest dla Ciebie czytelniejszy.

[Bąbelki: Czynsz 10 800, 61%, Zakupy spożywcze 2660, 15%]
**Bąbelki.** Pole bąbelka to kwota.

[Kafelki: Czynsz, Zakupy spożywcze, Duże zakupy]
**Kafelki.** Pole kafelka to kwota.

(•)
#### Pierścień, bąbelki, kafelki

Przełączasz je ikonami po prawej nad obrazkiem. Pierścień jest znajomy; bąbelki i kafelki lepiej pokazują małe kategorie obok dużych.

(•)
#### Dotknięcie

Dotknij wycinka pierścienia, bąbelka albo kafelka — zostanie wyróżniony, a jego wiersz podświetli się na liście. Drugie dotknięcie otwiera ekran tej kategorii.

(•)
#### Co jest liczone

Wydatki minus zwroty, bez przelewów między własnymi kontami. Na zrzucie przez trzy miesiące wyszło 17 679 zł, z tego 61% na czynsz.

*Jak to działa:*
Chcesz widzieć codzienne wydatki bez czynszu i rachunków? Usuń je w filtrze „Kategorie”.

#### Trend wydatków {#reports-r-trend}

Czy Twoje wydatki rosną, czy maleją — według miesięcy, ze średnią i linią trendu.

[Trend wydatków czerwiec — listopad: słupki według miesięcy, dynamika, linie trendu i średniej, Łącznie za okres 34 770]

(•)
#### Na górze

Średnie wydatki miesięcznie i dokąd zmierzają: „rosną ≈ 114,70 zł/mies.” albo „maleją”.

(•)
#### Wykres

Słupki to wydatki każdego miesiąca. Linia z kropkami to dynamika, prosta — trend, przerywana — średnia. Bieżący miesiąc jest blady: jeszcze się nie skończył, więc nie wchodzi do średniej ani do trendu.

(•)
#### Tabela „Miesięcznie”

Każdy miesiąc i jak daleko jest od średniej — w złotych i w procentach. Dotknij miesiąca na wykresie, a nad nim pojawi się dokładna kwota.

#### Przykład: czy rachunki drożeją {#reports-r-trend-example}

Ogólny trend tego nie powie: są w nim wszystkie wydatki naraz, a wzrost jednej kategorii ginie w reszcie. Zostaw w raporcie tylko jedną kategorię.

[Filtry raportu: Kategorie 1 z 18, Odznacz wszystko, zaznaczone tylko Media i rachunki]
**Filtr.** W raporcie została jedna kategoria.

[Trend wydatków tylko dla rachunków: 292 zł/mies., maleją ≈ 11,80 zł/mies., październik −20% do średniej]
**Wynik.** Trend samych rachunków.

6. **„Kategorie”** — w „Trend wydatków” dotknij lejka w prawym górnym rogu, potem „Kategorie”: otworzy się lista wszystkich kategorii z polami wyboru.

7. **„Odznacz wszystko”** — odznacza wszystkie kategorie naraz, zamiast po jednej.

8. **Potrzebna kategoria** — zaznacz „Media i rachunki”. Pod „Kategorie” stoi teraz „1 z 18”. Zamknij arkusz: przesuń go w dół albo dotknij poza nim.

9. **Liczba na lejku** — ile filtrów jest włączonych. Dopóki świeci, raport nie pokazuje wszystkich wydatków.

Teraz raport mówi tylko o rachunkach: średnio 292 zł miesięcznie, rachunki maleją o około 11,80 zł miesięcznie, a październik był o 20% tańszy od średniej. Filtr jest zapamiętany dla tego raportu: następnym razem „Trend wydatków” otworzy się z nim. Przywrócić wszystkie kategorie — „Zaznacz wszystko” albo „Wyczyść” w arkuszu filtrów.

#### Najczęstsi odbiorcy {#reports-r-payees}

To samo co „Gdzie poszły pieniądze”, ale według odbiorców: komu płacisz najwięcej.

[Najczęstsi odbiorcy: pierścień, Właściciel mieszkania 10 800, Biedronka, IKEA, Lidl]

(•)
#### Te same trzy widoki

Pierścień, bąbelki albo kafelki — ten raport ma własny wybór.

(•)
#### Dotknięcie

Wiersz albo wycinek otwiera ekran odbiorcy: wszystkie wydatki u niego, według kategorii i według miesięcy (artykuł [„Odbiorcy i tagi”](#payees-tags)).

#### Odchylenie {#reports-r-deviation}

Gdzie w tym miesiącu wydajesz więcej albo mniej niż zwykle — na pierwszy rzut oka. Porównanie dotyczy Twoich 12 miesięcy przed okresem: bieżący miesiąc porównuje się z tymi samymi dniami minionych miesięcy, od 1. do dzisiejszego dnia, a okres kilku miesięcy — ze zwykłym miesiącem pomnożonym przez ich liczbę.

[Odchylenie — wydatki listopada: kafelki według kategorii, kolor pokazuje więcej albo mniej niż zwykle]

(•)
#### Kafelki

Rozmiar kafelka to ile wydano, kolor — o ile więcej (czerwonawy) albo mniej (zielonawy) niż zwykle, w trzech stopniach. Szare są jak zwykle, w granicach 10%. Obwódka bez wypełnienia oznacza, że kategoria pojawiła się po raz pierwszy.

(•)
#### „Zwykle”

Środek Twoich minionych miesięcy z roku: jeden wyjątkowo drogi miesiąc go nie przesunie. Dla bieżącego miesiąca — „zwykle do tego dnia”: 10 listopada porównuje się z tymi samymi dniami minionych miesięcy.

(•)
#### Podsumowanie słowami

Pod kafelkami — „Więcej niż zwykle”, „Mniej”, „Nowe” z kwotami. „Kategorie” albo „Odbiorcy” — chipy na górze.

#### Tagi {#reports-r-tags}

Ile poszło pod każdym tagiem — według miesięcy, tabelą albo wykresem.

[Raport Tagi: tabela według miesięcy — działka, Razem, Wszystkie wydatki; sekcja Rozliczenia — na pół, do zebrania 129]

[Raport Tagi jako wykres: Na wykresie 1 z 4, Największe w okresie]

(•)
#### Tabela

Wiersz na tag, kolumna na miesiąc. „Razem” to wszystkie tagi naraz: transakcja z dwoma tagami liczy się w nim raz. „Wszystkie wydatki” są dla porównania.

(•)
#### „Rozliczenia”

Tagi z włączonym „Rozliczenie”, osobnym blokiem: ile zebrać albo oddać.

(•)
#### Wykres

Do czterech tagów jako linie według miesięcy; które — wybierasz nad wykresem.

### Przepływy pieniędzy {#reports-flow}

Skąd przyszły pieniądze, dokąd poszły i ile zostało.

#### Przepływ pieniędzy {#reports-r-flow}

Cała droga pieniędzy na jednym obrazku: od źródeł dochodu — do budżetu — według grup — według kategorii.

[Przepływ pieniędzy: Pracodawca → Budżet; na górze Przychód 25 200, Wydatek 17 679, Netto +7521, Oszczędności 30%]
**Po lewej** — skąd przyszły pieniądze.

[Przepływ pieniędzy, prawa część: grupy wydatków → kategorie, Reszta]
**Przesuń w bok** — grupy i kategorie.

(•)
#### Na górze

Przychód, wydatek, „netto” (ile zostało) i stopa oszczędności — jaki procent dochodu nie został wydany.

(•)
#### Wstęgi

Grubość wstęgi to kwota. Dotknij wstęgi, by zobaczyć kwotę i procent. Zielony pas „Reszta” to pieniądze, które nigdzie nie poszły.

(•)
#### Jak oglądać

Obrazek jest szerszy niż ekran: przesuwaj w bok i w dół. Nagłówek z sumami przewija się razem z obrazkiem.

#### Przychody i wydatki {#reports-r-ie}

Rachunek miesiąc po miesiącu: ile przyszło, ile wyszło według grup, co zostało.

[Przychody i wydatki jako tabela: Przychody, Wydatki według grup, Razem, Stopa oszczędności według miesięcy]
**Tabela.**

[Przychody i wydatki jako wykres: zielone i czerwone słupki według miesięcy i linia wyniku]
**Wykres.**

(•)
#### Tabela

Wiersze to przychody według źródeł i wydatki według grup; grupę można rozwinąć do kategorii. Na dole — „Razem” i „Stopa oszczędności” każdego miesiąca.

*Jak to działa:*
Dotknij liczby, by otworzyć listę transakcji, z których się składa. Tabela jest szersza niż ekran — przesuwaj w bok.

(•)
#### Wykres

Każdy miesiąc ma dwa słupki: zielony w górę — ile pieniędzy przyszło, czerwony w dół — ile wyszło. Cienka linia pokazuje, co zostało: powyżej zera miesiąc skończył się na plusie, poniżej — wydałeś więcej, niż przyszło. Nad wykresem są cztery liczby za cały okres: przychody, wydatki, wynik i stopa oszczędności. Dotknij miesiąca, a liczby pokażą tylko ten miesiąc; przesuń palec — zmieniają się po sąsiednich miesiącach; dotknij tego samego miesiąca jeszcze raz — znów cały okres.

#### Wiek pieniędzy {#reports-r-aom}

Jak zmieniał się wiek Twoich pieniędzy miesiąc po miesiącu.

[Wiek pieniędzy: 52 dni na koniec okresu, linia według miesięcy]

(•)
#### Liczba na górze

Wiek na koniec okresu — ta sama liczba co na ekranie „Przegląd”.

(•)
#### Po co

Widać, czy rośnie Twój zapas. Linia idąca w górę znaczy, że jesteś coraz dalej od „od wypłaty do wypłaty”. Co znaczy liczba i jak się ją liczy — w artykule [„Przegląd”](#overview), sekcja „Wiek pieniędzy w szczegółach”.

### Majątek {#reports-capital}

Wszystko, co masz, i wszystko, co jesteś winien.

#### Majątek {#reports-r-networth}

Suma wszystkich kont minus długi — i jak się zmieniała.

[Majątek: 36 630 na koniec okresu, linia według miesięcy, tabela według miesięcy ze strzałkami]

(•)
#### Co wchodzi

Wszystkie konta w walucie głównej — i budżetowe, i poza budżetem (oszczędności, lokaty), minus karty kredytowe i kredyty. Konta w innych walutach nie są przeliczane i nie wchodzą do sumy.

(•)
#### Tabela

Majątek na koniec każdego miesiąca, ze strzałką — w górę albo w dół.

#### Dług na kartach {#reports-r-carddebt}

Ile jesteś winien na kartach kredytowych — i czy dług rośnie.

[Dług na kartach: 2670 na koniec okresu, w okresie dług wzrósł o 1688]

(•)
#### Liczba na górze

Dług na wszystkich kartach kredytowych na koniec okresu i o ile urósł albo zmalał w okresie.

(•)
#### Kiedy go widać

Raport jest na liście tylko wtedy, gdy masz kartę kredytową. Jak karta kredytowa działa w budżecie — w artykule [„Jak działa budżet”](#start).

## Konta {#accounts}

Każde miejsce, w którym leżą Twoje pieniądze: karty, portfel, oszczędności, karty kredytowe. I ile jest gdzie w tej chwili.

*Zakładka „Konta” na dole ekranu*

### Po co ten ekran {#accounts-why}

Tu widać, gdzie są teraz Twoje pieniądze: ile na koncie osobistym, ile w portfelu, ile jesteś winien na karcie kredytowej. Koperty na ekranie „Budżet” odpowiadają na pytanie „na co”, a konta — „gdzie”.

##### Dodaj konta

Każde miejsce, w którym leżą pieniądze: karty we wszystkich bankach, portfel, oszczędności.

##### Uzgodnij z bankiem

Raz w tygodniu albo w miesiącu upewnij się, że aplikacja i bank pokazują to samo.

##### Uprzątnij stare

Zamknąłeś kartę? Ukryj ją, a historia zostanie.

### Co gdzie jest na ekranie {#accounts-screen}

Dotknij dowolnego zrzutu, żeby otworzyć go na cały ekran.

[Ekran „Konta”: sekcje „W budżecie”, „Karty kredytowe”, „Poza budżetem” z kontami i kwotami]

1. **Sekcja** — półka kont jednego rodzaju. Dotknij nazwy, by zwinąć sekcję.

   *Jak to działa:*
   Sekcje są cztery, a to, do której trafi konto, zależy od jego typu. „W budżecie” to pieniądze, które dzielisz między koperty: konto osobiste, gotówka. „Karty kredytowe” — karty kredytowe. „Poza budżetem” — to, na co oszczędzasz albo co po prostu chcesz mieć na oku: oszczędności, lokata. „Długi” — kredyty. Pusta sekcja się nie pokazuje. Więcej w sekcji [„W budżecie czy poza budżetem”](#accounts-kinds).

2. **Suma sekcji** — ile jest na wszystkich kontach sekcji.

   *Jak to działa:*
   „W budżecie” na zrzucie to 14 138 zł: konto osobiste i gotówka razem, dokładnie te pieniądze, które dzielisz między koperty na ekranie „Budżet”. „Karty kredytowe” mają czerwoną sumę — to dług.

3. **Konto** — jeden wiersz to jeden portfel, karta albo lokata. Ikona i kolor wynikają z typu konta.

   *Jak to działa:*
   Dotknij wiersza, by otworzyć ekran konta: wszystkie jego transakcje, jak na ekranie „Transakcje”, ale tylko dla tego konta. Przytrzymaj, by otworzyć menu konta ([niżej](#accounts-hold)). Przesuń w lewo albo w prawo — „Edytuj” albo „Usuń”.

4. **Saldo** — ile jest teraz na koncie według Twoich zapisów.

   *Jak to działa:*
   To suma wszystkich transakcji konta z saldem początkowym. Jeśli nie zgadza się z bankiem, jakąś transakcję zapomniano albo zapisano dwa razy. Jak ją znaleźć — [„Uzgodnienie salda”](#accounts-reconcile).

5. **„Oczekujące”** — suma transakcji, których bank jeszcze nie przetworzył.

   *Jak to działa:*
   Konto osobiste na zrzucie pokazuje −143 zł: zakup w „Biedronka” już zapisałeś, ale w banku go jeszcze nie ma. Gdy pojawi się w wyciągu, zaznacz go kółkiem w taśmie (na ekranie „Transakcje” — objaśnienie 9), a linijka zniknie. Dopóki takie transakcje są, saldo w aplikacji i saldo w aplikacji banku legalnie się różnią — dokładnie o tę kwotę. Znacznik jest opcjonalny. Jeśli go nie używasz, trafiają tu wszystkie transakcje konta — to nie błąd, linijka po prostu nic wtedy nie mówi.

6. **„Karty kredytowe”** — osobna sekcja na karty kredytowe. Czerwona suma to ile jesteś winien bankowi. Dla każdej karty kredytowej aplikacja sama tworzy specjalną kategorię na ekranie „Budżet” — nie ruszaj jej.

   *Jak to działa:*
   Wydatki kartą kredytową zmniejszają koperty tak samo jak wydatki kartą debetową. Ale pieniądze na spłatę aplikacja odkłada sama — do grupy „Płatności kartami” na ekranie „Budżet”. Spłata karty kredytowej to przelew z karty debetowej na kredytową.

   **Specjalna kategoria.** Gdy tworzysz konto typu „Karta kredytowa”, aplikacja tworzy w grupie „Płatności kartami” na ekranie „Budżet” kategorię o tej samej nazwie co karta. Pod jej nazwą jest napisane „Dług na karcie …”. Aplikacja odkłada w niej pieniądze na spłatę: wydałeś kartą kredytową 105 zł — 105 zł przeszło tu z koperty zakupu.

   **Tej kategorii nie ruszaj** — zresztą aplikacja i tak nie pozwoli: nie da się zmienić jej nazwy, usunąć jej ani przenieść do innej grupy, a do grupy „Płatności kartami” nie można dodać własnej kategorii. Aplikacja liczy w niej dług właśnie tej karty. Zmienisz nazwę karty na ekranie „Konta” — kategoria zmieni nazwę sama. Zmienisz kartę na inny typ — kategoria zniknie, a jej pieniądze wrócą do „nierozdysponowane”.

   Jedna rzecz przy niej jest wciąż Twoja: **dług, który karta miała, zanim zacząłeś prowadzić rachunki**. Na niego aplikacja pieniędzy nie odkłada — żeby go spłacić, wkładasz pieniądze do tej kategorii jak do każdej koperty, po trochu albo od razu.

7. **„Poza budżetem”** — konta, których pieniędzy nie dzieli się między koperty: oszczędności, lokata. Czym się różnią — [niżej](#accounts-kinds).

8. **Menu „⋮”** — dodaj konto i ustaw wygląd listy. Opisane [niżej](#accounts-menu).

### W budżecie czy poza budżetem {#accounts-kinds}

Główne pytanie o każde konto: czy dzielisz jego pieniądze między koperty? Odpowiedź decyduje, gdzie konto pojawi się na tym ekranie i czy jego pieniądze dotrą na ekran „Budżet”.

##### W budżecie

Konto osobiste, gotówka, karta kredytowa — to, z czego wydajesz na co dzień. Każdy złoty tutaj powinien leżeć w jakiejś kopercie. Wypłata wpływa na konto — trafia do „nierozdysponowane”.

##### Poza budżetem

Oszczędności, lokata, inwestycje, kredyt — to, co chcesz widzieć, ale z czego nie wydajesz na co dzień. Te pieniądze nie mają kopert. Przełożyłeś pieniądze z oszczędności na konto osobiste? Pojawią się w „nierozdysponowane” i możesz je rozdać.

Nowe konto samo trafia do swojej sekcji, według typu: „Gotówka” i „Konto bankowe” — do „W budżecie”, „Karta kredytowa” — do „Karty kredytowe”, „Kredyt” — do „Długi”, „Tylko ewidencja” — do „Poza budżetem”. Kredyty i konta „Tylko ewidencja” nie mają kopert.

### Menu „⋮” {#accounts-menu}

Nowe konto i sposób pokazywania listy.

[Menu „⋮” ekranu „Konta”: Dodaj konto, Salda bieżące, Ukryte konta, Wskazówki, Baza wiedzy]

(F)
#### Dodaj konto

Nowa karta, portfel albo lokata.

*Jak to działa:*
1. Naciśnij „Dodaj konto”.
2. Wybierz typ: „Gotówka”, „Konto bankowe”, „Karta kredytowa”, „Kredyt” albo „Tylko ewidencja”. Typ decyduje o sekcji i ikonie.
3. Wpisz nazwę — tak, jak nazywasz to konto: „Karta mBank”, „Portfel”.
4. Wpisz, ile jest dziś na koncie — kwotę z aplikacji banku albo z portfela.
5. Zapisz. Kwota stanie się saldem początkowym. Przy gotówce i koncie bankowym trafi od razu do „nierozdysponowane” na ekranie „Budżet” — rozdaj ją do kopert.

(G)
#### Salda bieżące

Pokazuj saldo po każdej transakcji — dla wszystkich kont naraz.

*Jak to działa:*
To samo co „Saldo bieżące” w menu pojedynczego konta, tylko dla wszystkich. **Zaraz po instalacji:** wyłączone.

(H)
#### Ukryte konta

Pokazuj ukryte konta na dole listy.

*Jak to działa:*
Liczba w nawiasie to ile ich jest. Dopóki ukrytych kont nie ma, punkt jest szary, jak na zrzucie. Każde ukryte konto na liście ma przycisk „Przywróć”.

(I)
#### Wskazówki

Wszystkie wskazówki tego ekranu w jednym miejscu.

(J)
#### Baza wiedzy

Ten artykuł na stronie: otworzy się w przeglądarce, w języku aplikacji.

### Co można zrobić z wierszem {#accounts-gestures}

Wiersz konta nie ma przycisków. Dotknij go, przytrzymaj albo przesuń w bok.

| Zrób to | Co się stanie |
|---|---|
| Dotknij | Ekran konta: wszystkie jego transakcje, z saldem i „Oczekujące” na górze. |
| Przytrzymaj | Menu konta — [opisane niżej](#accounts-hold). |
| Przesuń w lewo | „Edytuj” — arkusz edycji konta: nazwa, typ, wygląd. |
| Przesuń w prawo | „Usuń”. Jeśli konto miało transakcje, aplikacja zaproponuje „Ukryj”. |

#### Menu konta — przytrzymaj {#accounts-hold}

Wiersz konta nie ma własnego „⋮”, żeby nie zabierać miejsca nazwie. Menu otwiera się długim naciśnięciem, tam, gdzie jest Twój palec. Te same punkty są w „⋮” na ekranie samego konta.

[Menu konta po długim naciśnięciu: Uzgodnienie salda, Saldo bieżące, Ukryj konto, Edytuj konto, Usuń konto]

(A)
#### Uzgodnienie salda

Sprawdź, czy aplikacja i bank pokazują to samo.

*Jak to działa:*
1. Otwórz aplikację banku i zobacz, ile jest na koncie.
2. Na ekranie „Konta” przytrzymaj to konto i wybierz „Uzgodnienie salda”.
3. Okno mówi „W aplikacji: …”. Niżej, w polu „Rzeczywiste saldo w banku”, wpisz kwotę z banku i naciśnij „Uzgodnij”.
4. Zgadza się — aplikacja powie „Saldo uzgodnione ✓”. Wszystkie transakcje konta do dziś dostaną kłódkę, a pod kontem pojawi się „uzgodnione” z datą.
5. Nie zgadza się — okno „Saldo się nie zgadza” pokaże różnicę. Najpierw poszukaj zapomnianej albo zbędnej transakcji. Nie możesz znaleźć? Naciśnij „Utwórz korektę”: aplikacja doda transakcję na tę różnicę, a kategorię, odbiorcę i notatkę uzupełnisz sam.

Transakcje z kłódką liczą się jako sprawdzone: edycja pyta o potwierdzenie, żeby uzgodnione nie rozjechało się przypadkiem.

(B)
#### Saldo bieżące

Pokazuj pod każdą transakcją tego konta, ile było na koncie po niej.

*Jak to działa:*
Wygodne, żeby znaleźć, gdzie saldo rozeszło się z wyciągiem z banku: idź po transakcjach i porównuj salda wiersz po wierszu. Włącza się tylko dla tego konta; dla wszystkich naraz — „Salda bieżące” w menu „⋮”.

(C)
#### Ukryj konto

Usuń z listy konto, którego już nie używasz.

*Jak to działa:*
Zamknąłeś kartę? Usunąć jej nie można — ma historię. Ukryte konto znika z listy, ale jego transakcje zostają w historii i raportach. Żeby je przywrócić: „⋮” → „Ukryte konta” — pojawią się na dole listy z przyciskiem „Przywróć”.

(D)
#### Edytuj konto

Zmień nazwę konta, typ, ikonę i kolor, a dla konta w innej walucie — walutę.

*Jak to działa:*
Ten sam arkusz otwiera się, gdy przesuniesz wiersz w lewo. Jeśli konto ma saldo początkowe, arkusz ma wiersz „Saldo początkowe” z datą i kwotą — dotknij go, by otworzyć samą tę transakcję, i popraw ją jak każdą inną.

(E)
#### Usuń konto

Tylko konto bez jednej transakcji.

*Jak to działa:*
Jeśli konto ma już transakcje, aplikacja powie, ile ich jest, i zaproponuje ukrycie konta zamiast usuwania — raporty i salda potrzebują historii. Tak samo przy przesunięciu w prawo.

## Formularz transakcji {#entry}

Jak zapisać zakup, przychód, przelew albo zakup podzielony na kilka kategorii — i do czego służy każde pole.

*„+ Transakcja” na dowolnej zakładce*

### Po co ten ekran {#entry-why}

Tu zapisujesz wszystko, co dzieje się z Twoimi pieniędzmi: zakup, wypłatę, przelew z jednej karty na drugą. Im szybciej zapisujesz, tym uczciwszy budżet — dlatego najważniejsze w formularzu da się zrobić od razu przy kasie, w kilka dotknięć.

##### Otwórz

„+ Transakcja” na dowolnej zakładce. Z ekranu konta albo kategorii formularz otwiera się z nimi już wpisanymi. Jeszcze szybciej — widżet na ekranie głównym.

##### Minimum

Kwota, kategoria i konto. Odbiorca, notatka i cała reszta są opcjonalne.

##### Nie tylko ręcznie

Aparat nad „+” czyta kod QR paragonu, mikrofon — frazę w rodzaju „kawa 15 Rozrywka i hobby”. Oba przyciski otwierają ten sam formularz, już wypełniony.

### Co gdzie jest na ekranie {#entry-screen}

Tak wygląda formularz zaraz po naciśnięciu „+”. Klawiatura kwoty otwiera się od razu: prawie zawsze zaczynasz od kwoty. Dotknij dowolnego zrzutu, żeby otworzyć go na cały ekran.

[Nowa transakcja: przełącznik Wychodzące i Przychodzące, kwota 0,00, pola Odbiorca, Kategoria, Konto, Data, klawiatura kwoty]

1. **Zamknij** — krzyżyk. Jeśli coś już wpisano, aplikacja zapyta „Wyjść bez zapisywania?” — „Zostań” albo „Nie zapisuj”.

2. **„Wychodzące” / „Przychodzące”** — wydatek albo przychód. Wybór decyduje o znaku kwoty i kolorze nagłówka: czerwonawy — wydatek, zielony — przychód, szary — przelew.

   *Jak to działa:*
   Wybierz „Przychodzące” i odbiorcę — aplikacja sama wstawi kategorię przychodu tego miesiąca: tak wypłata trafia od razu do „nierozdysponowane” na ekranie „Budżet”.

   Dotknij pola „Kategoria” przy przychodzie — otworzy się arkusz „Gdzie zaksięgować przychód”: „Przychód na listopad”, „Przychód na grudzień” albo „Do kategorii wydatków…” (zwrot, Twoja część wspólnego zakupu). Wypłatę zapisuje się na następny miesiąc, gdy wiek pieniędzy dojdzie do 30 dni — dlaczego i co się zmienia, opisuje artykuł [„Przegląd”](#overview), sekcja „Wiek pieniędzy w szczegółach”.

3. **Kwota** — wpisywana na klawiaturze niżej. Jeśli klawiatura jest schowana, dotknij kwoty, by ją przywrócić.

4. **Odbiorca** — komu zapłaciłeś albo od kogo przyszły pieniądze: „Biedronka”, „Pracodawca”. Są tu też przelewy między własnymi kontami.

   *Jak to działa:*
   Wybierz odbiorcę, którego już zapisywałeś — aplikacja wpisze kategorię i notatkę jak ostatnio. Wypełnia tylko puste pola: jeśli kategorię już wybrałeś, zostanie. Nowego odbiorcę tworzy się z wyszukiwania: wpisz nazwę i wybierz „Utwórz „…””. Żeby usunąć odbiorcę z transakcji, użyj krzyżyka po prawej stronie pola. Więcej — [niżej](#entry-pickers).

5. **Kategoria** — koperta, z której wyszły pieniądze. Bez niej zakup nie zmniejszy żadnego wiersza na ekranie „Budżet”.

6. **Konto** — skąd wyszły albo dokąd wpłynęły pieniądze: konto osobiste, portfel, karta kredytowa. Ikona i kolor są te same co na liście kont.

7. **Data** — dziś, jeśli jej nie ruszasz. Dotknij, by otworzyć kalendarz.

   *Jak to działa:*
   Data ponad miesiąc naprzód — aplikacja dopyta: „Transakcja zostanie zapisana z datą …, ponad miesiąc naprzód. Zapisać?”. Tak łapie się literówkę w roku.

8. **Klawiatura kwoty** — własna aplikacji, z kalkulatorem. Opisana [niżej](#entry-keypad).

### Klawiatura kwoty {#entry-keypad}

Zwykła klawiatura telefonu jest niewygodna do kwot: małe cyfry, bez działań, przecinek gdzieś na drugim ekranie. Formularz ma własną — dużą i z kalkulatorem.

(+)
#### Liczy

Paragon na dwoje, dwa zakupy jedną kartą — licz od razu w polu.

*Jak to działa:*
Wpisz 120, naciśnij „+”, wpisz 35 i naciśnij „=” — kwota zmieni się w 155. Działają „+”, „−”, „×” i „÷”. Wybrane działanie zostaje podświetlone, dopóki wpisujesz drugą liczbę.

(,)
#### Przecinek albo grosze

Jak wpisywać część dziesiętną — wybierasz sam.

*Jak to działa:*
**Z przecinkiem** — jak na kalkulatorze: 12, przecinek, 50 to 12,50. Dopóki wpisujesz grosze, klawisz przecinka jest podświetlony.

**Od groszy** — jak na terminalu płatniczym: 1250 to 12,50. Zamiast przecinka klawiatura ma klawisz „00”: „3”, „00”, „00” to 300,00.

Przełącza się w „Ustawienia → Język i formaty → Wpisywanie kwoty”. **Zaraz po instalacji:** z przecinkiem.

(⌫)
#### Kasowanie

Dotknij, by skasować ostatnią cyfrę. Przytrzymaj, by skasować wszystko naraz, razem z rozpoczętym działaniem.

(✓)
#### „Zatwierdź”

Chowa klawiaturę, odsłaniając pozostałe pola i przycisk „Zapisz” pod spodem. Systemowy przycisk Wstecz robi to samo.

(✋)
#### Która ręka

Cyfry pod kciukiem.

*Jak to działa:*
„Pod prawą rękę” — cyfry po prawej, działania i „Zatwierdź” po lewej (jak na zrzucie). „Pod lewą rękę” — odwrotnie. „Ustawienia → Język i formaty → Klawiatura kwoty”. **Zaraz po instalacji:** pod prawą rękę.

### Wybór odbiorcy i kategorii {#entry-pickers}

Oba pola otwierają listę od dołu ekranu. Na górze — wyszukiwanie: wpisz kilka liter, a lista się zawęzi.

[Lista odbiorców: wyszukiwanie, sekcja Przelewy z kontami i saldami, Poza budżetem, odbiorcy z literą po lewej]
**Odbiorca.** Najpierw Twoje konta do przelewów, potem odbiorcy.

[Lista kategorii: wyszukiwanie, Podziel kwotę, Często używane, grupy kategorii]
**Kategoria.** „Podziel kwotę”, częste, potem wszystkie grupy.

(A)
#### Przelewy — na liście odbiorców

Pieniądze poszły na Twoje własne konto? Wybierz je w sekcji „Przelewy”: „Przelew: Visa”.

*Jak to działa:*
Pod nazwą konta jest jego saldo, żeby nie pomylić. Konta poza budżetem (oszczędności, lokata) są we własnej sekcji niżej. Jak działa przelew — [niżej](#entry-transfer).

(B)
#### Nowy odbiorca

Nie ma go na liście? Wpisz nazwę w wyszukiwaniu i wybierz „Utwórz „…””.

*Jak to działa:*
Odbiorców nie trzeba zakładać z góry: lista buduje się sama, w miarę zapisywania. Zmienić nazwę albo usunąć — „Ustawienia → Odbiorcy”.

(C)
#### „Często używane”

Chipy z kategoriami, które wybierasz najczęściej. Jedno dotknięcie i gotowe.

*Jak to działa:*
Wyszukiwanie rozumie też nazwę grupy. Nie możesz znaleźć? Wybierz „Utwórz „…” w grupie”: nowa kategoria od razu pojawi się też na ekranie „Budżet”.

(D)
#### „Podziel kwotę”

Jeden zakup — kilka kategorii. Opisane [niżej](#entry-split).

### Wypełniona transakcja {#entry-filled}

Zakup w „Biedronka” z artykułu „Transakcje”: z tagiem, paragonem elektronicznym i zdjęciem. Klawiatura jest schowana, a „Dodatkowo” rozwinięte — widać wszystkie pola formularza.

[Edycja transakcji Biedronka 143,00: pola, Dodatkowo z tagiem działka, paragon, zdjęcie, Zaksięgowane, Flaga, Usuń transakcję, Zapisz]

9. **Notatka** — co kupiłeś albo po co: „Mleko, jajka, chleb”. Widać ją w taśmie kursywą i da się ją znaleźć wyszukiwaniem.

   *Jak to działa:*
   Kwota nie jest obowiązkowa: wpis bez kwoty to notatka o zdarzeniu. Na przykład: wymiana oleju przy 85 000 km, oddaliśmy Andrzejowi klucze do działki. Konto i kategoria są jednak potrzebne. Na pierwsze naciśnięcie „Zapisz” aplikacja odpowie „Wpisz kwotę”, na drugie — „Wpisz kwotę. Jeszcze raz — zapiszę bez kwoty”, a trzecie zapisze wpis.

   Potem znajdzie go wyszukiwanie w „Transakcje”: szuka też w tekście notatki — wpisz na przykład olej.

10. **„Dodatkowo”** — rzadko używane pola w jednej karcie. Dotknij nagłówka, by zwinąć albo rozwinąć kartę.

    *Jak to działa:*
    Zwinięta karta to jedna linijka, z ikonami po prawej dla pól w niej schowanych: tag, paragon, zdjęcie, „Zaksięgowane”, flaga. Wypełnione pole widać zawsze, nawet w zwiniętej karcie. Aplikacja zapamiętuje Twój wybór. **Zaraz po instalacji:** zwinięta.

11. **Tagi** — etykiety ponad kategorią: „#działka”, „#urlop”. Arkusz wyboru — [niżej](#entry-tags).

12. **Paragon elektroniczny** — kod albo link z paragonu. Ikona skanera po prawej kieruje aparat na kod QR, „+” dodaje kolejny paragon.

    *Jak to działa:*
    Jeśli aplikacja zna paragony Twojego kraju, sprawdza paragon z formularzem: wpisuje kwotę, jeśli jej jeszcze nie ma, a jeśli kwoty się różnią, pokazuje linijkę pod polem i proponuje „Popraw”. Paragon nigdy nie zmienia daty. Więcej o paragonach i zdjęciach — w artykule [„Transakcje”](#transactions).

13. **Zdjęcia i PDF** — „Dodaj” — zrób zdjęcie paragonu, wybierz zdjęcie z galerii albo PDF. Krzyżyk na miniaturze ją usuwa.

    *Jak to działa:*
    Nie przesadzaj: każde zdjęcie trafia do wszystkich kopii zapasowych i, jeśli to włączone, do chmury. Więcej — w artykule [„Transakcje”](#transactions).

14. **„Zaksięgowane”** — zaznacz, gdy transakcja pojawi się w wyciągu z banku. Kółko w wierszu taśmy robi to samo.

    *Jak to działa:*
    Znacznik jest opcjonalny: nie wpływa na budżet, tylko pomaga uzgodnić konto z bankiem. Jeśli nigdy go nie używałeś, po prostu pomiń — puste kółka są w porządku.

15. **Flaga** — kolorowy znak „wrócę do tego”: sprawdzić, poczekać na zwrot, omówić. W wierszu taśmy pojawi się flaga.

16. **Usuń transakcję** — tylko przy transakcji już zapisanej. Aplikacja dopyta.

17. **„Zapisz”** — zapisz. Bez konta albo kategorii aplikacja nie zapisze i powie, co wybrać. Zerowa kwota jest dozwolona: taki wpis staje się w taśmie notatką-przypomnieniem.

### Przelew między własnymi kontami {#entry-transfer}

Wypłaciłeś gotówkę, spłaciłeś kartę kredytową, przełożyłeś pieniądze na lokatę — to nie wydatek, tylko przemieszczenie pieniędzy. Takie transakcje zapisuj jako przelewy, inaczej budżet policzy je jako wydatki.

[Przelew 900 zapisany jako wyjście z Konta osobistego: Wychodzące, Przelew: Visa, konto Konto osobiste, czerwona poświata]
**Sposób 1.** Wyjście z konta osobistego: „Wychodzące”.

[Ten sam przelew 900 zapisany jako wpływ na Visę: Przychodzące, Przelew: Konto osobiste, konto Visa, zielona poświata]
**Sposób 2.** Wpływ na Visę: „Przychodzące”.

(E)
#### Dokąd — w polu „Odbiorca”

Wybierz konto w sekcji „Przelewy”. Nagłówek formularza zrobi się szary.

*Jak to działa:*
Zrzut pokazuje spłatę karty kredytowej: 900 zł z „Konto osobiste” na „Visa”. W taśmie pojawią się dwa wiersze: minus na koncie osobistym i plus na karcie kredytowej.

(F)
#### „Kategoria niepotrzebna”

Pieniądze są nadal Twoje — tylko się przeniosły. Koperty na ekranie „Budżet” się nie zmieniają.

*Jak to działa:*
Wyjątek to przelew między kontem budżetowym a kontem poza budżetem (na przykład na oszczędności). Wtedy pieniądze wychodzą z kopert albo do nich wchodzą, i aplikacja pyta o kategorię.

(G)
#### „Wychodzące” i „Przychodzące” przy przelewie

Kierunek jest z punktu widzenia konta w polu „Konto”.

*Jak to działa:*
**„Wychodzące”** — pieniądze wychodzą z tego konta na konto z pola „Odbiorca”. Za kwotą łagodnie świeci czerwone kółko. **„Przychodzące”** — pieniądze wpływają na to konto z tego w „Odbiorca”. Kółko jest zielone. Nagłówek przelewu jest szary w obu przypadkach.

(!)
#### Jeden przelew — dwa sposoby zapisu

Spłatę 900 zł z „Konto osobiste” na „Visa” można zapisać z każdej strony. Wynik jest ten sam.

*Jak to działa:*
1. **Wyjście z konta osobistego** (lewy zrzut): „Konto” — Konto osobiste, „Odbiorca” — „Przelew: Visa”, „Wychodzące”, czerwona poświata.
2. **Wpływ na kartę kredytową** (prawy zrzut): „Konto” — Visa, „Odbiorca” — „Przelew: Konto osobiste”, „Przychodzące”, zielona poświata.

Tak czy inaczej w taśmie pojawią się te same dwa wiersze: −900 na Konto osobiste i +900 na Visa, oba z ikoną przelewu. Wybierz, co wygodniejsze: uzgadniasz wyciąg z konta osobistego — zapisuj jako wyjście z konta; aplikacja banku pisze „spłata karty otrzymana” — zapisuj jako wpływ na kartę. Z ekranu konta formularz otwiera się z tym kontem sam.

**Przelew zapisuj raz.** Drugą stronę aplikacja doda sama. Zapiszesz go jako wyjście z konta, a potem jeszcze jako wpływ na kartę kredytową — i przelew się podwoi: z konta wyjdzie 1800 zł, a na kartę wpłynie 1800 zł zamiast 900.

(H)
#### Różne waluty

Z karty w złotych na konto w euro — formularz sam zaproponuje przeliczenie.

*Jak to działa:*
Pod odbiorcą pojawią się pola: „Wpłynęło” — ile wpłynie na drugie konto — i „Kurs”, z przyciskiem, który odwraca kierunek kursu. Zmienisz kwotę — „Wpłynęło” się przeliczy; zmienisz kurs — tak samo; wpiszesz „Wpłynęło” — przeliczy się kurs.

### Kwota podzielona {#entry-split}

Jeden zakup — kilka kopert: w „Rossmann” kupiłeś jedzenie za 183 zł i chemię za 75 zł. Zapisz to jako jedną transakcję, ale w dwóch kategoriach — wtedy obie koperty uczciwie się zmniejszą.

[Podział Rossmann 258: Podział, Razem, Zakupy spożywcze 183, Chemia i artykuły domowe 75, Dodaj część]

(I)
#### „Podział”

Pojawia się zamiast pola „Kategoria”, gdy wybierzesz „Podziel kwotę”. Obok — „Razem” części.

(J)
#### Część

Własna kategoria, kwota i notatka. Dotknij kategorii albo kwoty — zmieni się tylko ta część.

*Jak to działa:*
Część może być też przelewem: poprosiłeś przy kasie o wypłatę gotówki — 210 zł do „Zakupy spożywcze” i 90 zł jako „Przelew: Gotówka”. Przykład z liczbami — w artykule [„Transakcje”](#transactions).

(K)
#### „+ tag”

Tag tylko dla tej części. Tag z pola „Tagi” formularza dotyczy od razu całego zakupu.

(L)
#### „Dodaj część”

Jeszcze jedna linijka. Krzyżyk po prawej od zbędnej części ją usuwa.

(M)
#### „Anuluj”

Wróć do jednej kategorii na całą kwotę.

Części nie sumują się do kwoty? Opisane [niżej](#entry-split-mismatch).

#### Części nie sumują się do kwoty {#entry-split-mismatch}

Pomyliłeś się w jednej części? Aplikacja nie poprawi tego po cichu — pokaże różnicę tuż pod częściami i zaproponuje, jak ją zamknąć.

[Części 183 i 105 przy kwocie 258: Podział przekracza kwotę o 30, przycisk Zwiększ do 288]
**Części jest więcej.** „Zwiększ do 288,00 zł”.

[Części 183 i 45 przy kwocie 258: Pozostało do podziału 30, przycisk Zmniejsz do 228]
**Części jest mniej.** „Zmniejsz do 228,00 zł”.

(N)
#### „Podział przekracza kwotę o …” / „Pozostało do podziału: …”

Jak daleko części są od kwoty. Linijka pojawia się pod częściami sama, w trakcie edycji.

*Jak to działa:*
Dopóki edytujesz, linijka jest żółta — to podpowiedź. Naciśniesz „Zapisz” przy kwotach, które się nie sumują — linijka zrobi się czerwona, a formularz nie zapisze transakcji, dopóki kwoty się nie zgodzą. Ten sam przycisk poprawki jest też w komunikacie na dole ekranu.

(O)
#### „Zwiększ do …” / „Zmniejsz do …”

Jedno dotknięcie — i kwota zrówna się z sumą części.

*Jak to działa:*
Po lewej: w drugiej części wpisałeś 105 zamiast 75. Razem części dają 288 zł, a kwota to 258 zł: „Podział przekracza kwotę o 30,00 zł”, a przycisk „Zwiększ do 288,00 zł” dodaje te 30 do kwoty. Po prawej odwrotnie: 45 zamiast 75 — „Pozostało do podziału: 30,00 zł”, a przycisk „Zmniejsz do 228,00 zł” odejmuje 30.

**Przycisk poprawia kwotę, a nie część.** Jeśli kwota jest dobra — jak na paragonie — a pomyliłeś się w części, popraw samą część: dotknij jej kwoty i wpisz właściwą.

### Zwrot za oddany towar {#entry-refund}

Oddałeś zepsute mleko, zwróciłeś kurtkę, która nie pasowała — pieniądze wróciły. To nie przychód: zapisz to jako zwrot do tej samej kategorii, z której płaciłeś.

[Arkusz Gdzie zaksięgować przychód: Przychód na listopad, Przychód na grudzień, Do kategorii wydatków]
**Krok 3.** Pole „Kategoria” ma „Przychód na listopad” — dotknij go i wybierz „Do kategorii wydatków…”.

[Zwrot 4,50 z Biedronki: Przychodzące, kategoria Zakupy spożywcze, konto Konto osobiste, notatka Zwrot: przeterminowane mleko]
**Gotowe.** „Przychodzące”, sklep, kategoria zakupu.

(P)
#### Jak zapisać

Zwrot to pieniądze, które przyszły ze sklepu z powrotem do kategorii, z której wyszły.

*Jak to działa:*
1. „+ Transakcja” → „Przychodzące”.
2. Kwota zwrotu. Odbiorca — ten sam sklep. Konto — gdzie zwrócono pieniądze, zwykle ta sama karta.
3. Z przyzwyczajenia aplikacja wstawia w „Kategoria” „Przychód na listopad” (lewy zrzut). Dotknij pola „Kategoria” → „Do kategorii wydatków…” → wybierz kategorię, z której kupowałeś: „Zakupy spożywcze”.
4. Notatka — opcjonalnie: „Zwrot: przeterminowane mleko”. Zapisz.

(Q)
#### Co się zmienia

Koperta „Zakupy spożywcze” zostaje dopełniona, „nierozdysponowane” — nie.

*Jak to działa:*
- Na ekranie „Budżet” przy „Zakupy spożywcze” „Wydano” jest o 4,50 zł mniejsze, a saldo rośnie o tyle samo.
- „Nierozdysponowane” się nie zmienia: tego nie zarobiłeś, odzyskałeś własne pieniądze.
- Na ekranach kategorii i sklepu wydatki są liczone po odjęciu zwrotów.
- W kalendarzu na ekranie „Przegląd” dzień z samymi zwrotami jest oznaczony pustym kółkiem.
- Zwrot na kartę kredytową? Dług karty maleje, a razem z nim kwota odłożona na spłatę w „Płatności kartami”.

(R)
#### A jeśli zapiszesz to jako przychód

Budżet skłamie dwa razy.

*Jak to działa:*
„Przychód na listopad” doda 4,50 zł do „nierozdysponowane”, jakbyś je zarobił, a „Zakupy spożywcze” zachowają zakup, którego naprawdę nie było. Raport „Przychody i wydatki” pokaże i przychody, i wydatki wyższe, niż są naprawdę.

(S)
#### Dlaczego nie usunąć zakupu

Usunąć można, jeśli oddałeś wszystko tego samego dnia.

*Jak to działa:*
Jeśli zakup już przeszedł przez bank albo został uzgodniony, albo oddałeś tylko część, zapisz zwrot jako osobną transakcję. W wyciągu z banku będą dwie linijki, zakup i zwrot — niech w aplikacji też będą dwie: uzgodnienie się zgodzi.

Pieniądze, które kolega oddał Ci za swoją połowę wspólnego zakupu, zapisuje się tak samo: „Przychodzące”, od kolegi, do kategorii zakupu.

### Tagi {#entry-tags}

Pole „Tagi” w „Dodatkowo” otwiera arkusz wyboru.

[Arkusz Tagi: wyszukiwanie Znajdź lub utwórz tag, Ostatnie: działka zaznaczona, na pół]

1. Zaznacz potrzebne tagi — ostatnie są na górze, z liczbą transakcji po prawej.
2. Potrzebnego nie ma? Wpisz jego nazwę w linii „Znajdź lub utwórz tag” i wybierz „Utwórz tag „…””.
3. Naciśnij „Gotowe”.

Wybór nie przepadnie, nawet jeśli przesuniesz arkusz w dół. Do czego przydają się tagi i gdzie potem patrzeć na sumy — w artykule [„Transakcje”](#transactions).

### Nie ma czasu? — „Do skrzynki” {#entry-inbox}

Przy kasie czasem jest tylko sekunda: kwotę pamiętasz, ale nie ma czasu wybierać kategorii i konta.

Włącz „Ustawienia → Dane → Skrzynka”. Teraz, jeśli formularz ma kwotę, ale nie ma kategorii albo konta, przycisk mówi **„Do skrzynki”** zamiast „Zapisz”, a na klawiaturze kwoty zapisuje od razu. Transakcja jest zapisana, ale oznaczona „Rozdziel”.

Dopóki takie transakcje są, nad nawigacją wisi pasek, a na ekranie „Przegląd” jest komunikat. Dotknij go — formularz otworzy je po kolei, w kolejności zapisywania: wygodnie, żeby odtworzyć dzień sklep po sklepie. **Zaraz po instalacji:** wyłączone.

Szczególnie wygodne z głosem: powiedz zakup przy kasie — a w domu rozdziel to, czego głos nie rozpoznał. Scenariusz — w artykule [„Wprowadzanie głosem”](#voice-inbox).

### Co można zrobić w formularzu {#entry-gestures}

Krótka ściągawka gestów i przycisków.

| Zrób to | Co się stanie |
|---|---|
| Dotknij kwoty | Przywróć klawiaturę kwoty. |
| Przycisk Wstecz telefonu | Najpierw chowa klawiaturę, za drugim razem wychodzi (pyta, jeśli coś niezapisane). |
| Przytrzymaj ⌫ | Skasuj całą kwotę. |
| Krzyżyk w polu „Odbiorca” | Usuń odbiorcę z transakcji. |
| Dotknij nagłówka „Dodatkowo” | Zwiń albo rozwiń rzadko używane pola. |
| Krzyżyk na miniaturze zdjęcia | Usuń zdjęcie albo PDF z transakcji. |

## Wprowadzanie głosem {#voice}

Powiedz zakup jednym zdaniem — „Biedronka 211 Zakupy spożywcze” — a aplikacja otworzy formularz już wypełniony. Sprawdź i zapisz.

*zielony przycisk mikrofonu nad „+ Transakcja”*

### Po co {#voice-why}

Przy kasie ręce są zajęte, a zakup trzeba zapisać od razu, póki pamiętasz. Wpisać kwotę, wybrać odbiorcę, kategorię i konto — to pięć dotknięć. Głosem — jedno zdanie.

Głos niczego sam nie zapisuje. Wypełnia formularz transakcji, a zapisujesz Ty — dlatego błąd rozpoznawania nigdy niepostrzeżenie nie trafi do budżetu.

Przycisk mikrofonu jest zielony, nad „+ Transakcja” na ekranach „Przegląd” i „Transakcje” oraz na ekranach konta i kategorii.

### Za pierwszym razem {#voice-first}

[Arkusz wprowadzania głosem: mikrofon, Powiedz kwotę i swoje nazwy: kategorię, sklep, konto; Na przykład: „211 Zakupy spożywcze”; Rozpoznane trafi do formularza — tam można sprawdzić i poprawić; przyciski Anuluj i Mów]

1. **Co mówić** — kwotę i swoje nazwy: kategorię, sklep, konto.

2. **Przykład** — zdanie z Twojego budżetu: najczęstsza kategoria i typowa kwota. Powtórz je — i zadziała.

3. **Dokąd to trafi** — do formularza transakcji, gdzie wszystko można sprawdzić i poprawić.

4. **„Mów”** — włącza mikrofon. Za pierwszym razem arkusz nie włącza go sam: najpierw przeczytaj, co mówić. Potem mikrofon włącza się od razu po otwarciu arkusza.

Aplikacja poprosi o dostęp do mikrofonu — pozwól. Mów, a potem naciśnij „Gotowe” albo po prostu przestań mówić: rozpoznane zdanie pojawi się na arkuszu, a formularz się otworzy.

### Co mówić {#voice-say}

Zacznij od kwoty i kategorii, potem dodawaj resztę. Przykład pod mikrofonem rośnie razem z Tobą: dwa udane zdania z rzędu — i pokazuje następny krok.

Kroki na budżecie demonstracyjnym:

| Zdanie | Co się wypełni |
|---|---|
| „211 Zakupy spożywcze” | Kwota i kategoria. |
| „Biedronka 211 Zakupy spożywcze” | Plus odbiorca. |
| „Biedronka 211 Zakupy spożywcze notatka Jedzenie” | Plus notatka: wszystko po słowie „notatka”. |
| „Biedronka 211 Zakupy spożywcze z konta Konto osobiste” | Plus konto, z którego płaciłeś. |
| „przelew 300 z konta Konto osobiste na konto Visa” | Przelew między kontami. |
| „przychód 4200 Pracodawca na konto Konto osobiste” | Przychód i konto, na które poszły pieniądze. |

[Formularz Dodaj transakcję po zdaniu „Biedronka 211 Zakupy spożywcze z konta Konto osobiste”: Wychodzące, 211,00, Odbiorca Biedronka, Kategoria Zakupy spożywcze, Konto Konto osobiste, Data]

Zrzut pokazuje formularz po zdaniu „Biedronka 211 Zakupy spożywcze z konta Konto osobiste”. Data to dziś. Sprawdź i naciśnij „Zatwierdź”, potem „Zapisz”.

##### Słowa, które aplikacja rozumie

- **„przelew”** — przelew między kontami; **„przychód”** — przyszły pieniądze. Bez tych słów zdanie jest wydatkiem.
- **„z konta …”** albo **„z …”** — z którego konta; **„na konto …”** albo **„na …”** — na które konto. Słowo „konto” można pominąć.
- **„notatka”** — wszystko po tym słowie staje się notatką. Dlatego mów je na końcu.
- **„kategoria …”** — jeśli nazwa kategorii brzmi jak nazwa sklepu i aplikacja je myli.

##### Kwota

Cyframi albo słowami — rozpoznawanie samo zamieni „dwieście pięćdziesiąt” na 250. Grosze idą po przecinku: „25,50”. Jeśli w zdaniu jest kilka liczb, kwotą jest pierwsza.

### Jak rozpoznawane są nazwy {#voice-names}

Aplikacja szuka w zdaniu **Twoich** nazw: odbiorców, kategorii i kont z tego budżetu. Nowych nie tworzy — nazwiesz sklep, którego w budżecie jeszcze nie ma, a pole „Odbiorca” zostanie puste.

##### Odbiorca przynosi ze sobą kategorię

Gdy odbiorca jest rozpoznany, kategoria i notatka wypełniają się z jego dawnych transakcji, jakbyś wybrał go w formularzu ręcznie. Wystarczy powiedzieć „Biedronka 211” — kategoria „Zakupy spożywcze” wpisze się sama.

##### Ile słów potrzeba

Dla odbiorcy wystarczy jedno słowo z nazwy. Kategoria z kilku słów potrzebuje co najmniej dwóch z nich — żeby „Zdrowie i leki” nie pomylić ze „Zdrowie”. Nazwa wypowiedziana w całości jest rozpoznawana zawsze.

*Dlaczego przykład jest z Twojego budżetu:*
Przykład z wymyślonymi nazwami („Lewiatan 100 jedzenie Castorama”) uczyłby zdania, którego w Twoim budżecie nie ma: powtórzysz je — i dostaniesz pusty formularz. Dlatego przykład zawsze jest zbudowany z Twoich własnych danych — Twój najczęstszy zakup, Twoje konta, niedawna notatka.

### Nie wszystko rozpoznane — „Do skrzynki” {#voice-inbox}

Głos rozpoznał kwotę, ale nie kategorię albo sklep. Przy kasie nie ma czasu tego rozdzielać, a zakupu szkoda stracić. Do tego jest „Skrzynka”.

##### Zapisz teraz, rozdziel w domu

1. Raz włącz „Ustawienia → Dane → Skrzynka”.
2. Przy kasie powiedz zdanie jak zwykle. Na końcu dodaj „notatka” i kilka słów o zakupie — na przykład „notatka apteka koło domu”. Notatka zapisze się, nawet jeśli sklepu i kategorii nie rozpoznano.
3. Czegoś brakuje w formularzu? Zamiast „Zapisz” jest przycisk „Do skrzynki”, na klawiaturze kwoty też. Naciśnij — zakup jest zapisany i oznaczony „Rozdziel”.
4. W domu dotknij paska nad nawigacją albo komunikatu na ekranie „Przegląd”. Formularz otworzy te zakupy po kolei, w kolejności zapisywania: „Skrzynka · 1 z 3”. Wybierz kategorię i konto — „Zapisz”.

Kwota, data i wszystko, co głos zdołał rozpoznać, są już w transakcji — z nimi i z notatką łatwo przypomnieć sobie zakup. Jeśli konto rozpoznano, zakup już zmniejszył jego saldo, a na ekranie „Budżet” siedzi w wierszu „Bez kategorii”, dopóki go nie rozdzielisz. Jeśli konta nie rozpoznano, zakup czeka poza budżetem i wejdzie do niego, gdy wybierzesz konto.

*Co nie trafia do skrzynki:*
Przelew między kontami i kwota podzielona: potrzebują od razu obu kont albo wszystkich części. Bez kwoty też nie pójdzie: jeśli głos nie złapał liczby, wpisz ją w formularzu. Więcej o skrzynce w artykule [„Formularz transakcji”](#entry-inbox).

### Jeśli nie zrozumiała {#voice-fail}

| Na arkuszu | Co się stało |
|---|---|
| „Nic nie usłyszałem — spróbuj jeszcze raz” | Telefon nie rozpoznał ani słowa. Mów bliżej mikrofonu i naciśnij „Spróbuj ponownie”. |
| „Nie rozpoznałem ani kwoty, ani żadnej z Twoich nazw” | Zdanie rozpoznano, ale nie ma w nim liczby ani znanej nazwy. Formularz się nie otworzy — spójrz na przykład i naciśnij „Spróbuj ponownie”. |
| „Brak dostępu do mikrofonu albo rozpoznawanie jest niedostępne…” | Aplikacja nie dostała mikrofonu albo telefon nie ma rozpoznawania mowy. Sprawdź uprawnienia aplikacji w ustawieniach telefonu. |

Jeśli nic nie rozpoznano, przykład na arkuszu staje się o krok prostszy. Jeśli rozpoznano nazwę, ale nie kwotę, przykład zostaje ten sam: najpewniej zdanie po prostu się urwało.

### Język {#voice-language}

Aplikacja słucha w języku interfejsu — tym, który wybrano w „Ustawienia”, sekcja „Wygląd” → „Język i formaty” → „Język interfejsu”. Więcej w artykule [„Ustawienia”](#settings-formats). Pod przykładem jest napisane, w jakim języku słucha.

##### „Język interfejsu nie jest zainstalowany do rozpoznawania mowy — słucham w …”

Telefon nie ma modelu rozpoznawania dla tego języka, więc aplikacja słucha w języku telefonu. Dodaj język w ustawieniach rozpoznawania mowy telefonu — i linijka zniknie.

##### Słowa „przelew”, „przychód”, „notatka” — w Twoim języku

Każdy język ma własne słowa kluczowe: po ukraińsku „переказ”, „дохід”, „нотатка”, po rosyjsku „перевод”, „доход”, „заметка”. Przykład pod mikrofonem zawsze pokazuje słowa Twojego języka.

## Skaner paragonów {#receipt}

Skieruj aparat na kod QR paragonu — aplikacja wpisze kwotę i datę, a sklep, który już widziała, rozpozna po numerze kasy i wpisze odbiorcę, kategorię i konto.

*fioletowy przycisk z kodem QR nad „+ Transakcja”*

### Po co {#receipt-why}

Paragony zbierają się w kieszeni, a wieczorem trzeba sobie przypomnieć, gdzie, ile i kiedy. Skaner bierze kwotę i datę z paragonu — bez literówek w liczbach i z prawdziwym dniem zakupu, nawet jeśli wpisujesz paragon następnego dnia. Paragon zapisuje się w transakcji jako paragon elektroniczny: papierowy można wyrzucić.

### Gdzie jest przycisk {#receipt-where}

Fioletowy przycisk z kodem QR stoi nad „+ Transakcja” na ekranach „Przegląd” i „Transakcje” oraz na ekranach konta i kategorii.

Widać go tylko wtedy, gdy aplikacja zna paragony Twojego kraju:

| Kraj | Kiedy widać przycisk |
|---|---|
| Ukraina | Hrywna w budżecie albo na dowolnym koncie, albo telefon kupiono na Ukrainie (region UA). |
| Kazachstan | Tenge w budżecie albo na koncie, albo region telefonu to KZ. |
| Rosja | Rubel w budżecie albo na koncie. |
| Portugalia | Region telefonu to PT albo język aplikacji jest portugalski, a w budżecie lub na koncie są euro. |

*Dlaczego według waluty, a nie języka:*
Język nic nie mówi o kraju, w którym robisz zakupy: po rosyjsku piszą i na Ukrainie, i w Kazachstanie, a paragony są tam różne. Walutę natomiast wybrałeś sam — i ona mówi, gdzie płacisz.

W innych krajach przycisku nie ma — w Polsce na razie też. Ale kod z dowolnego paragonu można zapisać w transakcji — ikoną skanera w polu paragonu elektronicznego w formularzu ([niżej](#receipt-form)). A żeby nauczyć aplikację czytać paragony Twojego kraju, przyślij nam kilka — [jak](#receipt-your-country).

### Jak skanować {#receipt-how}

[Okno Aplikacja uczy się na twoich paragonach: w kodzie QR są tylko data, kwota i numer kasy; przyciski Anuluj i Skanuj]

1. Naciśnij fioletowy przycisk.
2. Pierwsze trzy razy aplikacja wyjaśnia, jak uczy się na paragonach (zrzut). Naciśnij „Skanuj”. Gdy raz rozpozna sklep, więcej nie wyjaśnia.
3. Otworzy się aparat: „Skieruj aparat na kod QR paragonu”. Kod czyta się sam, niczego nie trzeba naciskać.
4. Otworzy się formularz transakcji z kwotą, datą i paragonem. Sprawdź i naciśnij „Zapisz”.

Paragon jest w telefonie jako zdjęcie albo PDF? Pod aparatem — „Wybierz z galerii” i „Wybierz PDF”.

### Co bierze się z paragonu {#receipt-what}

Kod QR paragonu nie zawiera nazwy sklepu ani listy zakupów — tylko kwotę, datę i godzinę, numer paragonu i numer kasy. Dlatego:

| Pole formularza | Skąd się bierze |
|---|---|
| Kwota | Z paragonu. |
| Data | Z paragonu: dzień zakupu, a nie dziś. |
| Paragon elektroniczny | Kod z samego paragonu. Można nim otworzyć i skopiować paragon. |
| Odbiorca | Po numerze kasy: ten, którego wybierałeś przy wcześniejszych paragonach z tej kasy. |
| Kategoria i notatka | Po odbiorcy — jakbyś wybrał go w formularzu ręcznie. |
| Konto | To, którym płaciłeś w tym sklepie ostatnio. |

*Kasa oznacza ten sam sklep:*
Kasa zawsze należy do jednego sklepu. W supermarkecie trafiasz raz do jednej kolejki, raz do drugiej — przy paragonach ukraińskich aplikacja rozpoznaje też sąsiednią kasę tego samego sklepu. Jeśli sąsiednie kasy prowadzą do różnych odbiorców, aplikacja milczy: lepiej wybrać sklep samemu, niż dostać zły.

### Nowy sklep {#receipt-new-shop}

Przy pierwszym paragonie z nowego sklepu aplikacja wpisuje tylko kwotę i datę — i od razu otwiera wybór odbiorcy.

[Arkusz Odbiorca nad formularzem: wyszukiwanie, przelewy, odbiorcy]

[Formularz po wyborze: 713,00, Odbiorca Biedronka, Kategoria Zakupy spożywcze, Konto puste, Data 9 listopada, paragon elektroniczny z linkiem do paragonu]

1. Znajdź sklep na liście albo wpisz nową nazwę.
2. Kategoria wpisze się sama, jeśli już kupowałeś u tego odbiorcy.
3. Wybierz konto: w tym sklepie jeszcze nie płaciłeś, więc aplikacja go nie zna.
4. „Zapisz”.

Następny paragon z tej kasy przyjdzie już z wpisanym odbiorcą, kategorią i kontem.

### Powtórki i błędy {#receipt-problems}

| Komunikat | Co się stało |
|---|---|
| „Ten paragon jest już wprowadzony” | Ten sam paragon jest już w transakcji — data i kwota są w oknie. „Edytuj” otwiera tamtą transakcję, „Dodaj mimo to” — nową, „Anuluj” — nic. |
| „To nie jest paragon, który aplikacja zna” | Kod QR nie jest z paragonu albo jest z paragonu innego kraju. Formularz się nie otworzy. |
| „W tym paragonie nie ma kwoty” | Kod przeczytano, ale nie ma w nim kwoty. Wpisz zakup przez „+ Transakcja”. |

Niektóre serwisy kasowe drukują na paragonie link do własnej strony, bez kwoty i daty — takiego paragonu aplikacja nie przeczyta.

### Paragon z pliku: „Udostępnij” {#receipt-share}

Paragon przyszedł mailem, w Viberze albo w aplikacji banku jako obraz lub PDF? Naciśnij tam „Udostępnij” i wybierz „Mój budżet”.

- Znajomy paragon znaleziony — formularz otwiera się jak po aparacie, a aplikacja pyta „Dołączyć plik do transakcji?”. Paragon elektroniczny dodaje się tak czy inaczej; plik dołącz, jeśli chcesz widzieć sam paragon.
- W pliku nie ma paragonu albo jest nieznany — aplikacja powie dlaczego i zaproponuje „Wypełnij ręcznie”: formularz otworzy się z plikiem już dołączonym.

### Paragon w formularzu {#receipt-form}

W formularzu transakcji, w „Dodatkowo”, jest pole „Paragon elektroniczny (URL lub kod)” z ikoną skanera. Działa z **dowolnym** kodem QR, w dowolnym kraju: wpisuje do pola to, co mówi kod.

Jeśli paragon jest znajomy, aplikacja sprawdza go z formularzem: wpisuje kwotę, jeśli jej jeszcze nie ma, a jeśli kwoty się różnią, pokazuje linijkę „Na paragonie jest inna kwota: …” i proponuje „Popraw”. Paragon nie zmienia daty w otwartym formularzu. Więcej w artykule [„Formularz transakcji”](#entry).

Zapisany paragon widać jako ikonę w wierszu transakcji, a w karcie transakcji jako przyciski „Kopiuj” i „Otwórz”. Więcej w artykule [„Transakcje”](#transactions).

### Naucz aplikację paragonów Twojego kraju {#receipt-your-country}

Aplikacja czyta paragon bez internetu: wszystko, czego potrzebuje — kwota i data — musi być w samym kodzie QR. W wielu krajach tak jest: kod QR paragonu fiskalnego zawiera kwotę, datę i numer kasy. Jeśli tak jest i w Twoim kraju, możemy dodać jego paragony.

##### Przyślij 5–10 paragonów

1. Weź paragony z różnych sklepów: sieć supermarketów, apteka, stacja benzynowa, mały sklep. Paragony elektroniczne — PDF albo obraz z maila — też się nadają.
2. Sfotografuj każdy tak, żeby kod QR i suma były dobrze widoczne.
3. Wyślij je na „Czat na Telegramie” albo mailem przez „Zaproponuj ulepszenie” — oba w „Ustawienia”, sekcja „Pomoc i kontakt”. Napisz, z jakiego kraju.

Kilka paragonów jest potrzebnych, żeby upewnić się, że kod jest zbudowany tak samo na różnych kasach i w różnych sieciach. Jeden paragon tego nie powie.

*Co zasłonić na zdjęciu:*
Potrzebujemy tylko kodu QR, kwoty i daty. Ostatnie cyfry karty, imię kasjera, kartę lojalnościową i wszystko inne osobiste można zasłonić palcem albo zamazać — na rozpoznawanie to nie wpływa.

*Kiedy to nie zadziała:*
Jeśli kod QR paragonu zawiera tylko link do strony — bez kwoty i bez daty — dane są na tej stronie. Aplikacja tam nie chodzi: obiecuje działać bez serwera i bez rejestracji. Takie paragony zostają bez skanera, ale ich kod zawsze można zapisać w polu paragonu elektronicznego.

## Widżety i skróty {#widgets}

Przyciski do zapisania zakupu prosto na ekranie głównym telefonu: głos, nowa transakcja, skaner paragonów. Jedno dotknięcie i jesteś w formularzu — bez otwierania aplikacji i szukania „+”.

*ekran główny telefonu — „Widżety” → „Mój budżet”; skróty — przytrzymaj ikonę aplikacji*

### Po co {#widgets-why}

Zakupy zapisuje się, póki się je pamięta: przy kasie, w drodze ze sklepu. Każde dodatkowe dotknięcie to pretekst, żeby odłożyć to „na wieczór” i zapomnieć. Widżet na ekranie głównym od razu otwiera to, czego potrzebujesz: głos, formularz albo aparat do paragonu.

### Pięć widżetów {#widgets-widgets}

| Widżet | Rozmiar | Co robi |
|---|---|---|
| „Głos” | 1 pole | Zielony przycisk z mikrofonem — [wprowadzanie głosem](#voice). |
| „Transakcja” | 1 pole | Przycisk z „+” w kolorze „+ Transakcja” — nowa transakcja. |
| „Paragon” | 1 pole | Fioletowy przycisk z kodem QR — [skaner paragonów](#receipt). |
| „Przyciski w kolumnie” | 1 × 2 pola | Wszystkie trzy przyciski jeden nad drugim. |
| „Przyciski w rzędzie” | 2 × 1 pola | Wszystkie trzy przyciski obok siebie. |

Kolory zgadzają się z przyciskami w aplikacji: zielony — głos, fioletowy — paragony.

##### Przycisk paragonu nie dla każdego

Osobny widżet „Paragon” dostaje każdy. Ale w widżetach z trzema przyciskami przycisk paragonu widać tylko wtedy, gdy aplikacja zna paragony Twojego kraju — według tej samej zasady co przycisk w aplikacji. Zasada jest w artykule [„Skaner paragonów”](#receipt-where). W przeciwnym razie widżet ma dwa przyciski.

### Jak dodać widżet {#widgets-add}

1. Przytrzymaj wolne miejsce na ekranie głównym.
2. Wybierz „Widżety”.
3. Znajdź „Mój budżet” i potrzebny widżet.
4. Przeciągnij go na ekran główny.

Nazwy w menu zależą od telefonu: w jednych „Widżety” są w menu ekranu głównego, w innych na osobnej liście. Widżety „Głos”, „Transakcja” i „Paragon” zajmują jedno pole, jak ikona aplikacji.

### Skróty {#widgets-shortcuts}

Skrót to to samo działanie co zwykła ikona: rysuje go launcher jak ikony aplikacji, i na każdym telefonie stoi z nimi w jednym rzędzie.

1. Przytrzymaj ikonę „Mój budżet”.
2. Pojawią się „Głos” i „Transakcja” — dotknij jednego, by od razu go otworzyć.
3. Albo przeciągnij skrót na ekran główny — zostanie tam jako ikona.

Skrótu do paragonów nie ma: skrótu nie da się ukryć tam, gdzie aplikacja nie zna paragonów kraju. Do paragonów używaj widżetu „Paragon”.

### Co się otwiera {#widgets-open}

| Dotykasz | Co się dzieje |
|---|---|
| „Głos” | Aplikacja otwiera się na ekranie „Przegląd” z arkuszem wprowadzania głosem na wierzchu. |
| „Transakcja” | „Przegląd”, a na wierzchu formularz nowej transakcji. |
| „Paragon” | „Przegląd”, a na wierzchu aparat skanera. |

Po zapisaniu zostajesz na ekranie „Przegląd” i widzisz, że zakup trafił do budżetu.

##### Jeśli ustawiono PIN

Aplikacja najpierw poprosi o PIN albo odcisk palca, a zaraz potem otworzy to, co dotknąłeś. Nie trzeba niczego naciskać ponownie.

## Odbiorcy i tagi {#payees-tags}

Komu płacisz i po co — dwa przekroje taśmy transakcji, obok kategorii.

*Ikona w nagłówku ekranu „Transakcje”*

### Po co ten ekran {#payees-tags-why}

Kategorie odpowiadają na pytanie „gdzie poszły pieniądze”. Tu są dwa inne przekroje tej samej taśmy transakcji: **komu** płacisz i **po co**. Ile poszło do „Biedronka” w tym roku, ile kosztowała działka, kto komu ile winien za wspólny zakup.

##### Jak tu trafić

Ikona „Odbiorcy i tagi” w nagłówku ekranu „Transakcje”. Albo „Ustawienia → Dane → Odbiorcy” i „Tagi”. Albo „Wszystkie tagi ›” w bloku „Moje tagi” na ekranie „Przegląd”.

##### Nie trzeba ich zakładać z góry

Odbiorcy i tagi pojawiają się sami, gdy pierwszy raz wpiszesz je w formularzu transakcji. Tu je oglądasz, zmieniasz nazwy i porządkujesz.

##### Dwie zakładki

„Odbiorcy” i „Tagi”. Ekran pamięta, na której zakładce skończyłeś.

### Zakładka „Odbiorcy” {#payees-tags-payees}

Wszyscy, którym płaciłeś albo od których dostawałeś pieniądze. Dotknij dowolnego zrzutu, żeby otworzyć go na cały ekran.

[Zakładka Odbiorcy: wyszukiwanie, Suma z bieżącego roku, Biedronka −3336, Netflix, Pracodawca +50 400, przycisk Nowy odbiorca]

1. **Zakładki** — „Odbiorcy” i „Tagi”.

2. **Menu „⋮”** — kolejność listy odbiorców i okres sumy. Opisane po prawej od drugiego zrzutu.

3. **Wyszukiwanie** — wpisz kilka liter nazwy.

4. **Odbiorca** — litera, nazwa, po prawej suma za okres, pod nazwą — ile było transakcji w tym samym okresie i kiedy ostatnia.

   *Jak to działa:*
   Suma jest „netto” i ze znakiem: przy sklepie — minus po odjęciu zwrotów; przy pracodawcy — plus. Na zrzucie „Biedronka” kosztowała od początku roku 3336 zł, a „Pracodawca” przyniósł 50 400 zł. Te liczby celowo nie mają koloru: kierunek pokazuje znak.

   Dotknij wiersza — otworzy się ekran odbiorcy ([niżej](#payees-tags-payee)). Przesuń w lewo — „Edytuj”: zmiana nazwy. Przesuń w prawo — „Usuń”: aplikacja dopyta i powie, ile transakcji ma odbiorca. Same transakcje nie znikną; zostaną tylko bez odbiorcy.

5. **„Suma z bieżącego roku”** — podpis nad listą: jaki okres obejmują liczby po prawej. Okres wybierasz w menu „⋮”.

6. **„+ Nowy odbiorca”** — dodaj odbiorcę ręcznie. Zwykle niepotrzebne: formularz transakcji tworzy go sam.

#### Kolejność listy {#payees-tags-sort}

[Menu sortowania: Najczęściej używane, Ostatnie, Alfabetycznie, Według kwoty, Okres]

(A)
#### Najczęściej używane

Na górze ci, z którymi jest najwięcej transakcji. Tak jest zaraz po instalacji.

(B)
#### Ostatnie

Na górze ci, z którymi była najświeższa transakcja.

(C)
#### Alfabetycznie

Wygodne, gdy odbiorców są setki.

(D)
#### Według kwoty

Najwięksi na górze: i ci, którym płacisz najwięcej, i ci, od których najwięcej dostajesz. Znak nie ma znaczenia, tylko wielkość.

(E)
#### Okres

„Suma z bieżącego roku” (domyślnie zaraz po instalacji), „Suma z 12 miesięcy” albo „Suma z całego okresu”. Okres ustawia kwotę w każdym wierszu, „Transakcje: N” i kolejności „Najczęściej używane” i „Według kwoty”; data ostatniej transakcji jest zawsze z całego okresu. Rok zaczyna się 1 stycznia: 1 stycznia suma zaczyna od zera.

### Ekran odbiorcy {#payees-tags-payee}

Wszystko o jednym odbiorcy: ile, na co i kiedy. „⋮” zmienia nazwę, a „+” na dole zaczyna nową transakcję z tym odbiorcą już wpisanym.

[Ekran odbiorcy Netflix: okres listopad 2026, Trendy wydatków, Według kategorii, transakcje według dni]

(F)
#### Okres

Zaczyna się od bieżącego miesiąca. Strzałki przewijają miesiące, a dotknięcie nazwy otwiera arkusz „Okres”: ten sam co na ekranie „Raporty”.

*Jak to działa:*
Chcesz zobaczyć wszystko, co poszło do odbiorcy w ciągu roku? Wybierz rok albo własny zakres, a ekran pokaże go w całości: sumę, kategorie i wszystkie transakcje.

(G)
#### „Trendy wydatków”

Ile wydano u odbiorcy w okresie i ile średnio miesięcznie.

*Jak to działa:*
Wydatki liczą się po odjęciu zwrotów. Jeśli odbiorca głównie płaci Tobie (pracodawca, najemca), blok nazywa się „Trendy wpływów” i liczy przychody.

(H)
#### „Według kategorii”

Na co poszły pieniądze do tego odbiorcy. Pojawia się, gdy kategorii są dwie lub więcej.

*Jak to działa:*
Na zrzucie Netflix ma dwie kategorie: internet w domu w „Telefon i internet” i abonament w „Subskrypcje”.

(I)
#### Transakcje

Wszystkie transakcje z tym odbiorcą w okresie, według dni.

### Zakładka „Tagi” {#payees-tags-tags}

Etykiety ponad kategoriami: „#działka”, „#urlop”, „#na pół”. Jak postawić tag na transakcji — w artykule [„Transakcje”](#transactions).

[Zakładka Tagi: na pół — do zebrania 129, zebrano 129 z 258; działka — 355, dwie transakcje]

7. **Tag** — nazwa, suma z całego okresu tagu, sam okres i liczba transakcji. Przy tagu z „Rozliczenie” prawa strona pokazuje, ile zebrać albo oddać.

   *Jak to działa:*
   Kolejność: najpierw tagi z otwartym rozliczeniem, potem według świeżości ostatniej transakcji, a tagi bez transakcji na końcu. Ukryte tagi są zebrane w osobnym bloku „Ukryte tagi” na dole.

   Dotknij — ekran tagu ([niżej](#payees-tags-tag)). Przytrzymaj — menu: „Zmień nazwę”, „Rozliczenie”, „Ukryj z wyboru”. Przesuń w lewo, by zmienić nazwę, w prawo, by usunąć.

8. **„+ Nowy tag”** — dodaj tag ręcznie. Zwykle tagi tworzy się od razu w formularzu transakcji.

### Ekran tagu {#payees-tags-tag}

Wszystko, co poszło pod jednym tagiem — ile, na co i kiedy. Tu też ustawia się „Rozliczenie”.

[Ekran tagu na pół: 10 listopada, 2 transakcje, do zebrania 129, rozliczono 50%, Wydano 258, Otrzymano 129, Według kategorii, transakcje]

(J)
#### Okres i transakcje

Pierwszy i ostatni dzień z transakcjami pod tagiem i ile ich jest. Sumy ekranu obejmują cały okres tagu.

(K)
#### Rozliczenie

Jeśli dla tagu włączone jest „Rozliczenie”: ile zostało do wyjścia na zero i pasek „rozliczono N%”.

*Jak to działa:*
Rozliczenie odpowiada na pytanie „kto komu ile” przy wspólnym wydatku. Aplikacja liczy: wydano minus otrzymano przez cały okres tagu.

- **„Do zebrania”** — wydałeś więcej, niż zebrałeś. Na zrzucie: zakup za 258 zł w „Rossmann” podzielono z Andrzejem, oddał 129 zł — zostało 129 zł, rozliczono 50%.
- **„Do zwrotu”** — zebrałeś więcej, niż wydałeś: na przykład wszyscy złożyli się na prezent i została reszta.
- **„Rozliczone”** na zielono — wszystko się zgadza.

Pieniądze od kolegi zapisuj jako zwrot do kategorii zakupu, z tym samym tagiem — jak w artykule [„Formularz transakcji”](#entry), sekcja „Zwrot za oddany towar”. „Rozliczenie” nie dotyka budżetu ani raportów: to pomocnik dla Ciebie.

(L)
#### „Wydano” i „Otrzymano”

Ile wyszło i ile przyszło pod tagiem. Przelewy między własnymi kontami nie wchodzą.

(M)
#### „Według kategorii”

Na co poszły pieniądze pod tym tagiem. Tag na jednej części kwoty podzielonej liczy tylko tę część.

(N)
#### Transakcje

Wszystkie transakcje z tagiem, według dni.

#### Menu „⋮” tagu {#payees-tags-tag-menu}

[Menu tagu: Zmień nazwę, Pokaż w Moich tagach, Rozliczenie zaznaczone, Ukryj z wyboru, Wskazówki, Baza wiedzy, Usuń]

(O)
#### Zmień nazwę

Nowa nazwa pojawi się na wszystkich transakcjach z tagiem. Nazwy już zajętej aplikacja nie przyjmie.

(P)
#### Pokaż w Moich tagach

Dodaj tag do bloku „Moje tagi” na ekranie „Przegląd”. Miejsca są cztery; gdy są zajęte, punkt jest szary i mówi dlaczego: „Moje tagi mają już 4”.

(Q)
#### Rozliczenie

Włącz albo wyłącz liczenie „kto komu ile” dla tego tagu.

(R)
#### Ukryj z wyboru

Tag znika z arkusza wyboru w formularzu, ale zostaje na transakcjach. Wygodne przy urlopie, który się skończył. Przy ukrytym tagu w tym miejscu jest „Przywróć do wyboru”.

(S)
#### Wskazówki

Wskazówki tego ekranu.

(T)
#### Baza wiedzy

Ten artykuł na stronie: otworzy się w przeglądarce, w języku aplikacji.

(U)
#### Usuń

Tag zostaje zdjęty ze wszystkich transakcji; same transakcje zostają. Aplikacja dopyta.

### Co można zrobić z wierszem {#payees-tags-gestures}

W wierszach nie ma przycisków: dotknij, przytrzymaj albo przesuń palcem.

| Zrób to | Co się stanie |
|---|---|
| Dotknij odbiorcy | Ekran odbiorcy. |
| Przesuń odbiorcę w lewo / w prawo | „Edytuj” (zmiana nazwy) / „Usuń”. |
| Dotknij tagu | Ekran tagu. |
| Przytrzymaj tag | Menu: „Zmień nazwę”, „Rozliczenie”, „Ukryj z wyboru”. |
| Przesuń tag w lewo / w prawo | „Edytuj” (zmiana nazwy) / „Usuń”. |

## Płatności zaplanowane {#scheduled}

Czynsz, subskrypcje, wypłata — wszystko, co się powtarza. Aplikacja pamięta terminy, przypomina o nich i sama wpisuje kwotę i kategorię. Pieniądze w budżecie przesuwają się dopiero wtedy, gdy potwierdzisz płatność.

*„Ustawienia” → „Planowanie” → „Płatności zaplanowane”*

### Po co ten ekran {#scheduled-why}

Połowa wydatków miesiąca jest znana z góry: czynsz 1-go, internet 5-go, subskrypcja 11-go, wypłata dwa razy w miesiącu. Płatność zaplanowana to taka transakcja, zapisana raz, z wyprzedzeniem.

##### Nie zapomnij

Aplikacja przypomni o terminie powiadomieniem — w dniu płatności albo wcześniej, jak ustawisz.

##### Nie wpisuj ręcznie

Nadszedł termin — naciśnij „Potwierdź”, a transakcja zapisze się sama: kwota, odbiorca, kategoria, konto.

##### Widź, co przed Tobą

Najbliższe płatności są na ekranie „Przegląd” w bloku „Co przed nami” i w „Kalendarz”. Widać, komu pieniądze są już obiecane.

Płatność zaplanowana to jeszcze nie wydatek. Dopóki jej nie potwierdzisz, salda kont i kopert się nie zmieniają: ona tylko przypomina i podpowiada.

### Co gdzie jest na ekranie {#scheduled-screen}

Wszystkie płatności zaplanowane na jednej liście, najbliższy termin na górze. Dotknij dowolnego zrzutu, żeby otworzyć go na cały ekran.

[Ekran Płatności zaplanowane: Pracodawca +4200 dwa razy w miesiącu, Właściciel mieszkania −3600 co miesiąc, Tauron, Spotify, Netflix, kreska −2400 co rok z czerwoną flagą i notatką Ubezpieczenie auta, przycisk Płatność]

1. **Wiersz** — jedna powtarzająca się płatność. Ułożony jak wiersz transakcji: kto i ile, kategoria i konto, jak się powtarza i kiedy najbliższy termin.

   *Jak to działa:*
   Pierwsza linijka to odbiorca i kwota ze znakiem: „−” oznacza, że pieniądze wyjdą, „+” — że przyjdą. Druga — kategoria i konto. Trzecia — częstotliwość i najbliższy termin.

   Płatność bez odbiorcy zamiast nazwy pokazuje kreskę „———”, a notatka stoi w czwartej linijce — na zrzucie „Ubezpieczenie auta”.

   Lista jest posortowana według najbliższego terminu. Płatności, których termin już minął, też tu są, na górze: czekają na potwierdzenie — więcej o tym [niżej](#scheduled-due).

2. **Częstotliwość i data** — po lewej jak się powtarza, po prawej najbliższy termin. Po zapisaniu albo pominięciu każdego terminu data sama przechodzi na następny.

3. **Flaga** — ten sam kolorowy znacznik co na transakcji. Gdy płatność zostanie zapisana, flaga przechodzi na transakcję.

4. **„+ Płatność”** — nowa płatność zaplanowana. Kroki są [niżej](#scheduled-new).

Dopóki płatności zaplanowanych nie ma, ekran jest pusty: „Brak płatności zaplanowanych” i podpowiedź „Czynsz, subskrypcje, wypłata — dodaj przyciskiem „Płatność””.

### Nowa płatność zaplanowana {#scheduled-new}

Formularz jest taki sam jak dla zwykłej transakcji, tylko z polem „Powtarzaj”. Dotknięcie wiersza na liście też go otwiera: wtedy nazywa się „Płatność zaplanowana” i zmienia istniejącą.

[Formularz płatności zaplanowanej: Wychodzące, 3600, Odbiorca Właściciel mieszkania, Kategoria Czynsz, Konto Konto osobiste, Data, Powtarzaj Co miesiąc, Notatka, Dodatkowo, Zapisz]

[Arkusz Powtarzaj: Jednorazowo, Codziennie, Co tydzień, Co 2 tygodnie, Dwa razy w miesiącu, Co 4 tygodnie, Co miesiąc, Co 2 miesiące, Co 3 miesiące, Co 4 miesiące, Dwa razy w roku, Co rok]

5. **Kwota** — wpisz ją na klawiaturze aplikacji i naciśnij „Zatwierdź”. Nad kwotą — „− Wychodzące” dla płatności i „+ Przychodzące” dla wypłaty.

6. **Odbiorca** — komu płacisz albo kto płaci Tobie.

7. **Kategoria** — z której koperty wyjdą pieniądze. Dla wypłaty — przychód miesiąca.

8. **Konto** — z którego konta pobierane albo na które wpływa.

9. **Data** — najbliższy termin. Następne aplikacja liczy od niego.

10. **„Powtarzaj”** — jak często: dwanaście wariantów, arkusz jest na drugim zrzucie.

    *Jak to działa:*
    - **„Jednorazowo”** — płatność bez powtórzeń. Gdy zostanie zapisana albo pominięta, znika z listy.
    - **„Dwa razy w miesiącu”** — w dniu terminu i 15 dni po nim: 3-go i 18-go. Jeśli drugiego dnia w miesiącu nie ma, termin wypada w ostatni dzień miesiąca.
    - **„Co 4 tygodnie”** — to nie to samo co „Co miesiąc”: terminów jest 13 w roku, a nie 12, i data za każdym razem się przesuwa.
    - **„Co miesiąc”** i rzadziej — w ten sam dzień miesiąca. Jeśli takiego dnia w miesiącu nie ma, termin wypada w ostatni dzień miesiąca i wraca w następnym: płatność na 31-go przychodzi 28 lutego, 31 marca, 30 kwietnia.

11. **Tagi** — te same etykiety co na transakcjach. Na zrzucie czynsz ma tag „mieszkanie”.

12. **„Dodatkowo”** — paragon elektroniczny, zdjęcia i PDF, „Zaksięgowane” i flaga. Na zrzucie do czynszu dołączono PDF umowy najmu.

    *Jak to działa:*
    Wszystko, co tu wypełnisz, razem z tagami, trafia do każdej transakcji zapisanej z tej płatności. Tagi są tu na miejscu: każda opłata czynszu sama trafi pod tag „mieszkanie”. Za to załącznik zwykle potrzebny jest raz: umowę najmu wystarczy dołączyć do jednej transakcji — przy zapisywaniu pierwszej płatności dotknij „Edytuj” i dodaj PDF w formularzu. Dołączona tutaj, stałaby ikonką przy każdej opłacie przez lata. Wypełniaj tu paragon, zdjęcia i PDF tylko wtedy, gdy dokument naprawdę jest potrzebny przy każdej transakcji.

13. **„Zapisz”** — płatność pojawi się na liście. Jeśli przypomnienia są włączone, aplikacja o niej przypomni.

##### Jak utworzyć płatność

1. „Ustawienia” → „Planowanie” → „Płatności zaplanowane”.
2. Naciśnij „+ Płatność” w prawym dolnym rogu. Otworzy się „Nowa płatność zaplanowana”.
3. Wpisz kwotę i naciśnij „Zatwierdź”.
4. Wybierz odbiorcę, kategorię i konto.
5. „Data” — najbliższy termin.
6. „Powtarzaj” — jak często się powtarza.
7. Opcjonalnie — tagi i „Dodatkowo”.
8. „Zapisz”.

##### Zaplanowany przelew

Spłata karty kredytowej, rata kredytu, zasilenie konta oszczędnościowego — to przelew między własnymi kontami. W polu „Odbiorca” wybierz konto w sekcji „Przelewy”, a kierunek — „Wychodzące” albo „Przychodzące”, jak przy zwykłym przelewie.

*Przelew to dwa konta:*
- Płatność widać na ekranach **obu** kont, w bloku „Co przed nami”: jako minus na koncie osobistym, jako plus na kredycie.
- Na ekranie potwierdzenia, w przypomnieniu i w tygodniowym podsumowaniu nazywa się trasą: „Konto osobiste → Kredyt”.
- „Potwierdź” zapisuje przelew od razu na obu kontach, jak formularz.
- Konta w różnych walutach — pod odbiorcą pojawią się „Wpłynęło” i „Kurs”: wpisz kurs od razu, przy tworzeniu. Gdy nadejdzie termin, „Potwierdź” otworzy formularz z tymi liczbami — sprawdź kurs z danego dnia i zapisz.
- Przelew na konto poza budżetem (kredyt, lokata) zabiera pieniądze z koperty — aplikacja pyta o kategorię, jak przy zwykłym przelewie. Przelew między kontami budżetowymi (konto osobiste → karta kredytowa) kategorii nie potrzebuje.
- W „Kalendarz” na ekranie „Przegląd” spłata karty kredytowej nie jest zacieniona jako wydatek: pieniądze zostały w budżecie. Rata kredytu poza budżetem jest zacieniona.

##### Czego płatność zaplanowana mieć nie może

Kwoty podzielonej: przy zapisie aplikacja powie „Zaplanowane podziały nie są jeszcze obsługiwane”.

### Z istniejącej transakcji {#scheduled-from-txn}

Najszybszy sposób na płatność zaplanowaną — z już zapisanej transakcji: formularz dostaje wszystko oprócz częstotliwości.

[Arkusz transakcji Biedronka: odbiorca, kategoria, konto, data, paragon, zdjęcie; na dole przyciski Powtórz, Edytuj i Utwórz płatność zaplanowaną]

(14)
##### „Utwórz płatność zaplanowaną”

1. Dotknij transakcji na ekranie „Transakcje”, na ekranie konta albo kategorii — otworzy się arkusz transakcji.
2. Na dole — „Utwórz płatność zaplanowaną”.
3. Otworzy się „Nowa płatność zaplanowana” z tą samą kwotą, odbiorcą, kategorią, kontem, notatką, flagą i tagami. Paragon elektroniczny, zdjęcia i PDF oraz „Zaksięgowane” są puste: każda płatność ma własne. Trzeba dołączyć, powiedzmy, umowę? Dodaj ją tutaj. Na wierzchu od razu otworzy się arkusz „Powtarzaj” — wybierz częstotliwość.
4. Data wpisze się sama — najbliższy termin po tamtej transakcji, ale nie wcześniej niż dziś: z transakcji z 5-go płatność co miesiąc zacznie się 5-go następnego miesiąca.
5. „Zapisz”.

Przycisk ma tylko zwykła transakcja: kwota podzielona i przelew — nie.

### Gdy nadchodzi termin {#scheduled-due}

W dniu terminu płatność zaczyna czekać na potwierdzenie. Sama się nie zapisuje: czynsz mógł zostać zapłacony dzień później, a rachunki przychodzą co miesiąc z inną kwotą. Decydujesz Ty.

[Komunikat na ekranie Przegląd: Płatności zaplanowane: 2 czeka na potwierdzenie]
Na górze ekranu „Przegląd” pojawia się komunikat: „Płatności zaplanowane: 2 czeka na potwierdzenie”. Dotknij go, by otworzyć ekran potwierdzenia.

[Ekran potwierdzenia: karty Pracodawca +4200 i Właściciel mieszkania −3600, każda z datą zapisu i strzałkami, Pomiń, Edytuj, Potwierdź]

[Ta sama karta z datą przesuniętą o dzień: podpisy przesunięto i wyzerowano]

(A)
##### Karta płatności

Kto, ile, kategoria, konto i częstotliwość. Najstarszy termin na górze.

(B)
##### Data zapisu

Na początku to data terminu. „‹ ›” przesuwają ją o dzień wcześniej albo później, a dotknięcie daty otwiera kalendarz — miesiąc w każdą stronę. Po przesunięciu obok pojawiają się „przesunięto” i „wyzerowano” (drugi zrzut); „wyzerowano” przywraca datę terminu.

(C)
##### „Potwierdź”

Transakcja zapisuje się z wybraną datą i pojawia się na ekranie „Transakcje” ze wszystkim, co ma płatność: tagami, paragonem, zdjęciami i PDF, znacznikiem „Zaksięgowane”. Karta znika, a termin przechodzi na następny.

*Jak to działa:*
Następny termin liczy się od daty TERMINU, a nie od daty zapisu: czynsz z terminem 1-go zapłacono 3-go — następny termin wciąż jest 1-go. Inaczej harmonogram pełzłby przy każdym opóźnieniu.

(D)
##### „Edytuj”

Jeśli tym razem kwota jest inna. Otworzy się formularz transakcji z polami płatności — i z jej tagami, paragonem, zdjęciami i PDF: popraw i zapisz — transakcja jest zapisana, a termin zamknięty. Zamknąłeś formularz bez zapisu? Nic się nie zmieniło.

(E)
##### „Pomiń”

Tym razem płatności nie było. Transakcja się nie zapisuje, a termin przechodzi na następny. Płatność „Jednorazowo” po pominięciu znika.

*Jeśli zebrało się kilka terminów:*
Nie otwierałeś aplikacji dwa miesiące? Płatność co miesiąc ma za sobą dwa terminy. Karta pokazuje najstarszy; potwierdź go albo pomiń — pojawi się następny, aż dojdziesz do dziś. Gdy nie ma już czego rozdzielać, ekran mówi „Brak płatności do potwierdzenia”.

Zaplanowany przelew zapisuje się jako przelew — od razu na obu kontach. Jeśli konta są w różnych walutach, „Potwierdź” otwiera formularz z polami „Wpłynęło” i „Kurs” wypełnionymi przy tworzeniu — popraw na kurs z danego dnia i zapisz.

### Wcześniej albo później niż termin {#scheduled-early-late}

Pieniądze rzadko przychodzą dokładnie w dniu terminu. Płatność zapisuje się z datą, kiedy naprawdę się stała — a termin zostaje zamknięty: w swoim dniu już się nie pojawi, ani na ekranie potwierdzenia, ani jako przypomnienie.

##### Wypłata przyszła 2 dni wcześniej

Termin jeszcze nie nadszedł, więc nie ma go na ekranie potwierdzenia.

1. „Ustawienia” → „Planowanie” → „Płatności zaplanowane”.
2. Przesuń wiersz „Pracodawca” w lewo — pojawi się „Zapisz”. Naciśnij.
3. Otworzy się formularz transakcji: kwota, odbiorca, kategoria, konto, tagi — z płatności, data — dziś. Pieniądze nie przyszły dziś? Dotknij pola „Data” i wybierz dzień.
4. „Zapisz”.

Wypłata zapisana w dniu, w którym przyszła. Termin zamknięty: w jego dniu aplikacja nie przypomni i nie poprosi o potwierdzenie. Następny termin idzie według harmonogramu: dwa razy w miesiącu — następny z dwóch dni, co miesiąc — miesiąc po terminie, a nie po dniu zapisu.

##### Czynsz zapłacono dzień później

Termin już minął — płatność czeka na ekranie potwierdzenia.

1. Dotknij komunikatu „Płatności zaplanowane: … czeka na potwierdzenie” na ekranie „Przegląd”.
2. W karcie płatności naciśnij „›” — data zapisu przesunie się o dzień później. Dotknij samej daty, by otworzyć kalendarz.
3. „Potwierdź”.

Transakcja zapisuje się w dniu, w którym zapłaciłeś. Następny termin zostaje według harmonogramu — 1-go, a nie 2-go.

##### Tym razem kwota jest inna

Rachunki co miesiąc są inne. Termin nadszedł — „Edytuj” w karcie na ekranie potwierdzenia; jeszcze nie — „Zapisz” na liście. Popraw kwotę w formularzu i naciśnij „Zapisz”: transakcja zapisze się z nową kwotą, a płatność zaplanowana zachowa starą.

### Co można zrobić z wierszem {#scheduled-gestures}

W wierszu nie ma przycisków. Przesuwasz wiersz palcem w bok — do przycisku, który wyłania się spod spodu.

[Wiersz Tauron przesunięty w lewo: przycisk Zapisz]

[Wiersz Tauron przesunięty w prawo: czerwony przycisk Usuń]

| Zrób to | Co się stanie |
|---|---|
| Dotknij wiersza | Formularz „Płatność zaplanowana”: zmień kwotę, datę, częstotliwość — cokolwiek. „Zapisz”. |
| Przesuń w lewo | „Zapisz” — zapisz najbliższy termin od razu: zapłaciłeś czynsz z góry, pieniądze przyszły wcześniej. Otworzy się formularz nowej transakcji z polami płatności i dzisiejszą datą. Po zapisaniu transakcja jest zapisana, ten termin zamknięty, a następny idzie według harmonogramu. |
| Przesuń w prawo | „Usuń” — po pytaniu „Usunąć płatność zaplanowaną?”. Transakcje już zapisane z tej płatności zostają. |

### Przypomnienia {#scheduled-reminders}

Aplikacja przypomina o terminie powiadomieniem: „Dziś: …”, „Jutro: …” albo „Za 3 dni: …”. Kiedy przypominać — w dniu płatności, dzień, 2 albo 3 dni wcześniej albo tydzień wcześniej — o której godzinie i czy ukrywać kwoty na ekranie blokady, ustawia się w [„Ustawienia” → „Przypomnienia”](#settings-reminders).

### Gdzie jeszcze widać płatności zaplanowane {#scheduled-elsewhere}

**„Przegląd”** — blok „Co przed nami”: najbliższe płatności z datami, i „Kalendarz” w trybie „Zaplanowane”: nadchodzące terminy, zapisane i niezapisane. Więcej w artykule [„Przegląd”](#overview-heatmap).

**Ekran konta** — nad taśmą karta „Co przed nami”: płatności zaplanowane tego konta. Dotknięcie wiersza otwiera „Płatności zaplanowane”.

**„Cele”** — jeśli kategoria ma płatność zaplanowaną, karta celu podpowiada „Z płatności zaplanowanej: …”. Więcej w artykule [„Cele”](#goals-new).

**Podsumowanie tygodnia** — jeśli jest włączone, zawiera nadchodzące płatności zaplanowane. Więcej w [„Ustawienia” → „Przypomnienia”](#settings-reminders).

## Chmura i kopie zapasowe {#sync}

Jak nie stracić budżetu i jak prowadzić go na kilku urządzeniach.

*„Ustawienia” → sekcja „Synchronizacja”*

### Po co to wszystko {#sync-why}

Budżet mieszka w telefonie. Ta sekcja ustawień odpowiada na trzy pytania.

**„Telefon wpadł do jeziora”** — trzy lata budżetu nie powinny pójść na dno razem z nim. Pomagają [kopie zapasowe](#sync-backups) i chmura: nowy telefon [wczyta budżet z chmury](#sync-restore).

**„Prowadzimy budżet razem”** — albo tylko Ty, ale z telefonem i komputerem. Wszystkie urządzenia patrzą w jedną chmurę i wymieniają się zmianami: to [synchronizacja](#sync-sync).

**„Wczoraj wszystko popsułem”** — usunąłem nie to konto, zaimportowałem nie ten plik. Aplikacja sama robi [kopie według harmonogramu](#sync-backups), i do nich można wrócić.

**Od czego zacząć.** Wystarczą trzy kroki:

1. [Podłącz chmurę](#sync-auth) — Google Drive, Dropbox albo WebDAV (Nextcloud, ownCloud, pCloud, własny serwer).
2. [Ustaw hasło](#sync-password), jeśli nie chcesz, żeby ktoś inny mógł przeczytać Twoje dane w chmurze. Zapisz je.
3. To wszystko. Synchronizacja i kopie działają odtąd same: przy każdym otwarciu aplikacji.

### Autoryzacja: podłącz chmurę {#sync-auth}

Tu loguje się do chmury. Chmury są trzy, można podłączyć jedną albo kilka. Na zrzucie Dropbox jest już podłączony, a Google Drive i WebDAV jeszcze nie: tak widać oba rodzaje bloku.

[Ekran Autoryzacja: Szyfrowanie chmury, Google Drive z przyciskiem Zaloguj się przez Google, Dropbox z podłączonym kontem, WebDAV z polami adresu, loginu i hasła]

(1)
**Szyfrowanie chmury** — ten sam blok co na ekranach „Synchronizacja” i „Kopie zapasowe”. Hasło ustawia się raz — opisane [niżej](#sync-password).

(2)
**Google Drive** — „Zaloguj się przez Google” — i wybierz konto. Budżet trafi do folderu „My budget” na Twoim Google Drive.

*Jak to działa:*
Po zalogowaniu zamiast przycisku jest plakietka konta: imię, e-mail, czas ostatniej synchronizacji i „Wyloguj się”. Na Google Drive aplikacja widzi tylko to, co sama utworzyła: inne pliki są dla niej niedostępne.

(3)
**Dropbox** — „Zaloguj się przez Dropbox” otwiera stronę logowania Dropbox w przeglądarce. Zalogować się tam można na dwa sposoby: e-mailem i hasłem Dropbox albo przyciskiem „Kontynuuj z Google”. Pozwól na dostęp — i przeglądarka przeniesie cię z powrotem do aplikacji. Budżet trafi do folderu „My budget”.

*Dlaczego lepiej e-mail i hasło Dropbox:*
Logowanie przez Google wiąże Dropbox z kontem Google, którym się zalogowałeś. Drugie urządzenie albo druga osoba z innym kontem Google łatwo trafi do innego Dropboxa, w którym twojego budżetu nie ma. E-mail i hasło Dropbox działają tak samo na każdym telefonie i komputerze — u każdego, z kim prowadzisz budżet.

*Zapasowa droga, jeśli nie wróciło do aplikacji:*
Zwykle wystarcza główne logowanie — z powrotem z przeglądarki. Jeśli przeglądarka nie przeniesie cię do aplikacji, rozwiń „Problem z logowaniem?” → „Zaloguj się kodem (jeśli nie wróciło do aplikacji)”: Dropbox pokaże kod, wklej go w okno aplikacji.

Zrzut pokazuje podłączony Dropbox: plakietka konta z „Wyloguj się” i „Synchronizuj”. „Odśwież token Dropbox” w tym samym miejscu to też zapasowe wyjście: tylko gdy logowanie nagle przestanie działać.

(4)
**WebDAV** — własny serwer albo chmura, która mówi po WebDAV: Nextcloud, ownCloud, pCloud, Yandex Disk i inne. Potrzebny jest adres, login i hasło — bez logowania na konto osobiste.

*Jak to działa:*
Jeśli chmura ma włączone uwierzytelnianie dwuskładnikowe, serwer nie przyjmie zwykłego hasła: utwórz w ustawieniach chmury „hasło aplikacji” i wpisz je. Adres zaczynaj od `https://` — przy `http://` login i hasło idą jawnym tekstem, i aplikacja o tym ostrzega.

**Główna zasada: jedno konto w chmurze dla wszystkich urządzeń**

Telefon, tablet i komputer, które prowadzą jeden budżet, logują się do chmury **tym samym** kontem. Inaczej każde urządzenie pisze do własnej chmury i nie zobaczą nawzajem swoich zmian.

*A jeśli w rodzinie są różne konta Google?:*
Załóż **osobne, nowe konto Google** dla budżetu i loguj się nim do chmury aplikacji, tylko nim, na wszystkich urządzeniach. Nie loguj się na swoje prywatne konto na telefonie żony ani na jej na swoim: telefon zacznie synchronizować z tym kontem kontakty, wiadomości i zdjęcia, i prywatne dane dwóch osób się wymieszają. Osobne konto budżetu wie tylko o budżecie.

**Dropbox** — loguj się **loginem i hasłem** Dropbox, a nie przyciskiem „Kontynuuj z Google”. Logowanie przez Google wiąże Dropbox z użytym kontem Google — i na urządzeniu z innym kontem Google łatwo trafić do innego Dropboxa, w którym budżetu nie ma.

**WebDAV** — ten sam adres, login i hasło na wszystkich urządzeniach.

### Synchronizacja {#sync-sync}

Wymiana zmian między tym urządzeniem a chmurą, a przez chmurę — z innymi Twoimi urządzeniami. Dodasz zakup na telefonie — minutę później jest na komputerze.

[Ekran Synchronizacja: Szyfrowanie chmury, status Zsynchronizowano (Dropbox), wybór chmury Dropbox, przełączniki Synchronizuj zdjęcia i Autokopia do chmury z tego urządzenia, przycisk Synchronizuj]

(1)
**Szyfrowanie chmury** — hasło na wszystko, co trafia do chmury. Opisane [niżej](#sync-password).

(2)
**Status** — jak skończyła się ostatnia synchronizacja: „Zsynchronizowano (Dropbox)” na zielono, błąd na czerwono, z przyciskiem „Zgłoś błąd”.

(3)
**Chmura** — jeśli podłączonych jest kilka chmur, wybierz, z którą się synchronizować. Brak chmury — w tym miejscu jest napis „Brak podłączonych chmur…” z podpowiedzią, gdzie ją podłączyć.

*Jak to działa:*
Wszystkie urządzenia synchronizują się przez JEDNĄ chmurę. Pozostałe podłączone chmury aplikacja też odświeża co kilka dni — na wypadek, gdyby główna stała się niedostępna.

(4)
**Synchronizuj zdjęcia** — zdjęcia paragonów i PDF trafiają do chmury, do folderu budżetu, i pojawiają się na innych urządzeniach. **Zaraz po instalacji:** wyłączone.

*Jak to działa:*
Bez tego przełącznika transakcje przychodzą na drugie urządzenie ze znakiem zdjęcia, ale samego obrazka nie ma. Każde zdjęcie zajmuje miejsce w chmurze; jeśli oglądasz paragony tylko na telefonie, którym je zrobiłeś, włączać nie trzeba. Przy ustawionym haśle zdjęcia są wysyłane zaszyfrowane.

(5)
**Autokopia do chmury z tego urządzenia** — każda automatyczna kopia budżetu trafia też do chmury. **Zaraz po instalacji:** włączone.

*Jak to działa:*
Jeśli budżet prowadzą dwa urządzenia, oba robią kopie w chmurze — i wychodzą duplikaty. Zostaw przełącznik włączony na jednym urządzeniu, a na pozostałych wyłącz. Żeby kopia w chmurze miała wszystkie zdjęcia paragonów, włącz też „Synchronizuj zdjęcia”: inaczej do kopii trafią tylko zdjęcia zrobione na tym urządzeniu.

(6)
**Synchronizuj** — synchronizuj teraz. Zwykle nie trzeba go naciskać — aplikacja robi to sama, zobacz niżej.

#### Kiedy aplikacja synchronizuje się sama {#sync-when}

**Przy każdym otwarciu** — kilka sekund po powrocie do aplikacji. Dlatego ręcznie synchronizację uruchamia się prawie nigdy.

**Nie przy minimalizowaniu** — Android nie pozwala aplikacji pracować dalej po zminimalizowaniu. Zmiany zrobione przed zminimalizowaniem pójdą przy następnym otwarciu. Chcesz wysłać je od razu? Naciśnij ikonę synchronizacji na ekranie „Przegląd”.

**Ikona na ekranie „Przegląd”** — w prawym górnym rogu. Liczba na niej to ile zmian jeszcze nie wysłano do chmury. Dotknięcie synchronizuje teraz.

*Jak to działa:*
Po każdej synchronizacji ikona świeci przez 15 sekund: na zielono (wyszło) albo na czerwono (nie wyszło). Jedna porażka to zwykle sieć: metro, działka. Jeśli cztery synchronizacje z rzędu się nie udadzą, ikona zostaje czerwona aż do następnej udanej — to znaczy, że coś się zepsuło, i warto otworzyć ten ekran. Przytrzymaj ikonę, by zobaczyć tekst błędu.

O automatycznej synchronizacji aplikacja milczy. Komunikat „Zsynchronizowano” pojawia się tylko wtedy, gdy synchronizację uruchomiłeś sam.

#### Jeśli coś poszło nie tak {#sync-trouble}

Na ekranie „Synchronizacja” pojawia się karta: co się stało i co zrobić. Oto rodzaje.

**„Ten budżet już jest w chmurze”** — z przyciskami „Z chmury” i „Scal” pod kartą.

**Co się stało.** Podłączyłeś chmurę, a w niej już jest budżet o **tej samej nazwie** co budżet na tym urządzeniu — i oba mają już dane. Zwykle to drugi telefon: ktoś najpierw dodał na nim konta albo kilka zakupów, a dopiero potem podłączył chmurę pierwszego telefonu. Aplikacja nie wie, czy to jeden budżet, czy dwa różne o tej samej nazwie, więc niczego nie rusza i czeka na Twoją odpowiedź. Pyta raz — przy pierwszej synchronizacji tego budżetu.

**Co wybrać:**

- **To drugie urządzenie tego samego budżetu** — naciśnij **„Z chmury”**, potem „Wczytaj”. To urządzenie dostanie cały budżet z chmury, a to, co wpisałeś tutaj, przepadnie — wpisz to ponownie. To odpowiedź potrzebna najczęściej.
- **Naprawdę prowadziłeś jeden budżet osobno na dwóch urządzeniach** i chcesz połączyć wszystko razem — naciśnij **„Scal”**. Wszystko się zsumuje: to, co wpisałeś tutaj, i to, co jest w chmurze. Ale konta i kategorie, które tworzyłeś na każdym urządzeniu osobno, staną obok siebie — dwa „Konto osobiste”, dwóch odbiorców „Kawiarnia na rogu” — i zbędne trzeba będzie uprzątnąć ręcznie.
- **To dwa różne budżety**, które po prostu mają tę samą nazwę — na przykład Twój i żony, oba „Mój budżet”. Nie naciskaj żadnego przycisku. Zmień nazwę budżetu na tym urządzeniu: dotknij nazwy budżetu w nagłówku ekranu „Przegląd” → „⋮” obok tego budżetu → „Zmień nazwę”. Z nową nazwą dostanie własny folder w chmurze i będzie się synchronizował osobno.

Nie jesteś pewien? Najpierw zrób kopię: „Kopie zapasowe” → „Utwórz kopię teraz” → „Urządzenie”. Jeśli wybór okaże się błędny, możesz do niej wrócić.

**„Chmura jest chroniona hasłem”** — dane w chmurze są zaszyfrowane hasłem ustawionym na innym urządzeniu, a tutaj go nie ma albo jest inne. Dane są całe. „Wpisz hasło” — wpisz to samo hasło, a synchronizacja ruszy dalej.

*Jak to działa:*
„Hasło utracone” to ostateczność: plik w chmurze zostanie zastąpiony danymi tego urządzenia, a szyfrowanie zdjęte. Dane innych urządzeń nie przepadną — ich zmiany wrócą przy ich następnej synchronizacji. Przed zamianą aplikacja robi kopie i zachowuje obok nich stary zaszyfrowany plik — na wypadek, gdyby hasło się przypomniało.

**„Chmura nie jest zaszyfrowana”** — na tym urządzeniu ustawiono hasło, ale dane w chmurze są otwarte: szyfrowanie zdjęto na innym urządzeniu. Decydujesz Ty: „Zaszyfruj chmurę” — wtedy inne urządzenia będą musiały wpisać to samo hasło — albo „Usuń hasło tutaj”.

**„Plik synchronizacji w chmurze jest nieczytelny”** — plik w chmurze jest uszkodzony i sam się nie naprawi. „Napraw chmurę” robi świeże kopie budżetu i nadpisuje plik w chmurze danymi tego urządzenia.

*Jak to działa:*
Zmiany z innego urządzenia, które jeszcze tu nie dotarły, zostają tylko w uszkodzonym pliku — jego kopia jest zapisywana obok kopii zapasowych. Jeśli drugie urządzenie działa, przywiezie swoje dane przy następnej synchronizacji.

**„Zdjęcia z chmury nie zostały odszyfrowane: N”** — dane przyszły, a zdjęcia nie: są zaszyfrowane hasłem, którego tu nie ma albo które jest inne. Ustaw to samo hasło co na drugim urządzeniu — zdjęcia przyjdą przy następnej synchronizacji.

**„Konflikt”** — ten sam zapis zmieniono na dwóch urządzeniach. Karta pokazuje, czym różnią się wersje: „Zostaw” zachowuje wersję tego urządzenia, „Weź” bierze wersję z chmury.

### Szyfrowanie chmury: hasło {#sync-password}

Blok „Szyfrowanie chmury” stoi pierwszy na ekranach „Autoryzacja”, „Synchronizacja” i „Kopie zapasowe”. To jedno i to samo hasło.

**Co zamyka** — wszystko, co trafia do chmury: kopie zapasowe, zdjęcia paragonów i plik synchronizacji. Szyfrowanie to AES-256. Bez hasła te pliki może przeczytać każdy, kto ma dostęp do folderu w chmurze.

**Jak ustawić** — naciśnij „Ustaw hasło”.

*Krok po kroku:*
1. Otworzy się okno „Hasło szyfrowania”.
2. Wpisz hasło w „Hasło” i jeszcze raz w „Powtórz hasło” — co najmniej 4 znaki.
3. Zaznacz „Hasło jest zapisane w bezpiecznym miejscu” — bez tego „Zapisz” nie da się nacisnąć.
4. „Zapisz”. Blok zmieni się w „Chmura jest chroniona hasłem”.

**Na innych urządzeniach** — ustaw **to samo** hasło. Hasło się nie synchronizuje i nie trafia ani do chmury, ani do twórcy — żyje tylko na urządzeniu. Przy różnych hasłach synchronizacja zatrzymuje się z kartą „Chmura jest chroniona hasłem”.

**Zapomnisz hasło — kopii w chmurze nie odzyska nikt.** Ani Ty, ani twórca, żadnym sposobem. Zapisz je tam, gdzie trzymasz inne ważne hasła.

**Zmień albo usuń** — w bloku naciśnij „Edytuj” — „Zmień hasło” albo „Wyłącz szyfrowanie”. Zmieniaj hasło na wszystkich urządzeniach: jeśli któreś zachowa stare, przestanie czytać chmurę.

**Kopie w telefonie nie są szyfrowane** — leżą obok samej bazy danych budżetu, a ta jest otwarta. Dlatego przy ustawionym haśle kopie „Urządzenie” na liście mają etykietę „Bez szyfrowania” — żebyś nie myślał, że wszystko jest zamknięte.

### Kopie zapasowe {#sync-backups}

Kopia to cały budżet w jakimś momencie: konta, kategorie, transakcje, cele, płatności zaplanowane i zdjęcia. Aplikacja robi kopie sama; przychodzisz tu, gdy trzeba wrócić.

[Ekran Kopie zapasowe: Utwórz kopię teraz, Ostatnia kopia, Szyfrowanie chmury, Harmonogram kopii, filtry Wszystkie, Urządzenie, Dropbox, lista siedmiu kopii]

(1)
**Utwórz kopię teraz** — kopia w tej chwili, na przykład przed importem albo dużym porządkowaniem. Aplikacja zapyta „Gdzie zapisać kopię?” — zrzut [niżej](#sync-where).

(2)
**„Ostatnia kopia: …”** — kiedy zrobiono najświeższą kopię tego budżetu. Jeśli dawno, linijka zrobi się żółta.

(3)
**Szyfrowanie chmury** — to samo hasło co w „Synchronizacja” — [wyżej](#sync-password).

(4)
**Harmonogram kopii** — jak często aplikacja robi kopie i ile przechowuje. Dotknij, by rozwinąć — [niżej](#sync-schedule).

(5)
**Filtry** — „Wszystkie”, „Urządzenie” i chip na każdą podłączoną chmurę. Liczba to ile tam jest kopii. Brak podłączonych chmur — brak filtrów: nie ma czego filtrować.

(6)
**Kopia** — data i godzina, gdzie leży, jakiego rodzaju i czyj to budżet.

*Jak to działa:*
Pod datą — gdzie leży („Urządzenie”, „Dropbox”…) i jej rodzaj: „Auto, częsta”, „Auto, rzadka” albo „Ręczna”. Niżej — nazwa budżetu, ile w kopii jest wpisów, zdjęć i PDF, oraz rozmiar pliku.

Ikona zegara ze strzałką — **przywróć budżet do tej kopii**. Kosz — usuń kopię (aplikacja dopyta).

(7)
**Menu „⋮”** — „Przywróć z pliku”, „Czytelna kopia”, „Wskazówki” — [niżej](#sync-menu).

#### Jak przywrócić budżet do kopii {#sync-back}

1. Znajdź kopię z potrzebnego dnia. Nie wiesz, którą? Weź ostatnią przed tym, jak coś poszło nie tak.
2. Naciśnij ikonę zegara ze strzałką w jej wierszu.
3. Okno „Przywrócić dane?”: „Dane zostaną przywrócone z … Obecne dane zostaną zastąpione.” — naciśnij „Przywróć”.
4. Na dole pojawi się „Przywrócono z …”. Budżet jest teraz taki, jaki był w chwili kopii.

**Jeśli podłączona jest chmura, samo przywrócenie nie wystarczy.**

Kopię przywraca się, żeby pozbyć się niedawnych zmian: usunąłeś nie to konto, zaimportowałeś nie ten plik. Ale przywrócenie zmienia budżet tylko na tym telefonie. W chmurze wciąż leży budżet z tymi właśnie zmianami, a przy synchronizacji aplikacja łączy telefon z chmurą, i wygrywa świeższa zmiana. Naciśniesz „Synchronizuj” — i wszystko, czego się pozbywałeś, wróci z chmury w pół minuty.

Żeby cofnięcie się utrzymało, chmurę trzeba zastąpić przywróconym budżetem. Jak — niżej.

#### Cofnij także chmurę {#sync-rollback}

Budżet jest na jednym telefonie — wystarczą te kroki. Kolejność ma znaczenie.

1. **Przywróć kopię** — kroki wyżej. Potem **nie naciskaj „Synchronizuj”**.
2. **Wyjdź z aplikacji** przyciskiem ekranu głównego. Dopóki aplikacja jest zminimalizowana, nie synchronizuje się.
3. **Usuń plik synchronizacji w chmurze.** Otwórz chmurę w przeglądarce: folder „My budget” → folder z nazwą budżetu → plik `ynab_budget_sync.json`. Usuń tylko jego — folderów kopii i zdjęć nie ruszaj. W Dropbox folder „My budget” jest w „Aplikacje” → „My Budget Envelopes”.
4. **Wróć do aplikacji.** Po kilku sekundach sama się zsynchronizuje, nie znajdzie pliku w chmurze i położy tam przywrócony budżet. Ekran „Synchronizacja” powinien powiedzieć „Zsynchronizowano”.

*Dlaczego najpierw przywrócić, a potem usunąć plik:*
Przy każdym powrocie do aplikacji synchronizuje się ona po kilku sekundach. Usuniesz plik najpierw — a po powrocie z przeglądarki aplikacja od razu położy do chmury bieżący budżet, wciąż z tymi zmianami. Wtedy trzeba będzie zaczynać od nowa.

#### Jeśli budżet prowadzi kilka urządzeń {#sync-rollback-devices}

Drugi telefon i komputer też mają te zmiany. Przy swojej synchronizacji położyłyby je z powrotem do chmury, a stamtąd — z powrotem do Ciebie. Dlatego każde inne urządzenie musi zapomnieć swoje dane i wziąć budżet z chmury od nowa — zanim zdąży się zsynchronizować.

1. Cofnij budżet i chmurę na jednym urządzeniu — kroki wyżej.
2. Na drugim telefonie **włącz tryb samolotowy** i dopiero potem otwórz aplikację: bez sieci się nie synchronizuje.
3. „Ustawienia” → „O aplikacji” → „Zresetuj wszystkie dane”.
4. **Wyłącz tryb samolotowy.** Aplikacja się zsynchronizuje i wczyta z chmury już cofnięty budżet.

Na komputerze — tak samo: odłącz internet przed uruchomieniem programu, zresetuj dane w ustawieniach, podłącz z powrotem. Zmiany na tych urządzeniach, które jeszcze nie dotarły do chmury, przepadną razem z resetem.

#### Harmonogram kopii {#sync-schedule}

Aplikacja sama robi kopię, gdy przychodzi jej czas — przy otwarciu aplikacji i przy przełączeniu na inny budżet. Każdy budżet ma własny harmonogram. Kopie są dwóch rodzajów: częste — żeby wrócić o kilka dni, i rzadkie — żeby wrócić o miesiące.

[Harmonogram kopii w trybie Własne: częste kopie co 5 dni, przechowywać 7; rzadkie raz w miesiącu, przechowywać 12; Jak daleko wstecz: częste około 35 dni, rzadkie do 12 miesięcy]
**„Własne”.** Te same wybory co „Domyślne”.

**Domyślne** — częste kopie co 5 dni, przechowywanych jest ostatnich 7 — to około 35 dni wstecz; rzadkie — raz w miesiącu, przechowywanych 12 — do roku wstecz.

**Własne** — częste — codziennie albo co 2, 3, 5, 7 dni, przechowywać 3, 5, 7, 10, 14 albo 30; rzadkie — raz w miesiącu albo raz na kwartał, przechowywać 3, 4, 6, 12 albo 24 — albo „Nie rób”.

**„Jak daleko wstecz”** — aplikacja liczy, o ile dni i miesięcy można wrócić przy wybranym harmonogramie.

**Ostrzeżenia** — jeśli częste kopie kończą się, zanim zacznie się rzadka, aplikacja pokaże „Od … do … dni wstecz kopii może nie być” z przyciskami, które zamykają lukę. Wybierzesz „Nie rób” dla rzadkich — ostrzeże, że kopii starszych niż kilka dni nie będzie.

**Stare kopie są usuwane** — jeśli zmniejszysz, ile przechowywać, zbędne kopie zostaną usunięte przy najbliższej automatycznej kopii — i w telefonie, i w chmurze. Dlatego „Zapisz” najpierw pyta: ile zostanie usuniętych i data najstarszej.

**Kopie ręczne** — przechowywane bez limitu: harmonogram ich nie rusza. Harmonogram dotyczy tego urządzenia i się nie synchronizuje.

**Automatyczna kopia nie udała się dwa razy z rzędu** — na ekranie „Przegląd” pojawi się ostrzeżenie „Automatyczna kopia się nie tworzy” z powodem (na przykład brak miejsca) i przyciskiem „Zrób kopię”.

#### „Gdzie zapisać kopię?” {#sync-where}

O to pyta „Utwórz kopię teraz”.

[Arkusz Gdzie zapisać kopię: Urządzenie, Plik w telefonie, Google Drive, Dropbox, WebDAV]

**Urządzenie** — do folderu kopii aplikacji. Kopia pojawi się na liście.

**Plik w telefonie** — wybierz folder — na przykład „Pobrane” — i zapisz kopię jako plik. Możesz wysłać go sobie albo przenieść na komputer. Przy ustawionym haśle plik jest zaszyfrowany.

**Google Drive, Dropbox, WebDAV** — kopia idzie prosto do chmury. Chmura niepodłączona? Aplikacja powie, gdzie ją podłączyć.

#### Menu „⋮” {#sync-menu}

[Menu ekranu Kopie zapasowe: Przywróć z pliku, Czytelna kopia, Wskazówki, Baza wiedzy]

[Arkusz Czytelna kopia: Archiwum ze zdjęciami i PDF, Tylko dane, Plik z chmury]

(A)
#### Przywróć z pliku

przywróć budżet z pliku kopii, którego nie ma na liście: pobranego z chmury, wysłanego sobie, zapisanego w „Pobrane”.

*Jak to działa:*
Pasuje kopia (`.y4zip`), „Czytelna kopia”, a nawet plik synchronizacji `ynab_budget_sync.json` pobrany z chmury przez przeglądarkę. Jeśli plik jest zaszyfrowany, aplikacja zapyta o hasło. Jeśli kopia jest z innego budżetu (ani jednego wspólnego konta), aplikacja dopyta: „To chyba inny budżet”. Plik YNAB 4 tu nie pasuje — przenosi się go przez „Import z YNAB” w ustawieniach.

(B)
#### Czytelna kopia

Twoje dane jako plik, który otworzy każdy program, bez hasła. Trzymaj go tam, gdzie obcy nie zaglądają.

*Jak to działa:*
Trzy warianty:

- **Archiwum ze zdjęciami i PDF** — ten budżet w całości; otworzy go każdy archiwizator.
- **Tylko dane** — ten budżet jako jeden plik tekstowy; otworzy go każdy edytor tekstu. Paragony elektroniczne są, zdjęć i PDF nie ma.
- **Plik z chmury** — zdejmij hasło i kompresję z pliku synchronizacji albo kopii w chmurze, pobranych z chmury przez przeglądarkę.

To droga do Twoich danych z pominięciem aplikacji: nawet bez aplikacji budżet zostaje Twój.

(C)
#### Wskazówki

wskazówki tego ekranu listą.

(D)
#### Baza wiedzy

Ten artykuł na stronie: otworzy się w przeglądarce, w języku aplikacji.

### Wczytaj budżet z chmury {#sync-restore}

Nowy telefon, ponowna instalacja albo drugie urządzenie. Budżet leży w chmurze pod swoją nazwą; ten ekran go znajduje i wczytuje tutaj. Wariant „Mam już budżet” w kreatorze pierwszego uruchomienia otwiera ten sam ekran.

[Ekran Wczytaj budżet z chmury: krok 1 Podłącz chmurę z przyciskiem Podłącz, krok 2 Nazwa budżetu]

(1)
**Podłącz chmurę** — tak samo jak na pierwszym urządzeniu: ten sam Google Drive, Dropbox albo WebDAV i **to samo konto**.

(2)
**Wybierz budżet** — aplikacja pokaże budżety w chmurze z datą ich ostatniej synchronizacji. Dotknij swojego i „Wczytaj budżet”.

*Jak to działa:*
Nie ma listy albo nie ma na niej Twojego budżetu? Naciśnij „Wpisz nazwę ręcznie” i wpisz nazwę dokładnie tak, jak nazywa się na pierwszym urządzeniu: nazwa budżetu to adres jego folderu w chmurze. Wielkość liter nie ma znaczenia. Nazwa jest widoczna w nagłówku ekranu „Przegląd” na pierwszym urządzeniu.

Jeśli na tym urządzeniu są już dane, aplikacja dopyta: „Zastąpić dane kopią z chmury?”: wszystko, czego nie ma w chmurze, przepadnie.

**Hasło** — jeśli na pierwszym urządzeniu ustawiono hasło, ustaw tutaj takie samo. Bez niego synchronizacja się zatrzyma, a zdjęcia paragonów dotrą, ale się nie otworzą.

### Przesyłanie lokalne: bez chmury {#sync-local}

Przenieś budżet między własnymi urządzeniami bezpośrednio — plikiem albo przez Wi-Fi. Bez internetu i bez kont. To jednorazowe przeniesienie, a nie stała synchronizacja.

[Ekran Przesyłanie lokalne: blok Plik z przyciskami Eksport i Import, blok WiFi z rolami wysyłającego i odbierającego]

(1)
**Plik** — „Eksport” — dane budżetu jako plik: wyślij go komunikatorem, mailem albo na pendrivie. Na drugim urządzeniu — „Import” i wybierz ten plik.

*Jak to działa:*
Import **łączy** dane z pliku z tym, co już jest, a jeśli ten sam zapis się różni, bierze wersję z pliku. Zdjęcia do pliku nie trafiają. Żeby przenieść wszystko ze zdjęciami — Wi-Fi albo [kopia zapasowa](#sync-backups) („Archiwum ze zdjęciami i PDF”).

(2)
**WiFi (sieć lokalna)** — oba urządzenia w tej samej sieci Wi-Fi. Jedno wysyła dane, drugie je odbiera i przy „Scal” odsyła swoje zmiany. Zdjęcia też jadą.

*Jak to działa:*
1. Na urządzeniu wysyłającym: „Uruchom serwer”. Pojawi się kod QR i 6-cyfrowy kod potwierdzenia.
2. Na odbierającym: „Zeskanuj QR” — kod wypełni oba pola. Albo wpisz adres IP i kod ręcznie.
3. „Odbierz dane”. Aplikacja zapyta „Jak zastosować dane?”: „Scal” — jak zwykła synchronizacja w obie strony: zmiany tego urządzenia też trafią do wysyłającego, nic nie przepada; „Zastąp całkowicie” — ten budżet stanie się dokładną kopią wysyłającego, a wszystko niezsynchronizowane tutaj przepadnie. „Zastąp” — dla nowego urządzenia.
4. Na urządzeniu wysyłającym — „Zatrzymaj serwer”.

Transfer jest szyfrowany kodem potwierdzenia, a sam kod nigdy nie idzie przez sieć.

## Ustawienia {#settings}

Co robi każdy wiersz i jak jest ustawiony zaraz po instalacji.

*Koło zębate w lewym górnym rogu ekranu „Przegląd”*

Sekcje są ułożone według tego, jak często są potrzebne: najczęstsze na górze.

### Planowanie {#settings-s-plan}

Wszystko, co się powtarza: regularne płatności i przypomnienia.

[Sekcja Planowanie: Płatności zaplanowane, Przypomnienia]

**Płatności zaplanowane** — czynsz, subskrypcje, wypłata — wszystko, co się powtarza. W dniu terminu aplikacja proponuje zapisać płatność jednym dotknięciem, a „Co przed nami” na ekranie „Przegląd” pokazuje najbliższe.

**Przypomnienia** — kiedy i o czym aplikacja powiadamia. Osobny ekran — [niżej](#settings-reminders).

#### Ekran „Przypomnienia” {#settings-reminders}

[Ekran Przypomnienia: Płatności zaplanowane, Wydatki z dnia, Podsumowanie tygodnia, Wszystkie przypomnienia]

**Płatności zaplanowane** — „Kiedy przypominać” — w dniu płatności, 1, 2 albo 3 dni wcześniej albo tydzień wcześniej; „Godzina przypomnienia”; „Ukrywaj kwoty w powiadomieniach” — przypomnienie widać na ekranie blokady, a bez tego kwotę przeczyta każdy, kto weźmie telefon do ręki. **Zaraz po instalacji:** dzień wcześniej, o 9:00, kwoty widoczne.

**Wydatki z dnia** — „Przypominaj o dodaniu wydatków” — wieczorem, jeśli dziś niczego nie zapisałeś. Jeśli zapisałeś, milczy. **Zaraz po instalacji:** wyłączone, o 21:00.

**Podsumowanie tygodnia** — „Wysyłaj podsumowanie” — w ostatni dzień tygodnia: ile wydano i na co najwięcej, które kategorie się kończą, jakie płatności zaplanowane się zbliżają. **Zaraz po instalacji:** wyłączone.

**Wszystkie przypomnienia** — „Przypomnienia o dokładnej godzinie”. Bez zgody Android może dostarczyć przypomnienie z opóźnieniem. Przełącznik otwiera ustawienia Androida, w których tej zgody się udziela.

### Dane {#settings-s-data}

Listy budżetu i wymiana danych z innymi programami.

[Sekcja Dane: Odbiorcy, Tagi, Eksport do CSV, Import z YNAB, Skrzynka]

**Odbiorcy i Tagi** — listy, które budują się same w miarę zapisywania transakcji. Wszystko o nich — w artykule [„Odbiorcy i tagi”](#payees-tags).

**Eksport do CSV** — wszystkie transakcje bieżącego budżetu jako plik arkusza — do otwarcia w Excelu albo Arkuszach Google.

*Więcej:*
W pliku jest wszystko, co ma transakcja: data, konto, odbiorca, kategoria i jej grupa, kwota i waluta, „zaksięgowane”, notatka, części kwoty podzielonej, przelew, tagi, flaga, paragony elektroniczne, miesiąc budżetu (dla wypłaty zapisanej „na następny miesiąc” — miesiąc, na który jest odłożona), a dla przelewu między walutami — ile wpłynęło, w jakiej walucie i po jakim kursie. Nie eksportują się tylko zdjęcia i PDF: to pliki w telefonie.

Nazwy kolumn są po angielsku (`date`, `amount`, `tags`…) i nie zależą od języka aplikacji: dzięki temu formuły i tabele przestawne nie psują się, gdy zmienisz język. Liczby w pliku są zawsze prawdziwe, nawet jeśli włączone jest „Ukryj kwoty”. Separator pól idzie za formatem liczb, więc tabela otwiera się kolumnami, a nie jedną linijką.

**Import z YNAB** — przenieś budżet z YNAB 4 (plik .y4backup) albo z webowego YNAB (eksport .zip): konta, kategorie i całą historię. Po imporcie słowniczek pokaże, jak nazywa się tu każde pojęcie YNAB.

**Skrzynka** — przy kasie tylko kwota; konto i kategorię wybierasz później. Jak to działa — w artykule [„Formularz transakcji”](#entry). **Zaraz po instalacji:** wyłączona.

### Synchronizacja {#settings-s-sync}

Chmura, kopie zapasowe i przenoszenie budżetu między urządzeniami. Tu krótko, co gdzie jest; szczegółowo — artykuł [„Chmura i kopie zapasowe”](#sync).

[Sekcja Synchronizacja: Autoryzacja, Synchronizacja, Kopie zapasowe, Wczytaj budżet z chmury, Przesyłanie lokalne]

**Autoryzacja** — podłącz chmurę: Google Drive, Dropbox albo WebDAV. Główna zasada: wszystkie urządzenia, które prowadzą ten budżet, używają **tego samego konta w chmurze**, inaczej nie zobaczą się nawzajem.

*Więcej:*
**Jeśli członkowie rodziny mają różne konta Google**, załóż **osobne, nowe konto Google** dla budżetu i loguj się nim do chmury aplikacji, tylko nim, na wszystkich urządzeniach. Nie loguj się na swoje prywatne konto na telefonie żony ani na jej na swoim: telefon zacznie synchronizować z tym kontem kontakty, wiadomości i zdjęcia, i prywatne dane dwóch osób się wymieszają. Osobne konto budżetu wie tylko o budżecie.

**Dropbox** — loguj się **loginem i hasłem** Dropbox, a nie przyciskiem „Kontynuuj z Google”. Logowanie przez Google wiąże Dropbox z użytym kontem Google — i na urządzeniu z innym kontem Google łatwo trafić do innego Dropboxa, w którym budżetu nie ma. Login i hasło Dropbox działają tak samo na każdym urządzeniu.

**WebDAV** — chmura, która go obsługuje (Nextcloud, ownCloud, pCloud i inne), albo własny serwer; ten sam adres, login i folder na wszystkich urządzeniach.

**Synchronizacja** — wymiana zmian z chmurą i innymi urządzeniami; tu też hasło, które szyfruje chmurę, i dziennik synchronizacji.

**Kopie zapasowe** — kopie budżetu: automatyczne według harmonogramu i ręczne, w telefonie i w chmurze. Stąd też — „Czytelna kopia” jako plik.

**Wczytaj budżet z chmury** — nowy telefon albo ponowna instalacja — budżet wraca z chmury albo z pliku kopii.

**Przesyłanie lokalne** — przenieś budżet między własnymi urządzeniami przez WiFi albo plikiem — bez chmury.

### Budżet {#settings-s-budget}

Ustawienia bieżącego budżetu.

[Sekcja Budżet: Waluta budżetu, Kategorie Zapłać sobie, Wiek pieniędzy]

**Waluta budżetu** — symbol, w którym prowadzisz budżet. Tylko dla tego budżetu; aplikacja nie przelicza kwot — zmienia się tylko symbol.

**Kategorie „Zapłać sobie”** — które kategorie liczą się jako „odłożone dla siebie” — zwykle oszczędności. Nic nie wybrano — na ekranie „Przegląd” nie ma bloku „Zapłać sobie”. Co pokazuje — w artykule [„Przegląd”](#overview).

**Wiek pieniędzy** — jak go liczyć: trzy sposoby. Osobny ekran — [niżej](#settings-aom).

#### Ekran „Wiek pieniędzy” {#settings-aom}

[Ekran Jak liczyć wiek pieniędzy: Klasyczny YNAB FIFO, Z uwzględnieniem oszczędności, Z oszczędnościami i głębokością minusa]

Trzy sposoby są opisane od razu na ekranie. Który jest bliżej prawdy i dlaczego, z przykładami — w artykule [„Przegląd”](#overview), sekcja „Wiek pieniędzy w szczegółach”. W skrócie: **„Z uwzględnieniem oszczędności”** liczy dokładnie te pieniądze, które są na Twoich kontach. **Zaraz po instalacji:** „Klasyczny (YNAB FIFO)”.

### Bezpieczeństwo {#settings-s-security}

Zamek na aplikację.

[Sekcja Bezpieczeństwo: Kod PIN]

**Kod PIN** — aplikacja pyta o niego przy otwieraniu. Gdy PIN jest ustawiony, niżej pojawia się „Odblokowanie biometryczne” — odcisk palca albo twarz zamiast cyfr.

*Więcej:*
Bez PIN biometrii nie da się włączyć: bez niego nie ma zamka. Dopóki PIN jest ustawiony, karta aplikacji na liście otwartych aplikacji jest zasłonięta, i ciekawskie oczy nie zobaczą tam Twoich sald (na Androidzie 13 i nowszych).

### Wygląd {#settings-s-look}

Dwa ekrany: język z formatami i cały wygląd aplikacji.

[Sekcja Wygląd: Język i formaty, Wygląd]

**Język i formaty** — język interfejsu, wygląd kwot i dat, sposób wpisywania kwoty. Ekran — [niżej](#settings-formats).

**Wygląd** — motyw, styl, czcionka, ikony i wygląd wiersza transakcji. Ekran — [niżej](#settings-appearance).

#### Ekran „Język i formaty” {#settings-formats}

[Ekran Język i formaty: Język interfejsu, Format kwot, Wpisywanie kwoty, Klawiatura kwoty, Format daty]

**Język interfejsu** — trzynaście języków; „Jak w systemie” to język telefonu. Język mieszka na tym urządzeniu i się nie synchronizuje: telefon może być po polsku, a komputer po niemiecku.

**Format kwot** — separatory tysięcy i części dziesiętnej, po której stronie stoi symbol waluty. Domyślnie — jak przyjęto w wybranym języku: „1 234 567,89 zł”.

**Wpisywanie kwoty** — „Z przecinkiem” albo „Od groszy, jak na terminalu” (1-2-5-0 oznacza 12,50). **Zaraz po instalacji:** z przecinkiem.

**Klawiatura kwoty** — „Pod prawą rękę” — cyfry po prawej, działania po lewej; „Pod lewą rękę” — odwrotnie. **Zaraz po instalacji:** pod prawą rękę.

**Format daty** — kolejność, separator, miesiąc liczbą albo słowem — 24 warianty do wyboru.

#### Ekran „Wygląd” {#settings-appearance}

[Ekran Wygląd: Motyw, Styl, Zaokrąglenia, Kolory przychodów i wydatków, Czcionka, Gęstość, Ikony, Kolor kwot, Wygląd flagi, Wracaj do]

**Motyw** — „Systemowy”, „Jasny” albo „Ciemny”. „Systemowy” idzie za telefonem.

**Styl** — charakter kolorystyczny aplikacji: „Klasyczny”, „Neonowy”, „Aurora”, „Kwasowy”, „Cukierkowy”, „Piankowy”, „Grafit”. Każdy ma wersję jasną i ciemną.

**Zaokrąglenia** — „Ostre”, „Zwykłe” albo „Miękkie” — rogi kart, przycisków i chipów. Niezależne od stylu.

**Kolory przychodów i wydatków** — „Zwykłe” — przychody na zielono, wydatki na czerwono. „Wzmocnione” — przychody na niebiesko: dla tych, którym trudno odróżnić zielony od czerwonego.

*Więcej:*
Mniej więcej co dwunasty mężczyzna i co dwusetna kobieta widzą kolory inaczej. Są trzy rodzaje:

- **deuteranopia** — słabsze widzenie zielonego; najczęstsza;
- **protanopia** — słabsze widzenie czerwonego;
- **tritanopia** — mylą się niebieski i żółty; bardzo rzadka.

Przy dwóch pierwszych zielony i czerwony zlewają się w podobny brązowawy kolor, i przychodu nie da się odróżnić od wydatku po kolorze. Obie te grupy dobrze widzą niebieski — dlatego w „Wzmocnione” przychody są niebieskie.

**Co jeszcze aplikacja robi dla tych osób — już teraz, bez żadnego ustawienia:**

- każda kwota ma znak „+” albo „−”: kierunek transakcji widać zupełnie bez koloru (a zaraz po instalacji kwoty transakcji i tak nie mają koloru);
- przekroczenie mówi nie tylko kolorem, ale też ikoną: portfel — wydałeś własne pieniądze, karta — wszedłeś w dług na karcie kredytowej;
- nieudana synchronizacja zmienia nie tylko kolor ikony, ale i jej rysunek — w środku pojawia się „!”;
- kolory wykresów raportów są dobrane tak, żeby sąsiednie wycinki różniły się też jasnością, a nie tylko odcieniem.

**Co zmienia „Wzmocnione”:** przychody na niebiesko wszędzie — w kwotach, w nagłówku formularza przychodu, na wykresach i w tabeli „Przychody i wydatki”; kolory flag transakcji są rozsunięte jasnością; wykresy raportów i „Przepływ pieniędzy” używają własnego zestawu kolorów. Każdy zestaw jest sprawdzany przy tworzeniu pod wszystkie trzy rodzaje.

„Wzmocnione” pomaga też tym, którzy dobrze rozróżniają kolory, ale patrzą na ekran w jasnym słońcu.

**Czcionka** — czcionka systemowa albo jedna z siedmiu: Fira Sans, Geologica, IBM Plex Sans, Inter, Manrope, Noto Sans, Source Sans 3 — dla całego interfejsu.

**Gęstość** — „Gęsta”, „Zwykła” albo „Przestronna” — odstępy między wierszami i blokami. Rozmiar liter się nie zmienia.

**Ikony** — „Zwykłe” albo „Dwukolorowe”.

**Kolor kwot** — czy kolorować kwoty na listach transakcji: „Bez koloru”, „Tylko przychody” albo „Wydatki i przychody”.

*Więcej:*
**Zaraz po instalacji — „Bez koloru”**, i tak zrobiono każdy zrzut w tej instrukcji. Dlaczego: czerwony to kolor alarmu, a kupno chleba na alarm nie zasługuje; gdy każdy wiersz świeci na czerwono, kolor przestaje cokolwiek mówić. Kierunek transakcji pokazuje znak: „−” przy wydatku, „+” przy przychodzie. Chcesz koloru? Wybierz „Wydatki i przychody” albo „Tylko przychody”.

Przekroczenie kategorii, dług i stan synchronizacji zostają kolorowe bez względu na wybór: tam kolor to ostrzeżenie.

**Wygląd flagi** — „Kropka”, „Trójkątna flaga” albo „Falująca flaga” — jak wygląda flaga w wierszach transakcji.

**Wracaj do** — „Przegląd” — po przerwie dłuższej niż 30 sekund i przy uruchomieniu otwiera się ekran „Przegląd”; „Tam, gdzie skończono” — ten sam ekran, nawet z otwartym formularzem. PIN jest wymagany w obu przypadkach.

### Pomoc i kontakt {#settings-s-help}

Wskazówki i kontakt z twórcą.

[Sekcja Pomoc i kontakt: Wskazówki, Baza wiedzy, Czat na Telegramie, Zgłoś błąd, Zaproponuj ulepszenie]

**Wskazówki** — wszystkie wskazówki aplikacji listą, według ekranów. Tu też „Pokaż wskazówki ponownie”. Wskazówki jednego ekranu otwiera też punkt „Wskazówki” w jego menu „⋮”.

**Baza wiedzy** — artykuły o każdym ekranie na stronie, w języku aplikacji; punkt otwiera stronę główną. Artykuł jednego ekranu otwiera punkt „Baza wiedzy” w jego menu „⋮”.

**Czat na Telegramie** — grupa, w której odpowiadają na pytania i gdzie można zapytać innych użytkowników.

**Zgłoś błąd** — mail do twórcy. Wersje aplikacji i urządzenia wpiszą się same; możesz dołączyć dziennik zdarzeń z „O aplikacji”.

**Zaproponuj ulepszenie** — mail z pomysłem: co teraz jest niewygodne i jak chciałbyś, żeby było.

### O aplikacji {#settings-s-about}

Jeden wiersz, a za nim ekran z wersją, dokumentami i punktami serwisowymi.

[Sekcja O aplikacji]

**O aplikacji** — ekran — [niżej](#settings-about-screen).

#### Ekran „O aplikacji” {#settings-about-screen}

[Ekran O aplikacji: Wersja, Wersja na Windows, Udostępnij aplikację, Polityka prywatności, Licencja, Dziennik zdarzeń, Zresetuj wszystkie dane]

**Wersja** — numer wersji; dotknij, by zobaczyć „Co nowego”: co zmieniło się w ostatnich wydaniach.

**Wersja na Windows** — ten sam budżet na komputerze — w Microsoft Store.

**Udostępnij aplikację** — wyślij link do aplikacji w Google Play.

**Polityka prywatności i Licencja** — dokumenty. W skrócie: Twoje dane są Twoje, a twórca nie ma do nich dostępu. Polityka prywatności jest po angielsku.

**Dziennik zdarzeń** — błędy aplikacji i synchronizacji. Przydaje się, jeśli piszesz o problemie.

**Zresetuj wszystkie dane** — usuń wszystkie konta, kategorie, transakcje, płatności zaplanowane i cele. Aplikacja dopyta: „Zresetować wszystkie dane?”. Tego nie da się cofnąć.

*Więcej:*
Jeśli podłączona jest synchronizacja, dane wrócą z chmury przy następnej synchronizacji. Żeby usunąć je na dobre, odłącz chmurę albo usuń w niej plik synchronizacji. Przed resetem zrób kopię w „Kopie zapasowe”.
