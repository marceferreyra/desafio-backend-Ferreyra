const express= require (`express`)

const app= express ()

const PORT = 8080

app.listen (8080, ()=>{
    console.log (`Server run on port`, PORT)
})

app.get (`/bienvenida`, (req, res)=>{
    res.send (`<h1 style="color:blue">Bienvenidos</h1>`)
})

app.get (`/user`, (req, res)=>{
    res.send ({Name: `Marcelo`, Lastname: `Ferreyra`, mail: `marceloferreyra@outlook.com`, phone: `3517327333`})
})