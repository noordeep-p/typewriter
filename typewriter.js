const sentence = "hello there from lighthouse labs";

const animate = function(sentence) {
  let maxDelay = sentence.length * 50;
  let timeDelay = 0;
  for (const letter of sentence) {
    setTimeout(() =>
      process.stdout.write(letter), timeDelay);
    timeDelay += 50;
  }
  setTimeout(() =>
    process.stdout.write("\n"), maxDelay);
};

animate(sentence);