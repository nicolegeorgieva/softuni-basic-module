function oscars(input) {
    let name = input[0];
    let startingPoints = Number(input[1]);

    for (let i = 3; i < input.length; i++) {

        if (i % 2 !== 0) {
            let points = i + 1;
            let total = input[i].length * Number(input[i + 1]) / 2;
            startingPoints += total;
        }
        if (startingPoints > 1250.5) {
            break;
        }
    }

    if (startingPoints < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
    }
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29",
    "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
