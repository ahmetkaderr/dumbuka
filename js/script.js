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