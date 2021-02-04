import { combineReducers } from "redux";
import { GalleryReducer } from "../gallery";
import { GroupReducer } from "../groups";
import SharedReducer from "../shared/shared-reducer";

const RootReducer = combineReducers({
  gallery: GalleryReducer,
  groups: GroupReducer,
  shared: SharedReducer,
});

export default RootReducer;
