// set the dimensions and margins of the graph
var margin = {top: 40, right: 20, bottom: 50, left: 100};
var width = 260 - margin.left - margin.right;
var height = 250 - margin.top - margin.bottom;

//Read the data
d3.csv("region_temp.csv", function(data) {

  // group the data: one line per region
  var tempData = d3.nest()
    .key(d => d.region)
    .entries(data);

  // console log keys
  var allKeys = tempData.map(d => d.key)

  //console.log(allKeys)

  // Add an svg element for each group
  var svg = d3.select("#scatter")
    .selectAll("uniqueChart")
    .data(tempData)
    .enter()
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",`translate(${margin.left}, ${margin.top})`);

  // Add X axis
  var x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year))
    .range([ 0, width ]);
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(3))

  //Add Y axis
  var y = d3.scaleLinear()
    .domain(d3.extent(data, d => (+d.avg_temp * 1.8) + 32))
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));


  // color palette
  var color = d3.scaleOrdinal()
    .domain(allKeys)
    .range(['limegreen','orange','blue','red','purple','lightblue','green','pink'])

  // Draw the line
  svg
    .append("path")
      .attr("fill", "none")
      .attr("stroke", d => color(d.key))
      .attr("stroke-width", 4.5)
      .attr("d", d=> d3.line()
                      .x(d => x(d.year))
                      .y(d => y((+d.avg_temp * 1.8) + 32))
                        (d.values)
      )
  // Add titles
  svg
    .append("text")
    .attr("text-anchor", "start")
    .attr("y", -5)
    .attr("x", 0)
    .text(d => d.key)
    .style("fill", d => color(d.key))
});
