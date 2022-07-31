function solve2(input) {
    let i = 1;

    while (i <= 10) {
        if (i % 2 !== 0) {
            i++;
            continue;
        }

        console.log(i);
        i++;
    }
}

solve2();