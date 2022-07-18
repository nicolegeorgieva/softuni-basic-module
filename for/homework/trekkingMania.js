function trekkingMania(input) {
    let groupsCount = input[0];
    let allPeople = 0;

    let musalaPeople = 0;
    let monblanPeople = 0;
    let kilimandjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;

    for (i = 1; i <= groupsCount; i++) {
        let peopleInAGroup = Number(input[i]);
        allPeople += peopleInAGroup;

        if (peopleInAGroup <= 5) {
            musalaPeople += peopleInAGroup;
        } else if (peopleInAGroup >= 6 && peopleInAGroup <= 12) {
            monblanPeople += peopleInAGroup;
        } else if (peopleInAGroup >= 13 && peopleInAGroup <= 25) {
            kilimandjaroPeople += peopleInAGroup;
        } else if (peopleInAGroup >= 26 && peopleInAGroup <= 40) {
            k2People += peopleInAGroup;
        } else if (peopleInAGroup >= 41) {
            everestPeople += peopleInAGroup;
        }
    }

    console.log(`${(musalaPeople / allPeople * 100).toFixed(2)}%`);
    console.log(`${(monblanPeople / allPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaroPeople / allPeople * 100).toFixed(2)}%`);
    console.log(`${(k2People / allPeople * 100).toFixed(2)}%`);
    console.log(`${(everestPeople / allPeople * 100).toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);