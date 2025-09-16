import { useState } from "react";
import "./Header.css"
export default function Header() {
  let searchTerm = '';
  const [showUserMenu, toggleUserMenu] = useState(false);
  const handleSearch = () => {};
  const onChangeSearchTerm = () => {};
  const toggleUserEvent = () => { toggleUserMenu(showUserMenu => !showUserMenu); };
  const closeSession = () => {};
  return (<header>
    {/* Tobar con información adicional */}
    <div className="header-top">
      <div className="container flex-between">
        <span className="delivery-info">Envío gratis en pedidos de más de $999</span>
        <div className="top-links">
          <a href="/help">Ayuda</a>
          <a href="/track">Rastrear</a>
        </div>
      </div>
    </div>
    {/* Main Header */}
    <div className="header-main">
      <div className="container header-content">
        {/* LOGO */}
        <a href="/" className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        fujioka.com</a>
        {/* Barra de búsqueda */}
        <form action="" className="search-form" onSubmit={handleSearch}>
          <input 
            id="header-search"
            type="text" 
            placeholder="Buscar productos" 
            value={searchTerm} 
            onChange={onChangeSearchTerm} 
            className="search-input" />
          <button type="submit" className="search-btn" aria-label="Buscar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            Buscar
          </button>
        </form>
        {/* Acciones del usuario */}
        <div className="header-actions">
          {/* Favoritos */}
          <button className="action-btn" aria-label="Lista de deseos">
            <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </span>
            <span className="action-text">Favoritos</span>
          </button>
          <button className="action-btn" aria-label="Carrito de compra">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </span>
            <span className="action-text">Carrito</span>
            <span className="badge">6</span>
          </button>
          {/* Funciones de usuario */}
          <div className="user-menu" >
            <div className="user-dropdown">
              <button className="action-btn user-btn" onClick={toggleUserEvent} aria-label="Menú de usuario">
                <span className="icon">👤</span>
                <span className="action-text">Mi cuenta</span>
                <span className="dropdown-arrow">&#9660;</span>
              </button>
              { showUserMenu && (
              <div className="dropdown-menu">
                <a href="/profile">Mi perfil</a>
                <a href="/orders">Mis pedidos</a>
                <a href="/addresses">Direcciones</a>
                <a href="/payment">Métodos de pago</a>
                <hr />
                <button onClick={closeSession}>Cerrar sesión</button>
              </div>
              )}
            </div>
            <div className="auth-buttons">
              <button className="btn-primary">Iniciar sesión</button>
              <button className="btn-primary">Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}