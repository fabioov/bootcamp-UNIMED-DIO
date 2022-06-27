var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;



function increment() {
    const increment = document.getElementById("adicionar");
    const decrement = document.getElementById("subtrair");
    var message = document.getElementById("message");
    const ok = document.getElementById("ok");


        if(currentNumber === 9){
            increment.disabled = true;
            decrement.disabled = true;
            currentNumber = currentNumber + 1;
            currentNumberWrapper.innerHTML = currentNumber;
            message.style.display = "block";
            message.innerHTML = "Somente subtração permitido!";
            ok.style.display = "block";
        } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        }
}



function decrement() {
    const increment = document.getElementById("adicionar");
    const decrement = document.getElementById("subtrair");
    var message = document.getElementById("message");
    const ok = document.getElementById("ok");
    if(currentNumber === 1 ){
        decrement.disabled = true;
        increment.disabled = true;
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        message.style.display = "block";
        message.innerHTML = "Somente adição permitido!";
        ok.style.display = "block";
    } else {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}


    const limpar = document.getElementById("ok");
    var message = document.getElementById("message");

    limpar.addEventListener('click', () =>{
        limpar.style.display = "none";
        message.style.display = "none";
        const increment = document.getElementById("adicionar");
        const decrement = document.getElementById("subtrair");
       
        if(currentNumber === 10){
                decrement.disabled = false;
                increment.disabled = true;
        } else if (currentNumber === 0){
            decrement.disabled = true;
            increment.disabled = false;
        } else {
            decrement.disabled = false;
            increment.disabled = false;
        }
    })

    

