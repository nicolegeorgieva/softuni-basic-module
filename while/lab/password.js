function password(input) {
    let index = 0;
    let name = input[index];
    index++;

    let pass = input[index];
    index++;

    let tempPassword = input[index];
    index++;
    while (tempPassword !== pass) {
        tempPassword = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}

password(["Nicole", "1234", "Pass", "1234", "1234"]);