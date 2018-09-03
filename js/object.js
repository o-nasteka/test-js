var obj = {

};

let a = 10;
let b = 20;

const obj1 = {
    options : 1,
    name: 'Pupkin',
    'some string': a + b,
    three: {
        a: 1,
        b: 2,
        c: {
            'str1': 10,
            str2: 20,
            str3: 'sdsd'
        }
    }
};

var result = obj;

var obj2 = new Object(); // var ob2 = {};

// document.getElementById('result').innerHTML = result.options + ' ' + result.name;


// obj1.options = 123131;

// function addObj(obj,option,value){
//     return obj[option] = value;
// }
//
// addObj(obj, 'one', 'Hello111');
// addObj(obj, 'two', 'World!!!');
//
//
// console.log(obj.one);
// console.log(obj.two);
// console.log(Object.prototype);

// var obj3 = Object.create(obj1);
//
// console.log(obj3.name);


var Person = {
    constructor: function (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function (){
        console.log('Hello, my name is ' + this.name);
    }

};

var person, anotherPerson, thirdPerson;

person = Object.create(Person).constructor("Jonh", 23, "male");
anotherPerson = Object.create(Person).constructor("Jessa", 21, "female");
thirdPerson = Object.create(Person).constructor("Vovan", 41, "male");


console.log(person.name);
console.log(anotherPerson.age);
console.log(thirdPerson.gender);

person.greet();
anotherPerson.greet();
thirdPerson.greet();

console.log('-----------------------');
console.log('-----------------------');


//


function iteration(o) {
    for (v in o) {
        if (typeof o[v] == 'object'){
            console.log(v + ':');
            iteration(o[v]);
        }
        else {
            console.log(v + ' - ' + o[v]);
        }

    }
}

iteration(obj1);

// for (v in obj1){
//
//     console.log(v + ' - ' + obj1[v]);
//
// }