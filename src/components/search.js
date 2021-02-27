import React,{useState} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import flight from '../images/from.png'
import location from '../images/location.png'
import calender from '../images/calender.png'
import adults from '../images/adults.png'
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
const Search = () => {
     const [date, setDate] = useState();
     const [returnDate,setReturnDate]=useState();
     const [twoWay,setWay]=useState(false)
    return (
      <Container className="formCont">
        <Row>
          <Col xs={12} style={{ textAlign: "center",margin:'0% 0% 3% 0%'}}>
            <button
              type="button"
              class={!twoWay ? "btn btn-primary " : "btn btn-outline-primary"}
              style={{ width: "100px", marginRight: "2em" }}
              onClick={() => setWay(false)}
            >
              One-Way
            </button>
            <button
              type="button"
              class={twoWay ? "btn btn-primary " : "btn btn-outline-primary"}
              style={{ width: "100px" }}
              onClick={() => setWay(true)}
            >
              Round Trip
            </button>
          </Col>
        </Row>
        
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <form className="form">
              <Row>
                <Col xs={12} md={6}>
                  <div class="form-group">
                    <input
                      list="flights"
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Flying From"
                      style={{
                        background: `url(${flight}) no-repeat `,
                        backgroundSize: "30px 30px",
                        paddingLeft: "70px",
                        height: "50px",
                        backgroundPosition: "5% 50%",
                      }}
                      required
                    />
                    <datalist id="flights">
                      <option value="Bangalore" />
                      <option value="Chennai" />
                      <option value="Delhi" />
                      <option value="Mumbai" />
                      <option value="Hyderabad" />
                      <option value="Kochi" />
                      <option value="Goa" />
                    </datalist>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div class="form-group">
                    <input
                      list="flights"
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Flying To"
                      style={{
                        background: `url(${location}) no-repeat `,
                        backgroundSize: "25px 25px",
                        paddingLeft: "70px",
                        height: "50px",
                        backgroundPosition: "5% 50%",
                      }}
                      required
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} >
                  <DatePicker date={date} onDateChange={setDate} locale={enGB}>
                    {({ inputProps, focused }) => (
                      <input
                        className={"input" + (focused ? " -focused" : "")}
                        {...inputProps}
                        style={{
                          background: `url(${calender}) no-repeat `,
                          backgroundSize: "25px 25px",
                          paddingLeft: "70px",
                          height: "50px",
                          backgroundPosition: "5% 50%",
                          width: "100%",
                          border: "1px solid rgba(220, 220, 220, 0.801)",
                        }}
                        placeholder="Depart Date"
                      />
                    )}
                  </DatePicker>
                </Col>
                <Col xs={12} md={6}>
                  {twoWay ? (
                    <DatePicker
                      date={returnDate}
                      onDateChange={setReturnDate}
                      locale={enGB}
                    >
                      {({ inputProps, focused }) => (
                        <input
                          className={"input" + (focused ? " -focused" : "")}
                          {...inputProps}
                          style={{
                            background: `url(${calender}) no-repeat `,
                            backgroundSize: "25px 25px",
                            paddingLeft: "70px",
                            height: "50px",
                            backgroundPosition: "5% 50%",
                            width: "100%",
                            border: "1px solid rgba(220, 220, 220, 0.801)",
                          }}
                          placeholder="Return Date"
                        />
                      )}
                    </DatePicker>
                  ) : null}
                </Col>
              </Row>
              <Row style={{ marginTop: "17px" }}>
                <Col xs={12} md={6}>
                  <div class="form-group">
                    <select
                      multiple=""
                      class="form-control"
                      id="exampleSelect2"
                      style={{
                        background: `url(${adults}) no-repeat `,
                        backgroundSize: "25px 25px",
                        paddingLeft: "70px",
                        height: "50px",
                        backgroundPosition: "5% 50%",
                        webkitAppearance: "none",
                        appearance: "none",
                      }}
                    >
                      <option>1 Passenger</option>
                      <option>2 Passengers</option>
                      <option>3 Passengers</option>
                      <option>4 Passengers</option>
                      <option>5 Passengers</option>
                    </select>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <button
                    type="submit"
                    class="btn btn-warning btn-lg btn-block"
                  >
                    Search Flights
                  </button>
                </Col>
                <Col md={3}></Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    );
}

export default Search
