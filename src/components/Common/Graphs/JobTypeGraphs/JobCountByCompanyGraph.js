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

function JobCountByCompanyGraph({ jobType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call to fetch job count by company for the searched job type
    fetch(
      `${BASEURL}/searchedjobs/getJobCountByCompanyOfJobType?jobType=${jobType}`
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
          <XAxis dataKey="Company_name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Job_Count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        The purpose of this graph is to visually compare the number of job
        listings for the searched job type across different companies. It helps
        identify which companies have a higher or lower number of job listings
        for the specified job type, allowing for easy comparison and analysis of
        the distribution of job opportunities among different companies.
      </p>
    </div>
  );
}

export default JobCountByCompanyGraph;
