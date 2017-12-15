const resolveAfter2Seconds = (x) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
const f1 = async() => {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}

f1();