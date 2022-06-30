function aluminumJoineryPrice(input) {
    let aluminumJoineriesCount = Number(input[0]);

    if (aluminumJoineriesCount < 10) {
        console.log('Invalid order');
        return;
    }

    let aluminumJoineriesType = input[1];
    let deliveryPreference = input[2];

    let price = orderPrice(aluminumJoineriesType, aluminumJoineriesCount) +
        deliveryCost(deliveryPreference === 'With delivery');
    let discountedPrice = finalDiscount(price, aluminumJoineriesCount);

    console.log(`${discountedPrice.toFixed(2)} BGN`);


    function orderPrice(type, count) {
        let discountPercent = 0;
        let price = null;

        switch (type) {
            case '90X130':
                price = 110;
                if (count >= 60) {
                    discountPercent = 8;
                } else if (count >= 30) {
                    discountPercent = 5;
                }
                break;
            case '100X150':
                price = 140;
                if (count >= 80) {
                    discountPercent = 10;
                } else if (count >= 40) {
                    discountPercent = 6;
                }
                break;
            case '130X180':
                price = 190;
                if (count >= 50) {
                    discountPercent = 12;
                } else if (count >= 20) {
                    discountPercent = 7;
                }
                break;
            case '200X300':
                price = 250;
                if (count >= 50) {
                    discountPercent = 14;
                } else if (count >= 25) {
                    discountPercent = 9;
                }
                break;
        }

        return count * price * ((100 - discountPercent) / 100);
    }

    function deliveryCost(withDelivery) {
        if (withDelivery) {
            const DELIVERY_PRICE = 60;
            return DELIVERY_PRICE;
        } else {
            return 0;
        }
    }

    function finalDiscount(finalPrice, count) {
        if (count > 99) {
            return finalPrice * 0.96;
        } else {
            return finalPrice;
        }
    }
}

aluminumJoineryPrice(['40', '90X130', 'Without delivery']);
aluminumJoineryPrice(["105", "100X150", "With delivery"]);
aluminumJoineryPrice(["2", "130X180", "With delivery"]);