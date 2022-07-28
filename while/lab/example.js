function accountBalance(input) {
    let index = 0;
    let text = input[index];
    index++;

    while (text !== "Stop") {
        console.log(text);
        text = input[index];
        index++;
    }
}

accountBalance(["Nicole", "Smartphone", "Laptop", "Stop"]);