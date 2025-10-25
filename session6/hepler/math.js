let add = (x, y) => {
  let z = x + y;
  return z;
};

let sub = (x, y) => {
  let z = x - y;
  return z;
};

let inc = (x) => {
  let z = x + 1;
  return z;
};

let dec = (x) => {
  let z = x - 1;
  return z;
};

module.exports = {
  add,
  sub,
  inc,
  dec,
};
