class Person {
    constructor(private msg = "Hello", public name?: string) {}
    speak() {
        console.log(this.msg, this.name);
    }
}

const tom = new Person("Hello", "Iqbal");
tom.name = "Dudu"
tom.speak()