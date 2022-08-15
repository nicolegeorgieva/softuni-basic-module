function familyTripBudgetState(input) {
    let currentBudget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let percentAdditionalExpenses = Number(input[3]);

    if (nightsCount > 7) {
        nightPrice = 0.95 * nightPrice;
    }

    nightsExpenses = nightsCount * nightPrice;

    let additionalExpenses = (percentAdditionalExpenses / 100) * currentBudget;
    let moneyLeft = currentBudget - nightsExpenses - additionalExpenses;

    if (moneyLeft >= 0) {
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${((additionalExpenses + nightsExpenses) - currentBudget).toFixed(2)} leva needed.`);
    }
}

familyTripBudgetState(["500", "7", "66", "15"]);