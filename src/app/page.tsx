import Alert from "@/components/Alert/Alert";
import ImageButton from "@/components/Buttons/ImageButton";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import Navbar from "@/components/Navbar/Navbar";
import Stats from "@/components/Stats/Stats";
import flag from "@/assets/icon/flag.svg";
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
