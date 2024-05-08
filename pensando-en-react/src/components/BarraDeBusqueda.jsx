/* eslint-disable react/prop-types */
export default function BarraDeBusqueda({
  onChangeBusqueda,
  onClickStockDisponible,
  busqueda,
  stockDisponible,
}) {
  return (
    <form>
      <input
        placeholder="Buscar..."
        onChange={(event) => onChangeBusqueda(event.target.value)}
        type="text"
        value={busqueda}
      />
      <br />
      <label className="checkbox-label">
        <input
          onChange={(event) => onClickStockDisponible(event.target.checked)}
          type="checkbox"
          checked={stockDisponible}
        />
        <span>Mostrar solo los productos con stock disponible.</span>
      </label>
    </form>
  );
}
