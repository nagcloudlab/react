
interface Wheel{
    rotate:(number)=>number
}

class MRFWheel implements Wheel{
    rotate(speed:number){
        //..
        return 1000.00
    }
}

class Car{
    constructor(private wheel:Wheel){}
    move(){
        this.wheel.rotate(80)
        console.log("car moving..");
    }
}

const wheel={rotate(speed){return 100.00}}
const car=new Car(wheel);
const car2=new Car(new MRFWheel());