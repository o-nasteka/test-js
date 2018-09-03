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

var obj2 = Object.create(obj1); // var ob2 = {};

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

        if(!o.hasOwnProperty(v)) continue;

        if (typeof o[v] === 'function') continue;

        if (typeof o[v] == 'object'){
            console.log(v + ':');
            iteration(o[v]);
        }
        else {
            console.log(v + ' - ' + o[v]);
        }

    }
}

// iteration(obj2);

// for (v in obj1){
//
//     console.log(v + ' - ' + obj1[v]);
//
// }

// if(obj1.name) {
//     alert(obj1.name);
// }
//
// if('name' in obj1){
//     alert(obj1.name + ' 222');
// }

// if(obj2.hasOwnProperty('name')){
//     alert(obj2.name);
// }

// if(obj1.propertyIsEnumerable('name')){
//     alert(obj1.name);
// }

/*
*
* Method
*
 */


/*
var obj3 = {
    prop1: 50,
    prop2: 20,
    func: function () {
        console.log(this.prop1 + this.prop2);

        foo(this);
    }
};

obj3.func2 = function(){
    console.log('New method!');
};

function foo(o){
    console.log(o);
}


obj3.func3 = foo;

obj3.func();
*/


var o = {
    prop1: 10,
    prop2: 20,
    func: function () {
        console.log(this.prop1 + this.prop2);
    },
    get summ() {
        return this.prop1 + this.prop2;
    },
    set summ(value) {
        this.prop1 += value;
    }
};

/*
console.log(o.summ + ' summ');

console.log(o.prop1 + ' old');

o.setProp = 20;

console.log(o.prop1 + ' new');

console.log(o.summ + ' new summ');
*/

Object.defineProperty(o, 'prop3', {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(o, 'prop3', {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true
});

// iteration(o);


// var o2 = new foo(a,b,c);


function People(name, age) {
    this.name = name;
    this.age = age;

    this.summ = function () {
        return this.name + ' - ' + this.age;
    }
}

People.prototype = obj1;
People.prototype =

var Ben = new People('Ben', 32);

console.log(Ben.summ());