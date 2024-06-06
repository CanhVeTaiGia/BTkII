function displayNumbers(callback: (a: number) => void){
    for(let i = 1; i < 100; i++){
        setTimeout(() => {
            callback(i);
        }, 1000 * i)
    }
};
displayNumbers((a) => console.log(`Phần tử thứ ${a}`));