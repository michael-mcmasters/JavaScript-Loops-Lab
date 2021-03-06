// 1. One to Ten.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 2. Squares
// for (let i = 0; i <= 100; i++) {
//   let num = Math.sqrt(i);
//   if (num % 1 == 0) {
//     console.log(i);
//   }
// }

// 3. Even Under N
// let n = 20;
// for (let i = 0; i < 20; i++) {
//   if (i % 2 == 0)
//     console.log(i);
// }

// 4. Sum
// let sum = 0;
// for (let i = 5; i < 10; i++) {
//   sum += i;
// }
// console.log(sum);

// 5. Are We There Yet
// let weAreThere = false;
// while (!weAreThere) {
//   let userAnswer = prompt("Are we there yet?");
//   if (userAnswer.toLowerCase() == "yes")
//     weAreThere = true;
// }

// 6. Triangle
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// 7. Table Square
let rows = 4;
let columns = 4;
console.log(createMultiplicationTable(rows, columns));

// 8. Table Square 2
rows = 6;
columns = 6;
console.log(createMultiplicationTable(rows, columns));

// (Helper function)
function createMultiplicationTable(rows, columns) {
  let table = "";
  
  for (let row = 1; row <= rows; row++) {
    for (let column = 1; column <= columns; column++) {
      if (column == 1) {
        table += "|";                 // Add | to the beginning of the first column of every row.
      }
      let number = row * column;      // It's a multiplication table. So number is row times column. (For example: row 5 column 5 is 25... row 4 column 5 is 20... etc)
      if (column > 1 && number < 10) {
        table += `  ${number} |`;     // Single digit numbers have two spaces before them (except when in the first column.)
      } else {
        table += ` ${number} |`;      // Double digit numbers have one space before them.
      }
    }
    table += "\n";                    // Once all columns in a row are filled, go to next line.
  }
  
  return table;
}