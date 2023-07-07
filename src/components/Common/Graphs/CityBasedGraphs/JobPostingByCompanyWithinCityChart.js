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

const JobPostingByCompanyWithinCityChart = ({ city }) => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    // Make API call to fetch job count data
    // Replace 'your_api_endpoint' with the actual endpoint for 'jobPostingByCompanyWithinCity'
    fetch(`${BASEURL}/searchedjobs/jobPostingByCompanyWithinCity?city=${city}`)
      .then((response) => response.json())
      .then((data) => setJobData(data))
      .catch((error) => console.error(error));
  }, [city]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={jobData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Company_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="JobCount"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        The line chart visualizes the number of job postings contributed by each
        company within the specified city. It allows us to analyze the trends
        and fluctuations in job availability across different companies over
        time.
      </p>
    </div>
  );
};

export default JobPostingByCompanyWithinCityChart;
