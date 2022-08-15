function coffeeMachine(input) {
    let drink = input[0];
    let sugarNeed = input[1];
    let drinksCount = input[2];

    let totalSum = 0;

    switch (drink) {
        case "Espresso":
            if (sugarNeed === "Without") {
                totalSum = (0.90 * drinksCount) * 0.65;
            } else if (sugarNeed === "Normal") {
                totalSum = 1 * drinksCount;
            } else if (sugarNeed === "Extra") {
                totalSum = 1.2 * drinksCount;
            }
            if (drinksCount >= 5) {
                totalSum *= 0.75;
            } break;
        case "Cappuccino":
            if (sugarNeed === "Without") {
                totalSum = (1 * drinksCount) * 0.65;
            } else if (sugarNeed === "Normal") {
                totalSum = 1.20 * drinksCount;
            } else if (sugarNeed === "Extra") {
                totalSum = 1.60 * drinksCount;
            } break;
        case "Tea":
            if (sugarNeed === "Without") {
                totalSum = (0.50 * drinksCount) * 0.65;
            } else if (sugarNeed === "Normal") {
                totalSum = 0.60 * drinksCount;
            } else if (sugarNeed === "Extra") {
                totalSum = 0.70 * drinksCount;
            } break;
    }
    if (totalSum > 15) {
        totalSum *= 0.8;
    }

    console.log(`You bought ${drinksCount} cups of ${drink} for ${totalSum.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", "10"]);