import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BASEURL } from "../../../../../config";

function JobListingsTrendGraph({ jobType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call to fetch job listings trend for the searched job type
    fetch(
      `${BASEURL}/searchedjobs/getJobListingsTrendOfJobType?jobType=${jobType}`
    )
      .then((response) => response.json())
      .then((results) => {
        // Format the Posted_date to remove the time component
        const formattedResults = results.map((result) => ({
          ...result,
          Posted_date: result.Posted_date.split("T")[0],
        }));
        setData(formattedResults);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Posted_date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Job_Count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <p className="flex justify-center text-[15px] text-gray-500">
        Visual representation of the trend of job listings over time for a
        specific job type, allowing users to observe the fluctuations and
        changes in job availability for the searched job type.
      </p>
    </div>
  );
}

export default JobListingsTrendGraph;
