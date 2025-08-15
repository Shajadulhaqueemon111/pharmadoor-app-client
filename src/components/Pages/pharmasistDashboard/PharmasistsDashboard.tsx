/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import { useAuth } from "../privateRoute/AuthContext";
import toast from "react-hot-toast";

const getMonthName = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("default", { month: "short" });
};

const monthOrder = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="text-gray-700 font-semibold">{label} Sales</p>
        <p className="text-indigo-600 font-bold text-lg">
          Tk {payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

const PharmasistsDashboard = () => {
  const [totalSales, setTotalSales] = useState<number>(0);
  const [totalProfit, setTotalProfit] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<{
    name: string;
    sales: number;
  } | null>(null);

  const { user } = useAuth();
  const userId = user?._id;

  useEffect(() => {
    const fetchOrderedMedicines = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          toast.error("Access Token does not exist in localStorage");
          return;
        }

        const res = await axios.get(
          "https://pharma-door-backend.vercel.app/api/v1/order/ordered-medicine",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        const orders = res.data?.data || [];

        const pharmacistOrders = orders.filter((order: any) =>
          order.products?.some((p: any) => p.pharmacist === userId)
        );

        const sales = pharmacistOrders.reduce(
          (sum: number, order: any) => sum + order.totalPrice,
          0
        );
        const profit = pharmacistOrders.reduce(
          (sum: number, order: any) => sum + order.totalPrice * 0.2,
          0
        );

        setTotalSales(sales);
        setTotalProfit(profit);

        const monthlySalesMap: Record<string, number> = {};
        pharmacistOrders.forEach((order: any) => {
          const month = getMonthName(order.createdAt);
          if (!monthlySalesMap[month]) {
            monthlySalesMap[month] = 0;
          }
          monthlySalesMap[month] += order.totalPrice;
        });

        const chartDataArray = monthOrder.map((month) => ({
          name: month,
          sales: parseFloat((monthlySalesMap[month] || 0).toFixed(2)),
        }));

        setChartData(chartDataArray);
      } catch (err) {
        console.error("Error fetching ordered medicines:", err);
      }
    };

    if (userId) {
      fetchOrderedMedicines();
    }
  }, [userId]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Welcome to Pharmacist Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Sales</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {totalSales.toFixed(2)} TK
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Profit</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {totalProfit.toFixed(2)} TK
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-white via-slate-50 to-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center tracking-tight">
          Monthly Sales Performance
        </h2>

        {chartData.length > 0 ? (
          <>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={chartData}
                margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
                barGap={6}
                onClick={(data: any) => {
                  if (data?.activeLabel && data?.activePayload?.length > 0) {
                    const clickedMonth = data.activeLabel;
                    const clickedSales = data.activePayload[0].payload.sales;
                    setSelectedMonth({
                      name: clickedMonth,
                      sales: clickedSales,
                    });
                  }
                }}
              >
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.4} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />

                <XAxis
                  dataKey="name"
                  stroke="#4b5563"
                  tick={{ fontSize: 14, fontWeight: "600", fill: "#374151" }}
                  axisLine={{ stroke: "#4b5563" }}
                  tickLine={false}
                />
                <YAxis
                  stroke="#4b5563"
                  tick={{ fontSize: 12, fill: "#374151" }}
                  axisLine={{ stroke: "#4b5563" }}
                  tickLine={false}
                  tickFormatter={(value) => `Tk${value}`}
                />
                <Tooltip content={<CustomTooltip />} />

                <Bar
                  dataKey="sales"
                  fill="url(#colorSales)"
                  radius={[10, 10, 10, 10]}
                  barSize={45}
                  animationDuration={900}
                  animationEasing="ease-in-out"
                  cursor="pointer"
                >
                  <LabelList
                    dataKey="sales"
                    position="top"
                    formatter={(value: number) => `Tk${value.toFixed(0)}`}
                    style={{
                      fill: "#4338ca",
                      fontWeight: "700",
                      fontSize: 14,
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {selectedMonth && (
              <p className="mt-4 text-center text-lg font-medium text-gray-700">
                <span className="font-semibold">{selectedMonth.name}</span>{" "}
                Sales:{" "}
                <span className="text-indigo-600 font-bold">
                  Tk{selectedMonth.sales}
                </span>
              </p>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 text-sm">
            No sales data available yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default PharmasistsDashboard;
