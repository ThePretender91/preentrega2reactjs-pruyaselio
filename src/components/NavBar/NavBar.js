import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import NavLink from '../NavLink/NavLink';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className='iconoPagina'>
        <a href="#"> <img src="iconotienda.jpg" alt="TECNO-STORE" /></a>
      </div>
      <ul className="secciones">
        <li className="itemSecciones">
          <NavLink linkName="Celulares" linkPage="#" />
        </li>
        <li className="itemSecciones">
          <NavLink linkName="Notebooks" linkPage="#" />
        </li>
        <li className="itemSecciones">
          <NavLink linkName="Accesorios" linkPage="#" />
        </li>
        <li className="itemSecciones">
          <NavLink linkName="Contacto" linkPage="#" />
        </li>
        <CartWidget />
    </ul>        
   </nav>
    <ItemListContainer gretting="Hola Bienvenido a mi Primer Pre Entrega"/>
    </>
  );
};

export default Navbar;
