import React, { useState } from 'react'

export const Crear = () => {
    const tituloComponente = "Añadir Pelicula";
    const [peliState, setPeliState] = useState({
      titulo: "",
      descripcion:""      
    })

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion= target.descripcion.value;

        // Crear objeto de la pelicula a guardar

        let peli= {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        //Guardar Estado
        setPeliState(peli);

        //Guardar en el almacenamineto Local
        guardaEnStorage(peli);

       
    };

    const guardaEnStorage = peli =>{

      //Conseguir los elementos que ya tenemos en localstorage

      //Comprobar si es un array

      //Guardar en el localStorage

      //Devolver objeto

      localStorage.setItem('pelis', JSON.stringify([peli]));
    }


  return (
    <div className="add">
                <h3 className="title">{tituloComponente}</h3>
                <strong>{(titulo && descripcion) && "Has creado la pelicula: " + titulo}</strong>
                
                <form onSubmit={conseguirDatosForm}>
                    <input type="text" id ="titulo" name="titulo"       placeholder="Titulo"/>

                    <textarea id="descripcion"
                            name = "descripcion"
                            placeholder="Descripcion"></textarea>

                    <input type="submit" id= "save" value="Guardar"/>
                </form>
            </div>
  )

}
