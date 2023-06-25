import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { BASEURL } from "../../../../../config";

const JobPostingsTrend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/line/JobPostingsTrend`);
        const apiData = response.data;

        setData(apiData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          // width={600}
          // height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Posted_month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="number_of_jobs"
            name="Number of Jobs"
            stroke="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default JobPostingsTrend;
