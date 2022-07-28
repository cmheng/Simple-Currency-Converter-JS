const input = require('sync-input');

let currencies = ["USD", "JPY", "EUR", "RUB", "GBP"];

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");

    let choice = input();

    if (choice !== "1" && choice !== "2") {
        console.log("Unknown input");
        continue;
    }

    if (choice === "2") {
        console.log("Have a nice day!");
        return;
    }

    if (choice === "1") {
        console.log("What do you want to convert?");
        let from = input("From: ").toUpperCase();

        if (!currencies.includes(from)) {
            console.log("Unknown currency");
            continue;
        }
        let to = input("To: ").toUpperCase();

        if (!currencies.includes(to)) {
            console.log("Unknown currency");
            continue;
        }

        let amount = Number(input("Amount: "));
        if (!amount) {
            console.log("The amount has to be a number");
        } else if (amount < 1) {
            console.log("The amount cannot be less than 1");
        } else {
            let n = convertCurrency(from, to, amount);
            console.log(`Result: ${amount} ${from} equals ${n.toFixed(4)} ${to}`);
        }
    }


}

function convertToUSD(currency, amount) {
    switch(currency) {
        case "USD":
            return amount;
        case "JPY":
            return amount / 113.5;
        case "EUR":
            return amount / 0.89;
        case "RUB":
            return amount / 74.36;
        case "GBP":
            return amount / 0.75;
        default:
            return 0.00;
    }
}

function convertCurrency(from, to, amount) {
    let usdAmount = convertToUSD(from, amount);
    switch(to) {
        case "USD":
            return usdAmount;
        case "JPY":
            return usdAmount * 113.5;
        case "EUR":
            return usdAmount * 0.89;
        case "RUB":
            return usdAmount * 74.36;
        case "GBP":
            return usdAmount * 0.75;
        default:
            return 0.00;
    }
}