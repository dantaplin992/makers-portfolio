function highlightText(id) {
  var containers = document.getElementsByClassName(id)
    for (let i = 0; i < containers.length; i++) {
      var text = containers[i].firstChild
      if (text.className === "normal-text") {
        text.className = "highlighted-text"
      } else {
        text.className = "normal-text"
      }
    }
}