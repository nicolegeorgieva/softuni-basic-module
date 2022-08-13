function everest(input) {
    let daysCount = 1;
    let startingMeters = 5364;
    let finalMeters = 8848;

    let maxDaysAllowed = 5;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command === "END") {
            break;
        }

        if (command === "Yes") {
            daysCount++

            if (daysCount > maxDaysAllowed) {
                break;
            }
        }

        if (command === "No") {
            continue;
        }

        if (!isNaN(command)) {
            let metersClimbed = Number(command);
            startingMeters += metersClimbed

            if (startingMeters >= finalMeters) {
                break;
            }
        }
    }

    if (startingMeters >= finalMeters) {
        console.log(`Goal reached for ${daysCount} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${startingMeters}`)
    }
}

everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);