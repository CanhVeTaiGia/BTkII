export const setLocal = (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
}