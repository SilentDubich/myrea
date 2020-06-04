import React from "react";

export type validatorType = (value: string) => string | undefined

const validate: validatorType = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export default validate
