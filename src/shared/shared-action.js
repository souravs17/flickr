const UPDATE_LOADER = "updateLoader";

const updateLoaderAction = (payload) => {
  return {
    type: UPDATE_LOADER,
    payload,
  };
};

const updateLoader = (payload) => {
  return (dispatch) => {
    dispatch(updateLoaderAction(payload));
  };
};

export { UPDATE_LOADER, updateLoader, updateLoaderAction };
