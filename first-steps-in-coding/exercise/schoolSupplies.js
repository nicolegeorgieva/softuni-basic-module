function schoolSupplies(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

    let finalPriceForPens = pens * 5.80;
    let finalPriceForMarkers = markers * 7.20;
    let finalpriceForLiquid = liters * 1.20;

    let finalPrice = finalPriceForPens + finalPriceForMarkers + finalpriceForLiquid;
    let priceAfterDiscount = finalPrice - (finalPrice * (discount / 100));
    console.log(priceAfterDiscount);
}

schoolSupplies(["2", "3", "4", "25"]);