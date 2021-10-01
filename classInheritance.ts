class Vechile {
    // protected allows the class and any inheriting classes to have access to the member
    constructor(protected wheelCount: number) {}
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
    }
}

class Automobile extends Vechile {
    constructor() {
        super(4)
    }
}

const motorCycle = new Motorcycle();

motorCycle.updateWheelCount(10)
motorCycle.showNumberOfWheels();

const autoMobile = new Automobile();

autoMobile.showNumberOfWheels();