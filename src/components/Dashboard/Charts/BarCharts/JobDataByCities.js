import React, { useState, useEffect, useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    <BarChart width={700} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="City" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="NumberOfJobs" fill="#8884d8" />
    </BarChart>
  );
};

export default JobDataByCities;
