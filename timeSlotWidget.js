const widgetHeader = () => {
  return `<div class="container"><h2>Book Online</h2>
 <a href="http://www.wheelhousetesting.net">What do we treat? </a><a href="http://www.wheelhousetesting.net" id="link">How much will it cost? </a></div>`;
};
const widgetBody = () => {
  return `<div class="body container"><p id="subHeading">Tomorrow</p>
    <div class="row">
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  </div>
  <div class="row">
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  </div>
  <div class="row">
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">Time</a></div>
  <div class="more col-sm-3"><a class="btn" href="http://www.wheelhousetesting.net" role="button">More</a></div>
  </div>
  </div>
  </div>`;
};

const widget = () => {
  return `
  <div id='timeSlotWidget'> 
    ${widgetHeader()}
    <hr />
    ${widgetBody()}
  </div>
  `;
};

$(document).ready(() => {
  $("#addContentHere").append(widget());
  $.get(
    "https://s3.amazonaws.com/wheelhouse-cdn/wheelhouse-www/assets/timeslotdata.json",
    function(data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    }
  );
});
