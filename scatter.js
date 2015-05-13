var w = 500;
var h = 100;

var dataset = [
    [5, 20, 3],
    [480, 90, 5],
    [250, 50, 10],
    [100, 90, 2]
];

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
	return d[0];
    })
    .attr("cy", function(d) {
	return d[1];
    })
    .attr("r", function(d) {
	return d[2];
    })

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
	return d[0] + "," + d[1];
    })
    .attr("x", function (d) {
	return d[0];
    })
    .attr("y", function (d) {
	return d[1];
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "blue")
