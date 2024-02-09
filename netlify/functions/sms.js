const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
  const urlParams = new URLSearchParams(event.body);
  const params = Object.fromEntries(urlParams);

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
      html: `<p>New Text Code from ${params.From} (${params.FromCountry}):</p><strong>"${params.Body}"</strong>`,
    });

    return {
      statusCode: 200,
      body: "Text sent successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
