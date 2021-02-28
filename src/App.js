import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./components/search";
import FlightResults from "./components/flightResults";
import { FlightsData } from "./Data/flightsData";
export const submitData = React.createContext();
export const resultData=React.createContext();

function App() {
  const flights = FlightsData;
  const [formData,setFormData]=useState();
  const [flightResults,setFlights]=useState([]);
  const [finalData,setFinalData] = useState([]);
const onSubmit=(data)=>{
   console.log(data)
    if(data.return=='Invalid Date'){
     let result=resultsFromSearch(data.departure,data.from,data.to);
      setFlights([result]);
    }else{
        let result1 = resultsFromSearch(data.departure, data.from, data.to);
        let result2 = resultsFromSearch(data.return, data.to, data.from);
        setFlights([result1,result2])
    }
        setFormData(data);
       
}

const resultsFromSearch=(dep,from,to)=>{
           let result = flights.filter((ele) => {
             return (
               ele.Days.includes(new Date(dep).getDay()) &&
               ele.Departures.some((x) => {
                 return x.location === from;
               }) &&
               ele.Arrivals.some((x) => {
                 return x.location === to;
               })
             );
           });
           return result;
}
const getResults=(flightResults,from,date)=>{
  let arr=[];
    flightResults.forEach((ele,i)=>{
           
            ele.Departures.forEach((x,i)=>{
                    
                    if(x.location===formData[from]){
                      let obj = {};
                      obj["Airline"] = ele.Airline;
                      obj["Date"] = formData[date];
                      obj['Departure']=x;
                      obj['Arrival']=ele.Arrivals[i];
                      obj['logo']=ele.logo;
                      obj['Price']= +formData.total * ele['Price']
                      arr.push(obj);
                    }

            })
        });
  
      arr.sort(
        (a,b) =>{
         return +a["Departure"]["time"].split(":").join(".") -
          +b["Departure"]["time"].split(":").join(".")
        }
      );
      
       console.log('results',arr); 
       return arr;
}
  useEffect(() => {
  console.log(formData)
    if(flightResults.length===1){
         let dres=getResults(flightResults[0],'from','departure');
          setFinalData([formData,dres])
    }else if (flightResults.length>>1) {
       let dres = getResults(flightResults[0], "from", "departure");
       
         let retrn = getResults(flightResults[1],'to','return');
         setFinalData([formData,dres, retrn]);
    }

  }, [formData,flightResults]);
  return (
    <submitData.Provider value={onSubmit}>
      <resultData.Provider value={finalData}>
        <BrowserRouter>
          <Header />
          <Route exact path="/">
            <div className="body">
              <p className="descr">
                Travel the way to happiness. <br />
                Search book and goo..
                <ion-icon name="airplane"></ion-icon>
              </p>
              <Search />
            </div>
          </Route>
          <Route path="/flights" component={FlightResults} />
        </BrowserRouter>
      </resultData.Provider>
    </submitData.Provider>
  );
}

export default App;
