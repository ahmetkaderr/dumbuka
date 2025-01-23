// Tarihte Bugün Start


let dailyText = [
    `
<h2>1 Şubat</h2>
</br>
• 1553 - Osmanlı İmparatorluğu ve Fransa Krallığı arasında, İstanbul Antlaşması imzalandı.
</br>
</br>
• 1926 - Ankara'da Gazi İstasyonu açıldı.
</br>
</br>
• 1930 - Kayseri-Şarkışla Demiryolu işletmeye açıldı.
</br>
</br>
• 1933 - Bursa'da ezan ve kametin Türkçe okunmasını yanlış bulan bir grup, Ulucami'de namazdan çıkan halkı da yanlarına alarak Valilik önünde gösteri yaptı.
</br>
</br>
• 1935 - Ayasofya, müze olarak halkın ziyaretine açıldı.
</br>
</br>
• 1958 - Mısır ve Suriye, Birleşik Arap Cumhuriyeti adıyla birleşti. Bu durum ancak 1961'e dek sürdü.
`,
    `
<h2>2 Şubat</h2>
</br>
•1958 - Mısır ve Suriye, Birleşik Arap Cumhuriyeti adıyla birleşti. Bu durum ancak 1961'e dek sürdü.
</br>
</br>
•1207 - Bugünkü Letonya ve Estonya'dan oluşan Terra Mariana kuruldu.
</br>
</br>
•1982 - Suriye'nin büyük şehirlerinden Hama'da, Müslüman Kardeşler örgütüne yönelik büyük bir operasyon yapıldı. Operasyonda binlerce kişi yaşamını yitirdi. Bu olay tarihe Hama Katliamı olarak geçti.
</br>
</br>
•1984 - Vergi iadesine ilişkin yasa yürürlüğe girdi. Böylece 1 Ocak 1984 tarihinden itibaren ücretlilerin, memurların, emeklilerin, bunların eş ve çocuklarının ve bakmakla yükümlü olduğu yakınlarının kira giderleri hariç, ev eşyaları, yiyecek ve giyecek için yaptıkları harcamalar ile eğitim ve sağlık harcamaları vergi iadesine tabi olacak.
</br>
</br>
•2007 - Birleşmiş Milletler "İklim Raporu" açıklandı. Küresel ısınmanın insan yaşamını tehdit ettiği uyarısı yapıldı.
`,
    `
<h2>3 Şubat</h2>
</br>
•1451 - Osmanlı Padişahı II. Mehmed (Fatih Sultan Mehmet), ikinci kez tahta geçti.
</br>
</br>
•1509 - Portekiz İmparatorluğu Donanması ile Osmanlı, Venedik ve Ragusa destekli Memlûk Sultanlığı, Gucerat Sultanlığı ve Kalkülta Krallığı birleşik donanması arasında, Diu Muharebesi gerçekleşti.
</br>
</br>
•1930 - Türk-Fransız Dostluk Antlaşması imzalandı.
</br>
</br>
•1931 - Menemen Olayı hükümlülerinden 27 kişi bugün idam edildi.
</br>
</br>
•1975 - Kıbrıs Türk Havayolları, Türkiye-Kıbrıs seferlerini başlattı.
</br>
</br>
•1998 - Türkiye, Uluslararası Çalışma Örgütü'nün (İLO) "Çocuk İşçi Çalıştırmayı Yasaklayan" iki maddesine imza attı.
`,
    `
<h2>4 Şubat</h2>
</br>
•1783 - Amerikan Bağımsızlık Savaşı: İngiltere, Amerika Birleşik Devletleri ile olan düşmanlığına son verdiğini resmen ilan etti.
</br>
</br>
•1794 - Fransa, tüm sömürgelerinde köleliği yasakladı.
</br>
</br>
•1902 - Paris'te, Birinci Jön Türk Kongresi yapıldı.
</br>
</br>
•1917 - İttihat ve Terakki Cemiyeti’nin önde gelen isimlerinden Talat Paşa, sadrazam oldu.
</br>
</br>
•1923 - Lozan Konferansı, tarafların uzlaşamamaları nedeniyle kesildi.
</br>
</br>
•1947 - Hatay ilinde yeradlarının Türkçeleştirilmesine karar verildi.
</br>
</br>
•1974 - Türkiye Yazarlar Sendikası kuruldu.
`,
    `
<h2>5 Şubat</h2>
</br>
•1974 - Türkiye Yazarlar Sendikası kuruldu.
</br>
</br>
•1937 - Anayasa'nın 2. maddesinde yapılan değişiklikle, altı ilke Anayasa metnine girdi: Türkiye Devleti Cumhuriyetçi, Milliyetçi, Halkçı, Devletçi, Laik ve İnkılapçıdır. Resmi dili Türkçedir. Makam Ankara şehridir.
`,
    `
<h2>6 Şubat</h2>
</br>
•1695 - Sultan II. Ahmed'in ölümü ve II. Mustafa'nın tahta çıkışı.
</br>
</br>
•1936 - Kış Olimpiyat Oyunları, Garmisch-Partenkirchen'de (Almanya) başladı. Türkiye ilk kez katıldı.
</br>
</br>
•2023 - Türkiye'de Kahramanmaraş depremleri meydana geldi.
`,
    `
<h2>7 Şubat</h2>
</br>
•1727 - İbrahim Müteferrika, Osmanlı'da basılmak üzere ilk kitap baskı kalıpları hazırlattı.
</br>
</br>
•1973 - TBMM'de kabul edilen bir yasa ile "Maraş" iline "kahramanlık" unvanı verildi; ilin adı "Kahramanmaraş" oldu.
</br>
</br>
•1992 - Avrupa Ekonomik Topluluğu üyesi ülkeler arasında Avrupa Birliği'ni oluşturan Maastricht Antlaşması imzalandı.
`,
    `
<h2>8 Şubat</h2>
</br>
•1919 - İşgal Kuvvetleri Kumandanı olarak İstanbul'a tayin olan Fransız General Louis Franchet d'Espèrey, atıyla Türk Bayrağı'nın üzerinden geçerek yapmış olduğu sözde gövde gösterisi ile İstanbul'a girdi.
</br>
</br>
•1962 - Türkiye Cumhuriyeti Turizm Bankası çalışmalarına başladı.
</br>
</br>
•2023 - Türkiye'de deprem yüzünden 3 aylık OHAL ilan edildi.
`,
    `
<h2>9 Şubat</h2>
</br>
•1588 - Cami minarelerinde kandil kullanılmaya başlandı.
</br>
</br>
•1640 - Sultan İbrahim tahta çıktı.
</br>
</br>
•1695 - Koyun Adaları Muharebesi: Venedik Cumhuriyeti Donanması ile Karaburun Yarımadası açıklarındaki Koyun Adaları önünde yapılan deniz muharebesi, Osmanlı Donanması'nın zaferiyle sonuçlandı.
</br>
</br>
•1788 - Avusturya, 1787-1792 Osmanlı-Rus Savaşı'nda Rusya'nın yanında savaşa katıldı.
</br>
</br>
•1920 - Fransızlar, Maraş'tan çekilmeye ve Adana bölgesini boşaltmaya başladı.
</br>
</br>
•1921 - İstanbul Boğazı dondu.
</br>
</br>
•1925 - Türk Kurtuluş Savaşı komutanlarından Halit Paşa, Mecliste Ali Çetinkaya tarafından kaza kurşunuyla vurularak yaralandı ve 14 Şubat 
</br>
</br>
•1925'te hayatını kaybetti.
</br>
</br>
•1930 - Atatürk, Kuşadası'nı ziyaret etti.
</br>
</br>
•1934 - Balkan Antantı; Türkiye, Yunanistan, Yugoslavya ve Romanya arasında Atina'da imzalandı.
`,
    `
<h2>10 Şubat</h2>
</br>
•1074 - Divânu Lügati't-Türk; Türk kültürünün ilk Türkçe dilinde yazılan sözlük eseri, Kaşgârlı Mahmut tarafından yazımı sona erdi. (25 Ocak 1072'de başladı.)
</br>
</br>
•1828 - Rus İmparatorluğu ile Kaçar Hanedanı arasında Türkmençay Antlaşması imzalandı.
</br>
</br>
•1947 - İtalya, Macaristan, Bulgaristan, Romanya ve Finlandiya, Paris Barış Antlaşması'nı imzaladılar.
`,
    `
<h2>11 Şubat</h2>
</br>
•1959 - Kıbrıs Cumhuriyeti'nin kurulmasıyla ilgili Zürih Antlaşması, Türkiye ile Yunanistan arasında imzalandı.
`,
    `
<h2>12 Şubat</h2>
</br>
•1859 - Mülkiye Mektebi, Sadrazam Âli Paşa ve Hükûmet üyelerinin katılımıyla açıldı.
</br>
</br>
•1920 - Türk Kurtuluş Savaşı: Türk Silahlı Kuvvetleri, Fransa hakimiyeti altındaki Kahramanmaraş'ı aldı.
</br>
</br>
•1934 - Avusturya'da iç savaş başladı.
</br>
</br>
•1937 - Atatürk'ün Selanik'te doğduğu ev, Selanik Belediyesince sahibinden satın alınarak, Atatürk'ün emrine tahsis edildi.
`,
    `
<h2>13 Şubat</h2>
</br>
•1258 - Hülagû, Bağdat'ı işgal etti. 200 bin Bağdatlı öldü.
</br>
</br>
•1633 - Galileo Galilei, engizisyon mahkemesinde yargılanmak üzere Roma'ya geldi.
</br>
</br>
•1925 - Şeyh Sait İsyanı: Lozan Konferansı'nda çözümü Türkiye ile Birleşik Krallık'a bırakılan Musul konusunda, Birleşik Krallık ile sorun yaşandığı günlerde, Bingöl'ün Genç ilçesinde Şeyh Sait önderliğinde, ayrılıkçı bir hareket başladı. Ayaklanma Diyarbakır'a da sıçradı.
</br>
</br>
•1975 - Kıbrıs Türk Federe Devleti ilan edildi.
</br>
</br>
•2005 - Türkiye, Afganistan'daki Uluslararası Güvenlik ve Yardım Kuvvetinin komutasını 6 ay süreyle, Kabil'de düzenlenen törenle Avrupa Kolordusundan devraldı.
`,
    `
<h2>14 Şubat</h2>
</br>
•1804 - Osmanlı İmparatorluğu'na karşı Birinci Sırp Ayaklanması, Kara Yorgi tarafından başlatıldı.
</br>
</br>
•1878 - II. Abdülhamid, Meclis-i Mebûsan'ı süresiz olarak tatil etti ve istibdat dönemi başladı.
</br>
</br>
•1909 - Osmanlı Devleti'nde ilk güven oylaması yapıldı; Kâmil Paşa kabinesi düşürüldü.
</br>
</br>
•1923 - Mustafa Kemal, Batı Anadolu gezisine çıktı.
`,
    `
<h2>15 Şubat</h2>
</br>
•1924 - İzmir’de harp oyunları yapıldı.
`,
    `
<h2>16 Şubat</h2>
</br>
•1916 - Rus İmparatorluğu, Erzurum'u işgal etti.
</br>
</br>
•1925 - Türkiye'de sivil ve askeri havacılığı desteklemek amacıyla, sonraları "Türk Hava Kurumu" adını alacak olan, "Türk Tayyare Cemiyeti" kuruldu.
</br>
</br>
•1926 - Mustafa Kemal'in de olduğu heyet, Ankara'da Hâkimiyet-i Milliye gazetesinin yeni binasını açtı.
</br>
</br>
•1990 - Türkiye İnsan Hakları Vakfı (TİHV) kuruldu. 
</br>
</br>
•2005 - İklim değişikliği ile mücadele alanında hazırlanan en kapsamlı anlaşma olan Kyoto Protokolü, yürürlüğe girdi.
`,
    `
<h2>17 Şubat</h2>
</br>
•1915 - Barbaros Hayreddin ve Turgut Reis muharebe gemileri, savunmaya katılmak üzere Nara'ya geldi.
</br>
</br>
•1916 - Doğu cephesinde Ruslar, Muş'u işgal etti.
</br>
</br>
•1917 - Hicaz Seferi Kuvvetler Komutanlığı'na atanan Mustafa Kemal, bu görevi kabul etmedi.
</br>
</br>
•1920 - Osmanlı Mebuslar Meclisi, kabul ettiği Misak-ı Millî'nin basında yayınlanmasını ve bütün yabancı parlamentolara bildirilmesini kararlaştırdı.
</br>
</br>
•1921 - Ankara dışındaki İstiklal Mahkemeleri kaldırıldı.
</br>
</br>
•1923 - İzmir'de, Cumhuriyetin 1. iktisat kongresi olan İzmir İktisat Kongresi düzenlendi.
</br>
</br>
•1923 - Mustafa Kemal, ikinci defa Büyük Millet Meclisi Başkanlığına seçildi. Meclise 7 işçi, 1 çiftçi kadın katıldı. Kapanış konuşmasını Rukiye Hanım yaptı.
</br>
</br>
•1925 - Aşar Vergisi kaldırıldı. Basın, aşarın kaldırılmasını büyük bir devrim olarak sundu.
</br>
</br>
•1926 - Türk Medeni Kanunu kabul edildi.
`,
    `
<h2>18 Şubat</h2>
</br>
•1451 - Fatih Sultan Mehmet, ikinci kez tahta çıktı.
</br>
</br>
•1695 - Osmanlı donanması, Sakız Adası'nı Venedikliler'den geri aldı.
</br>
</br>
•1856 - Islahat Fermanı yayınlandı.
`,
    `
<h2>19 Şubat</h2>
</br>
•1915 - I. Dünya Savaşı: Gelibolu muharebeleri başladı.
</br>
</br>
•1915 - İtilaf devletleri'nin Çanakkale'ye denizden yaptıkları saldırı püskürtüldü.
</br>
</br>
•1925 - Telsiz tesisi hakkındaki kanun çıktı. Türkiye'de radyonun kurulması TBMM'de kabul edildi.
</br>
</br>
•1957 - Türk Silahlı Kuvvetleri'nin ilk kadın doktor subayı Sema Aran, göreve başladı.
`,
    `
<h2>20 Şubat</h2>
</br>
•1833 - Osmanlı İmparatorluğu'nun Mısır Eyaleti'nde çıkan isyanın bastırılması için, Rusya Filosu İstanbul'a geldi.
`,
    `
<h2>21 Şubat</h2>
</br>
•1440 - Prusya Konfederasyonu oluşturuldu.
</br>
</br>
•1927 - Time dergisi, Mustafa Kemal Paşa'yı ikinci kez kapak yaptı.
`,
    `
<h2>22 Şubat</h2>
</br>
1848 - Paris'te işçiler ayaklandı. İki yıl boyunca Avrupa'yı altüst edecek olan, işçi devrimleri çığırı açıldı.
</br>
</br>
1942 - Halide Edib Adıvar, "Sinekli Bakkal" adlı romanıyla CHP'nin "Sanat Mükafatı"nı kazandı.
`,
    `
<h2>23 Şubat</h2>
</br>
•532 - Bizans imparatoru I. Justinianus, Konstantinopolis'te Ayasofya'nın inşası emrini verdi.
</br>
</br>
•1921 - Sevr Antlaşması'nın değiştirilmesi için Londra'da bir konferans toplandı. Konferans, 12 Martta bir anlaşmaya varılamadan dağıldı.
</br>
</br>
•1945 - II. Dünya Savaşı: Pasifik Cephesi'nde Manila, ABD'nin eline geçti.
</br>
</br>
•1945 - Türkiye - ABD ikili yardım antlaşması imzalandı.
</br>
</br>
•1945 - Türkiye, Nazi Almanyası ve Japon İmparatorluğu'na savaş ilan etti.
</br>
</br>
•1947 - Uluslararası Standardizasyon Organizasyonu (ISO) kuruldu.
`,
    `
<h2>24 Şubat</h2>
</br>
•303 - Galerius'un fermanıyla, Roma İmparatorluğu'nda kendisi tarafından yönetilen bölgelerde Hristiyanlar'a baskı başladı.
</br>
</br>
•1918 - Trabzon; Rusya ve Ermeni işgalinden kurtuldu.
`,
    `
<h2>25 Şubat</h2>
</br>
•1925 - Hıyanet-i Vataniye Kanunu'nda değişiklik yapıldı: Din politikaya alet edilemeyecek ve bu suç vatan hıyaneti sayılacak.
</br>
</br>
•1943 - Talat Paşa'nın Almanya'da tahnit edilen naaşı, İstanbul'a getirildi. Aynı gün Hürriyet-i Ebediye tepesinde toprağa verildi.
</br>
</br>
•1991 - Varşova Paktı feshedildi.
`,
    `
<h2>26 Şubat</h2>
</br>
•1618 - Osmanlı Sultanı, I. Mustafa tahttan indirildi ve yerine II. Osman Padişah oldu.
</br>
</br>
•1658 - Danimarka ve İsveç arasında, Roskilde Antlaşması imzalandı.
</br>
</br>
•1848 - Fransa'da İkinci Cumhuriyet ilan edildi.
</br>
</br>
•1926 - Türkiye İstatistik Kurumu (o dönemki adıyla Merkezi İstatistik Dairesi) kuruldu.
</br>
</br>
•1976 - Türkiye ile Amerika Birleşik Devletleri arasında, "Savunma İşbirliği Anlaşması" imzalandı.
</br>
</br>
•2022 - Rusya'nın Ukrayna'yı işgalinden iki gün sonra Mikolayiv Muharebesi başladı.
`,
    `
<h2>27 Şubat</h2>
</br>
•1863 - Türkiye'de bilinen ilk resim sergisi, İstanbul Atmeydanı'nda açıldı. Serginin açılmasına Sultan Abdülaziz destek verdi.
`,
    `
<h2>28 Şubat</h2>
</br>
•1870 - Osmanlı padişahı Abdülaziz "Bulgar Eksarhanesinin" (Rumlardan bağımsız Bulgar Ortodoks Kilisesi) kurulmasına izin verdi.
</br>
</br>
•1921 - TBMM'de ilk bütçe kabul edildi.
</br>
</br>
•1942 - II. Dünya Savaşı: Japon İmparatorluk Donanması ile Müttefik Deniz Kuvvetleri arasında, Java ve Sumatra adalarını ayıran Sunda Boğazı'nda, Sunda Boğazı Muharebesi gerçekleşti.
</br>
</br>
•1997 - Türkiye Millî Güvenlik Kurulunun 9 saat süren toplantısında 28 Şubat Süreci olarak adlandırılan kararlar alındı. Bu kararlar, irticayı Türkiye'nin önündeki en büyük tehlike olarak saptadı. MGK'da, Atatürk ilke ve inkılaplarının ödünsüz uygulanması kararı verildi.
`,
    `
<h2>29 Şubat</h2>
</br>
•1924 - İstanbul'da Halife Abdülmecid Efendi, son Cuma selamlığı törenine çıktı.
</br>
</br>
•1988 - Nazi belgeleri arasında BM eski Genel Sekreteri Avusturyalı diplomat Kurt Waldheim'ın II. Dünya Savaşı'nda toplama kamplarına insan göndermekle ilgili olduğuna ilişkin kanıtlar bulundu.
`,
    `
<h2>1 Mart</h2>
</br>
•1430 - Osmanlı Padişahı II. Murad, Selanik'i fethetti.
</br>
</br>
•1921 - Mehmet Âkif Ersoy'un sözlerini yazdığı "İstiklâl Marşı", Maarif Vekili (Millî Eğitim Bakanı) Hamdullah Suphi Tanrıöver tarafından, Mecliste ilk kez okundu.
</br>
</br>
•1923 - Mustafa Kemal Paşa, TBMM'nin yeni çalışma dönemini açtı. Mustafa Kemal'in açılış konuşmasını mecliste dinleyiciler balkonundan izleyen Latife Hanım, meclise gelen ilk kadın oldu.
</br>
</br>
•1926 - İtalyan yasaları esas alınarak hazırlanan yeni Türk Ceza Kanunu, TBMM'de kabul edildi.
</br>
</br>
•2005 - Türkler: Bir İmparatorluğun Mimarları ve Mimar Sinan'ın Dehası adlı fotoğraf sergisi, Londra'da açıldı.
`,
    `
<h2>2 Mart</h2>
</br>
•1918 - Rize'nin işgalden kurtuluşu.
</br>
</br>
•1919 - İlk Komünist Enternasyonal, Moskova'da toplandı.
Vladimir Lenin'in ölümünden önceki son resimlerinden biri, 1923
</br>
</br>
•1924 - Halk Fırkası'nın grup toplantısında, Şer'iye ve Evkaf Vekâleti'nin kaldırılmasına ve öğretimin birleştirilmesine karar verildi.
</br>
</br>
•1961 - Türkiye, demokratik özgürlükler konusunda Avrupa Konseyi'ne güvence verdi.
</br>
</br>
•1992 - Özbekistan ve Moldova, Birleşmiş Milletler üyesi oldu.
`,
    `
<h2>3 Mart</h2>
</br>
•1878 - Osmanlı Devleti ile Rusya arasında, Ayastefanos Antlaşması imzalandı. Bulgaristan özerkliğini ilan etti.
</br>
</br>
•1903 - Beşiktaş Jimnastik Kulübü kuruldu.
</br>
</br>
•1924 - Halifeliğin kaldırılması ve Osmanlı Hanedanı mensuplarının Türkiye dışına çıkarılmasına ilişkin yasa kabul edildi. Tevhîd-i Tedrîsât Kanunu çıkarıldı. Şer'iye ve Evkaf ve Harbiye Bakanlıkları kaldırıldı. Diyanet İşleri Başkanlığı ve Vakıflar Genel Müdürlüğü kuruldu. Genelkurmay Başkanlığı oluşturuldu ve Hükûmet'ten ayrıldı.
</br>
</br>
•1942 - Türk Ressamlar Cemiyeti İstanbul'da kuruldu.
</br>
</br>
•1962 - Anayasa ve demokratik nizama karşı fiil ve davranışları önlemek amacıyla hazırlanan "Tedbirler Kanunu", Millet Meclisinde kabul edildi.
</br>
</br>
•1994 - Öğretim Elemanları Sendikası kuruldu.
`,
    `
<h2>4 Mart</h2>
</br>
•1656 - Vaka-i Vakvakiye: Düşük ayarlı para ve alınamayan maaşlar için ayaklanan askerler, IV. Mehmed'in onayıyla bazı saray ağalarını idam ettirdiler.
</br>
</br>
•1923 - Mustafa Kemal Paşa'nın 17 Şubat'taki konuşmasıyla başlayan İzmir İktisat Kongresi sona erdi. Kongrede Misak-ı İktisadî kabul edildi.
</br>
</br>
•1925 - Hükûmete olağanüstü yetkiler veren Takrir-i Sükun Kanunu, TBMM'de kabul edildi.
</br>
</br>
•1929 - Takrir-i Sükun Kanunu yürürlükten kalktı.
`,
    `
<h2>5 Mart</h2>
</br>
•1920 - Türkiye Yeşilay Cemiyeti kuruldu.
</br>
</br>
•1924 - İstanbul'da Maarif Müdürlüğü, Tevhid-i Tedrisat Kanunu gereğince medreselere el koydu.
</br>
</br>
•1946 - II. Dünya Savaşı'nda ortaya çıkan ve Sovyetler Birliği ile Doğu Avrupa ülkelerini simgeleyen Demirperde kavramı; ilk kez İngiltere Başbakanı Winston Churchill'in bir konuşmasında kullanıldı.
`,
    `
<h2>6 Mart</h2>
</br>
6 Mart tarihinde çok önemli bir olay yaşanmamıştır.
`,
    `
<h2>7 Mart</h2>
</br>
•1908 - Kabataş Erkek Lisesi, Padişah II. Abdülhamid'in fermanıyla “Kabataş Mekteb-i İdâdisi” adı altında kuruldu.
</br>
</br>
•1919 - Fransızlar Kozan'ı işgal etti.
</br>
</br>
•1921 - Artvin'in düşman işgalinden kurtuluşu.
</br>
</br>
•1925 - İstiklal Mahkemeleri üyeleri, yapılan seçimlerle belirlendi. Denizli Milletvekili Mazhar Müfit Bey (Kansu) Mahkeme Başkanlığına, Karesi Milletvekili Süreyya Bey (Özgeevren) savcılığa getirildi. Urfa Milletvekili Ali Saip (Ursavaş) ve Kırşehir Milletvekili Lüfi Müfit beyler ise asil üyeliğe seçildi.
</br>
</br>
•1927 - İstiklal Mahkemeleri'nin görevi fiilen sona erdi. Tamamen ortadan kalkması ancak 1948'de gerçekleşti.
</br>
</br>
•1984 - KKTC bayrağı, Kuzey Kıbrıs Türk Cumhuriyeti Meclisi tarafından onaylandı.
`,
    `
<h2>8 Mart</h2>
</br>
•1917 - Rusya'da Dünya Kadınlar Günü için başkent Petrograd'da kadınların sokaklara dökülmesi Çar II. Nikolay'ın tahttan inmesine neden olan Şubat Devrimi'nin (Jülyen takvimi'ne göre 23 Şubat) başlamasına yol açtı.
</br>
</br>
•1919 - İngilizler Antep'te sıkı yönetim ilan ederek; şehirde ne kadar ateşli ve yaralayıcı silah varsa, 24 saat zarfında İngiliz İşgal Kuvvetleri Kumandanlığı'na teslim edilmesini istedi.
</br>
</br>
•1931 - Kubilay Olayı'ndan sonra Menemen'de uygulanan sıkıyönetim kaldırıldı.
</br>
</br>
•1933 - I. Beş Yıllık Kalkınma Planı kabul edildi.
</br>
</br>
•1957 - Mısır, Süveyş Kanalı'nı tekrar açtı.
</br>
</br>
•1982 - Türkiye Zihinsel Yetersiz Çocukları Yetiştirme ve Koruma Vakfı kuruldu.
</br>
</br>
•1984 - Yunanistan, Türk savaş gemilerinin bir Yunan Destroyerine ateş açtığı iddiası ile Ankara'daki Büyük Elçisini geri çağırdı. Gelişmeler üzerine Türkiye de Atina Büyük Elçisine ülkeye dönme talimatı verdi.
`,
    `
<h2>9 Mart</h2>
</br>
•1929 - İstanbul'da "Matbaacılık Mektebi" açıldı.
</br>
</br>
•1930 - Atatürk, Antalya Müzesi'ni gezdikten sonra, Aspendos'ta incelemelerde bulundu.
</br>
</br>
•1935 - Hitler, yeni bir hava kuvvetleri oluşturacağını ilan etti.
</br>
</br>
•1952 - Amerika Birleşik Devletleri'ni Türk modası sardı. Amerikan moda dergileri, İstanbul Sarısı, Türk Kırmızısı, Helva Beji, Fes Rengi gibi renklerden geçilmez oldu. Bir firma, Harem adı altında kozmetikler piyasaya sürdü.
</br>
</br>
•1957 - Türk ordusunun ilk kadın doktor subayı Sema Aran, teğmen rütbesiyle göreve başladı.
`,
    `
<h2>10 Mart</h2>
</br>
•1919 - Ali Fethi Okyar İngilizler tarafından tutuklandı.
</br>
</br>
•1919 - Osmanlı İmparatorluğu'nda Ahmed Tevfik Paşa hükûmeti düştü yerine Damat Ferit Paşa hükûmeti kuruldu.
</br>
</br>
•1920 - Yunanistan başbakanı Venizelos'un da katıldığı toplantıda, İstanbul'un resmi işgaline ve Kuvâ-yi Milliye öncülerinin tutuklanmasına karar verildi.
`,
    `
<h2>11 Mart</h2>
</br>
•1914 - Cemal Paşa, Bahriye Nazırlığına getirildi.
</br>
</br>
•1918 - Bingöl'ün Karlıova, Erzurum'un Ilıca ve Rize'nin Fındıklı ilçelerinden Rus İmparatorluğu ve Batı Ermenistan Yönetimi'nin Ordu birlikleri çekildi.
</br>
</br>
•1928 - İzmir'de Bucaspor kulübü kuruldu.
</br>
</br>
•1947 - Türkiye, Dünya Bankası ve Uluslararası Para Fonu'na (IMF) katıldı.
</br>
</br>
•1954 - Devlet Malzeme Ofisi kuruldu.
</br>
</br>
•1958 - Türkiye, "Mısır, Suriye ve Yemen" devletlerinin oluşturduğu Birleşik Arap Cumhuriyeti'ni tanıdı.
`,
    `
<h2>12 Mart</h2>
</br>
•1918 - Moskova, Rusya'nın başkenti oldu. Sankt-Peterburg başkent statüsünü son 215 yıldır sürdürüyordu.
</br>
</br>
•1921 - Londra Konferansı sona erdi. İtilaf Devletleri barış önerdi.
</br>
</br>
•1921 - Türk Milleti'nin İstiklâl Marşı, TBMM'de kabul edildi.
</br>
</br>
•1999 - Varşova Paktı'nın eski üyeleri; Çekya, Macaristan ve Polonya, NATO'ya katıldı.
`,
    `
<h2>13 Mart</h2>
</br>
•624 - Bedir Muharebesi gerçekleştirildi.
</br>
</br>
•1840 - Osmanlı İmparatorluğu'nun resmî takvimi olarak Rumi Takvim, kullanılmaya başlandı.
</br>
</br>
•1899 - Mustafa Kemal, '1283' yaka numarasıyla Kara Harp Okulu'nun piyade sınıfına yazıldı.
</br>
</br>
•1919 - Kâzım Karabekir, Erzurum'da 15'inci Kolordu Komutanlığına atandı.
</br>
</br>
•1926 - Mustafa Kemal Paşa'nın Falih Rıfkı Atay ve Mahmut (Soydan) beylere anlattığı hayat hikâyesi ve hatıralarının kısaltılmış şekli, Milliyet gazetesinde (Bugünkü Milliyet'le aynı değildir. 1935'ten itibaren Tan adıyla yayınlanan gazete) yayımlandı.
`,
    `
<h2>14 Mart</h2>
</br>
•1489 - Kıbrıs Krallığı'nın Kraliçesi Catherine Cornaro, Ada'yı Venedik Cumhuriyeti'ne sattı.
</br>
</br>
•1827 - II. Mahmut döneminde, Mekteb-i Tıbbiye-i Şahane kuruldu.
</br>
</br>
•1919 - Tıp Bayramı ve Mekteb-i Tıbbiye-i Şahane'nin kuruluş yıldönümü; Hikmet Boran önderliğinde, tıp camiasının emperyalist güçlerin karşısına resmen çıkışı nedeniyle bugün Tıp Bayramı olarak kutlanmaktadır.
</br>
</br>
•1939 - Hatay Meclisi, Türk lirası'nı resmi para olarak kabul etti.
</br>
</br>
•1951 - Kore Savaşı: Birleşmiş Milletler Kuvvetleri, Seul'ü geri aldı.
</br>
</br>
•1964 - Birleşmiş Milletler Güvenlik Konseyi, Barış Gücü'nün Kıbrıs'a gitmesini kararlaştırdı.
</br>
</br>
•1964 - Birleşmiş Milletler Güvenlik Konseyi, Barış Gücü'nün Kıbrıs'a gitmesini kararlaştırdı.
</br>
</br>
•2000 - Naim Süleymanoğlu, Ankara'da devam ettiği idmanlarda koparmada 145 kg kaldırarak dünya rekoru kırdı.
`,
    `
<h2>15 Mart</h2>
</br>
•1493 - Kristof Kolomb Yeni Dünya'ya yaptığı ilk seyahatten sonra İspanya'ya geri döndü.
</br>
</br>
•1919 - Merzifon işgal edildi.
</br>
</br>
•1928 - 15 Mart Olayı başladı. Japon İmparatorluğu'nda çok sayıda komüniste tutuklama kararı çıkarıldı.
</br>
</br>
•1933 - Almanya'da Hitler, III. Reich'ı ilan etti.
</br>
</br>
•1961 - Güney Afrika, Milletler Topluluğu'ndan ayrıldı.
`,
    `
<h2>16 Mart</h2>
</br>
•MÖ 597 - Babil Sürgünü: Yehuda Krallığı'nın Babilliler tarafından fethedilmesi sonucu Yahudiler Babil'e sürüldü.
</br>
</br>
•1920 - İtilaf Devletleri, İstanbul'u işgal etti.
</br>
</br>
•1921 - SSCB, Ankara Hükûmeti'ni resmen tanıdı; Moskova Antlaşması imzalandı.
</br>
</br>
•1924 - Tevhid-i Tedrisat Kanunu'nun (3 Mart) kabulünden sonra medreseler kapatıldı.
</br>
</br>
•1935 - Adolf Hitler, Versay Antlaşması'nı iptal ettiğini açıkladı.
</br>
</br>
•1964 - TBMM'de gizli yapılan olağanüstü toplantıda, Hükûmete gerektiğinde Kıbrıs'a müdahale yetkisi verildi.
`,
    `
<h2>17 Mart</h2>
</br>
•1964 - TBMM'de gizli yapılan olağanüstü toplantıda, Hükûmete gerektiğinde Kıbrıs'a müdahale yetkisi verildi.
</br>
</br>
•1915 - Çanakkale Savaşı: Kraliyet Donanması Komutanı Amiral Sackville Carden, görevinden ayrıldı.
</br>
</br>
•1920 - İngilizler, Eskişehir ve Afyon'dan çekildiler.
</br>
</br>
•1926 - "Demir Sanayinin Tesisine Dair Kanun" TBMM'de kabul edildi.
</br>
</br>
•1944 - Varlık Vergisi'nin tasfiyesine ilişkin yasa yürürlüğe girdi.
</br>
</br>
•1948 - Belçika, Fransa, Hollanda, Birleşik Krallık ve Lüksemburg arasında, 50 yıl süreli Brüksel Antlaşması imzalandı ve Batı Avrupa Birliği kuruldu.
`,
    `
<h2>18 Mart</h2>
</br>
•1635 - IV. Murad komutasındaki Osmanlı Ordusu, Safevî Devleti'ne karşı Revan Seferine çıktı.
</br>
</br>
•1799 - Napolyon, Osmanlı Devleti'nin yönetimindeki Akka kalesi önlerine geldi.
</br>
</br>
•1915 - Çanakkale Deniz Harekâtı: Birleşik Donanma, Çanakkale Boğazı'nda ağır hasar gördü ve geri çekildi.
</br>
</br>
•1918 - Karayazı, Narman ve Tekman'ın düşman işgalinden kurtuluşu.
</br>
</br>
•1920 - Osmanlı Meclis-i Mebusanı, İstanbul'un işgali üzerine son toplantısını yaptı ve çalışmalarına ara verme kararı aldı.
`,
    `
<h2>19 Mart</h2>
</br>
•1866 - Osmanlı Hükûmeti, Süveyş Kanalı'nın açılması konusunda izin verdi.
</br>
</br>
•2006 - Azerbaycan Millî Direniş Teşkilatı kuruldu.
`,
    `
<h2>20 Mart</h2>
</br>
•1916 - Albert Einstein, görecelik kuramını yayınladı.
</br>
</br>
•2015 - Tam güneş tutulması gerçekleşti. Tam tutulma, Norveç'in kuzeybatısından, İzlanda'nın güneyinden ve Svalbard'tan gözlemlenebildi.
`,
    `
<h2>21 Mart</h2>
</br>
•1590 - Osmanlı Devleti ve Safevî Devleti arasında, Ferhat Paşa Antlaşması imzalandı.
</br>
</br>
•1779 - Osmanlı Devleti ile Rusya arasında, Aynalıkavak Antlaşması imzalandı.
</br>
</br>
•1871 - Otto von Bismarck, Prens unvanını aldı.
</br>
</br>
•1937 - Tunceli'de Dersim İsyanı başladı.
`,
    `
<h2>22 Mart</h2>
</br>
•1737 - Osmanlı Devleti'nde Sadrazamlığa, Yeğen Mehmed Paşa'nın yerine Hacı İvazzade Mehmed Paşa getirildi.
</br>
</br>
•1921 - Kurtuluş Savaşı: Kuvâ-yi Milliye güçleri, Fransız ordusu birliklerini Feke'yi terk etmek zorunda bıraktı.
</br>
</br>
•1942 - II. Dünya Savaşı: İkinci Sirte Muharebesi (Kraliyet Donanması ile Regia Marina arasında meydana gelen deniz muharebesi)
</br>
</br>
•1943 - Türkiye ile ABD arasında, karşılıklı radyo yayın servisi açıld
</br>
</br>
•1945 - Mısır, Suriye, Lübnan, Ürdün, Suudi Arabistan, Irak ve Yemen, Kahire'de Arap Birliği'ni kurdular.
`,
    `
<h2>23 Mart</h2>
</br>
•625 - Arabistan'da Müslümanlarla Kureyşler arasında, Uhud Savaşı başladı.
</br>
</br>
•1855 - Dolmabahçe Camii ibadete açıldı.
</br>
</br>
•1921 - II. İnönü Muharebesi başladı. Yunan birlikleri, Uşak ve Bursa üzerinden, Afyon ve Eskişehir'e doğru iki koldan taarruz başlattı.
</br>
</br>
•1923 - Mübadele sonucu Selanik'ten gelen Türkler, Didim'e ulaştılar.
</br>
</br>
•1931 - Türk çocuklarının ilk öğrenimlerini Türk okullarında yapmalarını zorunlu kılan kanun kabul edildi.
</br>
</br>
•1982 - Uğur Mumcu, köşesinde, "Terör, öncelikle demokrasinin düşmanıdır. Bu açıdan bakarsak, «12 Eylül 1980 öncesinde Türkiye'de düşünce özgürlüğü vardır, Anayasa yürürlüktedir, demokrasi tastamam işlemektedir» diyemeyiz, dersek: inandırıcı olamayız." yazdı.
`,
    `
<h2>24 Mart</h2>
</br>
•1394 - Timurlenk, Diyarbakır'ı işgal etti.
</br>
</br>
•1923 - Mustafa Kemal Paşa, Time dergisine kapak oldu.
</br>
</br>
•1926 - Türkiye'de petrol arama ve işletilmesinin devletçe yönetilmesini öngören kanun, TBMM'de kabul edildi.
</br>
</br>
•2005 - Lale Devrimi: Kırgızistan cumhurbaşkanı Askar Akayev, hükûmet karşıtı kitlesel gösterilerin ardından görevden alındı ve ülkeden kaçtı.
`,
    `
<h2>25 Mart</h2>
</br>
•1821 - Yunanistan, Osmanlı İmparatorluğu'ndan bağımsızlığını ilan etti.
</br>
</br>
•1912 - Ahmet Ferit Tek, Türk Ocağı'nı kurdu.
</br>
</br>
•1924 - Yunanistan'da cumhuriyet ilan edildi.
`,
    `
<h2>26 Mart</h2>
</br>
•1913 - Edirne, Bulgar ve Sırp kuvvetlerince teslim alındı.
</br>
</br>
•1915 - I. Dünya Savaşı: Birinci Gazze Muharebesi gerçekleşti.
</br>
</br>
•1917 - I. Dünya Savaşı: Çanakkale Boğazı'nın Anadolu yakasında görev yapmak üzere Osmanlı 15. Kolordusu'nun teşkili.
</br>
</br>
•1931 - Türkiye'de Ölçüler Kanunu'nun kabul edilmesiyle; okka, endaze gibi eski ölçülerin yerine gram, metre, litre gibi yeni ölçülerin kullanılması öngörüldü.
</br>
</br>
•1942 - Naziler, Yahudileri Polonya'daki Auschwitz Kampı'na götürmeye başladı.
</br>
</br>
•1971 - İstanbul'da iki kıta birleşti. Boğaz Köprüsü'nün 57'nci ünitesinin de yerine konulmasıyla kentin, Asya ve Avrupa yakaları birbirine bağlandı.
</br>
</br>
•2000 - Rusya'da yapılan seçimler sonucunda, Vladimir Putin Başkan oldu.
</br>
</br>
•2002 - TBMM Genel Kurulunda, AB'ye uyum çerçevesinde hazırlanan ve sekiz yasada değişiklik yapan dokuz maddelik yasa tasarısı kabul edildi.
`,
    `
<h2>27 Mart</h2>
</br>
•1854 - Kırım Savaşı: Birleşik Krallık, Rus İmparatorluğuna savaş ilan etti.
</br>
</br>
•1854 - Kırım Savaşı: Birleşik Krallık, Rus İmparatorluğuna savaş ilan etti.
</br>
</br>
•2012 - Türkiye, Şam Büyükelçiliği'nin bütün faaliyetlerini askıya aldı.
</br>
</br>
•2020 - Kuzey Makedonya, NATO'ya üye oldu.
`,
    `
<h2>28 Mart</h2>
</br>
•1854 - Kırım Savaşı: Fransa, Rusya'ya savaş açtı.
</br>
</br>
•1930 - Türkiye Hükûmeti, yabancı ülkelerden Türkiye'deki şehirleri için Türkçe adlarını kullanmalarını resmen talep etti. Bu tarihten sonra Posta İdaresi, Angora veya Constatinople olarak adreslenmiş mektupları, Ankara ve İstanbul'a ulaştırmadı.
</br>
</br>
•1947 - Birleşmiş Milletler Avrupa Ekonomik Komisyonu kuruldu.
</br>
</br>
•1950 - Türkiye, İsrail'i resmen tanıdı.
</br>
</br>
•1961 - Türkiye'de Anayasa'nın halkoyuna sunulması hakkındaki kanun kabul edildi.
`,
    `
<h2>29 Mart</h2>
</br>
1430 - Osmanlı Orduları, Selanik ve İyonya'yı fethetti.
`,
    `
<h2>30 Mart</h2>
</br>
•1814 - Napolyon Savaşları: Koalisyon güçleri Paris'e girdi.
</br>
</br>
•1856 - Kırım Savaşı; Rus İmparatorluğu, Osmanlı İmparatorluğu, Birleşik Krallık ve Fransa arasında Paris Antlaşması'nın imzalanmasıyla sona erdi.
</br>
</br>
•1863 - Türkiye'de eğitim alanında açılan ilk sivil toplum kuruluşu olan Darüşşafaka kuruldu
</br>
</br>
•1998 - AB, Kıbrıs ile üyelik görüşmelerine başladı.
</br>
</br>
•2005 - Kabahatler Yasa Tasarısı, TBMM'de kabul edildi.
`,
    `
<h2>31 Mart</h2>
</br>
•1921 - İkinci İnönü Muharebesi'nde, Türk Ordusunun karşı taarruzu başladı.
</br>
</br>
•1923 - Lozan Antlaşması: Londra'da toplanan İtilaf Devletleri temsilcileri, Türkiye'nin 8 Mart'taki notasına cevap vererek, Lozan'da kesintiye uğrayan görüşmeleri sürdürmeye çağırdılar.
</br>
</br>
•1925 - Şeyh Said İsyanı'nın olduğu bölgede, Divan-ı Harb'in verdiği idam cezalarının, onay gerektirmeden yerine getirilmesi hakkındaki kanun kabul edildi.
`,
    `
<h2>1 Nisan</h2>
</br>
•1873 - Namık Kemal'in Vatan Yahut Silistre adlı oyununun ilk temsili, İstanbul'daki Gedikpaşa Tiyatrosu'nda gerçekleşti.
</br>
</br>
•1916 - Mustafa Kemal, Miralaylığa (Generalliğe) yükseltildi.
</br>
</br>
•1921 - Metristepe'deki 10. Yunan Tümeni'nin geri çekilmesinin ardından taarruza geçen Ankara Hükümeti Ordusu, İkinci İnönü Muharebesi'ni kazandı.
</br>
</br>
•1924 - Münih'teki darbe girişimi dolayısıyla Nazi lideri Adolf Hitler, 5 yıl hapis cezasına çarptırıldı. Fakat sadece 9 ay hapis kaldı ve bu sırada Mein Kampf (Kavgam) adlı kitabını yazdı.
</br>
</br>
•1926 - Türkiye'de 30 Ağustos'un, "Zafer Bayramı" olarak kutlanması hakkındaki kanun kabul edildi.
</br>
</br>
•1955 - Kıbrıs'ta Türk Mukavemet Teşkilatı faaliyete geçti.
</br>
</br>
•1957 - Batı Almanya'da bilim insanları, nükleer silahlar üzerine çalışmayı reddetti.
</br>
</br>
•1958 - Kıbrıs'ta EOKA'cılar Büyük Britanya'ya savaş ilan etti. EOKA'nın lideri Georgios Grivas, Türklere de gözdağı verdi.
</br>
</br>
•1961 - Türkiye'de 27 Mayıs Darbesi'nden sonra faaliyetleri yasaklanan siyasi partilerin faaliyetleri kısmen serbest bırakıldı.
</br>
</br>
•1975 - Bursa'da Uludağ, Elazığ'da Fırat, Samsun'da Ondokuz Mayıs ve Konya'da Selçuk Üniversitelerinin kurulmasına ilişkin kanun, TBMM'nde kabul edildi.
</br>
</br>
•2005 - 24. Uluslararası İstanbul Film Festivali "Yaşam Boyu Başarı Ödülü", sinema sanatçısı Sophia Loren'e verildi.
</br>
</br>
•2009 - Hırvatistan ve Arnavutluk NATO'ya katıldı.
`,
    `
<h2>2 Nisan</h2>
</br>
•1453 - Fatih Sultan Mehmet, İstanbul'u kuşatma harekâtına başladı.
</br>
</br>
•1917 - ABD, fiilen I. Dünya Savaşı'na girdi.
</br>
</br>
•1918 - Van ve Muradiye'den Rus İmparatorluğu ve Batı Ermenistan Yönetimi'ne ait Ordu Birlikleri'nin çekilişi.
</br>
</br>
•1921 - Yunan Ordusu, 1 Nisan'ı 2 Nisan'a bağlayan gece Cabar Katliamı’nı gerçekleştirdi.
</br>
</br>
•1948 - Yazar Sabahattin Ali, Bulgaristan sınırını geçmeye çalışırken, kılavuzu Ali Ertekin tarafından öldürüldü. 28 Aralık'ta tutuklanan Ertekin'in cezası indirime uğradı. Aynı yıl çıkan af yasasıyla da serbest bırakıldı.
</br>
</br>
•1948 - Ankara'da Opera Binası, Cumhurbaşkanı İsmet İnönü'nün de katıldığı bir tören ve ardından Adnan Saygun'un "Kerem" operasıyla perdelerini açtı.
</br>
</br>
•1950 - Bursa Cezaevi'nde bulunan şair Nâzım Hikmet'in affı için, tanınmış sanatçı, yazar ve şair gibi toplumun ileri gelenleri, toplu olarak imzaladıkları sembolik bir dilekçe ile İsmet İnönü'ye başvuru yaptı.
</br>
</br>
•1971 - TÜSİAD kuruldu.
</br>
</br>
•1976 - İlk Türk Turizm Kurultayı, İstanbul'da toplandı.
`,
    `
<h2>3 Nisan</h2>
</br>
•1930 - Türkiye'de kadınlara, belediye seçimlerinde seçme ve seçilme hakkı verildi.
</br>
</br>
•1940 - II. Dünya Savaşı: Sovyetler Birliği, 22.000 Polonyalıyı katlederek Katyn Katliamı'nı gerçekleştirdi.
</br>
</br>
•1948 - Amerika Birleşik Devletleri başkanı Harry Truman, ekonomik yardımları içeren Marshall Planı'nı imzaladı.
</br>
</br>
•1963 - Türkiye'de 27 Mayıs, Hürriyet ve Anayasa Bayramı olarak ilan edildi.
</br>
</br>
•1975 - İnönü Üniversitesi, Malatya'da kuruldu.
</br>
</br>
•1992 - Ankara'nın Çankaya ilçesi Kaymakamlığı'na vekil olarak atanan Azize Düşer, Türkiye'nin ilk kadın kaymakamı oldu.
`,
    `
<h2>4 Nisan></h2>
</br>
•1814 - Napolyon, tahtından ilk defa çekildi.
</br>
</br>
•1913 - Osmanlı İmparatorluğu'nda Kadınlar Dünyası adlı dergi kuruldu.
</br>
</br>
•1929 - İstanbul'da düzenlenen Yerli Malı Kullanma ve Koruma Toplantısı'nda gençlik, yerli malı kullanmaya yemin etti.
</br>
</br>
•1949 - NATO kuruldu. Washington'da ABD, Belçika, Danimarka, Fransa, Lüksemburg, Norveç ve Portekiz, Kuzey Atlantik Paktı Örgütünün (NATO) kuruluşunu onaylayan antlaşmayı imzaladı.
</br>
</br>
•1953 - Deniz Kuvvetleri'ne bağlı Dumlupınar denizaltısı, NATO tatbikatından dönerken Çanakkale Boğazı'nda İsveç gemisi Naboland'la çarpışarak battı; 81 Türk denizcisinin öldüğü bugün, "Deniz Şehitlerini Anma Günü" ilan edildi.
</br>
</br>
•1968 - Martin Luther King Jr., Memphis'te öldürüldü.
`,
`
<h2>5 Nisan</h2>
</br>
•1453 - Fatih Sultan Mehmet'in donanması, İstanbul sularına geldi.
</br>
</br>
•1909 - Osmanlı İmparatorluğu'nda İttihad-ı Muhammedi Fırkası kuruldu.
</br>
</br>
•1925 - Kahramanmaraş, İstiklal Madalyası aldı.
</br>
</br>
•1992 - Bosna-Hersek Hükûmeti bağımsızlığını ilan etti.
`,
`
<h2>6 Nisan</h2>
</br>
•1326 - Orhan Bey, kuşatma altında tutulan Bursa'yı Bizanslılardan aldı. Bursa, 1326-1361 arasında Osmanlılara başkentlik yaptı.
</br>
</br>
•1453 - İstanbul, Fatih Sultan Mehmet tarafından kuşatıldı.
</br>
</br>
•1872 - Pertevniyal Lisesi, "Mahmudiye Rüştiyesi" adı altında eğitim-öğretime başladı.
</br>
</br>
•1896 - İlk modern Olimpiyat Oyunları Atina'da başladı.
</br>
</br>
•1909 - Serbesti gazetesinde, İttihat ve Terakki Cemiyeti karşıtı yazılar yazan gazeteci Hasan Fehmi Bey öldürüldü.
</br>
</br>
•1914 - Askerî Yargıtay kuruldu.
</br>
</br>
•1917 - ABD, Almanya'ya savaş ilan etti ve Birinci Dünya Savaşı'na müttefiklerin yanında girdiğini açıkladı.
</br>
</br>
•1920 - Anadolu Ajansı kuruldu.
</br>
</br>
•1953 - Türkiye Genç Millî Futbol Takımı dünya üçüncüsü oldu.
</br>
</br>
•1956 - Hayat mecmuası'nın ilk sayısı çıktı.
`,
`
<h2>7 Nisan</h2>
</br>
•451 - Hun İmparatoru Attila, Franklar'ın elinde buluna Fransa'nın kuzeyindeki Metz şehrini ele geçirdi. Germen müttefikleriyle birleşerek; Reims, Mainz, Strazburg, Köln, Worms ve Trier kentleri yağmalandı.
</br>
</br>
•1712 - New York'ta köleler isyan başlattı.
</br>
</br>
•1789 - Sultan I. Abdülhamid öldü, III. Selim tahta çıktı.
</br>
</br>
•1939 - II. Dünya Savaşı: İtalya, Arnavutluk'u işgal etti.
</br>
</br>
•1943 - Batı Ukrayna'nın Terebovlia kentinde Naziler, 1100 Yahudiyi öldürüp toplu mezara gömdüler.
</br>
</br>
•1948 - Dünya Sağlık Örgütü (WHO), Birleşmiş Milletler'e bağlı olarak kuruldu.
</br>
</br>
•2019 - Atatürk Havalimanı yolculu seferlere kapatıldı. İstanbul Havalimanı tam kapasite ile seferlerine başladı.
`,
`
<h2>8 Nisan</h2>
</br>
•876 - Deyrülâkül Muharebesi : Muvaffak liderliğindeki Abbasi kuvvetleri, Dicle Nehri'ndeki Saffârî istilasını durdurdu. Emir Yakûb bin Leys es-Saffâr, Abbâsîler'in başkenti Bağdat'ı ele geçirmeye çalışır, ancak ordusuyla birlikte geri çekilmek zorunda kalır.
</br>
</br>
•1513 - İspanyol Konkistador Juan Ponce de León, Florida'yı keşfetti ve bu bölgeyi İspanya toprağı olarak ilan etti.
</br>
</br>
•1730 - New York'ta ilk sinagog hizmete girdi.
</br>
</br>
•1783 - 1441'den beri varlığını sürdüren Kırım Hanlığı, II. Katerina'nın emriyle Rus İmparatorluğu tarafından ilhak edildi.
</br>
</br>
•1820 - Milo Venüsü heykeli, bir Ege adası olan Melos'ta bulundu.
</br>
</br>
•1830 - Avrupa ülkeleri, Osmanlı İmparatorluğu'ndan Yunan Devleti'nin bağımsızlığını onaylamasını istedi.
</br>
</br>
•1869 - 2. Darülfünun binasının inşası tamamlandı ve Darülfünun-ı Osmani kuruldu.
</br>
</br>
•1920 - Salih Paşa'nın (Salih Hulusi Kezrak) istifası ile kurulan Damat Ferit Paşa Kabinesi'nin tanınmayacağı yolunda, Heyet-i Temsiliye genelgesi yayınlandı.
</br>
</br>
•1923 - Mustafa Kemal 9 Umde'yi açıkladı. Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti'nin seçim bildirisi niteliğindeki bu ilkelerin başında, 'Egemenlik Ulusundur' maddesi gelmekteydi.
</br>
</br>
•1924 - Şeriye mahkemelerini kaldıran yeni Mahkemeler Teşkilatı Kanunu TBMM'de kabul edildi. Kadıların yerini hakimler aldı.
</br>
</br>
•1946 - Milletler Cemiyeti son oturumunu yaptı. Bundan sonra örgütün adı Birleşmiş Milletler olacaktır.
</br>
</br>
•1992 - Uluslararası Atatürk Barış Ödülü'nün Güney Afrikalı lider Nelson Mandela'ya verilmesi kararlaştırıldı. Mandela, Türk Hükûmetine yönelik insan hakları ihlali suçlamaları nedeniyle ödülü kabul etmedi.
`,
`
<h2>9 Nisan</h2>
</br>
•1860 - Dünyada ilk kez bir ses kayıt altına alınabildi.
</br>
</br>
•1932 - İlk Türk kadın hakim Mürüvvet Hanım, Adana'da göreve başladı.
</br>
</br>
•1940 - II. Dünya Savaşı: Almanya; Danimarka ve Norveç istilasına başladı.
</br>
</br>
•1982 - Anıtkabir Müdürlüğü, Genelkurmay Başkanlığına bağlı Anıtkabir Komutanlığına bağlandı.
`,
`
<h2>10 Nisan</h2>
</br>
1845 - Türk Polis Teşkilatı kuruldu.
</br>
</br>
1928 - TBMM, Anayasa'nın ikinci maddesini değiştirdi. Söz konusu maddeden, "Türkiye Devleti'nin dini İslam'dır" bölümü çıkarıldı. Milletvekilleri ve Cumhurbaşkanı, yemin ederken "Vallahi" yerine "Namusum üzerine söz veririm" diyecek.
`,
`
<h2>11 Nisan</h2>
</br>
•1919 - Uluslararası Çalışma Örgütü (ILO) kuruldu.
</br>
</br>
•1919 - 15. Kolordu Komutanlığına atanan Kâzım Karabekir Paşa, Mustafa Kemal Paşa'yı Şişli'deki evinde ziyaret etti.
</br>
</br>
•1920 - Damat Ferid, Kuvâ-yi Milliye aleyhinde bildiri yayınladı.
</br>
</br>
•1920 - Meclis-i Mebûsan kapatıldı.
</br>
</br>
•1930 - Sultanahmet'te büyük kadın mitingi yapıldı. Türk Kadınlar Birliği'nin düzenlediği mitingde, "kadınlara seçme ve seçilme hakkı tanınması" kutlandı.
</br>
</br>
•1997 - Atatürk Uluslararası Barış Ödülü'nün, Bosna'da görev yapan Türk Barış Gücü'ne verilmesi kararlaştırıldı.
`,
`
<h2>12 Nisan</h2>
</br>
•1931 - Türk Tarihi Tetkik Cemiyeti kuruldu.
</br>
</br>
•1939 - Nazi Almanyası Propaganda Bakanı Goebbels İstanbul'a ziyarette bulundu.
</br>
</br>
•1941 - II. Dünya Savaşı: Alman 2. Ordusu, Yugoslavya'nın başkenti Belgrad'a girdi.
`,
`
<h2>13 Nisan</h2>
</br>
1204 - Dördüncü Haçlı Seferi'nde Kostantinopolis'in yağmalanması.
</br>
</br>
1517 - Son Memlük sultanı II. Tomanbay, I. Selim tarafından Kahire’de idam edildi.
</br>
</br>
1909 - Osmanlı İmparatorluğu'nda 31 Mart Olayı meydana geldi.
</br>
</br>
1949 - Türk Kadınlar Birliği, Cumhurbaşkanı İsmet İnönü'nün eşi Mevhibe İnönü'nün Onursal Başkanlığında kuruldu.
`,
`
<h2>14 Nisan</h2>
</br>
•1900 - Paris Uluslararası Fuarı açıldı. Fuarda, Osmanlı Pavyonu da yer aldı.
</br>
</br>
•1963 - Türkiye Spor Yazarları ve Spor Kulübü Derneği kuruldu.
</br>
</br>
•1979 - Türkiye'de 12 Eylül 1980 Darbesi'ne Giden Süreç (1979- 12 Eylül 1980): Beykoz'da 2 polis ve Şekerbank'ın eski müdürü öldürüldü. Öldürülen müdürün baş ucunda, "Beklenen gün geldi. Bir halk düşmanı daha yok oldu. Ya özgürlük ya ölüm, ihtilal yolu Çayanların yolu." yazılı bir kâğıt bulundu.
`,
`
<h2>15 Nisan</h2>
</br>
•1923 - Birinci Türkiye Büyük Millet Meclisi, yeni seçimlerin yapılması kararını alarak, son oturumunu gerçekleştirdi.
</br>
</br>
•1925 - Doğu'da isyan başlatan Şeyh Said yakalandı.
</br>
</br>
•1929 - İstanbul'da terzilik mektebi açıldı.
</br>
</br>
•1929 - Ankara Etnografya Müzesi'nde Birinci Genç Ressamlar Sergisi açıldı. Nurullah Berk, Cevat Dereli ve Refik Fazıl Epikman gibi sanatçıların eserleri sergilendi.
`,
`
<h2>16 Nisan</h2>
</br>
1945 - Kızıl Ordu Berlin'e girdi ve Berlin Muharebesi başladı.
</br>
</br>
1948 - Avrupa Ekonomik İşbirliği Örgütü kuruldu.
`,
`
<h2>17 Nisan</h2>
</br>
•1453 - Fatih Sultan Mehmet, İstanbul adalarını fethetti.
</br>
</br>
•1897 - Osmanlı İmparatorluğu ile Yunanistan Krallığı arasında, "Otuz Gün Savaşı" olarak da adlandırılan savaş başladı.
</br>
</br>
•1954 - Çanakkale Anıtı'nın temeli atıldı.
`,
`
<h2>18 Nisan</h2>
</br>
•1916 - I. Dünya Savaşı: Rus İmparatorluğu, Trabzon Harekâtı'nı başlatarak Trabzon'u işgal etti.
</br>
</br>
•1920 - İstanbul Hükûmeti, Millî Mücadele'yi yürüten Kuvâ-yi Milliye'ye karşı, Kuva-yi İnzibatiye'yi kurdu. Bu kuvvetler, Adapazarı dolaylarında çıkarılan isyanı destekledi; ancak Ankara Hükûmeti'nin düzenli birliklerine yenildi.
</br>
</br>
•1936 - İzmit Kağıt Fabrikası'nda, ilk kâğıt imal edildi.
</br>
</br>
•1939 - Harp Mükellefiyeti Kanunu çıktı.
</br>
</br>
•1951 - Paris Antlaşması'nın imzalanmasıyla, günümüz Avrupa Birliği'nin temellerini oluşturacak ilk adım olan, Avrupa Kömür ve Çelik Topluluğu kurulmuştur.
</br>
</br>
•1960 - CHP'yi ve basını soruşturmak üzere TBMM'de Tahkikat Komisyonu kuruldu. İnönü, "bu demokratik rejim istikametinden ayrılıp onu baskı rejimi haline götürmek tehlikeli bir şeydir. Bu yolda devam ederseniz ben de sizi kurtaramam" dedi.
`,
`
<h2>19 Nisan</h2>
</br>
1926 - Türk karasularında her türlü denizcilik işlerini Türk vatandaşlarına tahsis eden ve yabancıların kabotaj hakkına son veren Kabotaj Kanunu kabul edildi.
</br>
</br>
1943 - II. Dünya Savaşı: Alman askerleri Yahudileri toplamak için Varşova Gettosu'na girdi.
`,
`
<h2>20 Nisan</h2>
</br>
•1924 - Türkiye'de 1924 Anayasası yürürlüğe girdi.
</br>
</br>
•1924 - Bilecik il oldu.
</br>
</br>
•1994 - Türkiye'de Radyo-Televizyon Üst Kurulu kuruldu.
</br>
</br>
•2005 - Turgut Özakman'ın, Türk Kurtuluş Savaşı'nı bir roman kurgusu içinde anlatan Şu Çılgın Türkler kitabı yayımlandı.
`,
`
<h2>21 Nisan</h2>
</br>
•1821 - Sadrazam Benderli Ali Paşa görevinden ayrıldı ve 30 Nisan'da idam edildi. Benderli Ali Paşa, Padişah emri ile idam edildiği bilinen son Sadrazamdı.
</br>
</br>
•1408 - Karakoyunlular ile Timurlular arasında 21 Nisan'da Serrud Muharebesi oldu.
</br>
</br>
•1920 - Mustafa Kemal Paşa, Meclis'in 23 Nisan 1920 günü açılacağını bildiren bir genelge yayımladı.
</br>
</br>
•1964 - Yunanistan, Kıbrıs'taki askerî birliğini, Birleşmiş Milletler Barış Gücü emrine vermeyi kabul etti.
</br>
</br>
•2005 - TBMM Başkanlık Divanı, TBMM 85. Yıl Milli Egemenlik Onur Ödülü'nün Prof. Dr. Gazi Yaşargil'e verilmesini kararlaştırdı.
`,
`
<h2>22 Nisan</h2>
</br>
•1915 - I. Dünya Savaşı: İkinci Ypres Muharebesi başladı.
</br>
</br>
•1920 - İtilaf Devletleri, Osmanlı Hükûmetini Paris'te toplanacak olan Barış Konferansı'na davet etti.
</br>
</br>
•1924 - Türkiye Cumhuriyeti Devlet Demiryolları Genel Müdürlüğü kuruldu. Anadolu demiryollarının devletleştirilmesine ilişkin yasa benimsendi.
</br>
</br>
•1933 - Türkiye ile Osmanlı Düyunu Umumiye Hamilleri arasında imzalanan antlaşmayla Osmanlı İmparatorluğu borçlarının tasfiyesi sağlandı.
</br>
</br>
•1941 - II. Dünya Savaşı: Yunanistan, Mihver devletleri tarafından işgal edildi ve teslim oldu.
</br>
</br>
•1947 - Türkiye'ye yabancı sermaye girişine izin veren yasa kabul edildi.
</br>
</br>
•1962 - Anayasa Mahkemesi ve Yüksek Hakimler Kurulunun kurulmasına karar verildi.
</br>
</br>
•1962 - Millî Savunma Bakanlığı, aralarında Yarbay Talat Turhan'ın da bulunduğu beş subayın, "Genç Komünistler Ordusu" imzalı bildiri dağıttıkları gerekçesiyle gözaltına alındığını açıkladı.
</br>
</br>
•1970 - Dünya Günü ilk kez kutlandı.
</br>
</br>
•1970 - Türkiye Gazetesi kuruldu.
</br>
</br>
•1983 - Batı Almanya dergisi Der Stern, Hitler'in Günlükleri'ni gün ışığına çıkardığını ileri sürdü ve bazı bölümlerini yayımladı. Sonradan bu günlüklerin sahte olduğu ortaya çıktı.
</br>
</br>
•1985 - Sabah Gazetesi kuruldu.
</br>
</br>
•1987 - Dil Derneği kuruldu
`,
`
<h2>23 Nisan</h2>
</br>
•1906 - Rusya'da Çar II. Nikolay, "Temel Yasalar" olarak bilinen anayasayı ilan etti.
</br>
</br>
•1920 - Türkiye Büyük Millet Meclisi açıldı ve ilk kez toplandı.
</br>
</br>
•1923 - Lozan Barış Konferansı 23 Nisan 1923'te ikinci defa toplanarak, taraflar olan TBMM temsilcileriyle Birleşik Krallık, Fransa, İtalya, Japonya, Yunanistan, Romanya, Bulgaristan, Portekiz, Belçika, SSCB ve Yugoslavya temsilcileri aracılığıyla 24 Temmuz 1923'te sonuçlandırılmıştır.
</br>
</br>
•1979 - Türkiye'nin yedi ülke ile telefon görüşmesini sağlayacak olan uyduyla haberleşme istasyonu hizmete girdi.
</br>
</br>
•1979 - 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı, UNESCO'nun 1979 yılını "Çocuk Yılı" olarak duyurmasının ardından, TRT tarafından "TRT Uluslararası 23 Nisan Çocuk Şenliği" adı ile ilk kez kutlandı.
</br>
</br>
•1994 - Gagavuzya kuruldu.
</br>
</br>
•2003 - Kuzey Kıbrıs Türk Cumhuriyeti Bakanlar Kurulunun aldığı karar doğrultusunda; Kuzey Kıbrıs ile Kıbrıs Cumhuriyeti arasında serbest geçişler başladı.
`,
`
<h2>24 Nisan</h2>
</br>
•1512 - I. Selim, Osmanlı İmparatorluğu tahtına çıktı.
</br>
</br>
•1513 - Yenişehir Muharebesi, I. Selim ile ağabeyi Ahmet Sultan arasında gerçekleşen taht kavgasının sonu.
</br>
</br>
•1800 - Dünyanın en büyük kütüphanesi olan Kongre Kütüphanesi kuruldu.
</br>
</br>
•1830 - Osmanlı Hükûmeti, Yunan Devleti'nin varlığını resmen kabul etti.
</br>
</br>
•1909 - İstanbul'a gelen Hareket Ordusu, 31 Mart Ayaklanması'nı bastırdı.
</br>
</br>
•1920 - Mustafa Kemal, Büyük Millet Meclisi Reisliği'ne seçildi.
</br>
</br>
•1939 - Hatay Cumhurbaşkanı Tayfur Sökmen, Atatürk'ün ve İnönü'nün bir görevlisi olduğunu belirten bir konuşma yaptı.
</br>
</br>
•2004 - Kıbrıs'ta Annan Planı için referandum yapıldı. Türk tarafının kabul ettiği plan, Rum tarafının reddetmesi sonucu hayata geçirilemedi.
`,
`
<h2>25 Nisan</h2>
</br>
•1859 - Kızıldeniz ile Akdeniz'i birbirine bağlayacak olan Süveyş Kanalı'nın kazılmasına, Mısır'ın Port Said kentinde başlandı.
</br>
</br>
•1915 - İngiliz - Fransız kuvvetleri, Çanakkale'ye çıkarma harekâtı başlattı. Kara savaşları başladı.
</br>
</br>
•1915 - Seddülbahir Muharebeleri başladı.
</br>
</br>
•1915 - Arıburnu Muharebeleri başladı.
</br>
</br>
•1926 - İran'da Rıza Han Pehlevi, kendisini "Şah" ilan etti.
</br>
</br>
•1962 - Anayasa Mahkemesi kuruldu.
`,
`
<h2>26 Nisan</h2>
</br>
•1870 - Osmanlı Devleti’nde, Dârülmuallimât (Kız Öğretmen Okulu) açıldı. Sınavla 32 kız öğrenci alındı.
</br>
</br>
•1912 - İlk defa, bir Osmanlı pilotu olan Fesa Bey (Evrensev), Osmanlı tayyaresi ile Türk toprakları üzerinde uçtu.
</br>
</br>
•1961 - Yüksek Seçim Kurulu oluşturuldu.
`,
`
<h2>27 Nisan</h2>
</br>
•1640 - Evliya Çelebi'nin seyahat programı, Bursa-İstanbul-İzmit güzergâhı ile başladı.
</br>
</br>
•1749 - Handel'in Ateş Oyunları Müziği ilk kez Londra Green Park'ta seslendirildi.
</br>
</br>
•1909 - II. Abdülhamid tahttan indirildi; yerine V. Mehmed tahta geçti.
</br>
</br>
•1938 - Türkiye ile Yunanistan arasında dostluk antlaşması imzalandı.
</br>
</br>
•1941 - II. Dünya Savaşı: Alman birlikleri Atina'ya girdi.
`,
`
<h2>28 Nisan</h2>
</br>
•1915 - Birinci Kirte Muharebesi başladı.
</br>
</br>
•1916 - Kût'ül-Amâre bölgesinde 5 aydır kuşatma altında bulunan İngiliz birlikleri teslim oldular.
</br>
</br>
•1920 - İstanbul Hükümeti, Anadolu'da saltanatı devam ettirmek amacıyla Anadolu Fevkalade Müfettiş-i Umumiliği'ni yayınladı.
</br>
</br>
•1920 - Azerbaycan, Sovyetler Birliği'ne katıldı. (1991'de tekrar ayrılmıştır.)
</br>
</br>
•1935 - Hilal-i Ahmer Cemiyeti'nin adı, Kızılay olarak değiştirildi.
`,
`
<h2>29 Nisan</h2>
</br>
•1916 - Kut'ül Ammare Kuşatmasında, Halil Kut Paşa komutasındaki 6. Ordu, Irak cephesinde Kut'ül Ammare kasabasında İngiliz Mezopotamya ordusunu teslim aldı.
</br>
</br>
•1920 - TBMM, Hıyanet-i Vataniye Kanunu'nu onayladı.
</br>
</br>
•1945 - Sovyet tankları Berlin'e girdi.
`,
`
<h2>30 Nisan</h2>
</br>
•1919 - Mustafa Kemal Paşa, Dokuzuncu Ordu Müfettişliğine atandı.
</br>
</br>
•1920 - Paris'te toplanacak Barış Konferansı ile ilgili Ankara'da toplanan Büyük Millet Meclisi, taraf ülkelerin Dış İşleri Bakanlıklarına gönderdiği bir yazıyla, İstanbul'dan ayrı bir Hükûmetin kurulduğunu bildirdi.
</br>
</br>
•1959 - İsmet İnönü'nün Uşak gezisinde olaylar çıktı. Polis, halkı dağıtmak için göz yaşartıcı bomba kullandı.
</br>
</br>
•1960 - İstanbul'da bir gün sokağa çıkma yasağı ilan edildi.
`,
];

const today = new Date()
const month = today.getMonth() + 1;
const day = today.getDate();
let getToday = `${month} ${day}`;

console.log(today);
console.log(getToday);

if (getToday == "12 1") {
    document.getElementById("daily-text").innerHTML = (dailyText[89]);
};
if (getToday == "12 2") {
    document.getElementById("daily-text").innerHTML = (dailyText[1]);
};
if (getToday == "12 3") {
    document.getElementById("daily-text").innerHTML = (dailyText[2]);
};
if (getToday == "12 4") {
    document.getElementById("daily-text").innerHTML = (dailyText[3]);
};
if (getToday == "12 5") {
    document.getElementById("daily-text").innerHTML = (dailyText[4]);
};
if (getToday == "12 6") {
    document.getElementById("daily-text").innerHTML = (dailyText[5]);
};
if (getToday == "12 7") {
    document.getElementById("daily-text").innerHTML = (dailyText[6]);
};
if (getToday == "12 8") {
    document.getElementById("daily-text").innerHTML = (dailyText[7]);
};
if (getToday == "12 9") {
    document.getElementById("daily-text").innerHTML = (dailyText[8]);
};
if (getToday == "12 10") {
    document.getElementById("daily-text").innerHTML = (dailyText[9]);
};
// Tarihte Bugün End