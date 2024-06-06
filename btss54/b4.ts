async function sumArrayWithPromise(arr: number[]) {
    let sum = 0;
    await new Promise((resolve, reject) => {
        sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        resolve(sum);
    });
    return sum;
}

sumArrayWithPromise([1, 2, 3, 4, 5, 6, 7]).then((sum) => {
    console.log(sum);
});
