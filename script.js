let items = [
    'Cook, you dumbasses!',
    'Order Biryani',
    'Order Meal Boxes',
    'KFC!!!',
    'Let\'s make it a pizza night',
    'Get two wraps and be done with it'
]

let earlyEveningItems = [
    'It is still early. Go out!'
]

// if (new Date().getHours() < 20) {
//     items = [...items, ...earlyEveningItems]
// }


let dinnerItem_el = document.getElementById('dinner-item');
let decideButton_el = document.getElementById("decide-button");

const cycleOptions = () => {
    let index = Math.floor(Math.random() * items.length);
    let itemToDisplay = items[index];
    dinnerItem_el.innerHTML = itemToDisplay;
}

let cycleOptionsInterval = setInterval(cycleOptions, 500);

let rapidCycleOptionsInterval;

const decide = () => {
    clearInterval(rapidCycleOptionsInterval);
    let index = Math.floor(Math.random() * items.length)
    let itemToDisplay = items[index];
    dinnerItem_el.classList.add('selected');
    dinnerItem_el.innerHTML = itemToDisplay;
    decideButton_el.innerHTML = 'Decide again';
    decideButton_el.removeAttribute('disabled');
}

const onDecide = () => {
    clearInterval(cycleOptionsInterval);
    dinnerItem_el.classList.remove('selected');
    rapidCycleOptionsInterval = setInterval(cycleOptions, 200);
    decideButton_el.innerHTML = 'Deciding...';
    decideButton_el.disabled = 'disabled';
    setTimeout(decide, 4000);
}

decideButton_el.addEventListener('click', onDecide)

