function cleverLilly(input) {
    let lillysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= lillysAge; i++) {
        if (i % 2 === 0) {
            savedMoney += addedMoney;
            stolenMoney++;
            addedMoney += 10;
        } else {
            toysCounter++;
        }
    }

    let totalMoneyFromToys = toysCounter * singleToyPrice;
    let totalSavedMoney = savedMoney + totalMoneyFromToys - stolenMoney;

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}

cleverLilly(["10", "170.00", "6"]);