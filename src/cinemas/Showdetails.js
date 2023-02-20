import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import CheckBox from "../CheckBox";
function Showdetails() {
  const MovieStoreData = useSelector((state) => state.MovieApp.value);
  const MovieDatas = JSON.parse(MovieStoreData);
  console.log(MovieDatas);
  const [modal, setModal] = useState(false);
  const SeatCount = 100;
  const toggle = () => setModal(!modal);
  let rows = [];
  const SelectedSeats = [];
  const handleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;

    if (checked) {
      if (!SelectedSeats.includes(e.target.value)) {
        SelectedSeats.push(e.target.value);
      }
    }

    if (!checked) {
      if (SelectedSeats.includes(e.target.value)) {
        SelectedSeats.pop(e.target.value);
      }
    }

    // if (checked) {
    //   if (!SelectedSeats.includes(e.target.value)) {
    //     SelectedSeats.push(e.target.value);
    //   } else {
    //     SelectedSeats.pop(e.target.value);
    //   }
    // }

    console.log(SelectedSeats);
  };
  for (let i = 1; i <= SeatCount; i++) {
    rows.push(<CheckBox id={i} handleChange={handleChange} />);
  }

  const ModalToggle = () => {
    alert(SelectedSeats);
    setModal(!modal);
  };
  return (
    <>
      <div className="">
        <div className=" position-relative">
          Welcome {MovieDatas.theatre_name}
        </div>
        <Row>
          <Col>
            <div>{MovieDatas.show1_movie}</div>
          </Col>
          <Col>
            <div>{MovieDatas.show1_time}</div>
          </Col>
          <Col>
            <div>{MovieDatas.show3_time}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>{MovieDatas.show2_movie}</div>
          </Col>
          <Col>
            <div>{MovieDatas.show2_time}</div>
          </Col>
          <Col>
            <div>{MovieDatas.show4_time}</div>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <div>{MovieDatas.show3_movie}</div>
          </Col>
          <Col>
            <div>{MovieDatas.show3_time}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>{MovieDatas.show4_movie}</div>
          </Col>
          <Col>
            <div>{MovieDatas.show4_time}</div>
          </Col>
        </Row> */}

        <button onClick={toggle}>Here you can book ticket</button>
        <Modal isOpen={modal} toggle={toggle} size={"lg"} centered>
          <ModalHeader toggle={toggle}>Grab your Tickets</ModalHeader>
          <ModalBody>
            <Row>{rows}</Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={ModalToggle}>
              Book Tickets
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
export default Showdetails;
