import { GET_USERNAME } from './actionTypes';

export const updateUsername = username => {
  return {
    type: GET_USERNAME,
    payload: {
      username
    }
  }
};

// action always returns an object
// has to return a type