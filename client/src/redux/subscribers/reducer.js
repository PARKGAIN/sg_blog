import { ADD_LIKE, CANCEL_LIKE } from "./types";
const initialLike = {
  like: 0,
};
const likeReducer = (state = initialLike, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        like: state.like + 1,
      };
    case CANCEL_LIKE:
      return {
        ...state,
        like: state - 1,
      };
    default:
      return state;
  }
};

export default likeReducer;
