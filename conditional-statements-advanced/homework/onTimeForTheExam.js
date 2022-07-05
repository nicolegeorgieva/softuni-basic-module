function onTimeOrNotForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let inExamRoomHour = Number(input[2]);
    let inExamRoomMin = Number(input[3]);

    let hoursDiff = inExamRoomHour - examHour;
    let minutesDiff = inExamRoomMin - examMin;

    minutesDiff += hoursDiff * 60;

    if (minutesDiff < -30) {
        console.log("Early");
    } else if (minutesDiff >= -30 && minutesDiff <= 0) {
        console.log("On time");
    } else {
        console.log("Late");
    }

    let finalTime = "";
    let finalHoursDiff = Math.floor(Math.abs(minutesDiff / 60));
    let finalMinsDiff = Math.abs(minutesDiff % 60);

    if (finalHoursDiff === 0) {
        finalTime = `${finalMinsDiff} minutes`;
    } else {
        let formattedMins = ""
        if (finalMinsDiff < 10) {
            formattedMins = `0${finalMinsDiff}`;
        } else {
            formattedMins = finalMinsDiff;
        }
        finalTime = `${finalHoursDiff}:${formattedMins} hours`;
    }

    if (minutesDiff < 0) {
        console.log(finalTime + " before the start");
    } else if (minutesDiff > 0) {
        console.log(finalTime + " after the start");
    }
}

onTimeOrNotForTheExam(["14", "00", "13", "55"]);