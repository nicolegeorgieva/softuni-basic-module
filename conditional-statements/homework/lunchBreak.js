function canYouWatchTheShow(input) {
    let showName = input[0];
    let showTimeMins = Number(input[1]);
    let lunchBreakMins = Number(input[2]);

    let lunchTimeMins = (0.125 * lunchBreakMins);
    let relaxTimeMins = (0.25 * lunchBreakMins);
    let timeLeft = (lunchBreakMins - lunchTimeMins - relaxTimeMins);

    if (timeLeft >= showTimeMins) {
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(timeLeft - showTimeMins)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(showTimeMins - timeLeft)} more minutes.`)
    }
}

canYouWatchTheShow(["Game of Thrones", "60", "96"])