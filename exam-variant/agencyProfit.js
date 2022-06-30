function agencyProfit(input) {
    let companyName = input[0];
    let adultsTicketsCount = Number(input[1]);
    let kidsTicketsCount = Number(input[2]);
    let adultTicketNetPrice = Number(input[3]);
    let serviceFee = Number(input[4]);

    let kidsTicketNetPrice = adultTicketNetPrice * 0.3;

    let adultTicketPriceAfterFee = adultTicketNetPrice + serviceFee;
    let kidsTicketPriceAfterFee = kidsTicketNetPrice + serviceFee;

    let profit = ((adultTicketPriceAfterFee * adultsTicketsCount + kidsTicketPriceAfterFee * kidsTicketsCount) * 0.2).toFixed(2);

    console.log(`The profit of your agency from ${companyName} tickets is ${profit} lv.`);
}

agencyProfit(['WizzAir', '15', '5', '120', '40']);