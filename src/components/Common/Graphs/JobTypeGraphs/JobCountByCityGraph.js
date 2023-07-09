import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BASEURL } from "../../../../../config";

function JobCountByCityGraph({ jobType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call to fetch job count by city for the searched job type
    fetch(
      `${BASEURL}/searchedjobs/getJobCountByCityOfJobType?jobType=${jobType}`
    )
      .then((response) => response.json())
      .then((results) => setData(results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="City" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Job_Count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        Visual representation of the count of job listings for a specific job
        type, grouped by city. It allows users to compare and analyze the number
        of job listings in different cities for the searched job type.
      </p>
    </div>
  );
}

export default JobCountByCityGraph;
