import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "date-fns";

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
import { UpdateSeat } from "../store/reducers";

function Showdetails() {
  const dispatch = useDispatch();

  // Store Variables
  const MovieStoreData = useSelector((state) => state.MovieApp.value);
  const SeatCountData = useSelector((state) => state.MovieApp.SeatValue);
  const EmailId = useSelector((state) => state.MovieApp.EmailId);
  const MovieDatas =
    MovieStoreData.length !== 0 ? JSON.parse(MovieStoreData) : [];

  // Modal Variables
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  // Booking variables
  const [MovieName, setMovieName] = useState();
  const [MovieTime, setMovieTime] = useState();
  const SeatCount = 100;
  let Seatrows = [];
  let SelectedShowText = [];
  const SelectedSeats = [];

  // Booking Seats (Checkbox)
  const handleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;

    if (checked) {
      if (!SelectedSeats.includes(e.target.value)) {
        SelectedSeats.push(parseInt(e.target.value));
      }
    }

    if (!checked) {
      if (SelectedSeats.includes(e.target.value)) {
        SelectedSeats.pop(e.target.value);
      }
    }
  };

  // Binding components value for Seatrows,Booked SeatRows
  for (let i = 1; i <= SeatCount; i++) {
    Seatrows.push(<CheckBox id={i} handleChange={handleChange} />);
  }

  if (SeatCountData.length > 0) {
    for (let i = 0; i <= SeatCountData.length; i++) {
      console.log(SeatCountData);
      SelectedShowText.push(<div id={i}>{SeatCountData[i]}</div>);
      console.log(SelectedShowText);
    }
  } else {
    SelectedShowText.push(<div>Please select atleast 1 tickets</div>);
  }

  //Modal Toggle Function
  const toggle = (movieName, MovieTime) => {
    setMovieName(movieName);
    setMovieTime(MovieTime);
    setModal(!modal);
  };

  const toggleNested = () => {
    dispatch(UpdateSeat(SelectedSeats)); //Update store Data

    //PAssing data to DB
    axios({
      method: "post",
      url: "https://zincubate.in/api/MovieTicketChecker?action=bookSeats",
      data: {
        show_time: MovieTime,
        movie_name: MovieName,
        theatre_name: MovieDatas.theatre_name,
        booked_seats: SelectedSeats,
        date: format(new Date(), "dd/MM/yyyy"),
        user_mail_id: EmailId,
      },
    });
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <>
      <div className="ShowListDiv">
        {MovieStoreData.length !== 0 ? (
          <div className="ms-5">
            <div className=" position-relative d-flex justify-content-start my-4  text-start">
              <span className="fs-3 fw-bold cinema-text  ">
                {MovieDatas.theatre_name}
              </span>
            </div>
            <Row className="text-white">
              <Col sm={2} className="text-start">
                <div className="fw-bold fs-5 text-red">Movie List</div>
              </Col>
              <Col sm={2}>
                <div className="fw-bold fs-5 text-blue">Timings</div>
              </Col>
              <Col sm={2}>
                <div></div>
              </Col>
            </Row>
            <Row className="my-3 text-white">
              <Col sm={2} className="text-start">
                <div className="fw-bold fs-5 pt-2">
                  {MovieDatas.show1_movie}
                </div>
              </Col>
              <Col sm={1}>
                <div
                  className="border rounded p-2 cursor-pointer  fw-bold"
                  onClick={() => {
                    toggle(MovieDatas.show1_movie, MovieDatas.show1_time);
                  }}
                >
                  {MovieDatas.show1_time}
                </div>
              </Col>
              <Col sm={1}>
                <div
                  className="border rounded p-2 cursor-pointer  fw-bold"
                  onClick={() => {
                    toggle(MovieDatas.show3_movie, MovieDatas.show3_time);
                  }}
                >
                  {MovieDatas.show3_time}
                </div>
              </Col>
            </Row>
            <Row className="my-3 text-white">
              <Col sm={2}>
                <div className="fw-bold fs-5 pt-2 text-start">
                  {MovieDatas.show2_movie}
                </div>
              </Col>
              <Col sm={1}>
                <div
                  className="border rounded p-2 cursor-pointer  fw-bold"
                  onClick={() => {
                    toggle(MovieDatas.show2_movie, MovieDatas.show2_time);
                  }}
                >
                  {MovieDatas.show2_time}
                </div>
              </Col>
              <Col sm={1}>
                <div
                  className="border rounded p-2 cursor-pointer  fw-bold"
                  onClick={() => {
                    toggle(MovieDatas.show4_movie, MovieDatas.show4_time);
                  }}
                >
                  {MovieDatas.show4_time}
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="text-white mt-5 fs-4">
            Please go to{" "}
            <Link to="/" className="text-orange">
              Home
            </Link>{" "}
            and choose atleast one cinemas
          </div>
        )}

        <div>
          <Modal isOpen={modal} toggle={toggle} centered>
            <ModalHeader toggle={toggle}>Grab your tickets</ModalHeader>
            <ModalBody>
              <Row>{Seatrows}</Row>
              <br />
              <Button color="success" className="me-3" onClick={toggleNested}>
                Book Tickets
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
              <Modal
                isOpen={nestedModal}
                toggle={toggleNested}
                onClosed={closeAll ? toggle : undefined}
                centered
              >
                <ModalBody>
                  {SeatCountData.length !== 0 ? (
                    <div>
                      <div>
                        Your tickets are booked successfully, seat numbers are :
                      </div>
                      <Row>{SelectedShowText}</Row>
                    </div>
                  ) : (
                    "please select atleast on ticket"
                  )}
                </ModalBody>
                <ModalFooter>
                  {/* <Button color="primary" onClick={toggleNested}>
                    Book Again
                  </Button>{" "} */}
                  <Button color="secondary" onClick={toggleAll}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </>
  );
}
export default Showdetails;
