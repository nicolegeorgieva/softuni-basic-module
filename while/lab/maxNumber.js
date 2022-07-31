function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (maxNumber < num) {
            maxNumber = num;
        }
        command = input[index];
        index++;
    }

    console.log(maxNumber);
}

maxNumber(["2", "100", "1000", "Stop"]);