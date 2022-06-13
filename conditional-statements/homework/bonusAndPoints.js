function bonusAndPoints(input) {
    let startingPoints = Number(input[0]);
    let bonusPoints = 0;
    let totalPoints = 0;

    if (startingPoints <= 100) {
        bonusPoints = 5;
        if (startingPoints % 2 === 0) {
            bonusPoints += 1;
        } else if (startingPoints % 10 === 5) {
            bonusPoints += 2;
        }
    } else if (startingPoints > 1000) {
        bonusPoints = startingPoints * 0.1;
        if (startingPoints % 2 === 0) {
            bonusPoints += 1;
        } else if (startingPoints % 10 === 5) {
            bonusPoints += 2;
        }
    } else if (startingPoints > 100) {
        bonusPoints = startingPoints * 0.2;
        if (startingPoints % 2 === 0) {
            bonusPoints += 1;
        } else if (startingPoints % 10 === 5) {
            bonusPoints += 2;
        }
    }

    totalPoints = startingPoints + bonusPoints;

    console.log(bonusPoints);
    console.log(totalPoints);
}

bonusAndPoints(["2703"]);