import $ from 'jquery';
import {Planet} from './models/planet';
import {Person} from './models/person';



let planet = new Planet();
let person = new Person();


// let promise = $.get("https://swapi.co/api/people/1");
// promise.then(
//     data => console.log('success: ', data),
//     error => console.log('error: ', error)    
// );

// console.log(promise);

// let user = {
//     name: 'Monkey D. Luffy',
//     avatar: 'luffy.jpg'
// };

// let promises = $.post(
//     "http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users",
//     user
// );

// promises.then(
//     data => console.log('data: ', data),
//     error => console.log('error ', error)
// );




fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
        person.name = data.name;
        person.birthYear = data.birth_year;
        planet.url = data.homeworld;
        fetch(planet.url)
        .then(response => response.json())
        .then(data => {
            planet.name = data.name;
            planet.climate = data.climate;
            person.homePlanet = planet.name;
        })
        .catch(error => console.log('error: ', error)); 
    })
    .catch(error => console.log('error: ', error));     

    setTimeout(() => {
        console.log(planet);
        console.log(person);
        }, 5000);

 