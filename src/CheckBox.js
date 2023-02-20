import React from "react";
import { Col } from "reactstrap";

const CheckBox = (props) => {
  console.log(props);
  return (
    <div style={{ height: "40px", width: "40px" }} className="me-2">
      <input
        type="checkbox"
        id={props.id}
        name="cc"
        onChange={props.handleChange}
        value={props.id}
      />
      <label htmlFor={props.id}>
        <span className="px-2 py-1">{props.id}</span>
      </label>
    </div>
  );
};

export default CheckBox;
