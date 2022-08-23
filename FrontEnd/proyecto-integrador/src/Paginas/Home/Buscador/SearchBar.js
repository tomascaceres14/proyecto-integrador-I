import { formatRelative } from "date-fns";
import React, { useState, useContext } from "react";
import Select from "react-select";
import "./SearchBar.css";
import useFetch from "../../../Hooks/useFetch";
import { CiudadesContext } from "../../../Context/CiudadesContext";


export const SearchBar = () => {
  const urlCiudades = "http://localhost:8080/ciudades";
  const { data } = useFetch(urlCiudades);
  // const [elegirCiudades, setElegirCiudades] = useState()

  const { elegirCiudades, setElegirCiudades } = useContext(CiudadesContext);

  const manejadorSelect = (event) => {
    setElegirCiudades(event.label);
  };
  

  return (
    <div className="searchBar">
      {console.log(elegirCiudades)}
      <Select
        className="searchBar-individual"
        defaultValue={""}
        options={
          data &&
          data.productos.map((ciudad) => ({
            label: ciudad.nombre,
            value: ciudad.id,
          }))
        }
        onChange={manejadorSelect}
      />
    </div>
  );
};
