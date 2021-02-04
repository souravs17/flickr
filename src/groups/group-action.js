import { updateLoaderAction } from "../shared/shared-action";
import { getGroupList } from "./services/api";

const UPDATE_GROUP_LIST = "updateGroupList";
const UPDATE_SEARCH_TEXT = "updateSearchText";
const CONCAT_GROUP_LIST = "concatGroupList";
const UPDATE_PAGE_NUMBER = "updatePageNumber";
const UPDATE_MAX_PAGE_NUMBER = "UpdateMaxPageNumber";
const updateGroupListAction = (payload) => {
  return {
    type: UPDATE_GROUP_LIST,
    payload,
  };
};

const concatGroupListAction = (payload) => {
  return {
    type: CONCAT_GROUP_LIST,
    payload,
  };
};

const updateTextAction = (payload) => {
  return {
    type: UPDATE_SEARCH_TEXT,
    payload,
  };
};

const updatePageNumberAction = (payload) => {
  return {
    type: UPDATE_PAGE_NUMBER,
    payload,
  };
};

const updateMaxPageNumberAction = (payload) => {
  return {
    type: UPDATE_MAX_PAGE_NUMBER,
    payload,
  };
};

const addGroupList = (text, pageSize = 1) => {
  return async (dispatch) => {
    dispatch(updateLoaderAction(true));
    try {
      let response = await getGroupList(text, pageSize);
      if (pageSize > 1) {
        dispatch(concatGroupListAction(response.list));
      } else {
        dispatch(updateTextAction(text));
        dispatch(updateGroupListAction(response.list));
      }
      dispatch(updatePageNumberAction(pageSize));
      dispatch(updateMaxPageNumberAction(response.max));
    } catch (e) {
    } finally {
      dispatch(updateLoaderAction(false));
    }
  };
};

export {
  UPDATE_GROUP_LIST,
  UPDATE_SEARCH_TEXT,
  CONCAT_GROUP_LIST,
  UPDATE_PAGE_NUMBER,
  UPDATE_MAX_PAGE_NUMBER,
  addGroupList,
};
