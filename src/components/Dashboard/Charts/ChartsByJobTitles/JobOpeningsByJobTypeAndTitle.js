import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../../../../config";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={data} dataKey="JobCount" nameKey="Job_type" fill="#8884d8" />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
