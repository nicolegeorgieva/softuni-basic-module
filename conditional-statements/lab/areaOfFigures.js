function areaOfFigures(input) {
    let type = input[0];
    let res = 0;

    if (type === "square") {
        let a = Number(input[1]);
        res = a * a;
    } else if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        res = a * b;
    } else if (type === "circle") {
        let r = Number(input[1]);
        res = Math.pow(r, 2) * Math.PI;
    } else {
        let a = Number(input[1]);
        let h = Number(input[2]);
        res = a * h / 2;
    }

    console.log(res.toFixed(3));
}

areaOfFigures(["triangle", "4.5", "20"]);