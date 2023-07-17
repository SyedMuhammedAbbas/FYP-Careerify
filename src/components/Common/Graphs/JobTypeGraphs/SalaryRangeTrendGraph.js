import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BASEURL } from "../../../../../config";

function SalaryRangeTrendGraph({ jobType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call to fetch salary range trend for the searched job type
    fetch(
      `${BASEURL}/searchedjobs/getSalaryRangeTrendOfJobType?jobType=${jobType}`
    )
      .then((response) => response.json())
      .then((results) => {
        // Format the Posted_date to remove the time component
        const formattedResults = results.map((result) => ({
          ...result,
          Posted_date: result.Posted_date.split("T")[0],
        }));
        setData(formattedResults);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Posted_date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Min_Salary" stroke="#8884d8" />
          <Line type="monotone" dataKey="Max_Salary" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        This graph provides a visual representation of the trend of salary range
        over time for a specific job type. It allows users to observe and
        analyze the fluctuations and changes in the salary range for the
        searched job type.
      </p>
    </div>
  );
}

export default SalaryRangeTrendGraph;
