const express = require('express')

const app = express()
const port = 3000

app.get ('/', (req,res) => res.send('Hello again again , Express 2!!'))

app.get('/api/pokemons/:id/:name/:type', (req, res)=> {
    const id= req.params.id
    const name = req.params.name
    const type = req.params.type
    res.send(`Vous avez demandé le pokémon n°${id} dont le nom est ${name} et le types est ${type}.`)
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : htt://localhost:${port}`))