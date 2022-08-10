function sumOfTwoNumbers(input) {
    let startingNumber = Number(input[0]);
    let finishingNumber = Number(input[1]);
    let expectedSum = Number(input[2]);

    let combinationsCount = 0;

    for (let a = startingNumber; a <= finishingNumber; a++) {

        for (let b = startingNumber; b <= finishingNumber; b++) {
            combinationsCount++;
            if (a + b === expectedSum) {
                console.log(`Combination N:${combinationsCount} (${a} + ${b} = ${expectedSum})`);
                return;
            }
        }
    }

    console.log(`${combinationsCount} combinations - neither equals ${expectedSum}`);
}

sumOfTwoNumbers(["1", "10", "5"]);