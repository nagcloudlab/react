class MRFWheel {
    rotate(speed) {
        //..
        return 1000.00;
    }
}
class Car {
    constructor(wheel) {
        this.wheel = wheel;
    }
    move() {
        this.wheel.rotate(80);
        console.log("car moving..");
    }
}
const wheel = { rotate(speed) { return 100.00; } };
const car = new Car(wheel);
const car2 = new Car(new MRFWheel());
