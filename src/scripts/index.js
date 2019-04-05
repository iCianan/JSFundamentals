import { relative } from "path";

let Car = {
    carId: 123,
    style: 'coupe',
    transmission: 'manual'
};

function Plane(id, type){
    this.planeId = id;
    this.engineType = type;
}

String.prototype.hello = function() {
    return this + " Hello sir";
};

Plane.prototype.start = function() {
    console.log('Starting...' + this.engineType);
};



console.log(JSON.stringify(Car));

console.log('lol'.hello());

let hellcat = new Plane(123, 'V16');
hellcat.start();



class Planet{
    constructor(){
        this.type = 'gas';
    }
    rotate(){
        return console.log(`Rotating: ${this.type}`);
    }
}

class Earth extends Planet{
    constructor() {
        super();
        this.type = 'rock';
    }
    rotate(){
        return console.log('Rotating: for 24 hours');
    }
}
class Jupiter extends Planet{
    rotate(){
        return console.log('Rotating: for 10 hours');
    }
}
let earth = new Earth();
earth.rotate();
console.log(earth.type);


let jupiter = new Jupiter();
jupiter.rotate();
console.log(jupiter.type);