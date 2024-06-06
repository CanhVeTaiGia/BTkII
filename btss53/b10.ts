type FindIndexCallback<T> = (element: T, index: number, array: T[]) => boolean;
function myFindIndex<T>(array: T[], searchValue: T, callback: FindIndexCallback<T>): number {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element, i, array)) {
            return i;
        }
    }
    return -1;
}
const array1 = [1, 2, 3, 4, 5, 2];
const searchValue1 = 2;
const foundIndex = myFindIndex(array1, searchValue1, (element) => element === searchValue1);
console.log("Found Index:", foundIndex);

