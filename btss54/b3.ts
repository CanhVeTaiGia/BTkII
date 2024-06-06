function sumWithPromise(numbers: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')) {
            reject("Tất cả các phần tử trong mảng phải là số.");
            return;
        }
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        resolve(sum);
    });
}
const numbersArray = [1, 2, 3, 4, 5];
sumWithPromise(numbersArray)
.then(sum => {
    console.log("Tổng của mảng là:", sum);
})
.catch(error => {
    console.error("Lỗi:", error);
});