var path;

var textItem = new PointText({
	point: new Point(20, 30),
	fillColor: 'black',
    strokeColor: 'black',
    
});

function onMouseDown(event) {
	if (path) {
		path.selected = false;
	}

	path = new Path({
		segments: [event.point],
		strokeColor: 'black',
		fullySelected: true
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
	var percentage = 100 - Math.round(newSegmentCount / segmentCount * 100);
}