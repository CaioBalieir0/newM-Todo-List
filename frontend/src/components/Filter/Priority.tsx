import { Form } from "react-bootstrap";

interface FilterSelectProps {
  onFilterChange: (selected: string) => void;
}

export default function Priority({ onFilterChange }: FilterSelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Prioridade</Form.Label>
      <Form.Select onChange={handleChange}>
        <option value="Todas">Todas</option>
        <option value="Alta">Alta</option>
        <option value="Média">Média</option>
        <option value="Baixa">Baixa</option>
      </Form.Select>
    </Form.Group>
  );
}
