async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    function groupByCategory(products) {
        return products.reduce((groups, product) => {
            const key = product.category;

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(product);

            return groups;
        }, {});
    }

    function categorySummary(groupedProducts) {
        console.table(
            Object.entries(groupedProducts).map(([category, products]) => ({
                category: category,
                jumlah: products.length
            }))
        );
    }

    const groupedProducts = groupByCategory(products);

    categorySummary(groupedProducts);
}

main();