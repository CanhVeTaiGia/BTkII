type callBack = (a: number, b: number) => number;
function caculate(a: number, b:number , callback: callBack){
    return callback(a, b)
}
console.log(caculate(2, 3, (a, b) => a + b));
