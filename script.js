// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

(function() {
  var names = ["Chandan", "Kumar", "Anjani", "Amit", "Vivek", "Franky", "John", "Doe", "Laravel", "Jimmy"];
  for (name in names) {
    name = names[name];
    if (name[0].toLowerCase()=='j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();