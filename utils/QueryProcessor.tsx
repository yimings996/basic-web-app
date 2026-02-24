export default function QueryProcessor(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (q.includes("what is your andrew id")) {
    return "yimings2";
  }

  // Addition: "What is X plus Y?" or "What is X plus Y plus Z?"
  const addMatch = q.match(/what is (\d+) plus (\d+)(?: plus (\d+))?/);
  if (addMatch) {
    const sum = Number(addMatch[1]) + Number(addMatch[2]) + (addMatch[3] ? Number(addMatch[3]) : 0);
    return sum.toString();
  }

  // Subtraction: "What is X minus Y?"
  const subMatch = q.match(/what is (\d+) minus (\d+)/);
  if (subMatch) {
    return (Number(subMatch[1]) - Number(subMatch[2])).toString();
  }

  // Multiplication (with optional plus): "What is X multiplied by Y plus Z?"
  const mulAddMatch = q.match(/what is (\d+) multiplied by (\d+) plus (\d+)/);
  if (mulAddMatch) {
    return (Number(mulAddMatch[1]) * Number(mulAddMatch[2]) + Number(mulAddMatch[3])).toString();
  }

  // Multiplication: "What is X multiplied by Y?"
  const mulMatch = q.match(/what is (\d+) multiplied by (\d+)/);
  if (mulMatch) {
    return (Number(mulMatch[1]) * Number(mulMatch[2])).toString();
  }

  // Largest: "Which of the following numbers is the largest: X, Y, Z?"
  const largestMatch = q.match(/which of the following numbers is the largest: ([\d, ]+)/);
  if (largestMatch) {
    const nums = largestMatch[1].split(",").map((s) => Number(s.trim()));
    return Math.max(...nums).toString();
  }

  // Primes: "Which of the following numbers are primes: ..."
  const primeMatch = q.match(/which of the following numbers are primes: ([\d, ]+)/);
  if (primeMatch) {
    const nums = primeMatch[1].split(",").map((s) => Number(s.trim()));
    const isPrime = (n: number) => {
      if (n < 2) return false;
      for (let i = 2; i * i <= n; i++) { if (n % i === 0) return false; }
      return true;
    };
    return nums.filter(isPrime).join(", ");
  }

  // Square and cube (perfect sixth power): "Which of the following numbers is both a square and a cube: ..."
  const sqCubeMatch = q.match(/which of the following numbers is both a square and a cube: ([\d, ]+)/);
  if (sqCubeMatch) {
    const nums = sqCubeMatch[1].split(",").map((s) => Number(s.trim()));
    const isSixthPower = (n: number) => {
      if (n === 1) return true;
      for (let i = 2; i ** 6 <= n; i++) { if (i ** 6 === n) return true; }
      return false;
    };
    return nums.filter(isSixthPower).join(", ");
  }

  return "";
}