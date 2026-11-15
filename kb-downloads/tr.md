# Bütçem — Bilgi bankası

## Uygulama neler yapabilir {#about}

“Bütçem” bir harcama defteri değil, zarf yöntemiyle kurulmuş eksiksiz bir bütçedir. Çok şey yapabilir ve bunların çoğu menülerin derinlerinde değil, hareketlerde ve küçük ayrıntılarda saklıdır. Bu sayfa kısa bir tur; ardından her ekranın kendi makalesi var.

### Temel fikir {#about-main}

Harcama takibi “para nereye gitti” sorusunu yanıtlar. Bütçe ise daha önemli bir soruyu yanıtlar: **“bu para daha neye yeter”** — bugün, maaş gününe kadar, tatilden önce.

##### Zarflar

Her liranın bir görevi vardır: market, kira, tatil. Her zarfta ne kadar kaldığını görürsünüz ve aşım hemen kırmızıya döner. Ayrıntılar: [“Bütçe nasıl çalışır”](#start).

##### Verileriniz sizindir

Bütçeniz telefonunuzda ve bulutunuzda durur. Geliştiricinin ona erişimi yoktur. Bulutu bir parolayla kilitleyebilirsiniz — AES-256. Ayrıntılar: [“Bulut ve yedekler”](#sync-password).

##### YNAB’dan geçiş

YNAB 4’ten ya da web YNAB’dan hesaplar, kategoriler ve tüm geçmiş bir dosya olarak taşınır; küçük bir sözlük de tanıdık terimlerin burada ne dendiğini gösterir. Ayrıntılar: [“İlk adımlar”](#first-steps).

### Hızlı giriş {#about-input}

Bir alışverişi kasada kaydetmek, akşam hatırlamaya çalışmaktan kolaydır. Bu yüzden birkaç yol var.

##### Gelen kutusuna

Kasada kategori ve hesap seçecek vaktiniz yok mu? Sadece tutarı girin. “Gelen kutusuna” düğmesi işlemi “Sınıflandır” işaretiyle kaydeder, evde de form bu işlemleri tek tek açar. Açmak için: “Ayarlar → VERİLER → Gelen kutusu”. Ayrıntılar: [“İşlem formu”](#entry-inbox).

##### Sesle

“Migros 1759 Market” — ve form doldurulur. Ayrıntılar: [“Sesle giriş”](#voice).

##### Fişten

Kamerayı fişin QR koduna tutun — tutar ve tarih kendiliğinden dolar, ikinci seferden itibaren uygulama mağazayı kasasından tanır. Uygulamanın ülkenizin fişlerini okuyabildiği yerlerde çalışır. Ayrıntılar: [“Fiş tarayıcı”](#receipt).

##### Ana ekrandan

Widget’lar ve kısayollar formu uygulamaya girmeden tek dokunuşla açar. Ayrıntılar: [“Widget’lar ve kısayollar”](#widgets).

##### Hesap makineli tuş takımı

Tutarlar uygulamanın kendi tuş takımında toplama ve çıkarmayla yazılır, birkaç kategoriye bölünür, hesaplar arasında transfer edilir — farklı para birimlerinde bile. Ayrıntılar: [“İşlem formu”](#entry).

### Planlar {#about-plans}

##### Hedefler

Beş tür: aylık, bir tarihe kadar, bakiyeyi koru, gelirden yüzde ve alışveriş listesi. Ne kadar ayıracağınızı uygulama hesaplar. Ayrıntılar: [“Hedefler”](#goals).

##### Planlı ödemeler

Kira, abonelikler, kredi taksitleri — önceden hatırlatmayla ve tek dokunuşla girilir. Ayrıntılar: [“Planlı ödemeler”](#scheduled).

##### Kredi kartları ve borçlar

Kredi kartını ödemek için gereken para kendiliğinden ayrılır, borcu da ay ay görürsünüz. Ayrıntılar senaryoda: [“Kredi kartları ve borçlar”](#scenario-credit).

##### Etiketler ve “kim kime borçlu”

Bir seyahat, bir tadilat, arkadaşlarla ortak masraflar — etiket bunları farklı kategorilerden toplar ve kimin kime borçlu olduğunu hesaplar. Ayrıntılar: [“Alıcılar ve etiketler”](#payees-tags).

### Raporlar {#about-reports}

On rapor: para nereye gitti, eğilim ve olağandan sapma, gelirden harcamaya para akışı, aylara göre gelir ve gider, paranın yaşı, net değer, kredi kartı borcu. “Özet” ise ana ekranınızdır: blokları kendiniz seçer ve dizersiniz. Ayrıntılar: [“Raporlar”](#reports) ve [“Özet”](#overview).

### Cihazlar ve bulut {#about-devices}

Telefonda, tablette ve Windows bilgisayarda tek bütçe — iki kişi için ya da tüm aile için. Google Drive, Dropbox veya WebDAV (Nextcloud, ownCloud, pCloud, kendi sunucunuz) üzerinden eşitleme; yedekler bir takvime göre kendiliğinden alınır. Ayrıntılar senaryolarda: [“Birkaç cihazda tek bütçe”](#scenario-devices) ve [“İki ya da daha fazla kişi, tek bütçe”](#scenario-together).

### Size göre {#about-yours}

On üç dil, altmış para birimi, ülkenize uygun tutar ve tarih biçimleri. Açık ve koyu yedi stil, yazı tipleri, yoğunluk, köşe biçimleri, simgeler. Birkaç bütçe: kişisel, aile, iş. Ayrıntılar: [“Ayarlar”](#settings).

### Nereden başlamalı {#about-start}

1. [“Bütçe nasıl çalışır”](#start) — on dakikada zarf yöntemi.
2. [“İlk adımlar”](#first-steps) — kurulumdan ilk ayınıza.
3. [Senaryolar](#scenario-paycheck) — hazır yanıtlar: maaştan maaşa, serbest çalışma, kredi kartları, arkadaşlarla seyahat.

## Bütçe nasıl çalışır {#start}

On dakikada zarf yöntemi: para nereden gelir, nasıl paylaştırılır ve ay değişince ne olur.

### Zarflar: ana fikir {#start-idea}

Maaşınızı nakit çektiğinizi ve zarflara paylaştırdığınızı düşünün: “Market”, “Faturalar”, “Tatil”. Market alışverişinde parayı yalnızca o zarftan alırsınız. Boş zarf, o iş için para kalmadığı anlamına gelir. Uygulama tam olarak bunu yapar, sadece kâğıtsız.

(1)
##### Hesaplarınızdaki para

Vadesiz hesap — ₺42.500

Nakit — ₺5.000

(2)
##### “Dağıtılmadı”

₺47.500 — henüz bir görevi yok

(3)
##### Kategori zarfları

Market — ₺13.750

Faturalar — ₺4.250

…ve böyle devam, sıfıra inene kadar

(4)
##### Harcama

Ekmek aldınız — “Market” zarfı inceldi

Hesaplarınızdaki her lira tam olarak tek bir yerde durur: ya bir zarfta ya da “dağıtılmadı” içinde. Böylece her an neye paranızın yettiğini, neye yetmediğini görürsünüz. İlk hedef “dağıtılmadı” tutarını sıfıra indirmektir: o zaman **her liranın bir görevi olur**. Bu bitiş çizgisi değil, ilk adımdır — yöntemin sizi sonra nereye götürdüğü [makalenin sonunda](#start-ladder).

Bunun alışılmış “harcama takibinden” farkı [aşağıda](#start-vs).

### Harcama takibinden farkı {#start-vs}

Pek çok kişi yıllarca harcamalarını yazar — bir deftere, bir tabloya, bankanın uygulamasına — ve yine de paranın neden ay bitmeden bittiğini göremez. Harcama takibi size geçmişi dürüstçe anlatır. Zarflar ise geleceği yönetmenize yardım eder.

|  | Harcama takibi | Zarf yöntemiyle bütçe |
|---|---|---|
| Para hakkında ne zaman düşünürsünüz | Harcadıktan sonra: nereye gittiğine bakarsınız. | Harcamadan önce: ne kadar harcayabileceğinize karar verirsiniz. |
| Ana soru | “Para nereye gitti?” | “Daha neye param yeter?” |
| Aşım | Ay sonunda, iş işten geçtiğinde öğrenirsiniz. | Hemen görürsünüz: alışveriş anında zarf kırmızıya döner — ve başka bir zarftan para aktarırsınız. |
| Bankadaki para | Tek bir sayı: “hesapta ₺35.000 var, demek ki param var”. | Görevlere bölünmüş: bir kısmı kiraya, bir kısmı tatile ayrılmış. Yalnızca doğru zarfta olan para serbesttir. |
| Maaşınız | “Bir şekilde harcanacak” bir gelir. | Hemen görev verdiğiniz para. |
| Düzensiz giderler | Sigorta ya da bir tamir birden çıkagelir. | Her ay biraz ayırırsınız — fatura geldiğinde para zaten hazırdır. |

(₺35.000)
#### Örnek: “hesapta daha bol para var”

Ayın ortası, vadesiz hesapta ₺35.000 var. ₺7.000’lik bir kulaklık istiyorsunuz.

*Nasıl çalışır:*
**Harcama takibi** ₺35.000’i görür ve “al gitsin” der. Ama bir hafta sonra kira var — ₺20.000, üstüne maaşa kadar faturalar ve market. Kulaklık alınır, kiraya para yetmez.

**Zarflar** aynı ₺35.000’i görür, ama bölünmüş olarak: “Kira” — ₺20.000, “Faturalar” — ₺4.250, “Market” — ₺6.500, “Eğlence ve hobiler” — ₺4.250. Kulaklık için ₺4.250 serbest. Hemen mi almak istiyorsunuz? Eksik ₺2.750’nin hangi zarftan geleceğine karar verin. Kararı siz verirsiniz, hem de alışverişten önce, sonra değil.

(?)
#### Peki burada harcama takibi var mı?

Var — hem de bir defterden daha ayrıntılı.

*Nasıl çalışır:*
Her alışveriş kaydedilir; “Para nereye gitti”, “Ayın harcamaları” ve raporlar her şeyin nereye gittiğini gösterir. Yalnız burada amaç bu değil, planın kontrolüdür: karar verdiğinizle olan örtüştü mü? Gelecek ay daha isabetli bütçe yaparsınız.

(↻)
#### Kısacası

Harcama takibi dikiz aynasıdır. Zarflar ise direksiyon.

*Nasıl çalışır:*
Aynaya bakmak faydalıdır: nereden geldiğinizi görürsünüz. Ama ileri gitmenize yalnızca direksiyon yardım eder — paranın nereye gideceğine önceden verilmiş bir karar.

### Her kategorinin üç sayısı {#start-envelope}

Telefonu yan çevirin — “Bütçe” ekranı tabloya dönüşür ve zarfın üç sayısı doğrudan sütun başlıklarında yazar.

[Yatay Bütçe: Kategori, Planlanan, Harcanan, Kullanılabilir sütunları; Faturalar 2.500, −2.319, 735]
Yan çevrilmiş telefon: aynı “Bütçe”, tablo olarak. Normal görünümde “Kullanılabilir”, kategorinin sağındaki tutardır; “… tutarın … kadarı harcandı” ise çubuğun altındaki satırdır.

1. **“Planlanan”** — bu ay zarfa ne kadar koyduğunuz. Bu bir karardır: “Kasım ayında faturalara ₺2.500”.

2. **“Harcanan”** — zarftan şimdiden ne kadar çıktığı: bu ay bu kategorideki tüm harcamalar, eksi işaretiyle. İade edilen bir ürünün parası bu sayıyı küçültür.

3. **“Kullanılabilir”** — daha ne kadar harcayabileceğiniz: geçen aydan devreden + planlanan − harcanan.

   *Nasıl çalışır:*
   Ekran görüntüsünde “Faturalar” için planlanan 2.500, harcanan 2.319 — yani 181 kaldı sanırsınız. Ama kullanılabilir tutar 735: Ekim ayında ₺554 harcanmadı ve Kasım ayına devretti. Zarf böyle birikir.

   Yeşil çip zarfta para olduğunu, gri sıfır zarfın boş olduğunu, kırmızı ise eksiyi gösterir: olandan fazlasını harcadınız.

[Bütçe ekranı: kategori grupları, sağda tutarlar, çubuklar ve harcanan satırları]

Ekranda nasıl göründüğü ve nereye dokunulacağı [“Bütçe”](#budget) makalesinde. Burada yalnızca sayıların uyduğu kurallar var.

(₺)
#### Gelir bir kategoriye değil, “dağıtılmadı”ya gider

Maaşınız kendiliğinden bir zarfa düşmez: “dağıtılmadı”ya gider, siz de onu paylaştırırsınız.

*Nasıl çalışır:*
İşlem formunda gelir varsayılan olarak “Kasım için gelir” satırına yazılır — yani bu ayın “dağıtılmadı” tutarına. “Aralık için gelir” satırını da seçebilirsiniz — “Özet” makalesindeki [“Paranın yaşı ayrıntılı”](#overview) bölümüne bakın.

(↺)
#### İade zarfa geri döner

İade ettiğiniz bir ürünün parası mı geri geldi? Gelire değil, çıktığı kategoriye gider.

*Nasıl çalışır:*
Nasıl kaydedileceği — [“İşlem formu”](#entry) makalesi, “İade edilen ürünün parası” bölümü.

(⇄)
#### Transfer harcama değildir

Nakit çektiniz, kredi kartını ödediniz, parayı birikime aktardınız — para hâlâ sizin.

*Nasıl çalışır:*
Bütçe hesapları arasındaki transfer hiçbir zarfa dokunmaz. Yalnızca bütçe dışındaki bir hesaba (birikim, mevduat) yapılan transfer zarflardan çıkar — o zaman uygulama kategori sorar.

### Ay ay {#start-months}

Bütçe aylarla yaşar. Ay değişince zarfa ne olduğu, en önemli kurallardan biridir.

(+)
#### Artı devreder

Hepsini harcamadınız mı? Kalan bir sonraki aya geçer ve zarfta kalır.

*Nasıl çalışır:*
Büyük ve düzensiz şeyler için böyle biriktirilir: her ay “Tatil”e ₺3.750 koyun, harcamayın — yaza ₺22.500 olur. Geleceğe şimdiden para da ayırabilirsiniz: ileride herhangi bir aya para dağıtılabilir — “Bütçe” ekranındaki “›” oku.

(−)
#### Eksi sıfırlanır

Zarfta olandan fazlasını mı harcadınız? Kategori kırmızıya döner. Ay değişince eksi silinir — ama iz bırakmadan değil.

*Nasıl çalışır:*
Kendi paranızdan gelen eksi (kırmızı, cüzdan simgesi) gelecek ayın “dağıtılmadı” tutarını azaltır: sonuçta para zaten harcandı. Bu yüzden eksiyi hemen başka bir kategoriden para aktararak kapatmak daha iyidir: “Bütçe” ekranında kırmızı tutara dokunun.

Kredi kartındaki eksi (sarı, kart simgesi) başka bir konudur: paranızı yemez, kart borcunu büyütür. “Dağıtılmadı” bunu karşılamaz, ama borcun yine de ödenmesi gerekir.

(≡)
#### “Özet” ekranında “Ay bütçesi”

Ayın tüm hesabı tek bir merdivende: geçen aydan devreden, gelir, dağıtılan ve “dağıtılmadı” toplamı.

*Nasıl çalışır:*
Çipteki sayı tuhaf görünüyorsa buraya bakın: nereden geldiğini görürsünüz. Ayrıntılar [“Özet”](#overview) makalesinde.

### Bütçede kredi kartı {#start-credit}

Kredi kartı zarf yönteminin en az alışılmış kısmıdır. Tek bir kural var: kredi kartıyla yapılan alışveriş, banka kartıyla yapılan alışveriş gibi zarftaki parayı harcar.

(1)
#### Alışveriş

Kredi kartıyla ₺875’lik market alışverişi yaptınız — “Market” zarfı her zamanki gibi ₺875 inceldi.

(2)
#### Ödeme parası kendini ayırır

Uygulama bu ₺875’yi “Kart ödemeleri” grubuna, kredi kartınızın kategorisine aktarır.

*Nasıl çalışır:*
Böylece ödeme gününe kadar kartı kapatacak para zaten ayrılmış olur ve onu yanlışlıkla harcayamazsınız. Kendiniz bir şey ayırmanıza gerek yok.

(3)
#### Kartı ödemek

Kredi kartını normal hesabınızdan karta bir transferle ödeyin. Ayrılan para ödemeye gider.

*Nasıl çalışır:*
Transferin nasıl kaydedileceği — [“İşlem formu”](#entry) makalesi.

### Yöntemin dört kuralı {#start-rules}

Uygulama sizi bunlara uymaya zorlamaz — bir kural anlamlı hale geldiğinde onları birer birer önerir.

(1)
#### Her liraya bir görev verin

“Dağıtılmadı” sıfır olana kadar para dağıtmaya devam edin. Görevi olmayan para fark edilmeden kayıp gider.

(2)
#### Gerçek giderlerinizi kabul edin

Yılda bir sigorta, araba tamiri, bayram hediyeleri — bunlar da giderdir. Onlar için her ay biraz ayırın.

*Nasıl çalışır:*
“Tarihe kadar” hedefler yardım eder: uygulama zamanında yetişmek için her ay ne kadar koyacağınızı hesaplar.

(3)
#### Darbelere esneyin

Aşım başarısızlık değildir. Başka bir zarftan para aktarın ve devam edin.

*Nasıl çalışır:*
Bütçe bir plandır, yemin değil. Önemli olan zarfların ne kadar kaldığını dürüstçe göstermesidir.

(4)
#### Paranızı yaşlandırın

Hedef, dün değil bir ay önce kazandığınız parayı harcamaktır.

*Nasıl çalışır:*
“Özet” ekranındaki “Paranın yaşı” bunu izler. 30 güne ulaştığında geçen ayın parasıyla yaşayabilirsiniz: ayrıntılar [“Özet”](#overview) makalesinde.

### Sıfır yalnızca ilk adım {#start-ladder}

“Dağıtılmadı”nın sıfır olması iyi bir hedeftir, ama son hedef değil. Yöntem daha ileri gider: “maaşa kadar idare ediyorum”dan “param benim için çalışıyor”a. Adımlar sırayla gelir — atlamak risklidir: yastık olmadan yatırım yapmak, araba ilk bozulduğunda yatırımlarınızı satmak demektir.

(1)
#### Her liranın bir görevi var

Hesaplarınızdaki tüm para zarflara bölünmüş. Ay sonuna kadar neye paranızın yettiğini biliyorsunuz.

**Burada olduğunuzu nasıl anlarsınız:** “dağıtılmadı” sıfır ve hiçbir kategori kırmızı değil.

**Uygulama nasıl yardım eder:** “Dağıtılmadı” çipi, otomatik dağıtım, “Tüm aşımları karşıla”.

(2)
#### Düzensiz giderler için zarflar

Sigorta, araba tamiri, hediyeler ve tatiller artık sizi hazırlıksız yakalamaz: her ay onlara biraz gider.

**Burada olduğunuzu nasıl anlarsınız:** büyük bir fatura gelir ve parası zarfında zaten beklemektedir.

**Uygulama nasıl yardım eder:** “Tarihe kadar” ve “Her ay” hedefleri ne kadar koyacağınızı hesaplar; “Özet” ekranındaki “Sırada ne var” bloğu paranın nerede eksik olduğunu hatırlatır.

(3)
#### Bir ay önde

Bir ay önce kazandığınız parayı harcıyorsunuz. Bu ayın yeni maaşa ihtiyacı yok — maaş bir sonraki aya gider.

**Burada olduğunuzu nasıl anlarsınız:** “Paranın yaşı” 30 gün ya da daha fazla.

**Uygulama nasıl yardım eder:** “Özet” ekranındaki “Paranın yaşı”, formdaki “gelecek ay için” gelir — ayrıntılar [“Özet”](#overview) makalesinin “Paranın yaşı ayrıntılı” bölümünde.

(4)
#### Acil durum fonu

Normal harcamaların üç ila altı aylık tutarı kadar bir yedek. İş kaybetmek ya da hastalanmak felaket değil, aksilik olur.

**Burada olduğunuzu nasıl anlarsınız:** “Kara gün fonu” birkaç aylık gideri karşılıyor.

**Uygulama nasıl yardım eder:** “Kara gün fonu” kategorisinde “Bakiye” hedefi; ortalama aylık harcama — raporlarda ve kategori ekranında.

(5)
#### Paranız sizin için çalışıyor

Yastık hazır, düzensiz giderler karşılanıyor, bir ay öndesiniz — artık fazlası boşta durmaktan fazlasını yapabilir: mevduat, tahvil, yatırım. Para para kazanmaya başlar.

**Burada olduğunuzu nasıl anlarsınız:** her ay gelirinizin bir kısmı “Yatırımlar”a gidiyor ve günlük harcamalar için ona dokunmuyorsunuz.

**Uygulama nasıl yardım eder:** “Yatırımlar” kategorili “Birikim” grubu; “Özet” ekranındaki “Önce kendine öde” gelirinizin yüzde kaçını ayırdığınızı gösterir (olağan oran %10 ya da daha fazla); mevduat ya da aracı kurum hesabı için “Yalnızca takip” hesabı; “Özet” ekranındaki “Net varlık” — sahip olduğunuz her şeyin nasıl büyüdüğü.

Yolun ne kadar süreceği gelirinize ve alışkanlıklarınıza bağlıdır. İlk adım genellikle ilk aydır. Bir ay önde olmak üç aydan bir yıla kadar sürer. Önemli olan her ay bir adım atmaktır, sıçramak değil.

Başlamaya hazır mısınız? Sıradaki — [“İlk adımlar”](#first-steps): ilk açılıştan ilk ayınıza.

## İlk adımlar {#first-steps}

İlk açılıştan çalışan bir bütçeye: kurulum sihirbazı, “İlk adımlar” listesi ve ilk ayınızda ne yapmalı.

*Yöntemin kendisinin nasıl çalıştığı [“Bütçe nasıl çalışır”](start.md) makalesinde*

### İlk açılış: nasıl başlamak istersiniz {#first-steps-welcome}

İlk açılışta kurulum sihirbazı açılır. İlk ekran üç kapı sunar. Dili burada, sağ üst köşedeki düğmeyle değiştirebilirsiniz: uygulamanın varsayılan olarak önerdiği kategoriler de o dilde olur.

[Adım 1 / 6: Hoş geldiniz, dil düğmesi, üç seçenek: Sıfırdan başlıyorum, Zaten bir bütçem var, YNAB’dan geçiyorum]

(A)
#### “Sıfırdan başlıyorum”

Sihirbaz sizi beş adımdan geçirir: para birimi ve ad, hesaplar, kategoriler, ilk dağıtım. Adımlar aşağıda anlatılıyor.

(B)
#### “Zaten bir bütçem var”

Bütçenizi başka bir telefonda ya da uygulamayı yeniden kurmadan önce tuttunuz. Uygulama onu buluttan — Google Drive, Dropbox veya WebDAV — ya da bir yedek dosyasından yükler.

*Nasıl çalışır:*
Burada ad sorulmaz: ad bütçeyle birlikte gelir ve buluttaki klasörünün adresi işlevini görür.

(C)
#### “YNAB’dan geçiyorum”

YNAB 4 ya da web YNAB: hesaplar, kategoriler ve geçmiş bir dosyadan gelir.

*Nasıl çalışır:*
Önce para birimi ve ad, sonra dışa aktarma dosyasını seçersiniz, en sonda da bir sözlük vardır: YNAB’daki her terimin burada ne dendiği. Sözlüğü daha sonra, ayarlardan içe aktarırken de açabilirsiniz.

Yaklaşık beş dakika. Her adımı atlayabilirsiniz — “Özet” ekranındaki “İlk adımlar” listesi neyin kaldığını hatırlatır.

### Sıfırdan başlamak: beş adım {#first-steps-fresh}

Her adımın altında “İleri” ve “Atla” vardır. Sistemin Geri düğmesi uygulamayı kapatmak yerine sizi bir adım geri götürür.

[Adım 2. Para birimi ve ad]

(•)
#### Adım 2. Para birimi ve ad

Uygulama para birimini telefonunuzun ülkesine göre doldurur — kontrol edin. Bu, bütçenizi tuttuğunuz simgedir; uygulama tutarları dönüştürmez.

*Nasıl çalışır:*
Kendinize ait bir ad bulun: “Aile”, “Kişisel”. Alanı boş bırakırsanız bütçenin adı “Bütçem” olur. Ad başlıkta ve buluttaki klasörün adında görünür; böylece bütçeyi her cihazda kolayca tanırsınız.

[Adım 3. Paranız nerede]

(•)
#### Adım 3. Paranız nerede

Para tuttuğunuz her yeri bugünkü bakiyesiyle ekleyin: cüzdanınız, tüm bankalardaki kartlar, kredi kartı, birikim.

*Nasıl çalışır:*
Tek bir kartı bile atlarsanız bütçe gerçekte sahip olduğunuzla tutmaz. Uygun bir şablonun yanındaki “+” düğmesine dokunun — yeni hesap sayfası tür zaten seçili olarak açılır. Hesabın bakiyesi doğrudan “dağıtılmadı”ya gider — ekran görüntüsünde iki hesap ₺47.500 getirdi. Hesaplar hakkında daha fazlası [“Hesaplar”](#accounts) makalesinde.

[Adım 4. Kategorileriniz]

(•)
#### Adım 4. Kategorileriniz

“Paranızı nereye harcıyorsunuz” çipleri gereken kategorileri ekler: “Araba”, “Çocuklar”, “Evcil hayvanlar”. Altında listenin tamamı vardır ve onu kendinize göre düzenleyebilirsiniz.

*Nasıl çalışır:*
- yeniden adlandırmak için kategoriye dokunun;
- çarpı kategoriyi kaldırır;
- “Kategori ekle” her grupta, “Yeni grup ekle” en alttadır;
- grup adının yanındaki kalem — grubu yeniden adlandırır.

Ekran görüntüsü listenin başını gösteriyor; liste daha uzun.

[Adım 5. Parayı dağıtın]

(•)
#### Adım 5. Parayı dağıtın

“Dağıtılmadı” tutarını zarflara paylaştırın: kategorinin yanındaki tutara dokunun ve bu ay ona ne kadar harcamaya hazır olduğunuzu girin.

*Nasıl çalışır:*
Üstte ne kadar kaldığı görünür. Ekran görüntüsünde ₺21.000 dağıtıldı, ₺26.500 kaldı. Burada sıfıra ulaşmanız gerekmez: önemli olanlarla başlayın — konut, yiyecek, telefon — gerisini sonra “Bütçe” ekranında dağıtın.

[Adım 6. Her şey hazır]

(•)
#### Adım 6. Her şey hazır

Ana kural bir kez daha: “dağıtılmadı” sıfır olana kadar para dağıtmaya devam edin.

*Nasıl çalışır:*
“Bütçeyi aç” sizi “Bütçe” ekranına götürür. Oradan sonra uygulama yol boyunca ipuçları verir — her seferinde bir ipucu, gerektiği anda.

### Sihirbazdan sonra: “İlk adımlar” listesi {#first-steps-first-steps}

“Özet” ekranının üstünde bir liste kartı belirir. İçinde bütçenin gerçeği gösterebilmesi için gerekenler vardır. Sihirbaz, yaptıklarınızı burada zaten sayar.

[İlk adımlar kartlı Özet: 3/6, açık madde Para dağıtıldı, 47.500 dağıtılmadı, Bütçeye git düğmesi]

1. **Cüzdandaki nakit** — Cüzdanınız ayrı bir hesap olarak. Nakit ilk kaybolan şeydir: kendi hesabı olmazsa bütçe daha ilk alışverişte elinizdeki paradan kopar. Nakit yok mu? — “Nakit kullanmıyorum”.
2. **Tüm bankaların kartları** — Tüm kartlar ve hesaplar eklendi. Onları sihirbazda eklediyseniz madde zaten işaretlidir.
3. **Size göre kategoriler** — Kategori listesi düzenlendi. Kategoriler adımından geçtiyseniz işaretlidir. Düğme sihirbazdaki ekranın aynısını açar. İşlemleri olan bir kategori çarpıyla silinmez, gizlenir: işlemler yerinde kalır.
4. **Para dağıtıldı** — “Dağıtılmadı” sıfıra ulaştı. O zamana kadar madde ne kadar kaldığını gösterir ve “Bütçe” ekranına götürür.
5. **İlk işlem** — İlk alışverişinizi kaydettiniz — bütçe canlandı. Düğme formu açar.
6. **Telefon dışında bir kopya** — Bir bulut ya da yedek dosyası. Telefonu kaybedersiniz — bütçe kaybolmaz. Düğmeler: bulut bağlamak ya da “Yedekler”.

(1)
#### Tamamlanan maddeler işaret alır

Üstte “3/6”: kaç tanesi tamam. Biten madde, onay işaretli tek bir satırdır.

(2)
#### Bir madde açıktır

İlk tamamlanmamış olan — ya da dokunduğunuz. Ne yapılacağını ve neden yapılacağını söyler.

(3)
#### Ana düğme bir kapıdır

Doğrudan maddenin yapıldığı yere götürür: hesap formu, “Bütçe”, işlem formu, buluta giriş. Bazen yanında ikincisi vardır — sizin yanıtınız: “Nakit kullanmıyorum”, “Hepsi eklendi”, “Böyle kalsın”.

(⋮)
#### Listeyi gizleyin

Kart menüsü → “Listeyi gizle” (ekranın altında “Geri al” ile). Her şey bittiğinde kart “Bütçeniz hazır” der — “Anladım”a dokunun.

*Nasıl çalışır:*
Liste açıkken “Özet” ekranındaki normal ipuçları susar — aynı şey iki kez söylenmesin diye. Tüm ipuçlarını geri getirmek için: “Ayarlar → YARDIM VE İLETİŞİM → İpuçları → İpuçlarını yeniden göster”.

YNAB’dan geçtiyseniz liste farklıdır: hesap bakiyelerinin bankayla mutabakatı, nakit, dağıtım ve yedek — hesaplar ve kategoriler zaten dosyayla geldi.

### İlk ayınız {#first-steps-month1}

1. **Her alışverişi kaydedin** — hemen, kasada: “+ İşlem”, fiş için kamera ya da mikrofon. Sonra banka dökümüyle geçecek bir akşam yerine şimdi beş saniye. Vaktiniz yok mu? — “Gelen kutusu” ([“İşlem formu”](#entry) makalesi).
2. **Para geldi — paylaştırın.** Her maaş “dağıtılmadı”ya düşer; onu “Bütçe” ekranında zarflara dağıtın.
3. **Bir zarf kırmızıya döndü — para aktarın**, başka bir zarftan. Bu normaldir: ilk ay her zaman neyi hafife aldığınızı gösterir.
4. **Haftada bir hesaplarınızı bankayla karşılaştırın** — hesap menüsü, “Bakiye mutabakatı” ([“Hesaplar”](#accounts) makalesi).
5. **Ay sonunda “Özet” ekranına bakın**: “Para nereye gitti”, “Ayın harcamaları”. Gelecek ay deneyime göre dağıtırsınız.

## Birkaç cihazda tek bütçe {#scenario-devices}

Cebinizde telefon, evde tablet, işte bilgisayar — ve hepsinde aynı bütçe. Kasada bir alışveriş kaydedin, akşama dizüstü bilgisayarınızda olsun. Nasıl kurulur ve nelere dikkat etmeli.

*“Ayarlar”, “Eşitleme” bölümü*

### Buna kimin ihtiyacı var {#scenario-devices-who}

##### Telefon ve bilgisayar

Harcamalar telefondan, kasada. Ayın planı, raporlar ve gözden geçirme büyük ekranda. Bilgisayar için “Windows sürümü” var: aynı bütçe, fareye göre yapılmış kendi görünümü. Google Drive üzerinden eşitlenir — işin içinde bir bilgisayar varsa telefonda da bu bulutu seçin.

##### Telefon ve tablet

Maaşı zarflara paylaştırmak tablette rahattır: yatay “Bütçe” tam ekran bir tablodur.

##### Yeni telefon

Eskisi bozuldu ya da yenisini aldınız — yılların bütçesi birkaç dakikada taşınır. Senaryo aynıdır: yeni telefon ikinci cihazdır.

Cihazları bir bulut bağlar: Google Drive, Dropbox veya WebDAV (Nextcloud, ownCloud, pCloud, kendi sunucunuz). Her cihaz değişikliklerini oraya gönderir ve diğerlerininkini alır. Ayrıntılı olarak nasıl çalıştığı — [“Bulut ve yedekler”](#sync) makalesinde.

### İlk cihazda {#scenario-devices-first}

Bütçeyi zaten tuttuğunuz cihaz.

1. “Ayarlar”, “Eşitleme” bölümü → “Yetkilendirme”.
2. Buluta giriş yapın. Google Drive için — diğer cihazlarda da kullanacağınız Google hesabıyla. Dropbox için — Google üzerinden değil, Dropbox kullanıcı adınız ve parolanızla. Bir Windows bilgisayar da olacak mı? Google Drive’ı seçin: Windows sürümü başka bulutlara bağlanmaz.
3. Buluttaki verileri bir parolayla kilitlemek mi istiyorsunuz? — “Bulut şifreleme” bloğunda “Parola belirle”. Parolayı bir yere yazın: kimse onu kurtaramaz.
4. “Özet” ekranına dönün ve sağ üstteki eşitleme simgesine dokunun. Bütçe buluta gider.

[Yetkilendirme ekranı: Bulut şifreleme, Google Drive, Dropbox, WebDAV]
“Yetkilendirme” — bulut burada bağlanır. Her bulut ayrıntılı olarak — [“Bulut ve yedekler”](sync.md#auth) makalesinde.

### İkinci cihazda {#scenario-devices-second}

##### Uygulama yeni kuruldu

1. İlk açılış sihirbazında “Zaten bir bütçem var”ı seçin.
2. “Bütçeyi buluttan yükle” açılır. **Aynı** bulutu **aynı** hesapla bağlayın.
3. Listeden bütçeyi seçin ve “Bütçeyi yükle”ye dokunun.
4. İlk cihazda parola belirlendiyse burada da aynısını belirleyin.
5. Para birimini kontrol edin: “Ayarlar” → “Bütçe para birimi”. Ayrıntılar — [aşağıda](#scenario-devices-per-device).

[Bütçeyi buluttan yükle ekranı: adım 1 Bulut bağlayın, adım 2 Bütçe adı]
“Bütçeyi buluttan yükle” — önce bulut, sonra listeden bir bütçe.

##### Uygulama zaten kurulu, kendi bütçesiyle

“Ayarlar”, “Eşitleme” bölümü → “Bütçeyi buluttan yükle” — sonra aynı adımlar. Ya da “Özet” başlığındaki bütçe adına dokunun — “Bütçeyi buluttan yükle” orada da var.

*Nasıl çalışır:*
Bu cihazda aynı adlı bir bütçenin zaten kendi verileri varsa, ilk eşitlemede uygulama bunun tek bir bütçe mi yoksa iki farklı bütçe mi olduğunu sorar: “Buluttan” ya da “Birleştir”. Ayrıntılar [“Bulut ve yedekler”](#sync-trouble) makalesinde.

### Ortak olan ve her cihazın kendine ait olan {#scenario-devices-per-device}

Eşitlenen şey **bütçe verileridir**. Görünüm ve güvenlik ayarları eşitlenmez: her cihazın kendine aittir.

| Tüm cihazlarda ortak | Her cihazda ayrı |
|---|---|
| Hesaplar, simgeleri ve renkleri | Dil ve biçimler |
| Kategoriler ve gruplar, kategori notları | Görünüm: stil, tema, yazı tipi, köşeler |
| İşlemler, etiketler, alıcılar | PIN ve parmak iziyle giriş |
| Aylara göre ayrılan tutarlar, hedefler ve “Liste” satırları | Bulut parolası — ama aynı olmalı |
| Planlı ödemeler | Hatırlatmalar |
| Fotoğraflar ve PDF’ler — “Fotoğrafları eşitle” açıksa | Yedekleme takvimi |
| | **Bütçe para birimi** |

##### Bütçe para birimi — her cihazda kontrol edin

Bütçenin para birimi simgesi cihazda durur ve buluta gitmez. Yüklenen bütçe, bu cihazda zaten bulunan bütçenin para birimini alır — genellikle telefonun ülkesine göre. Tutarlar değişmez, yalnızca yanlarındaki simge. Simge yanlış mı? — “Ayarlar” → “Bütçe para birimi”.

##### Fiş fotoğrafları

Kurulumdan hemen sonra fotoğraflar çekildikleri cihazda kalır. Her yerde görünmeleri için “Eşitleme” ekranında “Fotoğrafları eşitle”yi **her** cihazda açın.

### Her gün {#scenario-devices-daily}

##### Elle eşitlemeniz nadiren gerekir

Uygulama kendiliğinden eşitlenir — her açılıştan birkaç saniye sonra. “Özet” ekranındaki eşitleme simgesinin üstündeki sayı, değişikliklerinizden kaçının henüz buluta gitmediğidir.

##### Bir alışveriş kaydettiniz ve telefonu bırakıyorsunuz

Uygulama küçültüldüğünde Android çalışmaya devam etmesine izin vermez; bu yüzden değişiklikler uygulamayı bir sonraki açışınızda gider. Bilgisayarın başına geçmek üzereyseniz telefondaki eşitleme simgesine dokunun, alışveriş orada hazır olsun.

##### Eşitleme simgesinin rengi

Yeşil yanıp söndü — her şey yolunda. Kırmızı — olmadı; tek bir başarısızlık genellikle yalnızca ağın olmadığı anlamına gelir. Simge kırmızı kalırsa eşitleme art arda birkaç kez başarısız olmuştur — “Eşitleme” ekranını açın, ne olduğunu orada söyler.

### Sık yapılan hatalar {#scenario-devices-mistakes}

| Ne oldu | Neden ve ne yapmalı |
|---|---|
| İkinci cihazda birincinin değişiklikleri yok | Cihazlar buluta **farklı** hesaplarla girdi — her biri kendi bulutuna yazıyor. Her yerde tek bir hesapla giriş yapın. |
| “Bulut parolayla korunuyor” | Parola bir cihazda belirlendi, diğerinde ise belirlenmedi ya da farklı. **Aynısını** belirleyin. |
| Fotoğraflar geldi ama açılmıyor | Aynı şey: parola cihazlar arasında farklı. |
| Bütçeyi yeniden adlandırdınız — ikinci cihaz değişiklikleri görmez oldu | Bütçenin adı, buluttaki klasörünün adresidir. Yeniden adlandırdıktan sonra diğer cihazlarda da bütçeyi tam olarak aynı şekilde yeniden adlandırın. |
| “Çakışma” | Aynı kayıt, cihazlar eşitlenmeden önce iki cihazda değiştirildi. Kart iki sürümü de gösterir — istediğinizi seçin. |

### Bulutsuz {#scenario-devices-no-cloud}

Bulut istemiyor musunuz? Bütçeyi kendi cihazlarınız arasında doğrudan taşıyabilirsiniz: bir dosya olarak ya da aynı ağda Wi-Fi üzerinden. Bu tek seferlik bir aktarımdır, sürekli eşitleme değil: değişiklikleri yeniden aktarmanız gerekir. Yeni telefona geçmek için iyidir. Ayrıntılar [“Bulut ve yedekler”](#sync-local) makalesinde.

## İki ya da daha fazla kişi, tek bütçe {#scenario-together}

Parası ortak bir aile: ikisi de öder, ikisi de kaydeder, ikisi de her zarfta ne kadar kaldığını görür. Karışıklık ve çift kayıt olmasın diye uygulamayla ve birbirinizle nasıl anlaşmalı.

*“Ayarlar”, “Eşitleme” bölümü*

### Kimin için {#scenario-together-who}

Para ortaktır: maaşlar birleştirilir; kira, yiyecek ve tatiller ortak kasadan karşılanır. Herkes kendi kartıyla ya da nakitle öder, ama zarflar ortaktır: “Market”i ikiniz de görürsünüz ve sınıra ilk kim dayanırsa kırmızıyı o görür.

Her birinizin diğerinin görmemesi gereken kişisel parası da varsa [“Çift: ortak harcamalar ve kişisel para”](#scenario-couple) senaryosuna bakın.

### Kurulum {#scenario-together-setup}

Teknik olarak bu, birkaç cihazdaki aynı bütçedir — adımlar [“Birkaç cihazda tek bütçe”](#scenario-devices) senaryosunda. Bir fark var ve önemli.

##### Ayrı bir bulut hesabı — yalnızca bütçe için

Tüm cihazlar buluta **tek** bir hesapla girmelidir. Ama kocanın kişisel Google hesabıyla karısının telefonunda oturum açmak kötü bir fikirdir: telefon onun kişilerini, fotoğraflarını ve e-postalarını eşitlemeye başlar.

**Yeni** bir Google hesabı açın — yalnızca bütçe için — ve her cihazda uygulamanın bulutuna onunla girin. Herkes kendi kişisel hesaplarını korur. Dropbox için de aynısı: kullanıcı adı ve parolayla girilen ayrı bir Dropbox.

##### Herkes için tek bulut parolası

Bir parola belirlerseniz her telefonda **aynısını** belirleyin. Parola eşitlenmez: her cihazda elle girilir.

### Kim neyi ödedi {#scenario-together-whose}

Uygulama bir işlemin hangi telefonda kaydedildiğini hatırlamaz. Harcamaları birbirinden ayıran **hesaptır**.

##### Her kişiye bir hesap

Her kişiye kendi hesaplarını verin: “Elif’in kartı”, “Can’ın kartı”, “Elif’in nakdi”. Alışveriş hangi hesaba kaydedildiyse onu o kişi ödemiştir. Herkes hesap bakiyelerini kendi bankasıyla karşılaştırır — [“Hesaplar”](#accounts) makalesinde “Bakiye mutabakatı”.

Bu ay kimin harcaması — “İşlemler” → “⋮” → “Filtre”, hesaba göre filtreleyin.

##### “Kim kime borçlu” gerekirse

Ortak bütçede genellikle gerekmez: para zaten ortaktır. Ama bir şeyi yarı yarıya bölmeyi kararlaştırdıysanız — bu alışverişler için “Hesaplaşma” açık bir etiket kimin kime ne kadar borçlu olduğunu gösterir. Ayrıntılar [“Alıcılar ve etiketler”](#payees-tags) makalesinde.

### Para dağıtmak {#scenario-together-assign}

Maaşı zarflara paylaştırmak tek kişi için — ya da tek ekranın başındaki iki kişi için — daha kolaydır.

##### Neden herkes kendi telefonundan değil

İkiniz aynı anda aynı kategoride ayrılan tutarı değiştirirseniz, değişikliği buluta en son ulaşan kazanır — ya da uygulama bir “Çakışma” gösterip seçmenizi ister. Zarftaki tutar kararlaştırdığınız tutar olmayabilir.

Dağıtımı kimin yapacağı konusunda anlaşın. Başlamadan önce uygulamayı açın ve eşitlenmesi için birkaç saniye verin — diğer kişinin son harcamalarını görün.

##### İkinizin de gördüğü

“Dağıtılmadı”, her zarfın bakiyesi, “Özet” ekranındaki “Aşım” ve “Tükeniyor” ortaktır. “Market” sarıya dönerse ikiniz de görürsünüz ve aynı sayıları konuşursunuz.

### Planlı ödemeler {#scenario-together-scheduled}

Kira ve abonelikler ortaktır, vade de iki telefona birden gelir.

##### Bir kişi onaylar

İki kişi aynı ödemede telefonlar eşitlenmeden “Onayla”ya dokunursa işlem **iki kez** kaydedilir. Planlı ödemeleri kimin onaylayacağı konusunda anlaşın ya da onaylamadan önce uygulamanın eşitlenmesine izin verin. Fazla işlemi “İşlemler” içinde silin.

Vade hatırlatmaları iki telefona da gelir — açık olan kişiye. Herkes bunları kendi telefonunda ayarlar: “Ayarlar” → “Hatırlatıcılar”.

### Her gün {#scenario-together-daily}

##### Bir şey mi kaydettiniz? Eşitleyin

Uygulama küçültüldüğünde değil, açıldığında eşitlenir. Büyük bir alışveriş kaydettiniz ve diğer kişinin birazdan bütçeye bakacağını biliyor musunuz? “Özet” ekranındaki eşitleme simgesine dokunun.

##### Akşam hatırlatıcısı ikinizi de sayar

“Harcamaları girmeyi hatırlat”, bütçede bugün zaten harcama varsa susar — diğer kişinin girdiği ve eşitlemeyle gelen harcamalar dahil. Her birinize hatırlatsın istiyorsanız, herkes kendi harcamasını aynı gün kaydetmelidir.

##### “Son işlemler” ortaktır

“Özet” ekranında diğer kişinin ne aldığını görürsünüz: alışverişleri eşitlemeden sonra orada belirir.

### Sık yapılan hatalar {#scenario-together-mistakes}

| Ne oldu | Neden ve ne yapmalı |
|---|---|
| Bir telefonda diğerinden daha fazla harcama var | Telefonlar buluta farklı hesaplarla girdi — bunlar iki farklı bulut. Her yerde bütçe için ayrılmış tek bir hesapla giriş yapın. |
| Bir işlem iki kez göründü | İkiniz de girdiniz: örneğin ortak bir fişi hem ödeyen hem de poşetleri taşıyan kaydetti. Anlaşın: kart kimin ise o kaydeder. |
| Planlanan bir ödeme iki kez kaydedildi | İkiniz de “Onayla”ya dokundunuz. Fazla işlemi silin; bundan sonra bir kişi onaylasın. |
| Bir telefonda “Bulut parolayla korunuyor” | Bir telefonda parola belirlenmiş, diğerinde ya yok ya da farklı. Aynısını belirleyin. |
| Para birimi simgesi ikinizde farklı | Bütçe para birimi cihazda durur. “Ayarlar” → “Bütçe para birimi” içinde düzeltin. |

## "Çift: ortak harcamalar ve kişisel para" {#scenario-couple}

Her birinizin kendi maaşı ve kendi harcamaları var; ev, yiyecek ve tatiller ise yarı yarıya. Bugün uygulamada bunu nasıl yöneteceğiniz, uygulamanın henüz neyi yapamadığı ve ayda bir nasıl hesaplaşacağınız.

*işlem formundaki “ortak” etiketi ve “Özet” ekranındaki “Etiketlerim” bloğu*

### Bugün ne çalışıyor {#scenario-couple-today}

İstediğiniz şu: ikinizin tuttuğu ortak bir bütçe, “Evimiz”, artı her birinize diğerinin göremediği kişisel bir bütçe. Tek bir ortak bulut üzerinden bu **çalışmaz** — nedeni aşağıda. Ama ortak bütçeyi evde Wi-Fi üzerinden birbirinize aktarırsanız çalışır.

##### Neden

Telefon buluta tek bir hesapla girer ve o telefondaki her bütçe o buluta eşitlenir. Bulut parolası da bütçe başına değil, telefon başına birdir. Bu yüzden ortak buluttaki ortak bütçe ile eşinizden gizli kişisel bütçe aynı telefonda yaşayamaz: kişisel bütçe de ortağın gittiği yere giderdi.

Üç yol işe yarar.

##### Kişisel bütçeler ve “ortak” etiketi

Herkesin kendi bütçesi var — kimse diğerinin parasını görmez. Ortak harcamalar bir etiketle işaretlenir, ayda bir karşılaştırıp eşitlersiniz. Ayrıntılar — [aşağıda](#scenario-couple-tag).

##### İki bütçe, ortak olanı Wi-Fi ile

Her telefonda kendi bütçesi ve ortak “Evimiz” var. Her birinizin kendi bulutu var, ortak bütçeyi de evde Wi-Fi üzerinden birbirinize aktarırsınız. Ayrıntılar — [aşağıda](#scenario-couple-wifi).

##### İkiniz için tek ortak bütçe

Tüm para tek bütçede, kişisel para kendi kategorileri olarak. İkiniz de her şeyi görürsünüz. Birbirinizden saklayacak bir şeyiniz yoksa iyidir. Ayrıntılar — [aşağıda](#scenario-couple-all-shared).

### “Ortak” etiketi yolu {#scenario-couple-tag}

Herkesin kendi telefonunda kendi bütçesi var: kendi bulutu ya da hiç bulut yok. Herkes ortak harcamaları her zamanki gibi kendi bütçesine kaydeder ve üzerine bir etiket koyar.

##### Nasıl kurulur — her biriniz kendi telefonunda

1. Ortak harcamalardaki payınız için bir kategori oluşturun — örneğin “Sabit giderler” grubunda “Aile”. Her ay ortak kasaya koymayı kararlaştırdığınız kadarını koyun.
2. Ortak bir şey için mi ödediniz — ev için market, faturalar? Alışverişi bu kategoriye kaydedin.
3. “Etiketler” alanında bir “ortak” etiketi oluşturun ve bu tür her alışverişe koyun.
4. “Özet” ekranında, “Etiketlerim” bloğunda → “⋮” → “Etiket seç…”, “ortak”ı işaretleyin ve dönemi “Bu ayın toplamı” yapın.

*Neden “Market” ve “Faturalar” değil de tek bir kategori:*
Kişisel bütçeniz “ne kadar harcıyorum” sorusunu yanıtlar. Ortak evdeki payınız, kira gibi tek bir kalemdir: “Aile”. Ortak paranın nereye gittiğini görmek istiyorsanız “ortak” etiketinin ekranını açın: orada “Kategoriye göre” var. Bu durumda ortak harcamaları normal kategorilere koyun, etiket onları bir araya toplar.

### Ay sonu: kim kime borçlu {#scenario-couple-month}

1. Her biriniz “Etiketlerim” içinde bu ay “ortak”a ne kadar harcadığına bakar.
2. İki tutarı toplayın ve ikiye bölün — bu, her kişinin payıdır.
3. Payından az harcayan, farkı diğerine gönderir.

**Örnek.** Elif ortak giderlere ₺30.000, Can ₺20.000 harcadı. Toplam ₺50.000, yani herkesin payı ₺25.000. Can, Elif’e ₺5.000 gönderir.

##### Gönderim nasıl kaydedilir

- **Can** — “Aile” kategorisinde, “ortak” etiketiyle ₺5.000’lik bir gider: bu aynı zamanda ortak kasaya katkısıdır.
- **Elif** — aynı “Aile” kategorisine, aynı etiketle Can’dan gelen ₺5.000: para zarfa döndü. Bir kategoriye iadenin nasıl kaydedileceği — [“İşlem formu”](#entry) makalesinde.

Can’ın “Etiketlerim” bloğunda ₺25.000 olur. Elif’inkinde ₺30.000 kalır: blok yalnızca harcamaları sayar. Onun ₺25.000’i “ortak” etiketinin ekranındadır: “Alınan” ₺5.000 ve “Net” ₺25.000.

Karşılaştırmayı gönderimden **önce** “Etiketlerim” ile yapın — sonrasında sayılar zaten eşitlenmiştir.

*Peki etiketteki “Hesaplaşma”?:*
“Hesaplaşma” **sizin** bütçenizde “harcanan eksi alınan” hesaplar — bütçenize yazmayan biriyle bir masrafı böldüğünüzde iyidir: arkadaşlarla seyahat, ortak bir hediye. İki bütçeli bir çift için resmin yalnızca sizin yarınızı gösterir: diğer kişinin katkısı sizin bütçenizde yok. Bu yüzden burada “Etiketlerim” ile karşılaştırın. “Hesaplaşma” hakkında — [“Alıcılar ve etiketler”](#payees-tags) makalesinde.

### İki bütçe, ortak olanı Wi-Fi ile {#scenario-couple-wifi}

Her telefonda iki bütçe var: kendi bütçeniz ve ortak “Evimiz”. Her birinizin kendi bulutu var — kendi hesabı, kendi parolası. İki bütçe de telefon sahibinin bulutuna gider ve diğer kişi onları orada görmez. Birbirinize yalnızca “Evimiz”i aktarırsınız — ikiniz de evdeyken, Wi-Fi üzerinden.

##### Nasıl kurulur

1. Her biriniz kendi telefonunda, her zamanki gibi kendi hesabıyla bir bulut bağlar.
2. Elif “Evimiz” bütçesini oluşturur: “Özet” başlığındaki bütçe adına dokunun — orada bütçe listesi ve yeni bütçe var. Can kendi telefonunda aynı adlı boş bir bütçe oluşturur.
3. İlk seferde Can, “Evimiz”i Elif’ten Wi-Fi ile alır (nasıl — aşağıda) ve “Tamamen değiştir”i seçer: boş bütçesi Elif’inkinin bir kopyası olur.

##### Evde değiş tokuş

1. **İkiniz de “Evimiz”i açın.** Değiş tokuş açık bütçeler arasında olur.
2. “Ayarlar” → “Yerel aktarım”. Elif: “Sunucuyu başlat”. Can: “QR tara” → “Verileri al” → “Birleştir”.
3. Elif: “Sunucuyu durdur”.

Değiş tokuş iki yönlüdür: Can, Elif’in değişikliklerini alır, onun değişiklikleri de Elif’e gider — işlemler de fiş fotoğrafları da. Hanginizin gönderip hanginizin aldığı önemli değildir.

**“Bu başka bir bütçeye benziyor” — “İptal”e dokunun.** Biriniz “Evimiz” yerine kendi bütçesini açmışsa, iki bütçenin ortak hesabı ya da işlemi yoktur ve uygulama birleştirmeden önce sorar. “Yine de devam et”, kişisel harcamaları ortak bütçeye dökerdi ve onları yeniden ayırmanın yolu olmazdı.

*Ya bütçeler birleştiyse?:*
Elle ayıramazsınız, ama ikisini de otomatik bir yedeğe geri alabilirsiniz — uygulama bunları kendisi alır, varsayılan olarak 5 günde bir. Değiş tokuş iki yönlü olduğundan iki bütçe bozulur: Can’ın kişisel bütçesi (içine “Evimiz” girdi) ve Elif’in “Evimiz”i (içine Can’ın kişisel harcamaları girdi). Herkes kendininkini kendi telefonunda düzeltir.

1. Bozulan bütçeyi açın. “Ayarlar” → “Yedekler”.
2. **Bu** bütçenin (adı yedeğin satırında yazar) değiş tokuştan **önceki** tarihli bir yedeğini bulun. Ok işaretli saat simgesine dokunun → “Geri yükle”. Bundan sonra **“Şimdi eşitle”ye dokunmayın**: birleşmiş bütçe hâlâ bulutta.
3. Bu bütçenin eşitleme dosyasını bulutunuzda silin — [“Bulut ve yedekler”](#sync-rollback) makalesindeki gibi, 2–4. adımlar. Her birinizin kendi bulutu var ve bu bütçeyi oraya yalnızca sizin telefonunuz yazıyor, bu yüzden birkaç cihazla ilgili kısım geçerli değil.
4. Yedekten sonra yapılan değişiklikler kaybolur. Ortak olanlar kurtarılabilir: Elif “Evimiz”i geri aldıktan sonra, ikiniz de “Evimiz”deyken bir kez daha değiş tokuş yapın; ortak değişiklikler Can’ın “Evimiz”inden ona geri döner — Can’ın kopyası temizdir. Yedekten sonra girilen kişisel harcamaların yeniden kaydedilmesi gerekir.

İlk değiş tokuştan önce elle yedek almaya değer — her biriniz kendi telefonunda ve **iki** bütçenin de: yedek açık bütçe için alınır. Kendi bütçenizi açın → “Yedekler” → “Şimdi yedek oluştur”, sonra “Evimiz”i açın ve tekrarlayın. Böylece beş günlük otomatik bir yedeğe değil, değiş tokuştan hemen önceki duruma dönersiniz.

*Bulut parolası aynı olmak zorunda mı?:*
Hayır. Wi-Fi aktarımı, gönderen telefonun ekranındaki onay koduyla şifrelenir; yedek parolasının bunda bir rolü yoktur. “Bulut şifreleme” bloğundaki parola yalnızca **sizin** bulutunuzu kilitler. Yalnızca iki telefon tek bir buluta yazdığında aynı olması gerekir — burada bulutlar farklı.

*Ya evin dışında değişiklik yaptıysanız?:*
Her biriniz “Evimiz”i kendi telefonunda tutar: mağazada bir alışveriş kaydedin, hemen sizin kopyanızda ve bulutunuzda olur. Evde değiş tokuş yapın — ve ikinizde de her şey olur. Telefonlardan birinde uygulamanın hâlâ eski bir sürümü varsa, alanın değişiklikleri geri gitmez — uygulama bunu söyler; o zaman rolleri değiştirerek bir kez daha değiş tokuş yapın. İkiniz de aynı işlemi değiştirdiyseniz, normal eşitlemedeki gibi sonraki değişiklik kalır.

Bedeli: ortak bütçe ancak ikiniz de evde olup değiş tokuş yaptığınızda eşitlenir.

### İkiniz için tek ortak bütçe {#scenario-couple-all-shared}

Kişisel sırlar yoksa her şeyi birlikte tutmak en basitidir — o zaman bütün resmi ve ikiniz için tek bir “dağıtılmadı” görürsünüz.

- Kurulum — [“İki ya da daha fazla kişi, tek bütçe”](#scenario-together) senaryosundaki gibi: bütçe için ayrı bir bulut hesabı, iki telefonda da onunla giriş.
- Kişisel para — kendi kategorileri olarak: “Elif kişisel”, “Can kişisel”. Her ay kararlaştırılan tutar bunlara gider; nasıl harcanacağı sahibine kalmış.
- Hesaplar — herkesin kendi hesabı var: “Elif’in kartı”, “Can’ın kartı”. Böylece kimin ödediğini görürsünüz.

Bedeli: ikiniz de her şeyi görürsünüz — “kişisel” kategorilerden yapılan harcamaları da, kart bakiyelerini de.

### Henüz olmayan {#scenario-couple-not-yet}

İkiniz için bulut üzerinden kendiliğinden eşitlenen ortak bir bütçe, yanında eşinizden gizli kişisel bütçeler ve ortak bir harcamayı kişisel bütçeden ortak olana tek dokunuşla taşımak — henüz yok. İnsanlar ihtiyaç duyduğunda yapacağız. Siz de onlardansanız “Telegram sohbeti”ne yazın (“Ayarlar”, “YARDIM VE İLETİŞİM” bölümü): bu tür mesajlar ne kadar çok olursa, o kadar erken.

## Serbest çalışma ve düzensiz gelir {#scenario-freelance}

Para, müşteri ödediğinde gelir: bir ay bolluk, ertesi ay kıtlık. Böyle bir gelirle bir ödemeden ötekine yaşamayı nasıl bırakacağınız, vergiye nasıl para ayıracağınız ve gerçekte ne kazandığınızı nasıl bileceğiniz.

*“Bütçe”, “Özet”, “Raporlar” — aşağıdaki her şey*

### Ana fikir {#scenario-freelance-idea}

Maaşla ay öngörülebilirdir: ayın 5’inde ödenir, bir sonraki 5’ine kadar yeter. Serbest çalışan ayın gelirini önceden bilmez — bu yüzden ona göre plan yapamazsınız. **Zaten elinizde olan** paraya göre plan yapın.

##### Önceden kazandığınızı harcayın

Ay, daha önce gelenle yaşar. Şimdi gelen, bir sonraki ay için çalışır. [Nasıl](#scenario-freelance-last-month).

##### Yastıkla dengeleyin

İyi bir ay yedeği doldurur, zayıf bir ay ondan çeker. [Nasıl](#scenario-freelance-buffer).

##### Vergiyi hemen ayırın

Her ödemenin bir yüzdesi, para harcanmadan önce kendi zarfına gider. [Nasıl](#scenario-freelance-taxes).

### Geçen ayın parasını harcayın {#scenario-freelance-last-month}

Her ödemeyi bu aya değil, **bir sonraki** aya kaydedin. Böylece ayın 1’ine kadar bütün ay kazandığınız parayla zaten ödenmiş olur ve onu zarflara her ödemeden sonra parça parça değil, bir kez paylaştırırsınız.

##### Ödeme nasıl kaydedilir

1. “+ İşlem” → “+ Gelen”, alıcı — müşteri, tutar.
2. “Kategori” alanına dokunun — “Gelir nereye yazılsın” açılır.
3. “Aralık için gelir”i seçin, “Kasım için gelir”i değil. Kaydedin.

İşlemin tarihi gerçek tarih olarak kalır. Yalnızca paranın göründüğü bütçe ayı değişir.

##### Nereden başlamalı

İlk ay hem elinizdekini harcamanız hem de bir sonraki ay için biriktirmeniz gerekecek. Henüz dağıtmadığınız bir ödemeyle başlayın. Bir ay önde olacak kadar biriktirene dek en azından bir kısmını bir sonraki aya koyun: orada ne kadar olduğunu uygulama “Özet” ekranındaki “Ay bütçesi”nde gösterir — “Aralık bütçesi” satırı.

Hedef, 30 gün ya da daha fazla bir “Paranın yaşı”dır: bu, geçen ayın parasını harcadığınız anlamına gelir. Ayrıntılar [“Özet”](#overview-age-month) makalesinde.

### Zayıf aylar için yastık {#scenario-freelance-buffer}

Bir ay önde para olsa bile art arda iki zayıf ay olur. Yastık, sizi bunlardan geçiren bir zarftır.

##### Nasıl kurulur

1. “Kara gün fonu” kategorisi — ya da kendinize ait bir kategori, “Yastık”.
2. Bir “Bakiye” hedefi: tutar, 3–6 aylık olağan harcamanızdır. Bunun ne kadar olduğu — aşağıda, “Aylık ortalama gelir” ve “Harcama eğilimi”.
3. İyi bir ayda olağanın üstündeki her şeyi yastığa koyun.

“Bakiye” hedefi yedeğin erimemesini sağlar: bir kısmını harcayın, uygulama geri koymanızı ister. Ayrıntılar [“Hedefler”](#goals-balance) makalesinde.

##### Zayıf bir ay

Zarflara yetmedi ve harcamalar kırmızıya düştü. “Bütçe” ekranında kırmızı tutara dokunun → “Başka kategoriden karşıla” → “Kara gün fonu” satırında “… al”. Para yastıktan eksinin olduğu yere geçer. Ayrıntılar [“Bütçe”](#budget-screen) makalesinde.

### Vergiler — doğrudan kendi zarflarına {#scenario-freelance-taxes}

Bir ödemenin vergisini harcamak kolaydır: para kartta, vergi ise gelecek çeyrekte ödenecek.

##### Bir “% gelir” hedefi

1. “Vergiler” kategorisi.
2. Bir “% gelir” hedefi — ödediğiniz yüzde. Yüzdenin altında “Bu ayın gelirinden”i bırakın: vergi ortalamaya göre değil, gelen paraya göre hesaplanır.
3. Her ödeme hedefi kendiliğinden günceller: daha fazla geldi, hedef yükseldi; “… kaldı” ne kadar eklemeniz gerektiğini söyler.

Ayırdığınız para ödeme tarihine kadar zarfta birikir: artı aydan aya devreder. Ayrıntılar [“Hedefler”](#goals-percent) makalesinde.

*Geliri bir sonraki aya kaydediyorsanız:*
O zaman bu ayın “% gelir” hedefi ayın 1’inde bellidir: ayın geliri geçen ay geldi. Kullanışlı — vergi diğer zarflarla birlikte ilk iş olarak ayrılır.

### Para geldi — tek dokunuşla paylaştırın {#scenario-freelance-income}

Her ödemeyi elle paylaştırmak yorar. “Yüzdeye göre” otomatik dağıtım bunu sizin yerinize yapar.

##### Bir kez ayarlayın

1. “Bütçe” ekranında başlıktaki “dağıtılmadı”ya dokunun — “Bütçeyi otomatik dağıt” açılır.
2. “Yüzdeye göre” → “Yüzdeleri belirle”: örneğin “Vergiler” — %5, “Kara gün fonu” — %20, “Yatırımlar” — %10.
3. Yüzdeler hatırlanır. Bir yüzdeyle karşılanmayan her şey “dağıtılmadı”da kalır — onu ayın zarflarına kendiniz dağıtın.

Bundan sonra: para geldi — “dağıtılmadı”ya dokunun → “Yüzdeye göre”. Uygulama tam olarak şu anda dağıtılmamış olanı paylaştırır.

*Neden tutar değil de yüzde:*
Düzensiz bir gelirle sabit bir tutar bir ay imkânsız, ertesi ay gülünç olur. Yüzde ise gelirinizle birlikte iner çıkar. Yuvarlama — aynı sayfadaki “Tam sayı”, “10'a”, “100'e” çipleri.

### Müşteriler ve projeler {#scenario-freelance-clients}

##### Müşteri alıcıdır

Her ödemeyi müşteriyi “Alıcı” alanına yazarak kaydedin. “Ayarlar” → “Alıcılar” içinde müşteriye dokunun — ekranı açılır: “Gelir eğilimleri” ortalamada ne kadar ödediğini, “Yıl” dönemi de yıl boyunca tüm ödemelerini gösterir. Sizi kimin beslediğini, kimin yılda iki kez ödediğini görürsünüz. Ayrıntılar [“Alıcılar ve etiketler”](#payees-tags-payee) makalesinde.

##### Proje bir etikettir

Proje için bir etiket oluşturun: “kafe sitesi”. Onu hem müşterinin ödemesine hem de projenin masraflarına koyun: bir hizmet aboneliği, toplantıya taksi, bir yazı tipi. Etiket ekranı “Harcanan”, “Alınan” ve “Net”i gösterir — projenin gerçekte ne getirdiğini. Ayrıntılar [“Alıcılar ve etiketler”](#payees-tags) makalesinde.

### Beklenen ödemeler {#scenario-freelance-expected}

Fatura kesildi, para da ayın 15’ine kadar söz verildi. Unutmamak ve neyin geleceğini görmek için planlı bir ödeme oluşturun.

1. “Ayarlar” → “Planlı ödemeler” → “+ Ödeme”.
2. “+ Gelen”, müşteri, tutar, ödemenin söz verildiği tarih, “Tekrarla” — “Bir kez”.
3. Ödeme, “Özet” ekranındaki “Sırada ne var” ve “Takvim” içinde görünür.
4. Para zamanında geldi — onay ekranında “Onayla”. Vadeden önce — ödeme satırını sola kaydırın — “Kayda geçir”. Müşteri gecikiyor — ödemeyi açın ve “Tarih” alanını değiştirin.

Ödeme onaylanana kadar bütçede değildir: zarflar söz verilmiş parayla doldurulmaz. Ayrıntılar [“Planlı ödemeler”](#scheduled) makalesinde.

### Neye bakmalı {#scenario-freelance-reports}

| Nerede | Size ne söyler |
|---|---|
| “Özet” → “Ay bütçesi” | 12 aylık “Aylık ortalama gelir” ve “Aralık bütçesi” — gelecek ay için zaten ne kadar paranız var. |
| “Özet” → “Paranın yaşı” | 30 gün ya da daha fazla — geçen ayın parasıyla yaşıyorsunuz. |
| “Özet” → “Ayın harcamaları” | Şu anda olağandan fazla harcayıp harcamadığınız. |
| “Raporlar” → “Gelirler ve giderler” | Ay ay bir tablo: kaynağa göre gelir — her müşterinin kendi satırı var —, gruba göre giderler ve “Tasarruf oranı”. Hem mevsimselliği hem de kimin ne kadar ödediğini görürsünüz. |
| “Raporlar” → “Harcama eğilimi” | Olağan aylık harcamanız — yastığın büyüklüğü için temel. |
| “Raporlar” → “Para akışı” | Kazandığınız paranın bir dönem boyunca nereye gittiği — ve ne kadarının kaldığı. |
| “Raporlar” → “Paranın yaşı” | Zaman tamponunuzun ay ay nasıl büyüdüğü. |

Raporlar hakkında daha fazlası [“Raporlar”](#reports) makalesinde.

### İş parasını ayrı tutun {#scenario-freelance-business}

İşinizin kendi hesabı ve kendi giderleri varsa — hizmetler, ekipman, muhasebeci — bunları **ikinci bir bütçede**, örneğin “İş”te tutabilirsiniz. “Özet” başlığındaki bütçe adına dokunun — orada bütçe değiştirici ve yeni bütçe var.

İş bütçesinde ödemeler ve iş giderleri durur. Geçinmek için aldığınız para kişisel kartınıza transfer olarak gider: iş bütçesinde harcama, kişisel bütçede gelirdir. Böylece kişisel bütçeniz her ay eşit bir tutarla yaşar, bütün iniş çıkışlar iş bütçesinde kalır.

## Maaştan maaşa {#scenario-paycheck}

Para ay bitmeden bitiyor, maaş gününe ise daha bir hafta var. Elinizdekini nasıl paylaştıracağınız, kırmızıya düşmeden bir sonraki maaşa nasıl ulaşacağınız ve adım adım bu kısır döngüden nasıl çıkacağınız.

*“Bütçe”, “Özet” ve kategori ekranı — aşağıdaki her şey*

### Ana fikir {#scenario-paycheck-idea}

Zarflar size sahip olduğunuzdan fazla para vermez. Ama maaşa kadar yetip yetmeyeceğini **önceden** gösterir — son gün değil, ilk gün.

##### Yalnızca elinizdekini dağıtın

Zarf, hesaplarınızda zaten olan parayla doldurulur. Söz verilmiş bir maaş henüz para değildir. [Nasıl](#scenario-paycheck-now).

##### Önce zorunlu olanlar

Konut, yiyecek, işe ulaşım, ilaç, kredi taksiti. Gerisi sonra gelir. [Nasıl](#scenario-paycheck-now).

##### Eksi başarısızlık değildir

Başka bir zarftan para aktarın ve devam edin. [Nasıl](#scenario-paycheck-minus).

### Maaş günü — hemen paylaştırın {#scenario-paycheck-now}

Para paylaştırılmadıkça çok gibi görünür. Zarflara bölününce gerçeği söyler: ayın 5’ine kadar yiyeceğe ₺5.000, o kadar.

##### Sırayla

1. “Bütçe”yi açın. Üstte “dağıtılmadı” var: bu kadar paranın henüz bir görevi yok.
2. Önce bir sonraki maaşa onlarsız ulaşamayacağınız zarfları doldurun: kira, faturalar, “Market”, işe ulaşım, ilaç, asgari kredi taksiti.
3. Sonra geri kalan her şeyi, “dağıtılmadı” sıfır olana kadar.
4. Hepsine yetmiyor mu? Bazı zarflar boş kalır. Bu bir hata değil, dürüst bir yanıttır: bu ay buna para yok.

Zarfa nasıl para konulacağı — adım adım [“Bütçe”](#budget-screen) makalesinde.

*Çip kırmızıya döndü — “Fazla dağıtıldı”:*
Hesaplarınızdakinden fazlasını dağıttınız. Zarflardan birinde ayrılan tutarı azaltın — tutara dokunun ve daha azını girin. Para “dağıtılmadı”ya geri döner.

### Ayda iki maaş {#scenario-paycheck-two}

Ayda iki kez para — iki kez paylaştırırsınız. İlk maaş ikinciye kadar gerekenlere gider. İkincisi geri kalana ve ondan sonra gelenlere.

##### Maaştan önceki faturalar — planlı ödeme olarak

Kira, faturalar, telefonunuz için planlı ödemeler oluşturun: “Ayarlar” → “Planlı ödemeler” → “+ Ödeme”. Bunlar “Özet” ekranındaki “Sırada ne var” bloğunda ve “Takvim”de görünür, vadeden bir gün önce de hatırlatma gelir. Hangi faturaların maaştan önce, hangilerinin sonra geldiğini görürsünüz — ve ilk maaştan neyi karşılayacağınızı. Ayrıntılar [“Planlı ödemeler”](#scheduled) makalesinde.

### Günde ne kadar harcayabilirsiniz {#scenario-paycheck-until}

##### “günde ≈ …”

“Bütçe” ekranında bir kategoriye dokunun — ekranı açılır. “Kullanılabilir”in altında, eksiye düşmeden ay sonuna kadar her gün ne kadar harcayabileceğiniz yazar. “Market”te ₺3.500 varken ve ayın bitmesine on gün kalmışken — “günde ≈ ₺350”. Ayrıntılar [“Kategori ekranı”](#category-screen) makalesinde.

##### “Özet” ekranında “Tükeniyor”

Zarfta hâlâ para var, ama ayın ilerleyişinden daha hızlı harcıyorsunuz — kategori “Tükeniyor” bloğunda sarı görünür. Bu, bir hafta sonra değil şimdi yavaşlama işaretidir. Ayrıntılar [“Özet”](#overview-blocks) makalesinde.

##### “Ayın harcamaları”

“Özet” ekranında bir blok: bu ay bu tarihe kadar olağandan fazla harcayıp harcamadığınız.

### Kırmızı eksi {#scenario-paycheck-minus}

Zarfta olandan fazlasını harcadınız — tutar kırmızı. Ay bitmeden, hemen karşılayın.

1. “Bütçe” ekranında kırmızı tutara dokunun.
2. “Aşım” sayfasında “Başka kategoriden karşıla”ya dokunun. “Parayı nereden alacaksınız” açılır: “Dağıtılmadı” ve parası olan her zarf.
3. Vazgeçebileceğiniz bir zarfın yanındaki “… al”a dokunun. Eksi karşılandı — “Aşım karşılandı!”.

Ayrıntılar [“Bütçe”](#budget-screen) makalesinde.

*Eksi ay sonuna kadar kaldı:*
Sıfırlanır, ama iz bırakmadan değil: gelecek ayın “dağıtılmadı” tutarı aynı miktarda küçülür. Bir sonraki maaşınız tam o eksi kadar küçük kalır. Ayrıntılar [“Bütçe nasıl çalışır”](#start-months) makalesinde.

*Birkaç eksi var, “dağıtılmadı”da da bir şey var:*
“Bütçe” başlığındaki “dağıtılmadı”ya dokunun → “Tüm aşımları karşıla”. Uygulama ayın tüm eksilerini dağıtılmamış paradan tek seferde karşılar.

### Kredi kartı çıkış yolu değil {#scenario-paycheck-card}

Zarf boş, ama kredi kartında limit var. Cazibe anlaşılır, ama boş bir zarftan kredi kartıyla yapılan alışveriş **sarı** bir eksidir: para yok ve borç büyür. Gelecek ay onu yeni maaşınızdan ödemeniz gerekir — yani maaş yine küçülür. Ayrıntılar [“Kredi kartları ve borçlar”](#scenario-credit-yellow) senaryosunda.

### Her gün kaydedin {#scenario-paycheck-daily}

Zarf, ancak tüm harcamalar ona kaydedildiği sürece doğruyu söyler. Dünden unutulmuş tek bir alışveriş — ve “günde ≈ …” size yalan söyler.

- Akşam hatırlatıcısı: “Ayarlar” → “PLANLAMA” → “Hatırlatıcılar” → “Günün harcamaları” → “Harcamaları girmeyi hatırlat”. Yalnızca o gün hiçbir şey girmediyseniz gelir. **Kurulumdan hemen sonra:** kapalı.
- Kaydetmenin en hızlı yolu kasadadır: [sesle](#voice) ya da [fiş tarayıcıyla](#receipt). Kategori seçecek vaktiniz yok mu? — [“Gelen kutusuna”](#entry-inbox), akşam da düzenleyin.

### Kısır döngüden nasıl çıkılır {#scenario-paycheck-out}

Amaç yalnızca idare etmek değil, bir gün bir ay önce kazanılan parayla yaşamaktır. Adım adım gidin, her seferinde bir adım.

(1)
##### Küçük bir yastık

“Bakiye” hedefli “Kara gün fonu” kategorisi — başlangıç için en az bir haftalık harcamaya yetecek kadar. Telefonunuz bozulur — para yiyecek zarfından değil, buradan gelir. Ayrıntılar [“Hedefler”](#goals-balance) makalesinde.

(2)
##### Düzensiz giderler — azar azar

Sigorta, hediyeler ve ayakkabı tamiri, her ay onlar için para ayırırsanız ayı mahvetmeyi bırakır. Bir “Tarihe kadar” hedefi ne kadar ayıracağınızı hesaplar. Ayrıntılar [“Büyük bir şey için birikim”](#scenario-saving) senaryosunda.

(3)
##### Bir ay önde para

Her ay üstüne biraz bırakın. Bütün bir ayı biriktirdiğinizde maaşınızı gelecek aya kaydedin: “Kategori” → “Aralık için gelir”. Bundan sonra her ay önceden ödenmiş olur ve maaş günü artık önemli değildir.

Gelecek ay için zaten ne kadar paranız olduğu — “Özet” ekranındaki “Ay bütçesi”, “Aralık bütçesi” satırı. Nasıl gittiği — “Paranın yaşı”: 30 gün ya da daha fazlası kısır döngüden çıktığınız anlamına gelir. Ayrıntılar [“Özet”](#overview-age-month) makalesinde ve [“Bütçe nasıl çalışır”](#start-ladder) makalesinde.

## Kredi kartları ve borçlar {#scenario-credit}

Bir kredi kartı, bir taşıt kredisi, uygulamadan önce var olan bir borç. Nasıl kurulur, bütçe yalan söylemesin diye nasıl ödenir ve borcun küçülmesi nasıl izlenir.

*“Hesaplar”, “Bütçe” → “Kart ödemeleri”, “Raporlar” → “Kart borcu” ve “Net varlık”*

### Kredi kartı {#scenario-credit-card}

Tek bir kural var: kredi kartıyla yapılan alışveriş, banka kartıyla yapılan alışveriş gibi zarftaki parayı harcar. Fark, bu paranın nerede beklediğidir: bir hesapta değil, siz bankaya ödeyene kadar kredi kartının kategorisinde.

##### Nasıl kurulur

1. “Hesaplar” → “⋮” → “Hesap ekle”.
2. Tür — “Kredi kartı”. Ad — karta ne diyorsanız.
3. Tutar — şu anda bankaya ne kadar borçlu olduğunuz. Yazın ve eksi yapmak için “±”ya dokunun.
4. Kaydedin. Kart “KREDİ KARTLARI” bölümüne gider, “Bütçe” ekranında da “Kart ödemeleri” grubunda aynı adlı bir kategori belirir.

O kategoriye dokunmayın: uygulama bu kartın borcunu onunla sayar. Ayrıntılar [“Hesaplar”](#accounts-screen) makalesinde.

##### Bir alışveriş

Her zamanki gibi kaydedin: hesap — kredi kartı, kategori — ne aldığınız. ₺875’lik market alışverişi yaptınız — “Market” ₺875 inceldi, aynı ₺875 de ödeme için kredi kartının kategorisine geçti. Kendiniz bir şey ayırmanıza gerek yok.

### Başlamadan önceki borç {#scenario-credit-old-debt}

Başlangıçtaki borcu — geçen yıldan kalan karttaki ₺20.000’yi — uygulama ayırmaz: zarflarda onun için hiç para olmadı.

Onun için de, her zarf gibi, kredi kartının kategorisine para ayırın: “Bütçe” ekranında tutarına dokunun ve bu ay ayırabildiğiniz kadarını girin. Bir seferde ya da azar azar — size kalmış. Ayırana kadar onu kapatacak para yoktur.

### Sarı eksi {#scenario-credit-yellow}

Kredi kartıyla zarfta olandan fazlasını harcadınız — tutar kart simgesiyle **sarıya** döndü. Cüzdan simgeli kırmızı ise kendi paranızdan gelen eksidir.

##### Kırmızı paranızı yer

Banka kartında ya da nakitte bir eksi. Ay sonunda gelecek ayın “dağıtılmadı” tutarını azaltır.

##### Sarı borcunuzu büyütür

Para harcamadınız — borç aldınız. Kredi kartının kategorisine yalnızca karşılanan kısım geçti; geri kalanını ödeyecek para yok.

##### Ne yapmalı

Sarı eksiyi kırmızı gibi karşılayın: tutara dokunun → “Başka kategoriden karşıla” → başka bir zarftan “… al”. O zaman ödeme parası kendiliğinden tamamlanır. Yapamadınız mı? Gelecek ay farkı doğrudan kredi kartının kategorisine koyun.

### Kartı ödemek {#scenario-credit-payment}

Bankaya ne kadar ödeyeceğiniz, “Bütçe” ekranında kredi kartının kategorisinde görünür: ödeme için o kadar zaten ayrılmış.

1. “+ İşlem”, hesap — banka kartınız.
2. “Alıcı” → “Transferler” bölümü → kredi kartınız. Formun başlığı griye döner ve kategori gerekmez.
3. Tutar — ne kadar ödediğiniz. Kaydedin.

Banka kartınızdaki para azalır, kredi kartı borcu da azalır, onunla birlikte kredi kartının kategorisinde ayrılan tutar da. Zarflar değişmez: harcamayı daha önce, alışverişleri yaptığınızda yaptınız. Ayrıntılar [“İşlem formu”](#entry-transfer) makalesinde.

*Hepsini mi, asgari ödemeyi mi:*
Kredi kartının kategorisinde tam olarak zarflarınızdan kartla harcadığınız kadar para durur. Her ay ayrılanın tamamını ödeyin, yeni borç birikmez. Yalnızca asgari ödemeyi yapın, geri kalanı kategoride bekler; banka da kalan borca faiz işletir.

### Kart faizi ve ücretler {#scenario-credit-card-interest}

Banka faiz ya da hizmet ücreti mi kesti — bu bir harcamadır.

Bir gider kaydedin: hesap — kredi kartı, alıcı — banka, kategori — ona ait bir kategori, örneğin “Faiz ve ücretler”. Zarf küçülür ve ödeme parası, her alışverişte olduğu gibi ayrılır. Raporlarda da görünür: bu kredinin size neye mal olduğu.

### Kredi {#scenario-credit-loan}

Taşıt kredisi, konut kredisi, taksitli alışveriş — zaten harcadığınız ve parça parça geri ödediğiniz para.

##### Nasıl kurulur

1. “Hesaplar” → “⋮” → “Hesap ekle”.
2. Tür — “Kredi”. Tutar — banka dökümüne göre geri ödenecek kalan, eksi işaretiyle (“±”).
3. Hesap “Borçlar” bölümüne gider. Bütçe dışıdır: bu paranın zarfları yoktur ve bütçe başlangıçtaki borca dokunmaz.

##### Taksit için bir zarf

Aylık taksit için bir kategori oluşturun — örneğin “Sabit giderler” grubunda “Krediler” — ve taksit tutarında bir “Her ay” hedefi. Hedef her ay parayı ayırmanızı hatırlatır. Ayrıntılar [“Hedefler”](#goals-monthly) makalesinde.

### Kredi ödemesi {#scenario-credit-loan-payment}

1. “+ İşlem”, hesap — ödediğiniz kart.
2. “Alıcı” → “Transferler” → kredi hesabı.
3. Kredi bütçe dışıdır, bu yüzden uygulama kategori sorar: “Krediler”i seçin. Para zarftan çıkar, kredi hesabındaki borç azalır.

*Banka taksitin ₺2.000’sinin faiz olduğunu söylüyor:*
Taksitin tamamını yukarıdaki gibi tek bir transfer olarak kaydedin. Sonra ayda bir, faizi kredi hesabının kendisine kaydedin: “Giden”, hesap — kredi, alıcı — banka, tutar — faiz. Kategori gerekmez: hesap bütçe dışıdır. O zaman uygulamadaki borç bankayla tutar, “Krediler” zarfından da tam taksitiniz kadar çıkar.

*Taksit hatırlatması:*
Planlı ödemeyi transfer olarak oluşturun: “Ayarlar” → “Planlı ödemeler” → “+ Ödeme”, “Alıcı” → “Transferler” → kredi hesabı, kategori “Krediler”, “Tekrarla” — “Her ay”. Ödeme iki hesabın ekranında da görünür, hatırlatma önceden gelir, “Onayla” da transferi kaydeder. Kredi kartı ödemesi için de aynısı: banka kartınızdan kredi kartına. Ayrıntılar [“Planlı ödemeler”](#scheduled-new) makalesinde.

### Borcu izlemek {#scenario-credit-watch}

| Nerede | Size ne söyler |
|---|---|
| “Hesaplar” | “KREDİ KARTLARI” ve “Borçlar” bölümleri — şu anda ne kadar borçlu olduğunuz. |
| “Bütçe” → “Kart ödemeleri” | Her kartı kapatmak için ne kadar ayrıldığı. |
| “Raporlar” → “Kart borcu” | Tüm kredi kartlarındaki borç ay ay: küçülüyor mu, büyüyor mu. Kredi kartınız varsa kullanılabilir. |
| “Raporlar” → “Net varlık” | Sahip olduğunuz her şey eksi tüm borçlar. Her kredi ödemesi çizgiyi yukarı taşır. |

Raporlar hakkında daha fazlası [“Raporlar”](#reports-capital) makalesinde.

## Büyük bir şey için birikim {#scenario-saving}

Bir dizüstü bilgisayar, bir tadilat, bir araba, bir evin peşinatı. Azar azar nasıl para ayıracağınız, zamanında yetişip yetişmeyeceğinizi nasıl göreceğiniz ve birikimi yanlışlıkla nasıl harcamayacağınız.

*“Bütçe”, “Hedefler”, kategori ekranı*

### Yalnızca bu alışveriş için bir zarf {#scenario-saving-envelope}

Dizüstü bilgisayar parası geçim parasıyla karışırsa ilk o harcanır. Ayrı bir zarf onu korur: “Dizüstü” içinde durduğu sürece “Market”te görünmez.

1. “Bütçe” ekranında “Büyük alışverişler” ve “Seyahat ve tatil”in bulunduğu grubu bulun.
2. Adının yanındaki “⊕”ya dokunun — yeni bir kategori. Ona alışverişin adını verin: “Dizüstü”.
3. Ya da tek bir alışveriş varsa hazır “Büyük alışverişler”de biriktirin.

Ayrıntılar [“Bütçe”](#budget-screen) makalesinde.

### “Tarihe kadar” hedefi {#scenario-saving-goal}

Uygulamaya ne kadar ve hangi aya kadar olduğunu söyleyin — her ay ne kadar koyacağınızı o hesaplar.

1. “Bütçe” ekranında kategoriye dokunun → “Hedef” kartı → “Hedef ekle”.
2. “Hedef türü” — “Tarihe kadar”.
3. “Tutar” — alışverişin fiyatı, “Şu aya kadar biriktir” — ne zaman gerektiği.
4. “Kaydet”.

Altı ayda ₺60.000’lik bir dizüstü bilgisayar — hedef ayda ₺10.000 ister. Bir ayı kaçırın, eksik kalan tutar geri kalan aylara yayılır ve ödeme büyür. Fazla koyun, sonrakiler küçülür. Ayrıntılar [“Hedefler”](#goals-bydate) makalesinde.

*Son tarih olmadan biriktirmek:*
Bir “Bakiye” hedefi: zarfta bu tutar olmalı, ne zaman olduğu önemli değil. “Bir gün yeni bir araba”ya ve acil durum yastığına uyar. Ayrıntılar [“Hedefler”](#goals-balance) makalesinde.

### Yetişecek miyim {#scenario-saving-pace}

##### Kategori ekranında hızlı bir tahmin

Kategoriye dokunun — “Tarihe kadar” hedefinde çubuğun altında bir anahtar vardır: “Tutara göre” ve “Tarihe göre”. “Aylık ayır”ı oynatın — hangi aya yetişeceğinizi görürsünüz. Ayı oynatın — ne kadar koyacağınızı görürsünüz. Yeni tarih hoşunuza gitti mi? — “Hedef tarihi yap: …”. Ayrıntılar [“Hedefler”](#goals-card) makalesinde.

##### Bu ay eksik

“Bütçe” ekranında tutarın altında bir bayrak ve “… kaldı” var. Listenin üstündeki “Eksik” çipi yalnızca bu kategorileri bırakır. “Özet” ekranında eksik, “Hedefler” ve “Sırada ne var” bloklarında görünür.

### Para nerede {#scenario-saving-where}

Birikim genellikle ayrı bir hesapta tutulur: birikim hesabı, mevduat, kumbara. O hesabı nasıl kurduğunuz, paranın zarfta kalıp kalmayacağını belirler.

##### Bütçede — bir alışveriş için

“Banka hesabı” türünde bir hesap. Vadesiz hesaptan birikime ₺10.000 aktardınız — “Dizüstü” zarfı değişmedi: para yer değiştirdi, ama hâlâ sizin ve hâlâ bütçede. Hedef onu görür ve tekrar istemez. **Bir alışveriş için mi biriktiriyorsunuz? Bu seçeneği seçin.**

##### Bütçe dışı — servet için

“Yalnızca takip” türünde bir hesap: yatırımlar, emeklilik mevduatı. Uygulama oraya yapılan transferi zarftan çıkan para olarak kaydeder — kategori sorar ve zarf boşalır. Bir alışveriş için işe yaramaz: paranız olduğu halde hedef yeniden para ister.

Ayrıntılar [“Hesaplar”](#accounts-kinds) makalesinde.

### Aynı anda birkaç hedef {#scenario-saving-many}

Bir tatil, bir dizüstü bilgisayar ve bayram hediyeleri — bu ay hepsine para yetmeyebilir.

“Bütçe” → “⋮” → “Hedeflere dağıt”. Uygulama “dağıtılmadı”yı aynı anda tüm hedeflere yayar. Hepsine yetmiyor mu? Hedefler parayı sırayla, yukarıdan aşağıya, kategorilerin “Bütçe” ekranında dizildiği gibi alır. Önemli olanı yukarıda tutun: “⋮” → “Sırayı değiştir”. Ayrıntılar [“Hedefler”](#goals-allocate) makalesinde.

### Alışveriş {#scenario-saving-buy}

1. Alışverişi her zamanki gibi kaydedin — “Dizüstü” kategorisinde. Zarf boşalır — zaten bunun için biriktiriyordunuz.
2. Daha ucuza mı geldi? Kalan zarfta kalır. Başka yerde mi lazım? “Bütçe” ekranında “Dizüstü” tutarına dokunun ve daha azını girin: fark “dağıtılmadı”ya döner.
3. Daha pahalıya mı geldi? Tutar kırmızıya döner. Ona dokunun → başka bir zarftan “… al”.
4. Hedefe artık ihtiyacınız yok mu? “Bütçe” → “⋮” → “Hedefler” → kategoriye dokunun → “Sil”. Zarftaki para kalır. Alışverişin kendisinin olduğu kategori silinemez — yalnızca gizlenebilir.

*Kredi kartıyla aldıysanız:*
Bu da olur: “Dizüstü”deki para kartı kapatmak için ayrılır. Krediyle ya da taksitle mi aldınız? Bu bir borçtur; nasıl izleneceği [“Kredi kartları ve borçlar”](#scenario-credit-loan) senaryosunda.

### Ne kadar biriktiriyorum {#scenario-saving-pay-yourself}

“Özet” ekranındaki “Önce kendine öde” bloğu, gelirinizin yüzde kaçını ayırdığınızı gösterir — ay, üç ay ve yıl için. Olağan oran %10’dur. Hangi kategorilerin “biriktirilen” sayılacağını “Ayarlar → Bütçe → Önce kendine öde” içinde seçin: “Büyük alışverişler”, “Dizüstü”, “Kara gün fonu”. Ayrıntılar [“Özet”](#overview-blocks) makalesinde.

## Arkadaşlarla seyahat {#scenario-trip}

Dört kişinin konaklamasını siz ödediniz, akşam yemeğini bir arkadaş ödedi, benzin yarı yarıya, yurt dışında da üstüne başka para biriminde nakit var. Seyahate nasıl biriktireceğiniz, neye mal olduğunu nasıl göreceğiniz ve kimin kime borçlu olduğunu nasıl kaçırmayacağınız.

*seyahatin etiketi, etiket ekranındaki “Hesaplaşma”, işlem formu*

### Seyahatten önce {#scenario-trip-before}

“Tarihe kadar” hedefiyle “Seyahat ve tatil”de biriktirin: tutar harcamayı beklediğiniz kadar, ay da gideceğiniz ay. Aylık katkıyı uygulama hesaplar. Ayrıntılar [“Büyük bir şey için birikim”](#scenario-saving-goal) senaryosunda.

### Seyahat için bir etiket {#scenario-trip-tag}

Seyahat harcamaları farklı kategorilere düşer — “Market”, “Ulaşım”, “Seyahat ve tatil”. Etiket onları bir araya toplar.

1. Seyahatin ilk alışverişinde “Ek bilgiler” → “Etiketler”i açın → bir ad yazın, örneğin “Yunanistan”, → ““…” etiketini oluştur”.
2. Bu etiketi seyahatin her alışverişine koyun.
3. Etiketin “⋮” menüsü → “Etiketlerim'de göster” — seyahatin toplamı “Özet” ekranında olur.

Etiket ekranı “Harcanan” ve “Kategoriye göre”yi gösterir — seyahatin neye mal olduğunu ve paranın nereye gittiğini. Ayrıntılar [“Alıcılar ve etiketler”](#payees-tags-tag) makalesinde.

### Herkes için siz ödüyorsunuz {#scenario-trip-pay-for-all}

Dört kişinin konaklamasını siz ödediniz: ₺20.000. Sizin payınız ₺5.000, kalan ₺15.000 size geri dönmeli.

##### Tutarı kendi payınıza ve arkadaşlarınızın payına bölün

1. ₺20.000’lik alışverişi kaydedin, hesap — kartınız, etiket — “Yunanistan”.
2. “Kategori” → “Tutarı böl”.
3. İlk parça “Seyahat ve tatil”, ₺5.000: bu sizin payınız.
4. İkinci parça da “Seyahat ve tatil”, ₺15.000, ve üzerinde “+ etiket” → yeni bir etiket “Yunanistan: arkadaşlar ödeyecek”.
5. “Yunanistan: arkadaşlar ödeyecek” etiketinin ekranını açın → “⋮” → “Hesaplaşma”.

Artık etiket ekranında “toplanacak ₺15.000” yazar: size borçlu olunan tutar. Bölünmüş tutarlar hakkında daha fazlası [“İşlem formu”](#entry-split) makalesinde.

*Neden tek değil de ikinci bir etiket:*
“Hesaplaşma”, harcanan eksi alınanı hesaplar. Onu “Yunanistan” için açsaydınız kendi payınız da orada “Toplanacak” olarak asılı kalırdı ve hesap hiç kapanmazdı. Yalnızca arkadaşlarınızın payındaki bir etiket, her şey geri ödendiğinde sıfıra iner.

### Arkadaş parayı geri verdi {#scenario-trip-paid-back}

1. “+ İşlem” → “+ Gelen”. Alıcı — arkadaş, tutar — ne kadar geri verdiği, hesap — paranın geldiği yer.
2. “Kategori” → “Bir gider kategorisine…” → “Seyahat ve tatil”. Bu gelir değil — zarfa geri dönen kendi paranızdır.
3. Etiketler — “Yunanistan” ve “Yunanistan: arkadaşlar ödeyecek”.

Üçü de ödediğinde “Yunanistan: arkadaşlar ödeyecek” etiketinin ekranında yeşil renkte “Kapandı” yazar. “Yunanistan” için de “Net”, “Harcanan”dan ₺15.000 az olur — konaklamada tam sizin payınız kalır. Ayrıntılar [“İşlem formu”](#entry-refund) makalesinde.

### Arkadaş ödedi {#scenario-trip-friend-paid}

Akşam yemeğini bir arkadaş ödedi, sizin payınız ₺1.250. Kartınızdan henüz para çıkmadı — kaydedilecek bir şey yok.

Arkadaşınıza ödediğinizde o zaman kaydedin: bir gider, alıcı — arkadaş, kategori — “Seyahat ve tatil”, etiket — “Yunanistan”. Ödeyene kadar borcu aklınızda ya da bir notta tutun — uygulama başkalarının cüzdanını izlemez.

### Yurt dışında {#scenario-trip-abroad}

##### Kendi kartınızla ödemek

Banka parayı kartınızın para biriminde çeker. Bankanın çektiği tutarı kaydedin — bankanın uygulamasında görürsünüz. Gerekirse yerel para birimindeki tutar nota gider: “akşam yemeği 42 €”.

##### Yabancı para biriminde nakit aldınız

Bir “Nakit €” hesabı oluşturun: “Hesaplar” → “⋮” → “Hesap ekle”, tür “Yalnızca takip”, “Hesap para birimi” — €. Yalnızca bütçe dışı bir hesabın kendi para birimi olabilir. Onunla nasıl çalışılacağı aşağıda.

##### Nakit bozdurmak ve harcamak

1. Para bozdurdunuz — kartınızdan “Nakit €”ya bir transfer kaydedin. Alıcının altında “Yatan” ve “Kur” belirir: kaç avro aldığınız.
2. Hesap bütçe dışı, bu yüzden uygulama kategori sorar: “Seyahat ve tatil”. Para daha bozdururken zarftan çıktı.
3. Avro cinsinden nakit harcamaları “Nakit €” hesabına kaydedin — kategori gerekmez, zarf zaten ödedi. Her zamanki gibi “Yunanistan” etiketini ekleyin.
4. Avro kaldı ve geri mi bozdurdunuz? “Nakit €”dan kartınıza bir transfer, “Kategori” → “Bir gider kategorisine…” → “Seyahat ve tatil”. Para zarfa döner.

Para birimleri hakkında daha fazlası [“Birkaç para birimi ve özel durumlar”](#scenario-currencies) senaryosunda.

### Seyahatten sonra {#scenario-trip-after}

- “Yunanistan” etiketinin ekranı: “Net”, tüm geri ödemelerden sonra seyahatin size neye mal olduğudur, “Kategoriye göre” de paranın nereye gittiğini gösterir. Bir sonrakine biriktirirken işe yarar. Avro harcamaları ayrı bir satırdadır: kurla dönüştürme yoktur, bozdurmanın kendisi de bir transferdir, bu yüzden “Harcanan”da değildir.
- Etikete seçimde artık ihtiyacınız yok mu? Etiketin “⋮” menüsü → “Seçimden gizle”. İşlemlerde kalır.
- “Seyahat ve tatil”de para mı kaldı? Bir sonraki tatile kadar dursun: artı aydan aya devreder.

## Birkaç para birimi ve özel durumlar {#scenario-currencies}

Maaşınız bir para biriminde, birikiminiz bir başkasında, biraz bitcoin ve yurt dışı seyahatleri. Uygulama para birimleriyle neler yapabilir, sınırlar nerede ve zarflar yalan söylemesin diye hesaplarınızı nasıl tutmalısınız.

*“Ayarlar” → “Bütçe para birimi”, bütçe dışı hesaplar, kurlu transfer*

### Ana kural {#scenario-currencies-rule}

**Bir bütçenin tek bir para birimi vardır.** Tüm zarflar, tüm bütçe hesapları ve “dağıtılmadı” bu para birimindedir. Diğer para birimleri **bütçe dışı** hesaplarda yaşar: orada ne kadar olduğunu görürsünüz, ama bu para zarflara bölünmez.

*Neden böyle çalışıyor:*
Zarf “yiyeceğe ne kadar harcayabilirim” sorusunu yanıtlar. İçinde hem lira hem avro olursa yanıt kurla birlikte her gün değişir. Zarflarda tek para birimi — ve yanıt her zaman aynıdır.

### Bütçe para birimi {#scenario-currencies-budget-currency}

“Ayarlar” → “Bütçe” → “Bütçe para birimi”. Listede altmış para birimi var, geçerli olan ilk satırda, üstte de ada ve simgeye göre arama: “zloty”, “Złoty”yi bulur.

Yalnızca simge değişir — uygulama tutarları dönüştürmez. Bütçenizi lira cinsinden tuttuysanız ve avroyu seçerseniz ₺1.000, €1.000 olur. Bu yüzden para birimi hesapların ortasında değil, başta seçilir.

*Her para birimi için bir bütçe:*
Her bütçenin kendi para birimi vardır. İki ülke arasında mı yaşıyorsunuz? İki bütçe tutabilirsiniz: lira cinsinden “Ev” ve avro cinsinden “Berlin”. “Özet” başlığındaki bütçe adına dokunun — orada bütçe değiştirici ve yeni bütçe var; oluştururken para birimi sorulur.

### Başka para biriminde bir hesap {#scenario-currencies-foreign-account}

1. “Hesaplar” → “⋮” → “Hesap ekle”.
2. Tür — “Yalnızca takip” (borçsa “Kredi”). Yalnızca bütçe dışı bir hesabın kendi para birimi olabilir.
3. “Hesap para birimi” bölümünde “Para birimi” alanına dokunun — bütçedekiyle aynı, altmış para birimlik bir liste açılır: geçerli olan ilk satırda, üstte ada ve simgeye göre arama. Adlar ülkenin kendi dilindedir: “zloty”, “Złoty”yi bulur.
4. Kripto para — alanın altındaki çipler: ₿, USDT, USDC.
5. Orada yok mu? “Ya da kendinizinkini yazın (kod)” içine kendiniz yazın: ETH, bir hisse ya da fon kodu. Hesabın tutarları onunla etiketlenir.
6. Tutar — hesapta o para biriminde ne kadar olduğu.

Hesap, kendi simgesiyle tutarlarla “BÜTÇE DIŞI” bölümüne gider: “€1.200,00”. Ayrıntılar [“Hesaplar”](#accounts-kinds) makalesinde.

### Döviz bozdurma {#scenario-currencies-exchange}

Lirayla avro mu aldınız? Bu, kendi hesaplarınız arasında bir transferdir, yalnızca kurlu.

1. “+ İşlem”, hesap — lira kartınız, “Alıcı” → “Transferler” → avro hesabı.
2. Tutar — kaç lira çıktığı.
3. Alıcının altında “Yatan” ve “Kur” vardır. Ya kuru ya da kaç avro geldiğini girin — diğeri hesaplanır. Kurun yanındaki düğme yönünü çevirir: bir avro başına lira ya da bir lira başına avro.
4. Avro hesabı bütçe dışıdır — uygulama kategori sorar: paranın hangi zarftan çıktığı. Örneğin “Kara gün fonu” ya da “Yatırımlar”.

Ayrıntılar [“İşlem formu”](#entry-transfer) makalesinde.

*Avroyu geri sattınız:*
Avro hesabından kartınıza bir transfer. “Kategori” alanı “Gelir nereye yazılsın”ı açar: dağıtılacak yeni paraysa “… için gelir”, çıktığı zarfa geri dönüyorsa “Bir gider kategorisine…”.

### Bir ülkede yaşayıp başkasında biriktirmek {#scenario-currencies-two-countries}

Bütçe, maaşınızı aldığınız ve her gün harcadığınız para birimindedir: lira, avro, sterlin. Memleketteki para, başka para birimindeki bir mevduat, “kara gün” için kenara konmuş dolar — her biri kendi para biriminde bütçe dışı hesaplardır. Zarflar geçindiğiniz parayı sayar, gerisi “Hesaplar” ekranında yanlarında görünür.

Yurt dışındaki kart harcamalarını, bankanın kartınızın para biriminde çektiği tutarla kaydedin. Gerekirse yerel para birimindeki tutar nota gider. Ayrıntılar [“Arkadaşlarla seyahat”](#scenario-trip-abroad) senaryosunda.

### Kripto para {#scenario-currencies-crypto}

Bütçe dışı bir hesap, “Para birimi” alanının altındaki ₿, USDT ya da USDC çipi — ve “Kripto para” anahtarı kendiliğinden açılır: “8 ondalık basamak”. Kendi kodunuz (ETH, SOL) için elle açın. Listeden normal bir para birimi mi seçtiniz? Anahtar kapanır.

Ondalık basamak sayısı bir kez seçilir: hesapta işlemler olduğunda anahtar “Değiştirilemez: hesapta işlemler var” der.

### Kuruşsuz para birimleri {#scenario-currencies-no-cents}

Yen, won ve dong’un alt birimi yoktur, ama uygulama yine de “,00” gösterir. Bu yalnızca görünüştür: tam sayıları her zamanki gibi yazın. “Virgülle” girişte 1500, 15,00 değil 1.500’dür. Tutarların nasıl yazıldığı — “Ayarlar” → “Dil ve biçimler” → “Tutar girişi”.

### Tutarlar nasıl yazılır {#scenario-currencies-format}

“Ayarlar” → “Dil ve biçimler” → “Tutar biçimi”: binlik ve ondalık ayırıcılar, para birimi simgesinin solda ya da sağda olması. Varsayılan olarak arayüz dilini izler: Türkçede “₺1.234,56”. Hindistan’dan bir telefonda İngilizce, hemen lakh ve crore olarak gösterilir: “₹12,34,567.89”. Ayrıntılar [“Ayarlar”](#settings-formats) makalesinde.

### Eksik olanlar {#scenario-currencies-not-yet}

- **İnternetten döviz kurları.** Döviz kurunu siz, bozdururken girersiniz. Bu aynı zamanda bir korumadır: uygulama hiçbir hizmetten kur istemez, böylece dışarıdan kimse paranızın hangi para birimlerinde olduğunu öğrenmez. Verileriniz sizde kalır — [gizlilik politikası](#settings-s-about) da bunu söyler.
- **Tek bir para birimine dönüştürme.** “Net varlık” yalnızca bütçe para birimindeki hesapları toplar: avro hesabı dahil edilmez. “Hesaplar” ekranında, başka para biriminde hesabı olan bir bölüm toplam göstermez — lirayla avroyu toplamanın yolu yoktur.
- **Başka para biriminde bütçe hesapları.** Neden — [yukarıda](#scenario-currencies-rule).

## Özet {#overview}

Açılıştaki ilk ekran: para yetiyor mu, acil olan ne, sırada ne var — tek bir kart akışında.

*Ekranın altında, ortadaki “Özet” sekmesi*

### Bu ekran ne için {#overview-why}

“Özet”, uygulamayı her açışınızda ilk açılır. Paranıza sabah bakışıdır: her şey yolunda mı, ne azalıyor, sırada ne var. Burada para paylaştırmaz, işlem düzeltmezsiniz — bunun için “Bütçe” ve “İşlemler” var. Burada bakar ve sonra nereye gideceğinize karar verirsiniz.

##### Her şey yolunda mı

Dağıtılmamış para var mı, eksi nerede, hangi zarflar ayın ilerleyişinden hızlı boşalıyor.

##### Ne oldu bile

Son işlemler, büyük harcamalar, harcama günlerinin takvimi.

##### Sırada ne var

Planlı ödemeler, parası eksik hedefler ve bu ayın harcamalarının olağana göre durumu.

Uygulamayı yarım dakikadan uzun küçültün; döndüğünüzde yine “Özet” açılır. Kaldığınız yere dönmeyi tercih ediyorsanız bunu “Ayarlar → Görünüm → Dönüş yeri” içinde seçin.

### Ekranda ne nerede {#overview-screen}

Tam ekran açmak için herhangi bir ekran görüntüsüne dokunun.

[“Özet” ekranı: başlık, “Dağıtılmadı” ve “Paranın yaşı” çipi, “Son işlemler”, “Tükeniyor”]

1. **Ayarlar** — dişli çark. Uygulamanın tüm ayarları: eşitleme, yedekler, görünüm, dil.

2. **Bütçe adı** — bütçe listenizi açıp başka birine geçmek için dokunun.

   *Nasıl çalışır:*
   Birkaç bütçeniz olabilir: örneğin kişisel ve aile ya da silmek istemediğiniz eski bir bütçe. Bütçe oluşturmak, yeniden adlandırmak ya da silmek için — “⋮” menüsü → “Bütçeler” ([aşağıda](#overview-menu)).

3. **Eşitleme** — daire içinde iki ok. Dokunun — değişiklikleriniz buluta gider, diğer cihazların değişiklikleri buraya gelir.

   *Nasıl çalışır:*
   Simgedeki sayı, kaç değişikliğin henüz gönderilmediğidir. Eşitlemeden hemen sonra simge 15 saniye yanıp söner: yeşil — oldu, kırmızı — olmadı. Parmağınızı üstünde tutun, uygulama ne olduğunu söyler.

   Tek bir başarısızlık genellikle ağdır: metro, dağ evi. Art arda dört kez başarısız olursa simge, eşitleme geçene kadar içinde “!” ile kırmızı kalır. Bulut bağlı değil — simge olağan renginde, sayısız.

4. **“⋮” menüsü** — bütçeler, blok seçimi, “Tutarları gizle”. [Aşağıda](#overview-menu) anlatılıyor.

5. **“Dağıtılmadı”** — hesaplarınızda olan ama henüz zarflara bölünmemiş para. Dokunun, uygulama nasıl dağıtacağınızı önerir.

   *Nasıl çalışır:*
   Yazı sayıyla birlikte değişir:

   - **“Dağıtılmadı”** — dağıtılacak para var. Ekran görüntüsünde ₺7.500: maaş geldi, Kasım ayının zarfları da zaten dolu.
   - Yeşil **“Tümü dağıtıldı”** — her liranın bir görevi var. Hedef bu.
   - Kırmızı **“Fazla dağıtıldı”** — zarflara hesaplarda olandan fazlası kondu. Fazlasını “Bütçe” ekranında bir kategoriden geri alın.

   Yalnızca dağıtılacak bir şey olduğunda dokunulabilir. “Bütçeyi otomatik dağıt” sayfası açılır: “Tüm aşımları karşıla”, “Eksik”, “Geçen ay dağıtılan” ve başka yollar. Her birinin yanında ne kadar gerektiği yazar. Onaylayana kadar hiçbir şey değişmez. Zarflar hakkında daha fazlası — [“Bütçe”](#budget) makalesinde.

6. **“Paranın yaşı”** — paranızın, siz harcamadan önce ortalama kaç gün beklediği.

   *Nasıl çalışır:*
   Ekran görüntüsünde 52 gün: bugün harcadığınız para size neredeyse iki ay önce geldi. Uygulama son on gideri alır ve her birini hangi gelirin ödediğine bakar — önce en eski para harcanır.

   30 günün altı — maaştan maaşa yaşıyorsunuz ve maaştaki her gecikme bütçeyi vurur. 30’un üstü — geçen ayın parasını harcıyorsunuz, yeni maaş da sakin sakin sırasını bekliyor. Eksi — bütçe hesaplarında olandan fazlası harcandı. Simgedeki kum saati de aynı şeyi söyler: dolu — 30 gün ya da daha fazla, yarı boş — daha az, boş — eksi.

   Yaş üç şekilde hesaplanabilir ve 30 günden itibaren geçen ayın parasıyla yaşamak anlamlıdır. Bunların hepsi — [aşağıda](#overview-age).

7. **Bloklar** — alt alta özet kartları. Hangilerinin gösterileceği ve hangi sırayla, size kalmış. Her blok [aşağıda](#overview-blocks) anlatılıyor.

8. **“+ İşlem”** — bir harcama ya da gelir kaydedin. Üstünde — kamera (QR koduyla fiş) ve mikrofon (sesle). Aşağı kaydırın, düğmeler tek bir “+”ya katlanır.

   *Nasıl çalışır:*
   Bu, [“İşlemler”](#transactions) ekranındakiyle aynı formdur: her sekmeden ona bir yol vardır.

### Sırayla bloklar {#overview-blocks}

“Dağıtılmadı” çipinin (5 ve 6 numaralı açıklamalar) altında kartlar gelir. Burada kurulumdan hemen sonraki sıralarındalar. Gösterecek bir şeyi olmayan blok kendini gizler: etiket yok — “Etiketlerim” yok, hedef yok — “Hedefler” yok.

Bir bloğu kaldırmak, geri getirmek ya da yukarı taşımak için — “⋮” → “Widget’lar” ([aşağıda](#overview-menu)).

[“Özet” ekran görüntüsünde “Son işlemler” bloğu]

#### Son işlemler

Son beş kayıt: tarih, alıcı, tutar, kategori ve not. Dünden her şeyin kaydedildiğini kontrol etmek için kullanışlı.

*Nasıl çalışır:*
Gelirde “+”, harcamada “−” işareti vardır. Bölünmüş bir tutarın (ekran görüntüsünde “Gratis”) yanında bir çatal simgesi bulunur, kategorileri de noktalarla ayrılarak listelenir. Ekran görüntüsünde iki gelen tutar var: bir maaş ve Ahmet’ten ₺1.075 — bir arkadaş “Gratis”teki yarısını geri ödedi. Bu gelir değil, “Market”e bir iadedir (nasıl kaydedileceği — [“İşlem formu”](#entry) makalesinde).

Buradaki satırlara dokunulamaz. Bir işlemi düzeltmek için [“İşlemler”](#transactions) ekranını açın.

[“Özet” ekran görüntüsünde “Aşımlar ve uyarılar” bloğu]

#### Aşım ve “Tükeniyor”

Şu anda ilgi isteyen zarflar. O kategorinin ekranını açmak için bir satıra dokunun.

*Nasıl çalışır:*
- Kırmızı **“Aşım”** — kategori eksiye düştü: ayırdığınızdan fazlasını harcadınız. Cüzdan simgesi, kendi paranızdan gelen bir eksi demektir; gelecek ayın “dağıtılmadı” tutarından alır. Kart simgesi ve sarı renk, kredi kartındaki bir eksi demektir: paranızı yemek yerine kart borcuna dönüştü. Eksiyi kapatmak için — [“Bütçe”](#budget) ekranı.
- Sarı **“Tükeniyor”** — zarfta hâlâ yeterli para var, ama ayın ilerleyişinden hızlı harcıyorsunuz. Uygulama ayın planını günlere eşit böler ve %15 pay bırakır. Ekran görüntüsünde bugün 10 Kasım, “Market”e de payla birlikte bile bu tarihe kadar gerekenden fazlası harcandı.
- **“Her şey kontrol altında”** — eksi yok, uyarı yok. Blok boş kalmak yerine bunu gösterir.

Tam olarak sıfır kalan kategoriler burada görünmez: plan kuruşu kuruşuna tuttu.

[“Özet” ekran görüntüsünde “Para nereye gitti” bloğu]

#### Para nereye gitti

Ayın en pahalı beş kategorisi: tutar, tüm harcamalardaki yüzdesi ve aynı uzunlukta bir çubuk.

*Nasıl çalışır:*
Ekran görüntüsünde “Kira”, Kasım ayı harcamalarının %76’sı: kira ayın 1’inde bir seferde ödenir, diğer harcamalar ise gün gün birikir. Ay sonuna doğru yüzdeler dengelenir.

Geçen ayı görmek için kartı parmağınızla sağa, sonraki için sola kaydırın. Geçerli aya dönmek için — başka bir aya geçtiğinizde kartın başlığında beliren “Bugün” çipi.

[“Özet” ekran görüntüsünde “Sırada ne var” bloğu]

#### Sırada ne var

En yakın planlı ödemeler ve parası eksik hedefler — tarihe göre en fazla altı satır.

*Nasıl çalışır:*
Planlı ödemede takvim simgesi, hedefte bayrak vardır. Ekran görüntüsünde iki hedef var: “Kara gün fonu”na Kasım ayı sonuna kadar ₺28.114 eksik, “Seyahat ve tatil”e — ₺2.500. Sarı tutar, daha ne kadar konulması gerektiğidir.

Satırlara dokunulamaz: bir kategoriye para koymak için — [“Bütçe”](#budget) ekranı, planlı ödemeler için — “Ayarlar → PLANLAMA”.

[“Özet” ekran görüntüsünde “Ay bütçesi” bloğu]

#### Ay bütçesi

“Dağıtılmadı” sayısının nereden geldiği: geçen ayın bakiyesinden toplama bir merdiven.

*Nasıl çalışır:*
Bir fiş gibi yukarıdan aşağıya okuyun:

- **Ekim ayından devir** — geçen ay ne kadarının dağıtılmadığı.
- **Kasım bütçesi** — bu ayın geliri: ekran görüntüsünde ₺35.000’lik iki maaş.
- **Kasım ayında dağıtılan** — ne kadarının zarflara bölündüğü.
- **Dağıtılmadı** — toplam, ekranın üstündeki çipteki sayının aynısı.

Çizginin altında “Plan” var: Aralık için şimdiden ne kadar olduğu, aylık ortalama gelir ve hedeflerinizin ayda ne kadar istediği, gelirin yüzdesiyle. Bazen başka satırlar da çıkar — geçen ayın aşımı, birikimden gelen para, ileriye ayrılan para; blok boş satırları gizler.

Kart iki yöne de kaydırılabilir, ileriye de: Aralık ayı için parayı daha Kasım ayında dağıtabilirsiniz.

[“Özet” ekran görüntüsünde “Net varlık” bloğu]

#### Net varlık

Sahip olduğunuz her şey eksi borçlar — ve nasıl değiştiği.

*Nasıl çalışır:*
Büyük harflerle — bugünkü net varlığınız: ekran görüntüsünde ₺305.227. Sağda — dönem içinde ne kadar büyüdüğü (6 ayda +₺108.587), altında — aylara göre bir çizgi ve bir döküm: “Varlıklar” (artıdaki tüm hesaplar) ve “Borçlar” (kredi kartları ve krediler).

Bloğun “⋮” menüsünde: dönem — 6 ay, 12 ay, bu yıl ya da tüm zamanlar — ve “Diğer para birimlerindeki hesaplar”: bu hesaplar kendi para birimlerinde, dönüştürme olmadan ve genel toplamın dışında ayrı satırlar olarak görünür.

**Kurulumdan hemen sonra:** blok kapalıdır; “⋮” → “Widget’lar” içinde açın.

[“Özet” ekran görüntüsünde “Hedefler” bloğu]

#### Hedefler

Bu ay kaç kategori hedefinin gerisinde ve ne kadar. “Hedefler” ekranını açmak için dokunun.

*Nasıl çalışır:*
Ekran görüntüsünde iki hedefin toplam ₺30.614 eksiği var. Hedefler kategori ekranında ya da “Hedefler” ekranında belirlenir: “Her ay ayır”, “… tarihine kadar biriktir”, “Bakiyede tut”, “Gelirden yüzde” ya da “liste”.

[“Özet” ekran görüntüsünde “Önce kendine öde” bloğu]

#### Önce kendine öde

Gelirinizin yüzde kaçını gelecekteki kendiniz için ayırdığınız — bir ay, üç ay ve bir yıl boyunca.

*Nasıl çalışır:*
Kural eski ve basittir: her maaştan önce kendinize ödeyin, ancak sonra herkese. Olağan oran gelirin %10’udur.

Ekran görüntüsünde Kasım ayında %11,2 ayrıldı — olağanın ₺850 üzerinde. Olağanın altındaysa yüzdenin altında bir tutarla birlikte “eksik” yazar.

Hangi kategorilerin “biriktirilen” sayılacağı sizin seçiminiz: “Ayarlar → Bütçe → Önce kendine öde”. Genellikle birikimlerdir: “Kara gün fonu”, “Yatırımlar”. Hiçbiri seçili değilse blok olmaz.

[“Özet” ekran görüntüsünde “Büyük harcamalar” bloğu]

#### Büyük harcamalar

Ayın en büyük üç gideri — tarih, alıcı, tutar, kategori ve not.

*Nasıl çalışır:*
Göze batanı yakalamaya yardım eder: beklenmedik derecede pahalı bir alışveriş ay sonunda değil, hemen görünür.

**Kurulumdan hemen sonra:** blok kapalıdır; “⋮” → “Widget’lar” içinde açın.

[“Özet” ekran görüntüsünde “Takvim” bloğu]

#### Takvim

Bir gün ızgarası olarak ay: hücre ne kadar parlaksa o kadar çok harcanmış. O gün ne olduğunu görmek için bir güne dokunun.

*Nasıl çalışır:*
Modları ve menüsüyle ayrıntılı bakış — [aşağıda](#overview-heatmap).

[“Özet” ekran görüntüsünde “Etiketlerim” bloğu]

#### Etiketlerim

En fazla dört etiket: altlarında ne kadar harcandığı, hangi zaman aralığında ve kaç işlem.

*Nasıl çalışır:*
“Hesaplaşma” açık bir etiket, sağda denkleşmek için ne kadar toplanacağını ya da geri verileceğini gösterir: ekran görüntüsünde “#yarı yarıya” etiketinde “toplanacak ₺1.075,00” yazıyor: “Gratis”teki bir alışveriş bir arkadaşla bölündü, o da yarısını zaten geri ödedi. Ekranını açmak için bir etikete dokunun. Bloğun altındaki “Tüm etiketler ›” — listenin tamamı.

Bloğun “⋮” menüsünde: “Etiket seç…” — hangi dördünün ve hangi sırayla gösterileceği; ve dönem — “Tüm süre toplamı” ya da “Bu ayın toplamı”. Hiçbir şey seçmezseniz uygulama son 30 günde işlemi olan etiketleri kendisi gösterir. Etiket yok — blok yok.

Etiketlerin kendisi hakkında — [“İşlemler”](#transactions) makalesinde.

[“Özet” ekran görüntüsünde “Ayın harcamaları” bloğu]

#### Ayın harcamaları

Ayın başından beri ne kadar harcadığınız — bu tarihe kadar genelde ne kadar harcadığınıza karşı.

*Nasıl çalışır:*
Büyük harflerle — ayın 1’inden beri harcanan: ₺40.526. Sağda — olağandan fark: +₺1.497, yani olağandan biraz fazla. Parlak çizgi bu ay, ince olan olağan.

“Genelde”, son bir yıldaki geçmiş aylarınızın ortasıdır: alışılmadık derecede pahalı tek bir ay onu kaydırmaz. Kart “Para nereye gitti” gibi kaydırılabilir.

### Ayrıntılı takvim {#overview-heatmap}

“Özet” ekranının en canlı bloğu: bütün bir ay tek kartta. Gözünüzü üzerinde gezdirin — hangi günlerin pahalı olduğunu, hangilerinin hiç harcama olmadan geçtiğini görürsünüz.

[“Takvim” bloğu: Harcama, Gelir, Planlanan çipleri, Kasım ızgarası, bugün — 10. gün, “3 gün harcamasız”]

(E)
#### Modlar

Neyin renkleneceği: “Harcama”, “Gelir” ya da “Planlanan”.

*Nasıl çalışır:*
- **“Harcama”** — altı ton. En parlak hücre ayın en pahalı günüdür, her basamak aşağı yarısı kadardır. Parlaklık, “bu gün en pahalı günden kaç kat ucuzdu” sorusunu yanıtlar.
- **“Gelir”** — aynısı, gelen para için, yeşille.
- **“Planlanan”** — planlı ödemelerin vadesi gelen günler. Her şeyin girildiği geçmiş bir gün onay işareti alır; bir ödemenin kaçırıldığı günün numarası kırmızıdır.

“Harcama” modunda planlı ödemesi olan gelecekteki bir günün çevresi kesikli çizgiyle çizilir.

(F)
#### Takvim menüsü

Kartın başlığında, ayın sağında üç nokta. Izgarada başka neyin çizileceğini ve gün sayfasında neyin gösterileceğini ayarlar.

*Nasıl çalışır:*
**Gün sayfası** bir menü maddesi değildir. Takvim ızgarasında bir sayıya dokunduğunuzda açılır: o gün ne olduğunun listesi aşağıdan kayarak gelir (ekran görüntüsü [aşağıda](#overview-day)). Menü yalnızca o sayfanın neleri içereceğini ayarlar.

“Harcama” modundaki maddeler:

- **“Gelirler nokta olarak”** — para gelen bir gün, hücresinde yeşil bir nokta alır.
- **“Gün sayfasında tüm gün”** — bir sayıya dokunun, gün sayfası yalnızca harcamaları değil o günün gelirini de gösterir: en altta katlanmış bir satır olarak; açmak için dokunun. Kapalı — sayfa yalnızca harcamaları gösterir.

“Planlanan” modunda maddeler farklıdır: gelecekteki ödemeleri hücre dolgusu ya da nokta olarak göstermek ve kaçırılmış ödemesi olan günün numarasının kırmızıyla vurgulanıp vurgulanmayacağı.

**Kurulumdan hemen sonra** “Gelirler nokta olarak” ve “Gün sayfasında tüm gün” kapalıdır.

(G)
#### Bugün

Bugünün çevresi çizilidir.

*Nasıl çalışır:*
Başka bir ayı görmek için takvimi parmağınızla kaydırın, geriye ve ileriye sınırsız: bir tarihin haftanın hangi gününe düştüğünü görebileceğiniz normal bir takvim işini de görür. Geri dönmek için — kartın başlığındaki “Bugün” çipi.

(H)
#### Harcamasız günler

Ayın kaç gününün tek bir gider olmadan geçtiği. Sağda — parlaklık ölçeği.

*Nasıl çalışır:*
Geçmişteki boş bir hücre, harcamasız bir gündür. O gün olan tek şey bir mağazadan iadeyse, dolgu yerine boş bir halka vardır.

#### Gün sayfası: takvimde bir sayıya dokunun {#overview-day}

Aşağıdan bir sayfa kayarak gelir: başlıkta tarih ve günün toplamı, altında her işlem. Bölünmüş bir tutar parçalar halinde gösterilir: ekran görüntüsünde “Gratis” — market için ₺1.525 ve temizlik ürünleri için ₺625.

[10 Kasım için gün sayfası: toplam −₺1.075,00, “Gratis”teki alışverişin iki parçası, Ahmet’in iadesi]

Nasıl açılır: “Özet” ekranında “Takvim”i bulun ve istediğiniz günün sayısına dokunun — yukarıdaki ekran görüntüsünde bu, “bugün” olarak çevresi çizili olan 10’dur (G). Sayfa takvimin renklendirdiğini gösterir: “Harcama” modunda — günün harcamalarını, “Gelir” modunda — gelen parayı. İkisini birden görmek için takvim menüsünde “Gün sayfasında tüm gün”ü açın (F). Sayfayı kapatmak için aşağı kaydırın ya da dışına dokunun.

“Planlanan” modunda sayfa farklıdır: neyin girilmediği, neyin girildiği ve neyin hâlâ ileride olduğu. Bir vadeyi sola kaydırın — “Kayda geçir”, sağa — “Sil”.

### Paranın yaşı ayrıntılı {#overview-age}

Çipteki sayı şu soruyu yanıtlar: param, ben onu harcamadan önce kaç gün bekledi. Maaşınız 1 Ekim’de geldi, 5 Kasım’da da ekim parasından kalanla ekmek alıyorsunuz — o para 35 günlüktür. Uygulama son on gideri alır, her biri için onu hangi gelirin ödediğini bulur (önce en eski para) ve ortalamayı gösterir.

##### 30 günün altında

Maaştan maaşa: bugünün harcamaları son maaştan ödenir ve her gecikme hemen vurur.

##### 30 ya da daha fazla

Bir ay önde: geçen ayın parasını harcıyorsunuz. Yöntemin amacı bu — [sonra ne yapmalı](#overview-age-month).

##### Eksi

Bütçe hesaplarında olandan fazlası harcandı.

#### Üç hesaplama yolu {#overview-age-modes}

Paranın yaşı tartışmalı bir ölçüdür ve bunun tek bir doğru formülü yoktur. Bu yüzden yol size kalmış: “Ayarlar → Bütçe → Paranın yaşı”. Sayı hemen değişir — hem çipte hem de “Paranın yaşı” raporunda.

##### Klasik (YNAB FIFO) · kurulumdan hemen sonra

YNAB yolu. Transferleri hiç görmez — ne birikime ne de birikimden. Paranızın olmadığı harcama, yüz lira da olsa on bin lira da olsa tam −1 gün ağırlığındadır.

Birikimlerinize dokunmuyorsanız iyidir: o zaman dürüsttür ve YNAB ile örtüşür. Birikimden transferlerle yaşıyorsanız kötüdür: vadesiz hesaba para gelir, o bunu görmez ve neşeli artı günler çizer. Gerçek bir bütçede hesaplar ₺75.000 eksideydi, “Yatırımlar”dan transferlerle karşılanıyordu — Klasik ise +10 gün gösterdi.

##### Birikimleri hesaba katarak · gerçeğe en yakın

Birikimden transfer bütçeye giren paradır, birikime transfer bütçeden çıkan paradır. Elinizdekinin ötesinde yapılan harcama gelirinizin günleriyle ölçülür: elinizdekinin ötesinde bir haftalık gelir harcadınız — yaklaşık eksi 7 gün.

Sonuç son 10 giderin ortalamasıdır, bu yüzden karşılanmış giderler arasındaki eksideki tek bir gider yumuşatılır.

##### Birikimleri hesaba katarak, borç derinliğiyle

Bütçe artıdayken bir öncekiyle aynıdır. Ama eksideyken ortalamayı değil, çukurun derinliğini gösterir: onu kapatmak olağan gelirinizin kaç gününü alacak.

Bu artık bir yaş değil, bir alarm sinyalidir. Eksiden çıkarken kullanışlıdır: sayı her maaşla dürüstçe küçülür.

##### Hangisini seçmeli

Gerçeğe en yakın olan **“Birikimleri hesaba katarak”**tır: bütçe hesaplarınızdaki parayı, birikimden gelen ve birikime giden her şeyle birlikte tam olarak sayar. Klasik, yalnızca birikimlere dokunmadığınız sürece dürüsttür. Borç derinliği, şu anda eksidekiler ve ne kadar kaldığını görmek isteyenler içindir. Birikime para aktarıp geri almıyor ve elinizdekinden fazlasını harcamıyorsanız üçü de aynı sayıyı gösterir.

#### 30 gün ya da daha fazla yaş: geçen ayın parasıyla yaşayın {#overview-age-month}

Harcamalarınız zaten son maaşla ödendiğine göre bu ayın şimdiki maaşa ihtiyacı yok. Onu doğrudan gelecek aya verin: o zaman her ay hazır parayla başlar ve maaş gününü beklemek yerine parayı önceden dağıtırsınız.

##### Nasıl yapılır

1. Maaşı her zamanki gibi kaydedin: “+ İşlem” → “+ Gelen”, alıcı, tutar.
2. “Kategori” alanına dokunun. “Gelir nereye yazılsın” sayfası açılır.
3. “Aralık için gelir”i — gelecek ayı — seçin, “Kasım için gelir”i değil. Kaydedin.

İşlemin tarihi gerçek tarih olarak kalır — paranın geldiği gün. Yalnızca göründüğü bütçe ayı değişir. Zaten kaydettiğiniz bir maaş da aynı şekilde taşınır: açın ve kategorisini değiştirin.

##### Hangi maaşla başlamalı

Henüz zarflara bölmediğiniz maaşla. Onu taşımak, bu ayın “dağıtılmadı” tutarını maaş kadar azaltır. Bundan sonra kırmızı bir “Fazla dağıtıldı” görünüyorsa, o para bu ay zaten çalışıyordur: maaşı bu aya geri alın ve bir sonrakini taşıyın.

##### Bütçe nasıl değişir

- **Bu ay** daha önce gelenle yaşar. Yeni maaş artık onun “dağıtılmadı” tutarına düşmez.
- **Gelecek ay** parasını önceden alır. “Bütçe” ekranında “›” okuyla ileri gidin — maaş zaten onun “dağıtılmadı” tutarındadır ve zarfları ayın 1’inden önce doldurabilirsiniz. “Özet” ekranında, “Ay bütçesi”nde çizginin altında — “Aralık bütçesi” satırı.
- **Ayın 1’inde** bütün ay zaten ödenmiştir. Para her ödemeden sonra parça parça değil, ayın başında bir kez dağıtılır. Otomatik dağıtımdaki “Geçen ay dağıtılan” bunu tek dokunuşla yapar.
- Ayın gelirine dayanan **“% gelir” hedefleri** ilk günden bellidir: ayın geliri geçen ay geldi.
- **Raporlar** (“Gelirler ve giderler”, “Önce kendine öde”) böyle bir maaşı ayrıldığı ayda sayar.
- **Paranın yaşının kendisi** bu işaretten büyümez: kazandığınızdan az harcadığınızda büyür. İşaret yedeği sabitler — gelecek ayın parası bu aya karışıp erimez. Ayı gelene kadar böyle bir gelir yaşa sayılmaz.

### “⋮” menüsü {#overview-menu}

Bütçeler, “Özet”in görünümü ve görüntüleme modu.

[“Özet” ekranının “⋮” menüsü: Bütçeler, Widget’lar, Tutarları gizle, İpuçları, Bilgi bankası]

(A)
#### Bütçeler

Bütçelerle ilgili her şey tek bir sayfada.

*Nasıl çalışır:*
“Yeni bütçe oluştur”, “Bütçe seç”, “Bütçeyi sil”. Kalan son bütçe silinemez — uygulamanın en az birine ihtiyacı vardır. Yalnızca başka bir bütçeye geçmek için ekranın üstündeki ada dokunmak daha hızlıdır.

(B)
#### Widget’lar

“Özet” ekranında hangi blokların ve hangi sırayla gösterileceği.

*Nasıl çalışır:*
Onay işareti — blok gösterilir, boş — gizlidir. Bir bloğu yukarı ya da aşağı taşımak için sağdaki tutamaktan sürükleyin. Ayar bu cihazda yaşar: tablette “Özet” telefondakinden farklı görünebilir.

(C)
#### Tutarları gizle

Sayılar yerine noktalar. Ekranı başka birinin görebildiği an için.

*Nasıl çalışır:*
Telefonu birine çevirdiniz, destek için ekran görüntüsü alıyorsunuz, video kaydediyorsunuz — açın, tüm ekranlardaki tutarlar “••••” olur. “+” ya da “−” işareti kalır: paranın hangi yöne gittiğini söyler, ama ne kadar olduğunu değil. Çubuklar, grafikler ve renkler olduğu gibi kalır.

Mod açıkken “Özet” başlığında üstü çizili bir göz vardır — tutarları geri getirmek için dokunun. Ya da aynı “⋮” menüsünde — madde artık “Tutarları göster” adını taşır. Mod uygulamanın yeniden başlatılmasından sonra da sürer.

(D)
#### İpuçları

Bu ekranın tüm ipuçları tek bir yerde.

(E)
#### Bilgi bankası

Web sitesindeki bu makale: tarayıcıda, uygulamanın dilinde açılır.

[“Özet widget’ları” sayfası: onay işaretli bloklar ve sürükleme tutamakları]
**“Widget’lar”.** Onay işareti — gösterilir, sağdaki tutamak — sürükleyin.

### Ekranda neler yapabilirsiniz {#overview-gestures}

“Özet” ekranındaki satırların çoğu yalnızca okunur. Dokunulabilenler bir yere götürenlerdir.

| Bunu yapın | Ne olur |
|---|---|
| Ekranı aşağı çekin | Tüm bloklar yeniden hesaplanır. |
| Bütçe adına dokunun | Başka bir bütçeye geçiş. |
| “Dağıtılmadı”ya dokunun | “Bütçeyi otomatik dağıt” sayfası — dağıtılacak bir şey varsa. |
| Bir kartı sola ya da sağa kaydırın | Başka bir ay — “Para nereye gitti”, “Ay bütçesi”, “Takvim” ve “Ayın harcamaları” için. İlk açılışta bu hareketi bir parmak kendisi gösterir. |
| Bir aşım satırına dokunun | [Kategori ekranı](#category): bakiye, harcamalar, ayın işlemleri. |
| Takvimde bir güne dokunun | Gün sayfası: o gün ne oldu. |
| “Hedefler”e ya da bir etikete dokunun | “Hedefler” ekranı ya da etiket ekranı. |

## Bütçe {#budget}

Zarflarınız. Yiyeceğe, kiraya ve diğer her şeye ne kadar para ayıracağınıza burada karar verir ve her zarfta ne kadar kaldığını görürsünüz.

*Ekranın altındaki “Bütçe” sekmesi*

### Bu ekran ne için {#budget-why}

Üzerinde “Market”, “Kira”, “Faturalar” yazan bir zarf destesi düşünün. Maaş günü parayı aralarında paylaştırırsınız. Harcarken doğru zarftan alırsınız. Bir zarf boş — bu ay o iş için para kalmadı, başka bir zarftan aktarmadıkça.

“Bütçe” ekranı işte o zarf destesidir. Her satır bir zarftır (uygulamada buna kategori denir), sağdaki tutar da şu anda içinde ne kadar olduğudur. Tek bir ana kural var: üstte “Tümü dağıtıldı” görünene kadar tüm paranızı zarflara dağıtın.

##### Maaşı paylaştırın

Para geldi — üstte “dağıtılmadı” belirdi. Onu zarflara dağıtın.

##### Almadan önce bakın

“Yeni spor ayakkabıya param yeter mi?” — “Giyim ve ayakkabı”nın yanındaki tutara bakın.

##### Kırmızıyı temizleyin

Ayırdığınızdan fazlasını mı harcadınız? Başka bir zarftan para aktarın.

### Ekranda ne nerede {#budget-screen}

Tam ekran açmak için herhangi bir ekran görüntüsüne dokunun.

[“Bütçe” ekranı, ağustos: “Tümü dağıtıldı”, “Eksik” ve “Kullanılabilir” çipleri, bakiyeleri ve çubuklarıyla kategori grupları]

1. **Ay** — şu anda hangi ayı paylaştırdığınız.

   *Nasıl çalışır:*
   “‹” ve “›” okları aylar arasında gezdirir. Tek tek gezinmemek için bir ay seçici açmak üzere ada dokunun.

   İleriye sınırsız gidebilirsiniz — ve bu işe yarar: eylülde aralık hediyeleri için şimdiden para ayırabilirsiniz. Her ayın kendi zarfları vardır, zarfta kalan da kendiliğinden bir sonraki aya geçer.

2. **“Dağıtılmadı”** — henüz hiçbir zarfta olmayan para. Ekrandaki en önemli sayı.

   *Nasıl çalışır:*
   Maaş gelir — buraya düşer. İşiniz, bu sıfıra inene kadar onu zarflara dağıtmaktır. Bu yerin üç durumu var:

   - **renkli bir çip üzerinde sayı** — para bir görev bekliyor. Otomatik dağıtımı açmak için çipe dokunun: uygulama parayı geçen ayki gibi, ortalama harcamaya göre, hedeflere göre ya da yüzdelerinize göre paylaştırmayı önerir;
   - **“✓ Tümü dağıtıldı”** — hedefe ulaşıldı: her liranın bir görevi var. Ekran görüntüsündeki gibi;
   - **kırmızı “fazla dağıtıldı”** — zarflara sahip olduğunuzdan fazlasını koydunuz. Dokunun — ve fazlasını zarflardan geri alın.

3. **“⋮” menüsü** — hedefler, sıra, satırların görünümü. Her madde [aşağıda](#budget-menu) anlatılıyor.

4. **Filtre çipleri** — yalnızca ilgi isteyen zarfları gösterir.

   *Nasıl çalışır:*
   “Aşıldı” — eksideki zarflar. “Eksik” — bu ayın hedefine hâlâ ulaşamamış zarflar. “Kullanılabilir” — parası olanlar. Çipteki sayı, bu tür kaç zarf olduğudur; ekran görüntüsünde ikisi hedefe ulaşmak için para bekliyor, dokuzunda para var.

   Sıfırlı çip gösterilmez: aşım yoksa “Aşıldı” hiç görünmez. Listenin tamamını geri getirmek için “Tümü”ne dokunun.

5. **Grup** — benzer zarfların bulunduğu bir raf.

   *Nasıl çalışır:*
   “Sabit giderler”, “Günlük giderler”… Sağda — bu grubun tüm zarflarında ne kadar olduğu. Grubu kenara katlamak için adına dokunun. Bir menü için basılı tutun: yeniden adlandırma, kategori ya da yeni grup ekleme, silme.

   “⋮” menüsünde “Gelirden yüzde”yi açın — grubun tutarının altında, ayın gelirinin yüzde kaçını onun tüm zarflarına birlikte koyduğunuzu görürsünüz. “Sabit giderler”in diyelim ki maaşınızın yarısını aldığını, “Günlük giderler”in üçte birini aldığını hemen görürsünüz. Yüzde, grup katlanmış olsa ya da bazı zarflar filtreyle gizlenmiş olsa bile gruptaki her zarfı sayar.

6. **Grubun yanındaki ⊕** — bu grupta yeni bir zarf.

7. **Kategori** — bir zarf.

   *Nasıl çalışır:*
   [Kategori ekranını](#category) açmak için satıra dokunun: bu zarftan ayın tüm harcamaları ve geçmiş aylardaki eğilimler.

   Satırı parmağınızla sola ya da sağa kaydırabilirsiniz — yeniden adlandırmak, başka bir gruba taşımak ya da silmek için. Tam olarak nasıl — [“Satırla neler yapabilirsiniz”](#budget-gestures) bölümünde.

8. **Sağdaki tutar** — şu anda zarfta ne kadar olduğu. Rengi, ekranın ana ipucudur.

   *Nasıl çalışır:*
   - **Yeşil** — para var, harcayabilirsiniz.
   - **Gri 0,00** — zarf boş. Zaten ödediğiniz kira için bu normaldir.
   - **Kırmızı, cüzdan simgeli** — olandan fazlasını harcadınız. Bu eksi gelecek ayın parasını yer.
   - **Sarı, kart simgeli** — bu da eksi, ama kredi kartıyla ödediniz: kart borcunuz büyüdü, bütçenin parasına dokunulmadı.

   #### Zarfa nasıl para konur

   1. Sağdaki tutara dokunun.
   2. Tuş takımlı bir pencere açılır. Bakiyeyi değil, bu ay bu zarfa şimdiye kadar ne kadar ayırdığınızı gösterir.
   3. Yeni tutarı yazın — ilk rakam eskisinin yerine geçer. Üstüne mi eklemek istiyorsunuz? “+”ya dokunun, 875 yazın ve “=”.
   4. Zarfın bir hedefi mi var? “Hedefe: …”ya dokunun — gereken tutar kendiliğinden dolar.
   5. “Tamam”a dokunun.

   Para üstteki “dağıtılmadı”dan gelir — o da tam aynı miktarda azalır.

   #### Kırmızı eksi nasıl temizlenir

   1. Kırmızı tutara dokunun.
   2. İki maddeli “Aşım: Market” sayfası açılır. “Bütçeyi değiştir”, “dağıtılmadı”dan doldurmak için bu zarfın tutar tuş takımını açar. “Başka kategoriden karşıla” diğer zarflardan para aktarır; bunun hakkında daha fazlası aşağıda.
   3. “Başka kategoriden karşıla”ya dokunun. Üstte — “Karşılanacak: ₺875”, altında — “Parayı nereden alacaksınız”: ilk satır “Dağıtılmadı”, sonra parası olan her zarf, her birinin bakiyesiyle.
   4. Her satırda bir “… al” düğmesi var: uygulama oradan ne kadar alınabileceğini zaten hesapladı. Vazgeçebileceğiniz bir zarfın yanındakine dokunun. Örneğin “Eğlence ve hobiler”.
   5. Bu tutarla bir tuş takımı açılır. Kabul edin — “… al”a dokunun. Daha az mı almak istiyorsunuz? Kendi tutarınızı yazın.
   6. Bir zarf yetmedi mi? Kalanı bir sonrakinden alın. Eksi temizlendiğinde sayfa “Aşım karşılandı!” der.

9. **Çubuk** — ayırdığınızın ne kadarının harcandığı.

   *Nasıl çalışır:*
   Ekran görüntüsünde “Faturalar” için çubuk neredeyse dolu: ay için ayrılanın neredeyse tamamı gitti. Sonunu aşın, çubuk kırmızıya döner.

   Zarfın bir hedefi varsa çubuk artık harcamayı değil, hedefin ne kadar tutturulduğunu gösterir. Çubukları “⋮” menüsünde kapatabilirsiniz.

   Geçerli ayda harcama çubuğunda ince dikey bir çizgi vardır — bugün: ayın ne kadarının geçtiği. Dolgu çizgiyi geçtiyse ayın ilerleyişinden hızlı harcıyorsunuz ve zarf ay sonuna kadar yetmeyebilir. Hedef çubuğunda böyle bir çizgi yoktur.

10. **“… tutarın … kadarı harcandı”** — bu ayın harcamaları, bu ay ayırdığınıza karşı.

    *Nasıl çalışır:*
    “Faturalar” için “₺2.500,00 tutarın ₺2.319,00 kadarı harcandı”: ₺2.500 ayırdınız, ₺2.319 harcadınız. Peki sağ tarafta neden 181 değil de 735 yazıyor? Çünkü zarfta geçmiş aylardan para da vardı — bakiye zarfla birlikte ilerler.

    Aynı nedenle “Market”te kırmızı bir satır var — “₺10.000,00 üzerine ₺3.332,00 harcandı” — sağdaki tutar ise yeşil: ayın planı aşıldı, ama geçmiş aylardan kalan yedek aşımı karşıladı. Zarf artıda, her şey yolunda.

11. **Hedef bayrağı** — “Ulaşıldı” ya da “… kaldı”.

    *Nasıl çalışır:*
    Hedef, bir zarfa içinde ne kadar olması gerektiğini söyler: “her ay markete ₺10.000” ya da “temmuza kadar tatile ₺32.500”. Tutarın altındaki bayrak, hedefin bu ay tutturulup tutturulmadığını, tutturulmadıysa daha ne kadar ekleneceğini gösterir. Hedefler kategori ekranında belirlenir.

12. **“Bugün”** — geçerli aya dönün. Başka bir aya geçtiğinizde belirir.

13. **Yeni harcama** — “İşlemler”deki aynı üç düğme. [Ayrıntılar “İşlemler” makalesinde](#transactions)

### “⋮” menüsü {#budget-menu}

Hedefler, zarfların sırası ve satırlarda neyin gösterileceği.

[“Bütçe” ekranının açık “⋮” menüsü: Hedefler, Hedeflere dağıt, Sırayı değiştir, İlerleme çubukları, Gelirden yüzde, Gizli kategoriler, İpuçları, Bilgi bankası]

(A)
#### Hedefler

Bütçenin tüm hedefleri tek bir ekranda. Ayrıntılar [“Hedefler”](#goals) makalesinde.

*Nasıl çalışır:*
Hangi zarfların yolunda, hangilerinin eksik olduğunu görürsünüz. Bir hedefi değiştirmek için ona dokunun.

(B)
#### Hedeflere dağıt

Her zarfı, hedefinden ne kadar eksikse o kadar doldurun. Ayrıntılar [“Hedefler”](#goals) makalesinde.

*Nasıl çalışır:*
Uygulama “dağıtılmadı”dan para alır ve hedefli zarflara verir — her birine tam olarak eksik olanı. Önce planı gösterir: ne nereye gidiyor — ve ancak sizin “evet”inizden sonra dağıtır.

Ayın tüm hedefleri zaten tutturulduysa her birinde ne kadar olduğunu gösterir — dağıtılacak bir şey olmadığını neden olduğunu görebilesiniz.

(C)
#### Sırayı değiştir

Zarfları ve grupları yeniden düzenleyin.

*Nasıl çalışır:*
Satırlarda tutamaklar belirir — onları sürükleyin. En çok kullandığınız zarfları üstte tutmak kullanışlıdır. Bitirdiğinizde aynı menü maddesinin adı “Sıralamayı bitir” olur.

(D)
#### İlerleme çubukları

Her zarfın altında bir çubuk ve bir “… tutarın … kadarı harcandı” satırı gösterir.

*Nasıl çalışır:*
Kısa bir liste istiyorsanız kapatın: yalnızca adlar ve tutarlar kalır. Hedefli zarflar çubuklarını her zaman korur — çubuk hedefi gösterir.

**Kurulumdan hemen sonra:** açık.

(E)
#### Gelirden yüzde

Her zarfa ayın gelirinin yüzde kaçını ayırdığınız.

*Nasıl çalışır:*
Tutarın yanında “%12” gibi bir etiket belirir: kira gelirin %40’ını, market %15’ini yer. Her grup, tutarının altında tüm zarfları için kendi toplam yüzdesini gösterir. Harcamalar yüzdeyi değiştirmez — yalnızca ne kadar ayırdığınız ve ayın gelirinin kendisi.

**Yüzde neye göre sayılır.** Dağıttığınız tüm paraya göre değil, “Özet” ekranındaki “Ay bütçesi” kartının “Kasım bütçesi” satırına göre: bu aya ayrılan gelir. “Ekim ayından devir” buna dahil değildir. Geçen ayın artanını da dağıtın, yüzdeler gerçekte olduğundan yüksek çıkar ve birlikte %100’ü aşabilir. Dağıttığınızın ne kadarının bu ayın geliri, ne kadarının artan olduğunu aynı kartta görürsünüz ([“Özet”](#overview-blocks)).

**Kurulumdan hemen sonra:** kapalı. **Ayrıca bakın:** “Yüzdeye göre” otomatik dağıtım — “dağıtılmadı”ya dokunun.

(F)
#### Gizli kategoriler

Gözden uzaklaştırdığınız zarflar.

*Nasıl çalışır:*
Harcaması olan bir zarf silinemez — raporların onun geçmişine ihtiyacı vardır. Onu gizleyebilirsiniz: listeden kaybolur, geçmiş harcamalar kalır. Gizli zarfları buradan geri getirebilirsiniz.

(G)
#### İpuçları

Bu ekranın tüm ipuçları tek bir yerde.

(H)
#### Bilgi bankası

Web sitesindeki bu makale: tarayıcıda, uygulamanın dilinde açılır.

### Satırla neler yapabilirsiniz {#budget-gestures}

Satırda “düzenle” ve “sil” düğmeleri yoktur. Bunun yerine zarfın satırını parmağınızla yana, alttan beliren bir düğmeye doğru kaydırırsınız. Listenin ilk satırı bunun nasıl göründüğünü bir kez kendisi gösterir.

| Bunu yapın | Ne olur |
|---|---|
| Satıra dokunun | [Kategori ekranı](#category): bu zarfın ay içindeki harcamaları ve eğilimleri. |
| Tutara dokunun | Zarfa para koyun ya da kırmızıysa — eksiyi temizleyin. Adımlar yukarıdaki [“Sağdaki tutar”](#budget-balance) maddesinde. |
| Sola kaydırın | Sağda bir “Düzenle” düğmesi belirir. “Kategoriyi düzenle”yi açmak için dokunun: yeni bir ad ve bir “Grup” alanı. İçinde başka bir grup seçin — zarf tüm parası ve geçmişiyle oraya taşınır. |
| Sağa kaydırın | Solda kırmızı bir “Sil” düğmesi belirir. Tek bir alışverişi olmayan boş bir zarf “Kategori silinsin mi?” sorusundan sonra silinir. Harcama olduysa uygulama “Silinemez — işlemler var” der ve “Gizle”yi önerir: zarf listeden kaybolur, geçmişi kalır. Gizli bir zarfı geri getirmek için — “⋮” menüsü → “Gizli kategoriler”. |
| Bir grubu basılı tutun | Grup menüsü: yeniden adlandırma, kategori ya da yeni grup ekleme, grubu silme. |

“Kart ödemeleri” grubundaki zarflar kaydırılamaz: onları kredi kartının kendisi yönetir, içlerine para kendiliğinden ayrılır.

## Hedefler {#goals}

Her zarfa ne kadar para gerektiği — ve bu ay daha ne kadar koymak gerektiği.

*“Bütçe” → “⋮” → “Hedefler”*

### Neden hedefler {#goals-why}

Zarf “burada ne kadar var” sorusunu yanıtlar. Hedef ise “burada ne kadar olmalı” sorusunu. Uygulama ikisini karşılaştırır ve daha ne kadar koymanız gerektiğini söyler.

**“Yiyeceğe ayda ₺10.000 gidiyor”** — “Market” üzerinde bir “Aylık” hedef. Uygulama her ay o ₺10.000’yi ayırmanızı hatırlatır.

**“Mart ayında tatil, ₺50.000 lazım”** — bir “Tarihe kadar” hedef. Uygulama tutarı aylara kendisi böler: Kasım ayında şu kadar, Aralık ayında şu kadar.

**“Kara gün fonunda ₺100.000 olmalı”** — bir “Bakiye” hedefi. Bir kısmını harcayın, uygulama geri koymanızı ister.

Hedefin kendisi para taşımaz: yalnızca sayar. Parayı zarfa siz koyarsınız — “Bütçe” ekranında ya da tek bir “Hedeflere dağıt” düğmesiyle (bunun hakkında daha fazlası [aşağıda](#goals-allocate)). Her kategorinin bir hedefi vardır.

### Ekranda ne nerede {#goals-screen}

“Hedefler” ekranı “Bütçe”den açılır: “⋮” → “Hedefler”. Seçili ay için tüm kategoriler hedefleriyle birlikte buradadır. Ekran görüntüsü demo bütçede Kasım ayını gösteriyor: beş türden beş hedef.

[Hedefler ekranı: Kasım 2026 ayı, özet Toplam 5 hedef, Aylık maliyet 63.589, Eksik 40.239; kategori grupları; Market — aylık 10.000, Ulaşıldı; Hediyeler — liste 4.375; Seyahat — tarihe kadar 50.000; Kara gün fonu — bakiye 100.000; Yatırımlar — % gelir 7.000]

(1)
**Ay** — “‹ ›” okları aylar arasında gezdirir, ada dokunmak bir ay seçici açar. Hedefler bu ay için hesaplanır. Geçerli aydan çıkın, altta bir “Bugün” düğmesi belirir.

(2)
**“⋮” menüsü** — hangi kategorilerin gösterileceği, ilerleme çubukları, ipuçları — [aşağıda](#goals-menu).

(3)
**Özet** — “Toplam” kaç hedef olduğudur. “Aylık maliyet” tüm hedeflerin bu ay ne kadar gerektirdiğidir. “Eksik” ne kadarının henüz konulmadığıdır.

(4)
**Grup** — “Bütçe”deki grupların aynısı. Adın altında — grubun kaç hedefi olduğu ve ne kadar eksik oldukları ya da “tamamı karşılandı”. Dokunmak grubu katlar.

(5)
**Hedefsiz bir kategori** — “hedef yok”. Satıra ya da “⊕”ya dokunun — “Yeni hedef” açılır.

(6)
**Hedefli bir kategori** — hedefin tamamı üç satırda. Dokunmak onu düzenlemeye açar.

*Nasıl çalışır:*
İlk satır: kategori adı, hedefin türü (“aylık”, “tarihe kadar”, “bakiye”, “% gelir”, “liste”) ve hedef tutarı. İkincisi: bir çubuk — ne kadarının tamam olduğu — ve durum: yeşil bir bayrak ve “Ulaşıldı” ya da bir bayrak ve “… kaldı” — ne kadar ekleneceği. Üçüncüsü: hedefin koşulu sözcüklerle ve tamamlanma yüzdesi.

Ekran görüntüsünde “Market” tamam: Kasım ayında zarfa ₺10.000 zaten ayrıldı. “Seyahat ve tatil”in ise bu ay ₺2.500 eksiği var — Mart ayına kadar ₺50.000’ye ulaşmak için ayda gereken bu kadar.

#### “⋮” menüsü {#goals-menu}

[Hedefler ekranı menüsü: Tüm kategoriler, Yalnızca hedefli, Eksik, İlerleme çubukları, İpuçları, Bilgi bankası]

(A, B, C)
#### Hangi kategoriler gösterilsin

“Tüm kategoriler”, “Yalnızca hedefli” ya da “Eksik” — hedefinin bu ay bir eksiği olanlar. Seçim hatırlanır; her şey gösterilmiyorsa “⋮” üzerinde bir nokta yanar.

(D)
#### İlerleme çubukları

çubukların ve yüzdelerin gösterilip gösterilmeyeceği. Onlarsız satır kısalır, hedef ve tutar ise yerinde kalır.

(E)
#### İpuçları

bu ekranın ipuçları liste olarak.

(F)
#### Bilgi bankası

Web sitesindeki bu makale: tarayıcıda, uygulamanın dilinde açılır.

### Hedef nasıl belirlenir {#goals-new}

Hedefi burada, “Hedefler”de, ya da kategorinin kendi ekranında — “Hedef” kartındaki “Hedef ekle” düğmesiyle — belirlersiniz. Sayfa aynıdır.

[Yeni hedef sayfası: Hedef türü Aylık, Tutar Belirt…, Kaydet düğmesi gri]

[Hedef türü sayfası: Aylık, Tarihe kadar, Bakiye, % gelir, Liste — her biri açıklamasıyla]

1. Hedefsiz bir kategoriye dokunun. “Yeni hedef” açılır.
2. “Hedef türü” — dokunun ve beşinden birini seçin. Her biri adının altında ne işe yaradığını söyler. Hangisi ne zaman — [aşağıda](#goals-types).
3. “Tutar” — dokunun ve uygulamanın tuş takımında yazın. “% gelir” için tutar yerine “Gelirden yüzde”, “Liste” için de listenin satırları vardır.
4. “Tarihe kadar” hedefinde ayrıca “Şu aya kadar biriktir” vardır — tutarın tamamının gerektiği ay.
5. “Kaydet”. Tutar belirlenene kadar düğme gridir.

**Düzenleyin ya da silin** — hedefli bir kategoriye dokunun — aynı alanlarla “Hedefi düzenle” açılır. Altta — “Sil” ve “Kaydet”. Silinen hedef gider; zarftaki para kalır.

**Planlı ödemelerden bir öneri** — kategorinin planlı bir ödemesi varsa kategori ekranındaki hedef kartı “Planlı ödemeden: …” gösterir. Her ay yapılan bir ödeme, tutarı için “aylık” önerir; yılda bir — “ödemeye kadar … biriktir”.

### Beş tür hedef {#goals-types}

Hedefin türü, uygulamanın “bu ay ne kadar gerekiyor” sorusunu hesaplarken kullandığı kuraldır. Aşağıda her kural, ekran görüntüsünden bir örnekle.

#### “Aylık” — her ay harcadığınız şeyler için {#goals-monthly}

**Nasıl hesaplanır** — her ay aynı tutarı ayırmanız gerekir. Hedef, zarfta ne kadar kaldığına değil, **bu ay** zarfa ne kadar koyduğunuza bakar.

*Nasıl çalışır:*
“Market”, ayda ₺10.000. Kasım ayı için ₺10.000 koyun — yarısı harcanmış olsa bile hedef “Ulaşıldı” olur. Bu para zaten harcamak içindir. ₺6.750 koyun — “₺3.250 kaldı”.

Market, internet, ulaşım, abonelikler için.

#### “Tarihe kadar” — belli bir aya kadar bir tutar biriktirin {#goals-bydate}

[Hedefi düzenle sayfası: Hedef türü Tarihe kadar, Tutar 50.000, Şu aya kadar biriktir Mart 2027]

**Nasıl hesaplanır** — tutarın tamamından hâlâ eksik olan, bu ay da dahil kalan aylara bölünür. Bu, ayın katkısını verir.

*Nasıl çalışır:*
“Seyahat ve tatil”, Mart ayına kadar ₺50.000. Kasım ayının başında zarfta ₺18.750 var, yani ₺31.250 eksik. Mart ayına kadar, Kasım dahil, beş ay var — ayda ₺6.250. Kasım ayında ₺3.750 zaten ayrıldı — hedef “₺2.500 kaldı” diyor.

Bir ayı atlayın, eksik kalan geri kalan aylara yayılır ve katkı kendiliğinden büyür. Fazla koyun, sonraki katkılar küçülür.

Çubuk başka bir şeyi gösterir: tutarın tamamının ne kadarının zaten zarfta olduğunu. Ekran görüntüsünde — %45.

**Ne için** — bir tatil, yılda bir sigorta, bayram hediyeleri, bahar tadilatı — her ay olmayan ama öngörülebilen her şey.

#### “Bakiye” — bir yedek tutun {#goals-balance}

**Nasıl hesaplanır** — zarfta her zaman bu tutar olmalıdır. Ayın başında ne kadar eksikse hedef onu ister.

*Nasıl çalışır:*
“Kara gün fonu”, ₺100.000. Zarfta şu anda ₺71.886 var — hedef “₺28.114 kaldı” diyor. Son tarih yok: yapabildiğinizde doldurun. Yedekten bir tamir için mi aldınız? Hedef yeniden geri koymanızı ister.

Acil durum fonu, ecza dolabı, araba tamiri yedeği için.

#### “% gelir” — gelirin bir yüzdesini ayırın {#goals-percent}

[Hedefi düzenle sayfası: Hedef türü % gelir, Gelirden yüzde %10, Bu ayın gelirinden seçili, Ortalama gelirden; Kasım geliri 70.000, Aylık hedef 7.000]

**Nasıl hesaplanır** — ayın hedefi, gelirin sizin belirlediğiniz yüzdesidir. Uygulama tutarı doğrudan sayfada gösterir: “Kasım 2026 geliri: ₺70.000,00 · Aylık hedef: ₺7.000,00”.

**“Bu ayın gelirinden”** — **zaten gelmiş** paradan hesaplanır. Maaşınızın ilk kısmı geldi — bir hedef; ikinci kısmı geldi — hedef büyüdü. Ayda gelir olmadığı sürece hedef sıfırdır ve tutturulmuş sayılır. **Varsayılan olarak:** bu seçilidir.

**“Ortalama gelirden”** — son 12 ayın ortalama geliri. Hedef ayın 1’inden bellidir ve ay içinde değişmez — maaşınızı ay sonunda alıyorsanız kullanışlıdır.

**Ne için** — “kazandığım her şeyin %10’unu ayır” — yatırımlar, birikim, bağışlar.

#### “Liste” — bu ay ne alınacak {#goals-list}

Satırlardan oluşan bir hedef: kategorinin parasının bu ay nereye gideceğini yazın — hedef tutarı kendiliğinden toplanır. Her ayın kendi listesi vardır.

[Hedefi düzenle sayfası: Hedef türü Liste, Kasım listesi: Annemin doğum günü 2.500, Pasta 1.000 — 1.075 kaydedildi, İş arkadaşı 875 — 600 kaydedildi · 2 işlem; Satır ekle; Kasım hedefi 4.375]

[Hediyeler ve bayramlar kategori ekranı: Hedef kartı — listeye göre ayda 4.375; 2.625 daha dağıt; liste satırları]

[Liste satırı sayfası: İş arkadaşı, Planlanan tutar 875; Kaydedildi 600 / 875, 600 olarak azalt; iki işlem — 500 ve 100; İşlem kaydet; Sil, Kaydet]

**Satırlar** — “Hedef türü”nde “Liste”yi seçin, ayın satırları doğrudan sayfada belirir. “⊕ Satır ekle” — bir ad ve bir tutar. Altta — “Kasım hedefi”: tüm satırların toplamı. Satır olmadıkça “Kaydet” gridir.

**Kategori ekranında** — satırlar çubuğun altında, “Hedef” kartında yaşar. Onlarla orada çalışırsınız: düzenlemek için bir satıra dokunun, sola kaydırın — “Kayda geçir”, sağa kaydırın — “Sil” (alttaki mesajda “Geri al” ile).

**“Kayda geçir”** — normal işlem formunu açar: planlanan tutar (gerçeğiyle düzeltin), bu kategori, nottaki satırın adı. Kaydedildikten sonra satırın altında yeşil renkte: “✓ ₺1.075,00 kaydedildi · 12 Kas”, sağdaki planlanan tutar ise kalır: ekran görüntüsünde pasta ₺1.000’ye planlanmış, ₺1.075’ye alınmış.

*Nasıl çalışır:*
Bir satır yeniden kaydedilebilir: bir alışveriş bazen birkaç ödemedir — lastikler, sonra montaj. Form planın kalanını yazar, satırın altında da tüm kayıtların toplamı ve sayısı görünür. Satırın sayfasında her işleme bir bağlantı ve “İşlem kaydet” vardır; “… olarak azalt” düğmesi planı kaydedilen tutara eşitler. Kaydedilmiş bir satır başka bir aya taşınamaz.

**Başka bir aya taşıyın** — seçimi açmak için bir satırı basılı tutun. İstediklerinizi işaretleyin; altta — toplamları ve “⋮”: “Aralık ayına taşı”, “Başka bir aya taşı…”, “Sil”.

**Yeni bir ay** — liste boş: “Aralık listesi boş” ve bir “Kasım satırlarını al · tutar” düğmesi: geçen ayın satırları kopyalanır (“kaydedildi” işaretleri olmadan), geçen ay da değişmez.

### Kategori ekranındaki “Hedef” kartı {#goals-card}

“Bütçe” ekranında bir kategoriye dokunun — [ekranı](#category) açılır. Onun “Hedef” kartı ekranın ayı için hedefi gösterir ve ne kadar koymanız gerektiğini söyler.

[Seyahat ve tatil kategori ekranı: özet, Hedef kartı — Mart tarihine kadar 50.000 biriktir, Bu ay 2.500 daha dağıt, Tutara göre / Tarihe göre anahtarı, Aylık ayır 10.000, kaydırıcı, Şu aya kadar biriktir Şubat 2027, Son tarihten 1 ay önce, Hedef tarihi yap]

**Başlık** — hedefin açıklaması ve düzenlemek için bir kalem. Altında — bir çubuk ve “Bu ay … daha dağıt” ya da “Ayın hedefi tamamlandı”.

**“Tutara göre” / “Tarihe göre” tahmini** — “Tarihe kadar” hedefinde, çubuğun altında: ya daha fazla ya da daha az ayırırsanız? “Tutara göre”: “Aylık ayır” kaydırıcısını oynatın — altındaki “Şu aya kadar biriktir” ne zaman ulaşacağınızı gösterir, alttaki satır da “Son tarihten … ay önce”, “Son tarihten … ay sonra” ya da “Tam zamanında” der. “Tarihe göre”: “Şu aya kadar biriktir”i oynatın — kaydırıcının altında ayda ne kadar ayıracağınızı görürsünüz. Tam bir tutar mı gerekiyor? “Aylık ayır”a dokunun ve tuş takımında yazın.

*Nasıl çalışır:*
Tahmin hiçbir şeyi kaydetmez: ekrandan çıkın, her şey eskisi gibidir. Yeni tarih hoşunuza mı gitti? “Hedef tarihi yap: …”ya dokunun, hedef onu alır.

Ekran görüntüsünde: ayda ₺10.000 koyarak tatil parası Şubat ayında hazır olur — son tarihten bir ay önce.

**Hedef yok** — kartta tek bir düğme vardır, “Hedef ekle”. Planlanan bir ödeme varsa yanında bir “Planlı ödemeden: …” önerisi belirir.

### Hedeflere dağıt {#goals-allocate}

Maaşınız geldi — onu tek bir düğmeyle tüm hedeflere paylaştırın. “Bütçe” → “⋮” → “Hedeflere dağıt”.

[Hedeflere dağıt penceresi: 3 kategoriye 5.750 — Hediyeler ve bayramlar +2.625, Seyahat ve tatil +2.500, Kara gün fonu +625; dağıtılmadan kalacak 0,00; İptal, Dağıt]

**Ne yapar** — “dağıtılmadı”dan para alır ve hedefleri bu ay bir eksiği olan zarflara koyar. Önce planı gösterir — hangi zarfa ne kadar gidiyor; “Dağıt” bunu yapar, “İptal” hiçbir şeyi değiştirmez.

**Hepsine yetmiyorsa** — hedefler sırayla, kategorilerin “Bütçe” ekranında dizildiği gibi yukarıdan aşağıya karşılanır, sonuncu da kalanı alır. Ekran görüntüsünde ₺5.750, “Hediyeler ve bayramlar” ve “Seyahat ve tatil” için tamamen yetti, “Kara gün fonu” ise ₺28.114’ün ₺625’ini aldı. Önemli olanı yukarıda tutun — sıra “Bütçe” ekranında değiştirilir: “⋮” → “Sırayı değiştir”.

**Dağıtılacak bir şey yoksa** — “dağıtılmadı” boş — uygulama bunu söyler. Hedef yok — nerede belirleneceğini söyler. Tüm hedefler zaten tutturuldu — her biri için ne kadar ayrıldığını ve ne kadar gerektiğini gösterir.

**Otomatik dağıtımda da aynısı** — “Bütçe” başlığındaki “dağıtılmadı”ya dokunun — “Eksik” modu aynı şeyi yapar. “Bütçe” ekranındaki kategori tutarı hesap makinesinde de bir “Hedefe: …” düğmesi var — tam olarak eksik olanı doldurur.

### Hedefler başka nerede görünür {#goals-elsewhere}

Hedef yalnızca burada görünmez.

**“Bütçe”** — hedefli bir kategorinin tutarının altında bir bayrak vardır: “Ulaşıldı” ya da “… kaldı”, çubuk da harcamayı değil hedefi gösterir. Listenin üstündeki “Eksik” çipi yalnızca hedeflerinin bir eksiği olan kategorileri bırakır. Ayrıntılar [“Bütçe”](#budget) makalesinde.

**“Özet”** — “Hedefler” bloğu kaç hedef olduğunu, kaçının tutturulduğunu ve bu ay daha ne kadar gerektiğini gösterir. Ayrıntılar [“Özet”](#overview) makalesinde.

## Kategori ekranı {#category}

Tek bir zarfın tamamı: içinde ne kadar vardı, ne kadar ayrıldı ve harcandı, ne kadar kaldı ve kaç gün yetecek. Ayrıca hedef, bir not, geçmiş aylardaki harcamalar ve ayın tüm işlemleri.

*“Bütçe” → bir kategoriye dokunun*

### Bu ekran ne için {#category-why}

“Bütçe” ekranında bir kategorinin tek bir satırı ve tek bir sayısı vardır. Burada ise arkasındaki her şey var.

##### Ay sonuna kadar yetecek mi

“Kullanılabilir” ve altında “günde ≈ …”: eksiye düşmeden ay sonuna kadar her gün ne kadar harcayabileceğiniz.

##### Para nereye gitti

Bu kategorinin ay içindeki tüm işlemleri, günlere göre. Kartını açmak için herhangi birine dokunun.

##### Gerçekte ne kadar gerekiyor

“Harcama eğilimleri” ayda genelde ne kadar çıktığını gösterir. Daha azını ayırırsanız her ay eksiyle biter.

### Nasıl açılır {#category-open}

- **“Bütçe”** — bir kategori satırına dokunun. Ekran “Bütçe”de seçili ayla açılır. Bu, telefon dikken geçerlidir: yatayda bir tablo satırına dokunmak tutar hesap makinesini açar, tablette ise sağda bir panel açar ([aşağıda](#category-tablet)).
- **“Özet”** — “Aşım” ya da “Tükeniyor” bloğundaki bir satıra dokunun.
- **“Raporlar”** — “Para nereye gitti”deki bir liste satırına ya da “Sapma”daki bir kutucuğa dokunun. Ekran raporun ayıyla açılır.

### Ekranda ne nerede {#category-screen}

Ekran kaydırılır: üstte özet, sonra “Hedef”, “Not” ve “Harcama eğilimleri” kartları, altlarında da ayın işlemleri. Tam ekran açmak için bir ekran görüntüsüne dokunun.

[Market kategori ekranı: oklarıyla ay; özet — Ekim ayından itibaren, Planlanan, Harcanan, Kullanılabilir ve günde ≈; Hedef kartı — Ayda 10.000,00 ayır, Ayın hedefi tamamlandı; Not; Harcama eğilimleri; günlere göre aydaki işlemler: Gratis, BİM, Migros; İşlem düğmesi]

1. **Ad** — kategorinin adı. “⋮” menüsünde yeniden adlandırın.

2. **“⋮”** — gizleme, yeniden adlandırma ya da başka bir gruba taşıma, silme. Ayrıntılar — [aşağıda](#category-menu).

3. **Ay** — “‹ ›” aylar arasında gezdirir: geçmiş ve gelecek, sınırsız. Ayrıntılar — [aşağıda](#category-months).

4. **“… ayından itibaren”** — zarfta geçen aydan ne kadar kaldığı.

5. **“… için planlanan”** — bu ay bu zarfa ne kadar ayırdığınız. Tutarın altında küçük harflerle — bunun ayın gelirinin yüzde kaçı olduğu.

6. **“… ayında harcanan”** — iadelerden sonra bu ay zarftan ne kadar çıktığı.

7. **“Kullanılabilir”** — şu anda zarfta ne kadar olduğu. “Bütçe”deki kategori satırındaki sayının aynısı.

8. **“günde ≈ …”** — ay sonuna kadar günde ne kadar harcayabileceğiniz. Yalnızca geçerli ayda ve yalnızca “Kullanılabilir” sıfırın üstündeyse.

9. **“Hedef”** — kategorinin bu ayki hedefi: daha ne kadar ayrılacağı. Ayrıntılar [“Hedefler”](#goals-card) makalesinde.

10. **“Not”** — bu kategoriyle ilgili kendi metniniz. Ayrıntılar — [aşağıda](#category-note).

11. **“Harcama eğilimleri”** — ayda ortalama ne kadar çıktığı. Ayrıntılar — [aşağıda](#category-trends).

12. **Tarih** — ayın işlemleri günlere göre, en yenisi üstte. Ayrıntılar — [aşağıda](#category-ops).

13. **İşlem** — “İşlemler”deki gibi bir satır, yalnızca kategorisiz: burada zaten tek bir kategori var.

14. **“+ İşlem”** — formda kategorisi zaten seçili yeni bir işlem.

### Özet: sayılar nereden geliyor {#category-stats}

Özetin dört satırı tek bir formülde toplanır:

**“… ayından itibaren”** + **“Planlanan”** − **“Harcanan”** = **“Kullanılabilir”**

##### Artı sonraki aya devreder, eksi devretmez

Hepsini harcamadınız mı? Kalan zarfta kalır ve gelecek ay “… ayından itibaren” satırında görünür. Olandan fazlasını mı harcadınız? Bu ay “Kullanılabilir” kırmızıdır. Ay değişince eksi sıfırlanır: gelecek ay “… ayından itibaren” 0 olur.

*Nasıl çalışır:*
Sıfırlanan eksinin nereye gittiği nasıl ödediğinize bağlıdır. Nakitle ya da banka kartıyla — gelecek ayın “dağıtılmadı” tutarını azaltır. Kredi kartıyla — kart borcuna dönüştü. Ayrıntılar [“Bütçe”](#budget) makalesinde.

##### Gelirden yüzde

“Planlanan”ın altında — bu zarfa ayın gelirinin yüzde kaçını ayırdığınız. “Bütçe”deki “Gelirden yüzde” etiketindeki yüzdenin aynısı. Ayda gelir yok — yüzde yok. “Ay bütçesi” kartının “… bütçesi” satırından sayılır — geçen ayın artanı olmadan; yüzdenin o zaman neden fazla yüksek görünebileceği — [“Bütçe”](#budget-income-share) makalesinde.

##### “günde ≈ …”

“Kullanılabilir”, bugün dahil ay sonuna kadar kalan günlere bölünür ve aşağı yuvarlanır — böylece bir güne asla olandan fazlası düşmez. Bugün daha az mı harcadınız? Yarın sayı büyür.

### Not {#category-note}

Bu kategoriye neyin ait olduğunu, ne için biriktirdiğinizi, ne üzerinde anlaştığınızı yazın — altı ay sonra işe yarayacak her şeyi. “Kategori için not ekle…” alanına dokunun ve yazın: not kendiliğinden kaydedilir, düğme yoktur. Bulut varsa diğer cihazlarınıza ulaşır.

### “Harcama eğilimleri” {#category-trends}

Bu kategoriden genelde ne kadar çıktığı. Bu aydan önceki 12 tam ayı sayar; geçerli ay henüz bitmediği için dahil edilmez. Harcamalar iadelerden sonradır.

[Büyük alışverişler kategorisi için Harcama eğilimleri kartı: Etkin bir aydaki ortalama 12.000, Ortalama aylık harcama 2.400, geçen ay harcanan 0]

**“Ortalama aylık harcama”** — harcamasız aylar da sayılarak ayda ortalama ne kadar çıktığı. Zarf eksiye düşmesin diye her ay ayırmaya değer tutar budur.

**“Etkin bir aydaki ortalama”** — yalnızca harcamalı aylar üzerinden ortalama. Her ay harcama olmadığında görünür: ekran görüntüsünde “Büyük alışverişler” alışveriş olan bir ayda ₺12.000, tüm aylarda ortalama ₺2.400.

**“… ayında harcanan”** — geçen ay ne kadar çıktığı: bu ayla karşılaştırın.

**Tutarların altındaki yüzdeler** — bunun gelirin yüzde kaçı olduğu: ortalamalar için aynı aylardaki ortalama gelirin, geçen ay için de onun gelirinin.

### Ayın işlemleri {#category-ops}

Bu kategorinin ekrandaki aya ait tüm işlemleri, günlere göre: en yenisi üstte. Bölünmüş bir tutarın yalnızca bu kategoriyle olan parçası gösterilir — ekran görüntüsünde “Gratis”.

| Bunu yapın | Ne olur |
|---|---|
| Bir satıra dokunun | İşlem kartı — “İşlemler”dekinin aynısı. Ayrıntılar [“İşlemler”](#transactions-detail) makalesinde. |
| Sağdaki daireye dokunun | “Hesaba geçti” işareti, “İşlemler”deki gibi. |
| Sola kaydırın | “Düzenle” — işlem formu. |
| Sağa kaydırın | “Sil” — bir onaydan sonra. Altta “Geri al” belirir. |

Gün içindeki işlemlerin sırası ve tarihin yanındaki günlük toplam “İşlemler”de ayarlanır: “⋮” → “Sıralama” ve “Günlük toplam”. Burada da aynıdırlar.

### Başka bir ay {#category-months}

Özetin üstündeki “‹” ve “›” aylar arasında gezdirir. Geçerli aydan çıkın, sol altta “Bugün” belirir: geçerli aya dönmek için dokunun.

[Aynı ekran geçen ay için: günde ≈ satırı olmayan özet, sol altta bir Bugün düğmesi]

Geçmiş bir ayda o zaman ne kadar olduğunu ve ne kadar harcandığını görürsünüz. Orada “günde ≈ …” satırı yoktur: ay bitti. Gelecekteki bir ayda şimdiden ne kadar ayrıldığını görürsünüz.

### “⋮” menüsü {#category-menu}

[Menü: Kategoriyi gizle, Kategoriyi düzenle, İpuçları, Bilgi bankası, Kategoriyi sil]

(A)
##### “Kategoriyi gizle”

Kategori “Bütçe”den ve işlem formundaki kategori listesinden kaybolur. Para ve işlemler kalır, hesaplarda eskisi gibi sayılır. Geri getirmek için — tam burada: madde “Kategoriyi göster” olur. Ya da “Bütçe” → “⋮” → “Gizli kategoriler”.

(B)
##### “Kategoriyi düzenle”

Ad ve bir “Grup” alanı olan bir sayfa. Ayrıntılar — [aşağıda](#category-edit).

(C)
##### “İpuçları”

Bu ekranın ipuçları — zaten kapattıklarınız dahil.

(D)
##### “Bilgi bankası”

Web sitesindeki bu makale: tarayıcıda, uygulamanın dilinde açılır.

(E)
##### “Kategoriyi sil”

Yalnızca kategorinin hiç işlemi yoksa. O zaman “Kategori silinsin mi?” sorusundan sonra kaybolur, hedefi de; içinde ayrılan her şey de “dağıtılmadı”ya döner.

*Nasıl çalışır:*
İşlemler varsa uygulama “Silinemez — işlemler var” der ve “Gizle”yi önerir. Silinen bir kategori geçmişten kaybolur, işlemleri de zarfsız kalırdı.

#### Yeniden adlandırma ve başka bir gruba taşıma {#category-edit}

[Kategoriyi düzenle sayfası: Ad Market, Grup Günlük giderler, Sil ve Kaydet düğmeleri]

[Grup sayfası: Sabit giderler, Günlük giderler, Ara sıra giderler, Birikim]

(E)
##### “Ad”

Kategorinin yeni adı. İşlemler, hedef ve para onunla kalır.

(F)
##### “Grup”

Grup listesini açmak için dokunun. Başka birini seçin ve “Kaydet”e dokunun: kategori parası ve geçmişiyle birlikte o grubun sonuna taşınır.

*Nasıl çalışır:*
“Kart ödemeleri” grubundaki kategorilerde bu alan yoktur: gruplarını uygulama yönetir.

(G)
##### “Sil”

Menüdeki “Kategoriyi sil” ile aynı.

##### Bir kategori başka bir gruba nasıl taşınır

1. Kategoriyi açın: “Bütçe” → satırına dokunun.
2. “⋮” → “Kategoriyi düzenle”.
3. “Grup” alanına dokunun ve bir grup seçin.
4. “Kaydet”.

Aynısını doğrudan “Bütçe” ekranında da yapabilirsiniz: kategori satırını sola kaydırın → “Düzenle”.

### Tablette {#category-tablet}

Yatay tutulan tablette bir “Bütçe” satırına dokunmak sizi tablodan uzaklaştırmaz: kategorinin özeti, hedefi, notu, eğilimleri ve işlemleri sağda belirir. Oradaki ay tablonunkiyle aynıdır; kendi okları yoktur.

Panelde “⋮” menüsü yoktur. Bir kategoriyi gizlemek, yeniden adlandırmak ya da silmek için ekranını kullanın: tableti dik çevirin ve satıra dokunun ya da kategoriyi “Özet”ten veya “Raporlar”dan açın.

## İşlemler {#transactions}

Paranızın tüm geçmişi tek bir akışta. Her alışveriş, her maaş, her “vadesizden birikime biraz aktardım”.

*Ekranın altındaki “İşlemler” sekmesi*

### Bu ekran ne için {#transactions-why}

“Bütçe” ekranı “daha ne kadar harcayabilirim” sorusunu yanıtlar. “İşlemler” ise “peki gerçekte nereye gitti” sorusunu. Bu sizin günlüğünüzdür: kaydettiğiniz her şey günlere göre burada, en son gün en üstte.

##### Bulun

“Mart’taki o akşam yemeği ne kadardı?” — aramaya birkaç harf, işte orada.

##### Düzeltin

Yanlış kategori, fazladan bir sıfır, iki kez girilmiş kayıt — satırı kaydırın ve düzeltin.

##### Bankayla karşılaştırın

Kartta zaten geçenleri işaretleyin — bankanın henüz neyi işlemediğini hemen görürsünüz.

### Ekranda ne nerede {#transactions-screen}

Tam ekran açmak için herhangi bir ekran görüntüsüne dokunun.

[“İşlemler” ekranı: arama, menü, işlem türü çipleri, günlere göre işlem akışı ve ekleme düğmesi]

1. **Arama** — birkaç harfle, bir tutarla ya da tarihlerle her şeyi bulur.

   *Nasıl çalışır:*
   “migr” yazın — akışta yalnızca Migros alışverişleriniz kalır. Her yerde arar: alıcıda, kategoride, notta ve tutarda. “1189” bu tutarı bulur, “süt” de “Süt, yumurta, ekmek” notunu.

   Arama tarihleri sizin yazdığınız gibi anlar:

   - **15.08.2026** — tek bir gün;
   - **15.08** — her yıl o gün: “geçmiş doğum günlerinde ne almışım?”;
   - **08.2026** — bütün ağustos;
   - **02.08.26-10.08.26** — başlangıç ve bitiş, iki gün de dahil. Aylarla da çalışır: **06.2026-08.2026** — bütün yaz.

   Başlangıç ile bitiş arasına kısa çizgi, uzun çizgi ya da boşluk koymak yeterlidir — uygulama sınırın nerede olduğunu kendisi anlar. “8” gibi yalın bir sayı tarih olarak alınmaz: yoksa ₺8 araması bütün ağustosta boğulurdu.

   Diyez işareti etiket aramasını açar: “#yaz” — “yazlık” etiketli her şey, “#yaz kafe” — yalnızca yazlıktaki kafeler. Boşlukla ayrılmış iki etiket — ikisi de olan işlemler.

2. **Alıcılar ve etiketler** — en sık kime ve ne kadar ödediğiniz.

   *Nasıl çalışır:*
   İki sekmeli ayrı bir ekran. “Alıcılar” — ödeme yaptığınız ve size ödeme yapan herkes, bu yılın toplamıyla (dönem “⋮” menüsünde değişir). Mahalle bakkalına yapılan “küçük” alışverişlerin yıl içinde bir tatile denk geldiğini çoğu zaman burada öğrenirsiniz.

   “Etiketler” — kategorilerin üstündeki işaretleriniz: “tatil”, “tadilat”, “anneme hediye”. Geçmişini açmak için bir alıcıya ya da etikete dokunun. [“Alıcılar ve etiketler” makalesi](#payees-tags)

3. **“⋮” menüsü** — akışın görünümünü değiştiren her şey. Her madde [aşağıda](#transactions-menu) anlatılıyor.

4. **İşlem türü** — tek dokunuşla yalnızca giderler, yalnızca gelirler.

   *Nasıl çalışır:*
   Yalnızca gelen parayı mı görmek istiyorsunuz? “Gelirler”e dokunun. “Transferler”, paranın yalnızca kendi hesaplarınız arasında yer değiştirdiği durumlardır: vadesizden birikime, kredi kartını ödemek için. “Notlar” tutarsız kayıtlardır, kendinize hatırlatmalar.

   Aynı çipe tekrar dokunun, akışın tamamı geri gelir.

5. **Tarih** — herhangi bir güne atlayın.

   *Nasıl çalışır:*
   Altı ay geriye parmakla kaydırmak herkesin harcı değil. Tarih çipine dokunun, takvimde bir gün seçin — akış zaten oradadır. Bugüne dönmek için sol alttaki “Bugün” düğmesini kullanın.

6. **Bayrak** — kendiniz için renkli bir yer imi.

   *Nasıl çalışır:*
   Bayrak hiçbir şey hesaplamaz — yalnızca bir yer imidir. Kırmızı — “iki kez çekilmediğini kontrol et”, yeşil — “bir arkadaş geri ödeyeceğine söz verdi”. Renkleri ve anlamlarını siz uydurursunuz.

   Bayrağı işlem formunda ya da seçim yoluyla bir düzine satıra birden koyabilirsiniz. Gri bir çerçeve “bayrak yok” demektir. Bayrağın biçimi — nokta, üçgen ya da dalgalı bayrak — “Ayarlar → Görünüm” içindedir.

7. **Kategori** — paranın hangi zarftan çıktığı.

   *Nasıl çalışır:*
   Kategori, “Bütçe” ekranındaki bir zarftır. “Market” kategorili bir Migros alışverişi market zarfını küçültür: bütçe yiyecek için daha ne kadarınız olduğunu böyle bilir.

   Fişte hem yiyecek hem temizlik ürünü mü vardı? Tutarı bölebilirsiniz: her parça kendi zarfına gider, satır da her parça için bir çip gösterir. Maaşta ise kategori yerine “Bu ay kullanılabilir” vardır: para geldi ve zarflara dağıtmanızı bekliyor.

8. **Hesap** — nereden çekildiği ya da nereye geldiği.

   *Nasıl çalışır:*
   Vadesiz hesap, nakit, kredi kartı — her hesabın kendi simgesi ve rengi vardır, böylece okumadan tanırsınız. Transferin iki satırı vardır, her hesap için bir tane: birinde para çıktı, diğerinde geldi. Bu yüzden transferin başlığında bir mağaza değil diğer hesap görünür: vadesiz hesapta “Visa”, Visa’da “Vadesiz hesap”.

9. **Hesaba geçti** — dökümle tutup tutmadığı. İsteğe bağlı.

   *Nasıl çalışır:*
   Alışverişi kasada hemen kaydettiniz, banka ise bir iki gün sonra işledi. Daire karışıklığı önler: boş — bankada bu işlem henüz yok, onay işareti — var. Alışverişi bankanızın uygulamasında mı gördünüz? Daireye dokunun.

   Ayda bir hesabın tamamını mutabık kılabilirsiniz. O zaman onay işaretleri kilide dönüşür: “mutabık, bir daha dokunmuyorum”.

   **İşaret isteğe bağlıdır:** bütçeyi etkilemez, yalnızca hesabı bankayla karşılaştırmaya yardım eder. Hiç kullanmadıysanız geçin — boş daireler sorun değildir.

10. **Yeni harcama** — sağ alt köşedeki üç düğme.

    *Nasıl çalışır:*
    “+ İşlem” boş bir form açar — tutarı, kategoriyi ve hesabı kendiniz doldurursunuz.

    Üstünde yazmanız gerekmesin diye iki yuvarlak düğme var. Mor olan kameradır: fişin QR koduna tutun, uygulama tutarı ve tarihi kendisi doldurur (ülkenizin fişlerini tanıyorsa). Yeşil olan mikrofondur: “Migros 1759 Market” deyin, uygulama tutarı ve sizinkiler arasında tanırsa alıcıyı ve kategoriyi doldurur. Her iki durumda da aynı form açılır — kontrol edin ve kaydedin. [“İşlem formu” makalesi](#entry)

11. **Kamera ve QR simgeleri** — işleme bir fiş fotoğrafı ve bir e-fiş eklenmiş. [Nedir](#transactions-badges)

12. **PDF simgesi** — işleme bir dosya eklenmiş: bir fatura, bir hesap dökümü, bir internet mağazası fişi. [Nedir](#transactions-badges)

13. **Çatal simgesi** — tutar farklı kategorilere parçalara bölünmüş. [Nedir](#transactions-badges)

14. **Diyez işaretleri — etiketler** — “ne için” işaretleriniz; bir işlemin birkaç tane olabilir. [Nedir](#transactions-tags)

### Ekranın iki görünümü var {#transactions-two-views}

Ekranınız yukarıdaki resme benzemiyorsa endişelenmeyin. Sağ alt köşedeki düğmeler, işlemlerinizi kapatmasınlar diye katlanır.

[Açık düğmeler: “+ İşlem”, üstünde kamera ve mikrofon]
**Ekranı yeni açtınız.** Üç düğme: “+ İşlem”, kamera ve mikrofon.

[Katlanmış düğmeler: yalnızca “+” kaldı]
**Akışı aşağı kaydırdınız.** Yalnızca “+” kaldı — aynı işi yapar.

Kamerayı ve mikrofonu geri getirmek için akışı biraz yukarı kaydırın — düğmeler yeniden açılır.

İki görünümde de “+”ya dokunabilirsiniz: her zaman yeni işlem formunu açar.

### Satırdaki simgeler ve etiketler {#transactions-badges}

Bir işlemin yanındaki küçük simgeler, onda fazladan bir şey olduğunu söyler: eklenmiş bir fiş, bir dosya ya da birkaç kategori. Kendi başlarına bir şey yapmazlar — neyin eklendiğini görmek için satıra dokunun.

Alıcı yoksa adın yerinde bir çizgi “———” olur. Bu bir hata değildir: alıcı yalnızca girilmemiştir, yönü tutarın işareti gösterir.

#### Kamera — bir fiş fotoğrafı

Kâğıt bir fişin, bir fiyat etiketinin ya da alışverişin yanında saklamak istediğiniz herhangi bir şeyin resmi.

**Abartmayın.** Fotoğrafları her ekmeğe değil, gerçekten ihtiyaç duyacağınız şeylere ekleyin. [Neden](#transactions-attach-weight)

*Nasıl eklenir ve neden:*
İşlem formunda bir “Fotoğraflar ve PDF'ler” alanı var. “Ekle”ye dokunun ve “Fotoğraf çek” ya da “Galeriden seç”i seçin. Birkaç fotoğraf ekleyebilirsiniz.

Bir ay sonra bir şeyi garantiden iade etmeniz ya da o ₺1.189’lik alışverişte ne olduğunu hatırlamanız gerektiğinde işe yarar. Fotoğraf telefonda saklanır; diğer cihazlarınızda da görünmesi için eşitleme ayarlarında “Fotoğrafları eşitle”yi açın.

#### QR karesi — bir e-fiş

Kasanın verdiği fişin kodu ya da bağlantısı.

*Nasıl eklenir ve neden:*
Pek çok fişin altında bir QR kodu basılıdır — onunla fişi mağazanın ya da vergi idaresinin sisteminde bulabilirsiniz. İşlem formunda bir “E-fiş (URL veya kod)” alanı var: bağlantıyı oraya yapıştırın ya da tarayıcı simgesine dokunup kamerayı QR koduna tutun.

Uygulama ülkenizin fişlerini tanıyorsa fişi formla da karşılaştırır: tutarı henüz yazmadıysanız doldurur, tutarlar farklıysa bunu söyler ve düzeltmeyi önerir. Tarayıcı formdaki tarihi değiştirmez. Tanımadığı bir ülkenin fişi olduğu gibi kaydedilir — ve yine işe yarar: işlem kartında kodu kopyalayıp bağlantıyı açabilirsiniz.

#### “PDF” sayfası — eklenmiş bir dosya

Bir fatura, bir elektrik faturası, bir internet mağazası fişi — dosya olarak gelen her şey.

**Abartmayın.** PDF eklenirken sıkıştırılmaz — dosya olduğu gibi saklanır. [Neden](#transactions-attach-weight)

*Nasıl eklenir ve neden:*
Formdaki aynı “Fotoğraflar ve PDF'ler” alanı: “Ekle” → “PDF seç”. Dosya işlemin yanında durur — artık faturayı e-postanızda ya da “İndirilenler”de aramak yok.

Eklenmiş bir PDF’e dokunun — altta “Aç” (bir PDF uygulamasında) ve “Dosyaya kaydet” (seçtiğiniz bir klasöre kopya) belirir.

#### Her fotoğrafın bir ağırlığı var {#transactions-h-weight}

Veritabanının kendisi fotoğraflardan şişmez: yalnızca dosyaya bir bağlantı saklar. Ama dosya telefonda yaşar ve daha önemlisi **her yedeğe** tamamen girer. Varsayılan olarak en fazla 19 yedek tutulur — 7 sık ve 12 aylık, telefonda ve bulutta.

Böylece 300 KB’lık tek bir fiş fotoğrafı yedeklerde neredeyse 6 MB, yüz tanesi yarım gigabayttan fazla yer kaplayabilir. “Fotoğrafları eşitle” açıksa her biri ayrıca buluta ve diğer cihazlarınıza gider. PDF’lerde de aynısı, yalnız eklenirken hiç sıkıştırılmazlar.

**Kural basit:** ihtiyaç duyacağınızı ekleyin — garanti belgesi, pahalı bir alışverişin fişi, kayıtlarınız için bir fatura. Ekmek ve süt fotoğrafsız da olur. E-fiş (QR) ise bir satır metin kadar tutar — her alışveriş için kaydedebilirsiniz.

#### Çatal — tutar parçalara bölünmüş

Tek bir alışveriş — birkaç kategori. Formda kategori listesindeki “Tutarı böl”dür; işlem kartında parçalar “BÖLME” başlığı altında durur.

*Nasıl çalışır:*
Ekran görüntüsündeki “Gratis”te tek bir ödemeyle ₺2.150 ödediniz, ama hem yiyecek hem temizlik ürünü aldınız. Hepsini “Market”e kaydetseydiniz market zarfı fazladan ₺625 küçülürdü, “Ev gereçleri” ise el değmeden kalırdı — ve bütçe yalan söylemeye başlardı.

Bu yüzden tutar bölünür: “Market”e ₺1.525, “Ev gereçleri”ne ₺625. Akışta böyle bir işlemin her parça için bir çipi, kartında da bir “BÖLME” bölümü vardır. Tutarı işlem formunda kategori seçerken bölebilirsiniz.

##### Kasada nakit çekmek de bir bölmedir

Mağazada kartla ₺2.500 ödüyorsunuz ve kasiyerden ₺750 nakit istiyorsunuz. Banka ₺2.500’lük tek bir çekim gösterir, ama aslında iki şey oldu: ₺1.750 markete gitti, ₺750 ise yalnızca kartınızdan cüzdanınıza geçti.

1. “Vadesiz hesap” hesabından ₺2.500’lük bir işlem kaydedin ve tutarı bölün.
2. İlk parça — ₺1.750, kategori “Market”.
3. İkinci parça — ₺750: kategori seçicide “Transferler” bölümüne kaydırın ve “Transfer: Nakit”i seçin.

Akışta bir “Transfer: Nakit” çipi görünür, “Nakit” hesabı ₺750 artar, market zarfı da tam ₺1.750 küçülür. Hepsini “Market”e kaydedin, bütçe ₺750 fazla yediğinizi düşünür, cüzdanınız da içinde olduğundan azını gösterir.

#### Bir dizi diyez — etiketler

Kategorilerin üstündeki işaretleriniz: “#yazlık”, “#yarı yarıya”, “#tatil”. Bir işlemin istediği kadar etiketi olabilir.

*Nasıl çalışır:*
Kategori “neye harcadım” sorusunu, etiket ise “ne için” sorusunu yanıtlar. “Migros”tan alınan süt ve ekmek “Market”tir, ama yazlık için alındı. Onları “#yazlık” diye etiketleyin — sonra para markete, benzine ve inşaat malzemesine gitmiş olsa da yazlıktaki yazın neye mal olduğunu bir bakışta görürsünüz.

Ekran görüntüsündeki “BİM”in aynı anda iki etiketi var: yazlık için market ve bir arkadaşla yarı yarıya ödendi. Bir işlemin istediği kadar etiketi olabilir.

##### Etiket nasıl eklenir

1. İşlem formunda, notun altında “Etiketler” alanına dokunun.
2. Son kullanılan etiketler üstte olan bir liste açılır. Gerekenleri işaretleyin.
3. İstediğiniz etiket henüz yok mu? Adını “Etiket bul veya oluştur” satırına yazın ve ““…” etiketini oluştur”a dokunun.
4. “Tamam”a dokunun.

##### Sonra nereye bakmalı

- **Bir etiket altında ne kadar harcandı** — başlıktaki “Alıcılar ve etiketler” simgesi (2 numaralı açıklama), “Etiketler” sekmesi. Ekranını açmak için bir etikete dokunun: tüm zaman boyunca ne kadar çıktığı, kategorilere ve aylara göre, ve tüm işlemler.
- **İşlemleri bulun** — aramaya “#” ve etiketin başını yazın: “#yaz”, yazlık için olan her şeyi gösterir.
- **Kim kime borçlu** — “#yarı yarıya” gibi bir etiket için ekranındaki “⋮” menüsünde “Hesaplaşma”yı açın. Uygulama denkleşmek için daha ne kadar toplanacağını ya da geri verileceğini gösterir.

Satırdaki etikete dokunulamaz — bu bir düğme değil, bir işarettir.

Ayrıca şunlar var: **iki ok** — hesaplarınız arasında bir transfer; **oklu küçük bir takvim** — planlı bir ödemeden girilmiş bir işlem; **yapışkan not** — bir not: tutarsız bir kayıt, kendinize bir hatırlatma.

### “⋮” menüsü {#transactions-menu}

Buradaki her şey akışın nasıl gösterileceğiyle ilgilidir. Tek bir madde bile kayıtlarınızı değiştirmez ya da silmez — gönül rahatlığıyla deneyin.

[Açık “⋮” menüsü: İşlem seçimi, Filtre, Sıralama, Günlük toplam, İpuçları, Bilgi bankası]

(A)
#### İşlem seçimi

Bir düzine satıra birden tek bir işlem.

*Nasıl çalışır:*
Dökümle karşılaştırmak için bir düzine alışverişe kırmızı bayrak mı koymanız gerekiyor? Her birini açmanız gerekmez. Seçimi açın ve satırları işaretleyin — altta toplamları belirir (fişleri toplamak için de kullanışlıdır). Toplamın yanındaki “⋮”ya dokunun: hepsine birden kategori, bayrak ya da “hesaba geçti” işareti koyabilir, bugünün tarihiyle tekrarlayabilir, başka bir hesaba taşıyabilir ya da silebilirsiniz. Son madde “Seçimi kaldır”, hiçbir şeyi değiştirmeden seçimden çıkar.

Kısayol: herhangi bir satırı basılı tutun.

(B)
#### Filtre

Akışta yalnızca gerekeni bırakın.

*Nasıl çalışır:*
Örneğin: “geçen ay kafe harcamaları, yalnızca kart”. Türe, döneme, kategoriye, alıcıya, hesaba, tutara ve etikete göre filtreleyebilirsiniz. Filtreler toplanır — her yenisi akışı daraltır.

Bir filtre açıkken “⋮” üzerinde bir sayı yanar — akışın şu anda eksik olduğunu hatırlatır. Yoksa işlemlerin kaybolduğunu sanmak kolaydır.

**Kurulumdan hemen sonra:** filtre yok. **Kendiliğinden sıfırlanır:** bütçe değiştirdiğinizde — başka bir bütçenin kendi kategorileri ve hesapları vardır. **Ayrıca bakın:** [rapor filtresi](#reports).

(C)
#### Sıralama

Bir gün içindeki işlemlerin nasıl dizileceği.

*Nasıl çalışır:*
Günler her zaman takvimdeki gibi gider — en sonuncu üstte, bu değiştirilemez. Ama bir gün içinde kendi sıranızı belirleyebilirsiniz: büyük harcamalar üstte (“Azalan”), küçükler üstte (“Artan”) ya da önce gelirler. Seçilen sıra doğrudan menü maddesinde yazar — böylece bir hafta sonra bir günün neden “karışık” göründüğüne şaşırmazsınız.

**Kurulumdan hemen sonra:** giriş sırasıyla. **Şurada da çalışır:** hesap ekranında, bir kategorinin işlemlerinde ve bir alıcıda.

(D)
#### Günlük toplam

Bir günde ne kadar çıktığı — doğrudan tarihin yanında.

*Nasıl çalışır:*
“Yalnızca giderler”i açın — her tarihin sağında o gün ne kadar harcadığınızı görürsünüz. “Pahalı” günleri yakalamanın harika bir yolu: pazarlı ve sinemalı bir cumartesi hemen göze çarpar.

“Giderler ve gelirler”, farkı işaretli tek bir sayı olarak gösterir: “−2.500” — gün eksiye düştü, “+35.000” — maaş geldi. Kendi hesaplarınız arasındaki transferler ve açılış bakiyeleri sayılmaz: bunlar harcama değil, para yalnızca yer değiştirdi.

**Kurulumdan hemen sonra:** gösterilmez. **Şurada da çalışır:** hesap ekranında ve bir kategorinin işlemlerinde.

(E)
#### İpuçları

Bu ekranın tüm ipuçları tek bir yerde.

*Nasıl çalışır:*
Uygulamada ipuçları her seferinde bir tane belirir — sizi her şeyle birden boğmamak için, işe yaradıkları anda. Burada hepsi toplanmış, henüz ulaşmadıklarınız bile.

(F)
#### Bilgi bankası

Web sitesindeki bu makale: tarayıcıda, uygulamanın dilinde açılır.

### Satırla neler yapabilirsiniz {#transactions-gestures}

Satırda “düzenle” ve “sil” düğmeleri yoktur — okumayı engellemesinler diye. Bunun yerine satıra dokunun ya da parmağınızla yana kaydırın.

| Bunu yapın | Ne olur |
|---|---|
| Dokunun | İşlem kartı açılır: onunla ilgili her şey, fiş fotoğrafları, düzenleme. [İçinde ne var](#transactions-detail) |
| Sola kaydırın | “Düzenle” — doğrudan forma. |
| Sağa kaydırın | “Sil”. Fikrinizi mi değiştirdiniz? “Geri al” birkaç saniye altta kalır. |
| Basılı tutun | Birkaç satırın seçimi açılır — [“İşlem seçimi”](#transactions-select) maddesindeki gibi. |

#### Bir işleme dokundunuz — içinde ne var {#transactions-detail}

İşlem kartı aşağıdan kayarak gelir: onunla ilgili kaydettiğiniz her şey, tek bir sayfada. “Düzenle”ye dokunana kadar hiçbir şey değişmez — sakin sakin bakabilirsiniz.

[“Migros” işlem kartı: tutar, alıcı, kategori, hesap, tarih, e-fiş, not, “yazlık” etiketi, fiş fotoğrafı, “Tekrarla”, “Düzenle”, “Planlı ödeme oluştur” düğmeleri]
**Fişli ve fotoğraflı bir alışveriş.**

[“Gratis” bölünmüş kartı: bölme parçaları — Market ₺1.525 ve Ev gereçleri ₺625]
**Bölünmüş bir tutar.** Altta — bölme parçaları.

- **Üstte büyük** — işaretli tutar: eksi gider, artı gelirdir.
- **Alıcı, kategori, hesap, tarih** — formda kaydettiğiniz.
- **Fiş** — e-fiş. “Kopyala” kodu panoya koyar, böylece gereken yere yapıştırabilirsiniz. Bağlantıysa bir de “Aç” vardır — fiş tarayıcıda açılır.
- **Etiketler** — işlemin işaretleri çip olarak, akıştaki gibi: “#yazlık”.
- **Fotoğraflar** — eklenmiş resimlerin ve PDF’lerin küçük resimleri. Tam ekran açmak için bir resme dokunun.
- **Bölme parçaları** — bölünmüş bir tutar için: her parça kendi kategorisi, notu ve tutarıyla.

##### Alttaki düğmeler

- **“Düzenle”** — bu işlemi formda açın ve istediğinizi değiştirin.
- **“Tekrarla”** — aynı alıcı, kategori ve tutarla yeni bir işlem. Sık aldığınız şeyler için kullanışlı: kahve, ulaşım, öğle yemeği.
- **“Planlı ödeme oluştur”** — bu işlemden düzenli bir ödeme yapın: kira, abonelik, kredi. Geriye yalnızca ne sıklıkla tekrarlanacağını seçmek kalır.

Bölünmüş bir tutarda ve bir transferde yalnızca “Düzenle” vardır: uygulama onları yarım yamalak tekrarlamaz.

## Raporlar {#reports}

On rapor: paranızın nereye gittiği, harcamaların nasıl değiştiği, gelirin nereden geldiği ve net varlığınızın büyüyüp büyümediği.

*Ekranın altındaki “Raporlar” sekmesi*

### Sekme nasıl çalışır {#reports-how}

Ekranda her seferinde bir rapor. Üstte hangi rapor ve hangi dönem, altında raporun kendisi. Uygulama raporu ve dönemi hatırlar: “Harcama eğilimi”ni altı aylık açın, bir dahaki sefere o açılır.

[Eylül — Kasım için Para nereye gitti raporu: halka, toplam 147.333, kategori listesi]

1. **Rapor adı** — tüm raporların listesini açmak için dokunun (aşağıdaki ekran görüntüsü).

2. **Filtreler** — huni: dönem, kategoriler, hesaplar, etiketler. Üzerindeki sayı, kaç filtrenin açık olduğudur.

   *Nasıl çalışır:*
   “Kira” kategorisini kapatın — harcama raporlarından kaybolur ve günlük harcamalarınızın resmi netleşir. Filtreler her bütçe için hatırlanır.

3. **Dönem** — “‹ ›” okları pencereyi bir ay geri ya da ileri kaydırır, yazıya dokunmak dönem seçiciyi açar: bir ay, 3, 6, 12 ay, yılbaşından bugüne ya da kendi aralığınız.

   *Nasıl çalışır:*
   Geçerli aydan mı uzaklaştınız? Geri dönmek için yanında “Bugün” belirir. Her raporun kendi dönemi vardır: harcamalara aylık, eğilime yıllık bakmak kullanışlıdır.

4. **Görünüm** — bazı raporların birkaç görünümü vardır: halka, baloncuklar, kutucuklar, tablo ya da grafik. Seçim her rapor için hatırlanır.

5. **Liste** — aynı sayılar satır olarak: renk, ad, tutar, yüzde. Kategori ya da alıcı ekranını açmak için bir satıra dokunun.

[Rapor seçme sayfası: Harcamalar, Para hareketi, Varlık bölümleri]
**Rapor seçimi.** Üç bölüm — raporun yanıtladığı soruya göre.

[Rapor filtreleri sayfası: Dönem, Kategoriler, Hesaplar, Etiketler]
**Rapor filtreleri.** Her bölüm açılır.

### Harcamalar {#reports-spending}

Paranın nereye gittiği ve bunun nasıl değiştiği.

#### Para nereye gitti {#reports-r-spending}

Dönem içindeki harcamalar kategoriye göre — “hepsi nereye gitti” sorusunun ana raporu. Aynı şeyin üç görünümü: hangisi size daha açık geliyorsa onu seçin.

[Baloncuklar: Kira 90.000, %61, Market 22.177, %15]
**Baloncuklar.** Baloncuğun alanı tutardır.

[Kutucuklar: Kira, Market, Büyük alışverişler]
**Kutucuklar.** Kutucuğun alanı tutardır.

(•)
#### Halka, baloncuklar, kutucuklar

Aralarında resmin üstünde sağdaki simgelerle geçiş yapın. Halka tanıdıktır; baloncuklar ve kutucuklar küçük kategorileri büyüklerin yanında daha iyi gösterir.

(•)
#### Dokunma

Halkanın bir dilimine, bir baloncuğa ya da bir kutucuğa dokunun — vurgulanır ve listedeki satırı yanar. İkinci dokunuş o kategorinin ekranını açar.

(•)
#### Ne sayılır

Harcamalar eksi iadeler, kendi hesaplarınız arasındaki transferler olmadan. Ekran görüntüsünde üç ayda ₺147.333 çıktı, %61’i kiraya.

*Nasıl çalışır:*
Kira ve faturalar olmadan günlük harcamaları mı görmek istiyorsunuz? Onları “Kategoriler” filtresinde kaldırın.

#### Harcama eğilimi {#reports-r-trend}

Harcamalarınız artıyor mu, azalıyor mu — aylara göre, ortalama ve bir eğilim çizgisiyle.

[Harcama eğilimi Haziran — Kasım: aylara göre sütunlar, seyir, eğilim ve ortalama çizgileri, Dönem toplamı 289.773]

(•)
#### Üstte

Aylık ortalama harcama ve nereye gittiği: “yükseliyor ≈ ₺955,00/ay” ya da “düşüyor”.

(•)
#### Grafik

Sütunlar her ayın harcamasıdır. Noktalı çizgi seyir, düz çizgi eğilim, kesikli çizgi ortalamadır. Geçerli ay soluktur: henüz bitmedi, bu yüzden ortalamaya ve eğilime katılmaz.

(•)
#### “Aylık” tablosu

Her ay ve ortalamadan ne kadar uzak olduğu — lira ve yüzde olarak. Grafikte bir aya dokunun, tam tutar üstünde belirir.

#### Örnek: faturalar pahalanıyor mu {#reports-r-trend-example}

Genel eğilim bunu söylemez: içinde tüm harcamalar birden vardır ve tek bir kategorideki artış ötekilerin arasında kaybolur. Raporda yalnızca bir kategori bırakın.

[Rapor filtreleri: Kategoriler 18 içinden 1, Tümünü kaldır, yalnızca Faturalar işaretli]
**Filtre.** Raporda bir kategori kaldı.

[Yalnızca faturalar için Harcama eğilimi: ₺2.432/ay, düşüyor ≈ ₺96,70/ay, ekim ortalamaya göre −%20]
**Sonuç.** Yalnızca faturaların eğilimi.

6. **“Kategoriler”** — “Harcama eğilimi”nde sağ üstteki huniye, sonra “Kategoriler”e dokunun: onay kutulu tüm kategorilerin listesi açılır.

7. **“Tümünü kaldır”** — tek tek yerine tüm kategorilerin işaretini birden kaldırır.

8. **Gereken kategori** — “Faturalar”ı işaretleyin. “Kategoriler”in altında artık “18 içinden 1” yazar. Sayfayı kapatın: aşağı kaydırın ya da dışına dokunun.

9. **Hunideki sayı** — kaç filtrenin açık olduğu. Yandığı sürece rapor tüm harcamaları göstermez.

Artık rapor yalnızca faturalarla ilgili: ayda ortalama ₺2.432, faturalar ayda yaklaşık ₺96,70 düşüyor, ekim de ortalamadan %20 ucuzdu. Filtre bu rapor için hatırlanır: bir dahaki sefere “Harcama eğilimi” onunla açılır. Tüm kategorileri geri getirmek için — filtre sayfasında “Tümünü seç” ya da “Sıfırla”.

#### En çok ödenen alıcılar {#reports-r-payees}

“Para nereye gitti”nin aynısı, ama alıcıya göre: en çok kime ödüyorsunuz.

[En çok ödenen alıcılar: halka, Ev sahibi 90.000, Migros, IKEA, BİM]

(•)
#### Aynı üç görünüm

Halka, baloncuklar ya da kutucuklar — bu rapor kendi seçimini tutar.

(•)
#### Dokunma

Bir satır ya da bir dilim alıcı ekranını açar: onunla tüm harcamalar, kategoriye ve aya göre ([“Alıcılar ve etiketler”](#payees-tags) makalesi).

#### Sapma {#reports-r-deviation}

Bu ay nerede olağandan fazla ya da az harcadığınız — bir bakışta. Karşılaştırma, dönemden önceki 12 ayınızla yapılır: devam eden ay, geçmiş ayların ayın 1’inden bugünkü tarihe kadarki aynı günleriyle; birkaç aylık bir dönem ise ay sayısıyla çarpılmış olağan bir ayla karşılaştırılır.

[Kasım için Sapma: kategorilere göre kutucuklar, renk olağandan fazla mı az mı olduğunu gösterir]

(•)
#### Kutucuklar

Kutucuğun büyüklüğü ne kadar harcandığı, rengi olağandan ne kadar fazla (kırmızımsı) ya da az (yeşilimsi) olduğudur, üç basamakta. Griler olağandır, %10 içinde. Dolgusuz bir çerçeve, kategorinin ilk kez göründüğü anlamına gelir.

(•)
#### “Genelde”

Yıl içindeki geçmiş aylarınızın ortası: alışılmadık derecede pahalı tek bir ay onu kaydırmaz. Geçerli ay için — “bu tarihe kadar genelde”: 10 Kasım, geçmiş ayların aynı günleriyle karşılaştırılır.

(•)
#### Sözcüklerle özet

Kutucukların altında — tutarlarıyla “Her zamankinden fazla”, “Daha az”, “Yeni”. “Kategoriler” ya da “Alıcılar” — üstteki çipler.

#### Etiketler {#reports-r-tags}

Her etiketin altında ne kadar gittiği — aylara göre, tablo ya da grafik olarak.

[Etiketler raporu: aylara göre tablo — yazlık, Birlikte, Tüm harcamalar; Hesaplaşmalar bölümü — yarı yarıya, toplanacak 1.075]

[Grafik olarak Etiketler raporu: Grafikte 1/4, Dönemin en büyükleri]

(•)
#### Tablo

Her etikete bir satır, her aya bir sütun. “Birlikte”, tüm etiketler birdendir: iki etiketli bir işlem burada bir kez sayılır. “Tüm harcamalar” karşılaştırma içindir.

(•)
#### “Hesaplaşmalar”

“Hesaplaşma” açık etiketler, ayrı bir blok olarak: ne kadar toplanacağı ya da geri verileceği.

(•)
#### Grafik

En fazla dört etiket, aylara göre çizgiler olarak; hangileri olacağını grafiğin üstünde seçersiniz.

### Para hareketi {#reports-flow}

Paranın nereden geldiği, nereye gittiği ve ne kadarının kaldığı.

#### Para akışı {#reports-r-flow}

Paranın tüm yolculuğu tek bir resimde: gelir kaynaklarından — bütçeye — gruplara — kategorilere.

[Para akışı: İşveren → Bütçe; üstte Gelir 210.000, Gider 147.333, Net +62.667, Tasarruf %30]
**Solda** — paranın nereden geldiği.

[Para akışı, sağ kısım: gider grupları → kategoriler, Kalan]
**Yana kaydırın** — gruplar ve kategoriler.

(•)
#### Üstte

Gelir, gider, “net” (ne kadar kaldığı) ve tasarruf oranı — gelirin yüzde kaçının harcanmadığı.

(•)
#### Şeritler

Şeridin kalınlığı tutardır. Tutarı ve yüzdeyi görmek için bir şeride dokunun. Yeşil “Kalan” şeridi hiçbir yere gitmeyen paradır.

(•)
#### Nasıl bakılır

Resim ekrandan geniştir: yana ve aşağı kaydırın. Toplamların bulunduğu başlık resimle birlikte kayar.

#### Gelirler ve giderler {#reports-r-ie}

Ay ay hesap: ne kadar geldi, gruplara göre ne kadar çıktı, ne kaldı.

[Tablo olarak Gelirler ve giderler: Gelirler, gruplara göre Giderler, Toplam, aylara göre Tasarruf oranı]
**Tablo.**

[Grafik olarak Gelirler ve giderler: aylara göre yeşil ve kırmızı sütunlar ve bir toplam çizgisi]
**Grafik.**

(•)
#### Tablo

Satırlar kaynağa göre gelir ve gruba göre giderlerdir; bir grup kategorilere kadar açılabilir. Altta — her ayın “Toplam”ı ve “Tasarruf oranı”.

*Nasıl çalışır:*
Hangi işlemlerden oluştuğunun listesini açmak için bir sayıya dokunun. Tablo ekrandan geniştir — yana kaydırın.

(•)
#### Grafik

Her ayın iki sütunu vardır: yukarı giden yeşil — ne kadar para geldiği, aşağı giden kırmızı — ne kadar çıktığı. İnce bir çizgi ne kaldığını gösterir: sıfırın üstünde — ay artıyla bitti; altında — gelenden fazlasını harcadınız. Grafiğin üstünde tüm dönem için dört sayı vardır: gelir, gider, toplam ve tasarruf oranı. Bir aya dokunun, sayılar yalnızca o ayı gösterir; parmağınızı kaydırın, komşu aylarda değişirler; aynı aya tekrar dokunun, yeniden tüm dönem olur.

#### Paranın yaşı {#reports-r-aom}

Paranızın yaşının ay ay nasıl değiştiği.

[Paranın yaşı: dönem sonunda 52 gün, aylara göre bir çizgi]

(•)
#### Üstteki sayı

Dönem sonundaki yaş — “Özet” ekranındaki sayının aynısı.

(•)
#### Neden

Tamponunuzun büyüyüp büyümediğini görürsünüz. Yukarı giden bir çizgi, “maaştan maaşa”dan gitgide uzaklaştığınız anlamına gelir. Sayının ne anlama geldiği ve nasıl hesaplandığı — [“Özet”](#overview) makalesinin “Paranın yaşı ayrıntılı” bölümünde.

### Varlık {#reports-capital}

Sahip olduğunuz ve borçlu olduğunuz her şey.

#### Net varlık {#reports-r-networth}

Tüm hesapların toplamı eksi borçlar — ve nasıl değiştiği.

[Net varlık: dönem sonunda 305.227, aylara göre bir çizgi, oklu aylık tablo]

(•)
#### Neler dahil

Ana para birimindeki tüm hesaplar — hem bütçede hem bütçe dışında (birikim, mevduat) —, eksi kredi kartları ve krediler. Diğer para birimlerindeki hesaplar dönüştürülmez ve toplama dahil edilmez.

(•)
#### Tablo

Her ayın sonundaki net varlık, bir okla — yukarı ya da aşağı.

#### Kart borcu {#reports-r-carddebt}

Kredi kartlarına ne kadar borçlu olduğunuz — ve borcun büyüyüp büyümediği.

[Kart borcu: dönem sonunda 22.274, dönemde borç 14.085 arttı]

(•)
#### Üstteki sayı

Dönem sonunda tüm kredi kartlarındaki borç ve dönem içinde ne kadar büyüdüğü ya da küçüldüğü.

(•)
#### Ne zaman görürsünüz

Rapor yalnızca bir kredi kartınız varsa listededir. Kredi kartının bütçede nasıl çalıştığı — [“Bütçe nasıl çalışır”](#start) makalesinde.

## Hesaplar {#accounts}

Paranızın tutulduğu her yer: kartlar, cüzdanınız, birikim, kredi kartları. Ve şu anda nerede ne kadar olduğu.

*Ekranın altındaki “Hesaplar” sekmesi*

### Bu ekran ne için {#accounts-why}

Burada paranızın şu anda nerede olduğunu görürsünüz: vadesiz hesapta ne kadar, cüzdanınızda ne kadar, kredi kartına ne kadar borçlusunuz. “Bütçe” ekranındaki zarflar “ne için” sorusunu, hesaplar ise “nerede” sorusunu yanıtlar.

##### Hesaplarınızı ekleyin

Paranın tutulduğu her yer: tüm bankalardaki kartlar, cüzdanınız, birikim.

##### Bankayla karşılaştırın

Haftada ya da ayda bir, uygulamanın ve bankanın aynı şeyi gösterdiğinden emin olun.

##### Eskileri temizleyin

Bir kartı mı kapattınız? Gizleyin, geçmiş kalır.

### Ekranda ne nerede {#accounts-screen}

Tam ekran açmak için herhangi bir ekran görüntüsüne dokunun.

[“Hesaplar” ekranı: hesap ve tutarlarıyla “BÜTÇEDE”, “KREDİ KARTLARI”, “BÜTÇE DIŞI” bölümleri]

1. **Bölüm** — tek türden hesapların rafı. Bölümü katlamak için adına dokunun.

   *Nasıl çalışır:*
   Dört bölüm vardır ve bir hesabın hangisine düştüğü türüne bağlıdır. “BÜTÇEDE” zarflara paylaştırdığınız paradır: vadesiz hesap, nakit. “KREDİ KARTLARI” — kredi kartları. “BÜTÇE DIŞI” — biriktirdiğiniz ya da yalnızca göz önünde tutmak istediğiniz şeyler: birikim, mevduat. “Borçlar” — krediler. Boş bir bölüm gösterilmez. Ayrıntılar [“Bütçede mi, bütçe dışı mı”](#accounts-kinds) bölümünde.

2. **Bölüm toplamı** — bölümdeki tüm hesaplarda ne kadar olduğu.

   *Nasıl çalışır:*
   Ekran görüntüsünde “BÜTÇEDE” ₺117.816: bu, vadesiz hesap ve nakit birlikte, tam olarak “Bütçe” ekranında zarflara paylaştırdığınız para. “KREDİ KARTLARI”nın toplamı kırmızıdır — bu borçtur.

3. **Hesap** — bir satır bir cüzdan, kart ya da mevduattır. Simge ve renk hesabın türünden gelir.

   *Nasıl çalışır:*
   Hesap ekranını açmak için satıra dokunun: tüm işlemleri, “İşlemler”deki gibi, ama yalnızca bu hesap için. Hesap menüsünü açmak için basılı tutun ([aşağıda](#accounts-hold)). Sola ya da sağa kaydırın — “Düzenle” ya da “Sil”.

4. **Bakiye** — kayıtlarınıza göre şu anda hesapta ne kadar olduğu.

   *Nasıl çalışır:*
   Bu, hesabın başlangıç bakiyesiyle birlikte tüm işlemlerinin toplamıdır. Bankayla tutmuyorsa bir işlem unutulmuş ya da iki kez kaydedilmiştir. Nasıl bulunur — [“Bakiye mutabakatı”](#accounts-reconcile).

5. **“Bekliyor”** — bankanın henüz işlemediği işlemlerin toplamı.

   *Nasıl çalışır:*
   Ekran görüntüsünde vadesiz hesap −₺1.189 gösteriyor: “Migros”taki alışverişi zaten kaydettiniz, ama henüz bankada değil. Dökümünüzde göründüğünde akıştaki daireyle işaretleyin (“İşlemler”de — 9 numaralı açıklama), satır kaybolur. Böyle işlemler olduğu sürece uygulamadaki bakiye ile bankanızın uygulamasındaki bakiye haklı olarak farklıdır — tam bu tutar kadar. İşaret isteğe bağlıdır. Kullanmıyorsanız hesabın tüm işlemleri buraya düşer — bu bir hata değildir, satır o zaman yalnızca size bir şey söylemez.

6. **“KREDİ KARTLARI”** — kredi kartları için ayrı bir bölüm. Kırmızı toplam, bankaya ne kadar borçlu olduğunuzdur. Uygulama her kredi kartı için “Bütçe” ekranında kendiliğinden özel bir kategori oluşturur — ona dokunmayın.

   *Nasıl çalışır:*
   Kredi kartı harcamaları, banka kartı harcamaları gibi zarfları küçültür. Ama kartı kapatacak parayı uygulama kendisi ayırır — “Bütçe” ekranındaki “Kart ödemeleri” grubuna. Kredi kartı ödemesi, banka kartınızdan kredi kartına bir transferdir.

   **Özel kategori.** “Kredi kartı” türünde bir hesap oluşturduğunuzda uygulama “Bütçe” ekranında, “Kart ödemeleri” grubunda kartla aynı adlı bir kategori oluşturur. Adının altında “Kart borcu …” yazar. Uygulama ödeme için parayı ona ayırır: kredi kartıyla ₺875 harcadınız — alışverişin zarfından buraya ₺875 geçti.

   **Bu kategoriye dokunmayın** — zaten uygulama da izin vermez: yeniden adlandırılamaz, silinemez ya da başka bir gruba taşınamaz; “Kart ödemeleri” grubuna da kendi kategorinizi ekleyemezsiniz. Uygulama bu kartın borcunu onunla sayar. Kartı “Hesaplar” ekranında yeniden adlandırın — kategori kendini yeniden adlandırır. Kartı başka bir türe çevirin — kategori kaybolur, parası da “dağıtılmadı”ya döner.

   Onunla ilgili bir şey yine de sizindir: **kartın siz takibe başlamadan önceki borcu**. Uygulama onun için para ayırmaz — kapatmak için bu kategoriye, her zarf gibi, azar azar ya da bir seferde para koyarsınız.

7. **“BÜTÇE DIŞI”** — parası zarflara paylaştırılmayan hesaplar: birikim, mevduat. Nasıl farklı oldukları — [aşağıda](#accounts-kinds).

8. **“⋮” menüsü** — hesap ekleyin ve listenin görünümünü ayarlayın. [Aşağıda](#accounts-menu) anlatılıyor.

### Bütçede mi, bütçe dışı mı {#accounts-kinds}

Her hesapla ilgili ana soru: parasını zarflara paylaştırıyor musunuz? Yanıt, hesabın bu ekranda nerede göründüğünü ve parasının “Bütçe” ekranına ulaşıp ulaşmadığını belirler.

##### Bütçede

Vadesiz hesap, nakit, kredi kartı — her gün harcadığınız yerler. Buradaki her lira bir zarfta olmalı. Maaş vadesiz hesaba düşer — “dağıtılmadı”ya gider.

##### Bütçe dışı

Birikim, mevduat, yatırımlar, kredi — görmek istediğiniz ama her gün harcamadığınız şeyler. Bu paranın zarfları yoktur. Birikimden vadesiz hesaba para mı aktardınız? “Dağıtılmadı”da görünür ve onu dağıtabilirsiniz.

Yeni bir hesap türüne göre kendi bölümüne kendiliğinden düşer: “Nakit” ve “Banka hesabı” “BÜTÇEDE”ye, “Kredi kartı” “KREDİ KARTLARI”na, “Kredi” “Borçlar”a, “Yalnızca takip” “BÜTÇE DIŞI”na gider. Kredilerin ve “Yalnızca takip” hesaplarının zarfları yoktur.

### “⋮” menüsü {#accounts-menu}

Yeni bir hesap ve listenin nasıl gösterileceği.

[“Hesaplar” ekranının “⋮” menüsü: Hesap ekle, Yürüyen bakiyeler, Gizli hesaplar, İpuçları, Bilgi bankası]

(F)
#### Hesap ekle

Yeni bir kart, cüzdan ya da mevduat.

*Nasıl çalışır:*
1. “Hesap ekle”ye dokunun.
2. Bir tür seçin: “Nakit”, “Banka hesabı”, “Kredi kartı”, “Kredi” ya da “Yalnızca takip”. Tür bölümü ve simgeyi belirler.
3. Bir ad girin — bu hesaba ne diyorsanız: “Garanti kartı”, “Cüzdan”.
4. Bugün hesapta ne kadar olduğunu girin — bankanızın uygulamasındaki ya da cüzdanınızdaki tutar.
5. Kaydedin. Tutar başlangıç bakiyesi olur. Nakit ve banka hesabı için doğrudan “Bütçe” ekranındaki “dağıtılmadı”ya gider — onu zarflara dağıtın.

(G)
#### Yürüyen bakiyeler

Her işlemden sonraki bakiyeyi gösterin — tüm hesaplar için birden.

*Nasıl çalışır:*
Tek bir hesabın menüsündeki “Yürüyen bakiye”nin aynısı, yalnızca hepsi için. **Kurulumdan hemen sonra:** kapalı.

(H)
#### Gizli hesaplar

Gizli hesapları listenin altında gösterin.

*Nasıl çalışır:*
Parantez içindeki sayı kaç tane olduklarıdır. Gizli hesap olmadığı sürece madde, ekran görüntüsündeki gibi gridir. Listedeki her gizli hesabın bir “Geri getir” düğmesi vardır.

(I)
#### İpuçları

Bu ekranın tüm ipuçları tek bir yerde.

(J)
#### Bilgi bankası

Web sitesindeki bu makale: tarayıcıda, uygulamanın dilinde açılır.

### Satırla neler yapabilirsiniz {#accounts-gestures}

Hesap satırında düğme yoktur. Dokunun, basılı tutun ya da yana kaydırın.

| Bunu yapın | Ne olur |
|---|---|
| Dokunun | Hesap ekranı: üstte bakiye ve “Bekliyor” ile tüm işlemleri. |
| Basılı tutun | Hesap menüsü — [aşağıda anlatılıyor](#accounts-hold). |
| Sola kaydırın | “Düzenle” — hesap düzenleme sayfası: ad, tür, görünüm. |
| Sağa kaydırın | “Sil”. Hesabın işlemleri olduysa uygulama “Gizle”yi önerir. |

#### Hesap menüsü — basılı tutun {#accounts-hold}

Hesap satırının, addan yer çalmasın diye kendi “⋮” menüsü yoktur. Menü, parmağınızın olduğu yerde uzun basışla açılır. Aynı maddeler hesabın kendi ekranındaki “⋮” menüsünde de var.

[Uzun basışta hesap menüsü: Bakiye mutabakatı, Yürüyen bakiye, Hesabı gizle, Hesabı düzenle, Hesabı sil]

(A)
#### Bakiye mutabakatı

Uygulamanın ve bankanın aynı şeyi gösterdiğini kontrol edin.

*Nasıl çalışır:*
1. Bankanızın uygulamasını açın ve hesapta ne kadar olduğuna bakın.
2. “Hesaplar”da bu hesabı basılı tutun ve “Bakiye mutabakatı”nı seçin.
3. Pencerede “Uygulamada: …” yazar. Altındaki “Bankadaki gerçek bakiye” alanına bankadaki tutarı girin ve “Mutabık kıl”a dokunun.
4. Tutuyor — uygulama “Bakiye mutabık ✓” der. Hesabın bugüne kadarki tüm işlemleri bir kilit alır, hesabın altında da tarihiyle “mutabık” belirir.
5. Tutmuyor — “Bakiye tutmuyor” penceresi farkı gösterir. Önce unutulmuş ya da fazla bir işlem arayın. Bulamıyor musunuz? “Düzeltme oluştur”a dokunun: uygulama bu fark kadar bir işlem ekler, kategoriyi, alıcıyı ve notu siz doldurursunuz.

Kilitli işlemler kontrol edilmiş sayılır: birini düzenlemek onay ister, mutabık olan yanlışlıkla kaymasın diye.

(B)
#### Yürüyen bakiye

Bu hesabın her işleminin altında, ondan sonra hesapta ne kadar olduğunu gösterin.

*Nasıl çalışır:*
Bakiyenin banka dökümünden nerede ayrıldığını bulmak için kullanışlıdır: işlemleri gezin ve bakiyeleri satır satır karşılaştırın. Yalnızca bu hesap için açılır; hepsi için birden — “⋮” menüsündeki “Yürüyen bakiyeler”.

(C)
#### Hesabı gizle

Artık kullanmadığınız bir hesabı listeden kaldırın.

*Nasıl çalışır:*
Bir kartı mı kapattınız? Silemezsiniz — geçmişi var. Gizli bir hesap listeden kaybolur, ama işlemleri geçmişte ve raporlarda kalır. Geri getirmek için: “⋮” → “Gizli hesaplar” — listenin altında bir “Geri getir” düğmesiyle belirirler.

(D)
#### Hesabı düzenle

Hesabın adını, türünü, simgesini ve rengini, başka para birimindeki bir hesapta da para birimini değiştirin.

*Nasıl çalışır:*
Satırı sola kaydırdığınızda da aynı sayfa açılır. Hesabın bir başlangıç bakiyesi varsa sayfada tarih ve tutarla bir “Başlangıç bakiyesi” satırı bulunur — o işlemin kendisini açmak için dokunun ve diğerleri gibi düzeltin.

(E)
#### Hesabı sil

Yalnızca tek bir işlemi olmayan bir hesap.

*Nasıl çalışır:*
Hesabın zaten işlemleri varsa uygulama kaç tane olduğunu söyler ve silmek yerine hesabı gizlemeyi önerir — raporların ve bakiyelerin geçmişe ihtiyacı vardır. Sağa kaydırmada da aynısı.

## İşlem formu {#entry}

Bir alışveriş, bir gelir, bir transfer ya da birkaç kategoriye bölünmüş bir alışveriş nasıl kaydedilir — ve her alan ne işe yarar.

*Her sekmede “+ İşlem”*

### Bu ekran ne için {#entry-why}

Paranızın başına gelen her şeyi burada kaydedersiniz: bir alışveriş, bir maaş, bir karttan diğerine transfer. Ne kadar hızlı kaydederseniz bütçe o kadar dürüst olur — bu yüzden formun temelleri doğrudan kasada, birkaç dokunuşla yapılabilir.

##### Açın

Her sekmede “+ İşlem”. Bir hesap ya da kategori ekranından form onlar zaten doldurulmuş olarak açılır. Daha da hızlısı — ana ekranda bir widget.

##### En azı

Tutar, kategori ve hesap. Alıcı, not ve geri kalan her şey isteğe bağlıdır.

##### Yalnızca elle değil

“+”nın üstündeki kamera fişin QR kodunu, mikrofon da “Migros 1759 Market” gibi bir cümleyi okur. İki düğme de aynı formu, zaten doldurulmuş olarak açar.

### Ekranda ne nerede {#entry-screen}

“+”ya dokunduktan hemen sonra form böyle görünür. Tutar tuş takımı hemen açılır: neredeyse her zaman tutarla başlarsınız. Tam ekran açmak için herhangi bir ekran görüntüsüne dokunun.

[Yeni işlem: Giden ve Gelen anahtarı, tutar 0,00, Alıcı, Kategori, Hesap, Tarih alanları, tutar tuş takımı]

1. **Kapat** — çarpı. Bir şey yazılmışsa uygulama “Kaydetmeden çıkılsın mı?” diye sorar — “Kal” ya da “Kaydetme”.

2. **“Giden” / “Gelen”** — bir gider ya da bir gelir. Seçim tutarın işaretini ve başlığın rengini belirler: kırmızımsı — gider, yeşil — gelir, gri — transfer.

   *Nasıl çalışır:*
   “Gelen”i ve bir alıcıyı seçin — uygulama bu ayın gelir kategorisini kendisi koyar: böylece maaş doğrudan “Bütçe” ekranındaki “dağıtılmadı”ya gider.

   Gelir için “Kategori” alanına dokunun — “Gelir nereye yazılsın” sayfası açılır: “Kasım için gelir”, “Aralık için gelir” ya da “Bir gider kategorisine…” (bir iade, ortak bir alışverişteki payınız). Paranızın yaşı 30 güne ulaştığında maaş gelecek aya kaydedilir — neden ve neyin değiştiği [“Özet”](#overview) makalesinin “Paranın yaşı ayrıntılı” bölümünde.

3. **Tutar** — aşağıdaki tuş takımında yazılır. Tuş takımı gizliyse geri getirmek için tutara dokunun.

4. **Alıcı** — kime ödediğiniz ya da paranın kimden geldiği: “Migros”, “İşveren”. Kendi hesaplarınız arasındaki transferler de burada.

   *Nasıl çalışır:*
   Daha önce kaydettiğiniz bir alıcıyı seçin — uygulama kategoriyi ve notu geçen seferki gibi doldurur. Yalnızca boş alanları doldurur: bir kategori seçtiyseniz o kalır. Yeni bir alıcı aramadan oluşturulur: adı yazın ve ““…” oluştur”u seçin. Alıcıyı işlemden kaldırmak için alanın sağındaki çarpıyı kullanın. Daha fazlası — [aşağıda](#entry-pickers).

5. **Kategori** — paranın çıktığı zarf. O olmadan bir alışveriş “Bütçe” ekranındaki hiçbir satırı azaltmaz.

6. **Hesap** — paranın nereden çıktığı ya da nereye geldiği: vadesiz hesap, cüzdan, kredi kartı. Simge ve renk hesap listesindekiyle aynıdır.

7. **Tarih** — dokunmazsanız bugün. Bir takvim açmak için dokunun.

   *Nasıl çalışır:*
   Bir aydan daha ileri bir tarih — uygulama tekrar sorar: “İşlem … tarihiyle kaydedilecek; bu bir aydan daha ileri. Kaydedilsin mi?”. Bu, yıldaki bir yazım hatasını yakalar.

8. **Tutar tuş takımı** — uygulamanın kendisine ait, hesap makineli. [Aşağıda](#entry-keypad) anlatılıyor.

### Tutar tuş takımı {#entry-keypad}

Telefonun normal klavyesi tutarlar için kullanışsızdır: küçük rakamlar, işlem yok, ondalık ayırıcı ikinci bir ekranda bir yerde. Formun kendi tuş takımı var — büyük ve hesap makineli.

(+)
#### Hesap yapar

İki kişilik bir fiş, bir kartta iki alışveriş — doğrudan alanda hesaplayın.

*Nasıl çalışır:*
120 yazın, “+”ya dokunun, 35 yazın ve “=”ya dokunun — tutar 155 olur. “+”, “−”, “×” ve “÷” hepsi çalışır. Seçilen işlem, ikinci sayıyı yazarken vurgulu kalır.

(,)
#### Virgül ya da kuruş

Kesirli kısmın nasıl yazılacağı size kalmış.

*Nasıl çalışır:*
**Virgülle** — hesap makinesi gibi: 12, virgül, 50, 12,50’dir. Kuruşları yazarken virgül tuşu vurguludur.

**Kuruştan** — kart terminali gibi: 1250, 12,50’dir. Tuş takımında virgül yerine bir “00” tuşu vardır: “3”, “00”, “00”, 300,00’dür.

“Ayarlar → Dil ve biçimler → Tutar girişi” içinde değiştirin. **Kurulumdan hemen sonra:** virgülle.

(⌫)
#### Silme

Son rakamı silmek için dokunun. Başlattığınız bir işlemle birlikte her şeyi birden silmek için basılı tutun.

(✓)
#### “Tamamla”

Tuş takımını gizler, altındaki diğer alanları ve “Kaydet” düğmesini ortaya çıkarır. Sistemin Geri düğmesi de aynısını yapar.

(✋)
#### Hangi el

Rakamlar başparmağınızın altında.

*Nasıl çalışır:*
“Sağ el için” — rakamlar sağda, işlemler ve “Tamamla” solda (ekran görüntüsündeki gibi). “Sol el için” — tam tersi. “Ayarlar → Dil ve biçimler → Tutar tuş takımı”. **Kurulumdan hemen sonra:** sağ el için.

### Alıcıyı ve kategoriyi seçmek {#entry-pickers}

İki alan da ekranın altından bir liste açar. Üstte — arama: birkaç harf yazın, liste daralır.

[Alıcı listesi: arama, hesaplar ve bakiyeleriyle bir Transferler bölümü, Bütçe dışı, solda harfli alıcılar]
**Alıcı.** Önce transferler için hesaplarınız, sonra alıcılar.

[Kategori listesi: arama, Tutarı böl, Sık kullanılan, kategori grupları]
**Kategori.** “Tutarı böl”, sık kullanılanlar, sonra tüm gruplar.

(A)
#### Transferler — alıcı listesinde

Para kendi hesabınıza mı gitti? Onu “Transferler” bölümünde seçin: “Transfer: Visa”.

*Nasıl çalışır:*
Hesap adının altında bakiyesi yazar, yanlışını seçmeyesiniz diye. Bütçe dışı hesaplar (birikim, mevduat) altta kendi bölümlerindedir. Transferin nasıl çalıştığı — [aşağıda](#entry-transfer).

(B)
#### Yeni alıcı

Listede yok mu? Adı aramaya yazın ve ““…” oluştur”u seçin.

*Nasıl çalışır:*
Alıcıları önceden ayarlamanız gerekmez: liste siz kaydettikçe kendiliğinden oluşur. Yeniden adlandırmak ya da silmek için — “Ayarlar → Alıcılar”.

(C)
#### “Sık kullanılan”

En sık seçtiğiniz kategorilerin çipleri. Tek dokunuş ve tamam.

*Nasıl çalışır:*
Arama grup adını da anlar. Bulamıyor musunuz? ““…” kategorisini şu grupta oluştur”u seçin: yeni kategori “Bütçe” ekranında da hemen belirir.

(D)
#### “Tutarı böl”

Tek bir alışveriş — birkaç kategori. [Aşağıda](#entry-split) anlatılıyor.

### Doldurulmuş bir işlem {#entry-filled}

“İşlemler” makalesindeki “Migros” alışverişi: bir etiket, bir e-fiş ve bir fotoğrafla. Tuş takımı gizli, “Ek bilgiler” açık — formun tüm alanları görünüyor.

[Migros 1.189 işleminin düzenlenmesi: alanlar, yazlık etiketli Ek bilgiler, fiş, fotoğraf, Hesaba geçti, Bayrak, İşlemi sil, Kaydet]

9. **Not** — ne aldığınız ya da neden: “Süt, yumurta, ekmek”. Akışta italik görünür ve aramayla bulunabilir.

   *Nasıl çalışır:*
   Tutar zorunlu değildir: tutarsız bir kayıt, bir olay hakkında nottur. Örneğin: 85.000 km'de yağ değişti, yazlığın anahtarlarını Andrey'e verdik. Yine de hesap ve kategori gerekir. “Kaydet”e ilk dokunuşta uygulama “Bir tutar girin” der, ikincisinde “Bir tutar girin. Bir daha dokunursanız tutarsız kaydedilir” der, üçüncü dokunuş kaydı saklar.

   Sonra onu “İşlemler” içindeki arama bulur: arama notun metninde de arar — örneğin yağ yazın.

10. **“Ek bilgiler”** — nadir kullanılan alanlar tek bir kartta. Kartı katlamak ya da açmak için başlığa dokunun.

    *Nasıl çalışır:*
    Katlanmış kart tek bir satırdır, sağında içinde gizli alanların simgeleri vardır: etiket, fiş, fotoğraf, “Hesaba geçti”, bayrak. Doldurulmuş bir alan, katlanmış kartta bile her zaman görünür. Uygulama seçiminizi hatırlar. **Kurulumdan hemen sonra:** katlanmış.

11. **Etiketler** — kategorinin üstündeki işaretler: “#yazlık”, “#tatil”. Seçim sayfası — [aşağıda](#entry-tags).

12. **E-fiş** — fişteki kod ya da bağlantı. Sağdaki tarayıcı simgesi kamerayı bir QR koduna yöneltir, “+” başka bir fiş ekler.

    *Nasıl çalışır:*
    Uygulama ülkenizin fişlerini tanıyorsa fişi formla karşılaştırır: henüz tutar yoksa doldurur, tutarlar farklıysa alanın altında bir satır gösterir ve “Düzelt”i önerir. Fiş tarihi asla değiştirmez. Fişler ve fotoğraflar hakkında daha fazlası — [“İşlemler”](#transactions) makalesinde.

13. **Fotoğraflar ve PDF’ler** — “Ekle” — bir fişin fotoğrafını çekin, galeriden bir fotoğraf ya da bir PDF seçin. Küçük resimdeki çarpı onu kaldırır.

    *Nasıl çalışır:*
    Abartmayın: her fotoğraf tüm yedeklere ve açıksa buluta gider. Daha fazlası — [“İşlemler”](#transactions) makalesinde.

14. **“Hesaba geçti”** — işlem banka dökümünüzde göründüğünde işaretleyin. Akış satırındaki daire de aynısını yapar.

    *Nasıl çalışır:*
    İşaret isteğe bağlıdır: bütçeyi etkilemez, yalnızca hesabı bankayla karşılaştırmaya yardım eder. Hiç kullanmadıysanız geçin — boş daireler sorun değildir.

15. **Bayrak** — renkli bir “sonra dön” işareti: kontrol etmek, bir iadeyi beklemek, konuşmak için. Akış satırında küçük bir bayrak belirir.

16. **İşlemi sil** — yalnızca zaten kaydedilmiş bir işlem için. Uygulama tekrar sorar.

17. **“Kaydet”** — kaydedin. Hesap ya da kategori olmadan uygulama kaydetmez ve neyi seçmeniz gerektiğini söyler. Sıfır tutara izin verilir: böyle bir kayıt akışta bir hatırlatma notu olur.

### Kendi hesaplarınız arasında transfer {#entry-transfer}

Nakit çektiniz, kredi kartını ödediniz, mevduata para aktardınız — bu harcama değil, paranın yer değiştirmesidir. Böyle işlemleri transfer olarak kaydedin, yoksa bütçe onları gider sayar.

[Vadesiz hesaptan çıkış olarak kaydedilen 7.500’lük transfer: Giden, Transfer: Visa, hesap Vadesiz hesap, kırmızı parıltı]
**1. yol.** Vadesiz hesaptan çıkış: “Giden”.

[Aynı 7.500’lük transfer Visa’ya giriş olarak kaydedilmiş: Gelen, Transfer: Vadesiz hesap, hesap Visa, yeşil parıltı]
**2. yol.** Visa’ya giriş: “Gelen”.

(E)
#### Nereye — “Alıcı” alanında

“Transferler” bölümünde bir hesap seçin. Formun başlığı griye döner.

*Nasıl çalışır:*
Ekran görüntüsü bir kredi kartı ödemesini gösteriyor: “Vadesiz hesap”tan “Visa”ya ₺7.500. Akışta iki satır belirir: vadesiz hesapta bir eksi, kredi kartında bir artı.

(F)
#### “Kategori gerekmiyor”

Para hâlâ sizin — yalnızca yer değiştirdi. “Bütçe” ekranındaki zarflar değişmez.

*Nasıl çalışır:*
İstisna, bir bütçe hesabı ile bütçe dışı bir hesap (örneğin birikime) arasındaki transferdir. O zaman para zarflardan çıkar ya da onlara girer ve uygulama kategori sorar.

(G)
#### Transferde “Giden” ve “Gelen”

Yön, “Hesap” alanındaki hesabın bakış açısındandır.

*Nasıl çalışır:*
**“Giden”** — para bu hesaptan “Alıcı” alanındaki hesaba çıkar. Tutarın arkasında hafif kırmızı bir daire parlar. **“Gelen”** — para “Alıcı”daki hesaptan bu hesaba gelir. Daire yeşildir. Transferin başlığı her durumda gridir.

(!)
#### Tek transfer — iki kayıt yolu

“Vadesiz hesap”tan “Visa”ya ₺7.500’lük bir ödeme iki taraftan da kaydedilebilir. Sonuç aynıdır.

*Nasıl çalışır:*
1. **Vadesiz hesaptan çıkış** (soldaki ekran görüntüsü): “Hesap” — Vadesiz hesap, “Alıcı” — “Transfer: Visa”, “Giden”, kırmızı parıltı.
2. **Kredi kartına giriş** (sağdaki ekran görüntüsü): “Hesap” — Visa, “Alıcı” — “Transfer: Vadesiz hesap”, “Gelen”, yeşil parıltı.

Her iki durumda da akışta aynı iki satır belirir: Vadesiz hesapta −7.500 ve Visa’da +7.500, ikisi de transfer simgesiyle. Hangisi kolayınıza gelirse onu seçin: vadesiz hesabın dökümünü karşılaştırıyorsanız vadesizden çıkış olarak kaydedin; bankanızın uygulaması “kredi kartı ödemesi alındı” diyorsa karta giriş olarak kaydedin. Bir hesap ekranından form o hesapla kendiliğinden açılır.

**Bir transferi bir kez kaydedin.** Diğer tarafı uygulama kendisi ekler. Vadesizden çıkış olarak kaydedip sonra kredi kartına giriş olarak da kaydederseniz transfer ikiye katlanır: vadesizden ₺15.000 çıkar, karta da ₺7.500 yerine ₺15.000 gelir.

(H)
#### Farklı para birimleri

Lira kartından avro hesabına — form dönüştürmeyi kendisi önerir.

*Nasıl çalışır:*
Alıcının altında alanlar belirir: “Yatan” — ikinci hesaba ne kadar geldiği — ve kurun yönünü çeviren bir düğmeyle “Kur”. Tutarı değiştirin, “Yatan” yeniden hesaplanır; kuru değiştirin — aynısı; “Yatan”ı girin — kur yeniden hesaplanır.

### Bölünmüş bir tutar {#entry-split}

Tek bir alışveriş — birkaç zarf: “Gratis”te ₺1.525’lik yiyecek ve ₺625’lik temizlik ürünü aldınız. Bunu tek bir işlem, ama iki kategoride kaydedin — o zaman iki zarf da dürüstçe küçülür.

[Gratis bölmesi 2.150: BÖLME, Toplam, Market 1.525, Ev gereçleri 625, Parça ekle]

(I)
#### “BÖLME”

“Tutarı böl”ü seçtiğinizde “Kategori” alanının yerine çıkar. Yanında — parçaların “Toplam”ı.

(J)
#### Bir parça

Kendi kategorisi, tutarı ve notu. Kategoriye ya da tutara dokunun — yalnızca bu parça değişir.

*Nasıl çalışır:*
Bir parça transfer de olabilir: kasada nakit mi istediniz — “Market”e ₺1.750 ve “Transfer: Nakit” olarak ₺750. Sayılarla bir örnek — [“İşlemler”](#transactions) makalesinde.

(K)
#### “+ etiket”

Yalnızca bu parça için bir etiket. Formun “Etiketler” alanındaki etiket ise tüm alışverişe birden uygulanır.

(L)
#### “Parça ekle”

Bir satır daha. Fazla bir parçanın sağındaki çarpı onu kaldırır.

(M)
#### “İptal”

Tüm tutar için tek bir kategoriye geri dönün.

Parçalar toplamı tutmuyor mu? [Aşağıda](#entry-split-mismatch) anlatılıyor.

#### Parçalar tutarı tutmuyor {#entry-split-mismatch}

Bir parçada mı hata yaptınız? Uygulama bunu sessizce düzeltmez — farkı parçaların hemen altında gösterir ve kapatmanın bir yolunu önerir.

[Toplamı 2.150 olan 1.525 ve 875’lik parçalar: Bölme toplamı 250 aşıyor, 2.400 olarak artır düğmesi]
**Parçalar fazla.** “₺2.400,00 olarak artır”.

[Toplamı 2.150 olan 1.525 ve 375’lik parçalar: Bölünecek kalan 250, 1.900 olarak azalt düğmesi]
**Parçalar eksik.** “₺1.900,00 olarak azalt”.

(N)
#### “Bölme toplamı … aşıyor” / “Bölünecek kalan: …”

Parçaların toplamdan ne kadar uzak olduğu. Satır, siz düzenlerken parçaların altında kendiliğinden belirir.

*Nasıl çalışır:*
Düzenlerken satır sarıdır — bir ipucudur. Tutmayan tutarlarla “Kaydet”e dokunun, satır kırmızıya döner ve form tutarlar eşleşene kadar işlemi kaydetmez. Aynı düzeltme düğmesi ekranın altındaki mesajda da vardır.

(O)
#### “… olarak artır” / “… olarak azalt”

Tek dokunuş — ve toplam, parçaların toplamına eşit olur.

*Nasıl çalışır:*
Solda: ikinci parçaya 625 yerine 875 yazdınız. Parçalar birlikte ₺2.400 ediyor, toplam ise ₺2.150: “Bölme toplamı ₺250,00 aşıyor”, “₺2.400,00 olarak artır” düğmesi de o 250’yi toplama ekler. Sağda tam tersi: 625 yerine 375 — “Bölünecek kalan: ₺250,00”, “₺1.900,00 olarak azalt” düğmesi de 250’yi çıkarır.

**Düğme parçayı değil, toplamı düzeltir.** Toplam doğruysa — fişteki gibi — ve hatayı bir parçada yaptıysanız, parçanın kendisini düzeltin: tutarına dokunun ve doğrusunu yazın.

### İade edilen ürünün parası {#entry-refund}

Bozuk sütü iade ettiniz, olmayan bir ceketi geri götürdünüz — para geri geldi. Bu gelir değildir: ödediğiniz kategoriye bir iade olarak kaydedin.

[Gelir nereye yazılsın sayfası: Kasım için gelir, Aralık için gelir, Bir gider kategorisine]
**3. adım.** “Kategori” alanında “Kasım için gelir” var — dokunun ve “Bir gider kategorisine…”yi seçin.

[Migros’tan ₺75’lik bir iade: Gelen, kategori Market, hesap Vadesiz hesap, not İade: süt bozuk]
**Tamam.** “Gelen”, mağaza, alışverişin kategorisi.

(P)
#### Nasıl kaydedilir

İade, mağazadan çıktığı kategoriye geri gelen paradır.

*Nasıl çalışır:*
1. “+ İşlem” → “+ Gelen”.
2. İade tutarı. Alıcı — aynı mağaza. Hesap — paranın iade edildiği yer, genellikle aynı kart.
3. Uygulama alışkanlıkla “Kategori”ye “Kasım için gelir” koyar (soldaki ekran görüntüsü). “Kategori” alanına dokunun → “Bir gider kategorisine…” → alışveriş yaptığınız kategoriyi seçin: “Market”.
4. Not — isteğe bağlı: “İade: süt bozuk”. Kaydedin.

(Q)
#### Ne değişir

“Market” zarfı dolar, “dağıtılmadı” dolmaz.

*Nasıl çalışır:*
- “Bütçe” ekranında “Market”in “harcanan” tutarı ₺75 azalır, bakiye de aynı miktarda büyür.
- “Dağıtılmadı” değişmez: bu parayı kazanmadınız, kendi paranızı geri aldınız.
- Kategori ve mağaza ekranlarında harcamalar iadelerden sonra sayılır.
- “Özet” takviminde yalnızca iade olan bir gün boş bir halkayla işaretlenir.
- Kredi kartına mı iade edildi? Kartın borcu azalır, onunla birlikte “Kart ödemeleri”nde ödemesi için ayrılan tutar da.

(R)
#### Ya gelir olarak kaydederseniz

Bütçe iki kez yalan söyler.

*Nasıl çalışır:*
“Kasım için gelir”, kazanmışsınız gibi “dağıtılmadı”ya ₺75 ekler, “Market” ise gerçekte olmamış bir alışverişi tutar. “Gelirler ve giderler” raporu hem geliri hem gideri gerçekte olduğundan yüksek gösterir.

(S)
#### Neden alışverişi silmiyorsunuz

Her şeyi aynı gün iade ettiyseniz silebilirsiniz.

*Nasıl çalışır:*
Alışveriş zaten bankadan geçtiyse ya da mutabık kılındıysa ya da yalnızca bir kısmını iade ettiyseniz iadeyi ayrı bir işlem olarak kaydedin. Banka dökümünde iki satır olacak, alışveriş ve iade — uygulamada da iki satır olsun: mutabakat tutar.

Bir arkadaşın ortak bir alışverişteki yarısı için size geri ödediği para da aynı şekilde kaydedilir: “+ Gelen”, arkadaştan, alışverişin kategorisine.

### Etiketler {#entry-tags}

“Ek bilgiler”deki “Etiketler” alanı bir seçim sayfası açar.

[Etiketler sayfası: Etiket bul veya oluştur araması, Son kullanılanlar: yazlık işaretli, yarı yarıya]

1. Gereken etiketleri işaretleyin — son kullanılanlar üstte, sağda işlem sayısıyla.
2. İstediğiniz yok mu? Adını “Etiket bul veya oluştur” satırına yazın ve ““…” etiketini oluştur”u seçin.
3. “Tamam”a dokunun.

Sayfayı aşağı kaydırsanız bile seçim kaybolmaz. Etiketlerin neden işe yaradığı ve toplamlara sonra nereden bakılacağı — [“İşlemler”](#transactions) makalesinde.

### Vakit yok mu? — “Gelen kutusuna” {#entry-inbox}

Kasada bazen yalnızca bir saniyeniz olur: tutarı hatırlarsınız, ama kategori ve hesap seçecek vakit yoktur.

“Ayarlar → VERİLER → Gelen kutusu”nu açın. Artık formda bir tutar olup da kategori ya da hesap yoksa düğmede “Kaydet” yerine **“Gelen kutusuna”** yazar, tutar tuş takımında da hemen kaydeder. İşlem kaydedilir, ama “Sınıflandır” işaretiyle.

Böyle işlemler olduğu sürece gezinme çubuğunun üstünde bir şerit asılı durur, “Özet” ekranında da bir bildirim olur. Dokunun — form onları kaydettiğiniz sırayla tek tek açar: günü mağaza mağaza hatırlamak için kullanışlı. **Kurulumdan hemen sonra:** kapalı.

Sesle özellikle kullanışlıdır: alışverişi kasada söyleyin — sesin tanımadığını evde düzenleyin. Senaryo — [“Sesle giriş”](#voice-inbox) makalesinde.

### Formda neler yapabilirsiniz {#entry-gestures}

Hareketlerin ve düğmelerin kısa bir özeti.

| Bunu yapın | Ne olur |
|---|---|
| Tutara dokunun | Tutar tuş takımını geri getirin. |
| Telefonun Geri düğmesi | Önce tuş takımını gizler, ikinci kez çıkar (kaydedilmemiş bir şey varsa sorar). |
| ⌫ tuşunu basılı tutun | Tutarın tamamını silin. |
| “Alıcı” alanındaki çarpı | Alıcıyı işlemden kaldırın. |
| “Ek bilgiler” başlığına dokunun | Nadir kullanılan alanları katlayın ya da açın. |
| Fotoğraf küçük resmindeki çarpı | Resmi ya da PDF’i işlemden kaldırın. |

## Sesle giriş {#voice}

Alışverişi tek bir cümleyle söyleyin — “Migros 1759 Market” — uygulama formu zaten doldurulmuş olarak açar. Kontrol edin ve kaydedin.

*“+ İşlem”in üstündeki yeşil mikrofon düğmesi*

### Neden {#voice-why}

Kasada elleriniz dolu, ama alışverişi hatırlarken hemen kaydetmeniz gerekiyor. Tutarı yazmak, alıcıyı, kategoriyi ve hesabı seçmek — bu beş dokunuş demek. Sesle — tek bir cümle.

Ses kendi başına hiçbir şey kaydetmez. İşlem formunu doldurur, kaydeden ise sizsiniz — böylece bir tanıma hatası bütçeye fark edilmeden asla sızmaz.

Mikrofon düğmesi yeşildir; “Özet”te, “İşlemler”de, hesap ve kategori ekranlarında “+ İşlem”in üstündedir.

### İlk kez {#voice-first}

[Sesle giriş sayfası: mikrofon, Tutarı ve kendi adlarınızı söyleyin: kategori, mağaza, hesap; Örneğin: «1759 Market»; Tanınanlar forma aktarılır — orada kontrol edip düzeltebilirsiniz; İptal ve Konuş düğmeleri]

1. **Ne söylemeli** — tutar ve kendi adlarınız: kategori, mağaza, hesap.

2. **Örnek** — kendi bütçenizden bir cümle: en sık kategoriniz ve tipik bir tutar. Tekrarlayın — çalışacaktır.

3. **Nereye gider** — her şeyi kontrol edip düzeltebileceğiniz işlem formuna.

4. **“Konuş”** — mikrofonu açar. İlk seferde sayfa onu kendiliğinden açmaz: önce ne söyleyeceğinizi okuyun. Sonrasında mikrofon sayfayı açar açmaz açılır.

Uygulama mikrofon izni ister — izin verin. Konuşun, sonra “Tamam”a dokunun ya da yalnızca susun: tanınan cümle sayfada belirir ve form açılır.

### Ne söylemeli {#voice-say}

Tutar ve kategoriyle başlayın, sonra gerisini ekleyin. Mikrofonun altındaki örnek sizinle birlikte büyür: art arda iki başarılı cümle — ve bir sonraki adımı gösterir.

Demo bütçedeki adımlar:

| Cümle | Neler dolar |
|---|---|
| “1759 Market” | Tutar ve kategori. |
| “Migros 1759 Market” | Artı alıcı. |
| “Migros 1759 Market not Deterjan ve kağıt havlu” | Artı bir not: “not” sözcüğünden sonraki her şey. |
| “gelir 35000 İşveren” | Gelir ve alıcı. |

[“gelir 35000 İşveren” cümlesinden sonra İşlem ekle formu: Gelen, 35.000,00, Alıcı İşveren, Kategori Kasım için gelir, Tarih]

Ekran görüntüsü “gelir 35000 İşveren” cümlesinden sonraki formu gösteriyor. Tarih bugün. Kontrol edin, “Tamamla”ya, sonra “Kaydet”e dokunun.

##### Uygulamanın anladığı sözcükler

- **“transfer”** — hesaplar arasında transfer; **“gelir”** — para geldi; **“gider”** — harcama. Bu sözcükler olmadan cümle bir giderdir.
- **“not”** — bu sözcükten sonraki her şey not olur. Bu yüzden en sona söyleyin.
- **“kategori …”** — bir kategori adı bir mağaza adına benziyorsa ve uygulama onları karıştırıyorsa.
- **Hesap** adıyla tanınır. “…’tan”, “…’a” gibi yönleri uygulama henüz ayırt etmez: Türkçede yön, adın kendisindeki bir ektir. Bu yüzden mikrofonun altındaki örnek hesaplı cümleler göstermez; hesabı formda kontrol edin.

##### Tutar

Rakamla ya da sözcükle — tanıma “iki yüz elli”yi kendiliğinden 250’ye çevirir. Kuruşlar virgülden sonra gelir: “25,50”. Cümlede birkaç sayı varsa tutar ilkidir.

### Adlar nasıl tanınır {#voice-names}

Uygulama cümlede **sizin** adlarınızı arar: bu bütçedeki alıcılar, kategoriler ve hesaplar. Yenilerini oluşturmaz — bütçede henüz olmayan bir mağazanın adını söyleyin, “Alıcı” alanı boş kalır.

##### Alıcı kategoriyi de beraberinde getirir

Alıcı tanındığında kategori ve not, sanki formda elle seçmişsiniz gibi geçmiş işlemlerinden dolar. “Migros 1759” demek yeterlidir — “Market” kategorisi kendiliğinden dolar.

##### Kaç sözcük gerekir

Bir alıcı için addan bir sözcük yeterlidir. Birkaç sözcüklü bir kategoriye en az ikisi gerekir — “Bakım ve kozmetik”, başka bir “Bakım” ile karışmasın diye. Tam söylenen ad her zaman tanınır.

*Örnek neden sizin bütçenizden:*
Uydurma adlarla bir örnek (“Garanti 100 market Koçtaş”), bütçenizde olmayan bir cümleyi öğretirdi: tekrarlayın, boş bir form alırdınız. Bu yüzden örnek her zaman kendi verilerinizden kurulur — en sık alışverişiniz, hesaplarınız, yakın tarihli bir not.

### Hepsi anlaşılmadı — “Gelen kutusuna” {#voice-inbox}

Ses tutarı tanıdı, ama kategoriyi ya da mağazayı tanımadı. Kasada düzenleyecek vaktiniz yok, alışverişi de kaybetmek istemiyorsunuz. “Gelen kutusu” bunun içindir.

##### Şimdi kaydedin, evde düzenleyin

1. “Ayarlar → VERİLER → Gelen kutusu”nu bir kez açın.
2. Kasada cümleyi her zamanki gibi söyleyin. Sonuna “not” ve alışverişle ilgili birkaç sözcük ekleyin — örneğin “not evin yanındaki eczane”. Mağaza ve kategori tanınmasa bile not kaydedilir.
3. Formda bir şey mi eksik? “Kaydet” yerine bir “Gelen kutusuna” düğmesi var, tutar tuş takımında da. Dokunun — alışveriş kaydedilir ve “Sınıflandır” ile işaretlenir.
4. Evde gezinme çubuğunun üstündeki şeride ya da “Özet” ekranındaki bildirime dokunun. Form bu alışverişleri kaydettiğiniz sırayla tek tek açar: “Gelen kutusu · 1/3”. Bir kategori ve hesap seçin — “Kaydet”.

Tutar, tarih ve sesin tanıyabildiği her şey zaten işlemdedir — onlar ve notla alışverişi hatırlamak kolaydır. Hesap tanındıysa alışveriş onun bakiyesini zaten azalttı, “Bütçe” ekranında da siz düzenleyene kadar “Kategori yok” satırında durur. Hesap tanınmadıysa alışveriş bütçenin dışında bekler ve siz hesabı seçtiğinizde bütçeye girer.

*“Gelen kutusu”na neler gitmez:*
Hesaplar arası transfer ve bölünmüş tutar: bunlara iki hesap ya da tüm parçalar birden gerekir. Tutar olmadan da gitmez: ses sayıyı yakalamadıysa formda yazın. “Gelen kutusu” hakkında daha fazlası [“İşlem formu”](#entry-inbox) makalesinde.

### Anlamadıysa {#voice-fail}

| Sayfada | Ne oldu |
|---|---|
| “Hiçbir şey duyamadım — tekrar deneyin” | Telefon tek bir sözcük tanımadı. Mikrofona yakın konuşun ve “Yeniden dene”ye dokunun. |
| “Ne tutarı ne de adlarınızdan birini tanıyabildim” | Cümle tanındı, ama içinde ne sayı ne de tanıdık bir ad var. Form açılmaz — örneğe bakın ve “Yeniden dene”ye dokunun. |
| “Mikrofona erişim yok ya da tanıma kullanılamıyor…” | Uygulamaya mikrofon verilmedi ya da telefonda konuşma tanıma yok. Telefon ayarlarında uygulamanın izinlerini kontrol edin. |

Hiçbir şey tanınmadıysa sayfadaki örnek bir adım basitleşir. Bir ad tanındı ama tutar tanınmadıysa örnek aynı kalır: büyük olasılıkla cümle yalnızca yarıda kesildi.

### Dil {#voice-language}

Uygulama arayüz dilinde dinler — “Ayarlar”, “Görünüm” bölümü → “Dil ve biçimler” → “Arayüz dili” içinde seçilen dilde. Ayrıntılar [“Ayarlar”](#settings-formats) makalesinde. Örneğin altında hangi dilde dinlediği yazar.

##### “Arayüz dili konuşma tanıma için yüklü değil — … dilinde dinliyorum”

Telefonda bu dil için bir tanıma modeli yok, bu yüzden uygulama telefonun dilinde dinler. Dili telefonun konuşma tanıma ayarlarına ekleyin — satır kaybolur.

##### “transfer”, “gelir”, “not” sözcükleri — sizin dilinizde

Her dilin kendi anahtar sözcükleri vardır: Ukraynacada “переказ”, “дохід”, “нотатка”, Rusçada “перевод”, “доход”, “заметка”. Mikrofonun altındaki örnek her zaman sizin dilinizin sözcüklerini gösterir.

## Fiş tarayıcı {#receipt}

Kamerayı fişin QR koduna tutun — uygulama tutarı ve tarihi doldurur, daha önce gördüğünüz bir mağazayı da kasa numarasından tanıyarak alıcıyı, kategoriyi ve hesabı doldurur.

*“+ İşlem”in üstündeki mor QR kodu düğmesi*

### Neden {#receipt-why}

Fişler cebinizde birikir, akşam da nerede, ne kadar ve ne zaman olduğunu hatırlamanız gerekir. Tarayıcı tutarı ve tarihi fişten alır — rakamlarda yazım hatası yok ve fişi ertesi gün girseniz bile alışverişin gerçek günü. Fiş işlemde bir e-fiş olarak saklanır: kâğıt olanı atabilirsiniz.

### Düğme nerede {#receipt-where}

QR kodlu mor düğme “Özet”te, “İşlemler”de, hesap ve kategori ekranlarında “+ İşlem”in üstündedir.

Yalnızca uygulama ülkenizin fişlerini tanıyorsa görünür:

| Ülke | Düğme ne zaman görünür |
|---|---|
| Ukrayna | Bütçede ya da herhangi bir hesapta grivna var ya da telefon Ukrayna’da alınmış (UA bölgesi). |
| Kazakistan | Bütçede ya da bir hesapta tenge var ya da telefon bölgesi KZ. |
| Rusya | Bütçede ya da bir hesapta ruble var. |
| Portekiz | Telefon bölgesi PT ya da uygulamanın dili Portekizce ve bütçede ya da bir hesapta avro var. |

Türkiye listede henüz yok: uygulama Türk fişlerinin QR kodunu okumayı henüz bilmiyor. Bu yüzden lira bütçesinde düğme görünmez. Öğretmemize yardım edebilirsiniz — [nasıl](#receipt-your-country).

*Neden dile göre değil de para birimine göre:*
Bir dil, alışveriş yaptığınız ülke hakkında hiçbir şey söylemez: hem Ukrayna’da hem Kazakistan’da Rusça yazılır, oradaki fişler ise farklıdır. Para birimini ise kendiniz seçtiniz — ve nerede ödediğinizi söyler.

Diğer ülkelerde düğme yoktur. Ama herhangi bir fişin kodunu bir işlemde saklayabilirsiniz — formdaki “E-fiş (URL veya kod)” alanında tarayıcı simgesiyle ([aşağıda](#receipt-form)).

### Nasıl taranır {#receipt-how}

[Uygulama fişlerinizden öğrenir penceresi: QR kodunda yalnızca tarih, tutar ve kasa numarası var; İptal ve Tara düğmeleri]

1. Mor düğmeye dokunun.
2. İlk üç seferde uygulama fişlerden nasıl öğrendiğini anlatır (ekran görüntüsü). “Tara”ya dokunun. Bir mağazayı tanıdıktan sonra bir daha anlatmaz.
3. Kamera açılır: “Kamerayı fişin QR koduna doğrultun”. Kod kendiliğinden okunur, hiçbir şeye dokunmanız gerekmez.
4. İşlem formu tutar, tarih ve fişle açılır. Kontrol edin ve “Kaydet”e dokunun.

Fiş telefonunuzda bir fotoğraf ya da PDF mi? Kameranın altında — “Galeriden seç” ve “PDF seç”.

### Fişten ne gelir {#receipt-what}

Fişin QR kodunda ne mağaza adı ne de alışveriş listesi vardır — yalnızca tutar, tarih ve saat, fiş numarası ve kasa numarası. Bu yüzden:

| Form alanı | Nereden gelir |
|---|---|
| Tutar | Fişten. |
| Tarih | Fişten: bugün değil, alışverişin günü. |
| “E-fiş (URL veya kod)” | Fişin kendisindeki kod. Onunla fişi açabilir ve kopyalayabilirsiniz. |
| Alıcı | Kasa numarasına göre: bu kasadan gelen önceki fişler için kimi seçtiyseniz. |
| Kategori ve not | Alıcıya göre — sanki formda elle seçmişsiniz gibi. |
| Hesap | Bu mağazada geçen sefer ödediğiniz hesap. |

*Kasa aynı mağaza demektir:*
Bir kasa her zaman tek bir mağazaya aittir. Bir süpermarkette bir ya da başka bir sıraya düşersiniz — Ukrayna fişlerinde uygulama aynı mağazanın komşu bir kasasını da tanır. Komşu kasalar farklı alıcılara götürüyorsa uygulama susar: yanlışını almaktansa mağazayı kendiniz seçmek daha iyidir.

### Yeni bir mağaza {#receipt-new-shop}

Yeni bir mağazadan gelen ilk fiş için uygulama yalnızca tutarı ve tarihi doldurur — ve alıcı seçiciyi hemen açar.

[Formun üstünde Alıcı sayfası: arama, transferler, alıcılar]

[Seçimden sonra form: 713,00, Alıcı Migros, Kategori Market, Hesap boş, Tarih Kasım 9, fişe bağlantılı E-fiş]

1. Mağazayı listede bulun ya da yeni bir ad yazın.
2. Bu alıcıdan daha önce alışveriş yaptıysanız kategori kendiliğinden dolar.
3. Hesabı seçin: bu mağazada henüz ödeme yapmadınız, bu yüzden uygulama onu bilmiyor.
4. “Kaydet”.

Bu kasadan gelen bir sonraki fiş alıcı, kategori ve hesap zaten doldurulmuş olarak gelir.

### Tekrarlar ve hatalar {#receipt-problems}

| Mesaj | Ne oldu |
|---|---|
| “Bu fiş zaten girilmiş” | Aynı fiş zaten bir işlemde — tarih ve tutar pencerede. “Düzenle” o işlemi açar, “Yine de ekle” — yeni bir işlem, “İptal” — hiçbir şey. |
| “Bu, uygulamanın tanıdığı bir fiş değil” | QR kodu bir fişten değil ya da başka bir ülkenin fişinden. Form açılmaz. |
| “Bu fişte tutar yok” | Kod okundu, ama içinde tutar yok. Alışverişi “+ İşlem” ile girin. |

Bazı kasa hizmetleri fişe tutar ve tarih olmadan kendi web sitelerine bir bağlantı basar — uygulama böyle bir fişi okuyamaz.

### Dosyadan fiş: “Paylaş” {#receipt-share}

Fiş e-postayla, bir mesajlaşma uygulamasıyla ya da bankanızın uygulamasında bir resim veya PDF olarak mı geldi? Orada “Paylaş”a dokunun ve “Bütçem”i seçin.

- Tanıdık bir fiş bulunur — form kameradan sonraki gibi açılır, uygulama da “Dosya işleme eklensin mi?” diye sorar. E-fiş her durumda eklenir; fişin kendisini görmek istiyorsanız dosyayı ekleyin.
- Dosyada fiş yok ya da tanımadığı bir fiş — uygulama nedenini söyler ve “Elle doldur”u önerir: form dosya zaten eklenmiş olarak açılır.

### Formda fiş {#receipt-form}

İşlem formunda, “Ek bilgiler” altında tarayıcı simgeli bir “E-fiş (URL veya kod)” alanı vardır. **Herhangi bir** QR koduyla, her ülkede çalışır: kodda ne yazıyorsa alana koyar.

Fiş tanıdıksa uygulama onu formla karşılaştırır: henüz tutar yoksa doldurur, tutarlar farklıysa “Fişteki tutar farklı: …” satırını gösterir ve “Düzelt”i önerir. Fiş açık bir formdaki tarihi değiştirmez. Ayrıntılar [“İşlem formu”](#entry) makalesinde.

Saklanan fiş işlem satırında bir simge olarak, işlem kartında da “Kopyala” ve “Aç” düğmeleri olarak görünür. Ayrıntılar [“İşlemler”](#transactions) makalesinde.

### Uygulamaya ülkenizin fişlerini öğretin {#receipt-your-country}

Uygulama bir fişi internetsiz okur: gereken her şey — tutar ve tarih — QR kodunun kendisinde olmalıdır. Pek çok ülkede durum böyledir: mali fişin QR kodunda tutar, tarih ve kasa numarası vardır. Ülkenizde de böyleyse fişlerini ekleyebiliriz.

##### 5–10 fiş gönderin

1. Farklı mağazalardan fişler alın: bir süpermarket zinciri, bir eczane, bir benzin istasyonu, küçük bir dükkân. E-fişler — e-postadan gelen bir PDF ya da resim — da olur.
2. Her birinin QR kodu ve toplamı net görünecek şekilde fotoğrafını çekin.
3. Bunları “Telegram sohbeti”ne ya da “İyileştirme öner” ile e-postayla gönderin — ikisi de “Ayarlar”, “YARDIM VE İLETİŞİM” bölümünde. Ülkenizi belirtin.

Kodun farklı kasa ve zincirlerde aynı şekilde kurulduğundan emin olmak için birkaç fiş gerekir. Tek bir fiş bunu söyleyemez.

*Fotoğrafta neyi kapatmalı:*
Bize yalnızca QR kodu, tutar ve tarih gerekir. Kartınızın son rakamları, kasiyerin adı, bir sadakat kartı ve kişisel olan başka her şey parmakla kapatılabilir ya da karartılabilir — tanımayı etkilemez.

*Ne zaman işe yaramaz:*
Fişin QR kodunda yalnızca bir web sitesine bağlantı varsa — tutar ve tarih olmadan — veriler o web sitesindedir. Uygulama oraya gitmez: sunucusuz ve kayıtsız çalışacağına söz verir. Böyle fişler tarayıcısız kalır, ama kodlarını her zaman “E-fiş (URL veya kod)” alanında saklayabilirsiniz.

## Widget’lar ve kısayollar {#widgets}

Bir alışverişi kaydetmek için doğrudan telefonunuzun ana ekranında düğmeler: ses, yeni işlem, fiş tarayıcı. Tek dokunuş ve formdasınız — uygulamayı açmadan ve “+”ya kaydırmadan.

*telefonun ana ekranı — “Widget’lar” → “Bütçem”; kısayollar — uygulama simgesine uzun basın*

### Neden {#widgets-why}

Alışverişler hatırlandığı sırada kaydedilir: kasada, mağazadan çıkarken. Her fazladan dokunuş onu “akşama” bırakıp unutmak için bir bahanedir. Ana ekrandaki bir widget gerekeni hemen açar: sesi, formu ya da fiş için kamerayı.

### Beş widget {#widgets-widgets}

| Widget | Boyut | Ne yapar |
|---|---|---|
| “Ses” | 1 hücre | Mikrofonlu yeşil bir düğme — [sesle giriş](#voice). |
| “İşlem” | 1 hücre | “+ İşlem” renginde “+” işaretli bir düğme — yeni bir işlem. |
| “Fiş” | 1 hücre | QR kodlu mor bir düğme — [fiş tarayıcı](#receipt). |
| “Düğmeler alt alta” | 1 × 2 hücre | Üç düğme üst üste. |
| “Düğmeler yan yana” | 2 × 1 hücre | Üç düğme yan yana. |

Renkler uygulamadaki düğmelerle aynıdır: ses için yeşil, fiş için mor.

##### Fiş düğmesi herkes için değil

Ayrı “Fiş” widget’ı herkese verilir. Ama üç düğmeli widget’larda fiş düğmesi yalnızca uygulama ülkenizin fişlerini tanıyorsa görünür — uygulamadaki düğmeyle aynı kurala göre. Kural [“Fiş tarayıcı”](#receipt-where) makalesinde. Aksi halde widget’ta iki düğme olur.

### Widget nasıl eklenir {#widgets-add}

1. Ana ekranda boş bir yere uzun basın.
2. “Widget’lar”ı seçin.
3. “Bütçem”i ve istediğiniz widget’ı bulun.
4. Ana ekrana sürükleyin.

Menü adları telefona bağlıdır: bazılarında “Widget’lar” ana ekran menüsündedir, bazılarında ayrı bir listede. “Ses”, “İşlem” ve “Fiş” widget’ları, bir uygulama simgesi gibi bir hücre kaplar.

### Kısayollar {#widgets-shortcuts}

Kısayol, normal bir simgeyle aynı eylemdir: başlatıcı onu uygulama simgeleri gibi çizer ve her telefonda onlarla aynı hizada durur.

1. “Bütçem” simgesine uzun basın.
2. “Ses” ve “İşlem” belirir — hemen açmak için birine dokunun.
3. Ya da bir kısayolu ana ekrana sürükleyin — orada bir simge olarak kalır.

Fiş için kısayol yoktur: uygulamanın ülkenin fişlerini tanımadığı yerlerde bir kısayol gizlenemez. Fiş için “Fiş” widget’ını kullanın.

### Ne açılır {#widgets-open}

| Dokunduğunuz | Ne olur |
|---|---|
| “Ses” | Uygulama “Özet”te, üstte sesle giriş sayfasıyla açılır. |
| “İşlem” | “Özet”, üstte yeni işlem formuyla. |
| “Fiş” | “Özet”, üstte tarayıcı kamerasıyla. |

Kaydettikten sonra “Özet”te kalırsınız ve alışverişin bütçeye girdiğini görürsünüz.

##### PIN belirlendiyse

Uygulama önce PIN’inizi ya da parmak izinizi ister, hemen ardından da dokunduğunuzu açar. Bir şeye tekrar dokunmanız gerekmez.

## Alıcılar ve etiketler {#payees-tags}

Kime ve ne için ödediğiniz — işlem akışınızın kategorilerin yanındaki iki dilimi.

*“İşlemler” başlığındaki bir simge*

### Bu ekran ne için {#payees-tags-why}

Kategoriler “para nereye gitti” sorusunu yanıtlar. Burada aynı işlem akışının iki başka dilimi var: **kime** ödediğiniz ve **ne için**. Bu yıl “Migros”a ne kadar gitti, yazlık neye mal oldu, ortak bir alışveriş için kim kime borçlu.

##### Oraya nasıl gidilir

“İşlemler” başlığındaki “Alıcılar ve etiketler” simgesi. Ya da “Ayarlar → VERİLER → Alıcılar” ve “Etiketler”. Ya da “Özet” ekranındaki “Etiketlerim” bloğunda “Tüm etiketler ›”.

##### Önceden ayarlamanıza gerek yok

Alıcılar ve etiketler, onları işlem formuna ilk kez yazdığınızda kendiliğinden belirir. Burada bakar, yeniden adlandırır ve temizlersiniz.

##### İki sekme

“Alıcılar” ve “Etiketler”. Ekran hangi sekmede bıraktığınızı hatırlar.

### “Alıcılar” sekmesi {#payees-tags-payees}

Ödeme yaptığınız ya da para aldığınız herkes. Tam ekran açmak için herhangi bir ekran görüntüsüne dokunun.

[Alıcılar sekmesi: arama, Bu yılın toplamı, Migros −27.801, İşveren +420.000, Netflix, Yeni alıcı düğmesi]

1. **Sekmeler** — “Alıcılar” ve “Etiketler”.

2. **“⋮” menüsü** — alıcı listesinin sırası ve toplamın dönemi. İkinci ekran görüntüsünün sağında anlatılıyor.

3. **Arama** — adın birkaç harfini yazın.

4. **Alıcı** — bir harf, ad, sağda dönemin toplamı, adın altında aynı dönemde kaç işlem olduğu ve sonuncusunun ne zaman olduğu.

   *Nasıl çalışır:*
   Toplam “net”tir ve işaretlidir: bir mağaza için iadelerden sonra bir eksi, bir işveren için bir artı. Ekran görüntüsünde “Migros” yılbaşından beri ₺27.801’e mal oldu, “İşveren” de ₺420.000 getirdi. Bu sayıların bilerek rengi yoktur: yönü işaret gösterir.

   Bir satıra dokunun — alıcı ekranı açılır ([aşağıda](#payees-tags-payee)). Sola kaydırın — “Düzenle”: yeniden adlandırma. Sağa kaydırın — “Sil”: uygulama tekrar sorar ve alıcının kaç işlemi olduğunu söyler. İşlemlerin kendisi kaybolmaz; yalnızca alıcısız kalırlar.

5. **“Bu yılın toplamı”** — listenin üstündeki yazı: sağdaki sayıların hangi dönemi kapsadığı. Dönemi “⋮” menüsünde seçin.

6. **“+ Yeni alıcı”** — elle bir alıcı ekleyin. Genellikle gerekmez: işlem formu kendisi oluşturur.

#### Liste sırası {#payees-tags-sort}

[Sıralama menüsü: En çok kullanılan, Son kullanılan, Alfabetik, Tutara göre, Dönem]

(A)
#### En çok kullanılan

En çok işlemi olanlar üstte. Kurulumdan hemen sonraki ayar budur.

(B)
#### Son kullanılan

En son işlemi olanlar üstte.

(C)
#### Alfabetik

Yüzlerce alıcınız olduğunda kullanışlıdır.

(D)
#### Tutara göre

En büyükler üstte: hem en çok ödediğiniz hem de en çok aldığınız. İşaret önemli değil, yalnızca büyüklük.

(E)
#### Dönem

“Bu yılın toplamı” (kurulumdan hemen sonraki varsayılan), “12 aylık toplam” ya da “Tüm zamanların toplamı”. Dönem, her satırdaki tutarı, “İşlem: N” sayısını ve “En çok kullanılan” ile “Tutara göre” sıralarını belirler; son işlemin tarihi her zaman tüm zamanlara göredir. Yıl 1 Ocak’ta başlar: 1 Ocak’ta toplam sıfırdan başlar.

### Alıcı ekranı {#payees-tags-payee}

Tek bir alıcıyla ilgili her şey: ne kadar, neye ve ne zaman. “⋮” yeniden adlandırır, alttaki “+” da bu alıcı zaten doldurulmuş yeni bir işlem başlatır.

[Netflix alıcı ekranı: dönem Kasım 2026, Harcama eğilimleri, Kategoriye göre, günlere göre işlemler]

(F)
#### Dönem

Geçerli ayla başlar. Oklar aylar arasında gezdirir, ada dokunmak da “Dönem” sayfasını açar: “Raporlar”dakinin aynısı.

*Nasıl çalışır:*
Bir yılda bir alıcıya giden her şeyi mi görmek istiyorsunuz? Bir yıl ya da kendi aralığınızı seçin, ekran onu eksiksiz gösterir: toplam, kategoriler ve tüm işlemler.

(G)
#### “Harcama eğilimleri”

Dönem içinde alıcıyla ne kadar harcandığı ve ayda ortalama ne kadar.

*Nasıl çalışır:*
Harcamalar iadelerden sonra sayılır. Alıcı size çoğunlukla ödeme yapıyorsa (bir işveren, bir kiracı) bloğun adı “Gelir eğilimleri”dir ve geliri sayar.

(H)
#### “Kategoriye göre”

Bu alıcıya giden paranın neye gittiği. İki ya da daha fazla kategori olduğunda görünür.

*Nasıl çalışır:*
Ekran görüntüsünde Netflix’in iki kategorisi var: “Telefon ve internet”te ev interneti ve “Abonelikler”de abonelik.

(I)
#### İşlemler

Dönem içinde bu alıcıyla yapılan tüm işlemler, günlere göre.

### “Etiketler” sekmesi {#payees-tags-tags}

Kategorilerin üstündeki işaretler: “#yazlık”, “#tatil”, “#yarı yarıya”. Bir işleme nasıl etiket konulacağı — [“İşlemler”](#transactions) makalesinde.

[Etiketler sekmesi: yarı yarıya — toplanacak 1.075, 2.150’nin 1.075’i toplandı; yazlık — 2.957, iki işlem]

7. **Etiket** — ad, etiketin tüm zaman aralığının toplamı, aralığın kendisi ve işlem sayısı. “Hesaplaşma” açık bir etikette sağ taraf ne kadar toplanacağını ya da geri verileceğini gösterir.

   *Nasıl çalışır:*
   Sıra şöyledir: önce hesaplaşması açık etiketler, sonra son işlemin ne kadar yeni olduğuna göre, işlemsiz etiketler en sonda. Gizli etiketler altta ayrı bir “Gizli etiketler” bloğunda toplanır.

   Dokunun — etiket ekranı ([aşağıda](#payees-tags-tag)). Basılı tutun — bir menü: “Yeniden adlandır”, “Hesaplaşma”, “Seçimden gizle”. Yeniden adlandırmak için sola, silmek için sağa kaydırın.

8. **“+ Yeni etiket”** — elle bir etiket ekleyin. Genellikle etiketler doğrudan işlem formunda oluşturulur.

### Etiket ekranı {#payees-tags-tag}

Tek bir etiketin altına giren her şey — ne kadar, neye ve ne zaman. “Hesaplaşma” da burada ayarlanır.

[yarı yarıya etiket ekranı: Kasım 10, 2 işlem, toplanacak 1.075, %50 kapandı, Harcanan 2.150, Alınan 1.075, Kategoriye göre, işlemler]

(J)
#### Aralık ve işlemler

Etiket altında işlemi olan ilk ve son gün ve kaç tane oldukları. Ekranın toplamları etiketin tüm aralığını kapsar.

(K)
#### Hesaplaşma

Etiket için “Hesaplaşma” açıksa: denkleşmek için ne kadar kaldığı ve bir “%N kapandı” çubuğu.

*Nasıl çalışır:*
Hesaplaşma, ortak bir masraf için “kim kime borçlu” sorusunu yanıtlar. Uygulama hesaplar: etiketin tüm aralığı boyunca harcanan eksi alınan.

- **“Toplanacak”** — topladığınızdan fazlasını harcadınız. Ekran görüntüsünde: “Gratis”teki ₺2.150’lik bir alışveriş Ahmet’le bölündü, o ₺1.075 geri ödedi — ₺1.075 kaldı, %50 kapandı.
- **“İade edilecek”** — harcadığınızdan fazlasını topladınız: örneğin herkes bir hediye için para verdi ve para üstü kaldı.
- Yeşil **“Kapandı”** — her şey tutuyor.

Bir arkadaştan gelen parayı, aynı etiketle, alışverişin kategorisine bir iade olarak kaydedin — [“İşlem formu”](#entry) makalesinin “İade edilen ürünün parası” bölümündeki gibi. “Hesaplaşma” bütçeye ya da raporlara dokunmaz: sizin için bir yardımcıdır.

(L)
#### “Harcanan” ve “Alınan”

Etiket altında ne kadar çıktığı ve geldiği. Kendi hesaplarınız arasındaki transferler dahil değildir.

(M)
#### “Kategoriye göre”

Bu etiket altındaki paranın neye gittiği. Bölünmüş bir tutarın tek bir parçasındaki etiket yalnızca o parçayı sayar.

(N)
#### İşlemler

Etiketli tüm işlemler, günlere göre.

#### Etiketin “⋮” menüsü {#payees-tags-tag-menu}

[Etiket menüsü: Yeniden adlandır, Etiketlerim'de göster, Hesaplaşma işaretli, Seçimden gizle, İpuçları, Bilgi bankası, Sil]

(O)
#### Yeniden adlandır

Yeni ad, etiketli tüm işlemlerde görünür. Uygulama zaten alınmış bir adı kabul etmez.

(P)
#### “Etiketlerim'de göster”

Etiketi “Özet” ekranındaki “Etiketlerim” bloğuna ekleyin. Dört yer vardır; dolu olduklarında madde gridir ve nedenini söyler: “Etiketlerim'de zaten 4 var”.

(Q)
#### Hesaplaşma

Bu etiket için “kim kime borçlu” hesabını açın ya da kapatın.

(R)
#### Seçimden gizle

Etiket formdaki seçim sayfasından kaybolur, ama işlemlerde kalır. Biten bir tatil için kullanışlıdır. Gizli bir etikette bu yerde “Seçime geri al” yazar.

(S)
#### İpuçları

Bu ekranın ipuçları.

(T)
#### Bilgi bankası

Web sitesindeki bu makale: tarayıcıda, uygulamanın dilinde açılır.

(U)
#### Sil

Etiket tüm işlemlerden kaldırılır; işlemlerin kendisi kalır. Uygulama tekrar sorar.

### Satırla neler yapabilirsiniz {#payees-tags-gestures}

Satırlarda düğme yoktur: dokunun, basılı tutun ya da parmağınızla kaydırın.

| Bunu yapın | Ne olur |
|---|---|
| Bir alıcıya dokunun | Alıcı ekranı. |
| Bir alıcıyı sola / sağa kaydırın | “Düzenle” (yeniden adlandırma) / “Sil”. |
| Bir etikete dokunun | Etiket ekranı. |
| Bir etiketi basılı tutun | Bir menü: “Yeniden adlandır”, “Hesaplaşma”, “Seçimden gizle”. |
| Bir etiketi sola / sağa kaydırın | “Düzenle” (yeniden adlandırma) / “Sil”. |

## Planlı ödemeler {#scheduled}

Kira, abonelikler, maaşınız — tekrarlanan her şey. Uygulama vadeleri hatırlar, size hatırlatır ve tutarı ile kategoriyi kendisi doldurur. Bütçedeki para yalnızca siz ödemeyi onayladığınızda hareket eder.

*“Ayarlar” → “PLANLAMA” → “Planlı ödemeler”*

### Bu ekran ne için {#scheduled-why}

Bir ayın harcamalarının yarısı önceden bellidir: ayın 1’inde kira, 5’inde internet, 11’inde bir abonelik, ayda iki kez maaş. Planlı ödeme, böyle bir işlemin bir kez, önceden yazılmış halidir.

##### Unutmayın

Uygulama vadeyi bir bildirimle hatırlatır — ödeme günü ya da önceden, nasıl ayarladıysanız.

##### Elle yazmayın

Vade geldi — “Onayla”ya dokunun, işlem kendini kaydeder: tutar, alıcı, kategori, hesap.

##### Sırada neyin olduğunu görün

Yaklaşan ödemeler “Özet” ekranında “Sırada ne var” bloğunda ve “Takvim”de durur. Paranın şimdiden nereye söz verildiğini görürsünüz.

Planlı ödeme henüz harcama değildir. Siz onaylayana kadar hesap ve zarf bakiyeleri değişmez: yalnızca hatırlatır ve önerir.

### Ekranda ne nerede {#scheduled-screen}

Tüm planlı ödemeler tek bir listede, en yakın vade en üstte. Tam ekran açmak için herhangi bir ekran görüntüsüne dokunun.

[Planlı ödemeler ekranı: İşveren +35.000 ayda iki kez, Ev sahibi −30.000 her ay, Enerjisa, Spotify, Netflix, kırmızı bayraklı ve Araç sigortası notlu, her yıl −20.000’lik bir çizgi, Ödeme düğmesi]

1. **Satır** — tekrarlanan bir ödeme. Bir işlem satırı gibi düzenlenmiştir: kim ve ne kadar, kategori ve hesap, nasıl tekrarlandığı ve bir sonraki vadesinin ne zaman olduğu.

   *Nasıl çalışır:*
   İlk satır alıcı ve işaretli tutardır: “−” paranın çıkacağı, “+” geleceği anlamına gelir. İkincisi kategori ve hesaptır. Üçüncüsü sıklık ve en yakın vadedir.

   Alıcısız bir ödeme ad yerine bir çizgi “———” gösterir, not da dördüncü bir satırda durur — ekran görüntüsünde “Araç sigortası”.

   Liste en yakın vadeye göre sıralanır. Vadesi geçmiş ödemeler de buradadır, en üstte: onay bekliyorlar — bunun hakkında daha fazlası [aşağıda](#scheduled-due).

2. **Sıklık ve tarih** — solda nasıl tekrarlandığı, sağda bir sonraki vade. Her vade kaydedildikten ya da atlandıktan sonra tarih kendiliğinden bir sonrakine geçer.

3. **Bayrak** — bir işlemdekiyle aynı renkli işaret. Ödeme kaydedildiğinde bayrak işleme geçer.

4. **“+ Ödeme”** — yeni bir planlı ödeme. Adımlar [aşağıda](#scheduled-new).

Planlı ödeme olmadığı sürece ekran boştur: “Planlı ödeme yok” ve “Kira, abonelikler, maaş — «Ödeme» düğmesiyle ekleyin” ipucu.

### Yeni bir planlı ödeme {#scheduled-new}

Form, normal bir işleminkiyle aynıdır, yalnızca bir “Tekrarla” alanı vardır. Listedeki bir satıra dokunmak da onu açar: o zaman adı “Planlı ödeme” olur ve var olanı düzenler.

[Planlı ödeme formu: Giden, 30.000, Alıcı Ev sahibi, Kategori Kira, Hesap Vadesiz hesap, Tarih, Tekrarla Her ay, Not, Ek bilgiler, Kaydet]

[Tekrarla sayfası: Bir kez, Her gün, Her hafta, 2 haftada bir, Ayda iki kez, 4 haftada bir, Her ay, 2 ayda bir, 3 ayda bir, 4 ayda bir, Yılda iki kez, Her yıl]

5. **Tutar** — uygulamanın tuş takımında yazın ve “Tamamla”ya dokunun. Tutarın üstünde — bir ödeme için “− Giden”, bir maaş için “+ Gelen”.

6. **Alıcı** — kime ödediğiniz ya da size kimin ödediği.

7. **Kategori** — paranın hangi zarftan çıkacağı. Bir maaş için — ayın geliri.

8. **Hesap** — hangi hesaptan çekileceği ya da hangisine geleceği.

9. **Tarih** — en yakın vade. Uygulama sonrakileri bundan sayar.

10. **“Tekrarla”** — ne sıklıkta: on iki seçenek, sayfa ikinci ekran görüntüsünde.

    *Nasıl çalışır:*
    - **“Bir kez”** — tekrarsız bir ödeme. Kaydedildikten ya da atlandıktan sonra listeden kaybolur.
    - **“Ayda iki kez”** — vade günü ve ondan 15 gün sonra: ayın 3’ü ve 18’i. İkinci gün bir ayda yoksa vade ayın son gününe düşer.
    - **“4 haftada bir”** — “Her ay” ile aynı değildir: yılda 12 değil 13 vade olur ve tarih her seferinde kayar.
    - **“Her ay”** ve daha seyrekleri — ayın aynı gününde. O gün bir ayda yoksa vade ayın son gününe düşer ve bir sonrakinde geri döner: ayın 31’indeki bir ödeme 28 Şubat, 31 Mart, 30 Nisan’da gelir.

11. **Etiketler** — işlemlerdekiyle aynı işaretler. Ekran görüntüsünde kiranın “ev” etiketi var.

12. **“Ek bilgiler”** — e-fiş, fotoğraflar ve PDF’ler, “Hesaba geçti” ve bayrak. Ekran görüntüsünde kiraya kira sözleşmesinin bir PDF’i eklenmiş.

    *Nasıl çalışır:*
    Burada doldurduğunuz her şey, etiketlerle birlikte, bu ödemeden girilen her işleme geçer. Etiketler burada yerindedir: her kira ödemesi kendiliğinden “ev” etiketinin altına girer. Ek dosya ise genellikle bir kez gerekir: sözleşmeyi tek bir işleme eklemek yeterlidir — ilk ödemeyi girerken “Düzenle”ye dokunun ve PDF’i formda ekleyin. Buraya eklenirse yıllar boyunca her ödemenin yanında bir simge olarak durur. Fişi, fotoğrafları ve PDF’leri buraya yalnızca belge gerçekten her işlemde gerekiyorsa ekleyin.

13. **“Kaydet”** — ödeme listede belirir. Hatırlatmalar açıksa uygulama size onu hatırlatır.

##### Ödeme nasıl oluşturulur

1. “Ayarlar” → “PLANLAMA” → “Planlı ödemeler”.
2. Sağ alttaki “+ Ödeme”ye dokunun. “Yeni planlı ödeme” açılır.
3. Tutarı yazın ve “Tamamla”ya dokunun.
4. Alıcıyı, kategoriyi ve hesabı seçin.
5. “Tarih” — en yakın vade.
6. “Tekrarla” — ne sıklıkta tekrarlandığı.
7. İsteğe bağlı — etiketler ve “Ek bilgiler”.
8. “Kaydet”.

##### Planlı bir transfer

Bir kredi kartı ödemesi, bir kredi taksiti, bir birikim hesabına para yatırmak — bu kendi hesaplarınız arasında bir transferdir. “Alıcı” alanında “Transferler” bölümünde bir hesap seçin, yönü de normal bir transferdeki gibi — “Giden” ya da “Gelen”.

*Transfer iki hesap demektir:*
- Ödeme **iki** hesabın ekranında da, “Sırada ne var” bloğunda görünür: vadesiz hesapta eksi, kredide artı olarak.
- Onay ekranında, hatırlatmada ve haftalık özette güzergâhıyla adlandırılır: “Vadesiz hesap → Kredi”.
- “Onayla”, formun yaptığı gibi transferi iki hesaba birden kaydeder.
- Farklı para birimlerindeki hesaplar — alıcının altında “Yatan” ve “Kur” belirir: kuru hemen, oluştururken girin. Vade geldiğinde “Onayla” formu bu sayılarla açar — günün kurunu kontrol edin ve kaydedin.
- Bütçe dışı bir hesaba (kredi, mevduat) yapılan transfer bir zarftan para çıkarır — uygulama normal bir transferdeki gibi kategori sorar. Bütçe hesapları arasındaki bir transfere (vadesiz hesap → kredi kartı) kategori gerekmez.
- “Özet” ekranındaki “Takvim”de kredi kartı ödemesi harcama olarak boyanmaz: para bütçede kaldı. Bütçe dışı bir kredinin taksiti ise boyanır.

##### Planlı ödemede neler olamaz

Bölünmüş bir tutar: kaydederken uygulama “Planlı bölmeler henüz desteklenmiyor” der.

### Var olan bir işlemden {#scheduled-from-txn}

Planlı ödeme oluşturmanın en hızlı yolu, zaten kaydettiğiniz bir işlemdendir: form sıklık dışında her şeyi alır.

[Migros işlem sayfası: alıcı, kategori, hesap, tarih, fiş, fotoğraf; altta Tekrarla, Düzenle ve Planlı ödeme oluştur düğmeleri]

(14)
##### “Planlı ödeme oluştur”

1. “İşlemler”de, bir hesap ya da kategori ekranında bir işleme dokunun — işlem sayfası açılır.
2. Altta — “Planlı ödeme oluştur”.
3. Aynı tutar, alıcı, kategori, hesap, not, bayrak ve etiketlerle “Yeni planlı ödeme” açılır. E-fiş, fotoğraflar ve PDF’ler ile “Hesaba geçti” boştur: her ödemenin kendi vardır. Diyelim bir sözleşme mi eklemeniz gerekiyor? Burada ekleyin. Üstte hemen “Tekrarla” sayfası açılır — sıklığı seçin.
4. Tarih kendiliğinden dolar — o işlemden sonraki en yakın vade, ama bugünden önce değil: ayın 5’indeki bir işlemden aylık bir ödeme gelecek ayın 5’inde başlar.
5. “Kaydet”.

Düğme yalnızca normal bir işlemde vardır: bölünmüş bir tutarda ve bir transferde yoktur.

### Vadesi gelince {#scheduled-due}

Vade günü ödeme onay beklemeye başlar. Kendiliğinden girilmez: kira bir gün geç ödenmiş olabilir, faturalar her ay farklı tutarla gelir. Karar sizin.

[Özet’teki şerit: Planlı ödemeler: 2 onay bekliyor]
“Özet” ekranının üstünde bir şerit belirir: “Planlı ödemeler: 2 onay bekliyor”. Onay ekranını açmak için dokunun.

[Onay ekranı: İşveren +35.000 ve Ev sahibi −30.000 kartları, her biri bir giriş tarihi ve oklarla, Atla, Düzenle, Onayla]

[Tarihi bir gün kaydırılmış aynı kart: kaydırıldı ve sıfırlandı yazıları]

(A)
##### Ödeme kartı

Kim, ne kadar, kategori, hesap ve sıklık. En eski vade en üstte.

(B)
##### Giriş tarihi

Vade tarihi olarak başlar. “‹ ›” onu bir gün öne ya da sonraya alır, tarihe dokunmak bir takvim açar — iki yönde birer ay. Kaydırıldıktan sonra yanında “kaydırıldı” ve “sıfırlandı” belirir (ikinci ekran görüntüsü); “sıfırlandı” vade tarihini geri getirir.

(C)
##### “Onayla”

İşlem seçilen tarihte kaydedilir ve ödemenin içerdiği her şeyle “İşlemler”de görünür: etiketler, fiş, fotoğraflar ve PDF’ler, “Hesaba geçti” işareti. Kart gider, vade bir sonrakine geçer.

*Nasıl çalışır:*
Bir sonraki vade giriş tarihinden değil, VADE tarihinden sayılır: ayın 1’inde vadesi gelen kira 3’ünde ödendi — bir sonraki vade yine 1’idir. Yoksa takvim her gecikmeyle kayardı.

(D)
##### “Düzenle”

Bu sefer tutar farklıysa. İşlem formu ödemenin alanlarıyla — ve etiketleri, fişi, fotoğrafları ve PDF’leriyle — açılır: düzeltin ve kaydedin — işlem kaydedilir, vade kapanır. Formu kaydetmeden mi kapattınız? Hiçbir şey değişmedi.

(E)
##### “Atla”

Bu sefer ödeme olmadı. Hiçbir işlem kaydedilmez, vade bir sonrakine geçer. “Bir kez” ödemesi atlandıktan sonra kaybolur.

*Birkaç vade birikmişse:*
Uygulamayı iki ay açmadınız mı? Aylık bir ödemenin geride iki vadesi vardır. Kart en eskisini gösterir; onaylayın ya da atlayın — bir sonraki belirir, bugüne ulaşana kadar. Düzenlenecek bir şey kalmadığında ekran “Onaylanacak ödeme yok” der.

Planlı bir transfer bir transfer olarak — iki hesaba birden — girilir. Hesaplar farklı para birimlerindeyse “Onayla” formu, oluştururken doldurulan “Yatan” ve “Kur” alanlarıyla açar — günün kuruna göre düzeltin ve kaydedin.

### Vadeden önce ya da sonra {#scheduled-early-late}

Para nadiren tam gününde gelir. Bir ödeme gerçekte olduğu tarihle girilir — ve vade kapanır: kendi gününde ne onay ekranında ne de bir hatırlatma olarak yeniden çıkar.

##### Maaş 2 gün erken geldi

Vade henüz gelmedi, bu yüzden onay ekranında değil.

1. “Ayarlar” → “PLANLAMA” → “Planlı ödemeler”.
2. “İşveren” satırını sola kaydırın — “Kayda geçir” belirir. Dokunun.
3. İşlem formu açılır: tutar, alıcı, kategori, hesap, etiketler — ödemeden, tarih — bugün. Para bugün gelmedi mi? “Tarih” alanına dokunun ve günü seçin.
4. “Kaydet”.

Maaş geldiği gün kaydedilir. Vade kapanır: kendi gününde uygulama hatırlatmaz ya da onaylamanızı istemez. Bir sonraki vade takvimi izler: ayda iki kez — iki günün bir sonrakini, her ay — kaydettiğiniz günden değil vadeden bir ay sonrasını.

##### Kira bir gün geç ödendi

Vade zaten geçti — ödeme onay ekranında bekliyor.

1. “Özet” ekranındaki “Planlı ödemeler: … onay bekliyor” şeridine dokunun.
2. Ödeme kartında “›”ya dokunun — giriş tarihi bir gün sonraya gider. Bir takvim açmak için tarihin kendisine dokunun.
3. “Onayla”.

İşlem ödediğiniz gün kaydedilir. Bir sonraki vade takvimde kalır — 2’si değil, 1’i.

##### Bu sefer tutar farklı

Faturalar her ay farklıdır. Vade geldi — onay ekranındaki kartta “Düzenle”; henüz gelmedi — listede “Kayda geçir”. Formda tutarı düzeltin ve “Kaydet”e dokunun: işlem yeni tutarla kaydedilir, planlı ödeme ise eskisini korur.

### Satırla neler yapabilirsiniz {#scheduled-gestures}

Satırda düğme yoktur. Satırı parmağınızla yana, alttan beliren bir düğmeye doğru kaydırırsınız.

[Sola kaydırılmış Enerjisa satırı: Kayda geçir düğmesi]

[Sağa kaydırılmış Enerjisa satırı: kırmızı Sil düğmesi]

| Bunu yapın | Ne olur |
|---|---|
| Satıra dokunun | “Planlı ödeme” formu: tutarı, tarihi, sıklığı — her şeyi değiştirin. “Kaydet”. |
| Sola kaydırın | “Kayda geçir” — en yakın vadeyi hemen şimdi girin: kirayı önceden ödediniz, para erken geldi. Ödemenin alanları ve bugünün tarihiyle yeni bir işlem formu açılır. Kaydedildikten sonra işlem kaydedilir, bu vade kapanır, bir sonraki de takvimi izler. |
| Sağa kaydırın | “Sil” — “Planlı ödeme silinsin mi?” sorusundan sonra. Bu ödemeden zaten kaydedilmiş işlemler kalır. |

### Hatırlatmalar {#scheduled-reminders}

Uygulama bir vadeyi bir bildirimle hatırlatır: “Bugün: …”, “Yarın: …” ya da “3 gün sonra: …”. Ne zaman hatırlatacağı — ödeme günü, bir, 2 ya da 3 gün önce veya bir hafta önce —, hangi saatte ve kilit ekranında tutarların gizlenip gizlenmeyeceği [“Ayarlar” → “Hatırlatıcılar”](#settings-reminders) içindedir.

### Planlı ödemeler başka nerede görünür {#scheduled-elsewhere}

**“Özet”** — “Sırada ne var” bloğu: tarihleriyle yaklaşan ödemeler, ve “Planlanan” modundaki “Takvim”: yaklaşan, girilmiş ve girilmemiş vadeler. Ayrıntılar [“Özet”](#overview-heatmap) makalesinde.

**Hesap ekranı** — akışın üstünde bir “Sırada ne var” kartı: bu hesabın planlı ödemeleri. Bir satıra dokunmak “Planlı ödemeler”i açar.

**“Hedefler”** — bir kategorinin planlı ödemesi varsa hedef kartı “Planlı ödemeden: …” önerir. Ayrıntılar [“Hedefler”](#goals-new) makalesinde.

**Haftalık özet** — açıksa yaklaşan planlı ödemeleri içerir. Ayrıntılar [“Ayarlar” → “Hatırlatıcılar”](#settings-reminders) içinde.

## Bulut ve yedekler {#sync}

Bütçenizi kaybetmemenin ve birkaç cihazda tutmanın yolu.

*“Ayarlar” → “EŞİTLEME” bölümü*

### Bütün bunlar ne için {#sync-why}

Bütçe telefonunuzda yaşar. Ayarların bu bölümü üç soruyu yanıtlar.

**“Telefonum göle düştü”** — üç yıllık bütçe onunla birlikte batmamalı. [Yedekler](#sync-backups) ve bulut yardım eder: yeni telefon [bütçeyi buluttan yükler](#sync-restore).

**“Bütçeyi birlikte tutuyoruz”** — ya da yalnızca sizsiniz, ama bir telefon ve bir bilgisayarla. Tüm cihazlar tek bir buluta bakar ve değişiklikleri paylaşır: bu [eşitlemedir](#sync-sync).

**“Dün her şeyi berbat ettim”** — yanlış hesabı sildiniz, yanlış dosyayı içe aktardınız. Uygulama [bir programa göre yedekleri](#sync-backups) kendisi alır, siz de onlara geri dönebilirsiniz.

**Nereden başlamalı.** Üç adım yeterli:

1. [Bir bulut bağlayın](#sync-auth) — Google Drive, Dropbox veya WebDAV (Nextcloud, ownCloud, pCloud, kendi sunucunuz).
2. Buluttaki verilerinizi başka kimsenin okuyamamasını istiyorsanız [bir parola belirleyin](#sync-password). Bir yere yazın.
3. Hepsi bu. Eşitleme ve yedekler bundan sonra kendiliğinden çalışır: uygulamayı her açışınızda.

### Yetkilendirme: bir bulut bağlayın {#sync-auth}

Buluta burada giriş yaparsınız. Üç bulut var, birini ya da birkaçını bağlayabilirsiniz. Ekran görüntüsünde Dropbox zaten bağlı, Google Drive ve WebDAV ise henüz değil: böylece iki tür bloğu da görürsünüz.

[Yetkilendirme ekranı: Bulut şifreleme, Google ile giriş yap düğmeli Google Drive, bağlı bir hesapla Dropbox, adres, kullanıcı adı ve parola alanlarıyla WebDAV]

(1)
**Bulut şifreleme** — “Eşitleme” ve “Yedekler” ekranlarındakiyle aynı blok. Parola bir kez belirlenir — [aşağıda](#sync-password) anlatılıyor.

(2)
**Google Drive** — “Google ile giriş yap” — ve bir hesap seçin. Bütçe Google Drive’ınızdaki bir “My budget” klasörüne gider.

*Nasıl çalışır:*
Giriş yaptıktan sonra düğmenin yerini bir hesap plakası alır: ad, e-posta, son eşitlemenin zamanı ve “Çıkış yap”. Google Drive’da uygulama yalnızca kendi oluşturduklarını görür: diğer dosyalar ona açık değildir.

(3)
**Dropbox** — “Dropbox ile giriş yap”, Dropbox’ın giriş sayfasını tarayıcıda açar. Orada iki şekilde giriş yapabilirsiniz: Dropbox e-postanız ve parolanızla ya da “Google ile devam et” düğmesiyle. Erişime izin verin — tarayıcı sizi uygulamaya geri getirir. Bütçe bir “My budget” klasörüne gider.

*Neden Dropbox e-postası ve parolası daha iyi:*
Google ile giriş, Dropbox’ı kullandığınız Google hesabına bağlar. Farklı bir Google hesabı olan ikinci bir cihaz ya da ikinci bir kişi kolayca bütçenizin olmadığı başka bir Dropbox’a düşer. Dropbox e-postası ve parolası her telefonda ve bilgisayarda, bütçeyi birlikte tuttuğunuz herkeste aynı şekilde çalışır.

*Uygulamaya geri dönmediyseniz yedek yol:*
Genellikle asıl giriş — tarayıcıdan geri dönüşle — yeterlidir. Tarayıcı sizi uygulamaya hiç geri getirmezse “Giriş yapamıyor musunuz?” → “Kodla giriş yap (uygulamaya geri dönmediyseniz)”ı açın: Dropbox bir kod gösterir, onu uygulamanın penceresine yapıştırın.

Ekran görüntüsü bağlı bir Dropbox’ı gösteriyor: “Çıkış yap” ve “Şimdi eşitle” ile bir hesap plakası. Aynı yerdeki “Dropbox belirtecini yenile” de bir yedek yoldur: yalnızca giriş birden çalışmaz olursa.

(4)
**WebDAV** — kendi sunucunuz ya da WebDAV konuşan bir bulut: Nextcloud, ownCloud, pCloud, Yandex Disk ve diğerleri. Bir adres, bir kullanıcı adı ve bir parola gerekir — kişisel bir hesaba giriş yapmanız gerekmez.

*Nasıl çalışır:*
Bulutta iki aşamalı koruma açıksa sunucu normal parolanızı kabul etmez: bulutun ayarlarında bir “uygulama parolası” oluşturun ve onu girin. Adresi `https://` ile başlatın — `http://` ile kullanıcı adı ve parola düz metin olarak gider, uygulama da bu konuda uyarır.

**Ana kural: tüm cihazlar için tek bir bulut hesabı**

Bir bütçeyi tutan telefon, tablet ve bilgisayar buluta **aynı** hesapla girer. Yoksa her cihaz kendi bulutuna yazar ve birbirlerinin değişikliklerini görmezler.

*Ya ailemizde farklı Google hesapları varsa?:*
Bütçe için **ayrı, yeni bir Google hesabı** açın ve tüm cihazlarda uygulamanın bulutuna yalnızca onunla girin. Karınızın telefonunda kişisel hesabınızla, sizinkinde de onunkiyle oturum açmayın: telefon kişileri, mesajları ve fotoğrafları o hesapla eşitlemeye başlar, iki kişinin kişisel verileri karışır. Ayrı bir bütçe hesabı yalnızca bütçeyi bilir.

**Dropbox** — “Google ile devam et” düğmesiyle değil, Dropbox **kullanıcı adınız ve parolanızla** girin. Google ile giriş, Dropbox’ı kullandığınız Google hesabına bağlar — ve farklı bir Google hesabı olan bir cihazda bütçenizin olmadığı başka bir Dropbox’a düşmek kolaydır.

**WebDAV** — tüm cihazlarda aynı adres, kullanıcı adı ve parola.

### Eşitleme {#sync-sync}

Bu cihaz ile bulut arasında — ve bulut üzerinden diğer cihazlarınızla — değişiklik alışverişi. Telefona bir alışveriş ekleyin — bir dakika sonra bilgisayardadır.

[Eşitleme ekranı: Bulut şifreleme, Eşitlendi (Dropbox) durumu, bulut seçimi Dropbox, Fotoğrafları eşitle ve Bu cihazdan buluta otomatik yedek anahtarları, Şimdi eşitle düğmesi]

(1)
**Bulut şifreleme** — buluta giden her şeye bir parola. [Aşağıda](#sync-password) anlatılıyor.

(2)
**Durum** — son eşitlemenin nasıl bittiği: yeşil renkte “Eşitlendi (Dropbox)”, kırmızı renkte bir hata, bir “Hata bildir” düğmesiyle.

(3)
**Bulut** — birkaç bulut bağlıysa hangisiyle eşitleneceğini seçin. Bulut yok — bu yerde “Bağlı bulut yok” yazar ve nereden bağlanacağını söyler.

*Nasıl çalışır:*
Tüm cihazlar TEK bir bulut üzerinden eşitlenir. Uygulama ana bulut kullanılamaz hale gelirse diye bağlı diğer bulutları da birkaç günde bir yeniler.

(4)
**Fotoğrafları eşitle** — fiş fotoğrafları ve PDF’ler buluta, bütçenin klasörüne gider ve diğer cihazlarda görünür. **Kurulumdan hemen sonra:** kapalı.

*Nasıl çalışır:*
Bu anahtar olmadan işlemler ikinci cihaza bir fotoğraf işaretiyle gelir, ama resmin kendisi orada olmaz. Her fotoğraf bulutta yer kaplar; fişlere yalnızca onları çektiğiniz telefonda bakıyorsanız açmaya gerek yok. Parola belirlenmişse fotoğraflar şifrelenmiş olarak yüklenir.

(5)
**Bu cihazdan buluta otomatik yedek** — bütçenin her otomatik yedeği buluta da gider. **Kurulumdan hemen sonra:** açık.

*Nasıl çalışır:*
Bütçeyi iki cihaz tutuyorsa ikisi de bulut yedeği alır — ve kopyalar çoğalır. Anahtarı bir cihazda açık bırakın, diğerlerinde kapatın. Bulut yedeğinde tüm fiş fotoğraflarının olması için “Fotoğrafları eşitle”yi de açın: yoksa yedeğe yalnızca bu cihazda çekilen fotoğraflar girer.

(6)
**Şimdi eşitle** — hemen şimdi eşitleyin. Genellikle dokunmanız gerekmez — uygulama bunu kendisi yapar, aşağıya bakın.

#### Uygulama ne zaman kendiliğinden eşitler {#sync-when}

**Her açılışta** — uygulamaya döndükten birkaç saniye sonra. Bu yüzden neredeyse hiç elle eşitleme başlatmanız gerekmez.

**Küçültürken değil** — Android, siz küçülttükten sonra bir uygulamanın çalışmaya devam etmesine izin vermez. Küçültmeden önce yapılan değişiklikler bir sonraki açılışta gider. Hemen mi göndermek istiyorsunuz? “Özet” ekranındaki eşitleme simgesine dokunun.

**“Özet”teki simge** — sağ üstte. Üstündeki sayı, kaç değişikliğin henüz buluta gönderilmediğidir. Dokunmak hemen eşitler.

*Nasıl çalışır:*
Her eşitlemeden sonra simge 15 saniye yanar: yeşil (oldu) ya da kırmızı (olmadı). Tek bir başarısızlık genellikle ağdır: metro, dağ evi. Art arda dört eşitleme başarısız olursa simge bir sonraki başarılı olana kadar kırmızı kalır — bu bir şeyin bozulduğu anlamına gelir ve bu ekranı açmaya değer. Hata metnini görmek için simgeyi basılı tutun.

Uygulama otomatik eşitlemeler hakkında susar. “Eşitlendi” mesajı yalnızca eşitlemeyi kendiniz başlattıysanız görünür.

#### Bir şeyler ters giderse {#sync-trouble}

“Eşitleme” ekranında bir kart belirir: ne olduğu ve ne yapılacağı. İşte türleri.

**““…” bütçesi bulutta verileriyle zaten var”** — kartın altında “Buluttan” ve “Birleştir” düğmeleriyle.

**Ne oldu.** Bir bulut bağladınız, içinde bu cihazdaki bütçeyle **aynı adlı** bir bütçe zaten var — ve ikisinde de zaten veri var. Genellikle bu ikinci bir telefondur: biri önce ona hesaplar ya da birkaç alışveriş ekledi, ancak sonra ilk telefonun bulutunu bağladı. Uygulama bunun tek bir bütçe mi yoksa aynı adlı iki farklı bütçe mi olduğunu anlayamaz, bu yüzden hiçbir şeye dokunmaz ve yanıtınızı bekler. Bir kez sorar — bu bütçenin ilk eşitlemesinde.

**Ne seçmeli:**

- **Bu aynı bütçe için ikinci bir cihaz** — **“Buluttan”**a, sonra “Yükle”ye dokunun. Bu cihaz bütçenin tamamını buluttan alır, burada girdikleriniz kaybolur — yeniden girin. En sık gereken yanıt budur.
- **Gerçekten tek bir bütçeyi iki cihazda ayrı ayrı tuttunuz** ve hepsini bir araya getirmek istiyorsunuz — **“Birleştir”**e dokunun. Her şey toplanır: burada girdikleriniz ve buluttakiler. Ama her cihazda ayrı ayrı oluşturduğunuz hesaplar ve kategoriler yan yana düşer — iki “Vadesiz hesap”, iki “Köşedeki kahveci” alıcısı — fazlalıkları elle temizlemeniz gerekir.
- **Bunlar yalnızca aynı ada sahip iki farklı bütçe** — örneğin sizinki ve eşinizinki, ikisi de “Bütçem”. İki düğmeye de dokunmayın. Bu cihazdaki bütçeyi yeniden adlandırın: “Özet” başlığındaki bütçe adına dokunun → bu bütçenin yanındaki “⋮” → “Yeniden adlandır”. Yeni adla bulutta kendi klasörünü alır ve ayrı eşitlenir.

Emin değil misiniz? Önce bir yedek alın: “Yedekler” → “Şimdi yedek oluştur” → “Cihaz”. Seçim yanlış çıkarsa ona geri dönebilirsiniz.

**“Bulut parolayla korunuyor”** — buluttaki veriler başka bir cihazda belirlenen bir parolayla şifrelenmiş, burada ise belirlenmemiş ya da farklı. Veriler sağlam. “Parolayı gir” — aynı parolayı girin, eşitleme devam eder.

*Nasıl çalışır:*
“Parola kayıp” son çaredir: buluttaki dosya bu cihazın verileriyle değiştirilir ve şifreleme kaldırılır. Diğer cihazların verileri kaybolmaz — değişiklikleri bir sonraki eşitlemelerinde geri gelir. Değiştirmeden önce uygulama yedek alır ve eski şifreli dosyayı onların yanına kaydeder — parolayı hatırlarsanız diye.

**“Bulut şifrelenmemiş”** — bu cihazda bir parola belirlenmiş, ama buluttaki veriler açık: şifreleme başka bir cihazda kaldırıldı. Siz karar verin: “Bulutu şifrele” — o zaman diğer cihazların aynı parolayı girmesi gerekir — ya da “Parolayı burada kaldır”.

**“Buluttaki eşitleme dosyası okunamıyor”** — buluttaki dosya bozuk ve kendi kendine düzelmez. “Bulutu onar”, bütçenin taze yedeklerini alır ve bulut dosyasının üzerine bu cihazın verilerini yazar.

*Nasıl çalışır:*
Başka bir cihazdan gelip henüz buraya ulaşmamış değişiklikler yalnızca bozuk dosyada kalır — onun bir kopyası yedeklerin yanına kaydedilir. İkinci cihaz çalışıyorsa verilerini bir sonraki eşitlemesinde geri getirir.

**“Buluttan gelen fotoğraflar çözülemedi: N”** — veriler geldi, ama fotoğraflar gelmedi: burada belirlenmemiş ya da farklı bir parolayla şifrelenmişler. Diğer cihazdakiyle aynı parolayı belirleyin — fotoğraflar bir sonraki eşitlemede gelir.

**“Çakışma”** — aynı kayıt iki cihazda değiştirildi. Kart sürümlerin nasıl farklı olduğunu gösterir: “Bırak” bu cihazın sürümünü tutar, “Al” buluttakini alır.

### Bulut şifreleme: parola {#sync-password}

“Bulut şifreleme” bloğu “Yetkilendirme”, “Eşitleme” ve “Yedekler” ekranlarında ilk sıradadır. Aynı paroladır.

**Neyi kilitler** — buluta giden her şeyi: yedekler, fiş fotoğrafları ve eşitleme dosyası. Şifreleme AES-256’dır. Parola olmadan bulut klasörüne erişimi olan herkes bu dosyaları okuyabilir.

**Nasıl belirlenir** — “Parola belirle”ye dokunun.

*Adım adım:*
1. “Şifreleme parolası” penceresi açılır.
2. Parolayı “Parola”ya ve tekrar “Parolayı yineleyin”e girin — en az 4 karakter.
3. “Parolayı güvenli bir yere yazdım”ı işaretleyin — onsuz “Kaydet”e dokunulamaz.
4. “Kaydet”. Blok “Bulut parolayla korunuyor” olur.

**Diğer cihazlarda** — **aynı** parolayı belirleyin. Parola eşitlenmez ve ne buluta ne de geliştiriciye gider — yalnızca cihazda yaşar. Farklı parolalarla eşitleme “Bulut parolayla korunuyor” kartıyla durur.

**Parolayı unutursanız bulut yedeklerini kimse kurtaramaz.** Ne siz, ne geliştirici, hiçbir şekilde. Diğer önemli parolalarınızı tuttuğunuz yere yazın.

**Değiştirin ya da kaldırın** — blokta “Düzenle”ye dokunun — “Parolayı değiştir” ya da “Şifrelemeyi kapat”. Parolayı tüm cihazlarda değiştirin: biri eskisini tutarsa bulutu okuyamaz hale gelir.

**Telefondaki yedekler şifrelenmez** — bütçenin veritabanının kendisinin yanında dururlar, o da açıktır. Bu yüzden bir parola belirlendiğinde listedeki “Cihaz” yedekleri bir “Şifrelenmemiş” etiketi taşır — her şeyin kilitli olduğunu sanmayasınız diye.

### Yedekler {#sync-backups}

Yedek, bir andaki bütçenin tamamıdır: hesaplar, kategoriler, işlemler, hedefler, planlı ödemeler ve fotoğraflar. Uygulama yedekleri kendisi alır; siz buraya geri dönmeniz gerektiğinde gelirsiniz.

[Yedekler ekranı: Şimdi yedek oluştur, Son yedek, Bulut şifreleme, Yedek programı, Tümü, Cihaz, Dropbox filtreleri, yedi yedeklik bir liste]

(1)
**Şimdi yedek oluştur** — hemen şimdi bir yedek, örneğin bir içe aktarmadan ya da büyük bir temizlikten önce. Uygulama “Yedek nereye kaydedilsin?” diye sorar — ekran görüntüsü [aşağıda](#sync-where).

(2)
**“Son yedek: …”** — bu bütçenin en son yedeğinin ne zaman alındığı. Üzerinden çok zaman geçtiyse satır sarıya döner.

(3)
**Bulut şifreleme** — “Eşitleme”dekiyle aynı parola — [yukarıda](#sync-password).

(4)
**Yedek programı** — uygulamanın ne sıklıkla yedek aldığı ve kaç tane tuttuğu. Açmak için dokunun — [aşağıda](#sync-schedule).

(5)
**Filtreler** — “Tümü”, “Cihaz” ve bağlı her bulut için bir çip. Sayı, orada kaç yedek olduğudur. Bağlı bulut yok — filtre de yok: filtrelenecek bir şey yok.

(6)
**Yedek** — tarih ve saat, nerede olduğu, ne tür olduğu ve kimin bütçesi.

*Nasıl çalışır:*
Tarihin altında — nerede olduğu (“Cihaz”, “Dropbox”…) ve türü: “Otomatik, sık”, “Otomatik, seyrek” ya da “Elle”. Altında — bütçenin adı, yedekte kaç kayıt, fotoğraf ve PDF olduğu ve dosya boyutu.

Ok işaretli saat simgesi — **bütçeyi bu yedeğe döndürür**. Çöp kutusu — yedeği siler (uygulama tekrar sorar).

(7)
**“⋮” menüsü** — “Dosyadan geri yükle”, “Okunabilir kopya”, “İpuçları” — [aşağıda](#sync-menu).

#### Bütçe bir yedeğe nasıl döndürülür {#sync-back}

1. İstediğiniz günün yedeğini bulun. Hangisi olduğundan emin değil misiniz? İşler ters gitmeden önceki sonuncuyu alın.
2. Satırındaki ok işaretli saat simgesine dokunun.
3. “Veriler geri yüklensin mi?” penceresi: “Veriler … geri yüklenecek. Mevcut veriler değiştirilecek.” — “Geri yükle”ye dokunun.
4. Altta “… tarihinden geri yüklendi” belirir. Bütçe artık yedek anındaki gibidir.

**Bir bulut bağlıysa tek bir geri yükleme yetmez.**

Yedek, son değişikliklerden kurtulmak için geri yüklenir: yanlış hesabı sildiniz, yanlış dosyayı içe aktardınız. Ama geri yükleme bütçeyi yalnızca bu telefonda değiştirir. Bulutta bütçe hâlâ o değişikliklerle durur, eşitlerken uygulama telefonu ve bulutu birleştirir, daha yeni değişiklik de kazanır. “Şimdi eşitle”ye dokunun — kurtulduğunuz her şey yarım dakika içinde buluttan geri gelir.

Geri almanın kalıcı olması için bulutun geri yüklenen bütçeyle değiştirilmesi gerekir. Nasıl — aşağıda.

#### Bulutu da geri alın {#sync-rollback}

Bütçe tek bir telefonda — bu adımlar yeterli. Sıra önemlidir.

1. **Yedeği geri yükleyin** — yukarıdaki adımlar. Bundan sonra **“Şimdi eşitle”ye dokunmayın**.
2. **Ana ekran düğmesiyle uygulamadan çıkın.** Uygulama küçültülmüşken eşitlemez.
3. **Buluttaki eşitleme dosyasını silin.** Bulutu bir tarayıcıda açın: “My budget” klasörü → bütçenin adını taşıyan klasör → `ynab_budget_sync.json` dosyası. Yalnızca onu silin — yedek ve fotoğraf klasörlerine dokunmayın. Dropbox’ta “My budget” klasörü “Apps” → “My Budget Envelopes” içindedir.
4. **Uygulamaya dönün.** Birkaç saniye sonra kendiliğinden eşitler, bulutta dosya bulmaz ve geri yüklenen bütçeyi oraya koyar. “Eşitleme” ekranında “Eşitlendi” yazmalıdır.

*Neden önce geri yükleme, sonra dosyayı silme:*
Uygulamaya her dönüşünüzde birkaç saniye sonra eşitler. Önce dosyayı silin, tarayıcıdan döndüğünüzde uygulama hemen şimdiki bütçeyi — hâlâ o değişikliklerle — buluta koyar. O zaman her şeye baştan başlamanız gerekirdi.

#### Bütçeyi birkaç cihaz tutuyorsa {#sync-rollback-devices}

İkinci telefonda ve bilgisayarda da o değişiklikler var. Eşitlemelerinde onları buluta geri koyarlar, oradan da — size. Bu yüzden diğer her cihaz, eşitlemeye fırsat bulamadan verilerini unutup bütçeyi buluttan yeniden almalıdır.

1. Bir cihazda bütçeyi ve bulutu geri alın — yukarıdaki adımlar.
2. Diğer telefonda **uçak modunu açın** ve ancak sonra uygulamayı açın: ağ olmadan eşitlemez.
3. “Ayarlar” → “Hakkında” → “Tüm verileri sıfırla”.
4. **Uçak modunu kapatın.** Uygulama eşitler ve zaten geri alınmış bütçeyi buluttan yükler.

Bir bilgisayarda — aynısı: programı başlatmadan önce internetten ayırın, ayarlardan verileri sıfırlayın, yeniden bağlayın. Bu cihazlarda henüz buluta ulaşmamış değişiklikler sıfırlamayla kaybolur.

#### Yedek programı {#sync-schedule}

Uygulama vakti geldiğinde yedeği kendisi alır — uygulamayı açtığınızda ve başka bir bütçeye geçtiğinizde. Her bütçenin kendi programı vardır. İki tür yedek var: sık — birkaç gün geri dönmek için, seyrek — aylar geri dönmek için.

[Özel modda yedek programı: sık yedekler 5 günde bir, 7 tane saklanır; seyrek ayda bir, 12 tane saklanır; Ne kadar geriye: sık yaklaşık 35 gün, seyrek 12 aya kadar]
**“Özel”.** “Varsayılan”dakiyle aynı seçenekler.

**Varsayılan** — sık yedekler 5 günde bir, son 7’si saklanır — yaklaşık 35 gün geriye; seyrek — ayda bir, 12’si saklanır — bir yıla kadar geriye.

**Özel** — sık — her gün ya da 2, 3, 5, 7 günde bir, 3, 5, 7, 10, 14 ya da 30 saklanır; seyrek — ayda bir ya da üç ayda bir, 3, 4, 6, 12 ya da 24 saklanır — ya da “Yapma”.

**“Ne kadar geriye”** — uygulama seçilen programla kaç gün ve ay geriye gidebileceğinizi hesaplar.

**Uyarılar** — sık yedekler seyrek olan başlamadan biterse uygulama boşluğu kapatan düğmelerle “… ile … gün arasında kopya olmayabilir” gösterir. Seyrekler için “Yapma”yı seçin, birkaç günden eski yedek olmayacağı konusunda uyarır.

**Eski yedekler silinir** — kaç tane saklanacağını azaltırsanız fazla yedekler bir sonraki otomatik yedekte silinir — hem telefonda hem bulutta. Bu yüzden “Kaydet” önce sorar: kaç tanesinin silineceği ve en eskisinin tarihi.

**Elle alınan yedekler** — sınırsız saklanır: program onlara dokunmaz. Program bu cihaz için geçerlidir ve eşitlenmez.

**Otomatik yedekleme art arda iki kez başarısız oldu** — “Özet” ekranında nedeniyle (örneğin yer yok) ve bir “Yedek al” düğmesiyle bir “Otomatik yedekleme oluşturulamıyor” uyarısı belirir.

#### “Yedek nereye kaydedilsin?” {#sync-where}

“Şimdi yedek oluştur” bunu sorar.

[Yedek nereye kaydedilsin sayfası: Cihaz, Telefondaki dosya, Google Drive, Dropbox, WebDAV]

**Cihaz** — uygulamanın yedek klasörüne. Yedek listede belirir.

**Telefondaki dosya** — bir klasör seçin — örneğin “İndirilenler” — ve yedeği bir dosya olarak kaydedin. Kendinize gönderebilir ya da bir bilgisayara koyabilirsiniz. Parola belirlenmişse dosya şifrelenir.

**Google Drive, Dropbox, WebDAV** — yedek doğrudan buluta gider. Bulut bağlı değil mi? Uygulama nereden bağlanacağını söyler.

#### “⋮” menüsü {#sync-menu}

[Yedekler ekranı menüsü: Dosyadan geri yükle, Okunabilir kopya, İpuçları, Bilgi bankası]

[Okunabilir kopya sayfası: Fotoğraflı ve PDF’li arşiv, Yalnızca veriler, Buluttan bir dosya]

(A)
#### Dosyadan geri yükle

bütçeyi listede olmayan bir yedek dosyasından geri getirin: buluttan indirilmiş, kendinize gönderilmiş, “İndirilenler”e kaydedilmiş.

*Nasıl çalışır:*
Bir yedek (`.y4zip`), bir “Okunabilir kopya”, hatta buluttan tarayıcıyla indirilen `ynab_budget_sync.json` eşitleme dosyası olur. Dosya şifreliyse uygulama parolayı sorar. Yedek farklı bir bütçedense (tek bir ortak hesap yok) uygulama tekrar sorar: “Bu başka bir bütçeye benziyor”. Bir YNAB 4 dosyası buraya gelmez — o, ayarlardaki “YNAB’dan içe aktar” ile taşınır.

(B)
#### Okunabilir kopya

verileriniz, her programın parolasız açabileceği bir dosya olarak. Yabancıların bakmayacağı bir yerde saklayın.

*Nasıl çalışır:*
Üç seçenek:

- **Fotoğraflı ve PDF’li arşiv** — bu bütçenin tamamı; her arşiv programı açar.
- **Yalnızca veriler** — bu bütçe tek bir metin dosyası olarak; her metin düzenleyici açar. E-fişler orada, fotoğraflar ve PDF’ler değil.
- **Buluttan bir dosya** — buluttan tarayıcıyla indirdiğiniz bir eşitleme dosyasından ya da bulut yedeğinden parolayı ve sıkıştırmayı kaldırın.

Bu, verilerinize uygulamayı atlayarak giden bir yoldur: uygulama olmasa bile bütçe sizin kalır.

(C)
#### İpuçları

bu ekranın ipuçları liste olarak.

(D)
#### Bilgi bankası

Web sitesindeki bu makale: tarayıcıda, uygulamanın dilinde açılır.

### Bütçeyi buluttan yükleyin {#sync-restore}

Yeni bir telefon, yeniden kurulum ya da ikinci bir cihaz. Bütçe bulutta kendi adıyla durur; bu ekran onu bulur ve buraya yükler. İlk açılış sihirbazındaki “Zaten bir bütçem var” seçeneği aynı ekranı açar.

[Bütçeyi buluttan yükle ekranı: Bağla düğmesiyle adım 1 Bir bulut bağlayın, adım 2 Bütçe adı]

(1)
**Bir bulut bağlayın** — ilk cihazdakiyle aynı: aynı Google Drive, Dropbox veya WebDAV ve **aynı hesap**.

(2)
**Bir bütçe seçin** — uygulama buluttaki bütçeleri son eşitleme tarihleriyle gösterir. Sizinkine ve “Bütçeyi yükle”ye dokunun.

*Nasıl çalışır:*
Liste yok mu ya da bütçeniz içinde değil mi? “Adı elle yaz”a dokunun ve adı ilk cihazdaki gibi tam olarak yazın: bütçe adı, buluttaki klasörünün adresidir. Büyük küçük harf fark etmez. Ad ilk cihazda “Özet” başlığında görünür.

Bu cihazda zaten veri varsa uygulama tekrar sorar: “Veriler buluttakiyle değiştirilsin mi?”: bulutta olmayan her şey kaybolur.

**Parola** — ilk cihazda bir parola belirlendiyse burada da aynısını belirleyin. Onsuz eşitleme durur, fiş fotoğrafları da gelir ama açılmaz.

### Yerel aktarım: bulutsuz {#sync-local}

Bir bütçeyi kendi cihazlarınız arasında doğrudan taşıyın — bir dosya olarak ya da Wi-Fi ile. İnternet de hesap da yok. Bu tek seferlik bir aktarımdır, sürekli eşitleme değil.

[Yerel aktarım ekranı: Dışa aktar ve İçe aktar düğmeli bir Dosya bloğu, gönderen ve alan rolleriyle bir WiFi bloğu]

(1)
**Dosya** — “Dışa aktar” — bütçenin verileri bir dosya olarak: bir mesajlaşma uygulamasıyla, e-postayla ya da bellekle gönderin. Diğer cihazda — “İçe aktar” ve o dosyayı seçin.

*Nasıl çalışır:*
İçe aktarma, dosyadaki verileri orada zaten olanla **birleştirir**; aynı kayıt farklıysa dosyadaki sürümü alır. Fotoğraflar dosyaya girmez. Fotoğraflar dahil her şeyi taşımak için — Wi-Fi ya da bir [yedek](#sync-backups) (“Fotoğraflı ve PDF’li arşiv”).

(2)
**WiFi (yerel ağ)** — iki cihaz da aynı Wi-Fi ağında. Biri verileri gönderir, diğeri alır ve “Birleştir” ile kendi değişikliklerini geri gönderir. Fotoğraflar da taşınır.

*Nasıl çalışır:*
1. Gönderen cihazda: “Sunucuyu başlat”. Bir QR kodu ve 6 haneli bir onay kodu belirir.
2. Alan cihazda: “QR tara” — kod iki alanı da doldurur. Ya da IP adresini ve kodu elle girin.
3. “Verileri al”. Uygulama “Veriler nasıl uygulansın?” diye sorar: “Birleştir” — normal bir iki yönlü eşitleme gibi: bu cihazın değişiklikleri de gönderene gider, hiçbir şey kaybolmaz; “Tamamen değiştir” — bu bütçe gönderenin tam bir kopyası olur, burada eşitlenmemiş her şey kaybolur. “Değiştir” yeni bir cihaz içindir.
4. Gönderen cihazda — “Sunucuyu durdur”.

Aktarım onay koduyla şifrelenir, kodun kendisi ise asla ağa çıkmaz.

## Ayarlar {#settings}

Her satırın ne yaptığı ve kurulumdan hemen sonra neye ayarlı olduğu.

*“Özet” ekranında sol üstteki dişli çark*

Bölümler ne sıklıkla gerektiklerine göre sıralanmıştır: en sık olan en üstte.

### Planlama {#settings-s-plan}

Tekrarlanan her şey: düzenli ödemeler ve hatırlatmalar.

[Planlama bölümü: Planlı ödemeler, Hatırlatıcılar]

**Planlı ödemeler** — kira, abonelikler, maaş — tekrarlanan her şey. Günü geldiğinde uygulama ödemeyi tek dokunuşla girmeyi önerir, “Özet” ekranındaki “Sırada ne var” da yaklaşanları gösterir.

**Hatırlatıcılar** — uygulamanın ne zaman ve ne hakkında bildirim gönderdiği. Kendine ait bir ekran — [aşağıda](#settings-reminders).

#### “Hatırlatıcılar” ekranı {#settings-reminders}

[Hatırlatıcılar ekranı: Planlı ödemeler, Günün harcamaları, Haftalık özet, Tüm hatırlatıcılar]

**Planlı ödemeler** — “Ne zaman hatırlatılsın” — ödeme günü, 1, 2 ya da 3 gün önce veya bir hafta önce; “Hatırlatma saati”; “Bildirimlerde tutarları gizle” — hatırlatma kilit ekranında görünür, bu olmadan telefonu eline alan herkes tutarı okuyabilir. **Kurulumdan hemen sonra:** bir gün önce, saat 09:00’da, tutarlar görünür.

**Günün harcamaları** — “Harcamaları girmeyi hatırlat” — akşam, bugün hiçbir şey kaydetmediyseniz. Kaydettiyseniz susar. **Kurulumdan hemen sonra:** kapalı, saat 21:00.

**Haftalık özet** — “Özet gönder” — haftanın son günü: ne kadar ve en çok neye harcandığı, hangi kategorilerin tükendiği, hangi planlı ödemelerin yaklaştığı. **Kurulumdan hemen sonra:** kapalı.

**Tüm hatırlatıcılar** — “Tam zamanında hatırlatıcılar”. İzin olmadan Android’in bir hatırlatmayı geç teslim etmesine izin verilir. Anahtar, bu iznin verildiği Android ayarlarını açar.

### Veriler {#settings-s-data}

Bütçenin listeleri ve diğer programlarla veri alışverişi.

[Veriler bölümü: Alıcılar, Etiketler, CSV'ye aktar, YNAB’dan içe aktar, Gelen kutusu]

**Alıcılar ve Etiketler** — siz işlem kaydettikçe kendiliğinden oluşan listeler. Onlarla ilgili her şey — [“Alıcılar ve etiketler”](#payees-tags) makalesinde.

**CSV'ye aktar** — geçerli bütçenin tüm işlemleri, Excel ya da Google E-Tablolar’da açmak için bir tablo dosyası olarak.

*Daha fazlası:*
Dosyada bir işlemin sahip olduğu her şey vardır: tarih, hesap, alıcı, kategori ve grubu, tutar ve para birimi, “hesaba geçti”, not, bölünmüş bir tutarın parçaları, transfer, etiketler, bayrak, e-fişler, bütçe ayı (“gelecek ay için” kaydedilen bir maaşta — ayrıldığı ay), para birimleri arası bir transferde de — ne kadar geldiği, hangi para biriminde ve hangi kurla. Yalnızca fotoğraflar ve PDF’ler aktarılmaz: bunlar telefondaki dosyalardır.

Sütun adları İngilizcedir (`date`, `amount`, `tags`…) ve uygulamanın dilinden bağımsızdır: böylece dili değiştirirseniz formüller ve pivot tablolar bozulmaz. Dosyadaki sayılar, “Tutarları gizle” açık olsa bile her zaman gerçektir. Alan ayırıcı sayı biçimini izler, böylece tablo tek bir satır değil, sütunlar halinde açılır.

**YNAB’dan içe aktar** — YNAB 4’ten (bir .y4backup dosyası) ya da web YNAB’dan (bir .zip dışa aktarımı) bir bütçe taşıyın: hesaplar, kategoriler ve tüm geçmiş. İçe aktarmadan sonra bir sözlük, YNAB’daki her terimin burada ne dendiğini gösterir.

**Gelen kutusu** — kasada yalnızca tutar; hesabı ve kategoriyi sonra seçersiniz. Nasıl çalıştığı — [“İşlem formu”](#entry) makalesinde. **Kurulumdan hemen sonra:** kapalı.

### Eşitleme {#settings-s-sync}

Bulut, yedekler ve bir bütçeyi cihazlar arasında taşımak. Burada kısaca ne nerede; ayrıntılı olarak — [“Bulut ve yedekler”](#sync) makalesi.

[Eşitleme bölümü: Yetkilendirme, Eşitleme, Yedekler, Bütçeyi buluttan yükle, Yerel aktarım]

**Yetkilendirme** — bir bulut bağlayın: Google Drive, Dropbox veya WebDAV. Ana kural: bu bütçeyi tutan tüm cihazlar **aynı bulut hesabını** kullanır, yoksa birbirlerini görmezler.

*Daha fazlası:*
**Aile üyelerinin farklı Google hesapları varsa** bütçe için **ayrı, yeni bir Google hesabı** açın ve tüm cihazlarda uygulamanın bulutuna yalnızca onunla girin. Karınızın telefonunda kişisel hesabınızla, sizinkinde de onunkiyle oturum açmayın: telefon kişileri, mesajları ve fotoğrafları o hesapla eşitlemeye başlar, iki kişinin kişisel verileri karışır. Ayrı bir bütçe hesabı yalnızca bütçeyi bilir.

**Dropbox** — “Google ile devam et” düğmesiyle değil, Dropbox **kullanıcı adınız ve parolanızla** girin. Google ile giriş, Dropbox’ı kullandığınız Google hesabına bağlar — ve farklı bir Google hesabı olan bir cihazda bütçenizin olmadığı başka bir Dropbox’a düşmek kolaydır. Dropbox kullanıcı adı ve parolası her cihazda aynı şekilde çalışır.

**WebDAV** — bunu destekleyen bir bulut (Nextcloud, ownCloud, pCloud ve diğerleri) ya da kendi sunucunuz; tüm cihazlarda aynı adres, kullanıcı adı ve klasör.

**Eşitleme** — bulutla ve diğer cihazlarla değişiklik alışverişi; ayrıca bulutu şifreleyen parola ve eşitleme günlüğü.

**Yedekler** — bütçenin kopyaları: programa göre otomatik ve elle, telefonda ve bulutta. Ayrıca buradan — bir dosya olarak bir “Okunabilir kopya”.

**Bütçeyi buluttan yükle** — yeni bir telefon ya da yeniden kurulum — bütçe buluttan ya da bir yedek dosyasından geri gelir.

**Yerel aktarım** — bir bütçeyi kendi cihazlarınız arasında WiFi ile ya da bir dosya olarak — bulutsuz — taşıyın.

### Bütçe {#settings-s-budget}

Geçerli bütçenin ayarları.

[Bütçe bölümü: Bütçe para birimi, Önce kendine öde kategorileri, Paranın yaşı]

**Bütçe para birimi** — bütçenizi tuttuğunuz simge. Yalnızca bu bütçe için; uygulama tutarları dönüştürmez — yalnızca simge değişir.

**““Önce kendine öde” kategorileri”** — hangi kategorilerin “kendiniz için ayrılan” sayılacağı — genellikle birikimler. Hiçbiri seçili değilse “Özet” ekranında “Önce kendine öde” bloğu olmaz. Neyi gösterdiği — [“Özet”](#overview) makalesinde.

**Paranın yaşı** — nasıl hesaplanacağı: üç yol. Kendine ait bir ekran — [aşağıda](#settings-aom).

#### “Paranın yaşı” ekranı {#settings-aom}

[Paranın yaşı nasıl hesaplanır ekranı: Klasik YNAB FIFO, Birikimleri hesaba katarak, Birikimler ve eksinin derinliğiyle]

Üç yol doğrudan ekranda anlatılıyor. Hangisinin gerçeğe daha yakın olduğu ve neden, örneklerle — [“Özet”](#overview) makalesinin “Paranın yaşı ayrıntılı” bölümünde. Kısacası: **“Birikimleri hesaba katarak”** tam olarak hesaplarınızdaki parayı sayar. **Kurulumdan hemen sonra:** “Klasik (YNAB FIFO)”.

### Güvenlik {#settings-s-security}

Uygulamaya bir kilit.

[Güvenlik bölümü: PIN kodu]

**PIN kodu** — uygulama açılırken onu ister. Bir PIN belirlendiğinde altında “Biyometrik kilit açma” belirir — rakamlar yerine parmak izi ya da yüz.

*Daha fazlası:*
PIN olmadan biyometri açılamaz: onsuz kilit yoktur. PIN belirlendiği sürece açık uygulamalar listesindeki uygulama kartı kapatılır ve meraklı gözler bakiyelerinizi orada görmez (Android 13 ve daha yenisinde).

### Görünüm {#settings-s-look}

İki ekran: biçimleriyle dil ve uygulamanın tüm görünümü.

[Görünüm bölümü: Dil ve biçimler, Görünüm]

**Dil ve biçimler** — arayüz dili, tutarların ve tarihlerin nasıl göründüğü, bir tutarın nasıl yazılacağı. Ekran — [aşağıda](#settings-formats).

**Görünüm** — tema, stil, yazı tipi, simgeler ve bir işlem satırının nasıl göründüğü. Ekran — [aşağıda](#settings-appearance).

#### “Dil ve biçimler” ekranı {#settings-formats}

[Dil ve biçimler ekranı: Arayüz dili, Tutar biçimi, Tutar girişi, Tutar tuş takımı, Tarih biçimi]

**Arayüz dili** — on üç dil; “Sistem varsayılanı” telefonun dilidir. Dil bu cihazda yaşar ve eşitlenmez: telefon Türkçe, bilgisayar Almanca olabilir.

**Tutar biçimi** — binlik ve ondalık ayırıcılar, para birimi simgesinin hangi tarafta olduğu. Varsayılan olarak — seçilen dilde olağan olduğu gibi: “₺1.234.567,89”.

**Tutar girişi** — “Virgülle” ya da “Kuruştan, POS cihazındaki gibi” (1-2-5-0, 12,50 demektir). **Kurulumdan hemen sonra:** virgülle.

**Tutar tuş takımı** — “Sağ el için” — rakamlar sağda, işlemler solda; “Sol el için” — tam tersi. **Kurulumdan hemen sonra:** sağ el için.

**Tarih biçimi** — sıra, ayırıcı, ay sayı ya da sözcük olarak — seçebileceğiniz 24 seçenek.

#### “Görünüm” ekranı {#settings-appearance}

[Görünüm ekranı: Tema, Stil, Köşeler, Gelir ve gider renkleri, Yazı tipi, Yoğunluk, Simgeler, Tutar rengi, Bayrak biçimi, Dönüş yeri]

**Tema** — “Sistem”, “Açık” ya da “Koyu”. “Sistem” telefonu izler.

**Stil** — uygulamanın renk karakteri: “Klasik”, “Neon”, “Aurora”, “Asit”, “Şeker”, “Lokum”, “Grafit”. Her birinin açık ve koyu bir sürümü vardır.

**Köşeler** — “Keskin”, “Normal” ya da “Yumuşak” — kartların, düğmelerin ve çiplerin köşeleri. Stilden bağımsızdır.

**Gelir ve gider renkleri** — “Standart” — gelir yeşil, gider kırmızı. “Güçlendirilmiş” — gelir mavi: yeşili kırmızıdan ayırt etmekte zorlananlar için.

*Daha fazlası:*
Yaklaşık on iki erkekten biri ve iki yüz kadından biri renkleri farklı görür. Üç türü vardır:

- **döteranopi** — yeşili daha zayıf algılama; en yaygını;
- **protanopi** — kırmızıyı daha zayıf algılama;
- **tritanopi** — mavi ile sarı karışır; çok nadir.

İlk ikisinde yeşil ve kırmızı benzer kahverengimsi bir renkte birleşir ve gelir giderden renkle ayırt edilemez. İkisi de maviyi iyi görür — bu yüzden “Güçlendirilmiş”te gelir mavidir.

**Uygulamanın bu kişiler için başka neler yaptığı — zaten, hiçbir ayar olmadan:**

- her tutarın bir “+” ya da “−” işareti vardır: bir işlemin yönü hiç renk olmadan görünür (zaten kurulumdan hemen sonra işlem tutarlarının rengi yoktur);
- aşım yalnızca renkle değil, bir simgeyle de konuşur: cüzdan — kendi paranızı harcadınız, kart — kredi kartı borcuna girdiniz;
- başarısız bir eşitleme yalnızca simgenin rengini değil, çizimini de değiştirir — içinde bir “!” belirir;
- rapor grafiklerinin renkleri, komşu dilimler yalnızca tonla değil parlaklıkla da ayrılacak şekilde seçilmiştir.

**“Güçlendirilmiş” neyi değiştirir:** her yerde mavi gelir — tutarlarda, gelir formunun başlığında, grafiklerde ve “Gelirler ve giderler” tablosunda; işlem bayraklarının renkleri parlaklığa göre ayrılır; rapor grafikleri ve “Para akışı” kendi renk takımlarını kullanır. Her takım geliştirme sırasında üç türe göre de kontrol edilir.

“Güçlendirilmiş”, renkleri iyi ayırt eden ama ekrana parlak güneş ışığında bakanlara da yardım eder.

**Yazı tipi** — sistem yazı tipi ya da yedisinden biri: “Fira Sans”, “Geologica”, “IBM Plex Sans”, “Inter”, “Manrope”, “Noto Sans”, “Source Sans 3” — tüm arayüz için.

**Yoğunluk** — “Sıkı”, “Normal” ya da “Ferah” — satırlar ve bloklar arasındaki boşluk. Harflerin boyutu değişmez.

**Simgeler** — “Normal” ya da “İki tonlu”.

**Tutar rengi** — işlem listelerindeki tutarların renklendirilip renklendirilmeyeceği: “Renksiz”, “Yalnızca gelir” ya da “Harcama ve gelir”.

*Daha fazlası:*
**Kurulumdan hemen sonra — “Renksiz”**, ve bu kılavuzdaki her ekran görüntüsü böyle alındı. Neden: kırmızı alarm rengidir, ekmek almak ise bir alarmı hak etmez; her satır kırmızı yandığında renk hiçbir şey söylemez olur. İşlemin yönünü işaret gösterir: harcama için “−”, gelir için “+”. Renk mi istiyorsunuz? “Harcama ve gelir”i ya da “Yalnızca gelir”i seçin.

Kategori aşımı, borç ve eşitleme durumu, neyi seçerseniz seçin renkli kalır: orada renk bir uyarıdır.

**Bayrak biçimi** — “Nokta”, “Üçgen bayrak” ya da “Dalgalı bayrak” — bayrağın işlem satırlarında nasıl göründüğü.

**Dönüş yeri** — “Özet” — 30 saniyeden uzun bir aradan sonra ve açılışta “Özet” açılır; “Kaldığınız yer” — açık bir form olsa bile aynı ekran. PIN iki durumda da sorulur.

### Yardım ve iletişim {#settings-s-help}

İpuçları ve geliştiriciyle iletişim.

[Yardım ve iletişim bölümü: İpuçları, Bilgi bankası, Telegram sohbeti, Hata bildir, İyileştirme öner]

**İpuçları** — uygulamanın tüm ipuçları, ekrana göre bir liste olarak. Ayrıca “İpuçlarını yeniden göster”. Bir ekranın ipuçları, onun “⋮” menüsündeki “İpuçları” maddesiyle de açılır.

**Bilgi bankası** — web sitesinde her ekran için makaleler, uygulamanın dilinde; bu madde ana sayfayı açar. Bir ekranın makalesi, onun “⋮” menüsündeki “Bilgi bankası” maddesiyle açılır.

**Telegram sohbeti** — soruların yanıtlandığı ve diğer kullanıcılara sorabileceğiniz bir grup.

**Hata bildir** — geliştiriciye bir e-posta. Uygulama ve cihaz sürümleri kendiliğinden doldurulur; “Hakkında”daki olay kaydını ekleyebilirsiniz.

**İyileştirme öner** — bir fikirle bir e-posta: şu anda ne zahmetli ve nasıl olmasını isterdiniz.

### Hakkında {#settings-s-about}

Tek bir satır, arkasında da sürüm, belgeler ve bakım maddeleriyle bir ekran.

[Hakkında bölümü]

**Hakkında** — ekran — [aşağıda](#settings-about-screen).

#### “Hakkında” ekranı {#settings-about-screen}

[Hakkında ekranı: Sürüm, Windows sürümü, Uygulamayı paylaş, Gizlilik politikası, Lisans, Olay kaydı, Tüm verileri sıfırla]

**Sürüm** — sürüm numarası; “Yenilikler” için dokunun: son sürümlerde ne değişti.

**Windows sürümü** — aynı bütçe bir bilgisayarda — Microsoft Store’da.

**Uygulamayı paylaş** — uygulamanın Google Play bağlantısını gönderin.

**Gizlilik politikası ve Lisans** — belgeler. Kısacası: verileriniz sizindir, geliştiricinin onlara erişimi yoktur.

**Olay kaydı** — uygulama ve eşitleme hataları. Bir sorun hakkında yazıyorsanız işe yarar.

**Tüm verileri sıfırla** — tüm hesapları, kategorileri, işlemleri, planlı ödemeleri ve hedefleri silin. Uygulama tekrar sorar: “Tüm veriler sıfırlansın mı?”. Bu geri alınamaz.

*Daha fazlası:*
Eşitleme bağlıysa veriler bir sonraki eşitlemede buluttan geri gelir. Kalıcı olarak silmek için bulutun bağlantısını kesin ya da içindeki eşitleme dosyasını silin. Sıfırlamadan önce “Yedekler”de bir kopya alın.
