
import './App.css';
import Header from './components/header';
import {Container} from 'react-bootstrap'
import { BrowserRouter, Route } from "react-router-dom";
import Search from './components/search'
import flightResults from './components/flightResults'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <div className="body">
          <Search />
        </div>
      </Route>
      <Route path="/flights" component={flightResults} />
    </BrowserRouter>
  );
}

export default App;
