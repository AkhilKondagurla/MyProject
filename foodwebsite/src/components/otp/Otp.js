import React, { useRef, useState } from 'react';
import { Form, Modal } from "react-bootstrap";

const Otp = (props) => {
    const {
        show,
        setShow
    } = props
    const handleClose = () => {
        setShow(false)
    }
    const inputsRef = useRef([]);

    const handleInputChange = (event, index) => {
      const { value } = event.target;
      if (value.length === 1 && index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    };
    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && index > 0 && !inputsRef.current[index].value) {
          inputsRef.current[index - 1].focus();
        }
      };

    return (
        <div>
            <Modal size="md" id="md1" show={show} onHide={handleClose}>
                <Form>
                    <Modal.Body>
                        <div class="title">
                            Verify OTP
                        </div>
                        <form action="" class="mt-3 d-flex justify-content-center">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <input
                                    key={index}
                                    className="otp me-2"
                                    type="text"
                                    maxLength="1"
                                    onInput={(event) => handleInputChange(event, index)}
                                    onKeyDown={(event) => handleKeyDown(event, index)}
                                    ref={(el) => (inputsRef.current[index] = el)}
                                    
                                />
                            ))}
                        </form>
                        <div className='text-end'>
                            <button class='btn btn-primary btn-block mt-5 mb-2 customBtn'>Verify</button>
                        </div>
                    </Modal.Body>
                </Form>
            </Modal>
        </div>
    )
}

export default Otp