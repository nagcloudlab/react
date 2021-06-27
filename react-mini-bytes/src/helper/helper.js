export function add(n1, n2) {
  return n1 + n2;
}

export function sub(n1, n2) {
  return n1 - n2;
}

export function getFood() {
  //..
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("biryani");
    }, 2000);
  });
}
