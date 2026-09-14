async function main() {

    const products = Array.from(
        { length: 1000 },
        (_, i) => ({
            id: i + 1,
            name: `Product ${i + 1}`,
            category: `Category ${i % 10}`
        })
    );

    let nestedSteps = 0;
    let pairs = [];

    for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {

            nestedSteps++;

            if (products[i].category === products[j].category) {
                pairs.push([products[i], products[j]]);
            }
        }
    }

    console.log("Nested Loop:");
    console.log("Jumlah pemeriksaan:", nestedSteps);
    console.log("Jumlah pasangan:", pairs.length);


    const groups = new Map();

    let mapSteps = 0;

    for (const product of products) {
        mapSteps++;

        if (!groups.has(product.category)) {
            groups.set(product.category, []);
        }

        groups.get(product.category).push(product);
    }

    console.log("Grouping dengna Map")
    console.log("Jumlah Pemeriksaan: ",mapSteps);
}

main();