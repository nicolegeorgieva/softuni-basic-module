function workTime(input) {
    let time = Number(input[0]);
    let day = input[1];

    if (time >= 10 && time <= 18 &&
        (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" ||
            day === "Friday" || day === "Saturday")) {

        console.log("open");

    } else {
        console.log("closed");
    }
}

workTime(["19", "Friday"]);