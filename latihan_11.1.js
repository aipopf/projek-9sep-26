async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const uniqueCategories = [
        ...new Set(products.map(p => p.category))
    ];

    const uniqueBrands = [
        ...new Set(
            products
            .filter(p => p.brand)
            .map(p => p.brand)
        )
        ];

    const uniqueTags = [
        ...new Set(
            products.flatMap(p => p.tags)
        )
    ];

    console.log("Kategori Unik:", uniqueCategories);
    console.log("Brand Unik:", uniqueBrands);
    console.log("Tag Unik:", uniqueTags);
}

main();