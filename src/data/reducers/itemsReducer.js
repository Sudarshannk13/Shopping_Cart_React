import { initItems, initItems2 } from "./initial";
import updateItems from "./functions/updateItems";

const itemsReducer = (state = initItems, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return updateItems(state, action.payload);
    case "RESET":
      return initItems;
    default:
      return state;
  }
};

export default itemsReducer;
