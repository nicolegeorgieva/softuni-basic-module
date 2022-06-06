function waterLitersInFishTank(input) {
    let lenghtInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let fishTankSizeInM3 = lenghtInCm * widthInCm * heightInCm;
    let fishTankSizeInLiters = fishTankSizeInM3 / 1000;

    console.log(fishTankSizeInLiters * (1 - percent));
}

waterLitersInFishTank(["85", "75", "47", "17"]);