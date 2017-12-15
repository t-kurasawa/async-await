/**
 * basic Promise
 */
const promise = new Promise( (resolve,reject) => {
    resolve(42);
});
promise.then(function(value){
    console.log(value);
}).catch(function(error){
    console.error(error);
});

/**
 * asyncFunction with Promise
 */
const asyncFunction = () => {
    return new Promise((resolve, reject) =>{
        setTimeout( () => {
            resolve('Async Hello world');
        }, 16);
    });
}

//use catch
asyncFunction()
.then((value) => {
    console.log(value);    // => 'Async Hello world'
}).catch( (error) => {
    console.error(error);
});

//promise.then(onFulfilled, onRejected)
asyncFunction().then( 
    (value) => {
        console.log(value);    // => 'Async Hello world'
    },
    (error) => {
        console.error(error);
    }
);

/**
Fulfilled
resolve(成功)した時。このとき onFulfilled が呼ばれる

Rejected
reject(失敗)した時。このとき onRejected が呼ばれる

Pending
FulfilledまたはRejectedではない時。つまりpromiseオブジェクトが作成された初期状態等が該当する
 */



 