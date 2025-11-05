const contenedoresMap = {
    "independiente": document.getElementById("contenedor-independiente"),
    "municipalidad": document.getElementById("contenedor-municipalidad"),
    "cohesiona": document.getElementById("contenedor-cohesiona"),
    "civilab": document.getElementById("contenedor-civilab"),
    "puentes": document.getElementById("contenedor-puentes")
}
proyectosData.forEach(proyecto =>{
    const contenedorDestino = contenedoresMap[proyecto.categoriaID];
    if (!contenedorDestino){
        console.warn(`No se encontró contenedor para la categoría: ${proyecto.categoriaID}`);
    }

    const tarjetaProyecto = document.createElement("div");
    tarjetaProyecto.classList.add("tarjeta-proyecto");
    const imagen = document.createElement("img");
    imagen.src = proyecto.imagen;
    imagen.alt = proyecto.titulo;
    imagen.classList.add("tarjeta-imagen");
    
    const contenido = document.createElement("div");
    contenido.classList.add("tarjeta-contenido");

    const titulo = document.createElement("h3");
    titulo.textContent = proyecto.titulo;

    const descripcion = document.createElement("p");
    descripcion.textContent = proyecto.descripcion;
    
    contenido.appendChild(titulo);
    contenido.appendChild(descripcion);
    tarjetaProyecto.appendChild(imagen)
    tarjetaProyecto.appendChild(contenido);
    contenedorDestino.appendChild(tarjetaProyecto);
});
    
    