function inestable(){
  const porcentaje = Math.floor(Math.random() * 100)+1
  return new Promise((resolve,reject) => {
    if(porcentaje <= 70){
      reject("Falló el intento");
    } else{
      resolve("¡Éxito!");
    }
  })
}

async function conReintento(intentosMaximos) {
  for (let intentos = 0; intentos < intentosMaximos; intentos++){
    try{
      let intento = await inestable();
      console.log(intento);
      break
    } catch(error){
      console.log(error);
    }
  }
}