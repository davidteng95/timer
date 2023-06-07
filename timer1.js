const args = process.argv.slice(2);
const timeInput = args.map(Number).sort((a, b) =>  a - b);


for (let time of timeInput) {
  if (time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      }, time * 1000);
  }
}


//node timer1.js 4 1 6
//Timer will sound at 1 second, 4 seconds, and 6 seconds