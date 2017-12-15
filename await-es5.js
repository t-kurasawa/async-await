function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
  
//promise が await 式で停止された場合、promise が解決されて、解決された値を返すのを待ちます。
async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

//値が promise ではなかった場合、値を解決された promise に変換して、それを待ちます。
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();

//promise が拒否された場合、理由となった値をスローします。
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();