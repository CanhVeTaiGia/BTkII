export const setLocal = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}