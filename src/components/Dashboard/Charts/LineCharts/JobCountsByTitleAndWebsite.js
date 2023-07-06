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

const JobCountsByTitleAndWebsite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/line/getJobCountsByTitleAndWebsite`
        );
        const apiData = response.data;

        setData(apiData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Job_category" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Render a Line for each website */}
          {Array.from(new Set(data.map((item) => item.Website_name))).map(
            (website, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey="Job_count"
                name={website}
                stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                dot={{ r: 4 }}
              />
            )
          )}
        </LineChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        The graph illustrates the job distribution in the IT industry across
        various titles and websites. The X-axis represents job titles, while the
        Y-axis indicates the corresponding number of job postings. Each line on
        the graph signifies a website, showing the distribution of job counts
        for each title. This visualization provides insights into job popularity
        and distribution among different websites in the IT job market.
      </p>
    </div>
  );
};

export default JobCountsByTitleAndWebsite;
