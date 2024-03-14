// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos';
const app = express();

app.use(bodyParser.json());
app.use(todosRoutes)

app.listen(3000);
// "use strict";

// console.log(add(1,6));
// to get the below bugs during dev, thats ts in a nutshell
// console.log(add('1', '6'));


// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;

// const numResults: Array<number> = [];
// const textResults: string[] = [];

// type numOrString = number | string;
// type Result = {val: number; timestamp: Date}

// function add(num1: numOrString, num2: numOrString) {
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2;
//     } else if (typeof num1 === 'string' && typeof num2 === 'string'){
//         return num1 + ' ' + num2;
//     }
//     return +num1 + +num2;
// }

// function printResult(resultObj: Result ){
//     console.log(resultObj.val)
// }

// buttonElement.addEventListener('click', () => {
//     const num1 = num1Element.value;
//     const num2 = num2Element.value;
//     const result = add(+num1, +num2);
//     numResults.push(result as number);
//     const stringResult = add(num1, num2)
//     textResults.push(stringResult as string)
//     printResult({ val: result as number, timestamp: new Date() });
//     console.log(numResults, textResults);

// })

// const myPromise = new Promise<string>((resolve, reject) => {
//     setTimeout(()=> {
//         resolve('It worked')
//     }, 1000)
// })

// myPromise.then((result) => {
//     console.log(result.split('w'))
// })