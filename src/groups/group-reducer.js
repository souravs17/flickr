import {
  UPDATE_GROUP_LIST,
  UPDATE_SEARCH_TEXT,
  CONCAT_GROUP_LIST,
  UPDATE_PAGE_NUMBER,
  UPDATE_MAX_PAGE_NUMBER,
} from "./group-action";

const initialState = {
  groupList: [],
  pageNumber: 1,
  searchText: "",
  maxPageNumber: 1,
};

const GroupReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_GROUP_LIST:
      return {
        ...state,
        groupList: payload,
      };
    case CONCAT_GROUP_LIST:
      return {
        ...state,
        groupList: [...state.groupList, ...payload],
      };
    case UPDATE_SEARCH_TEXT:
      return { ...state, searchText: payload };
    case UPDATE_PAGE_NUMBER:
      return { ...state, pageNumber: payload };
    case UPDATE_MAX_PAGE_NUMBER:
      return { ...state, maxPageNumber: payload };

    default:
      return state;
  }
};

export default GroupReducer;
