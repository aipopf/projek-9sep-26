export function linearSearch(array, target) {
    for (const item of array) {
        if (item.title.toLowerCase().includes(target.toLowerCase())) {
            return item;
        }
    }

    return null;
}


export function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        const value = array[middle].title.toLowerCase();

        if (value === target.toLowerCase()) {
            return array[middle];
        }

        if (value < target.toLowerCase()) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return null;
}


export function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;
    }, {});
}


export function sortByPrice(products, order = "asc") {
    return [...products].sort((a, b) => {
        return order === "asc"
            ? a.price - b.price
            : b.price - a.price;
    });
}


export function filterByCategory(products, category) {
    if (category === "all") {
        return products;
    }

    return products.filter(product => product.category === category);
}