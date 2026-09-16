const state = {
    products: [],
    status: "idle"
};

async function fetchProducts() {
    try {
        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data.products;
    } catch (error) {
        console.error("Gagal mengambil data:", error);
        throw error;
    }
}

function render() {
    const app = document.querySelector("#app");

    if (state.status === "loading") {
        app.innerHTML = "<p>Loading...</p>";
        return;
    }

    if (state.status === "error") {
        app.innerHTML = "<p>Gagal mengambil data.</p>";
        return;
    }

    app.innerHTML = state.products
        .map(product => 
            `<p>${product.title}</p>`)
        .join("");
}

async function loadProducts() {
    state.status = "loading";
    render();

    try {
        const products = await fetchProducts();

        state.products = products;
        state.status = "success";
    } catch (error) {
        state.status = "error";
    }

    render();
}

loadProducts();