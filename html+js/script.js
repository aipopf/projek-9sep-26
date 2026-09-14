async function main() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    // Ambil 5 produk pertama
    const products = data.products.slice(0, 5);

    renderProducts(products);
}

function renderProducts(products) {
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products) {
        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h2>${product.title}</h2>
            <p>Kategori: ${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <img src="${product.thumbnail}" width="150">
        `;

        container.append(card);
    }
}

main();