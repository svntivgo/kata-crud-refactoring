import React, { useRef } from "react";

export const ListForm = (props) => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const string = formRef.current[0].value;

    if (string.length > 2) {
      const request = {
        name: string,
      };

      props.crearLista(request)
      formRef.current.reset();
    } else if (string.length > 40) {
      alert("El nombre es muy largo");
    } else {
      alert("El nombre es muy corto");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input
        className="p-1"
        type="text"
        name="name"
        placeholder="Lista To-Do"
        defaultValue=""
        required
      ></input>
      <button type="submit" className="btn btn-success m-3">
        Crear
      </button>
    </form>
  );
};
