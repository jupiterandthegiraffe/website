jQuery(document).ready(function ($) {
  $("#generate_bio_button").on("click", function () {
    const button = $(this);
    const statusSpan = $("#bio_generator_status");
    const title = $("h1").text(); // Get the post title

    button.prop("disabled", true);
    statusSpan.html("Generating biography...").show();

    $.ajax({
      url: bioGeneratorData.ajaxurl,
      type: "POST",
      data: {
        action: "generate_bio",
        nonce: bioGeneratorData.nonce,
        title: title,
      },
      success: function (response) {
        if (response.success) {
          // Update the existing textarea with the generated bio
          $("#acf-field_6690f09290fcd").val(response.data.bio);
          statusSpan.html("Biography generated successfully!").show();
        } else {
          statusSpan.html("Error: " + response.data).show();
        }
      },
      error: function () {
        statusSpan.html("Error generating biography. Please try again.").show();
      },
      complete: function () {
        button.prop("disabled", false);
        setTimeout(function () {
          statusSpan.fadeOut();
        }, 3000);
      },
    });
  });
});
