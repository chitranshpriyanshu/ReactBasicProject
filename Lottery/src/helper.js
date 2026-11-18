export default function generateRandom(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }

  return arr;
}