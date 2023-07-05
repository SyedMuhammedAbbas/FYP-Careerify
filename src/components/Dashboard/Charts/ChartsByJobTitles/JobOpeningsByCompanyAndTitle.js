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

export default function JobOpeningsByCompanyAndTitle({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getJobOpeningsByCompanyAndTitle?jobTitle=${jobTitle}`
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
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Company_name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="JobCount" fill="#813dd4" />
          </BarChart>
        </ResponsiveContainer>
        <p className="flex justify-center text-[15px] text-gray-500">
          The graph showcases the job openings count by company for a specific
          job title. It utilizes a bar chart, where the x-axis represents the
          company names and the y-axis represents the job count. Each bar
          corresponds to the number of job openings offered by a specific
          company. The graph provides insights into the distribution of job
          opportunities among different companies for the given job title,
          allowing users to identify the companies with the highest number of
          job openings.
        </p>
      </div>
    </>
  );
}
