import React from "react";

export const Error = ({ mensaje }) => {
  return (
    <div className="todo-error px-4 py-2">
      {mensaje}
    </div>
  );
};