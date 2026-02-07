// Avoid callback hell and use Promise instead 

// Suppose, you're gonna make ice-cream today
// 1 Place Order   -- 2 second
// 2 Cut the fruit -- 2 second
// 3 Add water,ice -- 1 second
// 4 start machine -- 1 second
// 5 select holder -- 2 second
// 6 ,, toppings   -- 3 second
// 7 Serve icecream-- 2 second

//object
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["choco", "nuts", "tuti-fruti"],
};

let is_shopOpen = true;

let order = (work, time) => {

    return new Promise( (resolve, reject) => {
        if(is_shopOpen){
            setTimeout(() => {
                resolve(work())
            }, time);
        } else {
            reject(console.log("our shop is closed"))
        }
    })
};

order(() => console.log(`1  ${stocks.fruits[0]} is selected, Order placed!`), 2000)

.then( () => {
    return order(() => console.log("2  freshly cut fruits are added"), 2000);
})

.then( () => {
    return order(() => console.log(`3  ${stocks.liquid[0]} and ${stocks.liquid[1]} are added to make the ice-cream`), 1000);
})

.then( () => {
    return order(() => console.log("4  Ice-cream machine started making delicious ice-cream"), 1000);
})

.then( () => {
    return order(() => console.log(`5  ${stocks.holder[0]} is chosen`), 2000);
})

.then( () => {
    return order(() => console.log(`6  ${stocks.toppings[2]} is selected as the topping, nice!`), 3000);
})

.then( () => {
    return order(() => console.log("7  Here is your creamy-tasty cold ice-cream served, enjoy🍦"), 2000);
})


.catch(() => {
    console.log("Customer left");
})


.finally(() => {
    console.log("Day ended! The ice-cream shop is closed for today!");
})