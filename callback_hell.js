// Callback Hell using multiple setTimeout(() =>, time in miliseconds)

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
}

function order(Fruit_number, call_production) {

    setTimeout(() => {
        console.log(`1  ${stocks.fruits[Fruit_number]} is selected, Order placed!`);

        call_production();
    }, 2000);

}

function production() {
    console.log("starting production...");

    setTimeout(() => {
        console.log("2  freshly cut fruits are added");

        setTimeout(() => {
            console.log(`3  ${stocks.liquid[0]} and ${stocks.liquid[1]} are added to make the ice-cream`);

            setTimeout(() => {
                console.log("4  Ice-cream machine started making delicious ice-cream");

                setTimeout(() => {
                    console.log(`5  ${stocks.holder[0]} is chosen`);

                    setTimeout(() => {
                        console.log(`6  ${stocks.toppings[2]} is selected as the topping, nice!`);

                        setTimeout(() => {
                            console.log("7  Here is your creamy-tasty cold ice-cream served, enjoy🍦");
                        }, 2000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 1000);
    }, 2000);
} // This whole structure is a CALLBACK-HELL

order(0,production);