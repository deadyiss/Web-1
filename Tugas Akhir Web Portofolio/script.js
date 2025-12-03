// Portfolio Filter
const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".p-item");

buttons.forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");

        let filter = btn.getAttribute("data-filter");

        items.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    };
});
