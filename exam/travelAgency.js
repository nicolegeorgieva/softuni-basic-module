function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let vipDiscount = input[2];
    let nights = input[3];

    if (nights < 1) {
        console.log("Days must be positive number!");
        return;
    }

    let totalPrice = 0;

    if (city === "Bansko" || city === "Borovets") {
        if (nights > 7) {
            nights -= 1;
        }
        if (package === "withEquipment") {
            totalPrice = 100 * nights;
            if (vipDiscount === "yes") {
                totalPrice *= 0.90;
            }
        } else if (package === "noEquipment") {
            totalPrice = 80 * nights;
            if (vipDiscount === "yes") {
                totalPrice *= 0.95;
            }
        } else {
            console.log("Invalid input!");
            return;
        }
    } else if (city === "Varna" || city === "Burgas") {
        if (nights > 7) {
            nights -= 1;
        }

        if (package === "withBreakfast") {
            totalPrice = 130 * nights;
            if (vipDiscount === "yes") {
                totalPrice *= 0.88;
            }
        } else if (package === "noBreakfast") {
            totalPrice = 100 * nights;
            if (vipDiscount === "yes") {
                totalPrice *= 0.93;
            }
        } else {
            console.log("Invalid input!");
            return;
        }
    } else {
        console.log("Invalid input!");
        return;
    }

    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
}

travelAgency(["Varna", "withBreakfast", "no", "0"]);