import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment} from "react";
import route from './routing/route';
import RoutingTemplate from "./Template/RoutingTemplate";
import HomePage from './Page/HomePage/HomePage';

function App() {
  const showMenuRouting = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) =>{
        return(
          <RoutingTemplate 
            key={index} 
            exact = {item.exact} 
            path = {item.path} 
            Component = {item.component}
          />
        )
      })
    }
  }

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          {showMenuRouting(route)}
          <Route exact path="" component = {HomePage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
