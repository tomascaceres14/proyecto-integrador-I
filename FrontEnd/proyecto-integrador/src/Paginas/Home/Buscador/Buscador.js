import React, { useState } from "react";
import "./Buscador.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { SearchBar } from "./SearchBar";
import Calendario from "./Calendario";
import ListadoCiudades from "../Listado/ListadoCiudades";



function  Buscador(){
  
  return (
    <div className="buscador">
      <h1>¿Ya elegiste tu próximo destino?</h1>
      <div className="buscadores">
        <SearchBar />
        <Calendario className="calendario" />
        <button className="buscador-submit">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Buscador;

