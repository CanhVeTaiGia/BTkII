const numbers1: number[] = [1, 2, 3, 4, 5, 6];
function myFind(arr: number[], num: number, callback: (a: number | null) => void){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return callback(num)
        }
    }
    return callback(null)
}
myFind(numbers1, 2, (a: number | null) => console.log(a));
myFind(numbers1, 10, (a: number | null) => console.log(a));