import Alert from "@/components/Alert/Alert";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import Navbar from "@/components/Navbar/Navbar";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <DashboardHeader />
      <div className="max-w-6xl mx-auto px-6">
        <Stats />
        <Alert variant="danger" />
      </div>
    </main>
  );
}
