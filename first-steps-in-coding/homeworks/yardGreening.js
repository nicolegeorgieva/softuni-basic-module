function yardGreeningSum(input) {
    let greenAreaM2 = Number(input[0]);
    let pricePerM2 = 7.61;

    let priceForGreening = greenAreaM2 * pricePerM2;
    let discountPercent = 0.18;
    let discountSum = priceForGreening * discountPercent;

    console.log(`The final price is: ${priceForGreening - discountSum} lv.`);
    console.log(`The discount is: ${discountSum} lv.`);
}

yardGreeningSum(["550"]);