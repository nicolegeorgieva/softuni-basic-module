function incomeInEur(input) {
    let vegetablesPricePerKg = Number(input[0]);
    let fruitsPricePerKg = Number(input[1]);
    let vegetablesKg = Number(input[2]);
    let fruitsKg = Number(input[3]);

    const eurToBgn = 1.94;

    let vegetablesPriceBgn = vegetablesPricePerKg * vegetablesKg;
    let fruitsPriceBgn = fruitsPricePerKg * fruitsKg;

    let result = (vegetablesPriceBgn + fruitsPriceBgn) / eurToBgn;

    console.log(result.toFixed(2));
}

incomeInEur(["0.194", "19.4", "10", "10"]);
