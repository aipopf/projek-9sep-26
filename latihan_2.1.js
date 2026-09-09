async function fetchAndFindProduct(id){
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const foundProduct = findProductById(products, id);

    return foundProduct;
}

function findProductById(products, id) {
  return products.find(item => item.id === id);
}

fetchAndFindProduct(5).then(product => {
    console.log("Hasil pencarian ID 5: ", product.title );
})

fetchAndFindProduct(999).then(product => {
    console.log("Hasil pencarian ID 999: ",product);
})

