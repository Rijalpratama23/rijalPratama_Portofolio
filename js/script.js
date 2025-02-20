// Mendapatkan elemen-elemen yang dibutuhkan
const hamburgerMenu = document.getElementById("hamburger-menu");
const menuList = document.getElementById("menu-list");
const body = document.getElementsByTagName('BODY')[0];

// Menangani klik pada hamburger menu
hamburgerMenu.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent klik pada hamburger menu agar tidak memicu event listener di luar
    menuList.classList.toggle("hidden"); // Toggle navbar
});

// Menangani klik di luar navbar (untuk menutup menu)
body.addEventListener("click", (event) => {
    if (!menuList.contains(event.target) && event.target !== hamburgerMenu) {
        menuList.classList.add("hidden"); // Menyembunyikan navbar jika klik di luar
    }
});

// aplikasi ini sedang dalam masa pengembangan