function excursionCalculator(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];
    let pricePerPerson = 0;
    let sum = 0;
    let summerDiscount = 15;
    let winterIncrease = 8;

    switch (season) {
        case 'spring':
            if (peopleCount <= 5) {
                pricePerPerson += 50;
            } else {
                pricePerPerson += 48;
            }

            sum += peopleCount * pricePerPerson;
            console.log(`${sum.toFixed(2)} leva.`)
            break;

        case 'summer':
            if (peopleCount <= 5) {
                pricePerPerson += 48.50;
            } else {
                pricePerPerson += 45;
            }

            sum += peopleCount * pricePerPerson;
            console.log(`${(sum * (1 - summerDiscount / 100)).toFixed(2)} leva.`);
            break;

        case 'autumn':
            if (peopleCount <= 5) {
                pricePerPerson += 60;
            } else {
                pricePerPerson += 49.5;
            }

            sum += peopleCount * pricePerPerson;
            console.log(`${sum.toFixed(2)} leva.`);
            break;

        case 'winter':
            if (peopleCount <= 5) {
                pricePerPerson += 86;
            } else {
                pricePerPerson += 85;
            }

            sum += peopleCount * pricePerPerson;
            console.log(`${(sum * (1 + winterIncrease / 100)).toFixed(2)} leva.`);
            break;
    }
}

excursionCalculator(["20", "winter"]);