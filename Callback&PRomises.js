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
    if(Math.random()>0.5){
        resolve({city: 'Delhi', tempratrue: '39'}); //data
    }else{
        reject({code: 402, message: 'Data not found'}); //error
    }
})

promise.then(response => console.log(response)).catch(error => console.log(error))



