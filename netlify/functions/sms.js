const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
  const urlParams = new URLSearchParams(event.body);
  const params = Object.fromEntries(urlParams);

  console.log(params);

  if (!params.Body || !params.From) {
    return Response.json({
      success: false,
      message: "Invalid request",
      status: 400,
    });
  }

  try {
    await sgMail.send({
      to: process.env.EMAIL,
      from: "ToobSquid <bot@toobsquid.com>",
      subject: "Text Code!",
      text: params.Body,
      html: `<p>New Text Code</p><strong>${params.body}</strong>`,
    });

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
};
