import { UPDATE_LOADER } from "./shared-action";

const initialState = {
  isLoaderActive: false,
};

const SharedReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_LOADER:
      return {
        ...state,
        isLoaderActive: payload,
      };
    default:
      return state;
  }
};

export default SharedReducer;
