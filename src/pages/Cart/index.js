import React from 'react';
import { connect } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ products }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.tile} />
              </td>
              <td>
                <strong>{product.title}</strong>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline color="#7159c1" size={20} />
                  </button>
                  <input type="numer" value={1} readOnly />
                  <button type="button">
                    <MdAddCircleOutline color="#7159c1" size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.price}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete color="#7159c1" size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default connect(state => ({ products: state.cart }))(Cart);
