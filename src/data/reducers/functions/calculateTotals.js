const calculateTotals = (state) => {
  const { cart } = state;

  const subtotal = cart.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);
  const discount = cart.reduce((total, item) => {
    return (total += item.discount);
  }, 0);

  const total = subtotal - discount;

  return {
    ...state,
    subtotal,
    discount,
    total,
  };
};

export default calculateTotals;
