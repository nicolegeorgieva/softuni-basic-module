function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTimeSec = timeFirst + timeSecond + timeThird;

    let minutes = Math.floor(totalTimeSec / 60);
    let seconds = totalTimeSec % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["35", "45", "44"]);

