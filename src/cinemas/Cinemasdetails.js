import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Row } from "reactstrap";
import Listgrid from "./Listgrid";

function Cinemasdetails() {
  // const navigate = useNavigate();
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "post",
      url: "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails",
      data: {
        user_mail_id: "arunvicky1031@gmail.com",
      },
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(Data);
  return (
    <>
      <div className="mt-3">
        <Row>
          {Data.theatre &&
            Data.theatre.length > 0 &&
            Data.theatre.map((data, i) => <Listgrid Data={data} Key={i} />)}
        </Row>
        {/* <div className="main-content position-relative">sdsdsd</div>
        <button onClick={() => navigate("/blogs")}>HEllo</button> */}
      </div>
    </>
  );
}
export default Cinemasdetails;
