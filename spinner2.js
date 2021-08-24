const cycle = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', " \n"];

let delay = 100;
for (const char of cycle) {
   setTimeout(() => {
      process.stdout.write(char);
   }, delay);
   delay += 200;
}