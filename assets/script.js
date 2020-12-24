/*------------------------------------*\
  #1st Part of Home Task
\*------------------------------------*/

// var cylinder = {
//   radius: 10,
//   height: 40,
//   calcVolume: function () {
//     return Math.PI * this.height * this.radius ** 2;
//   },
//   calcFullArea: function () {
//     return 2 * Math.PI * this.radius * (this.height + this.radius);
//   },
//   calcSideArea: function () {
//     return 2 * Math.PI * this.radius * this.height;
//   }
// };


/*------------------------------------*\
  #function getResult 1st variation
\*------------------------------------*/

// function getResult(a, b, operator) {
//   if (operator === '*') {
//     return a * b;
//   } else if (operator === '/') {
//     return a / b;
//   } else if (operator === '+') {
//     return a + b;
//   } else if (operator === '-') {
//     return a - b;
//   } else if (operator === '**') {
//     return a ** b;
//   } else if (operator === '%') {
//     return a % b;
//   }
// };

// console.log(getResult(10, 20, '*'));


/*------------------------------------*\
  #function getResult 2nd variation
\*------------------------------------*/

// function getResult(a, b, operator) {
//   switch (operator) {
//     case '*':
//       return a * b;
//       break;
    
//     case '/':
//       return a / b;
//       break;
      
//     case '+':
//       return a + b;
//       break;
      
//     case '-':
//       return a - b;
//       break;
      
//     case '**':
//       return a ** b;
//       break;

//     case '%':
//       return a % b;
//       break;
//   }
// };

// console.log(getResult(10, 20, '*'));


/*------------------------------------*\
  #function getResult 3rd variation
\*------------------------------------*/

// var mathOperators = {
//   '*': function (a, b) {
//     return a * b;
//   },
//   '/': function (a, b) {
//     return a / b;
//   },
//   '+': function (a, b) {
//     return a + b;
//   },
//   '-': function (a, b) {
//     return a - b;
//   },
//   '**': function (a, b) {
//     return a ** b;
//   },
//   '%': function (a, b) {
//     return a % b;
//   }
// }

// function getResult(a, b, operator) {
//   return mathOperators[operator](a, b);
// };

// console.log(getResult(10, 20, '*'));


/*------------------------------------*\
  #function getResult 4th variation
\*------------------------------------*/

// function getResult(a, b, operator) {
//   return new Function('return ' + a + operator + b)();
// };

// console.log(getResult(10, 20, '-'));





/*------------------------------------*\
  #2nd Part of Home Task
\*------------------------------------*/

// function isCharPresent(string, symbol) {
//   for (i = 0; i <= string.length; i++)

//   if (string[i] === symbol) {
//     return true;
//   }

//   return false;
// }

// console.log(isCharPresent('olo*', '*'));


/*------------------------------------*\
  #3rd Part of Home Task
\*------------------------------------*/

// function charIndexOf(string, symbol) {
//   for (i = 0; i <= string.length; i++)

//   if (string[i] === symbol) {
//     return i;
//   }

//   return -1;
// }

// console.log(charIndexOf('olo*', '*'));