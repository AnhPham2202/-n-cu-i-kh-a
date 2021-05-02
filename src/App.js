import Header from './Components/Header/Header';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter >
      <Switch>


        <HomeTemplate  path='/' exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
