import React, { useState,useEffect } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Search from "./search";
const FlightInfo = ({data}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [res,setRes]=useState(data)
  useEffect(()=>{
       setRes(data);
       console.log(res)
  },[data,show])
  return (
    <div>
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
            &nbsp;&nbsp;{res.from}
          </span>
          <span className="arrow">
            {res.return == "Invalid Date" ? (
              <ion-icon name="arrow-forward-outline"></ion-icon>
            ) : (
              <ion-icon name="swap-horizontal-outline"></ion-icon>
            )}
          </span>
          <span className="fromHeader">
            <ion-icon name="location-outline" size="small"></ion-icon>
            &nbsp;&nbsp;{res.to}
          </span>
        </Col>
        <Col sm={12} md={6} className="col2">
          <span className="fromHeader">
            <ion-icon name="calendar-outline" size="small"></ion-icon>
            &nbsp;&nbsp;
            {new Date(res.departure)
              .toString()
              .split(" ")
              .slice(0, 4)
              .join(" ")}
          </span>
          {res.return == "Invalid Date" ? null : (
            <span className="fromHeader">
              <ion-icon name="calendar-outline" size="small"></ion-icon>
              &nbsp;&nbsp;
              {new Date(res.return).toString().split(" ").slice(0, 4).join(" ")}
            </span>
          )}
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
        <Search show={setShow} />
      </Modal>
    </div>
  );
};

export default FlightInfo;
