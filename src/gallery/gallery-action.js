import { updateLoaderAction } from "../shared/shared-action";
import { getImageList } from "./services/api";

const UPDATE_GROUP_INFO = "updateGroupInfo";
const ADD_GALLERY_IMAGES = "addGalleryImages";
const CONCAT_GALLERY_IMAGES = "concatGalleryImages";
const UPDATE_GALLERY_PAGE_NUMBER = "updateGalleryPageNumber";
const UPDATE_GALLERY_MAX_AGE_NUMBER = "updateGalleryMaxPageNumber";
const CLEAR_GALLERY_INFO = "clearGalleryInfo";

const updateGroupInfoAction = (payload) => {
  return {
    type: UPDATE_GROUP_INFO,
    payload,
  };
};

const addGalleryImageAction = (payload) => {
  return {
    type: ADD_GALLERY_IMAGES,
    payload,
  };
};

const concatGalleryImageAction = (payload) => {
  return {
    type: CONCAT_GALLERY_IMAGES,
    payload,
  };
};

const updateGalleryPageNumberAction = (payload) => {
  return {
    type: UPDATE_GALLERY_PAGE_NUMBER,
    payload,
  };
};

const updateGalleryMaxPageNumberAction = (payload) => {
  return {
    type: UPDATE_GALLERY_MAX_AGE_NUMBER,
    payload,
  };
};

const clearGalleryInfoAction = () => {
  return {
    type: CLEAR_GALLERY_INFO,
  };
};

const addImageList = (id, pageSize = 1) => {
  return async (dispatch) => {
    dispatch(updateLoaderAction(true));
    try {
      let response = await getImageList(id, pageSize);
      if (pageSize > 1) dispatch(concatGalleryImageAction(response.list));
      else dispatch(addGalleryImageAction(response.list));

      dispatch(updateGalleryPageNumberAction(pageSize));
      dispatch(updateGalleryMaxPageNumberAction(response.max));
    } catch (e) {
    } finally {
      dispatch(updateLoaderAction(false));
    }
  };
};

const updateGroupInfo = (id, name) => {
  return (dispatch, getState) => {
    dispatch(updateGroupInfoAction({ id, name }));
    console.log(getState());
  };
};

const clearGalleryInfo = () => {
  return (dispatch, getState) => {
    dispatch(clearGalleryInfoAction());
    console.log(getState());
  };
};

export {
  UPDATE_GROUP_INFO,
  ADD_GALLERY_IMAGES,
  CONCAT_GALLERY_IMAGES,
  UPDATE_GALLERY_PAGE_NUMBER,
  UPDATE_GALLERY_MAX_AGE_NUMBER,
  CLEAR_GALLERY_INFO,
  updateGroupInfoAction,
  updateGroupInfo,
  addImageList,
  clearGalleryInfo,
};
