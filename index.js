



const apiurl = "https://api.adviceslip.com/advice"
const numero =  document.querySelector (".numero")
const jsbt = document.querySelector (".jsbt")
const child2 = document.querySelector (".child2")


const getData = async () => {
    
 const responce = await fetch (apiurl)
 const user = await responce.json()
 numero.innerHTML = `${user.slip.id}`
 child2.innerHTML = `${user.slip.advice}`

}

getData()

jsbt.addEventListener ("click", () => {
 getData()
})