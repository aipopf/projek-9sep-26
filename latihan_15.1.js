function printCategories (categories, depth = 0){
    for (const category of categories) {
        console.log(" ".repeat(depth) + category.name);

        if (category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}

const categories = [
    {
        name: "Elektronik",
        children: [
            {
                name: "Laptop",
                children: []
            },
            {
                name: "Handphone",
                children: [
                    {
                        name: "Android",
                        children: []
                    },
                    {
                        name: "iPhone",
                        children: []
                    }
                ]
            }
        ]
    },
    {
        name: "Pakaian",
        children: []
    }
];

printCategories(categories);