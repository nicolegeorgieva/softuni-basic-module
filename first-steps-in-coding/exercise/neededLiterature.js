function solve3(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hours = bookPages / pagesPerHour; // hours needed
    let finalResult = hours / days;
    console.log(finalResult);
}

// demo(["212", "20", "2"]);


// better
function dailyReadingHours(pagesToRead, pagesPerHour, daysLeft) {
    let hoursToRead = pagesToRead / pagesPerHour;
    let dailyReadingHours = hoursToRead / daysLeft;
    console.log(dailyReadingHours);
}

dailyReadingHours(212, 20, 2);