import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Item from '../Item/Item'

const ItemListContainer = () => {
  const {id} = useParams();
  const [productos, setProductos] = useState([]);

  let mensaje;

  id === undefined ? mensaje = 'Usted se encuentra en Home' : mensaje = `Estoy en Categoria ${id}`;

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(res);
          }, 3000);
        });
      })
      .then((res) => res.json())
      .then((res) => setProductos(res));
  }, []);
  
  return (
    <>
      <p>{mensaje}</p>
      {productos.length === 0 ? (
        <p>Cargando Productos, por favor espere...</p>
      ) : (
        <div className='contenedorItems'>
          {productos.map((item) => <Item item={item} />)}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
