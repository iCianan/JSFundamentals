import { relative } from "path";
import { callbackify } from "util";

let al = (function(){
    let carId = 213;
    let getId = function(){
        return carId;
    };
    let updateId = function(newId){
        carId = newId;
        return carId;
    };
    return {
        getId: getId,
        updateId: updateId
    };
})();
console.log(al.getId());
console.log(al.updateId(123));
console.log(al.getId());

let susan = {
    peopleId : 512,
    lastName: 'Johnson',
    getPeopleId: function(){
        console.log(this);       
        return this.peopleId;         
    },
    updatePeopleId: function(newUd){
        this.peopleId = newUd;
        console.log(this);
        return this.peopleId;
    }
};

let joe = { peopleId: 1024 };
let joeFn = susan.getPeopleId.bind(joe);
console.log('ID: '+ joe.peopleId);
console.log(susan.getPeopleId());
console.log(joeFn() );



let a3 = {
    carId : 23,
    getId:  () => {
        return this.carId;
    },
    updateId: function(newId){
        carId = newId;
        return this.carId;
    }
};
console.log(a3.getId());
