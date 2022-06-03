function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let diluent = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = ((paint * 0.10) + paint) * 14.50;
    let diluentPrice = diluent * 5;

    let finalSum = nylonPrice + paintPrice + diluentPrice + 0.40;
    let workersSum = finalSum * 0.30 * hours;
    let total = finalSum + workersSum;
    console.log(total);
}

repainting(["10", "11", "4", "8"]);