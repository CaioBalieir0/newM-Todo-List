import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormeEdit from "../Forms/FormEdit";
import { FaPencilAlt } from "react-icons/fa";

interface ModalEditProps {
  modalTaskId: string;
}

export default function ModalEdit({ modalTaskId }: ModalEditProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        Editar <FaPencilAlt />
      </Button>

      <Modal show={show} onHide={handleClose} className="p-5">
        <Modal.Header closeButton className="bg-dark px-5">
          <Modal.Title>Editar tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark px-5">
          <FormeEdit taskId={modalTaskId} />
        </Modal.Body>
      </Modal>
    </>
  );
}
