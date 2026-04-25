import React, { useState } from "react";
import { Card } from "./Card";
import { Error } from "./Error";

const Home = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, texto]);
	//recuerda ...tareas es para mantener las tareas anteriores y agregar la nueva al final del array, sin modificar el array original
//spread operator expnde el array  
};

const borrarTarea = (index) => {
  const nuevasTareas = tareas.filter((tarea, i) => i !== index);
  setTareas(nuevasTareas);
};

  return (	
	
		<div className="min-vh-100 bg-light py-4">
		<div className="container">

			<h1 className="text-center mb-4 fw-lighter text-secondary">
			Todos
			</h1>
{/*pasar las tareas y también las funciones que necesitas para agregar y borrar */}
			<Card tareas={tareas} agregar={agregarTarea} borrar={borrarTarea}/>

		</div>
		</div>
	
  );
};

export default Home;