import { useState } from "react";
import { Row, Button, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FaTrash } from "react-icons/fa";
import useDeleteTask from "@/hooks/useDeleteTask";
import ToastMessage from "@/components/Toast/ToastMessage";

interface ModalDeleteProps {
  modalTaskId: string;
}

export default function ModalDelete({ modalTaskId }: ModalDeleteProps) {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [type, setType] = useState<boolean>(false);

  const { deleteTask, message } = useDeleteTask();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelet = () => {
    deleteTask(modalTaskId)
      .then(() => {
        setShow(false);
        setShowToast(true);
        setType(true);
      })
      .catch(() => {
        setShowToast(true);
        setType(false);
      })
      .finally(() =>
        setTimeout(() => {
          window.location.reload();
        }, 3000)
      );
  };

  const handleCloseToast = () => {
    setShow(false);
    window.location.reload();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Excluir <FaTrash />
      </Button>

      <Modal show={show} onHide={handleClose} className="p-5">
        <Modal.Header closeButton className="bg-dark px-5">
          <Modal.Title>Excluir tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark px-5">
          Deseja excluir esta tarefa?
          <Row className="g-0 mt-4 pb-3">
            <Col className="col-lg-3 col-6">
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
            </Col>
            <Col className="col-lg-3 col-6">
              <Button variant="danger" onClick={handleDelet}>
                Excluir
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <ToastMessage
        type={type}
        message={message}
        show={showToast}
        onClose={handleCloseToast}
      />
    </>
  );
}
