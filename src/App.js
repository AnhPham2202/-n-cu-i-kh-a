import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import Home from "./Pages/Home/Home";
import FilmDetail from "./Pages/FilmDetail/FilmDetail";
import { createBrowserHistory } from "history";
import TheaterDetail from "./Pages/TheaterDetail/TheaterDetail";
import TicketBoongking from "./Pages/TicketBooking/TicketBoongking";
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/theaterdetail/:mahethongrap' component={TheaterDetail}/>
        <HomeTemplate path="/filmdetail/:id" component={FilmDetail} />
        <HomeTemplate path="/" exact component={Home} />
        <HomeTemplate path="/chitietphongve/:malichchieu" component={TicketBoongking} />
      </Switch>
    </Router>
  );
}

export default App;
