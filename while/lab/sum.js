function sum(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < n) {
        let num = Number(input[index]);
        index++;

        sum += num;
    }

    console.log(sum);
}

sum(["100", "10", "20", "30", "40"]);