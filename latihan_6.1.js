async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    function linearSearch(products, targetId) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === targetId) {
                return {
                    id: products[i].id,
                    title: products[i].title
                };
            }
        }
        return -1;
    }

    const product = linearSearch(products, 5);

    console.log(product);
}

main();