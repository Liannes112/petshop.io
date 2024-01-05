const inputField = document.getElementById('nominal');

const changeInput = function() {
    let removeChar = this.value.replace(/[^0-9]/g, ''); // Menghapus karakter selain angka.

    // Mengubah nilai menjadi angka dan memastikan itu adalah angka yang valid.
    let numericValue = parseInt(removeChar, 10);
    if (!isNaN(numericValue)) {
        let formattedCurrency = 'Rp ' + addCommas(numericValue);
        this.value = formattedCurrency;
    } else {
        // Jika nilai tidak valid, set nilai input menjadi kosong.
        this.value = '';
    }
}

// Fungsi untuk menambahkan koma pada setiap tiga digit.
function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Menambahkan event listener ke input field.
inputField.addEventListener('input', changeInput);

// Fungsi untuk menetapkan nilai input dari elemen span dan memanggil changeInput.
function setInputValue(value) {
    inputField.value = value;
    changeInput.call(inputField); // Memanggil changeInput secara langsung.
}

function showModal() {
    openModal(); // Menampilkan modal box
  }

  function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "flex";
  }

  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }