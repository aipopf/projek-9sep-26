async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    products.sort((a, b) => a.price - b.price);

    function binarySearch(arr, target){
        let left = 0;
        let right = arr.length - 1;

        while(left <= right){
            const mid = Math.floor((left + right) / 2);

            if(arr[mid].price === target){
                return mid;
            }

            if(arr[mid].price < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        return -1;
    }

    const index = binarySearch(products, 9.99);

    if(index !== -1){
        console.log({
            id: products[index].id,
            title: products[index].title,
            price: products[index].price
        });
    } else {
        console.log("produk tidak ditemukan");
    }
}

main();