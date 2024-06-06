function findElement(arr: number[], value: number): Promise<number> {
    return new Promise((resolve, reject) => {
        const foundElement = arr.find(element => element === value);
        if (foundElement !== undefined) {
            resolve(foundElement);
        } else {
            reject("Không tìm thấy phần tử");
        }
    });
}

findElement([1, 2, 3, 4, 5], 3)
    .then(result => {
        console.log("Phần tử tìm thấy:", result);
    })
    .catch(error => {
        console.log(error);
    });

findElement([1, 2, 3, 4, 5], 6)
    .then(result => {
        console.log("Phần tử tìm thấy:", result);
    })
    .catch(error => {
        console.error(error);
    });
