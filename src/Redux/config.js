import { applyMiddleware, combineReducers, createStore} from "redux";
import PhimListReducer from "./Reducers/PhimListReducer";
import reduxThunk from "redux-thunk";
import TheaterListReducer from "./Reducers/TheaterListReducer";
import FilmDetailReducer from "./Reducers/FilmDetailReducer";
import TicketBookingReducer from "./Reducers/TicketBookingReducer";
import UserReducer from "./Reducers/UserReducer";
import AdminReducer from "./Reducers/AdminReducer";


const rootReducer = combineReducers({
    PhimListReducer,
    TheaterListReducer,
    FilmDetailReducer,
    TicketBookingReducer,
    UserReducer,
    AdminReducer,
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))