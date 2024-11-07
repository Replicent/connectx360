"use client";
import axios from "axios";
import { useMutation } from "react-query";

const sendMailCall = async () => {
  const res = await axios.get("/api/mail");
  return res.data;
};

const useSendMail = () => {
  return useMutation(() => sendMailCall());
};

export { useSendMail };
