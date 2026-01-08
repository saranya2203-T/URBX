const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            card.style.display = "none";

            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
                card.style.animation = "fadeUp 0.6s ease forwards";
            }
        });
    });
});

