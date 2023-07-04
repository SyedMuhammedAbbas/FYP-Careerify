import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../../../../config";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function JobByAverageSalary({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getAverageSalary?jobTitle=${jobTitle}`
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
          <ScatterChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="Company_name" />
            <YAxis dataKey="AverageSalary" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Average Salary" data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <p className="text-[15px] text-gray-500">
          This scatter plot represents the average salary for different
          companies offering jobs related to the searched job title.
        </p>
      </div>
    </>
  );
}
