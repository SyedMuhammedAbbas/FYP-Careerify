import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BASEURL } from "../../../../../config";

const JobPostingsComparisonChart = ({ city }) => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    // Make API call to fetch job count data
    // Replace 'your_api_endpoint' with the actual endpoint for 'jobPostingsComparison'
    fetch(`${BASEURL}/searchedjobs/jobPostingsComparison?city=${city}`)
      .then((response) => response.json())
      .then((data) => setJobData(data))
      .catch((error) => console.error(error));
  }, [city]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={jobData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Company_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="JobCount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        The bar chart visually compares the number of job postings offered by
        different companies within the specified city. It helps us understand
        the distribution of job postings and identify companies that have a
        significant presence in the job market.
      </p>
    </div>
  );
};

export default JobPostingsComparisonChart;
