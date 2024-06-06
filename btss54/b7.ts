const myFirstPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

myFirstPromise.then((message: string) => {
    console.log(`Result! ${message}`);
}).catch((error: any) => {
    console.error(`Error: ${error}`);
});