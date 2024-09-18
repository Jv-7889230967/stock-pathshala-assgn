import { useState } from "react";
import CircleLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
  export const Loader = ({loading}) => {
    let [color, setColor] = useState("#ffffff");
    return (
        <CircleLoader   
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
  }
  