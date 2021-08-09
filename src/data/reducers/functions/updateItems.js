const updateItems = (state, { item, quantity }) => {
  const { id } = item;
  //create new array and update stock.
  let items = state.map((item, index) => {
    return index === id ? { ...item, stock: item.stock - quantity } : item;
  });
  return items;
};

export default updateItems;
