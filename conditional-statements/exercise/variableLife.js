function variableLife() {
    if (5 < 10) {
        let inner = 25;
    }
    console.log(inner);
}

variableLife();

// inner is not defined, because it lives in {}.