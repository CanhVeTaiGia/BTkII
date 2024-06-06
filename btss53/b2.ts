function delayCallBack(callback: () => void, delay: number){
    return setTimeout(() => {
        callback()
    }, 5);
}
delayCallBack(() => console.log('Hello'), 5)