'use strict';

// Promiseで遅延して取得される関数の結果を使って (((1 + 2) * 3) - 4) = 5 を求める

const f1 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 100);
});

const f2 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 100);
});

const f3 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 100);
});

const f4 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(4), 100);
});

// 合成する関数の実装 Promise版
// 合成時の処理が毎回異なるのでPromise.allしたものを使いずらい
const getAnswerWithPromise = () => f1()
.then((v1) => f2().then((v2) => v1 + v2))
.then((v1_2) => f3().then((v3) => v1_2 * v3))
.then((v1_2_3) => f4().then((v4) => v1_2_3 - v4));

getAnswerWithPromise().then((a) => console.log(a)).catch((e) => console.error(e)); // 5

// 合成する関数の実装 async-await版
const getAnswerWithAsyncAwait = async () => (await f1() + await f2()) * await f3() - await f4();

getAnswerWithAsyncAwait().then((a) => console.log(a)).catch((e) => console.error(e)); // 5