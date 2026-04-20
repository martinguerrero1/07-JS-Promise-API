class Rick {
   constructor(nombre, especie, estado, imagen){
      this.nombre = nombre;
      this.especie = especie;
      this.estado = estado;
      this.imagen = imagen;
   }
}

async function crearRick() {
      const resp = await fetch("https://rickandmortyapi.com/api/character/1");
      const data = await resp.json();
      
      const rickSanchez = new Rick(data.name, data.species, data.status, data.image)
      console.log(rickSanchez);
}

crearRick();