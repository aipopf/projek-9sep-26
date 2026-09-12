async function main(){
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    //1.Ambil semua tag
    const allTags = products.map(product => product.tags);
    console.log("1. Semua tag: ", allTags);

    //2.Cari produk berdasarkan tag tertentu
    function findProductsByTag(products, tag){
        return products.filter(product => product.tags.includes(tag));
    }

    console.log(
        "2. Produk dengan tag beauty: ",
        findProductsByTag(products, "beauty")
    );


    //3. Jumlah review untuk semua produk
    const reviewCounts = products.map(product => {
        return {
            id: product.id,
            title: product.title,
            totalReviews: product.reviews.length
        };
    });

    console.log("3. Jumlah review: ", reviewCounts);

    //4. Semua review dengan rating 5
    const fiveStarReviews = [];

    products.forEach(product => {
        product.reviews.forEach(review => {
            if(review.rating === 5){
                fiveStarReviews.push(review);
            }
        });
    });

    console.log("4. Review rating 5: ", fiveStarReviews);


    //5. Rata-rata rating dari review
    const averageRatings = products.map(product => {
        const totalRating = product.reviews.reduce(
            (sum, review) => sum + review.rating, 0
        );

        const averageRating = totalRating / product.reviews.length;

        return {
            id: product.id,
            title: product.title,
            averageRating: averageRating
        };
    });

    console.log("5. Rata-rata rating: ", averageRatings);


    //6. Produk dengan review terbanyak
    const productMostReviews = products.reduce((max, product) => {
        if(product.reviews.length > max.reviews.length){
            return product;
        }

        return max;
    });

    console.log("6. Review terbanyak: ",{
        id: productMostReviews.id,
        title: productMostReviews.title,
        title: productMostReviews.title,
        totalReviews: productMostReviews.reviews.length
    });


    //7. Semua rating menjadi array datar
    const allRatings = products.flatMap(product => 
        product.reviews.map(review => review.rating)
    );

    console.log("7. Semua rating: ", allRatings);


}

main();