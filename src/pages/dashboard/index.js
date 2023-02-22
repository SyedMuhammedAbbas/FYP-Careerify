import Header from "@/components/Common/Header";
import Sidebar from "@/components/Common/Sidebar";
import DashboardCharts from "@/components/Dashboard/DashboardCharts";

export default function DashboardPage() {
  return (
    <>
      <div className="bg-[#F15A24] h-screen w-[100vw] py-5 pr-5 z-20">
        <div className="ml-56 h-[95vh] p-5 w-[83vw] fixed bg-[#f1f5f9] rounded-[20px]">
          <DashboardCharts />
        </div>
      </div>
    </>
  );
}
