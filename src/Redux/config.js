import { applyMiddleware, combineReducers, createStore} from "redux";
import PhimListReducer from "./Reducers/PhimListReducer";
import reduxThunk from "redux-thunk";
import TheaterListReducer from "./Reducers/TheaterListReducer";
import FilmDetailReducer from "./Reducers/FilmDetailReducer";
import TicketBookingReducer from "./Reducers/TicketBookingReducer";


const rootReducer = combineReducers({
    PhimListReducer,
    TheaterListReducer,
    FilmDetailReducer,
    TicketBookingReducer,
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))