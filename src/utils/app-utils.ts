import { AnalyticsCallOptions } from "firebase/analytics";
import Pino from "pino";
import { analytics, logEvent } from "@/firebase/app";
import { PrismaClient } from "@prisma/client";

const logger = Pino();

export function getLogger() {
  return logger;
}

export const LogEvent = (
  eventName: string,
  eventParams?: {
    [key: string]: any;
  },
  options?: AnalyticsCallOptions
) => {
  return analytics
    ? logEvent(analytics, eventName, eventParams, options)
    : null;
};

export const getPrismaClient = () => new PrismaClient();
