import { NextApiRequest, NextApiResponse } from "next";

export default async function CreateUrl(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    console.log("redirecting to root");
    res.redirect("/");
  }

  res.status(200).json({ message: "Hey you made it to create-url" });
}
