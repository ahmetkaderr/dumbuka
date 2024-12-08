// Tarihte Bugün Start
const today = new Date()
const month = today.getMonth() + 1;
const day = today.getDate();

let dailyText = [
    `
    1 Aralık
    </br>
    1918: Transilvanya, Romanya ile birleşti. Romanya, Birinci Dünya Savaşı’ndan sonra 1 Aralık 1918'de Transilvanya’yı kendisine bağladı. Bu olay, Romanya'nın topraklarını genişletmesine yol açtı.
    </br>
    1981: HIV/AIDS ilk kez tanımlandı. Dünyada hızla yayılan AIDS (Edinilmiş Bağışıklık Yetersizliği Sendromu), ilk kez 1981'de tıp dünyası tarafından tanımlandı. Bu, dünyada HIV virüsünün etkilerine karşı daha fazla bilgi edinilmesini başlattı.
    </br>
    1991: Ukrayna, SSCB'den bağımsızlığını ilan etti. Sovyetler Birliği'nin çöküşü sırasında, 1 Aralık 1991’de Ukrayna, halk oylamasıyla bağımsızlık ilan etti.,
    `,
    `
    2 Aralık
    </br>
    1804: Napolyon Bonapart, Fransa İmparatoru olarak taç giydi. Napolyon Bonapart, Fransa'nın İmparatoru unvanını 2 Aralık 1804'te aldı. Bu olay, Fransız Devrimi sonrası Fransa'da monarşinin yeniden doğuşunu simgeliyor.
    </br>
    1942: Enrico Fermi, ilk kontrollü nükleer zincir reaksiyonunu gerçekleştirdi. Chicago Üniversitesi’nde, Enrico Fermi tarafından gerçekleştirilen bu deney, nükleer enerjinin kullanılabilir bir güç kaynağı olabileceğini gösterdi.
    `,
    `
    3 Aralık
    </br>
    1967: Dr. Christiaan Barnard, ilk kalp naklini gerçekleştirdi. Güney Afrika'da yapılan bu ilk başarılı kalp nakli, tıp tarihinde devrim niteliğinde bir adım oldu.
    </br>
    1992: İlk SMS mesajı gönderildi. Britanya'da Neil Papworth tarafından atılan ilk kısa mesaj (SMS), mobil telefonlar üzerinden iletişimin yeni bir çağa girmesini sağladı.
    `,
    `
    4 Aralık
    </br>
    1956: Elvis Presley, Jerry Lee Lewis, Carl Perkins ve Johnny Cash bir stüdyoda toplandı. "Million Dollar Quartet" adı verilen bu tarihi an, müziğin efsane isimlerinin aynı anda kaydedilen ilk seansını işaret eder.
    </br>
    1977: İran Şahı, ABD Başkanı Jimmy Carter ile görüşmek için Tahran'da protestolar eşliğinde karşılandı. 1970’lerin sonlarına doğru İran'da rejim karşıtı protestolar giderek büyüdü, bu dönemde Amerikan çıkarlarının İran'daki etkisi tartışmalı hale geldi.
    `,
    `
    5 Aralık
    </br>
    1933: ABD’de Alkol Yasağı (Prohibition) sona erdi. ABD'deki alkol yasağının bitmesiyle, alkol üretimi ve satışı yeniden yasallaştı ve ülke ekonomisinde büyük bir değişim yaşandı.
    </br>
    1952: Londra Büyük Smog Olayı, şehrin büyük bir kısmını etkiledi. London'da meydana gelen bu büyük hava kirliliği felaketi, 4 bin kişiden fazla insanın ölümüne yol açtı.
    `,
    `
    6 Aralık
    </br>
    1917: Halifax Patlaması, Kanada'nın Halifax kentinde büyük bir patlama meydana geldi. Patlama, gemi kazası sonucu meydana gelen dev bir patlamadır ve binlerce insanın ölümüne yol açmıştır.
    </br>
    1921: İrlanda Bağımsızlık Antlaşması imzalandı. Bu anlaşma, İrlanda'nın İngiltere'den bağımsızlığını kazanması için önemli bir adım oldu.
    `,
    `
    7 Aralık
    </br>
    1941: Japonya, Pearl Harbor'a saldırdı. Japonya'nın Pearl Harbor'a gerçekleştirdiği saldırı, Amerika Birleşik Devletleri'nin II. Dünya Savaşı'na katılmasına neden oldu.
    `,
    `
    8 Aralık
    </br>
    1980: John Lennon, New York’ta vurularak öldürüldü. Müzik dünyasının efsane isimlerinden biri olan John Lennon, 1980’de New York’ta bir suikast sonucu hayatını kaybetti.
    </br>
    1991: Belavezha Anlaşması, SSCB’nin resmen dağılmasını ilan etti. Sovyetler Birliği’nin çöküşü, dünya çapında büyük değişimlere yol açtı.   
    `,
    `
    9 Aralık
    </br>
    1905: Fransa’da Laiklik Yasası yürürlüğe girdi. Fransa, devletle din arasındaki ilişkiyi düzenleyen bir yasa kabul etti ve kiliseye karşı laik bir devlet sistemi inşa etti.
    </br>
    1961: Tanzanya'nın bağımsızlık günü olarak kutlanır. Tanzanya, Birleşik Krallık’tan bağımsızlık kazandı.
    `,
    `
    10 Aralık
    </br>
    1901: İlk Nobel Ödülleri dağıtıldı. Nobel Ödülleri, her yıl dünya çapında bilim, edebiyat, barış gibi alanlarda en büyük başarıyı gösteren kişilere verilmektedir.
    </br>
    1948: İnsan Hakları Evrensel Beyannamesi, BM tarafından kabul edildi. Birleşmiş Milletler, temel insan haklarını güvence altına alan bu önemli beyannamayı kabul etti.
    `,
    ]

console.log(today);
let getToday = `${month} ${day}`;
console.log(getToday);
if(getToday == "12 1"){
    document.getElementById("daily-text").innerHTML = (dailyText[0]);
};
if(getToday == "12 2"){
    document.getElementById("daily-text").innerHTML = (dailyText[1]);
};
if(getToday == "12 3"){
    document.getElementById("daily-text").innerHTML = (dailyText[2]);
};
if(getToday == "12 4"){
    document.getElementById("daily-text").innerHTML = (dailyText[3]);
};
if(getToday == "12 5"){
    document.getElementById("daily-text").innerHTML = (dailyText[4]);
};
if(getToday == "12 6"){
    document.getElementById("daily-text").innerHTML = (dailyText[5]);
};
if(getToday == "12 7"){
    document.getElementById("daily-text").innerHTML = (dailyText[6]);
};
if(getToday == "12 8"){
    document.getElementById("daily-text").innerHTML = (dailyText[7]);
};
if(getToday == "12 9"){
    document.getElementById("daily-text").innerHTML = (dailyText[8]);
};
if(getToday == "12 10"){
    document.getElementById("daily-text").innerHTML = (dailyText[9]);
};
// Tarihte Bugün End