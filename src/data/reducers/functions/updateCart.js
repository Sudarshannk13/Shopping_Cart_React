const updateCart = (state, { item, quantity }) => {
  let cart = [...state.cart];

  //is item already in cart?
  let index = state.cart.findIndex((cartItem) => cartItem.id === item.id);
  if (index === -1) {
    //if not create object for item
    const { id, price, name, offer } = item;

    return {
      ...state,
      cart: [...cart, { id, name, price, quantity, offer, discount: 0 }],
    };
  }
  //if in cart => update quantity
  cart[index].quantity += quantity;
  return {
    ...state,
    cart,
  };
};

export default updateCart;
