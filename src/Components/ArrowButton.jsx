import { useState } from "react";


function ArrowButton({clicked, setClicked}) {

    const [arrowClass, setArrowClass] = useState("greater-than blink");

    const greaterThan = ">";

    function handleClick() {
        
        if (!clicked) {
            setArrowClass("greater-than blink clicked");
        } else {
            setArrowClass("greater-than blink");
        }
        setClicked(!clicked);
    }

    return (
        <>
            <button onClick={() => handleClick()} className={arrowClass}>{greaterThan}</button>
        </>
    );
}

export default ArrowButton;
