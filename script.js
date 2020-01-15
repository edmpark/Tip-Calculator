let tipPercentage = 0;
let tipAmount = 0;
let tipAmountPerPerson = 0;

const calculateButton = document.querySelector('#calculateButton');

function calculateTip(){
    bill = document.getElementById('bill').value; 
    serviceType = document.getElementById('serviceType').value;
    serviceQuality = document.getElementById('serviceQuality').value;
    numPeople = document.getElementById('numPeople').value;

    switch(serviceType){
        case 'Server':
            tipPercentage=.175;
            break;
        case 'Bartender':
            tipPercentage=.15;
            break;
        case 'Barber':
            tipPercentage=.15;
            break;
        case 'Ride Service':
            tipPercentage=.15;
            break;
        case 'Food Delivery':
            tipPercentage=.2;
            break;
        case 'Hotel Room Service':
            tipPercentage=.15;
            break;
    }

    if(serviceQuality === 'Bad'){
        tipPercentage-=.05;
    } 
    else if(serviceQuality === 'Good'){
        tipPercentage+=.05;
    }

    tipAmount = bill*tipPercentage;

    tipAmountPerPerson = 0; //resetting value
    if(numPeople == 0) return;
    tipAmountPerPerson = tipAmount/numPeople;
}

function updateDisplay(){
    let netTotal = document.createTextNode("Total with tip: " + tipAmount);
    let netTotal = document.createTextNode("Total with tip: " + tipAmount);
}

calculateButton.addEventListener('click', button => {
    calculateTip();
    updateDisplay();
});
