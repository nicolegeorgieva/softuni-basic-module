function speedResult(input) {
    let speedResult = Number(input[0]);

    if (speedResult <= 10) {
        console.log("slow");
    } else if (speedResult > 10 && speedResult <= 50) {
        console.log("average");
    } else if (speedResult > 50 && speedResult <= 150) {
        console.log("fast");
    } else if (speedResult > 150 && speedResult <= 1000) {
        console.log("ultra fast");
    } else if (speedResult > 1000) {
        console.log("extremely fast");
    }
}

speedResult(["1001"]);