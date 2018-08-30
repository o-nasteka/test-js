// let a = 1;
// let b = 20;
//


// switch (a) {
//     case 10:
//         alert('10');
//         break;
//     case 30:
//         alert('20');
//         break;
//
//     default:
//         document.write('Nothing!');
//         break;
// }


// while (a <= 10) {
//     console.log(a);
//     a++;
// }

// let c = 2;
// let i = 0;
//
// do {
//     c = c * 2;
//     i++;
//     console.log(c);
// }
//
// while (i < 9);

/*
let str = '<table border="2px" width="30%">';

for (let i = 1; i <= 10; i++) {
    str += '<tr>';

    for (let j = 1; j <= 10; j++) {
            str += '<td>' + (i*j) + '</td>';
    }

    str += '</tr>';
}

str += '</table>';

let el = document.getElementById('main_content');

el.innerHTML = el.innerHTML + str;


*/


/*
function func(param1, param2) {
    let result = param1 * param2;
    return result;
}

let result = func(10,20);

let el = document.getElementById('main_content');

el.innerHTML = el.innerHTML + result;

*/


// function func(param1, param2) {
//
//     let result = param1 * param2;
//
//     return result;
// }


// (function (param1, param2) {
//         console.log(param1)
//     } (10,20)
// );

// func(10,20);

// function func(x) {
//     if (x <= 1) {
//         return 1;
//     }
//     return x * func(x-1);
// }
//
// console.log(func(3)); // 1*2*3*4....10 factorial
//
// let f = function fact(x) {
//     if (x <= 1) {
//         return 1;
//     }
//     return x * fact(x-1);
// };
//
//
// document.write(f(4));


// function func(param1, param2) {
// //     // let result = param1 * param2;
// //
// //     let result = arguments[0] * arguments[1];
// //
// //     return result;
// // }
// //
// // alert(func(10,20,30,40,50));


let arr = [];

// let arr2 = [['hello',2],1,2,3,4,5,6,7,8,9,10];


// let arr3 = new Array();

// arr2[3] = 'Hello';
//
// arr2[11] = 11;
// arr2[12] = 12;
//
// arr2[100] = 100;
//
// arr2['hello'] = 'world';
// arr2['hello2'] = 'world2';
// arr2['hello3'] = 'world3';
//
// let el = document.getElementById('main_content');
//
//
// let k = Object.keys(arr2);

// for (let i = 0; i < arr2.length; i++) {
//
//         // document.write(arr2[i] + '<br>');
//         // el.innerHTML = el.innerHTML + arr2[k] + '<br>';
//         el.innerHTML = el.innerHTML + i + '<br>';
//
//
// }

// for (let i = 0; i < k.length; i++) {
//
//     el.innerHTML = el.innerHTML + k[i] + ' => ' + arr2[k[i]] + '<br>';
//
// }

// let table = new Array(11);
// for (let i = 0; i < table.length; i++) {
//
//     table[i] = new Array(11);
//
// }
//
// let str = '<table border="2px" width="30%">';
//
// for (let row = 1; row < table.length; row++) {
//
//     str += '<tr>';
//
//     for (let col = 1; col < table[row].length; col++) {
//
//         table[row][col] = row * col;
//         str += '<td>' + table[row][col] + '</td>';
//     }
//
//     str += '</tr>';
// }
//
// str += '</table>';
//
// let el = document.getElementById('main_content');
// el.innerHTML = el.innerHTML + str;




// if (Array.isArray(arr2)) {
//     alert('true');
// }
// else {
//     alert('false');
// }


// alert(arr2.join('-'));
// alert(arr2.reverse());
// alert(arr2.sort(function (a,b) {
//     console.log(a + '|' + b);
//     return b-a;
//
// }));


// let arr_res = arr2.concat(2,5,7,8);
// alert(arr2.slice(0,2));


// arr2.splice(2,2);

// arr2.unshift(10,20,30);
// arr2.shift();

// delete arr2[0];


// arr2.forEach(function (v,i,a) {
//
//     a[i] = v + 10 + 'hello';
//
// });

// let arr2 = [10,1,2,3,4];
//
// let res = arr2.map(function (x,i,a) {
//
//     return x * x;
//
// });

const arr2 = [10,11,2,3,4];


// const res = arr2.filter(function (x,i,a) {
//
//     return x < 5;
//
// });
//

// every()

// some()


// const res = arr2.some(function (x) {
//
//     return x < 11;
//
// });


// const res = arr2.reduce(function (x,y) {
//
//     return x+y;
//
// },0);

// alert(arr2.lastIndexOf(4));


// alert(res);

// const el = document.getElementById('main_content');
//
// arr2['hello'] = 'world!';
//
// for (let key in arr2) {
//     // document.write(key + ' => ' + arr2[key] + '<br>');
//     el.innerHTML = el.innerHTML + key + ' => ' + arr2[key] + '<br>';
// }









