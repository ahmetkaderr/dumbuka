// Tarihte Bugün Start
const today = new Date()
const month = today.getMonth() + 1;
const day = today.getDate();

let dailyText = [
    `1 aralık
    1640 - Portekiz, İspanya'dan bağımsızlığını ilan etti.
    1918 - İzlanda, egemen bir devlet oldu.
    1943 - Stalin, Roosevelt ve Churchill'ın katıldığı Tahran Konferansı sona erdi.
    1973 - Papua Yeni Gine kendi kendini yönetme hakkını ilan etti.
    1999 - Birleşik Arap Emirlikleri'nde 321 metre yükseklikle dünyanın en yüksek oteli olan Burc el-Arab hizmete açıldı`,
    `
    2 aralık
    </br>
    1409 - Leipzig Üniversitesi kuruldu.
        </br>
    1804 - Napolyon Bonapart, Papa'nın da katıldığı törende taç giydi ve Fransa İmparatoru oldu.
    1918 - Ermenistan, Osmanlı İmparatorluğu devletinden bağımsızlığını ilan etti.
        </br>
    1971 - Birleşik Arap Emirlikleri, Birleşik Krallık'tan bağımsızlığını kazandı.
        </br>
    1993 - Pablo Escobar, Medellín'de DEA ve Kolombiya güvenlik güçleri tarafından öldürüldü.`,
    `
    3 aralık
    1920 - Ankara Hükûmeti ile Ermenistan Demokratik Cumhuriyeti arasında Gümrü Barış Antlaşması imzalandı.
    1959 - Fazıl Küçük, Kıbrıs Cumhuriyeti cumhurbaşkanı yardımcısı oldu.
    1973 - Pioneer 10, Jüpiter'in ilk yakın plan görüntülerini Dünya'ya gönderdi.
    1979 - Ayetullah Ruhullah Humeyni, İran'ın ilk dini lideri oldu.
    1984 - Hindistan'da bir fabrikadan 40 ton metil isosiyanat gazının sızması 18.000 kişinin ölümüne neden oldu.`,
    `
    4 aralık
    1154 - Nicholas Breakspear, IV. Hadrianus ismiyle Papa oldu ve bu göreve gelen ilk İngiliz olarak tarihe geçti.
    1791 - The Observer'ın ilk sayısı yayımlandı.
    1943 - İnönü, Churchill ve Roosevelt arasında yapılan İkinci Kahire Konferansı başladı.
    1965 - NASA, Gemini 7 uzay aracını uzaya fırlattı.
    2021 - Semeru yanardağı, Endonezya'nın Doğu Cava eyaletindeki Cava adasında aralıklarla patlamaya başladı.`,
    ]

console.log(today);
let getToday = `${month} ${day}`;
console.log(getToday);
if(getToday == "12 1"){
    document.getElementById("daily-text").innerHTML = (dailyText[0]);
}else{
    console.log("çalışmadı0");
};
if(getToday == "12 2"){
    document.getElementById("daily-text").innerHTML = (dailyText[1]);
}else{
    console.log("çalışmadı1");
}
if(getToday == "12 3"){
    document.getElementById("daily-text").innerHTML = (dailyText[2]);
}else{
    console.log("çalışmadı2");
}
if(getToday == "12 4"){
    document.getElementById("daily-text").innerHTML = (dailyText[3]);
}else{
    console.log("çalışmadı3");
}
// Tarihte Bugün End