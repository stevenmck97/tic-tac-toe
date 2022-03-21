(function addMarker() {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach((item) => {
        item.addEventListener("click", () => {
            item.textContent = "x";
        });
    });
})();
