import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(res);
          }, 1000);
        });
      })
      .then((res) => res.json())
      .then((res) => setProductos(res));
  }, []);

  
  return (
  <>
    {productos.length === 0 ? (
      <p>Cargando Detalles de Producto, por favor espere...</p>
    ) : (
      <div>
        {productos.filter((item) => item.id === parseInt(id)).map((item) => (
        <div className='contenedorDetallesProducto'>
          <div><img src={item.imagen} alt={item.nombre} /></div>
          <div>
            <p>Nombre: {item.nombre}</p>
            <p>Detalles: {item.descripcion}</p>
            <p>Precio: {item.precio}</p>
            <ItemCount stock={item.stock}/>
            <div className='contenedorBotonDetalles'><button>Agregar al Carrito</button></div>
          </div>
        </div>
        ))}
      </div>
    )}
  </>
  );
};

export default ItemDetailContainer;
