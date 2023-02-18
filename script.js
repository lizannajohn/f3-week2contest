// Element References
let menu = document.getElementById("container")

// Creating Elements
let burgOrders = document.createElement("div")
document.body.appendChild(burgOrders)
burgOrders.setAttribute("class", "hide");
burgOrders.style.cssText = 
`
margin: 5px; 
padding: 15px; 
font-size: 20px;
`

let ordUpdates = document.createElement("div")
document.body.appendChild(ordUpdates);
ordUpdates.setAttribute("class", "hide");
ordUpdates.style.cssText = 
`
margin: 5px 0 0 15px;
padding: 15px;
font-size: 20px;
color: #006400;
border: 1px solid grey;
background-color: lightgrey;
border-radius: 20px;
width: fit-content;
`

let payStat = document.createElement("div")
document.body.appendChild(payStat);
payStat.setAttribute("class", "hide");
payStat.style.cssText = 
`
margin: 5px 0 0 15px;
padding: 15px;
font-size: 20px;
color: #006400;
border: 1px solid grey;
background-color: lightgrey;
border-radius: 20px;
width: fit-content;
`

let delUpdate = document.createElement("div")
document.body.appendChild(delUpdate);
delUpdate.setAttribute("class", "hide");
delUpdate.style.cssText = 
`
margin: 5px 0 0 15px;
padding: 15px;
font-size: 25px;
font-weight: bold;
color: blue;
border: 1px solid grey;
background-color: lightgrey;
border-radius: 20px;
width: fit-content;
`

// Functions

// Function for displaying Menu
function getMenu()
{
    return new Promise((resolve, reject) =>
    {
        fetch("https://free-food-menus-api-production.up.railway.app/burgers")
        .then((resp) => resp.json())
        .then((data) =>
        {
            let menuItems = [];
            for(const burger of data)
            {
                menuItems.push(burger.dsc)
                menu.innerHTML += 
                `
                    <div class="items">
                        <div class="details">
                            <div> <strong> ${burger.dsc} </strong> </div>
                            <div> ${burger.name} </div>
                            <div> ${burger.country} </div>
                            <div> Price: ${burger.price} </div>
                            <div> Rating: ${burger.rate} </div>
                        </div>
                    </div>
                `
            }

            resolve(menuItems);
        })
    })
}

// Taking Order (Simulation)
function takeOrder(item)
{
    let randomId = Math.floor(Math.random() * 57)
    let firstBurgId = randomId;
    let secBurgId = firstBurgId + 1;
    let thirdBurgId = firstBurgId + 2;

    let firstBurg = item[firstBurgId]
    let secBurg = item[secBurgId]
    let thirdBurg = item[thirdBurgId]

    let orderedBurgs = 
    {
        item1: `${firstBurg}`,
        item2: `${secBurg}`,
        item3: `${thirdBurg}`
    }

    return new Promise((resolve, reject) =>
    {
        // console.log("Following burgers ordered");
        setTimeout(() =>
        {
            // console.log(`1: ${firstBurg}, 2: ${secBurg} & 3: ${thirdBurg}`);
            menu.innerHTML = ""
            // menu.classList.add("hide")
            burgOrders.innerHTML +=
            `
                <strong> Your selections are: </strong>
                <p> ${firstBurg} </p>
                <p> ${secBurg} </p>
                <p> ${thirdBurg} </p>
            `
            burgOrders.classList.remove("hide")
            
            resolve(orderedBurgs)
        }, 2500)
    })
}

// Order Preparation (Simulation)
function orderPrep()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            ordUpdates.classList.remove("hide")
            ordUpdates.innerHTML += 
            `
                <h2> Your orders are now in cart!
                    <br> Pay Now to confirm your order!
                </h2>
            `
            console.log({orderStat: true, paid: false});
            resolve({orderStat: true, paid: false})
        }, 1500)
    })
}

// Payment Success (Simulation)
function payOrder()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Payment Complete!");
            ordUpdates.classList.add("hide")
            payStat.classList.remove("hide")

            payStat.innerHTML =
            `
                <h2 style="color: blue"> Payment Received! </h2>
                <br>
                <h3> Congrats! Your order is confirmed and on its way to be prepared
                <br> It will be delivered to your location in a jiff! </h3>
            `
            console.log({orderStat: true, paid: true});
            resolve({orderStat: true, paid: true})
        }, 1000)
    })
}

// Order Delivery Completion (Simulation)
function thankYouFunc()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Order Delivered!");
            payStat.classList.add("hide")
            delUpdate.classList.remove("hide")
            delUpdate.innerHTML +=
            `
                Order has been successfully delivered!
                <br> Looking forward to serving you again!
            `
            resolve(alert("Thank you for ordering from us!"))
        }, 1500)
    })
}

// Promise Chaining of Events/Functions
getMenu()
.then((item) => takeOrder(item))
.then(() => orderPrep())
.then(() => payOrder())
.then(() => thankYouFunc())