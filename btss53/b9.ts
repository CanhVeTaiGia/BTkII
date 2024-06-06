type FilterCallback<T> = (element: T, index: number, array: T[]) => boolean;
function myFilter<T>(array: T[], searchValue: T, callback: FilterCallback<T>): [T[], T[]] {
    const result: T[] = [];
    const iteratedArray: T[] = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        iteratedArray.push(element);
        if (callback(element, i, array)) {
            result.push(element);
        }
    }
    if (result.length === 0) {
        return [[], iteratedArray];
    }
    return [result, iteratedArray];
}
const array = [1, 2, 3, 4, 5, 2];
const searchValue = 2;
const filteredArray  = myFilter(array, searchValue, (element) => element === searchValue);
console.log("Filtered Array:", filteredArray);