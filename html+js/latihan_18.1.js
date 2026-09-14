const state = {
    products: [],
    search:"",
    category:"all",
    sortBy:"default",
    status: "idle"
};

async function main(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    // Masukkan data API ke state
    state.products = data.products;

    // Setelah state berubah, render ulang
    render();
}

function render(){
    let products = state.products;

    //filter berdasarkan search
    if(state.search !== ""){
        products = products.filter(product =>
            product.title
                .toLowerCase()
                .includes(state.search.toLowerCase())
        );
    }

    //sorting
    if(state.sortBy === "price-low"){
        products = [...products].sort(
            (a, b) => a.price - b.price
        );
    }

    renderProducts(products);
}

function renderProducts(products){
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products){

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img 
                src="${product.thumbnail}" 
                alt="${product.title}"
                width="150"
            >

            <h2>${product.title}</h2>

            <p>Kategori: ${product.category}</p>

            <p>Harga: $${product.price}</p>

            <p>Rating: ${product.rating}</p>
        `;

        container.append(card);
    }
}

main();
