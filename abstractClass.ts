namespace AbstractNamespace {
    // Membuat kelas abstrak
    abstract class Vechile {
        constructor(protected wheelCount: number) {}
        abstract updateWheelCount(newWheelCount: number): void;
        showNumberOfWheels() {
            console.log(`Moved ${this.wheelCount} miles`)
        }
    }
    class Motorcycle extends Vechile {
        constructor() {
            super(2)
        }

        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount
            console.log(`Motorcycle has ${this.wheelCount}`)
        }
    }
    class Automobile extends Vechile {
        constructor() {
            super(4)
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount
            console.log(`Automobile has ${this.wheelCount}`)
        }
        showNumberOfWheels() {
            console.log(`Moved ${this.wheelCount} miles`)
        }
    }

    const motorCycle = new Motorcycle();

    motorCycle.updateWheelCount(1);

    const autoMobile = new Automobile();

    autoMobile.updateWheelCount(3);
}