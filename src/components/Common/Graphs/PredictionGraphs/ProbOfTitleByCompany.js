import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BASEURL } from "../../../../../config";
import axios from "axios";

const ProbOfTitleByCompany = ({ title }) => {
  const [jobData, setJobData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}/predict/ProbOfTitleByCompany?jobTitle=${title}`
      );
      const apiData = response.data;
      console.log(apiData, "apiData");
      setJobData(apiData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [title]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={jobData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Company_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Probability"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center text-[15px] text-gray-500">
        This graph represents recruitment probabilities based on {title} roles
        for different companies. The data is generated using an LSTM AI model,
        which analyzes historical hiring patterns to predict the likelihood of
        recruiting for particular roles within each company. This visualization
        offers insights into hiring preferences and enables informed recruitment
        decisions.
      </div>
    </div>
  );
};

export default ProbOfTitleByCompany;
