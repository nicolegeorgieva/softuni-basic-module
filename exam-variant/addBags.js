function addBags(input) {
    let bagsPriceOver20Kg = Number(input[0]);
    let bagsWeight = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let bagsCount = Number(input[3]);

    let bagsPrice = 0;

    if (bagsWeight < 10) {
        bagsPrice = bagsPriceOver20Kg * 0.2;
    } else if (bagsWeight >= 10 && bagsWeight <= 20) {
        bagsPrice = bagsPriceOver20Kg * 0.5;
    } else {
        bagsPrice = bagsPriceOver20Kg;
    }

    if (daysToTrip < 7) {
        bagsPrice *= 1.4;
    } else if (daysToTrip >= 7 && daysToTrip <= 30) {
        bagsPrice *= 1.15;
    } else {
        bagsPrice *= 1.1;
    }

    let finalSum = (bagsCount * bagsPrice).toFixed(2);

    console.log(`The total price of bags is: ${finalSum} lv.`);
}

addBags(['30', '18', '15', '2']);