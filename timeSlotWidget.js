const widgetHeader = () =>{
 return `<h1>Book Online</h1>
 <a href="http://www.wheelhousetesting.net">What do we treat? </a><a href="http://www.wheelhousetesting.net">How much will it cost? </a>`;
}
const widgetBody = () => {
    return `<h2>Tomorrow</h2>
    <div class="row" style="margin:10px">
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  <div class="col-sm-3">time</div>
  </div>`;
}

const widget = () => {
  return (`
  <div id='timeSlotWidget'> 
    ${widgetHeader()}
    <hr/>
    ${widgetBody()}
  </div>
  `);
};

$(document).ready(() => {
  $("#addContentHere").append(widget());
});
