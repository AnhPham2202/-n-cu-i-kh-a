import { applyMiddleware, combineReducers, createStore} from "redux";
import PhimListReducer from "./Reducers/PhimListReducer";
import reduxThunk from "redux-thunk";
import TheaterListReducer from "./Reducers/TheaterListReducer";
import FilmDetailReducer from "./Reducers/FilmDetailReducer";
import TicketBookingReducer from "./Reducers/TicketBookingReducer";
import UserReducer from "./Reducers/UserReducer";


const rootReducer = combineReducers({
    PhimListReducer,
    TheaterListReducer,
    FilmDetailReducer,
    TicketBookingReducer,
    UserReducer,
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))