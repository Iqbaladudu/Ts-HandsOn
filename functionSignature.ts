// Ini merupakan function signature
type Run = (miles: number) => boolean;

// Fungsi di bawah ini mengikuti pola dari function signature di atas
let runner: Run = function (miles: number): boolean {
    if (miles > 10) {
        return true;
    }

    return false;
}

console.log(runner(9));