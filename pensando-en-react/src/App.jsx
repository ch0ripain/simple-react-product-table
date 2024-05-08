import "./App.css";
import Header from "./components/Header";
import TablaFiltradoraDeProductos from "./components/TablaFiltradoraDeProductos";

const LISTA_DE_PRODUCTOS = [
  { category: "Frutas", price: 150, stocked: true, name: "Manzana" },
  { category: "Frutas", price: 180, stocked: false, name: "Maracuyá" },
  { category: "Frutas", price: 200, stocked: true, name: "Banana" },
  { category: "Frutas", price: 220, stocked: true, name: "Uva" },
  { category: "Verduras", price: 120, stocked: true, name: "Espinaca" },
  { category: "Verduras", price: 200, stocked: false, name: "Calabaza" },
  { category: "Verduras", price: 100, stocked: true, name: "Guisantes" },
  { category: "Verduras", price: 150, stocked: true, name: "Zanahoria" },
];

function App() {
  return (
    <>
      <Header />
      <TablaFiltradoraDeProductos productos={LISTA_DE_PRODUCTOS} />
    </>
  );
}

export default App;
