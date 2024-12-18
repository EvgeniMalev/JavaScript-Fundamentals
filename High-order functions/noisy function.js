function noisy(f) {
  return function(...args) {
    console.log(`Arguments: ${args}`);
    const result = f.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };
}

function sum(a, b) {
  return a + b;
}

const noisySum = noisy(sum);
noisySum(3, 5); 
