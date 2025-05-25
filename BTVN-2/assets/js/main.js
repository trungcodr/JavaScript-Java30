//Bai 7
const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};
console.log(`Kiểm tra số 1: ${isPrime(1)}`);
console.log(`Kiểm tra số 2: ${isPrime(2)}`);
console.log(`Kiểm tra số 3: ${isPrime(3)}`);
console.log(`Kiểm tra số 4: ${isPrime(4)}`);
console.log(`Kiểm tra số 5: ${isPrime(5)}`);

// Bai 6
const gcd = (a, b) => {
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
};
const arePrime = (m, n) => {
  if (m < 1 || n < 1) {
    return false;
  }
  return gcd(m, n) === 1;
};
console.log(arePrime(9, 28));
console.log(arePrime(12, 18));
console.log(arePrime(17, 31));

//Bai 5
const listPerfectSquares = (m, n) => {
  if (m >= n || m < 0 || n < 0) {
    console.log("m phai nho hon n va ca hai phai la so tu nhien!");
    return;
  }

  const result = [];

  let start = Math.ceil(Math.sqrt(m));
  let end = Math.ceil(Math.sqrt(n));

  for (let i = start; i < end; i++) {
    result.push(i * i);
  }

  console.log(`Cac so chinh phuong trong doan [${m}, ${n}]:`, result);
  console.log(`Tong cong co ${result.length} so chinh phuong.`);
};
listPerfectSquares(10, 50);

//Bai 1
const findNearIsPrime = (arr, X) => {
  const primes = arr.filter(isPrime);
  if (primes.length === 0) {
    console.log("Khong co so nguyen to nao trong mang!");
    return;
  }
  let near = primes[0];
  let minDiff = Math.abs(primes[0] - X);

  for (let i = 1; i < primes.length; i++) {
    const diff = Math.abs(primes[0] - X);
    if (diff < minDiff || (diff === minDiff && primes[i] < near)) {
      minDiff = diff;
      near = primes[i];
    }
  }
  return near;
};
console.log(findNearIsPrime([4, 7, 10, 11, 13], 9));
console.log(findNearIsPrime([4, 6, 8], 10));

//Bai 2
//Ham kiem tra so thuan ngich
const isPalindrome = (n) => {
  const str = n.toString();
  return str === str.split('').reverse().join('');
};

//Ham kiem tra khong chua chu so 4
const doesNotContainFour = (n) => !n.toString().includes('4');

// Ham liet ke cac so thoa man
const listSpecialNumbers = () => {
  const result = [];

  for (let n = 10000; n <= 9999999; n++) {
    if (
      n.toString().length >= 5 &&
      n.toString().length <= 7 &&
      isPrime(n) &&
      isPalindrome(n) &&
      doesNotContainFour(n)
    ) {
      result.push(n);
    }
  }

  console.log("Các số nguyên thỏa mãn điều kiện là:");
  console.log(result);
  console.log(`Tổng cộng có ${result.length} số.`);
};

listSpecialNumbers();