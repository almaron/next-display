// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from "next-http-proxy-middleware";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  httpProxyMiddleware(req, res, {
    target: process.env.BACKEND_URL,
    pathRewrite: [{ patternStr: "^/api", replaceStr: "" }], // remove `/api` prefix
  })
}
