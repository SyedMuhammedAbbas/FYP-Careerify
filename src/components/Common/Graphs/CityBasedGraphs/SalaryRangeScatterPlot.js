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

const SalaryRangeScatterPlot = ({ city }) => {
  const [salaryData, setSalaryData] = useState([]);

  useEffect(() => {
    // Make API call to fetch salary range data
    // Replace 'your_api_endpoint' with the actual endpoint for 'getSalaryRangeByCity'
    fetch(`${BASEURL}/searchedjobs/getSalaryRangeByCity?city=${city}`)
      .then((response) => response.json())
      .then((data) => setSalaryData(data))
      .catch((error) => console.error(error));
  }, [city]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="Min_salary" name="Minimum Salary" />
          <YAxis type="number" dataKey="Max_salary" name="Maximum Salary" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={salaryData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        The scatter plot represents the relationship between the minimum and
        maximum salary ranges offered by companies within a specific city. It
        allows us to visualize the salary distribution and identify potential
        patterns or trends.
      </p>
    </div>
  );
};

export default SalaryRangeScatterPlot;
