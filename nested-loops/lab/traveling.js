function traveling(input) {
    let savings = 0;

    for (let i = 0; i < input.length; i++) {
        let currentInput = input[i];
        if (currentInput === "End") {
            return;
        }
        if (isNaN(currentInput)) {
            console.log(`Going to ${currentInput}!`);
        }
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);