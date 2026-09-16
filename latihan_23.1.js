async function testAsync() {
    console.log("1. Fungsi dimulai");

    const result = await new Promise(resolve => {
        setTimeout(() => {
            resolve("3. Promise selesai");
        }, 2000);
    });

    console.log(result);
    console.log("4. Fungsi selesai");
}

console.log("0. Sebelum fungsi");

testAsync();

console.log("2. Setelah fungsi");