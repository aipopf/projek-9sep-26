export function searchProducts(products, keyword) {
    return products.filter(product =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
    );
}

export function filterByCategory(products, category) {
    if (category === "all") {
        return products;
    }

    return products.filter(product =>
        product.category === category
    );
}

export function sortProducts(products, sort) {
    const result = [...products];

    switch (sort) {
        case "price-asc":
            return result.sort((a, b) => a.price - b.price);

        case "price-desc":
            return result.sort((a, b) => b.price - a.price);

        case "rating":
            return result.sort((a, b) => b.rating - a.rating);

        case "title":
            return result.sort((a, b) =>
                a.title.localeCompare(b.title)
            );

        default:
            return result;
    }
}

export function getStatistics(products) {
    const totalProducts = products.length;

    const averagePrice =
        products.length
            ? products.reduce((sum, product) => sum + product.price, 0)
              / products.length
            : 0;

    const totalStock =
        products.reduce((sum, product) => sum + product.stock, 0);

    const averageRating =
        products.length
            ? products.reduce((sum, product) => sum + product.rating, 0)
              / products.length
            : 0;

    return {
        totalProducts,
        averagePrice,
        totalStock,
        averageRating
    };
}

export function getCategories(products) {
    return [...new Set(
        products.map(product => product.category)
    )];
}

export function findProduct(products, id) {
    return products.find(product => product.id === id);
}

export function hasOutOfStock(products) {
    return products.some(product => product.stock === 0);
}

export function allProductsHaveRating(products) {
    return products.every(product => product.rating > 0);
}