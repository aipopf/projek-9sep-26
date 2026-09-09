async function fetchAndApplyDiscount(){
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const result = []

    for (const item of products){
        const discountAmount = item.price * (item.discountPercentage / 100);
        const finalPrice = item.price - discountAmount;

        result.push({
            title: item.title,
            originalPrice: item.price,
            discountPercentage: item.discountPercentage,
            finalPrice: Number(finalPrice.toFixed(2))
        });

        
    }

    return result;

}

fetchAndApplyDiscount().then(result => {
    console.log(result);
    console.log(`Jumlah item: ${result.length}`);
})
.catch(error => console.error('Error fetching discount data:', error));