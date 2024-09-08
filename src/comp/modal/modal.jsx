import React from 'react'
import Button from 'react-bootstrap/Button';
import ModalBS from 'react-bootstrap/Modal';

const Modal = () => {
    return (
        <>
            <ModalBS
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalBS.Header closeButton>
                    <ModalBS.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </ModalBS.Title>
                </ModalBS.Header>
                <ModalBS.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </ModalBS.Body>
                <ModalBS.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </ModalBS.Footer>
            </ModalBS>
        </>
    )
}
export default Modal