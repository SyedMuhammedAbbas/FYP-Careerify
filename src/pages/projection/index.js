import ProjectionCharts from "@/components/Projection/ProjectionCharts";

export default function ProjectionPage() {
  return (
    <>
      <div className="bg-[#111827] h-[100vh] w-[100vw] py-5 pr-5">
        <div className="ml-56 h-[95vh] p-5 w-[83vw] fixed bg-[#f1f5f9] rounded-[20px]">
          <ProjectionCharts />
        </div>
      </div>
    </>
  );
}
