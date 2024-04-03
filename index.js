function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var toggleBtn = document.querySelector(".toggle-btn");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px";
        toggleBtn.classList.remove("open");
    } else {
        sidebar.style.right = "0px";
        toggleBtn.classList.add("open");
    }
}

