import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "reactstrap";
import Listgrid from "./Listgrid";

import { useSelector } from "react-redux";

function Cinemasdetails() {
  const [Data, setData] = useState([]); //Set Movie Data

  const EmailId = useSelector((state) => state.MovieApp.EmailId);

  // Fetching data
  useEffect(() => {
    axios({
      method: "post",
      url: "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails",
      data: {
        user_mail_id: EmailId,
      },
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="mt-3">
        <Row>
          {Data.theatre &&
            Data.theatre.length > 0 &&
            Data.theatre.map((data, i) => <Listgrid Data={data} Key={i} />)}
        </Row>
      </div>
    </>
  );
}
export default Cinemasdetails;
