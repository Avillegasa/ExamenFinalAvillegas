import React from "react";
import './Header.css'

const Titulo = ({children}) => {
  return (
    <section>
      <div className="navbar">
        <h2 className="titulo">{children}</h2>
      </div>
    </section>
  );
};

export default Titulo;