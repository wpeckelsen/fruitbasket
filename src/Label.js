import React from "react";

function Label({labelname, label, type, placeholder, labelValue, setLabelValue}) {
    return(
        <>
            <label htmlFor={labelname}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={labelname}
                value={labelValue}
                onChange={(e) => setLabelValue(e.target.value)}
            />
        </>
    )
}




export default Label;