


// set the dimensions and margins of the graph
var margin = {top: 30, right: 10, bottom: 30, left: 90},
    width = 310 - margin.left - margin.right,
    height = 210 - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);    

var parseTime = d3.timeParse("%Y");
var years= []
  //Read the data
d3.csv("region_temp.csv", function(data) {
  data.forEach(function(d){
    // d.year = parseTime(d.year)
    d.avg_temp = +d.avg_temp
    years.push(d.year.slice(0,4)); 
  });
  
  console.log(data);

  


  // group the data: I want to draw one line per group
  var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
    .key(function(d) { return d.region;})
    .entries(data);
    console.log(sumstat);

  // What is the list of groups?
  allKeys = sumstat.map(function(d){return d.key})
  console.log(allKeys);

var yearstat = d3.nest()
    .key(function(d) {return d.year;})
    .entries(data);
    console.log(yearstat);

Allyear = yearstat.map(function(d) {return d.key})
 console.log(Allyear);    

  // Add an svg element for each group. The will be one beside each other and will go on the next row when no more room available
  // var svg = d3.select("#scatter")
  //   .selectAll("uniqueChart")
  //   .data(sumstat)
  //   .enter()
  //   .append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //     .attr("transform",
  //           "translate(" + margin.left + "," + margin.top + ")");

  // Add X axis --> it is a date format
  var x = d3.scaleLinear()
    .domain(d3.extent(Allyear))
    .range([ 0, width ]);
    
  chartGroup
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(3));

  //Add Y axis
  var y = d3.scaleLinear()
    .domain([25, d3.max(d => d.avg_temp)])
    .range([ height, 0 ]);

  svg.append("g")
    .call(d3.axisLeft(y).ticks(5));

  // color palette
  var color = d3.scaleOrdinal()
    .domain(allKeys)
    .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

  // Draw the line
  svg
    .append("path")
      .attr("fill", "none")
      .attr("stroke", function(d){ return color(d.key) })
      .attr("stroke-width", 1.9)
      .attr("d", function(d){
        return d3.line()
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y((+d.avg_temp *1.8) + 32 ); })
          (d.values)
      })

  // Add titles
  svg
    .append("text")
    .attr("text-anchor", "start")
    .attr("y", -5)
    .attr("x", 0)
    .text(function(d){ return(d.key)})
    .style("fill", function(d){ return color(d.key) })

});
