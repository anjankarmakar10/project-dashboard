import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import Navbar from "@/components/Navbar/Navbar";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <DashboardHeader />
      <div className="max-w-6xl mx-auto pt-7">
        <Stats />
      </div>
    </main>
  );
}
