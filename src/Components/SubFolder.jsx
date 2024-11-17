import { useState } from "react";
import ArrowButton from "./ArrowButton";


function SubFolder() {

    var curtainClass = "curtain";

    return (
        <div className="sub-folder-container">

            <div className="curtain-container">
            <div className={curtainClass}></div>
            </div>
            <div className="sub-folder">
                <br />
                <div><p> row 1</p></div>
                <div><p> row 2</p></div>
                <div><p><ArrowButton></ArrowButton> Some of my projects</p></div>
            </div>
        </div>
    );
}

export default SubFolder;
