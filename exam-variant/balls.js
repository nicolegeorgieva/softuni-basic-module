function ballsGame(input) {

    print(`Total points: ${totalPoints(input)}`);
    print(`Red balls: ${redBalls(input)}`);
    print(`Orange balls: ${orangeBalls(input)}`);
    print(`Yellow balls: ${yellowBalls(input)}`);
    print(`White balls: ${whiteBalls(input)}`);
    print(`Other colors picked: ${otherBalls(input)}`);
    print(`Divides from black balls: ${blackBalls(input)}`);


    function print(message) {
        console.log(message);
    }

    function redBalls(input) {
        let redCount = 0;

        for (let i = 1; i < input.length; i++) {
            let color = input[i];

            if (color === 'red') {
                redCount += 1;
            }
        }

        return redCount;
    }

    function orangeBalls(input) {
        let orangeCount = 0;

        for (let i = 1; i < input.length; i++) {
            let color = input[i];

            if (color === 'orange') {
                orangeCount += 1;
            }
        }

        return orangeCount;
    }

    function yellowBalls(input) {
        let yellowCount = 0;

        for (let i = 1; i < input.length; i++) {
            let color = input[i];

            if (color === 'yellow') {
                yellowCount += 1;
            }
        }

        return yellowCount;
    }

    function whiteBalls(input) {
        let whiteCount = 0;

        for (let i = 1; i < input.length; i++) {
            let color = input[i];

            if (color === 'white') {
                whiteCount += 1;
            }
        }

        return whiteCount;
    }

    function otherBalls(input) {
        let othersCount = 0;

        for (let i = 1; i < input.length; i++) {
            let color = input[i];

            if (color !== 'red' && color !== 'orange' && color !== 'yellow' && color !== 'white' && color !== 'black') {
                othersCount += 1;
            }
        }

        return othersCount;
    }

    function blackBalls(input) {
        let blackCount = 0;

        for (let i = 1; i < input.length; i++) {
            let color = input[i];

            if (color === 'black') {
                blackCount += 1;
            }
        }

        return blackCount;
    }

    function totalPoints(input) {
        let points = 0;
        let ballsPicked = Number(input[0]);

        for (let i = 1; i < input.length; i++) {
            if (i > ballsPicked) {
                break;
            }

            let color = input[i];

            switch (color) {
                case 'red': points += 5; break;
                case 'orange': points += 10; break;
                case 'yellow': points += 15; break;
                case 'white': points += 20; break;
                case 'black': points = Math.floor(points / 2); break;
            }
        }

        return points;
    }
}

ballsGame(["3", "white", "black", "pink"]);
