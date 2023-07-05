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
  ResponsiveContainer,
} from "recharts";

export default function JobOpeningsByDateAndTitle({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getJobOpeningsByDateAndTitle?jobTitle=${jobTitle}`
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
            <XAxis dataKey="PostedDate" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="JobOpenings" fill="#31bd89" />
          </BarChart>
        </ResponsiveContainer>
        <p className="flex justify-center text-[15px] text-gray-500">
          The graph represents the job openings count over time for a specific
          job title. It utilizes a bar chart to visualize the data. The x-axis
          represents the posted dates of the job openings, while the y-axis
          represents the number of job openings. Each bar in the chart
          corresponds to the job openings count on a specific date. By observing
          the graph, users can analyze the fluctuation and trends in job
          openings for the given job title over time, helping them gain insights
          into the demand and availability of jobs in the specified industry.
        </p>
      </div>
    </>
  );
}
