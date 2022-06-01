function demo(input) {
    let deposit = Number(input[0]); //deposit (money)
    let period = Number(input[1]); //periodMonths
    let percent = Number(input[2]); //yearlyPercent
    let sum = deposit + period * ((deposit * percent / 100) / 12);
    console.log(sum);
}

// demo(["200", "3", "5.7"]);



//the right way:

function deposit(deposit, periodInMonths, yearlyPercent) {
    return deposit + periodInMonths * ((deposit * yearlyPercent / 100) / 12);
}


//DSK: ["200 ","3 ","5.7 "]
//UniCredit: ["2350","6 ","7"]

let dskMoney = deposit(200, 3, 5.7);
let unicreditMoney = deposit(2350, 6, 7);

console.log(dskMoney + unicreditMoney);
