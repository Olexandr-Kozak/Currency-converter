import {combineReducers, createStore} from "redux";
import headerReducer from "./header-reducer";
// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
// import usersReducer from "./users-reducer";

let reducers = combineReducers({
  header: headerReducer
  // dialogsPage: dialogsReducer,
  // sideBar: sidebarReducer,
  // usersPage: usersReducer
});


let store = createStore(reducers);


export default store;