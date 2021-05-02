import { applyMiddleware, combineReducers, createStore} from "redux";
import PhimListReducer from "./Reducers/PhimListReducer";
import reduxThunk from "redux-thunk";


const rootReducer = combineReducers({
    PhimListReducer
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))