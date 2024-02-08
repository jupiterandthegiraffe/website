import type { Context } from "@netlify/functions"
import twilio from "twilio";
import querystring from "querystring"

const accountSid = Netlify.env.get("TWILIO_ACCOUNT_SID");
const authToken = Netlify.env.get("TWILIO_AUTH_TOKEN");
const client = twilio(accountSid, authToken);
const CURRENT_NUMBER = Netlify.env.get("CURRENT_NUMBER");
const TWILIO_NUMBER = Netlify.env.get("TWILIO_NUMBER");

// type Response = {
//   body: {
//     stream: string | undefined,
//     source: string,
//     length: number,
//   }
// }

export default async (req: any, context: Context) => {
  console.log('Received message:', req);
  const POSTData: any = querystring.parse(req.body);
  console.log('POSTData:', POSTData);
  
  try {
    const message = await client.messages.create({
      body: POSTData.Body,
      from: POSTData.From || TWILIO_NUMBER,
      to: CURRENT_NUMBER as string,
    });

    console.log(message.sid); // Log the call SID for reference

    return Response.json({
      success: true,
      message: "Message sent successfully",
      status: 200,
    });

    // return new Response(twiml.toString(), {
    //   headers: { "Content-Type": "text/xml" },
    // });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Failed to send message",
      status: 500,
    });
  }
}