import { useEffect, useState } from "react";
import SubFolder from "./SubFolder";
import ArrowButton from "./ArrowButton";

function Header() {

  const [clicked, setClicked] = useState(false);

  const text = "Johannes Randen";
  const greaterThan = ">";

  var subFolder = <></>;

  useEffect(() => {
    
    

  }, []);

  if (clicked) {
    subFolder = <SubFolder></SubFolder>;
  } else {
    subFolder = <></>;
  }


  return (
    <>
      <div className="greater-than-title">
        <ArrowButton clicked={clicked} setClicked={setClicked}></ArrowButton>
        <h1 className="title">{text}</h1>
      </div>
      {subFolder}
    </>
  );
}

export default Header;
