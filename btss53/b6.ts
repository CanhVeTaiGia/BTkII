
type Callback = () => void;
function task1(callback: Callback): void {
    console.log("Task 1 đang chạy.");
    setTimeout(() => {
        callback();
    }, 1000);
}
function task2(callback: Callback): void {
    console.log("Task 2 đang chạy.");
    setTimeout(() => {
        callback();
    }, 1500);
}
function task3(callback: Callback): void {
    console.log("Task 3 đang chạy.");
    setTimeout(() => {
        callback();
    }, 2000);
}
function doTask(): void {
    task1(() => {
        task2(() => {
            task3(() => {
                console.log("Hoàn thành các Task!");
            });
        });
    });
}
doTask();
