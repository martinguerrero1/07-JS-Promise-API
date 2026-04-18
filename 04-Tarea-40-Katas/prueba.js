      const responsePikachu = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const pikachu = await responsePikachu.json();
   
      console.log(pikachu.name, pikachu.id, pikachu.weight);