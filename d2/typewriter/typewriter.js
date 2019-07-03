const sentence = "hello there from lighthouse labs";
// let interval = 0;
// for (const char of sentence) {
//   setTimeout(() => {process.stdout.write(char)}, interval)
//   interval += 100;
// }

const printInterval = (str) => {
  let interval = 0;
  let count = 0;
  let length = str.length;
  for (const char of sentence) {
    setTimeout(() => {
      count++;
      let newline = ''
      if (count === length) {
        newline = '\n'
      }
      process.stdout.write(char + newline)}, interval)
    interval += 100;
  }
}

printInterval(sentence);
