import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../../../../config";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function JobBySalaryRangeDateAndTitle({ jobTitle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/searchedjobs/getSalaryRangeByDateAndTitle?jobTitle=${jobTitle}`
        );
        const apiData = response.data;

        setData(apiData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [jobTitle]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="PostedDate" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="MinSalary"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="MaxSalary"
          fill="#8884d8"
          stroke="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
