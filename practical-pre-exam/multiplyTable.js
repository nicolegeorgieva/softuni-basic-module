function multiplyTable(input) {
    let number = input[0];

    let firstCharacter = Number(number[2]);
    let secondCharacter = Number(number[1]);
    let lastCharacter = Number(number[0]);

    for (let x = 1; x <= firstCharacter; x++) {

        if (firstCharacter <= 0 || secondCharacter <= 0 || lastCharacter <= 0) {
            break;
        }

        for (let y = 1; y <= secondCharacter; y++) {

            for (let z = 1; z <= lastCharacter; z++) {
                let res = x * y * z;
                console.log(`${x} * ${y} * ${z} = ${res};`);
            }
        }
    }
}

multiplyTable(["324"]);