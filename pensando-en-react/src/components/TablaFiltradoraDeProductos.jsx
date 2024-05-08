/* eslint-disable react/prop-types */
import { useState } from "react";
import BarraDeBusqueda from "./BarraDeBusqueda.jsx";
import TablaDeProductos from "./TablaDeProductos.jsx";

export default function TablaFiltradoraDeProductos({ productos }) {
  const [busquedaTexto, setBusquedaTexto] = useState("");
  const [mostrarStockDisponible, setMostrarStockDisponible] = useState(false);

  return (
    <>
      <BarraDeBusqueda
        onChangeBusqueda={setBusquedaTexto}
        onClickStockDisponible={() =>
          setMostrarStockDisponible(!mostrarStockDisponible)
        }
        busqueda={busquedaTexto}
        stockDisponible={mostrarStockDisponible}
      />
      <TablaDeProductos
        productos={productos}
        busqueda={busquedaTexto}
        mostrarStock={mostrarStockDisponible}
      />
    </>
  );
}
