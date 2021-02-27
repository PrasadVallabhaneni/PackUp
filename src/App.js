
import './App.css';
import Header from './components/header';
import {Container} from 'react-bootstrap'
import { BrowserRouter, Route } from "react-router-dom";
import Search from './components/search'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Search/>
    </BrowserRouter>
  );
}

export default App;
