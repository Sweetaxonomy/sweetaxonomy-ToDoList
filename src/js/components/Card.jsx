import React, { useState } from "react";
import { Error } from "./Error";

export const Card = ({ tareas, agregar, borrar }) => {
  //estado para guardar valor del input
    const [input, setInput] = useState("");
//estado para guardar el mensaje de error
  const [error, setError] = useState("");
//funcion que se ejecuta al presionar una tecla en el input, si es enter se agrega la tarea, si no se muestra un mensaje de error
  const manejarTecla = (e) => {
    if (e.key === "Enter") {
      const texto = input.trim();

      if (texto === "") {
        setError("No puedes añadir una tarea vacía");
        return;
      }

      if (texto.length < 3) {
        setError("La tarea debe tener al menos 3 caracteres");
        return;
      }

      setError("");
      agregar(texto)
      setInput("");
    }
  };

  return (
    <div className=" mx-auto">
      <div className=" bg-light shadow rounded">

        <input type="text" className="form-control border-2 shadow-none rounded-0 fs-2 fw-light px-4 py-3" placeholder="What needs to be done?" value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          onKeyDown={manejarTecla}
        />
    {/*muestra un setError si el input es vacio o tiene menos de 3 caracteres, y se borra el mensaje de error al escribir en el input*/}
        {error && <Error mensaje={error} />}

        <ul className="list-group list-group-flush">
          {tareas.length === 0 ? (
            <li className="list-group-item text-muted fs-3 fw-light px-4 py-3">
              No hay tareas, añadir tareas
            </li>
          ) : (
            tareas.map((tarea, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center fs-2 fw-light px-4 py-3 todo-item">
                <span>{tarea}</span>

                <span className="delete-btn" onClick={() => borrar(index)}>
                  ×
                </span>
              </li>
            ))
          )}
        </ul>

        <div className="  px-4 py-2 fw-light text-secondary bg-light">
          {tareas.length} item left
        </div>

      </div>
    </div>
  );
};