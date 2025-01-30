import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import useTaskUpdate from "@/hooks/useEditTask";
import axios from "axios";
import ToastMessage from "@/components/Toast/ToastMessage";

interface FormEditProps {
  taskId: string;
}

export default function FormEdit({ taskId }: FormEditProps) {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Baixa");
  const [status, setStatus] = useState("Não Iniciada");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [type, setType] = useState<boolean>(false);

  const { updateTask, loading, error, success, message } =
    useTaskUpdate(taskId);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/${taskId}`
        );
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPriority(response.data.priority);
        setStatus(response.data.status);
      } catch (err) {
        console.error("Erro ao carregar tarefa:", err);
      }
    };

    if (taskId) {
      fetchTask();
    }
  }, [taskId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      updateTask({ title, description, priority, status })
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
          {loading ? "Atualizando..." : "Atualizar Tarefa"}
        </Button>

        {success && (
          <div className="mt-3 text-success">
            Tarefa atualizada com sucesso!
          </div>
        )}
        {error && <div className="mt-3 text-danger">{error}</div>}
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
