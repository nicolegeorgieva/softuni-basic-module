function graduation(input) {
    let personsName = input[0];
    let torn = 0;
    let gradesSum = 0;

    for (let i = 1; i < input.length; i++) {
        let yearGrade = Number(input[i]);
        gradesSum += yearGrade;

        if (yearGrade < 4) {
            torn += 1;
        }

        if (torn >= 2) {
            console.log(`${personsName} has been excluded at ${i - 1} grade`);
            break;
        }

        if (i === 12) {
            console.log(`${personsName} graduated. Average grade: ${(gradesSum / 12).toFixed(2)}`);
        }
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
