function demo(input) {
    for (let i = 1; i < 10; i++) {

        if (i === 5) {
            return;
        }

        console.log(i);
    }

    console.log(`After the loop`);
}

demo();