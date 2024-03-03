// Async callback
/**
 * const promise = new Promise(resolve, reject){
    if(API Response successfull)
        resolve()
    else
        reject()
}

 */

/**
 * Nested Callback
 */

// function f1(
//     function f2(
//         function f3(){

// }
// ){

// }){

// }

/**
 * Promise
 */

const promise = new Promise(function(resolve, reject){
    console.log('Start loader');
    // API call
    if(Math.random()>0.5){
        resolve({city: 'Delhi', tempratrue: '39'}); //data
    }else{
        reject({code: 402, message: 'Data not found'}); //error
    }
})

promise.then(response => console.log(response)).catch(error => console.log(error)).finally(() => {console.log('Stop loader');})
// promise.finally(() => {
//     console.log('Stop loader');
// })

/*
const promise1 = new Promise(function(resolve){
    resolve('frist');
})
const promise2 = new Promise(function(resolve){
    resolve('Second');
})
const promise3 = new Promise(function(resolve){
    resolve('Third');
})

Promise.all([promise1, promise2, promise3]).then(res=>console.log(res));
*/

/*

// all --> means all must work. 

const promise1 = new Promise(function(resolve){
    resolve('frist');
})
const promise2 = new Promise(function(resolve, reject){
    reject('Second');
})
const promise3 = new Promise(function(resolve){
    resolve('Third');
})

Promise.all([promise1, promise2, promise3])
.then(res=>console.log(res))
.catch(err => console.log(err))
.finally(()=>console.log("over"));
*/

// any --> any one which is working first.

const promise1 = new Promise(function(resolve,reject){
    reject('frist');
})
const promise2 = new Promise(function(resolve, reject){
    resolve('Second');
})
const promise3 = new Promise(function(resolve){
    resolve('Third');
})

Promise.any([promise1, promise2, promise3])
.then(res=>console.log(res))
.catch(err => console.log(err))
.finally(()=>console.log("over"));


const promise4 = Promise.resolve('Open');
promise4.then(res => console.log(res));

const promise5 = Promise.reject('fail');
promise5.catch(err => console.log(err));

// Interview que1

/**
 * async & await
 */

async function f(){
    const promise = new Promise(function(resolve){
        setTimeout(()=>{
            resolve('res')
        },2000);
    });
console.log('between1')
const data = await promise;
console.log('between2')
console.log(data)
}

f();


