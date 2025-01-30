"use client";
import { Row, Col } from "react-bootstrap";
import Filter from "@/components/Filter/Filter";
import Board from "@/components/Board/Board";
import { useState } from "react";

export default function HomePage() {
  const [filters, setFilters] = useState({ priority: "Todas", title: "" });

  const handleFiltersChange = (newFilters: {
    priority: string;
    title: string;
  }) => {
    setFilters(newFilters);
  };

  console.log(filters);
  return (
    <>
      <Filter onFiltersChange={handleFiltersChange} />
      <Row className="justify-content-evenly mt-5 ms-lg-0 ms-2">
        <Col style={{ padding: "0" }} className="mb-4" lg={3} xs={12}>
          <Board
            titulo="Não Iniciadas"
            status="Não Iniciada"
            filters={filters}
          />
        </Col>
        <Col style={{ padding: "0" }} className="mb-4" lg={3} xs={12}>
          <Board
            titulo="Em Andamento"
            status="Em Andamento"
            filters={filters}
          />
        </Col>
        <Col style={{ padding: "0" }} className="" lg={3} xs={12}>
          <Board titulo="Finalizadas" status="Finalizada" filters={filters} />
        </Col>
      </Row>
    </>
  );
}
