import React, { useState, useEffect, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";
import { BASEURL } from "../../../../../config";

const JobByTitleAndSiteGraph = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASEURL}/line/JobDataByTitleAndSite`);
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

  const chartData = [];
  const websiteNames = [];

  // Sort the data based on Job_titles
  const sortedData = data.sort((a, b) =>
    a.Job_titles.localeCompare(b.Job_titles)
  );

  sortedData.forEach((item) => {
    const { Job_titles, number_of_jobs, Website_name } = item;

    // Add unique website names to the array
    if (!websiteNames.includes(Website_name)) {
      websiteNames.push(Website_name);
    }

    // Check if a data point exists for the current job title
    const existingDataPoint = chartData.find(
      (dataPoint) => dataPoint.Job_titles === Job_titles
    );

    if (existingDataPoint) {
      // If a data point exists, update the number of jobs for the corresponding website name
      existingDataPoint[Website_name] = number_of_jobs;
    } else {
      // If a data point doesn't exist, create a new data point
      const newDataPoint = {
        Job_titles: Job_titles,
        [Website_name]: number_of_jobs,
      };
      chartData.push(newDataPoint);
    }
  });
  const lineColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#ff85a1"];
  return (
    <LineChart
      width={800}
      height={400}
      data={chartData}
      //   margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      {websiteNames.map((websiteName, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={websiteName}
          name={websiteName}
          stroke={lineColors[index % lineColors.length]}
          strokeWidth={2}
        />
      ))}
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="Job_titles" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default JobByTitleAndSiteGraph;
