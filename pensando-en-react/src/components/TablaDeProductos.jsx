/* eslint-disable react/prop-types */
import RowCategoria from "./RowCategoria";
import RowProducto from "./RowProducto";

export default function TablaDeProductos({
  productos,
  busqueda,
  mostrarStock,
}) {
  const rows = [];

  if (productos) {
    let ultimaCategoria = null;
    productos.forEach((producto) => {
      if (producto.name.toLowerCase().indexOf(busqueda.toLowerCase()) === -1) {
        return;
      }
      if (mostrarStock && producto.stocked === !mostrarStock) {
        return;
      }
      if (producto.category !== ultimaCategoria) {
        rows.push(
          <RowCategoria key={producto.category} categoria={producto.category} />
        );
        ultimaCategoria = producto.category;
      }
      rows.push(<RowProducto key={producto.name} producto={producto} />);
    });
  }

  let contenidoTabla = <p>No hay resultados :(</p>;
  if (rows.length > 0) {
    contenidoTabla = (
      <table className="tabla">
        <thead>
          <tr>
            <th style={{ borderTopLeftRadius: "10px" }}>
              <b>Nombre</b>{" "}
            </th>
            <th style={{ borderTopRightRadius: "10px" }}>
              <b>Precio</b>{" "}
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  return <>{contenidoTabla}</>;
}
