import React from 'react'
import FlightInfo from './flightInfo'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
const FlightResults = () => {
    return (
      <div className="results">
        <FlightInfo />
        <hr />
        <Container>
          <Row>
            <Col md={2} style={{ border: "1px solid white" }}>
              dc
            </Col>
            <Col className="dCol">
              <p style={{ color: "white" }}>
                <ion-icon name="arrow-up-outline"></ion-icon>Depart Flights (5)
              </p>
              <Row>
                <Col>
                  <Card>
                    <Card.Header>
                      <span style={{ float: "left" }}>Air Asia</span>
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
                            &nbsp;&nbsp; BOM <br />
                            <span className="time">(time)</span>
                          </Col>
                          <Col className="cols">
                            <p className="duration">1:00 hr</p>
                            <hr />
                          </Col>
                          <Col className="cols">
                            <ion-icon
                              name="location-outline"
                              size="small"
                            ></ion-icon>
                            &nbsp;&nbsp; HYD <br />
                            <span className="time">(time)</span>
                          </Col>
                        </Row>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            {/* <Col className="rCol">
              <p style={{ color: "white" }}>
                <ion-icon name="arrow-down-outline"></ion-icon>Return Flights (5)
              </p>
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Air Asia</Card.Header>
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
                            &nbsp;&nbsp; BOM <br />
                            <span className="time">(time)</span>
                          </Col>
                          <Col className="cols">
                            <p className="duration">1:00 hr</p>
                            <hr />
                          </Col>
                          <Col className="cols">
                            <ion-icon
                              name="location-outline"
                              size="small"
                            ></ion-icon>
                            &nbsp;&nbsp; HYD <br />
                            <span className="time">(time)</span>
                          </Col>
                        </Row>
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                </Col> 
              </Row>
            </Col>*/}
          </Row>
        </Container>
      </div>
    );
}

export default FlightResults
