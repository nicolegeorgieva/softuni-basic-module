function christmasPreparation(input) {
    let paperRollsCount = Number(input[0]);
    let clothRollsCount = Number(input[1]);
    let litersGlue = Number(input[2]);
    let discountPercent = Number(input[3]);

    let paperRollPrice = 5.80;
    let clothRollPrice = 7.20;
    let literGluePrice = 1.20;

    let sum = paperRollsCount * paperRollPrice + clothRollsCount * clothRollPrice + litersGlue * literGluePrice;

    let finalSum = sum * (1 - discountPercent / 100);

    console.log(finalSum.toFixed(3));
}

christmasPreparation(["2", "3", "2.5", "25"]);

