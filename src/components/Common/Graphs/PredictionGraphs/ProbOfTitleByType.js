import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
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

  // Convert jobData to an array of objects suitable for PieChart
  const pieChartData = jobData.map((job) => ({
    Job_type: job.Job_type,
    Probability: job.Probability,
  }));

  // Generate an array of colors for each slice of the pie chart
  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f0e",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#C0C0C0",
    "#FF6384",
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieChartData}
            dataKey="Probability"
            nameKey="Job_type"
            cx="50%"
            cy="50%"
            outerRadius={80}
            // Use the COLORS array to set different colors for each slice
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center text-[15px] text-gray-500">
        This pie chart represents the probabilities of {title} roles for
        different job types. Each slice of the chart corresponds to a specific
        job type, and the size of the slice indicates the probability of
        recruiting for that particular job type. The data is generated using an
        LSTM AI model, which analyzes historical hiring patterns to predict the
        likelihood of recruiting for different job roles. This visualization
        offers insights into the relative likelihood of recruiting for various
        job types and enables informed recruitment decisions.
      </div>
    </div>
  );
};

export default ProbOfTitleByType;
