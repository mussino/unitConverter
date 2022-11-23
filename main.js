let userNumberInput = []
const converterBtn = document.getElementById('converter-btn')
const inputValue = document.getElementById('input-value')
const initialMeters = document.getElementById('initial-meters')
const valueMeters = document.getElementById('result-meters')
const initialFeets = document.getElementById('initial-feets')
const valueFeets = document.getElementById('result-feets')
const initialLiters = document.getElementById('initial-liters')
const valueLiters = document.getElementById('result-liters')
const initialGallons = document.getElementById('initial-gallons')
const valueGallons = document.getElementById('result-gallons')
const initialKilos = document.getElementById('initial-kilos')
const valueKilos = document.getElementById('result-kilos')
const initialPounds = document.getElementById('initial-pounds')
const valuePounds = document.getElementById('result-pounds')





converterBtn.addEventListener('click', function() {
    userNumberInput.push(inputValue.value)
    initialMeters.textContent = `${userNumberInput} meters =`
    initialFeets.textContent = `${userNumberInput} feets =`
    initialLiters.textContent = `${userNumberInput} liters =`
    initialGallons.textContent = `${userNumberInput} gallons =`
    initialKilos.textContent = `${userNumberInput} kilos =`
    initialPounds.textContent = `${userNumberInput} pounds =`


    const resultMeters = userNumberInput * 3.281
    const resultFeets = userNumberInput / 3.281
    const resultLiters = userNumberInput * 0.264
    const resultGallons = userNumberInput / 0.264
    const resultKilos = userNumberInput * 2.204
    const resultPounds = userNumberInput / 2.204
    
    valueMeters.textContent = `${resultMeters.toFixed(3)} feet`
    valueFeets.textContent = `${resultFeets.toFixed(3)} meters`
    valueLiters.textContent = `${resultLiters.toFixed(3)} gallons`
    valueGallons.textContent = `${resultGallons.toFixed(3)} liters`
    valueKilos.textContent = `${resultKilos.toFixed(3)} pounds`
    valuePounds.textContent = `${resultPounds.toFixed(3)} kilos`
    inputValue.value = ''
})
