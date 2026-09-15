const state = {
    products: [],
    search: "",
    category: "all",
    sortBy: "default",
    status: "idle"
};


// ====================
// AMBIL ELEMENT HTML
// ====================

const searchInput = document.querySelector("#search-input");
const categorySelect = document.querySelector("#category-select");
const sortSelect = document.querySelector("#sort-select");
const productList = document.querySelector("#product-list");


// ====================
// MENGAMBIL DATA API
// ====================

async function main() {
    state.status = "loading";
    render();

    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    state.products = data.products;
    state.status = "success";

    render();
}


// ====================
// MENGOLAH DATA
// ====================

function getFilteredProducts() {
    let products = [...state.products];

    // Search
    products = products.filter(product => {
        return product.title
            .toLowerCase()
            .includes(state.search.toLowerCase());
    });

    // Category
    if (state.category !== "all") {
        products = products.filter(product => {
            return product.category === state.category;
        });
    }

    // Sorting
    if (state.sortBy === "price-low") {
        products.sort((a, b) => a.price - b.price);
    }

    if (state.sortBy === "price-high") {
        products.sort((a, b) => b.price - a.price);
    }

    if (state.sortBy === "name-az") {
        products.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
    }

    if (state.sortBy === "name-za") {
        products.sort((a, b) => {
            return b.title.localeCompare(a.title);
        });
    }

    return products;
}


// ====================
// RENDER
// ====================

function render() {

    // Loading
    if (state.status === "loading") {
        productList.innerHTML = "<p>Loading...</p>";
        return;
    }

    const products = getFilteredProducts();

    // Tidak ada produk
    if (products.length === 0) {
        productList.innerHTML = "<p>Product not found.</p>";
        return;
    }

    // Bersihkan tampilan lama
    productList.innerHTML = "";

    // Render setiap produk
    for (const product of products) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" width="150">
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

        productList.appendChild(card);
    }
}


// ====================
// INTERAKSI USER
// ====================

// Search
searchInput.addEventListener("input", (e) => {

    state.search = e.target.value;

    render();
});


// Category
categorySelect.addEventListener("change", (e) => {

    state.category = e.target.value;

    render();
});


// Sort
sortSelect.addEventListener("change", (e) => {

    state.sortBy = e.target.value;

    render();
});


// ====================
// JALANKAN PROGRAM
// ====================

main();