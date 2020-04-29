import React from "react";


const validate = value => {
    if (value) return undefined;
    return "Field is required";
}

export default validate
