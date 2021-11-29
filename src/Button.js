import React from "react";

function Button({ type, title, resetCount}) {


    return (

        <>
            <button type={type} onClick={resetCount}>{title}</button>

        </>
    );
}

export default Button;
