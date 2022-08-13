function exam(input) {
    let studentsCount = Number(input[0]);

    let failStudentsCount = 0;
    let goodStudentsCount = 0;
    let veryGoodStudentsCount = 0;
    let excellentStudentsCount = 0;
    let totalSum = 0;

    for (let i = 1; i < input.length; i++) {

        let currentResult = Number(input[i]);
        totalSum += currentResult;

        if (currentResult >= 2.00 && currentResult <= 2.99) {
            failStudentsCount++;
        } else if (currentResult >= 3.00 && currentResult <= 3.99) {
            goodStudentsCount++;
        } else if (currentResult >= 4.00 && currentResult <= 4.99) {
            veryGoodStudentsCount++;
        } else if (currentResult >= 5.00) {
            excellentStudentsCount++;
        }
    }

    console.log(`Top students: ${((excellentStudentsCount / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((veryGoodStudentsCount / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((goodStudentsCount / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((failStudentsCount / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalSum / studentsCount).toFixed(2)}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);