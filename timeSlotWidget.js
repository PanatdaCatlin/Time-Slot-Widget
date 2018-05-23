const widgetHeader = () => {
  return `<div id="header"><h2>Book Online</h2>
 <a href="http://www.wheelhousetesting.net">What do we treat? </a><a href="http://www.wheelhousetesting.net" id="link">How much will it cost? </a></div>`;
};

convertTime = utcTime => {
  const date = new Date(utcTime);
  let options = { hour: "2-digit", minute: "2-digit" };
  let dateString = date.toLocaleString("en-us", options);
  return dateString
    .substring(0, dateString.length - 1)
    .toLowerCase()
    .replace(" ", "");
};

const renderTimeSlots = data => {
  let timeSlots = "";
  for (let i = 0; i < 11; i += 1) {
    const timeSlot = convertTime(
      data.scheduleDays[0].timeSlots[i].slotDateTime
    );

    timeSlots += `<div class="col-xs-3"><div class="btn go" role="button">${timeSlot}</div></div>`;
  }
  return timeSlots;
};
const widgetBody = data => {
  return `<p id="subHeading">Tomorrow</p>
    <div class="row">
  ${renderTimeSlots(data)}
  <div class="more col-xs-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">More</a></div>
  </div>`;
};

const widget = data => {
  return `
  <div id='timeSlotWidget' class='container'> 
    ${widgetHeader()}
    <hr />
    ${widgetBody(data)}
  </div>
  `;
};

$(document).ready(() => {
  $.get(
    "https://s3.amazonaws.com/wheelhouse-cdn/wheelhouse-www/assets/timeslotdata.json",
    function(data, status) {
      $("#addContentHere").append(widget(data));
      $(".go").click(
        () => (window.location.href = "http://www.wheelhousetesting.net")
      );
    }
  );
});
