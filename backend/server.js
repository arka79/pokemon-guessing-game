const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;


dotenv.config();
app.use(cors());

const POKEAPI_LIMIT = 1025; 

const random_pokemon = async ()=> Math.floor(Math.random()* POKEAPI_LIMIT )+1;

app.get ('/api/new-pokemon', async (req , res) => {
    try{
        const id = await random_pokemon();
        const response  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data;
        res.json({
            name: pokemonData.name,
            image: pokemonData.sprites.front_default
        });
    }
     catch (error){
        console.error('Error fetching pokemon data:', error);
        res.status(500).json({ error: 'Failed to fetch pokemon data' });
    }
});
 
  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});