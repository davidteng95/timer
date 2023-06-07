const args = process.argv.slice(2);
const timeInput = args.map(Number).sort((a, b) =>  a - b);


for (let time of timeInput) {
  if (time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      }, time * 1000);
  }
}
