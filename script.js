let tipPercentage = 0;
let tipAmount = 0;
let tipAmountPerPerson = 0;

let bill; 
let serviceType ;
let serviceQuality ;
let numPeople ;

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

    if(numPeople == 0) { 
        numPeople++;
    }
    tipAmountPerPerson = tipAmount/numPeople;
}

function updateDisplay(){
    let nTotal= parseFloat(tipAmount)+parseFloat(bill);
    let perPersonPay = nTotal/parseInt(numPeople);

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    let netTotal = document.createTextNode("Total with tip: " + nTotal);
    let tipTotal = document.createTextNode("Tip total: " + tipAmount);
    let eachPersonCharge = document.createTextNode("Each person pays: "+ perPersonPay);
    
    const result = document.getElementById('result');
    
    result.appendChild(netTotal);
    result.appendChild(br1);
    result.appendChild(tipTotal);
    result.appendChild(br2);
    result.appendChild(eachPersonCharge);
}

calculateButton.addEventListener('click', button => {
    calculateTip();
    updateDisplay();
});
