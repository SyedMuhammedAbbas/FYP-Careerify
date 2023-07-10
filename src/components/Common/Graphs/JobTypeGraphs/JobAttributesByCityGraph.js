import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BASEURL } from "../../../../../config";

function JobAttributesByCityGraph({ jobType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call to fetch job attributes by city for the searched job type
    fetch(
      `${BASEURL}/searchedjobs/getJobAttributesByCityOfJobType?jobType=${jobType}`
    )
      .then((response) => response.json())
      .then((results) => setData(results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="City" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Average_salary"
            stroke="#8884d8"
            name="Average Salary"
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        This graph provides a visual representation of the average salary for
        the searched job type across different cities. It allows users to
        compare the average salary among different cities and observe how they
        vary for the specified job type. The line chart helps identify trends
        and patterns in the average salary over the cities.
      </p>
    </div>
  );
}

export default JobAttributesByCityGraph;
