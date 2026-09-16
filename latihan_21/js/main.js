import { state } from "./state.js";
import { fetchProducts } from "./api.js";
import {
    filterByCategory,
    sortByPrice
} from "./algorithms.js";
import { renderProducts } from "./ui.js";

async function main() {
    try {
        state.status = "loading";

        state.products = await fetchProducts();

        state.status = "success";

        updateUI();

    } catch (error) {
        state.status = "error";
        console.error(error);
    }
}

function updateUI() {
    let products = state.products;

    products = filterByCategory(
        products,
        state.category
    );

    if (state.sortBy === "price-asc") {
        products = sortByPrice(products, "asc");
    }

    if (state.sortBy === "price-desc") {
        products = sortByPrice(products, "desc");
    }

    renderProducts(products);
}

main();