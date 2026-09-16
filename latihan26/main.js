import { getProducts } from "./api.js";

import {
    searchProducts,
    filterByCategory,
    sortProducts,
    getCategories
} from "./algorithms.js";

import {
    state,
    setState
} from "./state.js";

import {
    renderProducts,
    renderStatistics,
    renderCategories,
    renderLoading,
    renderError,
    renderEmpty
} from "./ui.js";


async function loadProducts() {
    try {
        setState({
            status: "loading"
        });

        renderLoading();

        const products = await getProducts();

        setState({
            products,
            filteredProducts: products,
            status: "success"
        });

        const categories = getCategories(products);

        renderCategories(categories);

        updateView();

    } catch (error) {

        setState({
            status: "error"
        });

        renderError(error.message);
    }
}


function updateView() {

    let products = state.products;

    // Search
    products = searchProducts(
        products,
        state.keyword
    );

    // Filter
    products = filterByCategory(
        products,
        state.category
    );

    // Sort
    products = sortProducts(
        products,
        state.sort
    );

    setState({
        filteredProducts: products
    });

    if (products.length === 0) {
        renderEmpty();
        renderStatistics([]);
        return;
    }

    renderProducts(products);
    renderStatistics(products);
}


// SEARCH

document
    .querySelector("#search")
    .addEventListener("input", event => {

        setState({
            keyword: event.target.value
        });

        updateView();
    });


// CATEGORY

document
    .querySelector("#category")
    .addEventListener("change", event => {

        setState({
            category: event.target.value
        });

        updateView();
    });


// SORT

document
    .querySelector("#sort")
    .addEventListener("change", event => {

        setState({
            sort: event.target.value
        });

        updateView();
    });


// START APP

loadProducts();