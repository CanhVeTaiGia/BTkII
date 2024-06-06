function checkCondition(condition: boolean, callback: (a: boolean) => void){
    setTimeout(() => callback(condition), 1000)
}
checkCondition(true, (a: boolean) => console.log(`Điều kiện trả về: ${a}`))
