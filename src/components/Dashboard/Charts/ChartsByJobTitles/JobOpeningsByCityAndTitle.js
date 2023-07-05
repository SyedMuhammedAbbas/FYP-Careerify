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

export default function JobOpeningsByCityAndTitle({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getJobOpeningsByCityAndTitle?jobTitle=${jobTitle}`
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
            <Bar dataKey="JobCount" fill="#9fd43d" />
          </BarChart>
        </ResponsiveContainer>
        <p className="flex justify-center text-[15px] text-gray-500">
          The graph presents the job openings count based on a specific job
          title across various cities. It utilizes a bar chart, where the x-axis
          represents the cities and the y-axis represents the job count. Each
          bar corresponds to the number of job openings in a particular city.
          The graph provides a visual representation of the distribution of job
          opportunities in different cities for the given job title.
        </p>
      </div>
    </>
  );
}
