const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-corrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverd = document.querySelector(".currency-value")


    console.log(currencySelect.value)
    const realToday = 0.18
    const euroToday = 6.14
    const libraToday = 7.41
   

    

    if(currencySelect.value == "real"){
        currencyValueConverd.innerHTML =  new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL"
        }).format(inputCurrencyValue / realToday)

    }

    if(currencySelect.value == "euro"){

        currencyValueConverd.innerHTML =  new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if(currencySelect.value == "libra"){

        currencyValueConverd.innerHTML =  new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if(currencySelect.value == "dolar"){

        currencyValueConverd.innerHTML =  new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)

    }


   

   

   
   
}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    let currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2 (1).png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1 (1).png"
    }

    

    convertValues()
}





currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)