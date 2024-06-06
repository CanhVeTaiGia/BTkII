function sortArrayWithPromise(arr: number[]): Promise<number[]> {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject(new Error("Input must be an array"));
        }

        if (!arr.every(item => typeof item === 'number')) {
            return reject(new Error("All elements in array must be numbers"));
        }

        const sortedArray = arr.sort((a, b) => a - b);
        resolve(sortedArray);
    });
}

sortArrayWithPromise([1, 7, 2, 9, 5])
    .then(sortedArray => {
        console.log("Sorted Array:", sortedArray);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });