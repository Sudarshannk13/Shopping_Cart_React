const applyOffers = (state) => {
  const { cart } = state;
  cart.forEach((item) => {
    //item has offer?
    if (item.offer) {
      //find item offer applies to
      let discountedItem = cart.find(
        (product) => product.id === item.offer.itemId
      );
      //if found calculate discount and add to cart item
      if (discountedItem) {
        discountedItem.discount = item.offer.discount(
          discountedItem,
          item.quantity
        );
      }
    }
  });

  return {
    ...state,
    cart,
  };
};

export default applyOffers;
