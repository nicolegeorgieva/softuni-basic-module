function shopping(input) {
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let moneyForGpu = gpu * 250;
    let moneyForCpu = (moneyForGpu * 0.35) * cpu;
    let moneyForRam = (moneyForGpu * 0.10) * ram;

    let totalSum = moneyForGpu + moneyForCpu + moneyForRam;

    if (gpu > cpu) {
        totalSum *= 0.85;
    }

    if (totalSum <= budget) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);