function excellentResult(input) {
    let grade = Number(input[0]);

    if (grade >= 5.5) {
        console.log("Excellent!");
    } else {
        console.log("Not excellent!");
    }
}

excellentResult([5.4]);