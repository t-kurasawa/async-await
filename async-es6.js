const resolveAfter2Seconds = (x) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
};

const add = async (x) => {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}  
  
add(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
});