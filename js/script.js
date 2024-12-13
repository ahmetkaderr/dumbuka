// Navbar Start
const menuBtn = document.querySelector("#menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }
    })
})
// Navbar End
// Tarihte Bugün Start
function getDayOfYearAlternative(date = new Date()) {
    const startOfYear = new Date(date.getFullYear(), 0, 1); // Yılın ilk günü
    const dayOfYear = (date - startOfYear) / (24 * 60 * 60 * 1000) + 1; // Gün cinsine çevrilmiş fark
    return Math.floor(dayOfYear);
}

const today = new Date();
console.log(`Bugün yılın ${getDayOfYearAlternative(today)}. günü.`);

// Tarihte Bugün End