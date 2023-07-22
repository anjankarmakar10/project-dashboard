import Alert from "@/components/Alert/Alert";

import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import Navbar from "@/components/Navbar/Navbar";
import Stats from "@/components/Stats/Stats";
import Form1 from "@/components/Forms/Form1";
import Form2 from "@/components/Forms/Form2";
import Form3 from "@/components/Forms/From3";
import TableContent from "@/components/Table/TableContent";

export default function Home() {
  return (
    <main>
      <Navbar />
      <DashboardHeader />
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <Stats />
        <div className="flex flex-col gap-7">
          <TableContent />

          <Form1 />
          <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Form2 />
            </div>
            <Form3 />
          </div>
        </div>
      </div>
    </main>
  );
}
