function isPrimeWithPromise(a: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number') {
            reject('Giá trị truyền vào phải là số');
            return;
        }
        if (a < 2) {
            resolve(false);
            return;
        }
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                resolve(false);
                return;
            }
        }
        resolve(true);
        return;
    });
}

isPrimeWithPromise(2).then((a: boolean) => {
    console.log(a);
}).catch((err: string) => {
    console.log(err);
});

isPrimeWithPromise(3).then((a: boolean) => {
    console.log(a);
}).catch((err: string) => {
    console.log(err);
});

isPrimeWithPromise(4).then((a: boolean) => {
    console.log(a);
}).catch((err: string) => {
    console.log(err);
});
