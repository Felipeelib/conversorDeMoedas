const currencyToConvert = document.querySelector(".currency-to-convert");//primeira label
const currencySelect = document.querySelector(".currency-select");//segunda label
const convertButton = document.querySelector(".convertButton");//notão de converter

function convertValues() {
    const inputCurrencyValue = document.querySelector(".currencyValue").value //valor no input

    const CurrencyValueToConvert = document.querySelector(".value-to-convert") //moedas na primeira section
    const CurrencyValueConverted = document.querySelector(".valor")      // moedas na segunda section
 
const geral = 1

    const dolarToDay = 5.2
    const euroToDay = 6.2
    const libraToDay = 6.34
    const bitcoinToDay = 337032.23
    const realToDay = 1

    if (currencyToConvert.value == "real"){
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * geral);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-el", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToDay);

        if (currencySelect.value == "real"){
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * realToDay / realToDay)
        }
        
        if (currencySelect.value == "dolar") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * realToDay / dolarToDay);
        }
        
        if (currencySelect.value == "euro") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * realToDay / euroToDay);
        }
        
        if (currencySelect.value == "libra") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * realToDay / libraToDay);
        }
        
        if (currencySelect.value == "bitcoin") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-EL", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * realToDay /bitcoinToDay);
        }
       
    }
    if(currencyToConvert.value == "dolar") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * geral);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue / realToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-el", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToDay);

        if (currencySelect.value == "real"){
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * dolarToDay / realToDay)
        }
        
        if (currencySelect.value == "dolar") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * dolarToDay / dolarToDay);
        }
        
        if (currencySelect.value == "euro") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * dolarToDay / euroToDay);
        }
        
        if (currencySelect.value == "libra") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * dolarToDay / libraToDay);
        }
        
        if (currencySelect.value == "bitcoin") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-EL", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * dolarToDay /bitcoinToDay);
        }
    }

    if (currencyToConvert.value == "euro") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * geral);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue / realToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-el", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToDay);

        if (currencySelect.value == "real"){
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * euroToDay / realToDay)
        }
        
        if (currencySelect.value == "dolar") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * euroToDay / dolarToDay);
        }
        
        if (currencySelect.value == "euro") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * euroToDay / euroToDay);
        }
        
        if (currencySelect.value == "libra") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue *euroToDay / libraToDay);
        }
        
        if (currencySelect.value == "bitcoin") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-EL", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * euroToDay /bitcoinToDay);
        }
    }

    if (currencyToConvert.value == "libra") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * geral);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue / realToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-el", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitcoinToDay);

        if (currencySelect.value == "real"){
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * libraToDay / realToDay)
        }
        
        if (currencySelect.value == "dolar") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * libraToDay / dolarToDay);
        }
        
        if (currencySelect.value == "euro") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * libraToDay / euroToDay);
        }
        
        if (currencySelect.value == "libra") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * libraToDay / libraToDay);
        }
        
        if (currencySelect.value == "bitcoin") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-EL", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * libraToDay /bitcoinToDay);
        }
        
    }

    if(currencyToConvert.value == "bitcoin") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-EL", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * geral);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue / realToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToDay);
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToDay);

        if (currencySelect.value == "real"){
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * bitcoinToDay / realToDay)
        }
        
        if (currencySelect.value == "dolar") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * bitcoinToDay / dolarToDay);
        }
        
        if (currencySelect.value == "euro") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * bitcoinToDay / euroToDay);
        }
        
        if (currencySelect.value == "libra") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * bitcoinToDay / libraToDay);
        }
        
        if (currencySelect.value == "bitcoin") {
            CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-EL", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * bitcoinToDay /bitcoinToDay);
        }
    }

    
   
   

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


convertButton.addEventListener("click", convertValues, false);

currencyToConvert.addEventListener("change", changeFristCurrency, false)
currencySelect.addEventListener("change", cangeCurrency, false);


/*
if (currencySelect.value == "real"){
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(inputCurrencyValue / realToDay)
}

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
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-EL", { style: "currency", currency: "BTC" }).format(inputCurrencyValue /bitcoinToDay);
}*/