const menu = document.querySelector('.toggle_btn')
const list = document.querySelector('.links')

function displayToggle () {
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "block"
  } else {
    list.style.display = "none"
  }
}

menu.addEventListener("click", displayToggle)

// Menangani perubahan lebar layar
window.addEventListener("resize", () => {
  // Dapatkan lebar layar saat ini
  const currentWidth = window.innerWidth;

  // Tentukan lebar tertentu di mana Anda ingin mengubah tampilan "list" menjadi flex
  const minWidthThreshold = 880;

  // Periksa apakah lebar layar lebih besar dari batas tertentu
  if (currentWidth > minWidthThreshold) {
    // Ubah tampilan "list" menjadi flex
    list.style.display = "flex";
  } else {
    // Jika lebih kecil dari atau sama dengan batas, kembalikan ke tampilan awal
    list.style.display = "block";
    
     displayToggle();
// hapus ^ kalo mau setiap kali resize layar listnya ga nutup lg
  }
});

window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};