// Async Await is most prefered 

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

function time(ms) {
    return new Promise( (resolve, reject) => {
        if(is_shopOpen){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"));
        }
    })
}

async function kitchen() {
    try{
        await time(2000);
        console.log(`1  ${stocks.fruits[0]} is selected, Order placed!`);

        await time(2000);
        console.log("2  freshly cut fruits are added");

        await time(1000);
        console.log(`3  ${stocks.liquid[0]} and ${stocks.liquid[1]} are added to make the ice-cream`);

        await time(1000);
        console.log("4  Ice-cream machine started making delicious ice-cream");

        await time(2000);
        console.log(`5  ${stocks.holder[0]} is chosen`);

        await time(3000);
        console.log(`6  ${stocks.toppings[2]} is selected as the topping, nice!`);

        await time(2000);
        console.log("7  Here is your creamy-tasty cold ice-cream served, enjoy🍦");
    }
    catch(error){
        console.log("customer left", error)
    }
    finally{
        console.log("Day ended! Shop is closed for today!");
    }
}

kitchen();