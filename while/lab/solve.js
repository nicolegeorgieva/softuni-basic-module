function solve(input) {
    let n = Number(input[0]);

    let k = 1;

    while (k <= n) {
        console.log(k);
        k = k * 2 + 1;
    }
}

solve(["8"]);