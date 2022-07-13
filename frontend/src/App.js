
import {BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import MyNavbar from './component/MyNavbar';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './component/Detail';
import Forms from './component/Form';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MyNavbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={Forms} />
        
        <Route exact path="/show/:id" render={props =>(
          <Details {...props}/>
        )}></Route>

        <Redirect to="/" />
        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
