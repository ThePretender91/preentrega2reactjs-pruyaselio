import React from 'react';

const CartWidget = () => {
  return (
    <div className="carrito">
      <img src='cart.png' alt='Icono Carrito' />
      <span className="cantidadCarrito">0</span>
    </div>
  );
};

export default CartWidget;
