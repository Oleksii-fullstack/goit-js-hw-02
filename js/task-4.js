
function getShippingCost(country) {
    country = String(country);
    let price;
    switch (country) {
        case "China":
            price = country === "China" ? 100 : "Sorry, there is no delivery to your country";
            return `Shipping to ${country} will cost ${price} credits`
        case "Chile":
            price = country === "Chile" ? 250 : "Sorry, there is no delivery to your country";
            return `Shipping to ${country} will cost ${price} credits`
        case "Australia":
            price = country === "Australia" ? 170 : "Sorry, there is no delivery to your country";
            return `Shipping to ${country} will cost ${price} credits`
        case "Jamaica":
            price = country === "Jamaica" ? 120 : "Sorry, there is no delivery to your country";
            return `Shipping to ${country} will cost ${price} credits`
        default:
            return `Sorry, there is no delivery to your country`
    }
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
