import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Employee() {
  const [employee, setEmployee] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const foundEmployee = searchParams.get("employee");
  console.log(foundEmployee);

  return (
    <div>
      <input
        onChange={(e) => setEmployee(e.target.value)}
        type="text"
        placeholder="Mời tìm kiếm"
      />
      <button onClick={() => setSearchParams({ employee })}>Search</button>
    </div>
  );
}
