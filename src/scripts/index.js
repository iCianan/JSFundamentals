import { relative } from "path";

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
    getPeopleId: function(){
        return this.peopleId;
    },
    updatePeopleId: function(newUd){
        this.peopleId = newUd;
        return this.peopleId;
    }
};

console.log(susan.getPeopleId());

console.log(susan.updatePeopleId(256));

console.log(susan.getPeopleId());