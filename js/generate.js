console.log("js loaded");


$(document).ready(function() {
    console.log("page ready");
    list = ["good","bad","ugly"];
    populate(list, "#world");
})


function populate(list, div) {
    $(div).text(list[getRandomInt(list.length)]);
    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
