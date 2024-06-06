function processArray(arr: number[], callback: (a: number) => void){
    for(let i = 0; i < arr.length; i++){
        setTimeout(() => {
            callback(i + 1);
        }, 1000 * i);
    }
};
processArray([1,2,3,4,5,6], (a) => console.log(`Số thứ tự ${a}`));