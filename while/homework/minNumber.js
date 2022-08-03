function minNumber(input) {
    let i = 0;

    let minNumber = input[0];

    while (input[i] !== "Stop") {
        let currentNumber = Number(input[i]);

        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }

        i++;
    }

    console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);
