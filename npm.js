let dias = [`lunes`, `martes`, `miercoles`, `jueves`, `viernes`]

/*for (let i=0; i < dias.length; i++) {
    dias[i]= dias[i].toUpperCase()
}

console.log (dias)*/

let diasMayus = dias.map (el=> {
    return el.toLocaleUpperCase()
})

console.log (diasMayus)