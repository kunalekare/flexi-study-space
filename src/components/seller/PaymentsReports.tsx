
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText } from "lucide-react";

// Mock data for payments history
const paymentsData = [
  {
    id: 1,
    date: "August 15, 2023",
    amount: 2135.40,
    method: "Direct Deposit",
    status: "Completed"
  },
  {
    id: 2,
    date: "July 15, 2023",
    amount: 1876.22,
    method: "Direct Deposit",
    status: "Completed"
  },
  {
    id: 3,
    date: "June 15, 2023",
    amount: 1654.15,
    method: "Direct Deposit",
    status: "Completed"
  },
  {
    id: 4,
    date: "May 15, 2023",
    amount: 2042.78,
    method: "Direct Deposit",
    status: "Completed"
  }
];

// Mock data for available reports
const reportsData = [
  {
    id: 1,
    name: "Sales Summary - Q2 2023",
    type: "PDF",
    date: "July 1, 2023",
    size: "1.2 MB"
  },
  {
    id: 2,
    name: "Product Performance - June 2023",
    type: "CSV",
    date: "July 5, 2023",
    size: "820 KB"
  },
  {
    id: 3,
    name: "Customer Insights - Q2 2023",
    type: "PDF",
    date: "July 8, 2023",
    size: "1.8 MB"
  },
  {
    id: 4,
    name: "Inventory Status - July 2023",
    type: "CSV",
    date: "August 2, 2023",
    size: "540 KB"
  }
];

const PaymentsReports = () => {
  const [reportPeriod, setReportPeriod] = useState("july2023");

  return (
    <div className="space-y-8">
      <Tabs defaultValue="payments">
        <TabsList>
          <TabsTrigger value="payments">Payments History</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Payment Settings</TabsTrigger>
        </TabsList>
        
        {/* Payments History Tab */}
        <TabsContent value="payments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>
                View your payment history and transaction details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium p-4">Payment Date</th>
                      <th className="text-left font-medium p-4">Amount</th>
                      <th className="text-left font-medium p-4">Payment Method</th>
                      <th className="text-left font-medium p-4">Status</th>
                      <th className="text-right font-medium p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentsData.map((payment) => (
                      <tr key={payment.id} className="border-b">
                        <td className="p-4">{payment.date}</td>
                        <td className="p-4">${payment.amount.toFixed(2)}</td>
                        <td className="p-4">{payment.method}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {payment.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            Receipt
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing 4 of 4 payments
              </div>
              <Button variant="outline" size="sm" disabled>
                View More
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Reports Tab */}
        <TabsContent value="reports" className="mt-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Generate Report</CardTitle>
              <CardDescription>
                Create custom reports for your business analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Report Type</label>
                  <Select defaultValue="sales">
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Summary</SelectItem>
                      <SelectItem value="products">Product Performance</SelectItem>
                      <SelectItem value="customers">Customer Insights</SelectItem>
                      <SelectItem value="inventory">Inventory Status</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Time Period</label>
                  <Select value={reportPeriod} onValueChange={setReportPeriod}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="august2023">August 2023</SelectItem>
                      <SelectItem value="july2023">July 2023</SelectItem>
                      <SelectItem value="june2023">June 2023</SelectItem>
                      <SelectItem value="q22023">Q2 2023</SelectItem>
                      <SelectItem value="q12023">Q1 2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Format</label>
                  <Select defaultValue="pdf">
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Generate Report</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Available Reports</CardTitle>
              <CardDescription>
                Download previously generated reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium p-4">Report Name</th>
                      <th className="text-left font-medium p-4">Type</th>
                      <th className="text-left font-medium p-4">Generated On</th>
                      <th className="text-left font-medium p-4">Size</th>
                      <th className="text-right font-medium p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsData.map((report) => (
                      <tr key={report.id} className="border-b">
                        <td className="p-4">{report.name}</td>
                        <td className="p-4">{report.type}</td>
                        <td className="p-4">{report.date}</td>
                        <td className="p-4">{report.size}</td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Payment Settings Tab */}
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>
                Manage your payment methods and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Default Payment Method</h3>
                <div className="border rounded-md p-4 bg-muted/30">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Direct Deposit</div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Default</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Account ending in ****6789
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Payment Schedule</h3>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="monthly" name="schedule" className="h-4 w-4 text-primary" defaultChecked />
                    <label htmlFor="monthly" className="text-sm font-medium">Monthly (15th of each month)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="biweekly" name="schedule" className="h-4 w-4 text-primary" />
                    <label htmlFor="biweekly" className="text-sm font-medium">Bi-weekly</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Tax Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tax ID (EIN/SSN)</label>
                    <Input type="text" placeholder="XX-XXXXXXX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Business Type</label>
                    <Select defaultValue="individual">
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual/Sole Proprietor</SelectItem>
                        <SelectItem value="llc">LLC</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentsReports;
