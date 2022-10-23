import { randomUUID } from "crypto";
import validator from "validator";
import { NextApiRequest, NextApiResponse } from "next";

export default async function CreateUrl(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    console.log("redirecting to root");
    res.redirect("/");
  }

  //validate url/sanitize
  let inputURL: string = req.query["url"]!.toString();
  console.log(req.query["url"]);

  if (!validator.isURL(inputURL))
    return res.status(500).json({ message: "Invalid url" });

  // apparently prepared statments is used internally for Prisma
  // https://github.com/prisma/prisma-client-js/issues/436
  const shortLink = await prisma?.shortLink.create({
    data: {
      url: inputURL,
      slug: randomUUID().slice(0, 8),
    },
  });

  if (shortLink == null) {
    res.status(500).json({ message: "Error creating short link" });
    return;
  }

  res.status(200).json({ shortUrl: shortLink.slug });
}
