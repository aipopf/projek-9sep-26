async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    function countFrequency(array) {
        return array.reduce((counts, item) => {
            counts[item] = (counts[item] || 0) + 1;
            return counts;
        }, {});
    }

    // Category
    const categoryFrequency = countFrequency(
        products.map(product => product.category)
    );

    //tags
    const tagFrequency = countFrequency(
        products.flatMap(product => product.tags)
    );

    //rating
    const ratingFrequency = countFrequency(
        products.map(product => Math.round(product.rating))
    );

    //brand
    const brandFrequency = countFrequency(
        products
            .filter(product => product.brand)
            .map(product => product.brand)
    );

    console.log("Category: ", categoryFrequency);
    console.log("Tags: ", tagFrequency);
    console.log("Rating: ", ratingFrequency);
    console.log("Brand: ", brandFrequency);
}

main();