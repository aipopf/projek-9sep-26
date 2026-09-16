import { formatPrice } from "./utils.js";

export function renderProducts(products) {
    const container = document.querySelector("#products");

    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<p>Produk tidak ditemukan.</p>";
        return;
    }

    products.forEach(product => {
        const element = document.createElement("div");

        element.innerHTML = `
            <h3>${product.title}</h3>
            <p>Harga: ${formatPrice(product.price)}</p>
            <p>Rating: ${product.rating}</p>
            <p>Kategori: ${product.category}</p>
        `;

        container.appendChild(element);
    });
}