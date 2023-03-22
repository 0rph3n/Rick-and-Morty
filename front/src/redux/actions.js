export const GET_FAVORITOS = "GET_FAVORITOS";
export const REMOVE_FAVORITOS = "REMOVE_FAVORITOS";

export const getFavoritos = (character) => {
  return {
    type: GET_FAVORITOS,
    payload: character,
  };
};

export const removeFavoritos = (id) => {
  return {
    type: REMOVE_FAVORITOS,
    payload: id,
  };
};
