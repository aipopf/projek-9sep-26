const data = Array.from({length: 1000}, (_,i) => i+1);

function linearSearch(arr, target) {
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        steps++;

        if (arr[i] === target) {
            return steps;
        }
    }

    return steps;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;

        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return steps;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return steps;
}



const simpan1 = linearSearch(data, 1000);
const simpan2 = binarySearch(data, 1000);

console.log("Jumlah pemeriksaan: ", simpan1);
console.log("Hasil pemeriksaan: ", simpan2);