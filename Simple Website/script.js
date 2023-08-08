// function myFunction() {}

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// for (let index = 0; index < cars.length; index++) {
//     text += cars[index] + "<br />";
// }

// document.getElementById("loop").innerHTML = text;

// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Monday";
//         break;
//     case 1:
//         day = "Tuesday";
//         break;
//     case 2:
//         day = "Wednesday";
//         break;
//     case 3:
//         day = "Thursday";
//         break;
//     case 4:
//         day = "Friday";
//         break;
//     case 5:
//         day = "Saturday";
//         break;
//     case 6:
//         day = "Sunday";
//         break;
// }
// document.getElementById("day").innerHTML = `Today is ${day}`;

// let text = "";

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200],
// ]);

// for (const x of fruits) {
//     text += x + "<br>";
// }

// fruits.forEach((value, key) => {
//     text += key + " " + value;
// });

// document.getElementById("day").innerHTML = text;

// let x = 3.4;
// console.log(x.toString());
// console.log(typeof x);

// let text =
//     '{"employees":[' +
//     '{"firstName":"John","lastName":"Doe" },' +
//     '{"firstName":"Anna","lastName":"Smith" },' +
//     '{"firstName":"Peter","lastName":"Jones" }]}';

// const obj = JSON.parse(text);
// console.log(obj.employees[1].firstName);

// const dogs = {
//     name: "maggie",
//     age: "2",
//     details() {
//         return `my name is ${this.name} and I am ${this.age} years old`;
//     },
// };

// console.log(dogs.details());

class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    detail() {
        return `my name is ${this.name} and I am a ${this.position}`;
    }
}

const newEmployee = new Employee("Angielyn", "Junior Software Engineer");
console.log(newEmployee.detail());
