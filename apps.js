const express = require('express')
const {success} = require('./helpers.js')//Ici on importe que la méthode success du helpers.js
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.get ('/', (req,res) => res.send('Hello again again , Express 2!!'))
// On retourne la liste des pokémons au format Json, avec un message :
app.get ('/api/pokemons', (req, res) => {
    const message = 'La liste des pokemons a bien été récuperée.'
    res.json (success(message, pokemons))//vraiment tout con
})
app.get('/api/pokemons/:id', (req, res)=> {
    const id= parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokémon a bien été trouvé.'
    res.json(success(message, pokemon))//On appeler la méthode success car on la importé directement du helpers.js grace a const{success} ligne 2.
})



app.listen(port, () => console.log(`Notre application Node est démarrée sur : htt://localhost:${port}`))