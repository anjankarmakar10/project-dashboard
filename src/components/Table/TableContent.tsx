"use client";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Container from "../Container/Container";
import FormHeader from "../FormHeader/FormHeader";
import Button from "../Buttons/Button";
import Pagination from "../Pagination/Pagination";
import Table from "./Table";

const TableContent = () => {
  const [page, setPage] = useState(1);

  return (
    <Container>
      <FormHeader
        title="Form title"
        subtitle="Form title Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim."
      />
      <div className="py-5">
        <Alert variant="danger">
          Senectus malesuada suspendisse bibendum elit amet vitae.
        </Alert>
      </div>
      <div className="rounded-md overflow-auto border border-neutral-300">
        <Table />
      </div>
      <Pagination page={page} setPage={setPage} />
    </Container>
  );
};
export default TableContent;
