"use client";
import React from "react";
import Button from "../atoms/Button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const CreateProposal = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-max ml-auto bg-indigo-600 text-white hover:bg-indigo-700 flex gap-2 items-center justify-center">
            <span>Create a proposal</span>
            <PlusCircledIcon />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[90%] md:w-full rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Create a proposal</AlertDialogTitle>
            <AlertDialogDescription>
              Create a proposal to share with your clients.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CreateProposal;
