import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Csak POST metódus engedélyezett" });
  }

  const { name, problem, categories } = req.body;

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: "Új coaching jelentkezés",
      html: `
        <h2>Új jelentkezés érkezett</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Elakadás:</strong><br/> ${problem.replace(/\n/g, "<br>")}</p>
        <p><strong>Kategóriák:</strong> ${categories.join(", ")}</p>
      `,
    });

    if (error) {
      return res.status(500).json({ error });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: `A következő hiba történt: ${e}` });
  }
}
