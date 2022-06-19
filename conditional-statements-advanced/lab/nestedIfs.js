function demo() {
    let number = 18;

    if (number <= 11) {
        if (number % 2 === 0) {
            console.log("Number is even and <= 10");
        } else {
            console.log("Number is odd and <= 10");
        }

    } else if (number <= 15) {
        if (number % 2 === 0) {
            console.log("Number is even and <= 15");
        } else {
            console.log("Number is odd and <= 15");
        }

    } else {
        if (number % 2 === 0) {
            console.log("Number is even and > 15");
        } else {
            console.log("Number is odd and > 15");
        }
    }
}

demo();