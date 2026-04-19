async function filtroFetch() {
   const response = await fetch(`https://rickandmortyapi.com/api/character`);
   const data = await response.json();

   const pjVivos = data.results.filter((personaje) => personaje.status === "Alive");
   pjVivos.forEach(pj => {
      console.log(`ID: ${pj.id}\nNombre: ${pj.name}
         `)
   })
   console.log(`En total hay ${pjVivos.length} personajes vivos en la serie`)
}

filtroFetch();