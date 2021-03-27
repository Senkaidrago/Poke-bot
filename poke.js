

const Pokedex = require('pokeapi-js-wrapper');
const { Message } = require('discord.js');

const options = {
 protocol: 'https',
 hostName: 'localhost:443',
 versionPath: '/api/v2/',
 cache: true,
 timeout: 5 * 1000 // 5s
}

const P = new Pokedex.Pokedex(options);

module.exports = {
'name' : 'Poke data',
execute(bot , msg, args){ 
   
P.getPokemonByName('${msg}').then(function(response)
{
  return Message.reply(response);
});
    }
};

