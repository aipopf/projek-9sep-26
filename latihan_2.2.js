async function fetchAndFindProduct(){
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const lowStockProducts = products.filter(item => item.stock < 10);

    return lowStockProducts;
}

function filterLowStockProducts(products) {
    return products.filter(item => item.stock < 10);
}

fetchAndFindProduct().then(lowStockProducts => {
    lowStockProducts.forEach(product => {
        console.log(`Produk: ${product.title}, Stok: ${product.stock}`);
    });
});