import React,{useState,useEffect,useContext} from 'react'
import FlightInfo from './flightInfo'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {resultData} from '../App';
import RangeSlider from './slider'
const FlightResults = () => {
const data=useContext(resultData);
// const [result,setResult]=useState(data);
const [departResult,setDepartResults]=useState(data[1])
const [returnResult, setReturnResults] = useState(data[2]);
const [range,setRange]=useState([1000,50000]);
const rangeChange=(val)=>{
      setRange(val)
}
  useEffect(()=>{
    console.log(data);
    // setResult(data);
      let map1 = data[1].filter((a) => {
        return +a.Price > range[0] && +a.Price < range[1];
      });
       setDepartResults(map1);
       setReturnResults();
       if(data[2]){
           let map2 = data[2].filter((a) => {
             return +a.Price > range[0] && +a.Price < range[1];
           });
         setReturnResults(map2);
       }
   

  },[data,range])
    return (
      <div className="results">
        <FlightInfo data={data[0]} />
        <hr />
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: "center" }}>
              <RangeSlider range={rangeChange} />
            </Col>
            {departResult && <Col className="dCol">
              <p style={{ color: "white" }}>
                <ion-icon name="arrow-up-outline"></ion-icon>Depart Flights (
                {departResult ? departResult.length : "0"})
              </p>
              {departResult.length ? (
                departResult.map((ele, i) => (
                  <Row className="drows" key={i}>
                    <Col>
                      <Card>
                        <Card.Header>
                          <span style={{ float: "left" }}>
                            <img
                              style={{ width: "30px", height: "30px" }}
                              src={ele.logo}
                            />
                            &nbsp;{ele.Airline}
                          </span>
                          <span style={{ float: "right" }}>₹ {ele.Price}</span>
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            <Row className="departFlights">
                              <Col className="cols">
                                <ion-icon
                                  name="airplane"
                                  style={{
                                    color: "black",
                                    transform: "rotate(-90deg)",
                                    fontSize: "15px",
                                  }}
                                ></ion-icon>
                                &nbsp;
                                {ele.Departure.location.split(" ")[0]} <br />
                                <span className="time">
                                  ({ele.Departure.time})
                                </span>
                              </Col>
                              <Col className="cols">
                                <p className="duration">
                                  {(
                                    +ele.Arrival.time.split(":").join(".") -
                                    ele.Departure.time.split(":").join(".")
                                  ).toFixed(2) + "hr"}
                                </p>
                                <hr />
                              </Col>
                              <Col className="cols">
                                <ion-icon
                                  name="location-outline"
                                  size="small"
                                ></ion-icon>
                                &nbsp;
                                {ele.Arrival.location.split(" ")[0]} <br />
                                <span className="time">
                                  ({ele.Arrival.time})
                                </span>
                              </Col>
                            </Row>
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                ))
              ) : (
                <p>"No flights found"</p>
              )}
            </Col>}
            {returnResult && (
              <Col className="rCol">
                <p style={{ color: "white" }}>
                  <ion-icon name="arrow-down-outline"></ion-icon>Return Flights
                  ({returnResult.length})
                </p>
                {returnResult.length
                  ? returnResult.map((ele, i) => (
                      <Row className="rRows" key={i}>
                        <Col>
                          <Card>
                            <Card.Header>
                              <span style={{ float: "left" }}>
                                <img
                                  style={{ width: "30px", height: "30px" }}
                                  src={ele.logo}
                                />
                                &nbsp;{ele.Airline}
                              </span>
                              <span style={{ float: "right" }}>
                                ₹ {ele.Price}
                              </span>
                            </Card.Header>
                            <Card.Body>
                              <Card.Text>
                                <Row className="returnFlights">
                                  <Col className="cols">
                                    <ion-icon
                                      name="airplane"
                                      style={{
                                        color: "black",
                                        transform: "rotate(-90deg)",
                                        fontSize: "15px",
                                      }}
                                    ></ion-icon>
                                    &nbsp;
                                    {ele.Departure.location.split(" ")[0]}
                                    <br />
                                    <span className="time">
                                      ({ele.Departure.time})
                                    </span>
                                  </Col>
                                  <Col className="cols">
                                    <p className="duration">
                                      {(
                                        +ele.Arrival.time.split(":").join(".") -
                                        ele.Departure.time.split(":").join(".")
                                      ).toFixed(2) + "hr"}
                                    </p>
                                    <hr />
                                  </Col>
                                  <Col className="cols">
                                    <ion-icon
                                      name="location-outline"
                                      size="small"
                                    ></ion-icon>
                                    &nbsp;
                                    {ele.Arrival.location.split(" ")[0]} <br />
                                    <span className="time">
                                      ({ele.Arrival.time})
                                    </span>
                                  </Col>
                                </Row>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    ))
                  : "No return flights found"}
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
}

export default FlightResults
