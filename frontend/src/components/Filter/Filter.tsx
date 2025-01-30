"use client";
import { Row, Col } from "react-bootstrap";
import Priority from "./Priority";
import Search from "./Search";
import { useState } from "react";

interface FilterProps {
  onFiltersChange: (filters: Filters) => void;
}

interface Filters {
  priority: string;
  title: string;
}

export default function Filter({ onFiltersChange }: FilterProps) {
  const [selectedPriority, setSelectedPriority] = useState<string>("Todas");
  const [title, setTitle] = useState<string>("");

  const handlePriority = (selected: string) => {
    setSelectedPriority(selected);
    onFiltersChange({ priority: selected, title });
  };

  const handleSearch = (selected: string) => {
    setTitle(selected);
    onFiltersChange({ priority: selectedPriority, title: selected });
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col lg="4">
          <Search onClickButton={handleSearch} />
        </Col>
        <Col lg="4" className="mt-lg-0 mt-3">
          <Priority onFilterChange={handlePriority} />
        </Col>
      </Row>
    </>
  );
}
