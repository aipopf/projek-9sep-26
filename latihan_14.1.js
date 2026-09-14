class Queue {
    constructor() {
        this.items = [];
    }

    // Menambahkan elemen ke belakang antrean
    enqueue(item) {
        this.items.push(item);
    }

    // Menghapus elemen paling depan
    dequeue() {
        return this.items.shift();
    }

    // Melihat elemen paling depan tanpa menghapusnya
    peek() {
        return this.items[0];
    }
}

// Contoh penggunaan
const requestQueue = new Queue();

requestQueue.enqueue("Request 1");
requestQueue.enqueue("Request 2");
requestQueue.enqueue("Request 3");

console.log(requestQueue.items);
console.log(requestQueue.peek());

console.log(requestQueue.dequeue());
console.log(requestQueue.dequeue());

console.log(requestQueue.items);