import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const DeleteModal = props => {

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app. <br />Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;