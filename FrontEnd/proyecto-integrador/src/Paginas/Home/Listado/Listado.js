import "./Listado.css";
import data from "./data.json";
import React from "react";
import { Link } from "react-router-dom";

export default function Listado() {
  return (
    <div>
      <p className="cardsProductos-titulo">Recomendaciones</p>
      <div className="cardsProductos">
        {data.map((categoria) => (
          <div className="cardsProductos-unidad">
            <img
              key={categoria.id}
              src={categoria.categoria.imagen}
              alt=""
              className="cardsProductos-unidad-img"
            />
            <h2 className="cardsProductos-unidad-nombre">
              {categoria.categoria.nombre}
            </h2>
            <p className="cardsProductos-unidad-descripcion">
              {categoria.categoria.descripcion}
            </p>
            <Link to="/producto">
              <button className="cardsProductos-unidad-boton">Ver Más</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
