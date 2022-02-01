var path;


function loadAndDrawImage(url)
{
	var src= document.getElementById("workspace")
	src.style.background="url(" + url + ")"
	src.style.backgroundSize="cover"
	src.style.backgroundRepeat="no-repeat"

}
loadAndDrawImage("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80");

var fileChooser = document.getElementById('fileChooser');

fileChooser.addEventListener('change', handleFileSelect, false);

function handleFileSelect(event)
{
	var files = event.target.files;

	if(files.length === 0)
	{
		return;
	}

	var file = files[0];

	if(file.type !== '' && !file.type.match('image.*'))
	{
		return;
	}
	   window.URL = window.URL || window.webkitURL;

	   var imageURL = window.URL.createObjectURL(file);

	   loadAndDrawImage(imageURL);
}

var textItem = new PointText({
  point: new Point(20, 30),
  fillColor: "black",
  strokeColor: "black",
  strokeWidth: 3,
});



function onMouseDown(event) {
  if (path) {
    path.selected = false;
  }

  path = new Path({
    segments: [event.point],
    strokeColor: "black",
    fullySelected: true,
    strokeWidth: 4,
  });
}

function onMouseDrag(event) {
  path.add(event.point);
}

function onMouseUp(event) {
  var segmentCount = path.segments.length;

  path.simplify(10);

  path.fullySelected = true;

  var newSegmentCount = path.segments.length;
  var difference = segmentCount - newSegmentCount;
  var percentage = 100 - Math.round((newSegmentCount / segmentCount) * 100);
}

