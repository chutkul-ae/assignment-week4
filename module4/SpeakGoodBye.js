(function(window){

var byeSpeaker = {};
var speakWord = "Good Bye";

byeSpeaker.speak = function(names) {
  //byeSpeaker.name = names
  console.log(speakWord + " " + names);
}

window.byeSpeaker = byeSpeaker;

})(window);