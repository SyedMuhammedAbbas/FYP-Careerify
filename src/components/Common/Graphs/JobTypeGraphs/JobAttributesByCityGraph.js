import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { BASEURL } from "../../../../../config";

function JobAttributesByCityGraph({ jobType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call to fetch job attributes by city for the searched job type
    fetch(
      `${BASEURL}/searchedjobs/getJobAttributesByCityOfJobType?jobType=${jobType}`
    )
      .then((response) => response.json())
      .then((results) => setData(results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="City" />
          <PolarRadiusAxis angle={30} domain={[0, "auto"]} />
          <Radar
            name="Minimum Salary"
            dataKey="Min_salary"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Maximum Salary"
            dataKey="Max_salary"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        This graph provides a visual representation of different attributes
        (minimum salary and maximum salary) for the searched job type across
        different cities. It allows users to compare the salary ranges and
        observe how they vary among different cities for the specified job type.
        The radar chart helps identify cities with higher or lower salary ranges
        and provides a comprehensive overview of the job attributes by city.
      </p>
    </div>
  );
}

export default JobAttributesByCityGraph;
