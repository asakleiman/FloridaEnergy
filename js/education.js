var univ = [
  {name: "University of Florida",
    url: "http://www.ufl.edu/",
    imgSource: ""
  },{name: "Florida State University",
    url: "http://www.fsu.edu/",
    imgSource: ""
  },{name: "University of Central Florida",
    url: "http://www.ucf.edu/",
    imgSource: ""
  },{name: "University of South Florida",
    url: "http://www.usf.edu/",
    imgSource: ""
  },{name: "Florida Agricultural and Mechanical University",
    url: "http://www.famu.edu/",
    imgSource: ""
  },{name: "Florida Atlantic University",
    url: "http://www.fau.edu/",
    imgSource: ""
  },{name: "Florida Gulf Coast University",
    url: "https://www.fgcu.edu/",
    imgSource: ""
  },{name: "Florida International University",
    url: "https://www.fiu.edu/",
    imgSource: ""
  },{name: "New College of Florida",
    url: "https://www.ncf.edu/",
    imgSource: ""
  },{name: "University of North Florida",
    url: "http://www.unf.edu/",
    imgSource: ""
  },{name: "University of West Florida",
    url: "http://uwf.edu/",
    imgSource: ""
  },{name: "Florida Polytechnic University",
    url: "https://floridapolytechnic.org/",
    imgSource: ""
  }
]

var app = new Vue ({
  el: '#app',
  data: {
    institutions: univ
  }
})