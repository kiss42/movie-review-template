import "./Option.css";
import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { TextField } from "@material-ui/core";

export default function TextInput(props) {
  const [textValue, setTextValue] = React.useState("");
  const windowWidth = useWindowWidth();

  const updateText = (event) => {
    setTextValue(event.target.value);
    sessionStorage.setItem(props.title, event.target.value);
  };

  return (
    <div className="radio-container" style={{ width: windowWidth < 1000 ? "90%" : "40%" }}>
      <h3 className="snug">{props.title}</h3>
      <TextField value={textValue} onChange={updateText} />
    </div>
  );
}
