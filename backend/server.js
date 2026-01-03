const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;


dotenv.config();
app.use(cors());

const POKEAPI_LIMIT = 1025; 
const POKEAPI_URL = process.env.URL;
const random_pokemon = async ()=> Math.floor(Math.random()* POKEAPI_LIMIT )+1;

app.get ('/api/new-pokemon', async (req , res) => {
    try{
        const id = await random_pokemon();
        const response  = await axios.get(`${POKEAPI_URL}/${id}`);
        const pokemonData = response.data;
        const options = [];
        while (options.length < 3) {
            const optionId = await random_pokemon();
            const optionResponse = await axios.get(`${POKEAPI_URL}/${optionId}`);
            options.push(optionResponse.data.name);
        }
        res.json({
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            options: [...options, pokemonData.name].sort(() => Math.random() - 0.5) 
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