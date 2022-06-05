function petFoodExpenses(input) {
    let dogFoodPackages = Number(input[0]);
    let catFoodPackages = Number(input[1]);

    let dogFoodPrice = 2.5;
    let catFoodPrice = 4;

    let petFoodExpenses = dogFoodPackages * dogFoodPrice + catFoodPackages * catFoodPrice;

    console.log(petFoodExpenses + ' lv.');
}

petFoodExpenses(["5", "4"]);