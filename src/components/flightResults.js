import React,{useState} from 'react'
import {Row, Col, Modal, Button} from 'react-bootstrap'
import Search from './search';
const FlightResults = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="results">
        <Row>
          <Col sm={12} md={6} className="col1">
            <span className="fromHeader">
              <ion-icon
                name="airplane"
                style={{
                  color: "white",
                  transform: "rotate(-90deg)",
                  fontSize: "15px",
                }}
              ></ion-icon>
              &nbsp;&nbsp;Mumbai (BOM)
            </span>
            <span className="arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
            <span className="fromHeader">
              <ion-icon name="location-outline" size="small"></ion-icon>
              &nbsp;&nbsp;Hyderabad (HYD)
            </span>
          </Col>
          <Col sm={12} md={6} className="col2">
            <span className="fromHeader">
              <ion-icon name="calendar-outline" size="small"></ion-icon>
              &nbsp;&nbsp;Depart on Sat, 27 Feb
            </span>
            <span className="fromHeader">
              <ion-icon name="calendar-outline" size="small"></ion-icon>
              &nbsp;&nbsp;Return on Sat, 27 Feb
            </span>
            <span>
              <button
                type="submit"
                class="btn btn-warning btn-sm"
                onClick={handleShow}
              >
                <ion-icon name="pencil"></ion-icon>Edit
              </button>
            </span>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Search />
        </Modal>
      </div>
    );
}

export default FlightResults
