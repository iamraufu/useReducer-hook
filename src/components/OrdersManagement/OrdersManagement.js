import React, { useReducer, useRef } from 'react';
import { orderReducer, orderState } from '../reducers/orderReducer';

const OrdersManagement = () => {

      const nameRef = useRef();
      const [state, dispatch] = useReducer(orderReducer, orderState);

      const handleSubmit = event => {
            event.preventDefault();

            dispatch(
                  {
                        type: 'ADD_ORDER',
                        name: nameRef.current.value,
                        id: state.orders.length + 1
                  })
            nameRef.current.value = "";
      }

      return (
            <div className='container mt-5'>
                  <h1>Orders Management: {state.orders.length}</h1>
                  <form onSubmit={handleSubmit}>
                        <input ref={nameRef} class="form-control" />
                  </form>
                  <table class="table table-striped">
                        <thead>
                              <tr>
                                    <th>Orders</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    state.orders.map(od =>

                                          <tr className="table-light">
                                                <td className="table-light">{od.name}</td>
                                                <button onClick={()=>dispatch({type:'REMOVE_ORDER',id:od.id})} className='btn'>Remove</button>
                                          </tr>


                                    )

                              }
                        </tbody>
                  </table>
            </div>
      );
};

export default OrdersManagement;