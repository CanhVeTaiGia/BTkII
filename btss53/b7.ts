const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myForEach(arr: number[], callback: (a: number, b: number, c: number[]) => void){
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        setTimeout(() => {
            callback(i, arr[i], arr)
            num++
        }, 1000 * i)
    }
}
myForEach(numbers, (a, b, c) => console.log(`Vị trí: ${a} | Phần tử: ${b} | Mảng: ${c}`))