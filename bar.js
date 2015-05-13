//Width and height
var w = 500;
var h = 100;
var barPadding = 1;

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
	return i * (w / dataset.length);
    })
    .attr("y", function(d) {
	return h - d * 4;
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function(d) {
	return d * 4;
    })
    .attr("fill", "teal");
