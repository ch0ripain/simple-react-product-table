/* eslint-disable react/prop-types */
export default function RowProducto({ producto }) {
  const formato = Intl.NumberFormat("es-ar", {
    style: "currency",
    currency: "ARS",
  });

  return (
    <tr>
      <td style={{ color: producto.stocked ? "#8ff165" : "#d82a2a" }}>
        {producto.name}
      </td>
      <td>{formato.format(producto.price)}</td>
    </tr>
  );
}
