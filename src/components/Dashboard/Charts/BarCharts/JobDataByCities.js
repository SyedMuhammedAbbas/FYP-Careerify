import React, { useState, useEffect, useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { BASEURL } from "../../../../../config";

const JobDataByCities = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASEURL}/bar/JobDataByCities`);
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

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="City" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="NumberOfJobs" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <p className="flex justify-center text-[15px] text-gray-500">
          The graph visually presents the distribution of job data across
          various cities within the IT industry. By examining the heights of the
          bars, viewers can easily compare the number of jobs in different
          cities, allowing them to identify cities with higher or lower job
          counts. This representation aids in gaining insights into the
          concentration of job opportunities across various cities in the IT
          industry.
        </p>
      </div>
    </>
  );
};

export default JobDataByCities;
