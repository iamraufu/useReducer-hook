export const orderState ={ 
      orders:[]
}

export const orderReducer = (state,action)=>{

      switch (action.type)
      {
            case 'ADD_ORDER':
                  const newOrder = 
                  {
                        id: action.id,
                        name: action.name,
                  }

                  const allOrders = [...state.orders, newOrder]
                  return {orders: allOrders};

            case 'REMOVE_ORDER': 
                  const remaining = state.orders.filter(od=>od.id!==action.id);
                  const newState = {orders:remaining};
                  return newState;

            default:
                  return state;
      }
}