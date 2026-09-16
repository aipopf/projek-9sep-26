export function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}


export function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;

    return div.innerHTML;
}