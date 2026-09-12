async function main(){
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    //1.Ambil semua tag
    const allTags = products.flatMap(product => product.tags);
    console.log("1. Semua tag: ", allTags);

    //2. Ambil comment menjadi satu array
    const allComment = products.flatMap(product => 
        product.reviews.map(review => review.comment));
    console.log("2. Semua comment: ", allComment);

}

main();
