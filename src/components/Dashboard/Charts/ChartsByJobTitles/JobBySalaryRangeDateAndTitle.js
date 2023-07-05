import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../../../../config";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function JobBySalaryRangeDateAndTitle({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getSalaryRangeByDateAndTitle?jobTitle=${jobTitle}`
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
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="PostedDate" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="MinSalary"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="MaxSalary"
              fill="#82ca9d" // Different color for MaxSalary
              stroke="#82ca9d" // Different color for MaxSalary
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="flex justify-center text-[15px] text-gray-500">
          The graph shows the salary range for a specific job title over time.
          It uses an area chart with the x-axis representing posted dates and
          the y-axis representing salary. The chart displays two areas: one for
          minimum salary and another for maximum salary. It helps identify
          salary trends and variations for the job title.
        </p>
      </div>
    </>
  );
}
