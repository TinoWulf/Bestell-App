let dishes = {
    chicken:[ 
        {
            name: "Grilled Chicken Breast",
            price: 11.99,
            description: "Juicy grilled chicken breast seasoned with herbs, served with steamed vegetables.",
            counter: 1
        },
        {
            name: "Crispy Fried Chicken",
            price: 9.49,
            description: "Golden-brown fried chicken with a crispy crust and tender meat inside.",
            counter: 1
        },
        {
            name: "Spicy Chicken Wings",
            price: 8.99,
            description: "Spicy buffalo wings served with blue cheese dip and celery sticks.",
            counter: 1
        }
    ],
    pizza: [
         {
            name: "Margherita Pizza",
            price: 10.50,
            description: "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
            counter: 1
        },
         {
            name: "Pepperoni Pizza",
            price: 12.00,
            description: "Topped with spicy pepperoni slices and melted mozzarella on a crispy crust.",
            counter: 1
        },
         {
            name: "Vegetarian Pizza",
            price: 11.25,
            description: "Loaded with bell peppers, olives, mushrooms, and onions on a tomato base.",
            counter: 1
        }
    ],
    sushi: [
        {
            name: "California Roll",
            price: 7.99,
            description: "Crab, avocado, and cucumber rolled in seaweed and rice, topped with sesame seeds.",
            counter: 1
        },
        {
            name: "Salmon Nigiri",
            price: 9.25,
            description: "Fresh slices of salmon served over pressed vinegared rice.",
            counter: 1
        },
        {
            name: "Tuna Sashimi",
            price: 10.75,
            description: "Delicate raw tuna slices served with soy sauce, wasabi, and pickled ginger.",
            counter: 1
        }
    ]
};

let order = [];

let deliveryCosts = 5;

function loadDishes() {
    loadChicken();
    loadPizza();
    loadSushi();
    loadOrder();
}

function loadChicken() {
    let renderChicken = document.getElementById('render-chicken');
    for (let i = 0; i < dishes.chicken.length; i++) {
        renderChicken.innerHTML += `<div onclick="pushDish('${dishes.chicken[i].name}',${dishes.chicken[i].price},${dishes.chicken[i].counter})" class="render-div">
                                        <div class="render-headdiv">
                                            <h3>${dishes.chicken[i].name}</h3>
                                            <img class="render-headdiv-cross" src="/img/order-icons/plus (1).png" alt="">
                                            </div>
                                        <p class="render-description">${dishes.chicken[i].description}</p>
                                        <p class="render-price">${dishes.chicken[i].price} €</p>
                                    </div>`;
        
    }
}

function loadPizza() {
    let renderPizza = document.getElementById('render-pizza');
    for (let j = 0; j < dishes.pizza.length; j++) {
        renderPizza.innerHTML += `<div class="render-div">
                                        <div onclick="pushDish('${dishes.pizza[j].name}', ${dishes.pizza[j].price},${dishes.pizza[j].counter})" class="render-headdiv">
                                            <h3>${dishes.pizza[j].name}</h3>
                                            <img class="render-headdiv-cross" src="/img/order-icons/plus (1).png" alt="">
                                            </div>
                                        <p class="render-description">${dishes.pizza[j].description}</p>
                                        <p class="render-price">${dishes.pizza[j].price} €</p>
                                    </div>`;
        
    }
}

function loadSushi() {
    let renderSushi = document.getElementById('render-sushi');
    for (let k = 0; k < dishes.sushi.length; k++) {
        renderSushi.innerHTML += `<div class="render-div">
                                        <div onclick="pushDish('${dishes.sushi[k].name}', ${dishes.sushi[k].price},${dishes.sushi[k].counter})" class="render-headdiv">
                                            <h3>${dishes.sushi[k].name}</h3>
                                            <img class="render-headdiv-cross" src="/img/order-icons/plus (1).png" alt="">
                                            </div>
                                        <p class="render-description">${dishes.sushi[k].description}</p>
                                        <p class="render-price">${dishes.sushi[k].price} €</p>
                                    </div>`;
        
    }
}

function loadOrder(){
    let orderDiv = document.getElementById('oders');
    let costs = 0;
    orderDiv.innerHTML = "";
    if (order.length === 0) {
        orderDiv.innerHTML = `<div class="order-section-placeholder">
                    <sub class="order-section-placeholder-sub">Wähle leckere Gerichte aus dem Menü!</sub>
                </div>`;
    } else {
    for (let l = 0; l < order.length; l++) {
        costs += order[l].price * order[l].counter; 
        orderDiv.innerHTML += `<div class="cart-oder">
                    <p class="cart-order-name">${order[l].name}</p>
                    <div class="cart-oder-div">
                        <img onclick="counterDown(${l})" class="cart-order-ref" src="/img/order-icons/minus (1).png" alt=""><sub>${order[l].counter}x</sub>
                        <img onclick="counterUp(${l})" class="cart-order-ref" src="/img/order-icons/plus (1).png" alt=""><sub class="cart-order-price">${order[l].price} €</sub>
                        <img onclick="deleteDish(${l})" class="cart-order-ref" src="/img/order-icons/delete.png" alt="">
                    </div>
                </div>`;
    }
    orderDiv.innerHTML += `<div class="order-section-costs">
                    <div class="order-section-costs-text">
                        <sub class="order-section-costs-sub-grey">Zwischensummer:</sub>
                        <sub class="order-section-costs-sub-grey">Lieferkosten:</sub>
                        <sub class="order-section-costs-sub-bolt">Gesamtsumme:</sub>
                    </div>
                    <div class="order-section-costs-numbers">
                        <sub class="order-section-costs-sub-grey">${costs.toFixed(2)} €</sub>
                        <sub class="order-section-costs-sub-grey">${deliveryCosts.toFixed(2)} €</sub>
                        <sub class="order-section-costs-sub-bolt">${(deliveryCosts + costs).toFixed(2)} €</sub>
                    </div>
                </div>
                        <button onclick="deleteAll()" class="order-section-btn">Jetzt Bestellen</button>`;
}}

function pushDish(dishName,dishPrice,dishCounter) {

    let Dish = order.find(d => d.name === dishName);

    if (Dish) {
        Dish.counter++;
    }
    else {order.push({
        name: dishName,
        price : dishPrice,
        counter : dishCounter});
    }
    console.log(order);
    loadOrder();
}

function counterUp(index){
    order[index].counter++;
    loadOrder();
}

function counterDown(index){
    if (order[index].counter > 1) {
        order[index].counter--;
    }
    else {
        order.splice(index,1);
    }
    loadOrder();
}

function deleteDish(index){
    order.splice(index,1);
    loadOrder();
}

function deleteAll(){
    order = [];
    
    loadOrder();
}

function menu(){
    document.getElementById('order-section').classList.toggle('menu-close');
    document.getElementById('main-page').classList.toggle('main-page-close');
}