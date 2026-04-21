/* --------------------------------------------------------------------------
   KATA 40: 🏆 CHALLENGE FINAL — Equipo Pokémon completo
   Reuní todo lo aprendido:
     1. Tenés este array de nombres: ["pikachu", "charizard", "mewtwo", "snorlax"]
     2. Creá una clase PokemonLimpio con: id, nombre, altura, peso, tipos (array).
     3. Usá .map() + Promise.all para fetchear los 4 en paralelo.
     4. Parseá todos los JSONs en paralelo con otro Promise.all.
     5. Mapeá los datos crudos a instancias de PokemonLimpio.
     6. Mostrá el equipo completo con todos sus datos.
   Bonus: ordená el equipo por peso de menor a mayor antes de mostrarlo.
-------------------------------------------------------------------------- */

// TU CÓDIGO AQUÍ 👇

const nombres = ["pikachu", "charizard", "mewtwo", "snorlax"];

class PokemonLimpio{
   constructor(id, nombre, altura, peso, tipos){
      this.id = id;
      this.nombre = nombre;
      this.altura = altura;
      this.peso = peso;
      this.tipos = tipos;
   }
}

async function fetchPokemones(pokemones) {
   const fetchedPokemones = pokemones.map(pokemon => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`))

   const responses = await Promise.all(fetchedPokemones);
   const data = await Promise.all(responses.map(response => response.json())); //array de cada pokemon como objeto

   const instanciasPokemones = data.map(objPokemon => {
      return new PokemonLimpio(objPokemon.id, objPokemon.name, objPokemon.height, objPokemon.weight, objPokemon.types)
   });

   console.table(instanciasPokemones);
}

fetchPokemones(nombres);