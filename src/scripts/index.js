import { relative } from "path";
import {Planet} from './models/planet.js';

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

let planet = new Planet();

class Earth extends Planet{
    rotate(){
        return console.log('Rotating: for 24 hours');
    }
}

let earth = new Earth(123);
earth.rotate();
console.log(earth.type);
// class Jupiter extends Planet{
//     rotate(){
//         return console.log('Rotating: for 10 hours');
//     }
// }
// let earth = new Earth();
// earth.rotate();
// console.log(earth.type);


// let jupiter = new Jupiter();
// jupiter.rotate();
// console.log(jupiter.type);