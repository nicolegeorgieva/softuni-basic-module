function poolDayExpenses(input) {
    peopleCount = Number(input[0]);
    tax = Number(input[1]);
    deckChairPrice = Number(input[2]);
    umbrellaPrice = Number(input[3]);

    taxExpenses = peopleCount * tax;

    deckChairCount = Math.ceil(0.75 * peopleCount);
    umbrellaCount = Math.ceil(peopleCount / 2);

    deckChairExpenses = deckChairCount * deckChairPrice;

    umbrellaExpenses = umbrellaCount * umbrellaPrice;

    console.log(`${(taxExpenses + deckChairExpenses + umbrellaExpenses).toFixed(2)} lv.`);
}

poolDayExpenses(["21", "5.50", "4.40", "6.20"]);
