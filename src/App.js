import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/header';
import {Container} from 'react-bootstrap';
import { BrowserRouter, Route } from "react-router-dom";
import Search from './components/search';
import FlightResults from './components/flightResults';
import {FlightsData} from "./Data/flightsData";
export const UserContext = React.createContext();
function App() {
  const data=FlightsData;

  useEffect(()=>{
    console.log(data)
  },[])
  return (
    <UserContext.Provider value={'viswas'}>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <div className="body">
            <Search />
          </div>
        </Route>
        <Route path="/flights" component={FlightResults} />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
