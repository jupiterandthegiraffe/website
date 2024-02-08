import type { Context } from "@netlify/functions"
import twilio from "twilio";

const accountSid = Netlify.env.get("TWILIO_ACCOUNT_SID");
const authToken = Netlify.env.get("TWILIO_AUTH_TOKEN");
const client = twilio(accountSid, authToken);
const CURRENT_NUMBER = Netlify.env.get("CURRENT_NUMBER");
const TWILIO_NUMBER = Netlify.env.get("TWILIO_NUMBER");

type Response = {
  body: {
    Body: string,
    From: number
  }
}

export default async (req: Response, context: Context) => {
  console.log('Received message:', req.body.Body, req.body.From);
  
  try {
    const message = await client.messages.create({
      body: req.body.Body,
      from: req.body.From || TWILIO_NUMBER,
      to: CURRENT_NUMBER,
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