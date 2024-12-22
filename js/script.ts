document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartSection = document.querySelector("#cart p");

    // Pilih semua tombol "Tambahkan ke Keranjang"
    document.querySelectorAll(".product button").forEach((button, index) => {
        button.addEventListener("click", () => {
            // Ambil nama produk dan harga
            const productName = document.querySelectorAll(".product h3")[index].textContent;
            const productPrice = document.querySelectorAll(".product p")[index].textContent;

            // Tambahkan produk ke keranjang
            cart.push({ name: productName, price: productPrice });

            // Tampilkan isi keranjang
            cartSection.textContent = `Keranjang Anda (${cart.length} item): ${cart.map(item => item.name).join(", ")}`;
        });
    });
});
