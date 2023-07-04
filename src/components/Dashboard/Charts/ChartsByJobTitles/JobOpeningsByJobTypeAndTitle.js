import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../../../../config";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function JobOpeningsByJobTypeAndTitle({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getJobOpeningsByJobTypeAndTitle?jobTitle=${jobTitle}`
        );
        const apiData = response.data;

        setData(apiData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [jobTitle]);

  // Define an array of colors
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#b4e7f9",
    "#ffc0cb",
    "#f8e71c",
    "#d63031",
  ];

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            {/* <Pie data={data} dataKey="JobCount" nameKey="Job_type" fill={colors} /> */}
            <Pie
              data={data}
              dataKey="JobCount"
              nameKey="Job_type"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <p className="text-[15px] text-gray-500">
          The purpose of this visualization is to provide insights into the
          average salary trends for different companies over multiple years.
        </p>
      </div>
    </>
  );
}
