
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
  
// }, 700);


// // ... fill in the rest yourself ...


// setTimeout(() => {
//   process.stdout.write('\r|\n');
// }, 900);


const spinning = function() {
  const mapping = ['\r|   ', '\r/   ','\r-   ','\r\\   ', '\r|\n'];
  let interval = 100;
  for (const item of mapping) {  
    setTimeout(() => {
      process.stdout.write(item)
    }, interval)
    interval += 200;
  }
}

spinning()