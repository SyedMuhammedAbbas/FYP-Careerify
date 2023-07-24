import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BASEURL } from "../../../../../config";
import axios from "axios";

const ProbOfTitleByType = ({ title }) => {
  const [jobData, setJobData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}/predict/ProbOfTitleByType?jobTitle=${title}`
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
        <PieChart>
          <Pie
            data={jobData}
            dataKey="Count"
            nameKey="Job_type"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
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

export default ProbOfTitleByType;
