$(document).ready(function() {
  $(".not-logged-in")
    .parent()
    .css("height", "100%");
  $(".not-logged-in #content")
    .parent()
    .css("height", "100%");
  $(".not-logged-in .tabs.primary").prependTo("#edit-actions");
  $(".not-logged-in #block-system-main .content").prepend(
    '<div class="lock-icon"><img src="http://res.cloudinary.com/archit/image/upload/v1514971242/dlvrd_lock_icon_ilfrtc.png" alt="lock-icon"></div>'
  );
  $(".not-logged-in #block-system-main").prepend(
    '<div class="popup-logo"><img src="http://res.cloudinary.com/archit/image/upload/v1514971253/dlvrd_popup_logo_hilpaw.png" alt="dlvrd-logo"></div>'
  );
  $('.not-logged-in input[name="name"]').attr("placeholder", "Username *");
  $('.not-logged-in input[name="pass"]').attr("placeholder", "Password *");
  $("#header #logo a img").attr(
    "src",
    "http://res.cloudinary.com/archit/image/upload/v1514976960/dlvrd-logo_hl55ca.png"
  );
  $("a.language-link").text("Fr");
  $("#header #logo a").attr("href", "/en/org");
  var $footer_html =
    '<div class="container"><div class="sixteen columns"><footer class="footer"><div class="contactAddress"><div class="contact-word">Contact</div><div class="address-text">160 Applewood Cr.<br>Concord, Ontario<br>L4K4H2 Canada</div></div><div class="footer-right-stuff"><div class="contactInfo">800-514-0536<br><a href="mailto:info@dlvrd.com">info@dlvrd.com</a></div><div class="copy">&copy; 2012, 2016. All Rights Reserved.</div></div></footer></div></div>';
  $("#wrapper").append($footer_html);

  // var shipment_info_table = TableTools.fnGetInstance('active_shipments');
  // console.log(shipment_info_table);
  // var shipment_info = shipment_info_table.dom.table.childElementCount - 1;
  $schedule_now_html =
    '<div class="schedule-now-content"><p>Schedule</p><img src="http://res.cloudinary.com/archit/image/upload/v1515601759/calender_icon_wacr3v.png" alt="schedule-now-icon"></div>';
  $("#active_shipments").on("draw.dt", function() {
    $(".home-action").html($schedule_now_html);
    shipment_info = $("#active_shipments > tbody > tr").length;
    var shipment_text = "";
    if (shipment_info === 1) {
      shipment_text = "Shipment";
    } else {
      shipment_text = "Shipments";
    }
    $active_shipment_count_div =
      '<div class="active-shipment-count"><div class="shipment-count"><span class="shipment-number">' +
      shipment_info +
      '</span> <span class="active-shipment-text">Active ' +
      shipment_text +
      '<span></div><div class="shipment-icon"><img src="http://res.cloudinary.com/archit/image/upload/v1515588011/truck_icon_fikgge.png"></div></div>';
    $(".utabs .ui-tabs-panel").prepend($active_shipment_count_div);
  });
  $("#block-locale-language")
    .parent()
    .parent()
    .attr("id", "header2");
});
