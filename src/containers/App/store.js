import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as reduxFormReducer } from "redux-form";
import thunk from "redux-thunk";
import {
  sidebarReducer,
  themeReducer,
  rtlReducer,
  products,
} from "../../redux/reducers/index";
import { reducer as toastrReducer } from "react-redux-toastr";

const middlewares = [thunk];

const reducer = combineReducers({
  form: reduxFormReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  rtl: rtlReducer,
  toastr: toastrReducer,
  products,
});

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
