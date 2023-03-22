import { GET_FAVORITOS, REMOVE_FAVORITOS } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITOS:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };
    case REMOVE_FAVORITOS:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
