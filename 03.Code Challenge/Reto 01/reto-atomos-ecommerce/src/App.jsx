import "./App.css";
import React from "react";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import Badge from "./components/Badge";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🛒 Mi Tienda Online</h1>
        <p>Reto de Componentes Atómicos</p>
      </header>
      <div>
        <Badge text="En stock" variant="success" />
        <Badge text="Descuento" variant="warning" />
        <div>
          <Input
            label="Buscar productos"
            type="text"
            placeholder="Escribe aquí..."
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <main className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default App;