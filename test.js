function setUpEvents(){

  var content = document.getElementById("content");
  var button = document.getElementById("show-more");
  
  button.onclick = function(){
  
    if(content.className == "open"){
      /*shrink the box*/
      content.className = "";
      button.innerHTML = "Show More";
      
    } else {
  
      content.className = "open";
      /*expand the box*/
      button.innerHTML = "Show Less";
    }
  };
  
}

window.onload = function () {

  setUpEvents();
  /*we call this function, after the window has been fully loaded*/
}