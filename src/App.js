import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kontakt from './components/Navbar/Kontakt';
import Pocetna from './components/Navbar/Pocetna';
import Onama from './components/Navbar/Onama';


const App = () => {

  let routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pocetna} exact />
        <Route path="/o-nama" component={Onama} />
        <Route path="/kontakt" component={Kontakt} />
      </Switch>
    </BrowserRouter>
  )


  return (
    <div>
      {routes}
      
    </div>
  );
}

export default App;
