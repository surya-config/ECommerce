export const initialState = {
  user: null,
  items: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.item],
      };

    case "REMOVE_FROM_CART":
      let newItems = [...state.items];
      const index = state.items.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.log("item does not exist in the basket");
      }
      return {
        ...state,
        items: newItems,
      };

    default:
      return state;
  }
};

export default reducer;
