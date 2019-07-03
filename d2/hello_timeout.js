
const challenge1 = function(w1) {
    console.log(`${w1}`);
};


// // setTimeout(() => {challenge1('4311o', 'th3r3', 'w0r1d')},3000)

// challenge1('4311o')('th3r3')('w0r1d')
setTimeout(() => {
  challenge1('4311o');
  setTimeout(() =>{
    challenge1('th3r3');
    setTimeout(() => {
      challenge1('w0r1d');
    }, 1000)
  }, 1000)
},1000)