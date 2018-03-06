(function() {

  /* First prompt the user for input.
    We use do-while loop to make sure that we execute the prompt at least once
    and that the numbers are integers */

  let number1;
  let number2;
  // In the following 3 variables we store the 3 tests we need to do
  // to see if they are integers. I use the variables to make the code
  // easier to read
  let firstTest;
  let secondTest;
  let thirdTest;


  do { number1 = prompt("Please enter the first number. It must be an integer");
       number1 = Number(number1);
       firstTest = (typeof number1 === "number");
       secondTest = (String(number1) !== "NaN");
       thirdTest = (number1 === Math.floor(number1));
  } while (!(firstTest && secondTest && thirdTest));

  do { number2 = prompt("Please enter the second number. It must be an integer");
       number2 = Number(number2);
       firstTest = (typeof number2 === "number");
       secondTest = (String(number2) !== "NaN");
       thirdTest = (number2 === Math.floor(number2));
  } while (!(firstTest && secondTest && thirdTest));

  // Find minimum, maximum values and order them
  let temp = Math.min(number1, number2);
  number2 = Math.max(number1, number2);
  number1 = temp;

// This is the funtion we use whem the number is divisible by 3
// We add the message to the document and print it to console.
  let sayThree = function(value) {
    let p = document.createElement("p");
    p.innerHTML = "Number: " + value + " is divisible by 3";
    document.body.appendChild(p);

    console.log("Number: " + value + " is divisible by 3");
  };

// This is the funtion we use whem the number is divisible by 5
// We add the message to the document and print it to console.
    let sayFive = function(value) {
    let p = document.createElement("p");
    p.innerHTML = "Number: " + value + " is divisible by 5";
    document.body.appendChild(p);

    console.log("Number: " + value + " is divisible by 5");
  };


  function threeFive(min, max, threeCallback, fiveCallback) {
    // make array
    let numbers = [];
    while (min <= max) {
      numbers.push(min++);
    }
    // start at beginning of array and check if you should call
    // threeCallback or fiveCallback or go on to next
    for (let index=0; index<numbers.length; index++) {
      switch (true) {
        case ((numbers[index] % 15) === 0):
          threeCallback(numbers[index]);
          fiveCallback(numbers[index]);
          break;
        case ((numbers[index] % 5) === 0):
          fiveCallback(numbers[index]);
          break;
        case ((numbers[index] % 3) === 0):
          threeCallback(numbers[index]);
          break;
        default:
      }
    }
  }

  threeFive(number1, number2, sayThree, sayFive);
})();
