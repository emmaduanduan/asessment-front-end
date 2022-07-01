let choose = document.querySelector("#pretty")
choose.addEventListener("click", recommend)
function recommend(){
    let array = ["Da boccery","Cusina", "Oyo"]
    let random = array[Math.floor(Math.random() * array.length)]
    alert(`The restaurant for you is: ` + random)
}