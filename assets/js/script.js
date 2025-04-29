function createCounterApp() {
    const { buttonMinus, buttonPlus, counterDisplay} = createElements();
    setupEventListeners(buttonPlus, buttonMinus, counterDisplay);
}

function createElements() {
    const div = document.createElement('div');
    const buttonMinus = document.createElement('button');
    const buttonPlus = document.createElement('button');
    const counterDisplay = document.createElement('h1');
       
    buttonMinus.textContent = '-';
    buttonPlus.textContent = '+';
    counterDisplay.textContent = '0';

    div.appendChild(buttonMinus);
    div.appendChild(counterDisplay);
    div.appendChild(buttonPlus);
    document.body.appendChild(div);

    return { div, buttonMinus, buttonPlus, counterDisplay};
}

    

function updateCounterDisplay (counterDisplay, value) {
    counterDisplay.textContent = value;
}
    

    
function setupEventListeners(buttonPlus, buttonMinus, counterDisplay) {
        
    let counterValue = 0;

    buttonPlus.addEventListener('click', () => {
        counterValue++;
        updateCounterDisplay(counterDisplay, counterValue);
    });

    buttonMinus.addEventListener('click', () => {
        counterValue--;
        updateCounterDisplay(counterDisplay, counterValue);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === '+') {
        counterValue++;
        } else if (event.key === '-') {
        counterValue--;
        }
        updateCounterDisplay(counterDisplay, counterValue);
    });
}

createCounterApp();
  