async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    function buildProductLookup(products){
        const productMap = new Map();

        for(const product of products){
            productMap.set(product.id, {
                id: product.id,
                name: product.title,
                price: product.price
        });
        }
        return productMap;
    }

    const productMap = buildProductLookup(products);

    const product = productMap.get(10);

    console.log(product)
}

main();