import React,{useState,useEffect,useContext,useLocation} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import flight from '../images/from.png'
import location from '../images/location.png'
import calender from '../images/calender.png'
import adults from '../images/adults.png'
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { submitData } from "../App";
const Search = (props) => {
     const [date, setDate] = useState();
     const [returnDate,setReturnDate]=useState();
     const [twoWay,setWay]=useState(false);
     const [redirect,setRedirect]=useState(false)
     const [userData, setUserData] = useState({
       from: "",
       to: "",
       return:returnDate,
       departure: new Date(date),
       total: 1,
     });
    const submit = useContext(submitData); 
   const onChange=(e)=>{
     setRedirect(false)
           setUserData({...userData,[e.target.id]:e.target.value})
   } 

   const onSubmit=(e)=>{
     e.preventDefault();
     
     submit(userData);
     setRedirect(true)
      if(props.show){
        props.show(false)
      }
   }
   useEffect(()=>{

       setUserData({
         ...userData,
         ["departure"]: new Date(date),
         ["return"]: new Date(returnDate),
       });
   },[date,returnDate])
    return (
      <Container className="formCont">
      {redirect && <Redirect  to={'/flights'}/>}
        <Row>
          <Col xs={12} style={{ textAlign: "center", margin: "0% 0% 3% 0%" }}>
            <button
              type="button"
              class={!twoWay ? "btn btn-primary " : "btn btn-outline-primary"}
              style={{ width: "100px", marginRight: "2rem" }}
              onClick={() => {setWay(false);
              setReturnDate();}}
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
            <form className="form" onSubmit={onSubmit}>
              <Row>
                <Col xs={12} md={6}>
                  <div class="form-group">
                    <input
                      list="flights"
                      type="text"
                      class="form-control"
                      id="from"
                      aria-describedby="emailHelp"
                      placeholder="Flying From"
                      value={userData.from}
                      style={{
                        background: `url(${flight}) no-repeat `,
                        backgroundSize: "30px 30px",
                        paddingLeft: "70px",
                        height: "50px",
                        backgroundPosition: "5% 50%",
                      }}
                      onChange={onChange}
                      required
                    />
                    <datalist id="flights">
                      <option value="BLR Bangalore"/>
                      <option value="MAA Chennai" />
                      <option value="DEL Delhi" />
                      <option value="BOM Mumbai" />
                      <option value="HYD Hyderabad" />
                      <option value="COK Kochi" />
                      <option value="GOI Goa" />
                    </datalist>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div class="form-group">
                    <input
                      list="flights"
                      type="text"
                      class="form-control"
                      id="to"
                      aria-describedby="emailHelp"
                      placeholder="Flying To"
                      value={userData.to}
                      style={{
                        background: `url(${location}) no-repeat `,
                        backgroundSize: "25px 25px",
                        paddingLeft: "70px",
                        height: "50px",
                        backgroundPosition: "5% 50%",
                      }}
                      onChange={onChange}
                      required
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
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
                      id="total"
                      style={{
                        background: `url(${adults}) no-repeat `,
                        backgroundSize: "25px 25px",
                        paddingLeft: "70px",
                        height: "50px",
                        backgroundPosition: "5% 50%",
                        webkitAppearance: "none",
                        appearance: "none",
                      }}
                      onChange={onChange}
                    >
                      <option value='1'>1 Passenger</option>
                      <option value='2'>2 Passengers</option>
                      <option value='3'>3 Passengers</option>
                      <option value='4'>4 Passengers</option>
                      <option value='5'>5 Passengers</option>
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
