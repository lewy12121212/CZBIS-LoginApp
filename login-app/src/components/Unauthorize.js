import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Unauthorize() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Błąd autoryzacji</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Wygląda na to, że podałeś nieprawidłowe dane logowania :(
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
