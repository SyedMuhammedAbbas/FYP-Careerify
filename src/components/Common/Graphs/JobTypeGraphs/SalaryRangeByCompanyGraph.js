import React, { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BASEURL } from "../../../../../config";

function SalaryRangeByCompanyGraph({ jobType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call to fetch salary range by company for the searched job type
    fetch(
      `${BASEURL}/searchedjobs/getSalaryRangeByCompanyOfJobType?jobType=${jobType}`
    )
      .then((response) => response.json())
      .then((results) => setData(results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart data={data}>
          <CartesianGrid />
          <XAxis type="number" dataKey="Min_salary" name="Salary Range" />
          <YAxis type="category" dataKey="Company_name" name="Company" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Job Listings" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        This graph provides a visual representation of the salary range of job
        listings for a specific job type against the corresponding company
        names. It allows users to compare the salary range offered by different
        companies for the searched job type, and it can help in identifying
        patterns or outliers in the salary distribution across companies.
      </p>
    </div>
  );
}

export default SalaryRangeByCompanyGraph;
