// Tarihte Bugün Start

function getDayOfYearAlternative(date = new Date()) {
    const startOfYear = new Date(date.getFullYear(), 0, 1); // Yılın ilk günü
    const dayOfYear = (date - startOfYear) / (24 * 60 * 60 * 1000) + 1; // Gün cinsine çevrilmiş fark
    return Math.floor(dayOfYear);
}

const today = new Date();
console.log(getDayOfYearAlternative(today));

// Tarihte Bugün End