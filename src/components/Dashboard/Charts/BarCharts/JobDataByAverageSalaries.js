import React, { useState, useEffect, useCallback } from "react";
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
import axios from "axios";
import { BASEURL } from "../../../../../config";

const JobDataByAverageSalaries = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASEURL}/bar/getAverageSalaries`);
      const apiData = response.data;

      setData(apiData);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  console.log(data);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Job_titles" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Average_salary" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <p className="flex justify-center text-[15px] text-gray-500">
          The graph represents the average salaries for different job titles.
          Each job title is shown on the X-axis, and the corresponding average
          salary is displayed on the Y-axis. The height of each bar indicates
          the average salary for a specific job title.
        </p>
      </div>
    </>
  );
};

export default JobDataByAverageSalaries;
