function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arivalHour = Number(input[2]);
    let arivalMin = Number(input[3]);

    let totalExamMin = examHour * 60 + examMin;
    let totalArivalMin = arivalHour * 60 + arivalMin;

    let difference = Math.abs(totalArivalMin - totalExamMin);
    let hourDiff = Math.floor(difference / 60);
    let minDiff = difference % 60;

    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}`;
    }
    if (totalArivalMin === totalExamMin) {
        console.log('On time');
    } else if ((totalArivalMin > totalExamMin) && (difference < 60)) {
        console.log('Late');
        console.log(`${minDiff} minutes after the start`);
    } else if ((totalArivalMin > totalExamMin) && (difference >= 60)) {
        console.log('Late');
        console.log(`${hourDiff}:${minDiff} hours after the start`);
    } else if (difference <= 30) {
        console.log('On time');
        console.log(`${minDiff} minutes before the start`);
    } else if (difference > 30 && difference < 60) {
        console.log('Early');
        console.log(`${minDiff} minutes before the start`);
    } else {
        console.log('Early');
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }
}

onTimeForExam(["14", "00", "13", "55"]);