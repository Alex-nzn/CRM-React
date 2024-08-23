import { useEffect, useState } from "react";
import TableList from "./TableList";
import useFetch from "./useFetch";

const TableHome = () => {
  const { data, error } = useFetch("http://localhost:8000/users");

  return (
    <div className="tableHome">
      {error && <div>{error}</div>}
      {data && <TableList users={data} />}
      <h2>TableHome</h2>
    </div>
  );
};

export default TableHome;
