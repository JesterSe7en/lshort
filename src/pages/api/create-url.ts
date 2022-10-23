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
  const rawURL = new URL(req.url!, `http://${req.headers.host}`);

  if (rawURL.searchParams == null)
    return res.status(400).json({ message: "No query given" });

  var url = rawURL.searchParams.get("url");

  if (url == null) return res.status(400).json({ message: "No query given" });

  if (!validator.isURL(url))
    return res.status(400).json({ message: "Invalid url" });

  // apparently prepared statments is used internally for Prisma
  // https://github.com/prisma/prisma-client-js/issues/436
  const shortLink = await prisma?.shortLink.create({
    data: {
      url: url,
      slug: randomUUID().slice(0, 8),
    },
  });

  if (shortLink == null) {
    res.status(500).json({ message: "Error creating short link" });
    return;
  }
  res.status(200).json({ shortUrl: `${rawURL.origin}/${shortLink.slug} ` });
}
