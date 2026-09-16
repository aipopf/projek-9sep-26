async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    return data.products;
}

function getStatistics(products) {
    const totalProducts = products.length;

    const averagePrice =
        products.reduce((sum, p) => sum + p.price, 0) / totalProducts;

    const highestPrice = Math.max(
        ...products.map(p => p.price)
    );

    const lowestPrice = Math.min(
        ...products.map(p => p.price)
    );

    const totalStock =
        products.reduce((sum, p) => sum + p.stock, 0);

    const averageRating =
        products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}


function getCategoryAnalytics(products) {
    const categories = {};

    products.forEach(product => {
        const category = product.category;

        if (!categories[category]) {
            categories[category] = {
                count: 0,
                totalPrice: 0,
                totalRating: 0,
                totalStock: 0
            };
        }

        categories[category].count++;
        categories[category].totalPrice += product.price;
        categories[category].totalRating += product.rating;
        categories[category].totalStock += product.stock;
    });

    for (const category in categories) {
        const data = categories[category];

        data.averagePrice =
            data.totalPrice / data.count;

        data.averageRating =
            data.totalRating / data.count;

        delete data.totalPrice;
        delete data.totalRating;
    }

    return categories;
}


function exactSearch(products, keyword) {
    return products.filter(product =>
        product.title === keyword
    );
}


function partialSearch(products, keyword) {
    return products.filter(product =>
        product.title.includes(keyword)
    );
}


function caseInsensitiveSearch(products, keyword) {
    const lower = keyword.toLowerCase();

    return products.filter(product =>
        product.title.toLowerCase().includes(lower)
    );
}


async function loadProducts() {
    try {
        const products = await getProducts();

        const stats = getStatistics(products);
        const analytics = getCategoryAnalytics(products);

        console.log("Statistics:", stats);
        console.log("Category Analytics:", analytics);

        console.log(
            "Exact:",
            exactSearch(products, "Essence Mascara Lash Princess")
        );

        console.log(
            "Partial:",
            partialSearch(products, "Mascara")
        );

        console.log(
            "Case Insensitive:",
            caseInsensitiveSearch(products, "MASCARA")
        );

    } catch (error) {
        console.error(error);
    }
}

loadProducts();