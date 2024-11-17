import { useEffect, useState } from "react";
import SubFolder from "./SubFolder";
import ArrowButton from "./ArrowButton";

function Header() {

  const [clicked, setClicked] = useState(false);

  const text = "Johannes Randen";
  const greaterThan = ">";

  var subFolder = <></>;

  useEffect(() => {

    const subFolderCurtain = document.getElementsByClassName("curtain");
    
    if (subFolderCurtain[0]) {
        if (clicked) {
        subFolderCurtain[0].classList.add("show-curtain");
      } else {
        subFolderCurtain[0].classList.remove("show-curtain");
      }
    }

  }, [clicked]);



  return (
    <>
      <div className="greater-than-title">
        <ArrowButton clicked={clicked} setClicked={setClicked}></ArrowButton>
        <h1 className="title">{text}</h1>
      </div>
      <SubFolder></SubFolder>
    </>
  );
}

export default Header;
