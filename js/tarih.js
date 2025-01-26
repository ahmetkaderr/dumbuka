// Tarihte Bugün Start
const tarihOlaylar = [
    {
        "tarih": "1 Şubat",
        "olaylar": [
            "1553 - Osmanlı İmparatorluğu ve Fransa Krallığı arasında, İstanbul Antlaşması imzalandı",
            "1926 - Ankara'da Gazi İstasyonu açıldı.",
            "1930 - Kayseri-Şarkışla Demiryolu işletmeye açıldı.",
            "1933 - Bursa'da ezan ve kametin Türkçe okunmasını yanlış bulan bir grup, Ulucami'de namazdan çıkan halkı da yanlarına alarak Valilik önünde gösteri yaptı.",
            "1935 - Ayasofya, müze olarak halkın ziyaretine açıldı.",
            "1958 - Mısır ve Suriye, Birleşik Arap Cumhuriyeti adıyla birleşti. Bu durum ancak 1961'e dek sürdü."

        ]
    },
    {
        "tarih": "2 Şubat",
        "olaylar": [
            `•1958 - Mısır ve Suriye, Birleşik Arap Cumhuriyeti adıyla birleşti. Bu durum ancak 1961'e dek sürdü.`,
            `•1207 - Bugünkü Letonya ve Estonya'dan oluşan Terra Mariana kuruldu.`,
            `•1982 - Suriye'nin büyük şehirlerinden Hama'da, Müslüman Kardeşler örgütüne yönelik büyük bir operasyon yapıldı. Operasyonda binlerce kişi yaşamını yitirdi. Bu olay tarihe Hama Katliamı olarak geçti.`,
            `1984 - Vergi iadesine ilişkin yasa yürürlüğe girdi. Böylece 1 Ocak 1984 tarihinden itibaren ücretlilerin, memurların, emeklilerin, bunların eş ve çocuklarının ve bakmakla yükümlü olduğu yakınlarının kira giderleri hariç, ev eşyaları, yiyecek ve giyecek için yaptıkları harcamalar ile eğitim ve sağlık harcamaları vergi iadesine tabi olacak.`,
            `2007 - Birleşmiş Milletler "İklim Raporu" açıklandı. Küresel ısınmanın insan yaşamını tehdit ettiği uyarısı yapıldı.`
        ]
    },
    {
        "tarih": "3 Şubat",
        "olaylar": [
            `1451 - Osmanlı Padişahı II. Mehmed (Fatih Sultan Mehmet), ikinci kez tahta geçti.`,
            `1509 - Portekiz İmparatorluğu Donanması ile Osmanlı, Venedik ve Ragusa destekli Memlûk Sultanlığı, Gucerat Sultanlığı ve Kalkülta Krallığı birleşik donanması arasında, Diu Muharebesi gerçekleşti.`,
            `1930 - Türk-Fransız Dostluk Antlaşması imzalandı.`,
            `1931 - Menemen Olayı hükümlülerinden 27 kişi bugün idam edildi.`,
            `1975 - Kıbrıs Türk Havayolları, Türkiye-Kıbrıs seferlerini başlattı.`,
            `1998 - Türkiye, Uluslararası Çalışma Örgütü'nün (İLO) "Çocuk İşçi Çalıştırmayı Yasaklayan" iki maddesine imza attı.`
        ]
    },
    {
        "tarih": "4 Şubat",
        "olaylar": [
            `1783 - Amerikan Bağımsızlık Savaşı: İngiltere, Amerika Birleşik Devletleri ile olan düşmanlığına son verdiğini resmen ilan etti.`,
            `1794 - Fransa, tüm sömürgelerinde köleliği yasakladı.`,
            `1902 - Paris'te, Birinci Jön Türk Kongresi yapıldı.`,
            `1917 - İttihat ve Terakki Cemiyeti’nin önde gelen isimlerinden Talat Paşa, sadrazam oldu.`,
            `1923 - Lozan Konferansı, tarafların uzlaşamamaları nedeniyle kesildi.`,
            `1947 - Hatay ilinde yeradlarının Türkçeleştirilmesine karar verildi.`,
            `1974 - Türkiye Yazarlar Sendikası kuruldu.`
        ]
    },
    {
        "tarih": "5 Şubat",
        "olaylar": [
            `1974 - Türkiye Yazarlar Sendikası kuruldu.`,
            `1937 - Anayasa'nın 2. maddesinde yapılan değişiklikle, altı ilke Anayasa metnine girdi: Türkiye Devleti Cumhuriyetçi, Milliyetçi, Halkçı, Devletçi, Laik ve İnkılapçıdır. Resmi dili Türkçedir. Makam Ankara şehridir.`
        ]
    },
    {
        "tarih": "6 Şubat",
        "olaylar": [
            `1695 - Sultan II. Ahmed'in ölümü ve II. Mustafa'nın tahta çıkışı.`,
            `1936 - Kış Olimpiyat Oyunları, Garmisch-Partenkirchen'de (Almanya) başladı. Türkiye ilk kez katıldı.`,
            `2023 - Türkiye'de Kahramanmaraş depremleri meydana geldi.`
        ]
    },
    {
        "tarih": "7 Şubat",
        "olaylar": [
            `1727 - İbrahim Müteferrika, Osmanlı'da basılmak üzere ilk kitap baskı kalıpları hazırlattı.`,
            `1973 - TBMM'de kabul edilen bir yasa ile "Maraş" iline "kahramanlık" unvanı verildi; ilin adı "Kahramanmaraş" oldu.`,
            `1992 - Avrupa Ekonomik Topluluğu üyesi ülkeler arasında Avrupa Birliği'ni oluşturan Maastricht Antlaşması imzalandı.`
        ]
    },
    {
        "tarih": "8 Şubat",
        "olaylar": [
            `1919 - İşgal Kuvvetleri Kumandanı olarak İstanbul'a tayin olan Fransız General Louis Franchet d'Espèrey, atıyla Türk Bayrağı'nın üzerinden geçerek yapmış olduğu sözde gövde gösterisi ile İstanbul'a girdi.`,
            `1962 - Türkiye Cumhuriyeti Turizm Bankası çalışmalarına başladı.`,
            `2023 - Türkiye'de deprem yüzünden 3 aylık OHAL ilan edildi.`
        ]
    },
    {
        "tarih": "9 Şubat",
        "olaylar": [
            `1588 - Cami minarelerinde kandil kullanılmaya başlandı.`,
            `1640 - Sultan İbrahim tahta çıktı.`,
            `1695 - Koyun Adaları Muharebesi: Venedik Cumhuriyeti Donanması ile Karaburun Yarımadası açıklarındaki Koyun Adaları önünde yapılan deniz muharebesi, Osmanlı Donanması'nın zaferiyle sonuçlandı.`,
            `1788 - Avusturya, 1787-1792 Osmanlı-Rus Savaşı'nda Rusya'nın yanında savaşa katıldı.`,
            `1920 - Fransızlar, Maraş'tan çekilmeye ve Adana bölgesini boşaltmaya başladı.`,
            `1921 - İstanbul Boğazı dondu.`,
            `1925 - Türk Kurtuluş Savaşı komutanlarından Halit Paşa, Mecliste Ali Çetinkaya tarafından kaza kurşunuyla vurularak yaralandı ve 14 Şubat 1925'te hayatını kaybetti.`,
            `1930 - Atatürk, Kuşadası'nı ziyaret etti.`,
            `1934 - Balkan Antantı; Türkiye, Yunanistan, Yugoslavya ve Romanya arasında Atina'da imzalandı.`
        ]
    },
    {
        "tarih": "10 Şubat",
        "olaylar": [
            `1074 - Divânu Lügati't-Türk; Türk kültürünün ilk Türkçe dilinde yazılan sözlük eseri, Kaşgârlı Mahmut tarafından yazımı sona erdi. (25 Ocak 1072'de başladı.)`,
            `1828 - Rus İmparatorluğu ile Kaçar Hanedanı arasında Türkmençay Antlaşması imzalandı.`,
            `1947 - İtalya, Macaristan, Bulgaristan, Romanya ve Finlandiya, Paris Barış Antlaşması'nı imzaladılar.`
        ]
    },
    {
        "tarih": "11 Şubat",
        "olaylar": [
            `1959 - Kıbrıs Cumhuriyeti'nin kurulmasıyla ilgili Zürih Antlaşması, Türkiye ile Yunanistan arasında imzalandı.`
        ]
    },
    {
        "tarih": "12 Şubat",
        "olaylar": [
            `1859 - Mülkiye Mektebi, Sadrazam Âli Paşa ve Hükûmet üyelerinin katılımıyla açıldı.`,
            `1920 - Türk Kurtuluş Savaşı: Türk Silahlı Kuvvetleri, Fransa hakimiyeti altındaki Kahramanmaraş'ı aldı.`,
            `1934 - Avusturya'da iç savaş başladı.`,
            `1937 - Atatürk'ün Selanik'te doğduğu ev, Selanik Belediyesince sahibinden satın alınarak, Atatürk'ün emrine tahsis edildi.`
        ]
    },
    {
        "tarih": "13 Şubat",
        "olaylar": [
            `1258 - Hülagû, Bağdat'ı işgal etti. 200 bin Bağdatlı öldü.`,
            `1633 - Galileo Galilei, engizisyon mahkemesinde yargılanmak üzere Roma'ya geldi.`,
            `1925 - Şeyh Sait İsyanı: Lozan Konferansı'nda çözümü Türkiye ile Birleşik Krallık'a bırakılan Musul konusunda, Birleşik Krallık ile sorun yaşandığı günlerde, Bingöl'ün Genç ilçesinde Şeyh Sait önderliğinde, ayrılıkçı bir hareket başladı. Ayaklanma Diyarbakır'a da sıçradı.`,
            `1975 - Kıbrıs Türk Federe Devleti ilan edildi.`,
            `2005 - Türkiye, Afganistan'daki Uluslararası Güvenlik ve Yardım Kuvvetinin komutasını 6 ay süreyle, Kabil'de düzenlenen törenle Avrupa Kolordusundan devraldı.`
        ]
    },
    {
        "tarih": "14 Şubat",
        "olaylar": [
            `1804 - Osmanlı İmparatorluğu'na karşı Birinci Sırp Ayaklanması, Kara Yorgi tarafından başlatıldı.`,
            `1878 - II. Abdülhamid, Meclis-i Mebûsan'ı süresiz olarak tatil etti ve istibdat dönemi başladı.`,
            `1909 - Osmanlı Devleti'nde ilk güven oylaması yapıldı; Kâmil Paşa kabinesi düşürüldü.`,
            `1923 - Mustafa Kemal, Batı Anadolu gezisine çıktı.`
        ]
    },
    {
        "tarih": "15 Şubat",
        "olaylar": [
            `1924 - İzmir’de harp oyunları yapıldı.`
        ]
    },
    {
        "tarih": "16 Şubat",
        "olaylar": [
            `1916 - Rus İmparatorluğu, Erzurum'u işgal etti.`,
            `1925 - Türkiye'de sivil ve askeri havacılığı desteklemek amacıyla, sonraları "Türk Hava Kurumu" adını alacak olan, "Türk Tayyare Cemiyeti" kuruldu.`,
            `1926 - Mustafa Kemal'in de olduğu heyet, Ankara'da Hâkimiyet-i Milliye gazetesinin yeni binasını açtı.`,
            `1990 - Türkiye İnsan Hakları Vakfı (TİHV) kuruldu.`,
            `2005 - İklim değişikliği ile mücadele alanında hazırlanan en kapsamlı anlaşma olan Kyoto Protokolü, yürürlüğe girdi.`
        ]
    },
    {
        "tarih": "17 Şubat",
        "olaylar": [
            `1915 - Barbaros Hayreddin ve Turgut Reis muharebe gemileri, savunmaya katılmak üzere Nara'ya geldi.`,
            `1916 - Doğu cephesinde Ruslar, Muş'u işgal etti.`,
            `1917 - Hicaz Seferi Kuvvetler Komutanlığı'na atanan Mustafa Kemal, bu görevi kabul etmedi.`,
            `1920 - Osmanlı Mebuslar Meclisi, kabul ettiği Misak-ı Millî'nin basında yayınlanmasını ve bütün yabancı parlamentolara bildirilmesini kararlaştırdı.`,
            `1921 - Ankara dışındaki İstiklal Mahkemeleri kaldırıldı.`,
            `1923 - İzmir'de, Cumhuriyetin 1. iktisat kongresi olan İzmir İktisat Kongresi düzenlendi.`,
            `1923 - Mustafa Kemal, ikinci defa Büyük Millet Meclisi Başkanlığına seçildi. Meclise 7 işçi, 1 çiftçi kadın katıldı. Kapanış konuşmasını Rukiye Hanım yaptı.`,
            `1925 - Aşar Vergisi kaldırıldı. Basın, aşarın kaldırılmasını büyük bir devrim olarak sundu.`,
            `1926 - Türk Medeni Kanunu kabul edildi.`
        ]
    },
    {
        "tarih": "18 Şubat",
        "olaylar": [
            `1451 - Fatih Sultan Mehmet, ikinci kez tahta çıktı.`,
            `1695 - Osmanlı donanması, Sakız Adası'nı Venedikliler'den geri aldı.`,
            `1856 - Islahat Fermanı yayınlandı.`
        ]
    },
    {
        "tarih": "19 Şubat",
        "olaylar": [
            `1915 - I. Dünya Savaşı: Gelibolu muharebeleri başladı.`,
            `1915 - İtilaf devletleri'nin Çanakkale'ye denizden yaptıkları saldırı püskürtüldü.`,
            `1925 - Telsiz tesisi hakkındaki kanun çıktı. Türkiye'de radyonun kurulması TBMM'de kabul edildi.`,
            `1957 - Türk Silahlı Kuvvetleri'nin ilk kadın doktor subayı Sema Aran, göreve başladı.`
        ]
    },
    {
        "tarih": "20 Şubat",
        "olaylar": [
            `1833 - Osmanlı İmparatorluğu'nun Mısır Eyaleti'nde çıkan isyanın bastırılması için, Rusya Filosu İstanbul'a geldi.`
        ]
    },
    {
        "tarih": "21 Şubat",
        "olaylar": [
            `1440 - Prusya Konfederasyonu oluşturuldu.`,
            `1927 - Time dergisi, Mustafa Kemal Paşa'yı ikinci kez kapak yaptı.`
        ]
    },
    {
        "tarih": "22 Şubat",
        "olaylar": [
            `1848 - Paris'te işçiler ayaklandı. İki yıl boyunca Avrupa'yı altüst edecek olan, işçi devrimleri çığırı açıldı.`,
            `1942 - Halide Edib Adıvar, "Sinekli Bakkal" adlı romanıyla CHP'nin "Sanat Mükafatı"nı kazandı.`
        ]
    },
    {
        "tarih": "23 Şubat",
        "olaylar": [
            `532 - Bizans imparatoru I. Justinianus, Konstantinopolis'te Ayasofya'nın inşası emrini verdi.`,
            `1921 - Sevr Antlaşması'nın değiştirilmesi için Londra'da bir konferans toplandı. Konferans, 12 Martta bir anlaşmaya varılamadan dağıldı.`,
            `1945 - II. Dünya Savaşı: Pasifik Cephesi'nde Manila, ABD'nin eline geçti.`,
            `1945 - Türkiye - ABD ikili yardım antlaşması imzalandı.`,
            `1945 - Türkiye, Nazi Almanyası ve Japon İmparatorluğu'na savaş ilan etti.`,
            `1947 - Uluslararası Standardizasyon Organizasyonu (ISO) kuruldu.`
        ]
    },
    {
        "tarih": "24 Şubat",
        "olaylar": [
            `303 - Galerius'un fermanıyla, Roma İmparatorluğu'nda kendisi tarafından yönetilen bölgelerde Hristiyanlar'a baskı başladı.`,
            `1918 - Trabzon; Rusya ve Ermeni işgalinden kurtuldu.`
        ]
    },
    {
        "tarih": "25 Şubat",
        "olaylar": [
            `1925 - Hıyanet-i Vataniye Kanunu'nda değişiklik yapıldı: Din politikaya alet edilemeyecek ve bu suç vatan hıyaneti sayılacak.`,
            `1943 - Talat Paşa'nın Almanya'da tahnit edilen naaşı, İstanbul'a getirildi. Aynı gün Hürriyet-i Ebediye tepesinde toprağa verildi.`,
            `1991 - Varşova Paktı feshedildi.`
        ]
    },
    {
        "tarih": "26 Şubat",
        "olaylar": [
            `1618 - Osmanlı Sultanı, I. Mustafa tahttan indirildi ve yerine II. Osman Padişah oldu.`,
            `1658 - Danimarka ve İsveç arasında, Roskilde Antlaşması imzalandı.`,
            `1848 - Fransa'da İkinci Cumhuriyet ilan edildi.`,
            `1926 - Türkiye İstatistik Kurumu (o dönemki adıyla Merkezi İstatistik Dairesi) kuruldu.`,
            `1976 - Türkiye ile Amerika Birleşik Devletleri arasında, "Savunma İşbirliği Anlaşması" imzalandı.`,
            `2022 - Rusya'nın Ukrayna'yı işgalinden iki gün sonra Mikolayiv Muharebesi başladı.`
        ]
    },
    {
        "tarih": "27 Şubat",
        "olaylar": [
            `1863 - Türkiye'de bilinen ilk resim sergisi, İstanbul Atmeydanı'nda açıldı. Serginin açılmasına Sultan Abdülaziz destek verdi.`
        ]
    },
    {
        "tarih": "28 Şubat",
        "olaylar": [
            `1870 - Osmanlı padişahı Abdülaziz "Bulgar Eksarhanesinin" (Rumlardan bağımsız Bulgar Ortodoks Kilisesi) kurulmasına izin verdi.`,
            `1921 - TBMM'de ilk bütçe kabul edildi.`,
            `1942 - II. Dünya Savaşı: Japon İmparatorluk Donanması ile Müttefik Deniz Kuvvetleri arasında, Java ve Sumatra adalarını ayıran Sunda Boğazı'nda, Sunda Boğazı Muharebesi gerçekleşti.`,
            `1997 - Türkiye Millî Güvenlik Kurulunun 9 saat süren toplantısında 28 Şubat Süreci olarak adlandırılan kararlar alındı. Bu kararlar, irticayı Türkiye'nin önündeki en büyük tehlike olarak saptadı. MGK'da, Atatürk ilke ve inkılaplarının ödünsüz uygulanması kararı verildi.`
        ]
    },
    {
        "tarih": "29 Şubat",
        "olaylar": [
            `1924 - İstanbul'da Halife Abdülmecid Efendi, son Cuma selamlığı törenine çıktı.`,
            `1988 - Nazi belgeleri arasında BM eski Genel Sekreteri Avusturyalı diplomat Kurt Waldheim'ın II. Dünya Savaşı'nda toplama kamplarına insan göndermekle ilgili olduğuna ilişkin kanıtlar bulundu.`
        ]
    },
    {
        "tarih": "1 Mart",
        "olaylar": [
            `1430 - Osmanlı Padişahı II. Murad, Selanik'i fethetti.`,
            `1921 - Mehmet Âkif Ersoy'un sözlerini yazdığı "İstiklâl Marşı", Maarif Vekili (Millî Eğitim Bakanı) Hamdullah Suphi Tanrıöver tarafından, Mecliste ilk kez okundu.`,
            `1923 - Mustafa Kemal Paşa, TBMM'nin yeni çalışma dönemini açtı. Mustafa Kemal'in açılış konuşmasını mecliste dinleyiciler balkonundan izleyen Latife Hanım, meclise gelen ilk kadın oldu.`,
            `1926 - İtalyan yasaları esas alınarak hazırlanan yeni Türk Ceza Kanunu, TBMM'de kabul edildi.`,
            `2005 - Türkler: Bir İmparatorluğun Mimarları ve Mimar Sinan'ın Dehası adlı fotoğraf sergisi, Londra'da açıldı.`
        ]
    },
    {
        "tarih": "2 Mart",
        "olaylar": [
            `1918 - Rize'nin işgalden kurtuluşu.`,
            `1919 - İlk Komünist Enternasyonal, Moskova'da toplandı.,
            Vladimir Lenin'in ölümünden önceki son resimlerinden biri, 1923`,
            `1924 - Halk Fırkası'nın grup toplantısında, Şer'iye ve Evkaf Vekâleti'nin kaldırılmasına ve öğretimin birleştirilmesine karar verildi.`,
            `1961 - Türkiye, demokratik özgürlükler konusunda Avrupa Konseyi'ne güvence verdi.`,
            `1992 - Özbekistan ve Moldova, Birleşmiş Milletler üyesi oldu.`
        ]
    },
    {
        "tarih": "3 Mart",
        "olaylar": [
            `1878 - Osmanlı Devleti ile Rusya arasında, Ayastefanos Antlaşması imzalandı. Bulgaristan özerkliğini ilan etti.`,
            `1903 - Beşiktaş Jimnastik Kulübü kuruldu.`,
            `1924 - Halifeliğin kaldırılması ve Osmanlı Hanedanı mensuplarının Türkiye dışına çıkarılmasına ilişkin yasa kabul edildi. Tevhîd-i Tedrîsât Kanunu çıkarıldı. Şer'iye ve Evkaf ve Harbiye Bakanlıkları kaldırıldı. Diyanet İşleri Başkanlığı ve Vakıflar Genel Müdürlüğü kuruldu. Genelkurmay Başkanlığı oluşturuldu ve Hükûmet'ten ayrıldı.`,
            `1942 - Türk Ressamlar Cemiyeti İstanbul'da kuruldu.`,
            `1962 - Anayasa ve demokratik nizama karşı fiil ve davranışları önlemek amacıyla hazırlanan "Tedbirler Kanunu", Millet Meclisinde kabul edildi.`,
            `1994 - Öğretim Elemanları Sendikası kuruldu.`
        ]
    },
    {
        "tarih": "4 Mart",
        "olaylar": [
            `1656 - Vaka-i Vakvakiye: Düşük ayarlı para ve alınamayan maaşlar için ayaklanan askerler, IV. Mehmed'in onayıyla bazı saray ağalarını idam ettirdiler.`,
            `1923 - Mustafa Kemal Paşa'nın 17 Şubat'taki konuşmasıyla başlayan İzmir İktisat Kongresi sona erdi. Kongrede Misak-ı İktisadî kabul edildi.`,
            `1925 - Hükûmete olağanüstü yetkiler veren Takrir-i Sükun Kanunu, TBMM'de kabul edildi.`,
            `1929 - Takrir-i Sükun Kanunu yürürlükten kalktı.`
        ]
    },
    {
        "tarih": "5 Mart",
        "olaylar": [
            `1656 - Vaka-i Vakvakiye: Düşük ayarlı para ve alınamayan maaşlar için ayaklanan askerler, IV. Mehmed'in onayıyla bazı saray ağalarını idam ettirdiler.`,
            `1923 - Mustafa Kemal Paşa'nın 17 Şubat'taki konuşmasıyla başlayan İzmir İktisat Kongresi sona erdi. Kongrede Misak-ı İktisadî kabul edildi.`,
            `1925 - Hükûmete olağanüstü yetkiler veren Takrir-i Sükun Kanunu, TBMM'de kabul edildi.`,
            `1929 - Takrir-i Sükun Kanunu yürürlükten kalktı.`
        ]
    },
    {
        "tarih": "6 Mart",
        "olaylar": [
            `Bir şey bulamadım`
        ]
    },
    {
        "tarih": "7 Mart",
        "olaylar": [
            `1908 - Kabataş Erkek Lisesi, Padişah II. Abdülhamid'in fermanıyla “Kabataş Mekteb-i İdâdisi” adı altında kuruldu.`,
            `1919 - Fransızlar Kozan'ı işgal etti.`,
            `1921 - Artvin'in düşman işgalinden kurtuluşu.`,
            `1925 - İstiklal Mahkemeleri üyeleri, yapılan seçimlerle belirlendi. Denizli Milletvekili Mazhar Müfit Bey (Kansu) Mahkeme Başkanlığına, Karesi Milletvekili Süreyya Bey (Özgeevren) savcılığa getirildi. Urfa Milletvekili Ali Saip (Ursavaş) ve Kırşehir Milletvekili Lüfi Müfit beyler ise asil üyeliğe seçildi.`,
            `1927 - İstiklal Mahkemeleri'nin görevi fiilen sona erdi. Tamamen ortadan kalkması ancak 1948'de gerçekleşti.`,
            `1984 - KKTC bayrağı, Kuzey Kıbrıs Türk Cumhuriyeti Meclisi tarafından onaylandı.`
        ]
    },
    {
        "tarih": "8 Mart",
        "olaylar": [
            `1917 - Rusya'da Dünya Kadınlar Günü için başkent Petrograd'da kadınların sokaklara dökülmesi Çar II. Nikolay'ın tahttan inmesine neden olan Şubat Devrimi'nin (Jülyen takvimi'ne göre 23 Şubat) başlamasına yol açtı.`,
            `1919 - İngilizler Antep'te sıkı yönetim ilan ederek; şehirde ne kadar ateşli ve yaralayıcı silah varsa, 24 saat zarfında İngiliz İşgal Kuvvetleri Kumandanlığı'na teslim edilmesini istedi.`,
            `1931 - Kubilay Olayı'ndan sonra Menemen'de uygulanan sıkıyönetim kaldırıldı.`,
            `1933 - I. Beş Yıllık Kalkınma Planı kabul edildi.`,
            `1957 - Mısır, Süveyş Kanalı'nı tekrar açtı.`,
            `1982 - Türkiye Zihinsel Yetersiz Çocukları Yetiştirme ve Koruma Vakfı kuruldu.`,
            `1984 - Yunanistan, Türk savaş gemilerinin bir Yunan Destroyerine ateş açtığı iddiası ile Ankara'daki Büyük Elçisini geri çağırdı. Gelişmeler üzerine Türkiye de Atina Büyük Elçisine ülkeye dönme talimatı verdi.`
        ]
    },
    {
        "tarih": "9 Mart",
        "olaylar": [
            `1929 - İstanbul'da "Matbaacılık Mektebi" açıldı.`,
            `1930 - Atatürk, Antalya Müzesi'ni gezdikten sonra, Aspendos'ta incelemelerde bulundu.`,
            `1935 - Hitler, yeni bir hava kuvvetleri oluşturacağını ilan etti.`,
            `1952 - Amerika Birleşik Devletleri'ni Türk modası sardı. Amerikan moda dergileri, İstanbul Sarısı, Türk Kırmızısı, Helva Beji, Fes Rengi gibi renklerden geçilmez oldu. Bir firma, Harem adı altında kozmetikler piyasaya sürdü.`,
            `1957 - Türk ordusunun ilk kadın doktor subayı Sema Aran, teğmen rütbesiyle göreve başladı.`
        ]
    },
    {
        "tarih": "10 Mart",
        "olaylar": [
            `1919 - Ali Fethi Okyar İngilizler tarafından tutuklandı.`,
            `1919 - Osmanlı İmparatorluğu'nda Ahmed Tevfik Paşa hükûmeti düştü yerine Damat Ferit Paşa hükûmeti kuruldu.`,
            `1920 - Yunanistan başbakanı Venizelos'un da katıldığı toplantıda, İstanbul'un resmi işgaline ve Kuvâ-yi Milliye öncülerinin tutuklanmasına karar verildi.`
        ]
    },
    {
        "tarih": "11 Mart",
        "olaylar": [
            `1914 - Cemal Paşa, Bahriye Nazırlığına getirildi.`,
            `1918 - Bingöl'ün Karlıova, Erzurum'un Ilıca ve Rize'nin Fındıklı ilçelerinden Rus İmparatorluğu ve Batı Ermenistan Yönetimi'nin Ordu birlikleri çekildi.`,
            `1928 - İzmir'de Bucaspor kulübü kuruldu.`,
            `1947 - Türkiye, Dünya Bankası ve Uluslararası Para Fonu'na (IMF) katıldı.`,
            `1954 - Devlet Malzeme Ofisi kuruldu.`,
            `1958 - Türkiye, "Mısır, Suriye ve Yemen" devletlerinin oluşturduğu Birleşik Arap Cumhuriyeti'ni tanıdı.`
        ]
    },
    {
        "tarih": "12 Mart",
        "olaylar": [
            `1918 - Moskova, Rusya'nın başkenti oldu. Sankt-Peterburg başkent statüsünü son 215 yıldır sürdürüyordu.`,
            `1921 - Londra Konferansı sona erdi. İtilaf Devletleri barış önerdi.`,
            `1921 - Türk Milleti'nin İstiklâl Marşı, TBMM'de kabul edildi.`,
            `1999 - Varşova Paktı'nın eski üyeleri; Çekya, Macaristan ve Polonya, NATO'ya katıldı.`
        ]
    },
    {
        "tarih": "13 Mart",
        "olaylar": [
            `624 - Bedir Muharebesi gerçekleştirildi.`,
            `1840 - Osmanlı İmparatorluğu'nun resmî takvimi olarak Rumi Takvim, kullanılmaya başlandı.`,
            `1899 - Mustafa Kemal, '1283' yaka numarasıyla Kara Harp Okulu'nun piyade sınıfına yazıldı.`,
            `1919 - Kâzım Karabekir, Erzurum'da 15'inci Kolordu Komutanlığına atandı.`,
            `1926 - Mustafa Kemal Paşa'nın Falih Rıfkı Atay ve Mahmut (Soydan) beylere anlattığı hayat hikâyesi ve hatıralarının kısaltılmış şekli, Milliyet gazetesinde (Bugünkü Milliyet'le aynı değildir. 1935'ten itibaren Tan adıyla yayınlanan gazete) yayımlandı.`
        ]
    },
    {
        "tarih": "14 Mart",
        "olaylar": [
            `1489 - Kıbrıs Krallığı'nın Kraliçesi Catherine Cornaro, Ada'yı Venedik Cumhuriyeti'ne sattı.`,
            `1827 - II. Mahmut döneminde, Mekteb-i Tıbbiye-i Şahane kuruldu.`,
            `1919 - Tıp Bayramı ve Mekteb-i Tıbbiye-i Şahane'nin kuruluş yıldönümü; Hikmet Boran önderliğinde, tıp camiasının emperyalist güçlerin karşısına resmen çıkışı nedeniyle bugün Tıp Bayramı olarak kutlanmaktadır.`,
            `1939 - Hatay Meclisi, Türk lirası'nı resmi para olarak kabul etti.`,
            `1951 - Kore Savaşı: Birleşmiş Milletler Kuvvetleri, Seul'ü geri aldı.`,
            `1964 - Birleşmiş Milletler Güvenlik Konseyi, Barış Gücü'nün Kıbrıs'a gitmesini kararlaştırdı.`,
            `2000 - Naim Süleymanoğlu, Ankara'da devam ettiği idmanlarda koparmada 145 kg kaldırarak dünya rekoru kırdı.`
        ]
    },
    {
        "tarih": "15 Mart",
        "olaylar": [
            `1493 - Kristof Kolomb Yeni Dünya'ya yaptığı ilk seyahatten sonra İspanya'ya geri döndü.`,
            `1919 - Merzifon işgal edildi.`,
            `1928 - 15 Mart Olayı başladı. Japon İmparatorluğu'nda çok sayıda komüniste tutuklama kararı çıkarıldı.`,
            `1933 - Almanya'da Hitler, III. Reich'ı ilan etti.`,
            `1961 - Güney Afrika, Milletler Topluluğu'ndan ayrıldı.`
        ]
    },
    {
        "tarih": "16 Mart",
        "olaylar": [
            `MÖ 597 - Babil Sürgünü: Yehuda Krallığı'nın Babilliler tarafından fethedilmesi sonucu Yahudiler Babil'e sürüldü.`,
            `1920 - İtilaf Devletleri, İstanbul'u işgal etti.`,
            `1921 - SSCB, Ankara Hükûmeti'ni resmen tanıdı; Moskova Antlaşması imzalandı.`,
            `1924 - Tevhid-i Tedrisat Kanunu'nun (3 Mart) kabulünden sonra medreseler kapatıldı.`,
            `1935 - Adolf Hitler, Versay Antlaşması'nı iptal ettiğini açıkladı.`,
            `1964 - TBMM'de gizli yapılan olağanüstü toplantıda, Hükûmete gerektiğinde Kıbrıs'a müdahale yetkisi verildi.`
        ]
    },
    {
        "tarih": "17 Mart",
        "olaylar": [
            `1964 - TBMM'de gizli yapılan olağanüstü toplantıda, Hükûmete gerektiğinde Kıbrıs'a müdahale yetkisi verildi.`,
            `1915 - Çanakkale Savaşı: Kraliyet Donanması Komutanı Amiral Sackville Carden, görevinden ayrıldı.`,
            `1920 - İngilizler, Eskişehir ve Afyon'dan çekildiler.`,
            `1926 - "Demir Sanayinin Tesisine Dair Kanun" TBMM'de kabul edildi.`,
            `1944 - Varlık Vergisi'nin tasfiyesine ilişkin yasa yürürlüğe girdi.`,
            `1948 - Belçika, Fransa, Hollanda, Birleşik Krallık ve Lüksemburg arasında, 50 yıl süreli Brüksel Antlaşması imzalandı ve Batı Avrupa Birliği kuruldu.`
        ]
    },
    {
        "tarih": "18 Mart",
        "olaylar": [
            `1635 - IV. Murad komutasındaki Osmanlı Ordusu, Safevî Devleti'ne karşı Revan Seferine çıktı.`,
            `1799 - Napolyon, Osmanlı Devleti'nin yönetimindeki Akka kalesi önlerine geldi.`,
            `1915 - Çanakkale Deniz Harekâtı: Birleşik Donanma, Çanakkale Boğazı'nda ağır hasar gördü ve geri çekildi.`,
            `1918 - Karayazı, Narman ve Tekman'ın düşman işgalinden kurtuluşu.`,
            `1920 - Osmanlı Meclis-i Mebusanı, İstanbul'un işgali üzerine son toplantısını yaptı ve çalışmalarına ara verme kararı aldı.`
        ]
    },
    {
        "tarih": "19 Mart",
        "olaylar": [
            `1866 - Osmanlı Hükûmeti, Süveyş Kanalı'nın açılması konusunda izin verdi.`,
            `2006 - Azerbaycan Millî Direniş Teşkilatı kuruldu.`
        ]
    },
    {
        "tarih": "20 Mart",
        "olaylar": [
            `1916 - Albert Einstein, görecelik kuramını yayınladı.`,
            `2015 - Tam güneş tutulması gerçekleşti. Tam tutulma, Norveç'in kuzeybatısından, İzlanda'nın güneyinden ve Svalbard'tan gözlemlenebildi.`
        ]
    },
    {
        "tarih": "21 Mart",
        "olaylar": [
            `1590 - Osmanlı Devleti ve Safevî Devleti arasında, Ferhat Paşa Antlaşması imzalandı.`,
            `1779 - Osmanlı Devleti ile Rusya arasında, Aynalıkavak Antlaşması imzalandı.`,
            `1871 - Otto von Bismarck, Prens unvanını aldı.`,
            `1937 - Tunceli'de Dersim İsyanı başladı.`
        ]
    },
    {
        "tarih": "22 Mart",
        "olaylar": [
            `1737 - Osmanlı Devleti'nde Sadrazamlığa, Yeğen Mehmed Paşa'nın yerine Hacı İvazzade Mehmed Paşa getirildi.`,
            `1921 - Kurtuluş Savaşı: Kuvâ-yi Milliye güçleri, Fransız ordusu birliklerini Feke'yi terk etmek zorunda bıraktı.`,
            `1942 - II. Dünya Savaşı: İkinci Sirte Muharebesi (Kraliyet Donanması ile Regia Marina arasında meydana gelen deniz muharebesi)`,
            `1943 - Türkiye ile ABD arasında, karşılıklı radyo yayın servisi açıldı.`,
            `1945 - Mısır, Suriye, Lübnan, Ürdün, Suudi Arabistan, Irak ve Yemen, Kahire'de Arap Birliği'ni kurdular.`
        ]
    },
    {
        "tarih": "23 Mart",
        "olaylar": [
            `625 - Arabistan'da Müslümanlarla Kureyşler arasında, Uhud Savaşı başladı.`,
            `1855 - Dolmabahçe Camii ibadete açıldı.`,
            `1921 - II. İnönü Muharebesi başladı. Yunan birlikleri, Uşak ve Bursa üzerinden, Afyon ve Eskişehir'e doğru iki koldan taarruz başlattı.`,
            `1923 - Mübadele sonucu Selanik'ten gelen Türkler, Didim'e ulaştılar.`,
            `1931 - Türk çocuklarının ilk öğrenimlerini Türk okullarında yapmalarını zorunlu kılan kanun kabul edildi.`,
            `1982 - Uğur Mumcu, köşesinde, "Terör, öncelikle demokrasinin düşmanıdır. Bu açıdan bakarsak, «12 Eylül 1980 öncesinde Türkiye'de düşünce özgürlüğü vardır, Anayasa yürürlüktedir, demokrasi tastamam işlemektedir» diyemeyiz, dersek: inandırıcı olamayız." yazdı.`
        ]
    },
    {
        "tarih": "24 Mart",
        "olaylar": [
            `1394 - Timurlenk, Diyarbakır'ı işgal etti.`,
            `1923 - Mustafa Kemal Paşa, Time dergisine kapak oldu.`,
            `1926 - Türkiye'de petrol arama ve işletilmesinin devletçe yönetilmesini öngören kanun, TBMM'de kabul edildi.`,
            `2005 - Lale Devrimi: Kırgızistan cumhurbaşkanı Askar Akayev, hükûmet karşıtı kitlesel gösterilerin ardından görevden alındı ve ülkeden kaçtı.`
        ]
    },
    {
        "tarih": "25 Mart",
        "olaylar": [
            `1821 - Yunanistan, Osmanlı İmparatorluğu'ndan bağımsızlığını ilan etti.`,
            `1912 - Ahmet Ferit Tek, Türk Ocağı'nı kurdu.`,
            `1924 - Yunanistan'da cumhuriyet ilan edildi.`
        ]
    },
    {
        "tarih": "26 Mart",
        "olaylar": [
            `1913 - Edirne, Bulgar ve Sırp kuvvetlerince teslim alındı.`,
            `1915 - I. Dünya Savaşı: Birinci Gazze Muharebesi gerçekleşti.`,
            `1917 - I. Dünya Savaşı: Çanakkale Boğazı'nın Anadolu yakasında görev yapmak üzere Osmanlı 15. Kolordusu'nun teşkili.`,
            `1931 - Türkiye'de Ölçüler Kanunu'nun kabul edilmesiyle; okka, endaze gibi eski ölçülerin yerine gram, metre, litre gibi yeni ölçülerin kullanılması öngörüldü.`,
            `1942 - Naziler, Yahudileri Polonya'daki Auschwitz Kampı'na götürmeye başladı.`,
            `1971 - İstanbul'da iki kıta birleşti. Boğaz Köprüsü'nün 57'nci ünitesinin de yerine konulmasıyla kentin, Asya ve Avrupa yakaları birbirine bağlandı.`,
            `2000 - Rusya'da yapılan seçimler sonucunda, Vladimir Putin Başkan oldu.`,
            `2002 - TBMM Genel Kurulunda, AB'ye uyum çerçevesinde hazırlanan ve sekiz yasada değişiklik yapan dokuz maddelik yasa tasarısı kabul edildi.`
        ]
    },
    {
        "tarih": "27 Mart",
        "olaylar": [
            `1854 - Kırım Savaşı: Birleşik Krallık, Rus İmparatorluğuna savaş ilan etti.`,
            `2012 - Türkiye, Şam Büyükelçiliği'nin bütün faaliyetlerini askıya aldı.`,
            `2020 - Kuzey Makedonya, NATO'ya üye oldu.`,
        ]
    },
    {
        "tarih": "28 Mart",
        "olaylar": [
            `1854 - Kırım Savaşı: Fransa, Rusya'ya savaş açtı.`,
            `1930 - Türkiye Hükûmeti, yabancı ülkelerden Türkiye'deki şehirleri için Türkçe adlarını kullanmalarını resmen talep etti. Bu tarihten sonra Posta İdaresi, Angora veya Constatinople olarak adreslenmiş mektupları, Ankara ve İstanbul'a ulaştırmadı.`,
            `1947 - Birleşmiş Milletler Avrupa Ekonomik Komisyonu kuruldu.`,
            `1950 - Türkiye, İsrail'i resmen tanıdı.`,
            `1961 - Türkiye'de Anayasa'nın halkoyuna sunulması hakkındaki kanun kabul edildi.`
        ]
    },
    {
        "tarih": "29 Mart",
        "olaylar": [
            `1430 - Osmanlı Orduları, Selanik ve İyonya'yı fethetti.`
        ]
    },
    {
        "tarih": "30 Mart",
        "olaylar": [
            `1814 - Napolyon Savaşları: Koalisyon güçleri Paris'e girdi.`,
            `1856 - Kırım Savaşı; Rus İmparatorluğu, Osmanlı İmparatorluğu, Birleşik Krallık ve Fransa arasında Paris Antlaşması'nın imzalanmasıyla sona erdi.`,
            `1863 - Türkiye'de eğitim alanında açılan ilk sivil toplum kuruluşu olan Darüşşafaka kuruldu.`,
            `1998 - AB, Kıbrıs ile üyelik görüşmelerine başladı.`,
            `2005 - Kabahatler Yasa Tasarısı, TBMM'de kabul edildi.`
        ]
    },
    {
        "tarih": "31 Mart",
        "olaylar": [
            `1921 - İkinci İnönü Muharebesi'nde, Türk Ordusunun karşı taarruzu başladı.`,
                `1923 - Lozan Antlaşması: Londra'da toplanan İtilaf Devletleri temsilcileri, Türkiye'nin 8 Mart'taki notasına cevap vererek, Lozan'da kesintiye uğrayan görüşmeleri sürdürmeye çağırdılar.`,
                `1925 - Şeyh Said İsyanı'nın olduğu bölgede, Divan-ı Harb'in verdiği idam cezalarının, onay gerektirmeden yerine getirilmesi hakkındaki kanun kabul edildi.`
        ]
    },
    {
        "tarih": "1 Nisan",
        "olaylar": [
            `1873 - Namık Kemal'in Vatan Yahut Silistre adlı oyununun ilk temsili, İstanbul'daki Gedikpaşa Tiyatrosu'nda gerçekleşti.`,
            `1916 - Mustafa Kemal, Miralaylığa (Generalliğe) yükseltildi.`,
            `1921 - Metristepe'deki 10. Yunan Tümeni'nin geri çekilmesinin ardından taarruza geçen Ankara Hükümeti Ordusu, İkinci İnönü Muharebesi'ni kazandı.`,
            `1924 - Münih'teki darbe girişimi dolayısıyla Nazi lideri Adolf Hitler, 5 yıl hapis cezasına çarptırıldı. Fakat sadece 9 ay hapis kaldı ve bu sırada Mein Kampf (Kavgam) adlı kitabını yazdı.`,
            `1926 - Türkiye'de 30 Ağustos'un, "Zafer Bayramı" olarak kutlanması hakkındaki kanun kabul edildi.`,
            `1955 - Kıbrıs'ta Türk Mukavemet Teşkilatı faaliyete geçti.`,
            `1957 - Batı Almanya'da bilim insanları, nükleer silahlar üzerine çalışmayı reddetti.`,
            `1958 - Kıbrıs'ta EOKA'cılar Büyük Britanya'ya savaş ilan etti. EOKA'nın lideri Georgios Grivas, Türklere de gözdağı verdi.`,
            `1961 - Türkiye'de 27 Mayıs Darbesi'nden sonra faaliyetleri yasaklanan siyasi partilerin faaliyetleri kısmen serbest bırakıldı.`,
            `1975 - Bursa'da Uludağ, Elazığ'da Fırat, Samsun'da Ondokuz Mayıs ve Konya'da Selçuk Üniversitelerinin kurulmasına ilişkin kanun, TBMM'nde kabul edildi.`,
            `2005 - 24. Uluslararası İstanbul Film Festivali "Yaşam Boyu Başarı Ödülü", sinema sanatçısı Sophia Loren'e verildi.`,
            `2009 - Hırvatistan ve Arnavutluk NATO'ya katıldı.`,
        ]
    },
    {
        "tarih": "2 Nisan",
        "olaylar": [
            `1453 - Fatih Sultan Mehmet, İstanbul'u kuşatma harekâtına başladı.`,
            `1917 - ABD, fiilen I. Dünya Savaşı'na girdi.`,
            `1918 - Van ve Muradiye'den Rus İmparatorluğu ve Batı Ermenistan Yönetimi'ne ait Ordu Birlikleri'nin çekilişi.`,
            `1921 - Yunan Ordusu, 1 Nisan'ı 2 Nisan'a bağlayan gece Cabar Katliamı’nı gerçekleştirdi.`,
            `1948 - Yazar Sabahattin Ali, Bulgaristan sınırını geçmeye çalışırken, kılavuzu Ali Ertekin tarafından öldürüldü. 28 Aralık'ta tutuklanan Ertekin'in cezası indirime uğradı. Aynı yıl çıkan af yasasıyla da serbest bırakıldı.`,
            `1948 - Ankara'da Opera Binası, Cumhurbaşkanı İsmet İnönü'nün de katıldığı bir tören ve ardından Adnan Saygun'un "Kerem" operasıyla perdelerini açtı.`,
            `1950 - Bursa Cezaevi'nde bulunan şair Nâzım Hikmet'in affı için, tanınmış sanatçı, yazar ve şair gibi toplumun ileri gelenleri, toplu olarak imzaladıkları sembolik bir dilekçe ile İsmet İnönü'ye başvuru yaptı.`,
            `1971 - TÜSİAD kuruldu.`,
            `1976 - İlk Türk Turizm Kurultayı, İstanbul'da toplandı.`,
        ]
    },
    {
        "tarih": "3 Nisan",
        "olaylar": [
            `1930 - Türkiye'de kadınlara, belediye seçimlerinde seçme ve seçilme hakkı verildi.`,
            `1940 - II. Dünya Savaşı: Sovyetler Birliği, 22.000 Polonyalıyı katlederek Katyn Katliamı'nı gerçekleştirdi.`,
            `1948 - Amerika Birleşik Devletleri başkanı Harry Truman, ekonomik yardımları içeren Marshall Planı'nı imzaladı.`,
            `1963 - Türkiye'de 27 Mayıs, Hürriyet ve Anayasa Bayramı olarak ilan edildi.`,
            `1975 - İnönü Üniversitesi, Malatya'da kuruldu.`,
            `1992 - Ankara'nın Çankaya ilçesi Kaymakamlığı'na vekil olarak atanan Azize Düşer, Türkiye'nin ilk kadın kaymakamı oldu.`
        ]
    },
    {
        "tarih":"4 Nisan",
        "olaylar": [
            `1814 - Napolyon, tahtından ilk defa çekildi.`,
            `1913 - Osmanlı İmparatorluğu'nda Kadınlar Dünyası adlı dergi kuruldu.`,
            `1929 - İstanbul'da düzenlenen Yerli Malı Kullanma ve Koruma Toplantısı'nda gençlik, yerli malı kullanmaya yemin etti.`,
            `1949 - NATO kuruldu. Washington'da ABD, Belçika, Danimarka, Fransa, Lüksemburg, Norveç ve Portekiz, Kuzey Atlantik Paktı Örgütünün (NATO) kuruluşunu onaylayan antlaşmayı imzaladı.`,
            `1953 - Deniz Kuvvetleri'ne bağlı Dumlupınar denizaltısı, NATO tatbikatından dönerken Çanakkale Boğazı'nda İsveç gemisi Naboland'la çarpışarak battı; 81 Türk denizcisinin öldüğü bugün, "Deniz Şehitlerini Anma Günü" ilan edildi.`,
            `1968 - Martin Luther King Jr., Memphis'te öldürüldü.`,
        ]
    },
    {
        "tarih":"5 Nisan",
        "olaylar": [
            `1453 - Fatih Sultan Mehmet'in donanması, İstanbul sularına geldi.`,
            `1909 - Osmanlı İmparatorluğu'nda İttihad-ı Muhammedi Fırkası kuruldu.`,
            `1925 - Kahramanmaraş, İstiklal Madalyası aldı.`,
            `1992 - Bosna-Hersek Hükûmeti bağımsızlığını ilan etti.`,
        ]
    },
    {
        "tarih":"6 Nisan",
        "olaylar": [
            `1326 - Orhan Bey, kuşatma altında tutulan Bursa'yı Bizanslılardan aldı. Bursa, 1326-1361 arasında Osmanlılara başkentlik yaptı.`,
            `1453 - İstanbul, Fatih Sultan Mehmet tarafından kuşatıldı.`,
            `1872 - Pertevniyal Lisesi, "Mahmudiye Rüştiyesi" adı altında eğitim-öğretime başladı.`,
            `1896 - İlk modern Olimpiyat Oyunları Atina'da başladı.`,
            `1909 - Serbesti gazetesinde, İttihat ve Terakki Cemiyeti karşıtı yazılar yazan gazeteci Hasan Fehmi Bey öldürüldü.`,
            `1914 - Askerî Yargıtay kuruldu.`,
            `1917 - ABD, Almanya'ya savaş ilan etti ve Birinci Dünya Savaşı'na müttefiklerin yanında girdiğini açıkladı.`,
            `1920 - Anadolu Ajansı kuruldu.`,
            `1953 - Türkiye Genç Millî Futbol Takımı dünya üçüncüsü oldu.`,
            `1956 - Hayat mecmuası'nın ilk sayısı çıktı.`,
        ]
    },
    {
        "tarih":"7 Nisan",
        "olaylar": [
            `451 - Hun İmparatoru Attila, Franklar'ın elinde buluna Fransa'nın kuzeyindeki Metz şehrini ele geçirdi. Germen müttefikleriyle birleşerek; Reims, Mainz, Strazburg, Köln, Worms ve Trier kentleri yağmalandı.`,
            `1712 - New York'ta köleler isyan başlattı.`,
            `1789 - Sultan I. Abdülhamid öldü, III. Selim tahta çıktı.`,
            `1939 - II. Dünya Savaşı: İtalya, Arnavutluk'u işgal etti.`,
            `1943 - Batı Ukrayna'nın Terebovlia kentinde Naziler, 1100 Yahudiyi öldürüp toplu mezara gömdüler.`,
            `1948 - Dünya Sağlık Örgütü (WHO), Birleşmiş Milletler'e bağlı olarak kuruldu.`,
            `2019 - Atatürk Havalimanı yolculu seferlere kapatıldı. İstanbul Havalimanı tam kapasite ile seferlerine başladı.`
        ]
    },
    {
        "tarih":"8 Nisan",
        "olaylar": [
            `876 - Deyrülâkül Muharebesi : Muvaffak liderliğindeki Abbasi kuvvetleri, Dicle Nehri'ndeki Saffârî istilasını durdurdu. Emir Yakûb bin Leys es-Saffâr, Abbâsîler'in başkenti Bağdat'ı ele geçirmeye çalışır, ancak ordusuyla birlikte geri çekilmek zorunda kalır.`,
            `1513 - İspanyol Konkistador Juan Ponce de León, Florida'yı keşfetti ve bu bölgeyi İspanya toprağı olarak ilan etti.`,
            `1730 - New York'ta ilk sinagog hizmete girdi.`,
            `1783 - 1441'den beri varlığını sürdüren Kırım Hanlığı, II. Katerina'nın emriyle Rus İmparatorluğu tarafından ilhak edildi.`,
            `1820 - Milo Venüsü heykeli, bir Ege adası olan Melos'ta bulundu.`,
            `1830 - Avrupa ülkeleri, Osmanlı İmparatorluğu'ndan Yunan Devleti'nin bağımsızlığını onaylamasını istedi.`,
            `1869 - 2. Darülfünun binasının inşası tamamlandı ve Darülfünun-ı Osmani kuruldu.`,
            `1920 - Salih Paşa'nın (Salih Hulusi Kezrak) istifası ile kurulan Damat Ferit Paşa Kabinesi'nin tanınmayacağı yolunda, Heyet-i Temsiliye genelgesi yayınlandı.`,
            `1923 - Mustafa Kemal 9 Umde'yi açıkladı. Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti'nin seçim bildirisi niteliğindeki bu ilkelerin başında, 'Egemenlik Ulusundur' maddesi gelmekteydi.`,
            `1924 - Şeriye mahkemelerini kaldıran yeni Mahkemeler Teşkilatı Kanunu TBMM'de kabul edildi. Kadıların yerini hakimler aldı.`,
            `1946 - Milletler Cemiyeti son oturumunu yaptı. Bundan sonra örgütün adı Birleşmiş Milletler olacaktır.`,
            `1992 - Uluslararası Atatürk Barış Ödülü'nün Güney Afrikalı lider Nelson Mandela'ya verilmesi kararlaştırıldı. Mandela, Türk Hükûmetine yönelik insan hakları ihlali suçlamaları nedeniyle ödülü kabul etmedi.`
        ]
    },
    {
        "tarih":"9 Nisan",
        "olaylar": [
            `1860 - Dünyada ilk kez bir ses kayıt altına alınabildi.`,
            `1932 - İlk Türk kadın hakim Mürüvvet Hanım, Adana'da göreve başladı.`,
            `1940 - II. Dünya Savaşı: Almanya; Danimarka ve Norveç istilasına başladı.`,
            `1982 - Anıtkabir Müdürlüğü, Genelkurmay Başkanlığına bağlı Anıtkabir Komutanlığına bağlandı.`
        ]
    },
    {
        "tarih":"10 Nisan",
        "olaylar": [
            `1845 - Türk Polis Teşkilatı kuruldu.`,
            `1928 - TBMM, Anayasa'nın ikinci maddesini değiştirdi. Söz konusu maddeden, "Türkiye Devleti'nin dini İslam'dır" bölümü çıkarıldı. Milletvekilleri ve Cumhurbaşkanı, yemin ederken "Vallahi" yerine "Namusum üzerine söz veririm" diyecek.`
        ]
    },
    {
        "tarih":"11 Nisan",
        "olaylar": [
            `1919 - Uluslararası Çalışma Örgütü (ILO) kuruldu.`,
            `1919 - 15. Kolordu Komutanlığına atanan Kâzım Karabekir Paşa, Mustafa Kemal Paşa'yı Şişli'deki evinde ziyaret etti.`,
            `1920 - Damat Ferid, Kuvâ-yi Milliye aleyhinde bildiri yayınladı.`,
            `1920 - Meclis-i Mebûsan kapatıldı.`,
            `1930 - Sultanahmet'te büyük kadın mitingi yapıldı. Türk Kadınlar Birliği'nin düzenlediği mitingde, "kadınlara seçme ve seçilme hakkı tanınması" kutlandı.`,
            `1997 - Atatürk Uluslararası Barış Ödülü'nün, Bosna'da görev yapan Türk Barış Gücü'ne verilmesi kararlaştırıldı.`
        ]
    },
    {
        "tarih":"12 Nisan",
        "olaylar": [
            `1931 - Türk Tarihi Tetkik Cemiyeti kuruldu.`,
            `1939 - Nazi Almanyası Propaganda Bakanı Goebbels İstanbul'a ziyarette bulundu.`,
            `1941 - II. Dünya Savaşı: Alman 2. Ordusu, Yugoslavya'nın başkenti Belgrad'a girdi.`
        ]
    },
    {
        "tarih":"13 Nisan",
        "olaylar": [
            `1204 - Dördüncü Haçlı Seferi'nde Kostantinopolis'in yağmalanması.`,
            `1517 - Son Memlük sultanı II. Tomanbay, I. Selim tarafından Kahire’de idam edildi.`,
            `1909 - Osmanlı İmparatorluğu'nda 31 Mart Olayı meydana geldi.`,
            `1949 - Türk Kadınlar Birliği, Cumhurbaşkanı İsmet İnönü'nün eşi Mevhibe İnönü'nün Onursal Başkanlığında kuruldu.`
        ]
    },
    {
        "tarih":"14 Nisan",
        "olaylar": [
            `1900 - Paris Uluslararası Fuarı açıldı. Fuarda, Osmanlı Pavyonu da yer aldı.`,
            `1963 - Türkiye Spor Yazarları ve Spor Kulübü Derneği kuruldu.`,
            `1979 - Türkiye'de 12 Eylül 1980 Darbesi'ne Giden Süreç (1979- 12 Eylül 1980): Beykoz'da 2 polis ve Şekerbank'ın eski müdürü öldürüldü. Öldürülen müdürün baş ucunda, "Beklenen gün geldi. Bir halk düşmanı daha yok oldu. Ya özgürlük ya ölüm, ihtilal yolu Çayanların yolu." yazılı bir kâğıt bulundu.`
        ]
    },
    {
        "tarih":"15 Nisan",
        "olaylar": [
            `1923 - Birinci Türkiye Büyük Millet Meclisi, yeni seçimlerin yapılması kararını alarak, son oturumunu gerçekleştirdi.`,
            `1925 - Doğu'da isyan başlatan Şeyh Said yakalandı.`,
            `1929 - İstanbul'da terzilik mektebi açıldı.`,
            `1929 - Ankara Etnografya Müzesi'nde Birinci Genç Ressamlar Sergisi açıldı. Nurullah Berk, Cevat Dereli ve Refik Fazıl Epikman gibi sanatçıların eserleri sergilendi.`
        ]
    },
    {
        "tarih":"16 Nisan",
        "olaylar": [
            `1945 - Kızıl Ordu Berlin'e girdi ve Berlin Muharebesi başladı.`,
            `1948 - Avrupa Ekonomik İşbirliği Örgütü kuruldu.`
        ]
    },
    {
        "tarih":"17 Nisan",
        "olaylar": [
            `1453 - Fatih Sultan Mehmet, İstanbul adalarını fethetti.`,
            `1897 - Osmanlı İmparatorluğu ile Yunanistan Krallığı arasında, "Otuz Gün Savaşı" olarak da adlandırılan savaş başladı.`,
            `1954 - Çanakkale Anıtı'nın temeli atıldı.`,
        ]
    },
    {
        "tarih":"18 Nisan",
        "olaylar": [
            `1916 - I. Dünya Savaşı: Rus İmparatorluğu, Trabzon Harekâtı'nı başlatarak Trabzon'u işgal etti.`,
            `1920 - İstanbul Hükûmeti, Millî Mücadele'yi yürüten Kuvâ-yi Milliye'ye karşı, Kuva-yi İnzibatiye'yi kurdu. Bu kuvvetler, Adapazarı dolaylarında çıkarılan isyanı destekledi; ancak Ankara Hükûmeti'nin düzenli birliklerine yenildi.`,
            `1936 - İzmit Kağıt Fabrikası'nda, ilk kâğıt imal edildi.`,
            `1939 - Harp Mükellefiyeti Kanunu çıktı.`,
            `1951 - Paris Antlaşması'nın imzalanmasıyla, günümüz Avrupa Birliği'nin temellerini oluşturacak ilk adım olan, Avrupa Kömür ve Çelik Topluluğu kurulmuştur.`,
            `1960 - CHP'yi ve basını soruşturmak üzere TBMM'de Tahkikat Komisyonu kuruldu. İnönü, "bu demokratik rejim istikametinden ayrılıp onu baskı rejimi haline götürmek tehlikeli bir şeydir. Bu yolda devam ederseniz ben de sizi kurtaramam" dedi.`,
        ]
    },
    {
        "tarih":"19 Nisan",
        "olaylar": [
            `1926 - Türk karasularında her türlü denizcilik işlerini Türk vatandaşlarına tahsis eden ve yabancıların kabotaj hakkına son veren Kabotaj Kanunu kabul edildi.`,
            `1943 - II. Dünya Savaşı: Alman askerleri Yahudileri toplamak için Varşova Gettosu'na girdi.`
        ]
    },
    {
        "tarih":"20 Nisan",
        "olaylar": [
            `1924 - Türkiye'de 1924 Anayasası yürürlüğe girdi.`,
            `1924 - Bilecik il oldu.`,
            `1994 - Türkiye'de Radyo-Televizyon Üst Kurulu kuruldu.`,
            `2005 - Turgut Özakman'ın, Türk Kurtuluş Savaşı'nı bir roman kurgusu içinde anlatan Şu Çılgın Türkler kitabı yayımlandı.`,
        ]
    },
    {
        "tarih":"21 Nisan",
        "olaylar": [
            `1821 - Sadrazam Benderli Ali Paşa görevinden ayrıldı ve 30 Nisan'da idam edildi. Benderli Ali Paşa, Padişah emri ile idam edildiği bilinen son Sadrazamdı.`,
            `1408 - Karakoyunlular ile Timurlular arasında 21 Nisan'da Serrud Muharebesi oldu.`,
            `1920 - Mustafa Kemal Paşa, Meclis'in 23 Nisan 1920 günü açılacağını bildiren bir genelge yayımladı.`,
            `1964 - Yunanistan, Kıbrıs'taki askerî birliğini, Birleşmiş Milletler Barış Gücü emrine vermeyi kabul etti.`,
            `2005 - TBMM Başkanlık Divanı, TBMM 85. Yıl Milli Egemenlik Onur Ödülü'nün Prof. Dr. Gazi Yaşargil'e verilmesini kararlaştırdı.`
        ]
    },
    {
        "tarih":"22 Nisan",
        "olaylar": [
            `1915 - I. Dünya Savaşı: İkinci Ypres Muharebesi başladı.`,
            `1920 - İtilaf Devletleri, Osmanlı Hükûmetini Paris'te toplanacak olan Barış Konferansı'na davet etti.`,
            `1924 - Türkiye Cumhuriyeti Devlet Demiryolları Genel Müdürlüğü kuruldu. Anadolu demiryollarının devletleştirilmesine ilişkin yasa benimsendi.`,
            `1933 - Türkiye ile Osmanlı Düyunu Umumiye Hamilleri arasında imzalanan antlaşmayla Osmanlı İmparatorluğu borçlarının tasfiyesi sağlandı.`,
            `1941 - II. Dünya Savaşı: Yunanistan, Mihver devletleri tarafından işgal edildi ve teslim oldu.`,
            `1947 - Türkiye'ye yabancı sermaye girişine izin veren yasa kabul edildi.`,
            `1962 - Anayasa Mahkemesi ve Yüksek Hakimler Kurulunun kurulmasına karar verildi.`,
            `1962 - Millî Savunma Bakanlığı, aralarında Yarbay Talat Turhan'ın da bulunduğu beş subayın, "Genç Komünistler Ordusu" imzalı bildiri dağıttıkları gerekçesiyle gözaltına alındığını açıkladı.`,
            `1970 - Dünya Günü ilk kez kutlandı.`,
            `1970 - Türkiye Gazetesi kuruldu.`,
            `1983 - Batı Almanya dergisi Der Stern, Hitler'in Günlükleri'ni gün ışığına çıkardığını ileri sürdü ve bazı bölümlerini yayımladı. Sonradan bu günlüklerin sahte olduğu ortaya çıktı.`,
            `1985 - Sabah Gazetesi kuruldu.`,
            `1987 - Dil Derneği kuruldu.`,
        ]
    },
    {
        "tarih":"23 Nisan",
        "olaylar": [
            `1906 - Rusya'da Çar II. Nikolay, "Temel Yasalar" olarak bilinen anayasayı ilan etti.`,
            `1920 - Türkiye Büyük Millet Meclisi açıldı ve ilk kez toplandı.`,
            `1923 - Lozan Barış Konferansı 23 Nisan 1923'te ikinci defa toplanarak, taraflar olan TBMM temsilcileriyle Birleşik Krallık, Fransa, İtalya, Japonya, Yunanistan, Romanya, Bulgaristan, Portekiz, Belçika, SSCB ve Yugoslavya temsilcileri aracılığıyla 24 Temmuz 1923'te sonuçlandırılmıştır.`,
            `1906 - Rusya'da Çar II. Nikolay, "Temel Yasalar" olarak bilinen anayasayı ilan etti.`,
            `1920 - Türkiye Büyük Millet Meclisi açıldı ve ilk kez toplandı.`,
            `1923 - Lozan Barış Konferansı 23 Nisan 1923'te ikinci defa toplanarak, taraflar olan TBMM temsilcileriyle Birleşik Krallık, Fransa, İtalya, Japonya, Yunanistan, Romanya, Bulgaristan, Portekiz, Belçika, SSCB ve Yugoslavya temsilcileri aracılığıyla 24 Temmuz 1923'te sonuçlandırılmıştır.`,
            `1979 - Türkiye'nin yedi ülke ile telefon görüşmesini sağlayacak olan uyduyla haberleşme istasyonu hizmete girdi.`,
            `1979 - 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı, UNESCO'nun 1979 yılını "Çocuk Yılı" olarak duyurmasının ardından, TRT tarafından "TRT Uluslararası 23 Nisan Çocuk Şenliği" adı ile ilk kez kutlandı.`,
            `1994 - Gagavuzya kuruldu.`,
            `2003 - Kuzey Kıbrıs Türk Cumhuriyeti Bakanlar Kurulunun aldığı karar doğrultusunda; Kuzey Kıbrıs ile Kıbrıs Cumhuriyeti arasında serbest geçişler başladı.`
        ]
    },
    {
        "tarih":"24 Nisan",
        "olaylar": [
            `1512 - I. Selim, Osmanlı İmparatorluğu tahtına çıktı.`,
            `1513 - Yenişehir Muharebesi, I. Selim ile ağabeyi Ahmet Sultan arasında gerçekleşen taht kavgasının sonu.`,
            `1800 - Dünyanın en büyük kütüphanesi olan Kongre Kütüphanesi kuruldu.`,
            `1830 - Osmanlı Hükûmeti, Yunan Devleti'nin varlığını resmen kabul etti.`,
            `1909 - İstanbul'a gelen Hareket Ordusu, 31 Mart Ayaklanması'nı bastırdı.`,
            `1920 - Mustafa Kemal, Büyük Millet Meclisi Reisliği'ne seçildi.`,
            `1939 - Hatay Cumhurbaşkanı Tayfur Sökmen, Atatürk'ün ve İnönü'nün bir görevlisi olduğunu belirten bir konuşma yaptı.`,
            `2004 - Kıbrıs'ta Annan Planı için referandum yapıldı. Türk tarafının kabul ettiği plan, Rum tarafının reddetmesi sonucu hayata geçirilemedi.`,
        ]
    },
    {
        "tarih":"25 Nisan",
        "olaylar": [
            `1859 - Kızıldeniz ile Akdeniz'i birbirine bağlayacak olan Süveyş Kanalı'nın kazılmasına, Mısır'ın Port Said kentinde başlandı.`,
            `1915 - İngiliz - Fransız kuvvetleri, Çanakkale'ye çıkarma harekâtı başlattı. Kara savaşları başladı.`,
            `1915 - Seddülbahir Muharebeleri başladı.`,
            `1915 - Arıburnu Muharebeleri başladı.`,
            `1926 - İran'da Rıza Han Pehlevi, kendisini "Şah" ilan etti.`,
            `1962 - Anayasa Mahkemesi kuruldu.`,
        ]
    },
    {
        "tarih":"26 Nisan",
        "olaylar": [
            `1870 - Osmanlı Devleti’nde, Dârülmuallimât (Kız Öğretmen Okulu) açıldı. Sınavla 32 kız öğrenci alındı.`,
            `1912 - İlk defa, bir Osmanlı pilotu olan Fesa Bey (Evrensev), Osmanlı tayyaresi ile Türk toprakları üzerinde uçtu.`,
            `1961 - Yüksek Seçim Kurulu oluşturuldu.`,
        ]
    },
    {
        "tarih":"27 Nisan",
        "olaylar": [
            `1640 - Evliya Çelebi'nin seyahat programı, Bursa-İstanbul-İzmit güzergâhı ile başladı.`,
            `1749 - Handel'in Ateş Oyunları Müziği ilk kez Londra Green Park'ta seslendirildi.`,
            `1909 - II. Abdülhamid tahttan indirildi; yerine V. Mehmed tahta geçti.`,
            `1938 - Türkiye ile Yunanistan arasında dostluk antlaşması imzalandı.`,
            `1941 - II. Dünya Savaşı: Alman birlikleri Atina'ya girdi.`,
        ]
    },
    {
        "tarih":"28 Nisan",
        "olaylar": [
            `1915 - Birinci Kirte Muharebesi başladı.`,
            `1916 - Kût'ül-Amâre bölgesinde 5 aydır kuşatma altında bulunan İngiliz birlikleri teslim oldular.`,
            `1920 - İstanbul Hükümeti, Anadolu'da saltanatı devam ettirmek amacıyla Anadolu Fevkalade Müfettiş-i Umumiliği'ni yayınladı.`,
            `1920 - Azerbaycan, Sovyetler Birliği'ne katıldı. (1991'de tekrar ayrılmıştır.)`,
            `1935 - Hilal-i Ahmer Cemiyeti'nin adı, Kızılay olarak değiştirildi.`,
        ]
    },
    {
        "tarih":"29 Nisan",
        "olaylar": [
            `1916 - Kut'ül Ammare Kuşatmasında, Halil Kut Paşa komutasındaki 6. Ordu, Irak cephesinde Kut'ül Ammare kasabasında İngiliz Mezopotamya ordusunu teslim aldı.`,
            `1920 - TBMM, Hıyanet-i Vataniye Kanunu'nu onayladı.`,
            `1945 - Sovyet tankları Berlin'e girdi.`,
        ]
    },
    {
        "tarih":"30 Nisan",
        "olaylar": [
            `1919 - Mustafa Kemal Paşa, Dokuzuncu Ordu Müfettişliğine atandı.`,
            `1920 - Paris'te toplanacak Barış Konferansı ile ilgili Ankara'da toplanan Büyük Millet Meclisi, taraf ülkelerin Dış İşleri Bakanlıklarına gönderdiği bir yazıyla, İstanbul'dan ayrı bir Hükûmetin kurulduğunu bildirdi.`,
            `1959 - İsmet İnönü'nün Uşak gezisinde olaylar çıktı. Polis, halkı dağıtmak için göz yaşartıcı bomba kullandı.`,
            `1960 - İstanbul'da bir gün sokağa çıkma yasağı ilan edildi.`,
        ]
    },
    {
        "tarih":"1 Mayıs",
        "olaylar": [
            `1707 - İngiltere, Galler ve İskoçya; Büyük Britanya olarak birleşti.`,
            `1776 - İlluminati, Adam Weishaupt tarafından kuruldu.`,
            `1889 - 1 Mayıs, işçilerin ortak bayramı olarak kabul edildi.`,
            `1906 - Türkiye'de günümüzde bilinen ilk 1 Mayıs İzmir'de kutlandı.`,
            `1909 - Üsküp'te 1 Mayıs etkinlikleri düzenlendi.`,
            `1909 - Selanik'te Selanik Sosyalist İşçi Federasyonu tarafından örgütlenen 1 Mayıs etkinlikleri düzenlendi.`,
            `1912 - İstanbul'da Osmanlı Sosyalist Fırkası tarafından 1 Mayıs etkinliği düzenlendi.`,
            `1925 - Kıbrıs, Birleşik Krallık kolonisi oldu.`,
            `1925 - Takrir-i Sükun Kanunu'yla her türlü gösteri ve yürüyüş yasaklanınca, 1 Mayıs da kitlesel olarak kutlanamaz hale geldi.`,
            `1927 - Adolf Hitler yönetimindeki Nazi Partisi, Berlin'de ilk kez miting yaptı.`,
            `1939 - Türk Medeni Kanunu Hatay'da yürürlüğe girdi.`,
        ]
    },
    {
        "tarih":"2 Mayıs",
        "olaylar": [
            `1885 - Anadolu'nun ilk lisesi (idadisi) olan Kastamonu Abdurrahmanpaşa Lisesinin temeli törenle atıldı.`,
            `1920 - Maarif Vekâleti (Türkiye Cumhuriyeti Millî Eğitim Bakanlığı) kuruldu. (23 Nisan 1920'de TBMM açıldıktan sonra Hükûmetin, 2 Mayıs 1920 tarih ve 3 sayılı yasası ile İcra Vekilleri Heyetinin (Bakanlar Kurulu) on bir vekâletinden biri olarak "Maarif Vekâleti" örgütlenmiştir.)`
        ]
    },
    {
        "tarih":"3 Mayıs",
        "olaylar": [
            `1907 - Fenerbahçe Spor Kulübü kuruldu.`,
            `1915 - Arıburnu Zaferi kazanıldı.`,
            `1920 - TBMM'nin ilk Bakanlar Kurulu oluşturuldu. İcra Vekilleri Heyeti, Mustafa Kemal Başkanlığında ilk toplantısını yaptı.`,
            `1920 - Türk Silahlı Kuvvetleri kuruldu.`,
            `1934 - Kayseri Uçak Fabrikası'nda yapılan ilk parti altı avcı uçağından biri, 50 dakikalık bir uçuşla, Kayseri'den Ankara'ya geldi.`,
            `1935 - Türk Hava Kurumu bünyesinde, "Türkkuşu" adıyla kurulan uçuş okulu faaliyete geçti.`,
            `1944 - 3 Mayıs Olayları anıldı ve Türkçülük Bayramı ilan edildi.`,
            `1986 - Çernobil nükleer kazası sonrası oluşan radyoaktif bulutların, Türkiye'ye de ulaştığı ve bazı bölgelerde radyasyonun yedi kat arttığı açıklandı.`,
            `1993 - Birleşmiş Milletler, 20 Aralık 1993'te, her yıl 3 Mayıs'ın, Dünya Basın Özgürlüğü Günü olarak kutlanmasını kararlaştırdı.`,
        ]
    },
    {
        "tarih":"4 Mayıs",
        "olaylar": [
            `1931 - Mustafa Kemal Atatürk, üçüncü kez Cumhurbaşkanı seçildi.`,
            `1942 - II. Dünya Savaşı: Port Moresby'ye doğru ilerleyen Japon kuvvetlerinin püskürtülmesiyle sonuçlanan Mercan Denizi Muharebesi başladı.`,
            `1949 - İstiklal Mahkemeleri'ne ilişkin yasa yürürlükten kaldırıldı.`,
            `1997 - Eurovision Şarkı Yarışması'nda, Şebnem Paker'in seslendirdiği Dinle adlı şarkı üçüncü oldu.`,
        ]
    },
    {
        "tarih":"5 Mayıs",
        "olaylar": [
            `553 - İkinci İstanbul Konsili başladı.`,
            `1260 - Kubilay Han, Moğol İmparatoru oldu.`,
            `1762 - Rusya ve Prusya, aralarındaki Yedi Yıl Savaşı'nı sona erdiren Sankt-Peterburg antlaşması imzaladılar.`,
            `1925 - Atatürk Orman Çiftliği'nin kuruluş çalışmalarına başlandı.`,
            `1925 - Cumhurbaşkanı Mustafa Kemal'e suikast girişimi gerekçesiyle ölüm cezasına çarptırılan Manok Manukyan idam edildi.`,
            `1955 - Türk Kadınlar Birliği'nin girişimiyle, her yıl Mayıs ayının ikinci Pazar gününün Anneler Günü olarak kutlanmasına karar verildi. TKB, Nene Hatun'u yılın annesi seçti. Anneler Günü'ne ilişkin ilk resmi öneri, 1872'de Amerikalı Julia Howe'dan geldi.`,
            `1994 - Naim Süleymanoğlu, Çekya'da yapılan Avrupa Halter Şampiyonası'nda, 64 kiloda dünya rekoru kırarak üç altın madalya aldı.`,
        ]
    },
    {
        "tarih":"6 Mayıs",
        "olaylar": [
            `1536 - İngiltere Kralı VIII. Henry, ülkedeki bütün kiliselerde İngilizce İncillerin bulundurulmasını emretti.`,
            `1889 - Osmanlı Devleti'nin de katıldığı, Uluslararası Paris Fuarı başladı.`,
            `1936 - Ankara'da Türkiye'nin ilk konservatuvarı olan Ankara Devlet Konservatuvarı kuruldu.`,
        ]
    },
    {
        "tarih":"7 Mayıs",
        "olaylar": [
            `1830 - Osmanlı-Amerikan Ticaret ve Dostluk Antlaşması imzalandı.`,
            `1832 - Yunanistan Krallığı kuruldu.`,
            `1921 - Türkiye Muallimler ve Muallim Cemiyetleri Birliği kuruldu.`,
            `1924 - İstanbul'da Cumhuriyet gazetesi yayımlanmaya başladı.`,
        ]
    },
    {
        "tarih":"8 Mayıs",
        "olaylar": [
            `1867 - Osmanlı İmparatorluğu'nda Dilâver Paşa Nizamnamesi ilan edildi.`,
            `1884 - 1876 Anayasası'nın mimarı Mithat Paşa, Sultan Abdülaziz'i öldürttüğü iddiasıyla yargılanmış ve Taif'e sürülmüştü. Boğularak öldürülen Mithat Paşa, Taif'te gömüldü.`,
            `1945 - Alman General Wilhelm Keitel, Sovyet General Jukov'a teslim oldu. Almanya savaşı kaybetti. Avrupa'da savaşın bittiği bu güne "Zafer Günü" adı verildi.`,
            `1952 - Türkiye ve Orta Doğu Amme İdaresi Enstitüsü kuruldu.`,
            `1954 - Asya Futbol Konfederasyonu'nun oluşması.`,
            `1961 - Uluslararası Af Örgütü kuruldu.`,
        ]
    },
    {
        "tarih":"9 Mayıs",
        "olaylar": [
            `1485 - Davutpaşa Lisesi, dönemin Sadrazamı Davut Paşa tarafından 'Mekteb-i Sübyan' adıyla kuruldu. Okul, 1847'de Rüşdiye Mektebi'ne dönüştü.`,
            `1935 - Cumhuriyet Halk Fırkası Dördüncü Büyük Kurultayı toplandı. Kurultayda, "fırka" yerine "parti" sözcüğü benimsendi. Altı Ok daha ayrıntılı bir şekilde ele alındı. "Partinin güttüğü bütün bu esaslar Kemalizm prensipleridir" denilerek; Kemalizm, ilk kez resmi olarak tanımlandı.`,
            `1945 - Zafer Günü, II. Dünya Savaşı'nın sonunda Nazi Almanyası'nın kayıtsız şartsız teslimiyetini imzaladığı, Sovyetler Birliği tarafından ilan edilen ve kutlanan gün.`,
            `1955 - Anneler Günü, Türkiye'de ilk kez kutlandı.`,
            `1955 - Batı Almanya, NATO'ya katıldı.`,
            `1971 - Darüşşafaka Lisesi'ne kız öğrenci alınması kararlaştırıldı.`,
        ]
    },
    {
        "tarih":"10 Mayıs",
        "olaylar": [
            `1556 - Marmara denizi depremi meydana geldi.`,
            `1868 - Bugünkü adı Danıştay olan Şura-yı Devlet kuruldu.`,
            `1872 - Victoria Woodhull, ABD Başkanlığı'na aday olan ilk kadın oldu.`,
            `1876 - Osmanlı Devleti'nde, basına sansür uygulaması başlatıldı.`,
            `1921 - Mustafa Kemal Paşa, TBMM'de Müdafaayı Hukuk Grubu'nu kurdu.`,
            `1961 - TBMM, nispi temsil seçim sistemini kabul etti.`,
        ]
    },
    {
        "tarih":"11 Mayıs",
        "olaylar": [
            `1927 - Akademi Ödülleri'ni dağıtan Sinema Sanatları ve Bilimleri Akademisi kuruldu.`,
            `1938 - Atatürk, çiftliklerini ve taşınmazlarını ulusa bağışladı.`,
            `1939 - II. Dünya Savaşı sırasında Moğolistan - Mançurya sınırında Halhin Gol Muharebesi başladı.`,
            `1946 - Cumhurbaşkanı İsmet İnönü'nün CHP Tüzüğü'nde yer alan "Millî Şef" ve "Değişmez Genel Başkan" unvanları kaldırıldı.`,
        ]
    },
    {
        "tarih":"12 Mayıs",
        "olaylar": [
            `1820 - Modern hemşireliğin kurucusu, Kırım Savaşı sırasında Üsküdar'daki Selimiye Kışlası'nda da görev yapan İngiliz hemşire Florence Nightingale, İtalya'nın Floransa kentinde doğdu. Kendisine "Lambalı Kadın" adı takılmıştı.`,
            `1929 - İlk Tıp Bayramı, Haydarpaşa Tıp Fakültesi'nde kutlandı.`,
            `1939 - Türk- İngiliz ortak bildirisi imzalandı.`,
            `1939 - İzmit Gölcük'te liman ve tersane inşa edilmesi ile ilgili olarak bir Alman grubuyla sözleşme imzalandı.`,
            `1976 - Filistin Kurtuluş Örgütü'nün Türkiye'de büro açma isteği kabul edildi.`,
            `1978 - Türkiye Cumhuriyeti Millî Eğitim Bakanlığı'nca, liselerde okutulan ahlak dersi ve müfredat programları ile ders kitapları uygulamadan kaldırıldı.`,
        ]
    },
    {
        "tarih":"13 Mayıs",
        "olaylar": [
            `1277 - Karamanoğlu Mehmet Bey, Konya şehrini Karamanoğulları topraklarına kattı ve Türkçeyi resmî dil ilan etti.`,
            `1915 - Çanakkale'de, Binbaşı Ahmet Bey komutasındaki Muavenet-i Milliye Muhribi, HMS Goliath zırhlısını torpilleyerek batırdı.`,
            `1919 - İzmir'in işgal edileceğine ilişkin Venizelos'un beyannamesi, Aya Fotini Kilisesi'nde Yunan Albay Mavrudis tarafından yerli Rumlara okundu.`,
            `1920 - Trakya-Paşaeli Müdâfaa-i Hukuk Cemiyeti, 9-13 Mayıs tarihleri arasında, 217 üye ile toplanan ve bölge ile ilgili net kararların alındığı "İkinci (Büyük) Edirne Kongresi"ni yaptı.`,
        ]
    },
    {
        "tarih":"14 Mayıs",
        "olaylar": [
            `1560 - Piyale Paşa komutasındaki Osmanlı donanması, Cerbe Deniz Savaşı'nı kazandı.`,
            `1767 - İngiliz Hükûmeti'nin ithal çaya vergi koyması üzerine, Amerikan Bağımsızlık Savaşı başladı.`,
            `1839 - Mekteb-i Tıbbiye-i Şahane'de ilk eczacı sınıfının açıldığı tarihi esas alınarak “Eczacılık Günü” olarak kabul ve ilan edildi.`,
            `1919 - İzmir limanında bulunan İtilaf Devletleri donanması kumandanı Amiral Caltrop, Türk ordusuna İzmir'in Yunanlar tarafından işgal edileceğini bildirdi.`,
            `1919 - İzmirli yurtseverler, gece Yahudi Mezarlığında toplanarak, Reddi İlhak ilkesini kabul etti.`,
            `1937 - Tarım Bakanlığı kuruluş kanunu kabul edildi.`,
            `2010 - Türkiye ile Yunanistan arasında siyasi, ticari ve kültürel işbirliğini öngören 21 adet dostluk antlaşması imzalandı.`,
            `2014 - Türkiye'de 13 Mayıs'ta Soma'da gerçekleşen maden kazasında ölen 301 madenci için, millî yas ilan edildi.`,
        ]
    },
    {
        "tarih":"15 Mayıs",
        "olaylar": [
            `1648 - Otuz Yıl savaşlarını bitiren Vestfalya Antlaşması imzalandı.`,
            `1856 - Anadolu Feneri ve Rumeli Feneri, Fransızlar tarafından inşa edilerek işletilmeye başlandı.`,
            `1873 - Darüşşafaka Lisesi kuruldu.`,
            `1919 - Mustafa Kemal, Yıldız Sarayı Küçük Mabeyn Köşkü'nde Sultan VI. Mehmed Vahideddin ile görüştü.`,
            `1919 - İtilaf Devletleri desteğindeki Yunanlar, İzmir'i işgal etti. Gazeteci Hasan Tahsin ve Askerlik Şubesi Başkanı Albay Süleyman Fethi, Yunan askerleri tarafından öldürüldüler ve Türk Kurtuluş Savaşı'nın ilk şehitleri oldular.`,
            `1924 - Sanayi-i Nefise Mektebi öğrencileri, ilk resim sergilerini İstanbul'da açtı.`,
        ]
    },
    {
        "tarih":"16 Mayıs",
        "olaylar": [
            `1919 - Mustafa Kemal Paşa, Türk Kurtuluş Savaşı'nı başlatmak üzere İstanbul'dan Samsun'a doğru yola çıktı.`,
            `1926 - Vahidettin (VI. Mehmet), İtalya'nın San Remo kentinde kalp yetmezliği sebebi ile öldü.`,
            `1943 - Varşova Gettosu'ndaki Yahudi topluluğunun, Nazi işgaline karşı başlattığı Varşova Gettosu Ayaklanması olarak adlandırılan direnişi kırıldı. Hayatta kalanlar, Treblinka toplama ve yok etme kampına gönderilmeye başlandı. Alman kayıtlarına göre 56 bin kişi öldürüldü.`,
        ]
    },
    {
        "tarih":"17 Mayıs",
        "olaylar": [
            `1928 - Türkiye Cumhuriyeti Hıfzısıhha Müessesesi kuruldu.`,
            `1939 - 27 Mayıs 1938 tarihli Londra Kredi Antlaşması'na ait onay belgelerinin karşılıklı teatisi yapıldı.`,
            `1939 - Altın ticaretinin yeniden serbest bırakılmasına ait kararname çıktı.`,
            `1982 - Türk Silahlı Kuvvetleri Mehmetçik Vakfı kuruldu. Vakıf, Devlet Başkanı Orgeneral Kenan Evren ve diğer Millî Güvenlik Konseyi üyesi komutanların aralarında topladıkları parayla kuruldu.`,
        ]
    },
    {
        "tarih":"18 Mayıs",
        "olaylar": [
            `1941 - Alman zırhlısı Bismark ve ağır kruvazör Prinz Eugen, Ren Egzersizi (Rheinübung) Harekatı için denize açıldılar.`,
            `1943 - Adolf Hitler, müttefiki İtalya'nın teslim olmaya yönelmesi üzerine, Alaric Operasyonu'nu başlatarak İtalya'nın Alman ordularınca istilası emrini verdi.`,
            `1944 - Kırım Tatar Sürgünü: Josef Stalin, Kırım Tatarlarını Kırım Yarımadası'ndan sürgün etti. Sürgün edilen 193.865 Kırım Tatarının %45'i sürgünde hayatını kaybetti.`,
            `1968 - Fransa'da "Mayıs Ayaklanması" sürüyor. Devlet Başkanı Charles de Gaulle, Romanya'daki ziyaretini beklenenden 12 saat önce bitirerek ülkesine döndü. Sinemacılar, Cannes Film Festivali'ni işgal etti. Önde gelen Fransız film yönetmenleri eserlerini yarışmadan çekti ve jüri istifa ederek festivali sona erdirdi.`,
        ]
    },
    {
        "tarih":"19 Mayıs",
        "olaylar": [
            `1515 - Kemah Kuşatması`,
            `1919 - Mustafa Kemal Paşa'nın 9. Ordu Müfettişi olarak Anadolu'ya Samsun'dan ayak basması ve Millî Mücadele'yi başlatması.`,
            `1924 - Musul sorunuyla ilgili Türk-İngiliz heyetleri arasında, "Haliç Konferansı" diye adlandırılan görüşmeler başladı. 9 Haziran'a kadar sürecek görüşmelerden sonuç alınamayınca, konu Milletler Cemiyeti'ne götürüldü.`,
            `1938 - Atatürk, son defa Gençlik ve Spor Bayramı gösterilerini izledi ve Hatay sorunu ile ilgili olarak -rahatsızlığına rağmen- Güney gezisine çıktı.`,
            `1939 - Hatay sınırına dair Antakya Protokolü imzalandı.`,
            `1939 - Kırşehir'deki elektrik santrali törenle açıldı.`,
            `1939 - Atılay Denizaltısı İstanbul'da kızaktan indirildi.`,
            `1940 - İstanbul’da Dolmabahçe Stadı’nın temeli atıldı.`,
            `1981 - Türkiye'de Atatürk Yılı kutlamaları kapsamında "Gençlik ve Spor Bayramı"nın adı Kenan Evren tarafından "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı" olarak değiştirildi ve ülkenin her yerinde törenler yapıldı.`,
            `1981 - Atatürk'ün Selanik'te doğduğu ev yeniden düzenlenerek Devlet Bakanı İlhan Öztrak tarafından hizmete açıldı. Atatürk Orman Çiftliği'nde, Atatürk'ün evinin benzerinin temeli, Başbakan Bülend Ulusu tarafından atıldı.`,
            `1981 - Devlet Başkanı Orgeneral Kenan Evren, Samsun'da gençlere seslendi: "Gerici, bölücü, yıkıcı ve aşırı değil; yapıcı, yaratıcı, dengeli ve yurdunu, ulusunu her şeyden çok seven, Atatürk gibi seven gerçek Atatürkçüler olunuz."`,
            `1989 - Kadın Kurultayı toplandı. İlk kez kapalı bir salonda yapılan kadın toplantısına yaklaşık 2 bin 500 kadın katıldı.`,
            `1989 - Atatürkçü Düşünce Derneği kuruldu.`,
            `2006 - Türkiye Gençlik Birliği kuruldu.`,
        ]
    },
    {
        "tarih":"20 Mayıs",
        "olaylar": [
            `1481 - II. Beyazıt, Osmanlı Padişahı oldu.`,
            `1622 - Osmanlı İmparatorluğu'nda isyancılar, ordu ve yönetimde yenilik taraftarı olan Padişah II. Osman'ı tahttan indirip öldürdü. Öldürülen ilk padişah olan Genç Osman'ın yerine, I. Mustafa ikinci kez tahta çıkarıldı.`,
            `1919 - İngiliz Muhipleri Cemiyeti kuruldu.`,
            `1920 - İlk hemşire okulu, Amiral Bristol Hemşire Mektebi hizmete girdi.`,
            `1928 - Türkiye'de uluslararası rakamlar kabul edildi.`,
            `1933 - Türk Hava Yolları kuruldu.`,
            `1939 - Hatay Meclisi, Türk ordusunun Hatay'a girdiği 5 Temmuz'u Kurtuluş ve Meclis'in açıldığı 2 Eylül'ü Kurtuluş Bayramı olarak kabul etti.`,
            `1941 - II. Dünya Savaşı: Alman paraşütçüleri Girit adasını işgal etti.`,
            `1946 - Türkiye, UNESCO Antlaşması'nı onayladı.`,
        ]
    },
    {
        "tarih":"21 Mayıs",
        "olaylar": [
            `1847 - Tapu ve Kadastro Genel Müdürlüğü (Defterhane-iş Amire Kalemi) kuruldu.`,
            `1889 - İttihat ve Terakki Fırkası kuruldu.`,
            `1960 - Harp Okulu öğrencileri, Hükûmet aleyhine sessiz yürüyüş yaptı.`,
            `1963 - Harp Okulu Komutanı Talat Aydemir, Anayasa'nın önerdiği bazı reformların gerçekleştirilmediği gerekçesiyle ikinci bir darbe girişiminde bulundu, fakat başarılı olamadı.`,
            `1997 - Yargıtay Cumhuriyet Başsavcısı Vural Savaş, Refah Partisi'nin Anayasa'nın laiklik ilkesine aykırı eylemlerin odağı haline geldiği gerekçesiyle sürekli kapatılması istemiyle Anayasa Mahkemesi'ne dava açtı.`,
        ]
    },
    {
        "tarih":"22 Mayıs",
        "olaylar": [
            `MÖ 334 - Büyük İskender'in orduları, III. Darius'u Granikos Savaşı'nda yendi.`,
            `1176 - Selahaddin Eyyubi'ye Halep'te suikast girişimi.`,
            `1958 - İstanbul Süleymaniye'de tarihi Siyavuş Paşa Konağı yandı.`,
        ]
    },
    {
        "tarih":"23 Mayıs",
        "olaylar": [
            `1958 - İstanbul Süleymaniye'de tarihi Siyavuş Paşa Konağı yandı.`,
            `1919 - İzmir'in İtilaf Devletleri tarafından işgalini protesto için Sultanahmet Mitingi yapıldı, mitinge 200 bin kişi katıldı.`,
            `1928 - Türk Vatandaşlığı Kanunu kabul edildi, tekke ve zaviyeler kapatıldı.`,
        ]
    },
    {
        "tarih":"24 Mayıs",
        "olaylar": [
            `1844 - Amerikalı mucit Samuel Morse, ABD Senatosu üyelerinin de hazır bulunduğu bir deneyle, ABD Kongre binasından Baltimore'da bir tren istasyonuna kendi icadı olan Mors alfabesiyle ilk mesajı gönderdi.`,
            `1924 - Yabancı şirketlerce işletilen Osmanlı Anadolu Demiryolları (CFOA) Şirketi'nin millileştirilmesi için Anadolu-Bağdat Demiryolları Müdiriye-i Umumiyesi kuruldu.`,
            `1989 - Bulgaristan'dan Türkiye'ye zorunlu göç başladı.`,
            `2003 - Letonya'nın başkenti Riga'da gerçekleştirilen 48. Eurovision Şarkı Yarışması'nı Türkiye adına yarışan Sertab Erener, Everyway That I Can adlı şarkı ile kazandı.`,
        ]
    },
    {
        "tarih":"25 Mayıs",
        "olaylar": [
            `1571 - İspanyol İmparatorluğu, Venedik Cumhuriyeti ve Papalık Devleti, Osmanlı Devleti aleyhine ittifak kararı aldı.`,
            `1954 - Türkiye, Osmanlı borçlarının son taksitini ödedi.`,
        ]
    },
    {
        "tarih":"26 Mayıs",
        "olaylar": [
            `1926 - Millî Mücadele'ye katılmayan memurların görevlerine son verilmesine ilişkin kanun kabul edildi.`,
            `1938 - Atatürk, Ankara'dan son kez ayrıldı.`,
        ]
    },
    {
        "tarih":"27 Mayıs",
        "olaylar": [
            `1915 - Osmanlı Hükümeti tarafından Sevk ve İskan Kanunu kabul edildi.`,
            `1960 - 27 Mayıs Darbesi: Türk Silahlı Kuvvetleri yönetime el koydu. Silahlı Kuvvetler adına ülke yönetimini Millî Birlik Komitesi üstlendi. Orgeneral Cemal Gürsel, Millî Birlik Komitesi'nin başına getirildi. Millî Birlik Komitesi, ilk iş olarak Türkiye Büyük Millet Meclisini ve Hükûmeti feshetti ve her türlü siyasi faaliyeti yasakladı.`,
            `1963 - Türkiye'de 27 Mayıs Hürriyet ve Anayasa Bayramı ilan edildi.`,
        ]
    },
    {
        "tarih":"28 Mayıs",
        "olaylar": [
            `622 - Hicret, Medine'ye 3 km uzaklıkta bulunan Kubâ'ya ulaşılmasıyla tamamlandı.`,
            `1812 - Osmanlı Devleti ile Rusya arasında Bükreş Antlaşması imzalandı ve 1806-1812 Osmanlı-Rus Savaşı sona erdi.`,
            `1862 - Sayıştay kuruldu.`,
            `1913 - Osmanlı feministleri kadın haklarını savunmak için Osmanlı Müdafaa-i Hukuk-ı Nisvan Cemiyeti'ni kurdular.`,
            `1918 - Tiflis'te Azerbaycan Millî Şurası tarafından Azerbaycan Demokratik Cumhuriyeti ilan edildi.`,
            `1919 - Mustafa Kemal Paşa, Havza'dan, sivil ve asker yüksek memur ve komutanlıklara, işgallere karşı çıkılan mitingler düzenlenmesini bildirdi.`,
            `1919 - İstanbul'da tutuklanan İttihat ve Terakki ileri gelenleri, Malta'ya sürgüne gönderildi. Malta sürgünleri olarak adlandırılan bu ilk kafilede 66 kişi yer alıyordu. Sürgünler 20 Kasım 1920'ye kadar sürdü.`,
            `1954 - Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü (UNESCO), en çok konuşulan diller arasına Türkçeyi de aldı.`,
        ]
    },
    {
        "tarih":"29 Mayıs",
        "olaylar": [
            `1453 - Osmanlı padişahı Fatih Sultan Mehmet, İstanbul'u fethederek Doğu Roma (Bizans) İmparatorluğu'nu sona erdirdi. Birçok tarihçi için İstanbul'un Fethi, Orta Çağ'ın sonudur.`,
            `1807 - Kabakçı Mustafa ayaklanmasında, isyancılar Şehzade Mustafa ve Mahmut'un kendilerine teslimini istedi. Sultan III. Selim tahttan indirildi, IV. Mustafa tahta çıktı.`,
            `1936 - Türk bayrağı hakkında kanun, TBMM'de kabul edildi.`,
            `1937 - Türkiye ile Fransa arasında "Sancak"ın (Hatay) "Tamamiyet-i Mülkiyesini Tekeffül eden Antlaşma" ile "Türkiye - Suriye Hududunun Teminine dair Antlaşma" ve "Müşterek Beyanname ve Beyannameye bağlı Protokol" Cenevre'de imzalandı.`,
            `1985 - İstanbul Boğazı'nda ikinci boğaz köprüsünün (Fatih Sultan Mehmet) temeli atıldı.`,
        ]
    },
    {
        "tarih":"30 Mayıs",
        "olaylar": [
            `1453 - Fatih Sultan Mehmet, Hızır Bey'i (Çelebi) İstanbul'a ilk belediye başkanı olarak atadı.`,
            `1453 - Fatih Sultan Mehmet, İstanbul Üniversitesi'ni kurdu.`,
            `1740 - Osmanlı Devleti, Fransa ile kapitülasyon antlaşması yaptı.`,
            `1876 - Osmanlı Padişahı Abdülaziz, 30 Mayıs 1876 Darbesi ile tahttan indirildi. Yerine yeğeni V. Murat geçti.`,
            `1913 - I. Balkan Savaşı sona erdi.`,
            `1920 - Cafer Tayyar Eğilmez'e, Edirne Müdafaa-i Hukuk Merkez Heyeti'nce Trakya Müdafaa-i Milliye Kumandanı sanı verildi.`,
            `1920 - Fransa ve TBMM Hükûmeti arasında geçici bir ateşkes imzalandı. TBMM'nin kazandığı askerî başarılar ve diplomatik zaferler sonrası, Fransa ile Sakarya Zaferi'nden sonra Ankara Antlaşması imzalandı. (20 Ekim 1921)`,
            `1921 - Çankaya Köşkü, Mustafa Kemal'e armağan edildi. Atatürk, köşkü bir yazı ile Ordu'ya bağışladı.`,
            `1925 - 30 Mayıs Olayı gerçekleşti ve bu olay, o güne değin Çin'de gerçekleşmiş olan en büyük yabancı karşıtı gösteri oldu.`,
        ]
    },
    {
        "tarih":"31 Mayıs",
        "olaylar": [
            `1799 - Napolyon, Akka yenilgisinin ardından, savaş meydanını Cezzar Ahmed Paşa kuvvetlerine terk etti.`,
            `1957 - Atatürk Üniversitesi kanunu kabul edildi.`,
            `1960 - Türk Ordu Millî Futbol Takımı, ikinci defa Dünya Şampiyonu oldu.`,
        ]
    }
]
const today = new Date()
const day = today.getDate();
const month = today.getMonth() + 1;
let getToday = `${month} ${day}`;
const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const ay = aylar[today.getMonth()];
const bugunTarihi = `${day} ${ay}`;
document.getElementById("tarih").innerText = bugunTarihi;
const olaylar = tarihOlaylar.find(item => item.tarih === bugunTarihi);

if (olaylar) {
    const olaylarListesi = document.getElementById("olaylar");
    olaylar.olaylar.forEach(olay => {
        let li = document.createElement("li");
        li.innerText = olay;
        olaylarListesi.appendChild(li);
    });
} else {
    document.getElementById("daily-text").innerHTML = "Yükleniyor...";
}
// Tarihte Bugün End