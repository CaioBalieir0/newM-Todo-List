import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormCreate from "../Forms/FormCreate";

interface ModalProps {
  status: string;
}

export default function ModalCreate({ status }: ModalProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Adicionar
      </Button>

      <Modal show={show} onHide={handleClose} className="p-5">
        <Modal.Header closeButton className="bg-dark px-5">
          <Modal.Title>Adicionar nova tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark px-5">
          <FormCreate statusBoard={status} />
        </Modal.Body>
      </Modal>
    </>
  );
}
