const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}
const faqItems = document.querySelectorAll(".faq-box");

faqItems.forEach((item) => {

    const question = item.querySelector("h3");
    const answer = item.querySelector("p");

    answer.style.display = "none";

    question.addEventListener("click", () => {

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});
const toggle = document.getElementById("priceToggle");

const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const premiumPrice = document.getElementById("premium-price");

if (toggle) {

    toggle.addEventListener("change", () => {

        if (toggle.checked) {

            basicPrice.innerHTML = "₹399";
            proPrice.innerHTML = "₹799";
            premiumPrice.innerHTML = "₹1199";

        } else {

            basicPrice.innerHTML = "₹499";
            proPrice.innerHTML = "₹999";
            premiumPrice.innerHTML = "₹1499";

        }

    });
}const links = document.querySelectorAll("a[href^='#']");

links.forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});