const btnEl = document.getElementById("submit-el") 


function render() {
    const lenghtEl = document.getElementById("lenght-el")
    const volumeEl = document.getElementById("volume-el")
    const massEl = document.getElementById("mass-el")

    let x = document.getElementById("input-el").value
    let number = Number(x)

    const numberFeet = number * 3.281
    const numberGallon = number * 0.264
    const numberPounds = number * 2.204
    const numberMeters = number / 3.281
    const numberLiters = number / 0.264
    const numberKillos = number / 2.204

    lenghtEl.innerHTML = `${number} meters = ${numberFeet.toFixed(3)} feet | ${number} feet = ${numberMeters.toFixed(3)} meters`
    volumeEl.innerHTML = `${number} liters = ${numberGallon.toFixed(3)} gallons | ${number} gallons = ${numberLiters.toFixed(3)} liters`
    massEl.innerHTML = `${number} kilos = ${numberPounds.toFixed(3)} pounds | ${number} pound = ${numberKillos.toFixed(3)} killos`
}

btnEl.addEventListener("click", function() {
    console.log("btn pressed!")
    render()
})
