import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../../../../config";
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

export default function JobCountByCity({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/JobCountByCity?jobTitle=${jobTitle}`
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
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="City" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="JobCount" fill="#d4543d" />
          </BarChart>
        </ResponsiveContainer>
        <p className="flex justify-center text-[15px] text-gray-500">
          The graph illustrates the job count for a specific job title across
          different cities. It utilizes a bar chart where the x-axis represents
          the cities and the y-axis represents the job count. Each bar
          represents the number of jobs in a particular city. The graph helps
          visualize the distribution of job opportunities in different locations
          for the given job title.
        </p>
      </div>
    </>
  );
}
