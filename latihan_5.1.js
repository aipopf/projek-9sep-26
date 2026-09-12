async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    // 1. Ambil harga produk yang memiliki tag beauty
    const beautyPrice = products
        .filter(product => product.tags.includes("beauty"))
        .map(product => product.price);

    // 2. Hitung rata-rata
    const avg = beautyPrice.reduce((sum, product) => sum + product, 0) / beautyPrice.length;

    console.log("Harga barang kecantikan:", beautyPrice);
    console.log("Rata-rata harga barang kecantikan:", avg);

    const statistics = getStatistic(products);

    console.log(statistics);
}

function getStatistic(products){
    const beautyProducts = products.filter(product =>
        product.tags.includes("beauty")
    );

    const totalProducts = beautyProducts.length;

    const totalPrice = beautyProducts.reduce((sum, product) =>{
        return sum + product.price;
    }, 0);

    const averagePrice = totalPrice / totalProducts;

    const highestPrice = beautyProducts.reduce((highest, product) =>{
        return product.price > highest ? product.price : highest;
    }, beautyProducts[0].price);

    const lowestPrice = beautyProducts.reduce((lowest, product) => {
        return product.price < lowest ? product.price : lowest;
    }, beautyProducts[0].price);

    const totalStock = beautyProducts.reduce((sum, product) => {
        return sum + product.stock;
    }, 0);

    const totalRating = beautyProducts.reduce((sum, product) =>{
        return sum + product.rating;
    }, 0);

    const averageRating = totalRating / totalProducts;

    return{
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

main();