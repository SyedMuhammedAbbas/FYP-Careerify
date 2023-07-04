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

export default function DurationOfJobPostingsByTitle({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getDurationOfJobPostingsByTitle?jobTitle=${jobTitle}`
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
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Posted_month_year" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Duration"
              fill="#8884d8"
              stroke="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-[15px] text-gray-500">
          This graph shows the duration of job postings for the searched job
          title over time. The x-axis represents the month and year when the job
          was posted, while the y-axis represents the duration in days. The
          filled area represents the duration of job postings.
        </p>
      </div>
    </>
  );
}
