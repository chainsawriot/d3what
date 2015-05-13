//Width and height
var w = 1000;
var h = 300;

//Data
var dataset = [ 5, 10, 15, 20, 25 ];

//Create SVG element
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", function(d, i) {
    return (i * 50) + 25;
})
    .attr("cy", h/2)
    .attr("fill", function(d) {
	if (d > 10) {
	    return "red";
	} else {
	    return "yellow";
	}
    })
    .attr("stroke", "orange")
    .attr("stroke-width", function(d) {
	return d/5;
    })
    .attr("r", function(d) {
	return d;
    });

// cx,cy are the center of circle
