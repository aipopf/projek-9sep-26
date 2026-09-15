async function main() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const products = data.products;

    const statistics = getStatistics(products);

    console.log(statistics);
}


function getStatistics(products) {

    const totalProducts = products.length;

    const totalPrice = products.reduce((sum, product) => {
        const { price } = product;
        return sum + price;
    }, 0);

    const averagePrice = totalPrice / totalProducts;

    const totalRating = products.reduce((sum, product) => {
        const { rating } = product;
        return sum + rating;
    }, 0);

    const averageRating = totalRating / totalProducts;

    // Contoh optional chaining
    const firstProduct = products[0];

    const width = firstProduct?.dimensions?.width ?? "Tidak diketahui";

    return {
        totalProducts,
        averagePrice,
        averageRating,
        width
    };
}

main();