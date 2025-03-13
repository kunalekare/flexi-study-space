
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import { ArrowUpRight, DollarSign, Package, Users } from "lucide-react";

// Mock data for sales overview
const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
  { name: "Jul", sales: 3490 },
];

const visitorData = [
  { name: "Jan", visitors: 2400 },
  { name: "Feb", visitors: 1398 },
  { name: "Mar", visitors: 9800 },
  { name: "Apr", visitors: 3908 },
  { name: "May", visitors: 4800 },
  { name: "Jun", visitors: 3800 },
  { name: "Jul", visitors: 4300 },
];

const SalesOverview = () => {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <span className="text-muted-foreground text-sm">+12.5%</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">$8,350</h3>
              <p className="text-muted-foreground text-sm">Total Revenue</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-500/10 p-2 rounded-full">
                <Package className="h-5 w-5 text-green-500" />
              </div>
              <span className="text-muted-foreground text-sm">+6.2%</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">164</h3>
              <p className="text-muted-foreground text-sm">Products Sold</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <span className="text-muted-foreground text-sm">+18.7%</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">2,543</h3>
              <p className="text-muted-foreground text-sm">Total Visitors</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-amber-500/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-amber-500" />
              </div>
              <span className="text-muted-foreground text-sm">+4.1%</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">6.4%</h3>
              <p className="text-muted-foreground text-sm">Conversion Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={salesData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visitors Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={visitorData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-4">Order ID</th>
                  <th className="text-left font-medium p-4">Customer</th>
                  <th className="text-left font-medium p-4">Product</th>
                  <th className="text-left font-medium p-4">Date</th>
                  <th className="text-left font-medium p-4">Amount</th>
                  <th className="text-left font-medium p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">#ORD-432</td>
                  <td className="p-4">John Doe</td>
                  <td className="p-4">Smart Home Controller</td>
                  <td className="p-4">August 12, 2023</td>
                  <td className="p-4">$149.99</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">#ORD-431</td>
                  <td className="p-4">Sarah Smith</td>
                  <td className="p-4">Adaptive Keyboard</td>
                  <td className="p-4">August 11, 2023</td>
                  <td className="p-4">$89.95</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Shipped
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">#ORD-430</td>
                  <td className="p-4">Michael Johnson</td>
                  <td className="p-4">Screen Reader Pro</td>
                  <td className="p-4">August 10, 2023</td>
                  <td className="p-4">$199.50</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Processing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesOverview;
