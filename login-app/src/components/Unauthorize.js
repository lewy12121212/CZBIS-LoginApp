import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal } from "react-bootstrap";

export default function Unauthorize(props) {

  const handleClose = () => {
    props.setShowModal(false)
  }

  return (
    <Modal show={props.showModal} onHide={handleClose}>
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
