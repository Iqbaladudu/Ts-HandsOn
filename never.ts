// Never digunakan untuk mengindikasikan sebuah fungsi yang tidak punya nilai return
function oldEnough(age: number): never | boolean {
    if (age > 59) {
        throw Error("Too old!")
    }
    if (age < 18) {
        return false;
    }
    return true
}

console.log(oldEnough(10))