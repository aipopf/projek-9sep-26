export const state = {
    products: [],
    filteredProducts: [],
    status: "loading",
    keyword: "",
    category: "all",
    sort: "default"
};

export function setState(newState) {
    Object.assign(state, newState);
}