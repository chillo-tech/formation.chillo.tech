import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";
import { axiosInstance } from "@/services";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { url: backendUrl = "" } = req;
    
    if (req.method === "POST") {
      const { data } = await axiosInstance.post(`${backendUrl}`, req.body);
      return res.status(200).json(data);
    } else if (req.method === "PUT") {
      const { data } = await axiosInstance.put(`${backendUrl}`, req.body);
      return res.status(200).json(data);
    } else if (req.method === "PATCH") {
      const { data } = await axiosInstance.patch(`${backendUrl}`, req.body);
      return res.status(200).json(data);
    } else if (req.method === "DELETE") {
      const { data } = await axiosInstance.delete(`${backendUrl}`);
      return res.status(200).json(data);
    } else {
      const { data } = await axiosInstance.get(`${backendUrl}`);
      return res.status(200).json(data);
    }
  } catch (error: any) {
    const axiosError = error as Error | AxiosError;
    if (axios.isAxiosError(axiosError)) {
      const axiosError = error as AxiosError;
      const { status, response } = error;

      if (
        status === 401 ||
        (response && response.status && response.status === 401)
      ) {
        res.status(401).json({ message: "Veuillez vous connecter" });
        return;
      }
      res
        .status(axiosError.response?.status || 500)
        .json(axiosError.response?.data);
    }
    return Promise.reject(error);
  }
}

export default handler;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
