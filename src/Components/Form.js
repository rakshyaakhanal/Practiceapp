import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    function submitForm() {
        setIsSubmit(true);
    }

    return (
        <>
            <div className="form-conatiner">
                <span className="close-btn">X</span>
                <div className="form-content-left">
                    <img src="img/img-2.svg" alt="spaceship" className="form-img" />
                </div>

                {/* <FormSignup /> */}
                {!isSubmit ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
            </div>
        </>
    )
}

export default Form;
