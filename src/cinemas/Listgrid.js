import React from "react";
import { Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ShowDetails } from "../store/reducers";

const Listgrid = (props) => {
  const { Data, key } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const NavigateMovieList = (Data) => {
    const MovieListData = JSON.stringify(Data);
    dispatch(ShowDetails(MovieListData));
    navigate("/MovieList");
    console.log(Data);
  };
  return (
    <>
      <Card
        key={key}
        className="mx-4 my-5 cursor-pointer"
        style={{ width: "18rem" }}
        onClick={() => {
          NavigateMovieList(Data);
        }}
      >
        {/* <img alt="Sample" src={Data.thumbnail_url} /> */}
        <CardBody>
          <div className="mb-3 fs-5 fw-bold">{Data.theatre_name}</div>
          <div className="mb-3">{Data.address}</div>
          <a href={Data.website}>{Data.website}</a>
        </CardBody>
      </Card>
    </>
  );
};
export default Listgrid;
