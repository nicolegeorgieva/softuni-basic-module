// remainder

function solve(input) {
    let firstNumber = input[0]; //10
    let secondNumber = input[1]; //5
    let remainder = firstNumber % secondNumber;
    console.log(remainder);
}

solve([10, 5, 20]);


function solve2() {
    let firstWord = 'Hi';
    let secondWord = 'Nicole';
    let concatenation = firstWord + ', ' + secondWord;
    console.log(concatenation);
}

solve2();


function solve3(input) {
    let firstNumber = Number(input[0]); //10
    let secondNumber = Number(input[1]); //5
    let sum = firstNumber + secondNumber;
    console.log(sum);
}

solve3(["10", "5", "20"]);


