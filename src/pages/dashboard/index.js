import Header from "@/components/Common/Header";
import Sidebar from "@/components/Common/Sidebar";
import DashboardCharts from "@/components/Dashboard/DashboardCharts";

export default function DashboardPage() {
  return (
    <>
      <div className="m-10 ml-56 h-[90vh] p-10 w-[80vw] fixed bg-[#f1f5f9] rounded-[20px]">
        <DashboardCharts />
      </div>
    </>
  );
}
