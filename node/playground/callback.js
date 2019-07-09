// setTimeout(() => {
//   console.log("2 seconds");
// }, 2000);

// const names = ["Vasya", "Petya", "Masha"];
// const shortName = names.filter(name => {
//   return name.lenght <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     };

//     callback(data);
//   }, 2000);
// };

// geocode("Philadelphia", data => {
//   console.log(data);
// });

const add = (a, b, callback) => {
  setTimeout(() => {
    // const sum = a + b;
    callback(a + b); //confusing moment!! can create sum and pass a and b up above, than return callback(sum)
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum);
});
