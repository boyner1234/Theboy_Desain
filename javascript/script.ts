document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Berjalan!");

    // Coba pilih tombol
    const buttons = document.querySelectorAll(".product button");
    console.log("Tombol ditemukan:", buttons);

    // Tambahkan event listener untuk satu tombol
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("Tombol diklik!");
        });
    });
});
