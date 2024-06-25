async function isPrimeWithAsyncAwait(number: number): Promise<boolean> {
    return await new Promise<boolean>((resolve, reject) => {
        if (number < 2) {
            console.log(false);
            return resolve(false);
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                console.log(false);
                return resolve(false);
            }
        }
        console.log(true);
        resolve(true);
    });
}
async function testPrimes() {
    await isPrimeWithAsyncAwait(2);
    await isPrimeWithAsyncAwait(3);
    await isPrimeWithAsyncAwait(4);
}
testPrimes();