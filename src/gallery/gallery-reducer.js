import {
  UPDATE_GROUP_INFO,
  ADD_GALLERY_IMAGES,
  CONCAT_GALLERY_IMAGES,
  UPDATE_GALLERY_PAGE_NUMBER,
  UPDATE_GALLERY_MAX_AGE_NUMBER,
  CLEAR_GALLERY_INFO,
} from "./gallery-action";

const initialState = {
  images: [],
  pageNumber: 1,
  maxPageSize: 1,
  groupId: 0,
  groupName: "",
};

const GalleryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_GROUP_INFO:
      return {
        ...state,
        groupId: payload.id,
        groupName: payload.name,
      };
    case ADD_GALLERY_IMAGES:
      return {
        ...state,
        images: payload,
      };
    case CONCAT_GALLERY_IMAGES:
      return {
        ...state,
        images: [...state.images, ...payload],
      };
    case UPDATE_GALLERY_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: payload,
      };
    case UPDATE_GALLERY_MAX_AGE_NUMBER:
      return {
        ...state,
        maxPageSize: payload,
      };
    case CLEAR_GALLERY_INFO:
      return initialState;
    default:
      return state;
  }
};

export default GalleryReducer;
