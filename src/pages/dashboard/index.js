import Header from "@/components/Common/Header";
import Sidebar from "@/components/Common/Sidebar";
import DashboardCharts from "@/components/Dashboard/DashboardCharts";

export default function DashboardPage() {
  return (
    <>
      <div className="m-10 ml-56 bg-[#b9b9b9] rounded-[20px]">
        <DashboardCharts />
      </div>
    </>
  );
}
