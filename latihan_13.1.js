const readline = require("readline");

class Stack {
    constructor(){
        this.items=[];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

async function main() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const searchHistory = new Stack();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function search(keyword){
        searchHistory.push(keyword);

        const results = products.filter(product =>
            product.title.toLowerCase().includes(keyword.toLowerCase())
        );

        console.log("\nHasil pencarian: ");

        if (results.length === 0) {
            console.log("Produk tidak ditemukan.");
        } else {
            results.forEach(product => {
                console.log(`- ${product.title} ($${product.price})`);
            });
        }
        
    }


    function undoSearch(){
        searchHistory.pop();

        if (searchHistory.isEmpty()) {
            console.log("Tidak ada riwayat pencarian sebelumnya.");
            return;
        }

        const previousKeyword = searchHistory.peek();

        console.log(`Undo search → ${previousKeyword}`);

        const results = products.filter(product =>
            product.title.toLowerCase().includes(previousKeyword.toLowerCase())
        );

        results.forEach(product => {
            console.log(`- ${product.title} ($${product.price})`);
        });
    }

    function askInput() {
        rl.question("\nMasukkan keyword (atau 'undo'): ", input => {

            if (input.toLowerCase() === "undo") {
                undoSearch();
            } else {
                search(input);
            }

            if (input.toLowerCase() === "exit") {
                rl.close();
                return;
            }

            askInput();
        });
    }

    askInput();
}

main();