import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducerDetail, {deleteReducer} from "./reducer";

const reducer = combineReducers({
    data:reducerDetail,
    delete:deleteReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
