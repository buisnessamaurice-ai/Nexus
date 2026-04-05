import { VercelRequest, VercelResponse } from "@vercel/node";

export interface DemoResponse {
  message: string;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const response: DemoResponse = {
    message: "Hello from Vercel Serverless Function",
  };

  res.status(200).json(response);
}
