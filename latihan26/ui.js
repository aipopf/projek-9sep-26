import { getStatistics } from "./algorithms.js";

export function renderProducts(products) {
    const container = document.querySelector("#product-list");

    if (products.length === 0) {
        container.innerHTML = `
            <p>Tidak ada produk ditemukan.</p>
        `;
        return;
    }

    container.innerHTML = products.map(product => `
        <article class="product">
            <img src="${product.thumbnail}" alt="${product.title}">

            <h3>${product.title}</h3>

            <p>Category: ${product.category}</p>

            <p>Price: $${product.price}</p>

            <p>Rating: ⭐ ${product.rating}</p>

            <p>Stock: ${product.stock}</p>
        </article>
    `).join("");
}

export function renderStatistics(products) {
    const statistics = getStatistics(products);

    document.querySelector("#statistics").innerHTML = `
        <p>Total Products: ${statistics.totalProducts}</p>
        <p>Average Price: $${statistics.averagePrice.toFixed(2)}</p>
        <p>Total Stock: ${statistics.totalStock}</p>
        <p>Average Rating: ${statistics.averageRating.toFixed(2)}</p>
    `;
}

export function renderCategories(categories) {
    const select = document.querySelector("#category");

    select.innerHTML = `
        <option value="all">All Categories</option>

        ${categories.map(category => `
            <option value="${category}">
                ${category}
            </option>
        `).join("")}
    `;
}

export function renderLoading() {
    document.querySelector("#product-list").innerHTML =
        "<p>Loading...</p>";
}

export function renderError(message) {
    document.querySelector("#product-list").innerHTML =
        `<p>Error: ${message}</p>`;
}

export function renderEmpty() {
    document.querySelector("#product-list").innerHTML =
        "<p>Tidak ada produk.</p>";
}