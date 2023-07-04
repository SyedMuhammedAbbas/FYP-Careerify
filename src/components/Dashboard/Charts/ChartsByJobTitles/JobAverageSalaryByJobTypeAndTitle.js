import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../../../../config";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function JobAverageSalaryByJobTypeAndTitle({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getAverageSalaryByJobTypeAndTitle?jobTitle=${jobTitle}`
        );
        const apiData = response.data;

        setData(apiData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [jobTitle]);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Job_type" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="AverageSalary" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-[15px] text-gray-500">
          This graph represents the average salary for different job types
          related to the searched job title.
        </p>
      </div>
    </>
  );
}
