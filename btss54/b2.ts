function divideNumbers(a: any, b: any): number | string{
    try{
        if(b === 0){
            throw new Error("Không thể chia cho 0")
        }
        if(typeof(a) !== 'number' || typeof(b) !== 'number'){
            throw new Error("Phải nhập vào 2 số")
        }
        return a / b
    }catch(error){
        return (error as Error).message
    }finally{
        console.log('Kết thúc hàm divideNumbers');
    }
}
console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));
console.log(divideNumbers('abc', 0));
