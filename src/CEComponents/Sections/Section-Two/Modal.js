import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';

export function Example(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="modal-button">
        {props.mission}
      </Button>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            
            <Iframe url={props.url}
            width="700px"
            height="450px"
            id="myId"
            display="initial"
            position="relative"/>

        </Modal.Body>
      </Modal>
    </>
  );
}
