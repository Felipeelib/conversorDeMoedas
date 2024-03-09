const currencyToConvert = document.querySelector(".currency-to-convert");//primeira label
const currencySelect = document.querySelector(".currency-select");//segunda label
const convertButton = document.querySelector(".convertButton");//notão de converter

function convertValues() {
    const inputCurrencyValue = document.querySelector(".currencyValue").value //valor no input

    const CurrencyValueToConvert = document.querySelector(".value-to-convert") //moedas na primeira section
    const CurrencyValueConverted = document.querySelector(".valor")      // moedas na segunda section



    const dolarToDay = 5.2
    const euroToDay = 6.2
    const libraToDay = 6.34
    const bitcoinToDay = 337032.23
    const realToDay = 1




    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToDay);
    }

    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToDay);
    }

    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToDay);
    }

    if (currencySelect.value == "bitcoin") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-EL", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToDay);
    }

    if (currencySelect.value == "real"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
    }

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue);

    


}

function changeFristCurrency() {
    
    const currencyName1 = document.querySelector(".nome1")
    const imgMoney1 = document.querySelector(".imgBandeira1")

    if (currencyToConvert.value == "dolar") {
        currencyName1.innerHTML = "Dólar"
        imgMoney1.src = "./assets/img/usa.png"
    }

    if (currencyToConvert.value == "euro") {
        currencyName1.innerHTML = "Euro"
        imgMoney1.src = "./assets/img/euro.png"
    }

    if (currencyToConvert.value == "libra") {
        currencyName1.innerHTML = "Libra"
        imgMoney1.src = "./assets/img/libra1.png"
    }

    if (currencyToConvert.value == "bitcoin") {
        currencyName1.innerHTML = "Bitcoin"
        imgMoney1.src = "./assets/img/bitcoin1.png"
    }

    if (currencyToConvert.value == "real") {
        currencyName1.innerHTML = "Real Brasileiro"
        imgMoney1.src = "./assets/img/brasil2.png"}

  

    convertValues()
}



function cangeCurrency() {
    
    const currencyName = document.querySelector(".nome2")
    const imgMoney = document.querySelector(".imgBandeira2")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        imgMoney.src = "./assets/img/usa.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        imgMoney.src = "./assets/img/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        imgMoney.src = "./assets/img/libra1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        imgMoney.src = "./assets/img/bitcoin1.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        imgMoney.src = "./assets/img/brasil2.png"}

  

    convertValues()
}

currencyToConvert.addEventListener("change", changeFristCurrency, false)
currencySelect.addEventListener("change", cangeCurrency, false);
convertButton.addEventListener("click", convertValues, false);