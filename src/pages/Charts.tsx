import { Navbar } from "@/components/custom/Navbar/Navbar";
import { barChartData, pieChartData } from "@/lib/constants/charts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Charts() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full grow overflow-y-auto flex flex-col items-center p-4 sm:px-0">
        <h2 className="font-medium text-2xl text-center">Sample Pie Chart</h2>
        <p className="text-muted-foreground text-center text-xs">
          Possible outcomes of Salih's interview process
        </p>
        <ResponsiveContainer className="w-full max-w-80" height={400}>
          <PieChart>
            <Legend />
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              legendType="circle"
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <h2 className="font-medium text-2xl text-center  mt-4">
          Sample Bar Chart
        </h2>
        <p className="text-muted-foreground text-center text-xs">
          Inflation rates for first half of last year
        </p>
        <ResponsiveContainer className="w-full max-w-96 mt-4" height={400}>
          <BarChart data={barChartData}>
            <CartesianGrid width={300} strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="monthly" fill="#50C878" />
            <Bar dataKey="yearly" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
