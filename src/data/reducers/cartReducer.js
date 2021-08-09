import { initCart } from "./initial";
import updateCart from "./functions/updateCart";
import checkForOffers from "./functions/checkForOffers";
import calculateTotals from "./functions/calculateTotals";

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return calculateTotals(checkForOffers(updateCart(state, action.payload)));
    case "RESET":
      return initCart;
    default:
      return state;
  }
};

export default cartReducer;
