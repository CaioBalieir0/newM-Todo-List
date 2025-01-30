import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

interface SearchFilter {
  onClickButton: (selected: string) => void;
}

export default function Search({ onClickButton }: SearchFilter) {
  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = () => {
    onClickButton(searchText);
  };
  const handleClear = () => {
    setSearchText("");
    onClickButton("");
  };
  return (
    <>
      <Form.Label>Buscar tarefa</Form.Label>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Pesquisar por título da tarefa"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <Button variant="outline-warning" id="buscar" onClick={handleSearch}>
          Buscar
        </Button>
        <Button variant="outline-danger" id="limpar" onClick={handleClear}>
          Limpar
        </Button>
      </InputGroup>
    </>
  );
}
