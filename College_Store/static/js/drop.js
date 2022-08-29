var subjectObject = {
  "Biology": {
    "B.Vsc": ["Enquiry", "Place Order", "Return", "Cancel"],
    "Bsc Nursing": ["Enquiry", "Place Order", "Return", "Cancel"],
    "Bsc Microbiology": ["Enquiry", "Place Order", "Return", "Cancel"]
  },
  "Commerce": {
    "B Com": ["Enquiry", "Place Order", "Return", "Cancel"],
    "BBA": ["Enquiry", "Place Order", "Return", "Cancel"],
	"BMS": ["Enquiry", "Place Order", "Return", "Cancel"]
  },
  "Engineering": {
    "CE": ["Enquiry", "Place Order", "Return", "Cancel"],
    "CSE": ["Enquiry", "Place Order", "Return", "Cancel"],
	"ECE": ["Enquiry", "Place Order", "Return", "Cancel"]
  },
  "Mathematics": {
    "Bsc Maths": ["Enquiry", "Place Order", "Return", "Cancel"],
    "BA Maths": ["Enquiry", "Place Order", "Return", "Cancel"],
	"Msc Maths": ["Enquiry", "Place Order", "Return", "Cancel"]
  },
  "Political Science": {
    "BA Politics": ["Enquiry", "Place Order", "Return", "Cancel"],
    "MA Politics": ["Enquiry", "Place Order", "Return", "Cancel"],
	"Phd Politics": ["Enquiry", "Place Order", "Return", "Cancel"]
  }
 }
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}