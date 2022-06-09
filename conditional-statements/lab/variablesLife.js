function solve(input) {
    let currentDay = "Monday";
    let salary = Number(input[0]);

    if (currentDay === "Monday") {
        let a = 10;
        console.log(a + 10);
        salary = a * 2;
    }

    console.log(salary);
}

solve([10]);