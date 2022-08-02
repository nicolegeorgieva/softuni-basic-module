function whileDemo(input) {
    let budget = Number(input[0]);
    let index = 1;
    let currentProduct = input[index];
    let sum = 0;

    while (sum < budget) {

        switch (currentProduct) {
            case "500": sum += 500; break;
            case "bag": sum += 100; break;
            case "bottle": sum += 200; break;
            case "car": sum += 500; brak;
            default: console.log("Wrong product"); break;
        }

        index++;
        currentProduct = input[index];
    }

    console.log(`left money: ${budget - sum}`);
}

whileDemo(["500", "bag", "bottle", "bag", "bottle", "car"]);