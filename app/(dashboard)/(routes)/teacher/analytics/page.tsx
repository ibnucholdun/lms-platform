import { getAnalytics } from "@/actions/getAnalytics";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import DataCard from "./_components/DataCard";
import Chart from "./_components/Chart";

const AnalyticsPage = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const { data, totalRevanue, totalSales } = await getAnalytics(userId);
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard label="Total Revanue" value={totalRevanue} shouldFormat />
        <DataCard label="Total Sales" value={totalSales} />
      </div>
      <Chart data={data} />
    </div>
  );
};

export default AnalyticsPage;
