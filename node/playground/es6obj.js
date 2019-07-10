const user = {
  name: "Serge",
  age: 30,
  location: "Piladelphia",
  label: "Blue Sky",
  stock: 10
};

// Destructuring an object
const { name: sergeName, age: hisAge, rating = 5 } = user;

console.log(sergeName, hisAge);

const transaction = (type, { label, stock }) => {
  console.log(label, stock);
};

transaction("order", user);
