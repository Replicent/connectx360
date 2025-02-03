"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PipelineTable } from "../molecules/PipelineTable";
import { proposals } from "@/constants";

const Pipeline = () => {
  const [filterValue, setFilterValue] = React.useState("all");
  const handleFilterTab = (tabValue: string) => setFilterValue(tabValue);
  const getProposals = proposals.filter((proposal) => {
    if (filterValue === "all") {
      return true;
    }
    return proposal.status === filterValue;
  });
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Pipeline</CardTitle>
          <CardDescription>Overall pipeline</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={filterValue} className="w-[400px]">
            <TabsList className="my-4">
              <TabsTrigger
                value="all"
                id="all"
                onClick={(e) => handleFilterTab(e.currentTarget.id)}
              >
                All
              </TabsTrigger>
              <TabsTrigger
                disabled
                value="drafts"
                id="drafts"
                onClick={(e) => handleFilterTab(e.currentTarget.id)}
              >
                Drafts
              </TabsTrigger>
              <TabsTrigger
                value="awaiting_acceptance"
                id="awaiting_acceptance"
                onClick={(e) => handleFilterTab(e.currentTarget.id)}
              >
                Awaiting Acceptance
              </TabsTrigger>
              <TabsTrigger
                value="lost"
                id="lost"
                onClick={(e) => handleFilterTab(e.currentTarget.id)}
              >
                Lost
              </TabsTrigger>
              <TabsTrigger
                value="accepted"
                id="accepted"
                onClick={(e) => handleFilterTab(e.currentTarget.id)}
              >
                Accepted
              </TabsTrigger>
              <TabsTrigger
                value="ending_soon"
                id="ending_soon"
                onClick={(e) => handleFilterTab(e.currentTarget.id)}
              >
                Ending Soon
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                id="completed"
                onClick={(e) => handleFilterTab(e.currentTarget.id)}
              >
                Completed
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <PipelineTable proposals={getProposals} />
        </CardContent>
      </Card>
    </section>
  );
};

export default Pipeline;
