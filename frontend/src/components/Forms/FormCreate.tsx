import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import useCreateTask from "@/hooks/useCreateTask";
import ToastMessage from "@/components/Toast/ToastMessage";

interface FormProps {
  statusBoard: string;
}

export default function FormCreate({ statusBoard }: FormProps) {
  const [validated, setValidated] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("Baixa");
  const [status, setStatus] = useState<string>(statusBoard || "Não Iniciada");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [type, setType] = useState<boolean>(false);

  const { createTask, loading, error, message } = useCreateTask();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      event.preventDefault();
      await createTask({ title, description, priority, status })
        .then(() => {
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
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
    window.location.reload();
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mt-2">
          <Form.Group as={Col} controlId="title">
            <Form.Label>
              Título da tarefa <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, adicione um título.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="my-4">
          <Form.Group as={Col} controlId="description">
            <Form.Label>Descrição da tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="my-4">
          <Form.Group as={Col}>
            <Form.Label>
              Prioridade <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              required
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Selecione uma prioridade.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>
              Status <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Não Iniciada">Não Iniciada</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Finalizada">Finalizada</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Selecione um status.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Criar Tarefa"}
        </Button>
      </Form>

      <ToastMessage
        type={type}
        message={message}
        show={showToast}
        onClose={handleCloseToast}
      />
    </>
  );
}
