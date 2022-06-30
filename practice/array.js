const a = [1,15,3,4,5,13,18,8,9,20,11,12,6,14,2,16,17,7,19,10]

// const reversed = a.map((val, i) => a[a.length - i - 1])

// const reversed = [];
// for (let i = 0; i < a.length; i++) {
//   const endIndex = a.length - i - 1;
//   if (i >= endIndex) {
//     break;
//   }
//   // reversed
//   const temp = a[i];
//   a[i] = a[endIndex];
//   a[endIndex] = temp;
// }

function isPrime(number) {
  if(number <= 1) return false;

  let divisor = 2;
  while(divisor <= (number / 2)) {
    if (number % divisor === 0) return false;
    divisor++;
  }

  return true
}

function sortPrimesFirst(numbers) {
  const primes = [];// numbers.filter(val => isPrime(val));
  const nonPrimes = [];// numbers.filter(val => !isPrime(val));
  for (const num of numbers) {
    if (isPrime(num)) {
      primes.push(num);
    }else {
      nonPrimes.push(num);
    }
  }

  return [...sort(primes), ...sort(nonPrimes)];
}

function sort(numbers) {
  return numbers.sort((a, b) => a - b);
}

// console.log(a.map((val) => `is ${val} prime? ${isPrime(val)}`));

console.log(sortPrimesFirst(a))
console.log(a)
// console.log(reversed)