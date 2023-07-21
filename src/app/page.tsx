import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import TextArea from "@/components/InputField/TextArea";
import Navbar from "@/components/Navbar/Navbar";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <DashboardHeader />
      <div className="max-w-6xl mx-auto px-6">
        <Stats />
      </div>
    </main>
  );
}
