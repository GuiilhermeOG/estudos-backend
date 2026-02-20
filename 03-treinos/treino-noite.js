const formatPerson = (name, age) => {
  return `${name} tem ${age} anos`;
};

const double = (number) => {
  return number * 2;
};

const greaterThanTen = (number) => {
  return number > 10;
};

console.log(formatPerson("Guilherme", 22));
console.log(double(5));
console.log(greaterThanTen(20));
