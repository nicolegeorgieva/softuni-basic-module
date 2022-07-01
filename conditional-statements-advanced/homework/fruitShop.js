function fruitPrice(input) {
    let fruit = input[0];
    let day = input[1];
    let fruitsCount = Number(input[2]);
    let price = 0;
    let workDay = day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday";
    let weekend = day === "Saturday" || day === "Sunday";

    switch (fruit) {
        case "banana":
            if (workDay) {
                price = 2.5;
            } else if (weekend) {
                price = 2.7;
            } else {
                console.log("error");
            }
            break;
        case "apple":
            if (workDay) {
                price = 1.2;
            } else if (weekend) {
                price = 1.25;
            } else {
                console.log("error");
            }
            break;
        case "orange":
            if (workDay) {
                price = 0.85;
            } else if (weekend) {
                price = 0.9;
            } else {
                console.log("error");
            }
            break;
        case "grapefruit":
            if (workDay) {
                price = 1.45;
            } else if (weekend) {
                price = 1.6;
            } else {
                console.log("error");
            }
            break;
        case "kiwi":
            if (workDay) {
                price = 2.7;
            } else if (weekend) {
                price = 3;
            } else {
                console.log("error");
            }
            break;
        case "pineapple":
            if (workDay) {
                price = 5.5;
            } else if (weekend) {
                price = 5.6;
            } else {
                console.log("error");
            }
            break;
        case "grapes":
            if (workDay) {
                price = 3.85;
            } else if (weekend) {
                price = 4.2;
            } else {
                console.log("error");
            }
            break;

        default: console.log("error"); break;
    }

    if (price > 0) {
        console.log((price * fruitsCount).toFixed(2));
    }
}

fruitPrice(["apple", "Tuesday", "2"]);