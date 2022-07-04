function bestPlayer(input) {

    print(`${bestPlayer(input)} is the best player!`);

    let goals = goalsCount(input);

    if (hattrick(goals) === true) {
        print(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        print(`He has scored ${goals} goals.`);
    }


    function print(message) {
        console.log(message);
    }

    function bestPlayer(input) {
        let bestPlayerName = '';
        let bestGoalsCount = 0;

        for (let i = 1; i < input.length; i += 2) {
            if (input[i] === 'END') {
                break;
            }

            let currentGoalsCount = Number(input[i]);

            if (currentGoalsCount > bestGoalsCount) {
                bestGoalsCount = currentGoalsCount;
                bestPlayerName = input[i - 1];
            }
        }

        return bestPlayerName;
    }

    function goalsCount(input) {
        let bestPlayerName = '';
        let bestGoalsCount = 0;

        for (let i = 1; i < input.length; i += 2) {
            if (input[i] === 'END') {
                break;
            }

            let currentGoalsCount = Number(input[i]);

            if (currentGoalsCount > bestGoalsCount) {
                bestGoalsCount = currentGoalsCount;
                bestPlayerName = input[i - 1];
            }
        }

        return bestGoalsCount;
    }

    function hattrick(bestGoalsCount) {
        let trick = false

        if (bestGoalsCount >= 3) {
            trick = true;
        }

        return trick;
    }
}

bestPlayer(['Silva', '5', 'Harry Kane', '10']);