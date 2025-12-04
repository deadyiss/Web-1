// Smooth Scrolling Navigation
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});


// Scroll Reveal - aktif setiap kali elemen muncul ke layar
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Jika elemen masuk layar -> tambah class active
        if (rect.top < windowHeight - 80 && rect.bottom > 0) {
            el.classList.add("active");
        } 
        // Jika elemen keluar layar -> hapus class active
        else {
            el.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Scroll to top button
const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
});

toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
