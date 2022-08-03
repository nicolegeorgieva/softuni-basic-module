function examPreparation(input) {
    let badNotes = Number(input[0]);

    let notesSum = 0;
    let notesCount = 0;
    let failure = false;
    let lastProblemsName = "";
    let poorNotesCount = 0;

    for (let i = 1; i < input.length; i += 2) {

        if (input[i] === "Enough") {
            break;
        }

        let currentProblemName = input[i];
        lastProblemsName = currentProblemName;

        let currentNote = Number(input[i + 1]);
        notesSum += currentNote;
        notesCount++;

        if (currentNote <= 4) {
            poorNotesCount++;
        }

        if (poorNotesCount === badNotes) {
            console.log(`You need a break, ${poorNotesCount} poor grades.`);
            failure = true;
            break;
        }
    }

    if (!failure) {
        console.log(`Average score: ${(notesSum / notesCount).toFixed(2)}`);
        console.log(`Number of problems: ${notesCount}`);
        console.log(`Last problem: ${lastProblemsName}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
