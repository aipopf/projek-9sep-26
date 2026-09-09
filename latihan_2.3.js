async function fetchAndFindProduct(){
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const updateProducts = updateStock(products, 5, 100);

    const product = updateProducts.find(product => product.id === 5);

    console.log("produk: ", product.title);
    console.log("ID: ", product.id);
    console.log("New Stok: ", product.stock);
}

function updateStock(products, id, newStock) {
    return products.map(product => {
        if(product.id === id) {
            return {
                ...product,
                stock: newStock
            };
        }

        return product;
    })
}

fetchAndFindProduct();