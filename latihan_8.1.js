function sortProducts(products, sortBy) {
    const arr = [...products];

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {

                let shouldSwap = false;

                if (sortBy === "price-asc") {
                    shouldSwap = arr[j].price > arr[j + 1].price;

                } else if (sortBy === "price-desc") {
                    shouldSwap = arr[j].price < arr[j + 1].price;

                } else if (sortBy === "rating") {
                    shouldSwap = arr[j].rating < arr[j + 1].rating;

                } else if (sortBy === "title") {
                    shouldSwap = arr[j].title > arr[j + 1].title;
                }

                if (shouldSwap) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const result = sortProducts(products, "price-asc");

    for (const product of result) {
        console.log({
            id: product.id,
            title: product.title,
            price: product.price,
            rating: product.rating
        });
    }
}

main();