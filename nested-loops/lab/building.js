function building(input) {
    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);

    for (let floor = floorsCount; floor >= 1; floor--) {
        let floorText = "";

        for (let room = 0; room < roomsCount; room++) {

            if (floor === floorsCount) {
                floorText += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                floorText += `O${floor}${room} `;
            } else {
                floorText += `A${floor}${room} `;
            }
        }

        console.log(floorText);
    }
}

building(["6", "4"]);