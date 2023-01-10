import { ADD_LIKE, CANCEL_LIKE } from "./types";

export const addLike = () => {
  return {
    type: ADD_LIKE,
  };
};

export const cancelLike = () => {
  return {
    type: CANCEL_LIKE,
  };
};
