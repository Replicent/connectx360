import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  return (
    <section className="flex flex-wrap gap-4 w-full items-center">
      <Card id="revenue" className="max-w-[46%] w-full">
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>Overall revenue</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Card>
            <CardContent>Graph</CardContent>
          </Card>
          <Card>
            <CardContent>Stats</CardContent>
          </Card>
        </CardContent>
      </Card>
      <Card id="payments" className="max-w-[46%] w-full">
        <CardHeader>
          <CardTitle>Payments</CardTitle>
          <CardDescription>Overall payments</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Card>
            <CardContent>Graph</CardContent>
          </Card>
          <Card>
            <CardContent>Stats</CardContent>
          </Card>
        </CardContent>
      </Card>
      <Card id="pipeline" className="max-w-[46%] w-full">
        <CardHeader>
          <CardTitle>Pipeline</CardTitle>
          <CardDescription>Overall pipeline</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">Stats</CardContent>
      </Card>
      <Card id="conversions" className="max-w-[46%] w-full">
        <CardHeader>
          <CardTitle>Conversions</CardTitle>
          <CardDescription>Overall conversions</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Card>
            <CardContent>Graph</CardContent>
          </Card>
          <Card>
            <CardContent>Stats</CardContent>
          </Card>
        </CardContent>
      </Card>
      <Card id="clients" className="max-w-[46%] w-full">
        <CardHeader>
          <CardTitle>Clients</CardTitle>
          <CardDescription>Overall clients</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">Graph</CardContent>
      </Card>
      <Card id="services" className="max-w-[46%] w-full">
        <CardHeader>
          <CardTitle>Services</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">Stats</CardContent>
      </Card>
      <Card id="recents" className="max-w-[46%] w-full">
        <CardHeader>
          <CardTitle>Recents</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">Recents</CardContent>
      </Card>
    </section>
  );
};

export default Dashboard;
