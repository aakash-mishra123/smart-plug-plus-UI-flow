"use client";
import { BarChart } from "@tremor/react";
import { Card, Title, Text, Grid, Col, LineChart } from "@tremor/react/dist";

const chartData = [
  { date: "Jan", sales: 1000, profit: 300 },
  { date: "Feb", sales: 1200, profit: 400 },
  { date: "Mar", sales: 1500, profit: 500 },
  { date: "Apr", sales: 1800, profit: 700 },
];

const data = [
  { name: "Product A", sales: 3000 },
  { name: "Product B", sales: 5000 },
];

export default function Dashboard() {
  return (
    <>
    <main className="p-6 bg-gray-50 min-h-screen">
      <Title>📊 Sales Dashboard</Title>
      <Text>Track your sales and profit over time.</Text>

      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="mt-6 gap-6">
        <Col numColSpan={1}>
          <Card className="p-4">
            <Title>Total Sales</Title>
            <Text className="text-3xl font-bold">$5,500</Text>
          </Card>
        </Col>
        <Col numColSpan={1}>
          <Card className="p-4">
            <Title>Profit</Title>
            <Text className="text-3xl font-bold">$1,900</Text>
          </Card>
        </Col>
      </Grid>

      <Card className="mt-6 p-4">
        <Title>Sales & Profit Over Time</Title>
        <LineChart
          data={chartData}
          index="date"
          categories={["sales", "profit"]}
          colors={["blue", "green"]}
          yAxisWidth={40}
          className="h-64 mt-4"
        />
      </Card>
    
      <BarChart data={data} index="name" categories={["sales"]} colors={["blue"]} />
    </main>
    </>
  );
}
