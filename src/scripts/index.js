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

Car.prototype.fail = function() {
    console.log('Starting...' + this.transmission);
};

console.log(JSON.stringify(Car));

console.log('lol'.hello());

let hellcat = new Plane(123, 'V16');
hellcat.start();

Car.fail();