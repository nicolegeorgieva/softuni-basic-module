function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let result = 0;

    if (town === "Sofia") {
        switch (product) {
            case "coffee": result = quantity * 0.50; break;
            case "water": result = quantity * 0.80; break;
            case "beer": result = quantity * 1.20; break;
            case "sweets": result = quantity * 1.45; break;
            case "peanuts": result = quantity * 1.60; break;
        }
    } else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": result = quantity * 0.40; break;
            case "water": result = quantity * 0.70; break;
            case "beer": result = quantity * 1.15; break;
            case "sweets": result = quantity * 1.30; break;
            case "peanuts": result = quantity * 1.50; break;
        }
    } else if (town === "Varna") {
        switch (product) {
            case "coffee": result = quantity * 0.45; break;
            case "water": result = quantity * 0.70; break;
            case "beer": result = quantity * 1.10; break;
            case "sweets": result = quantity * 1.35; break;
            case "peanuts": result = quantity * 1.55; break;
        }
    }
    console.log(result);
}

smallShop(["coffee", "Varna", "2"]);