const API_URL = "https://dummyjson.com/products";

export async function getProducts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Gagal mengambil data");
    }

    const data = await response.json();

    return data.products;
}