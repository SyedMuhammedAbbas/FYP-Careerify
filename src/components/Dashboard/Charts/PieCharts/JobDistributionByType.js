import React, { useState, useEffect, useCallback } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";
import { BASEURL } from "../../../../../config";

const JobDistributionByType = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASEURL}/pie/JobDistributionByType`);
      const apiData = response.data;

      setData(apiData);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  console.log(data);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const threshold = 5;

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FFA500",
  ];
  const thresholdPercentage = threshold || 5; // Set a default threshold value if not provided

  // Filter out the data below the threshold and calculate their total count and percentage
  const filteredData = data.filter(
    (entry) => entry.Percentage >= thresholdPercentage
  );
  const otherCount = data.reduce((accumulator, entry) => {
    if (entry.Percentage < thresholdPercentage) {
      return accumulator + entry.Number_of_Jobs;
    }
    return accumulator;
  }, 0);
  const otherPercentage = data.reduce((accumulator, entry) => {
    if (entry.Percentage < thresholdPercentage) {
      return accumulator + entry.Percentage;
    }
    return accumulator;
  }, 0);
  const otherEntry = {
    Job_type: "Other",
    Number_of_Jobs: otherCount,
    Percentage: otherPercentage,
  };

  // Add the "Other" entry to the filtered data
  const chartData = [...filteredData, otherEntry];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="Percentage"
            nameKey="Job_type"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
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
      <p className="flex justify-center text-[15px] text-gray-500">
        graph provides a visual representation of the distribution of job types
        in the IT industry
      </p>
    </div>
  );
};

export default JobDistributionByType;
