
// var svgWidth = 1000;
// var svgHeight = 900;

// var margin = {
//   top: 20,
//   right: 40,
//   bottom: 200,
//   left: 100
// };

// var width = svgWidth - margin.right - margin.left;
// var height = svgHeight - margin.top - margin.bottom;

// // Create an SVG wrapper, append an SVG group that will hold our chart,
// // and shift the latter by left and top margins.
// var svg = d3
//   .select("#scatter")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// // Append an SVG group
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Initial Params
// var chosenXAxis = "year";
// var chosenYAxis = "min_temp";

// // function used for updating x-scale var upon click on axis label
// function xScale(tempData, chosenXAxis) {
//   // create scales
//   var xLinearScale = d3.scaleLinear()
//     .domain([d3.min(tempData, d => d[chosenXAxis]),
//       d3.max(tempData, d => d[chosenXAxis])
//     ])
//     .range([10, width]);

//   return xLinearScale;

// }

// // function used for updating y-scale var upon click on axis label
// function yScale(tempData, chosenYAxis) {
//     // create scales
//     var yLinearScale = d3.scaleLinear()
//       .domain([d3.min(tempData, d => d[chosenYAxis]) * 1.2,
//         d3.max(tempData, d => d[chosenYAxis]) * 1.2
//       ])
//       .range([height, 0]);
  
//     return yLinearScale;
  
//   }

// // function used for updating xAxis var upon click on axis label
// function renderAxesX(newXScale, xAxis) {
//   var bottomAxis = d3.axisBottom(newXScale);

//   xAxis.transition()
//     .duration(1000)
//     .call(bottomAxis);

//   return xAxis;
// }

// // function used for updating yAxis var upon click on axis label
// function renderAxesY(newYScale, yAxis) {
//     var leftAxis = d3.axisLeft(newYScale);
  
//     yAxis.transition()
//       .duration(1000)
//       .call(leftAxis);
  
//     return yAxis;
//   }

// // function used for updating circles group with a transition to
// // new circles
// function renderCircles(circlesGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

//     circlesGroup.transition()
//       .duration(1000)
//       .attr("cx", d => newXScale(d[chosenXAxis]))
//       .attr("cy", d => newYScale(d[chosenYAxis]));
  
//     return circlesGroup;
//   }

// // function for updatingstate labels with a transition to new
// function renderText(textGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {
//     textGroup.transition()
//     .duration(1000)
//     .attr("x", d => newXScale(d[chosenXAxis]))
//     .attr("y", d => newYScale(d[chosenYAxis]));

//     return textGroup;
// }


// // function to style x-axis values for toolip
// function styleX(value, chosenXAxis) {
    
//     //style based on chosen variable
//     if (chosenXAxis === "year") {
//         return `${value}`;
//     }
// }


// // function used for updating circles group with new tooltip
// function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup) {

//   var xlabel;
//   var ylabel;

//   // chosen x axis 
//   if (chosenXAxis === "year") {
//     xlabel = "year:";
//   }
//   // else if (chosenXAxis === "income") {
//   //   xlabel = "Household Income:";
//   // }
//   // else {
//   //   xlabel = "Age:";
//   // }

//   //choosen y axis
//   if (chosenYAxis === "min_temp") {
//       ylabel = "Min Temp:";
//   }
//   else if (chosenYAxis === "max_temp") {
//       ylabel = "Max Temp:";
//   }
//   else {
//       ylabel = "Avg temp:"
//   }

//   // create tooltip
//   var toolTip = d3.tip()
//     .attr("class", "tooltip")
//     .offset([-10, 30])
//     .html(function(d) {
//       return (`${d.country}<br>${xlabel} ${styleX(d[chosenXAxis], chosenXAxis)}<br>${ylabel} ${d[chosenYAxis]} Celcious`);
//     });

//   circlesGroup.call(toolTip);

//   // onmouse over event
//   circlesGroup.on("mouseover", function(data) {
//     toolTip.show(data);
//   })
//     // onmouseout event
//     .on("mouseout", function(data, index) {
//       toolTip.hide(data);
//     });

//   return circlesGroup;
// }

// // Retrieve data from the CSV file and execute everything below
// d3.csv("region_temp.csv").then(function(tempData, err) {
//   if (err) throw err;

//   // parse data
//   tempData.forEach(function(data) {
//     data.min_temp = +data.min_temp;
//     data.max_temp = +data.max_temp;
//     data.avg_temp = +data.avg_temp;
//     data.year = +data.year;
//     data.month = +data.month;
//   });

//   // xLinearScale and yLinearScale function above csv import
//   var xLinearScale = xScale(tempData, chosenXAxis);
//   var yLinearScale = yScale(tempData, chosenYAxis);

//   // Create initial axis functions
//   var bottomAxis = d3.axisBottom(xLinearScale);
//   var leftAxis = d3.axisLeft(yLinearScale);

//   // append x axis
//   var xAxis = chartGroup.append("g")
//     .classed("x-axis", true)
//     .attr("transform", `translate(0, ${height})`)
//     .call(bottomAxis);

//   // append y axis
//   var yAxis = chartGroup.append("g")
//     .classed("y-axis", true)
//     .call(leftAxis);


//   var radius = d3.scaleSqrt([0, 5e8], [0, width / 24])

//   // append initial circles
//   var circlesGroup = chartGroup.selectAll("circle")
//     .data(tempData)
//     .enter()
//     .append("circle")
//     .classed("countryCircle", true)
//     .attr("cx", d => xLinearScale(d[chosenXAxis]))
//     .attr("cy", d => yLinearScale(d[chosenYAxis]))
//     .attr("r",5)
//     .attr("fill", "lightblue")
//     .attr("opacity", "1");

//   // append initial text  
//   // var textGroup = chartGroup.selectAll(".countryText")
//   //   .data(tempData)
//   //   .enter()
//   //   .append("text")
//   //   .classed("countryText", true)
//   //   .attr("x", d => xLinearScale(d[chosenXAxis]))
//   //   .attr("y", d => yLinearScale(d[chosenYAxis]))
//   //   .attr("dy", 5)
//   //   .attr("font-size", "10px")
//   //   .text(function(d){return d.abbr});

//   // Create group for three x-axis labels
//   var xlabelsGroup = chartGroup.append("g")
//     .attr("transform", `translate(${width / 2}, ${height + 20 + margin.top})`);

//   var yearLabel = xlabelsGroup.append("text")
//     .attr("x", 0)
//     .attr("y", 20)
//     .attr("value", "year") // value to grab for event listener
//     .classed("active", true)
//     .classed("aText", true)
//     .text("year");

//   // var ageLabel = xlabelsGroup.append("text")
//   //   .attr("x", 0)
//   //   .attr("y", 40)
//   //   .attr("value", "age") // value to grab for event listener
//   //   .classed("inactive", true)
//   //   .classed("aText", true)
//   //   .text("Age (Median)");

//   //   var incomeLabel = xlabelsGroup.append("text")
//   //   .attr("x", 0)
//   //   .attr("y", 60)
//   //   .attr("value", "income") // value to grab for event listener
//   //   .classed("inactive", true)
//   //   .classed("aText", true)
//   //   .text("Household income (Median)");

//   // Create group for three y-axis labels
//   var ylabelsGroup = chartGroup.append("g")
//     .attr("transform", `translate(${0 - margin.left/4}, ${(height / 2)})`);

//   var minTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -20)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "min_temp") // value to grab for event listener
//     .classed("active", true)
//     .classed("aText", true)
//     .text("Min Temperature");

//     var maxTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -40)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "max_temp") // value to grab for event listener
//     .classed("inactive", true)
//     .text("Max Temperature");

//     var avgTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -60)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "avg_temp") // value to grab for event listener
//     .classed("inactive", true)
//     .text("Avg Temperature");

//   // updateToolTip function above csv import
//   var circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

//   // x axis labels event listener
//   xlabelsGroup.selectAll("text")
//     .on("click", function() {
//       // get value of selection
//       var value = d3.select(this).attr("value");
//       if (value != chosenXAxis) {

//         // replaces chosenXAxis with value
//         chosenXAxis = value;

//         // console.log(chosenXAxis)

//         // functions here found above csv import
//         // updates x scale for new data
//         xLinearScale = xScale(tempData, chosenXAxis);

//         // updates x axis with transition
//         xAxis = renderAxesX(xLinearScale, xAxis);

//         // updates circles with new x values
//         circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

//         //update x axis with new values
//         //textGroup = renderText(textGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

//         // updates tooltips with new info
//         circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

//         // changes classes to change bold text
//         if (chosenXAxis === "year") {
//           yearLabel
//             .classed("active", true)
//             .classed("inactive", false);
//         }
//         // else if (chosenXAxis === "age") {
//         //   povertyLabel
//         //     .classed("active", false)
//         //     .classed("inactive", true);
//         //   ageLabel
//         //     .classed("active", true)
//         //     .classed("inactive", false);
//         //   incomeLabel
//         //     .classed("active", false)
//         //     .classed("inactive", true);
//         // }
//         // else {
//         //   povertyLabel
//         //     .classed("active", false)
//         //     .classed("inactive", true);
//         //   ageLabel
//         //     .classed("active", false)
//         //     .classed("inactive", true);
//         //   incomeLabel
//         //     .classed("active", true)
//         //     .classed("inactive", false);
//         // }
//       }
//     });

//     // y axis labels event listeners 
//     ylabelsGroup.selectAll("text")
//     .on("click", function() {
//       // get value of selection
//       var value = d3.select(this).attr("value");
//       if (value != chosenYAxis) {

//         // replaces chosenYAxis with value
//         chosenYAxis = value;

//         // console.log(chosenYAxis)

//         // functions here found above csv import
//         // updates y scale for new data
//         yLinearScale = yScale(tempData, chosenYAxis);

//         // updates y axis with transition
//         yAxis = renderAxesY(yLinearScale, yAxis);

//         // updates circles with new y values
//         circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

//         //update y axis with new values
//         //textGroup = renderText(textGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

//         // updates tooltips with new info
//         circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

//         // changes classes to change bold text
//         if (chosenYAxis === "min_temp") {
//           minTempLabel
//             .classed("active", true)
//             .classed("inactive", false);
//           maxTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//           avgTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//         }
//         else if (chosenYAxis === "max_temp") {
//           minTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//           maxTempLabel
//             .classed("active", true)
//             .classed("inactive", false);
//           avgTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//         }
//         else {
//           minTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//           maxTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//           avgTempLabel
//             .classed("active", true)
//             .classed("inactive", false);
//         }
//       }
//     });

// }).catch(function(error) {
//   console.log(error);
// });


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// var svgWidth = 1000;
// var svgHeight = 900;

// var margin = {
//   top: 20,
//   right: 40,
//   bottom: 200,
//   left: 100
// };

// var width = svgWidth - margin.right - margin.left;
// var height = svgHeight - margin.top - margin.bottom;

// // Create an SVG wrapper, append an SVG group that will hold our chart,
// // and shift the latter by left and top margins.
// var svg = d3
//   .select("#scatter")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// // Append an SVG group
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Initial Params
// var chosenXAxis = "year";
// var chosenYAxis = "min_temp";

// // function used for updating x-scale var upon click on axis label
// function xScale(tempData, chosenXAxis) {
//   // create scales
//   var xLinearScale = d3.scaleLinear()
//     .domain([d3.min(tempData, d => d[chosenXAxis]),
//       d3.max(tempData, d => d[chosenXAxis])
//     ])
//     .range([0, width]);

//   return xLinearScale;

// }

// // function used for updating y-scale var upon click on axis label
// function yScale(tempData, chosenYAxis) {
//     // create scales
//     var yLinearScale = d3.scaleLinear()
//       .domain([d3.min(tempData, d => d[chosenYAxis]),
//         d3.max(tempData, d => d[chosenYAxis]) * 1])
//       .range([height, 0]);
  
//     return yLinearScale;
  
//   }

// // function used for updating xAxis var upon click on axis label
// function renderAxesX(newXScale, xAxis) {
//   var bottomAxis = d3.axisBottom(newXScale);

//   xAxis.transition()
//     .duration(1000)
//     .call(bottomAxis);

//   return xAxis;
// }

// // function used for updating yAxis var upon click on axis label
// function renderAxesY(newYScale, yAxis) {
//     var leftAxis = d3.axisLeft(newYScale);
  
//     yAxis.transition()
//       .duration(1000)
//       .call(leftAxis);
  
//     return yAxis;
//   }

// // function used for updating circles group with a transition to
// // new circles
// function renderCircles(circlesGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

//     circlesGroup.transition()
//       .duration(1000)
//       .attr("cx", d => newXScale(d[chosenXAxis]))
//       .attr("cy", d => newYScale(d[chosenYAxis]));
  
//     return circlesGroup;
//   }

// // function for updatingstate labels with a transition to new
// function renderText(textGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {
//     textGroup.transition()
//     .duration(1000)
//     .attr("x", d => newXScale(d[chosenXAxis]))
//     .attr("y", d => newYScale(d[chosenYAxis]));

//     return textGroup;
// }


// // function to style x-axis values for toolip
// function styleX(value, chosenXAxis) {
    
//     //style based on chosen variable
//     if (chosenXAxis === "year") {
//         return `${value}`;
//     }
// }


// // function used for updating circles group with new tooltip
// function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup) {

//   var xlabel;
//   var ylabel;

//   // chosen x axis 
//   if (chosenXAxis === "year") {
//     xlabel = "year:";
//   }
//   // else if (chosenXAxis === "income") {
//   //   xlabel = "Household Income:";
//   // }
//   // else {
//   //   xlabel = "Age:";
//   // }

//   //choosen y axis
//   if (chosenYAxis === "min_temp") {
//       ylabel = "Min Temp:";
//   }
//   else if (chosenYAxis === "max_temp") {
//       ylabel = "Max Temp:";
//   }
//   else {
//       ylabel = "Avg temp:"
//   }

//   // create tooltip
//   var toolTip = d3.tip()
//     .attr("class", "tooltip")
//     .offset([-10, 30])
//     .html(function(d) {
//       return (`${d.region}<br>${xlabel} ${styleX(d[chosenXAxis], chosenXAxis)}<br>${ylabel} ${d[chosenYAxis]} Celcious`);
//     });

//   circlesGroup.call(toolTip);

//   // onmouse over event
//   circlesGroup.on("mouseover", function(data) {
//     toolTip.show(data);
//   })
//     // onmouseout event
//     .on("mouseout", function(data, index) {
//       toolTip.hide(data);
//     });

//   return circlesGroup;
// }

// // Retrieve data from the CSV file and execute everything below
// d3.csv("region_temp.csv").then(function(tempData, err) {
//   if (err) throw err;


//   var parseTime = d3.timeParse("%Y")

//   // parse data
//   tempData.forEach(function(data) {
//     data.min_temp = +data.min_temp;
//     data.max_temp = +data.max_temp;
//     data.avg_temp = +data.avg_temp;
//     data.year = parseTime(data.year);
//   });

//   var xTimescale = d3.scaleTime()
//     .domain(d3.extent(tempData), d => d.year)
//     .range([0, width])

//   // xLinearScale and yLinearScale function above csv import
//   var xLinearScale = xScale(tempData, chosenXAxis);
//   var yLinearScale = yScale(tempData, chosenYAxis);

//   // Create initial axis functions
//   var bottomAxis = d3.axisBottom(xLinearScale, xTimescale).tickFormat(d3.timeFormat("%Y"));
//   var leftAxis = d3.axisLeft(yLinearScale);

//   // append x axis
//   var xAxis = chartGroup.append("g")
//     .classed("x-axis", true)
//     .attr("transform", `translate(0, ${height})`)
//     .call(bottomAxis);

//   // append y axis
//   var yAxis = chartGroup.append("g")
//     .classed("y-axis", true)
//     .call(leftAxis);


//   var lineGenerator = d3.line()
//   .x(d => xLinearScale(d[chosenXAxis]))
//   .y(d => yLinearScale(d[chosenYAxis]))

//   console.log(lineGenerator(tempData))

//   // var alineGenerator = d3.line()
//   // .x(d => xLinearScale(d[chosenXAxis]))
//   // .y(d => yLinearScale(d[chosenYAxis]))

//   // chartGroup
//   // .append("path")
//   // .attr("d", alineGenerator(tempData))
//   // .classed("line orange",true)

//   chartGroup
//   .append("path")
//   .attr("d", lineGenerator(tempData))
//   .classed("line green",true)


//   var radius = d3.scaleSqrt([0, 5e8], [0, width / 24])

//   // append initial circles
//   var circlesGroup = chartGroup.selectAll("circle")
//     .data(tempData)
//     .enter()
//     .append("circle")
//     .classed("countryCircle", true)
//     .attr("cx", d => xLinearScale(d[chosenXAxis]))
//     .attr("cy", d => yLinearScale(d[chosenYAxis]))
//     .attr("r", 5)
//     // .attr("r", d => radius(d[chosenYAxis]))
//     .attr("fill", "lightblue")
//     .attr("opacity", "1");



//   // var AsLine = d3.line()
//   // .x(d => xLinearScale(d[chosenXAxis]))
//   // .y(d => yLinearScale(d[chosenYAxis]))

//   // var CarLine = d3.line()
//   // .x(d => xLinearScale(d[chosenXAxis]))
//   // .y(d => yLinearScale(d[chosenYAxis]))

//   // var CenLine = d3.line()
//   // .x(d => xLinearScale(d[chosenXAxis]))
//   // .y(d => yLinearScale(d[chosenYAxis]))

//   // var EuLine = d3.line()
//   // .x(d => xLinearScale(d[chosenXAxis]))
//   // .y(d => yLinearScale(d[chosenYAxis]))

//   // var NaLine = d3.line()
//   // .x(d => xLinearScale(d[chosenXAxis]))
//   // .y(d => yLinearScale(d[chosenYAxis]))

//   // var OcLine = d3.line()
//   // .x(d => xLinearScale(d[chosenXAxis]))
//   // .y(d => yLinearScale(d[chosenYAxis]))

//   // var SaLine = d3.line()
//   // .x(d => xLinearScale(d[chosenXAxis]))
//   // .y(d => yLinearScale(d[chosenYAxis]))


//   // append initial text  
//   // var textGroup = chartGroup.selectAll(".countryText")
//   //   .data(tempData)
//   //   .enter()
//   //   .append("text")
//   //   .classed("countryText", true)
//   //   .attr("x", d => xLinearScale(d[chosenXAxis]))
//   //   .attr("y", d => yLinearScale(d[chosenYAxis]))
//   //   .attr("dy", 5)
//   //   .attr("font-size", "10px")
//   //   .text(function(d){return d.abbr});

//   // Create group for three x-axis labels
//   var xlabelsGroup = chartGroup.append("g")
//     .attr("transform", `translate(${width / 2}, ${height + 20 + margin.top})`);

//   var yearLabel = xlabelsGroup.append("text")
//     .attr("x", 0)
//     .attr("y", 20)
//     .attr("value", "year") // value to grab for event listener
//     .classed("active", true)
//     .classed("aText", true)
//     .text("year");

//   // var ageLabel = xlabelsGroup.append("text")
//   //   .attr("x", 0)
//   //   .attr("y", 40)
//   //   .attr("value", "age") // value to grab for event listener
//   //   .classed("inactive", true)
//   //   .classed("aText", true)
//   //   .text("Age (Median)");

//   //   var incomeLabel = xlabelsGroup.append("text")
//   //   .attr("x", 0)
//   //   .attr("y", 60)
//   //   .attr("value", "income") // value to grab for event listener
//   //   .classed("inactive", true)
//   //   .classed("aText", true)
//   //   .text("Household income (Median)");

//   // Create group for three y-axis labels
//   var ylabelsGroup = chartGroup.append("g")
//     .attr("transform", `translate(${0 - margin.left/4}, ${(height / 2)})`);

//   var minTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -20)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "min_temp") // value to grab for event listener
//     .classed("active", true)
//     .classed("aText", true)
//     .text("Min Temperature");

//     var maxTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -40)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "max_temp") // value to grab for event listener
//     .classed("inactive", true)
//     .text("Max Temperature");

//     var avgTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -60)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "avg_temp") // value to grab for event listener
//     .classed("inactive", true)
//     .text("Avg Temperature");

//   // updateToolTip function above csv import
//   var circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

//   // x axis labels event listener
//   xlabelsGroup.selectAll("text")
//     .on("click", function() {
//       // get value of selection
//       var value = d3.select(this).attr("value");
//       if (value != chosenXAxis) {

//         // replaces chosenXAxis with value
//         chosenXAxis = value;

//         // console.log(chosenXAxis)

//         // functions here found above csv import
//         // updates x scale for new data
//         xLinearScale = xScale(tempData, chosenXAxis);

//         // updates x axis with transition
//         xAxis = renderAxesX(xLinearScale, xAxis);

//         // updates circles with new x values
//         circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

//         //update x axis with new values
//         //textGroup = renderText(textGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

//         // updates tooltips with new info
//         circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

//         // changes classes to change bold text
//         if (chosenXAxis === "year") {
//           yearLabel
//             .classed("active", true)
//             .classed("inactive", false);
//         }
//         // else if (chosenXAxis === "age") {
//         //   povertyLabel
//         //     .classed("active", false)
//         //     .classed("inactive", true);
//         //   ageLabel
//         //     .classed("active", true)
//         //     .classed("inactive", false);
//         //   incomeLabel
//         //     .classed("active", false)
//         //     .classed("inactive", true);
//         // }
//         // else {
//         //   povertyLabel
//         //     .classed("active", false)
//         //     .classed("inactive", true);
//         //   ageLabel
//         //     .classed("active", false)
//         //     .classed("inactive", true);
//         //   incomeLabel
//         //     .classed("active", true)
//         //     .classed("inactive", false);
//         // }
//       }
//     });

//     // y axis labels event listeners 
//     ylabelsGroup.selectAll("text")
//     .on("click", function() {
//       // get value of selection
//       var value = d3.select(this).attr("value");
//       if (value != chosenYAxis) {

//         // replaces chosenYAxis with value
//         chosenYAxis = value;

//         // console.log(chosenYAxis)

//         // functions here found above csv import
//         // updates y scale for new data
//         yLinearScale = yScale(tempData, chosenYAxis);

//         // updates y axis with transition
//         yAxis = renderAxesY(yLinearScale, yAxis);

//         // updates circles with new y values
//         circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

//         //update y axis with new values
//         //textGroup = renderText(textGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

//         // updates tooltips with new info
//         circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

//         // changes classes to change bold text
//         if (chosenYAxis === "min_temp") {
//           minTempLabel
//             .classed("active", true)
//             .classed("inactive", false);
//           maxTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//           avgTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//         }
//         else if (chosenYAxis === "max_temp") {
//           minTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//           maxTempLabel
//             .classed("active", true)
//             .classed("inactive", false);
//           avgTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//         }
//         else {
//           minTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//           maxTempLabel
//             .classed("active", false)
//             .classed("inactive", true);
//           avgTempLabel
//             .classed("active", true)
//             .classed("inactive", false);
//         }
//       }
//     });

// }).catch(function(error) {
//   console.log(error);
// });

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// var svgWidth = 1000;
// var svgHeight = 1000;

// var margin = {
//   top: 20,
//   right: 40,
//   bottom: 200,
//   left: 100
// };

// var width = svgWidth - margin.right - margin.left;
// var height = svgHeight - margin.top - margin.bottom;

// // Create an SVG wrapper, append an SVG group that will hold our chart,
// // and shift the latter by left and top margins.
// var svg = d3
//   .select("#scatter")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// // Append an SVG group
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Initial Params
// var chosenYAxis = "max_temp";

// // function used for updating y-scale var upon click on axis label
// function yScale(tempData, chosenYAxis) {
//     // create scales
//     var yLinearScale = d3.scaleLinear()
//       .domain([d3.min(tempData, d => d[chosenYAxis]* 1.2),
//         d3.max(tempData, d => d[chosenYAxis]) * 1.1])
//       .range([height, 0]);
  
//     return yLinearScale;
  
//   }

// // function used for updating yaxis var upon click on axis label
// function renderaxes(newYscale, yAxis){
//   var bottomAxis = d3.axisLeft(newYscale);

//   yAxis.transition()
//   .duration(1000)
//   .call(bottomAxis)

//   return yAxis;
// }

// // function used for updating circles group with a transtion to new circles
// function renderCircles(circlesGroup, newYscale, chosenYAxis){

//   circlesGroup.transition()
//   .duration(1000)
//   .attr("cy", d => newYscale(d[chosenYAxis]))

//   return circlesGroup;
// }

// // function used for updating circles group with new tooltip
// function updateToolTip(chosenYAxis, circlesGroup){
//   var label;

//   if (chosenYAxis == "min_temp") {
//     label = "Min Temp:";
//   }
//   else if (chosenYAxis == "max_temp") {
//     label = "Max Temp:"
//   }
//   else {
//     label = "Avg Temp:"
//   }

//   var toolTip = d3.tip()
//   .attr("class", "tooltip")
//   .offset ([80,-60])
//   .html(function(d) {
//     return(`${d.region}<br>${label} ${d[chosenYAxis]}`);
//   });

//   circlesGroup.call(toolTip);

//   circlesGroup.on("mouseover", function(data) {
//     toolTip.show(data);
//   })

//   // onmouseout event
//   .on("mouseout", function(data, index) {
//     toolTip.hide(data);
//     });

//   return circlesGroup
// }

// // Retreive data from the csv file and execute everything below
// d3.csv("1980_region_temp_data.csv").then(function(tempData, err) {
//   if (err) throw err;

//   var parseTime = d3.timeParse("%Y");

//   // Parsa Data
//   tempData.forEach(function(data) {
//     data.year = parseTime(data.year);
//     data.min_temp = +data.min_temp;
//     data.max_temp = +data.max_temp;
//     data.avg_temp = +data.avg_temp;
//     data.region = data.region;
//     console.log(data.region)
//   });

//   var regions = tempData.map(d => d.region)

//   // Create the scales for the chart
//   var yLinearScale = yScale(tempData, chosenYAxis)

//   var xScale = d3.scaleBand()
//   .domain(regions)
//   .range([0,width])
//   .padding(0.1)

//   //console.log(regions)

//   // create axis
//   var bottomAxis = d3.axisBottom(xScale);
//   var leftAxis = d3.axisLeft(yLinearScale);

//   // Append x axis
//   var xAxis = chartGroup.append("g")
//   .classed("x-axis", true)
//   .attr("transform", `translate(0, ${height})`)
//   .call(bottomAxis);

//   // append y axis
//   var yAxis = chartGroup.append("g")
//     .classed("y-axis", true)
//     .call(leftAxis);

//   // append initial cricles
//   var circlesGroup = chartGroup.selectAll("cirlce")
//   .data(tempData)
//   .enter()
//   .append("circle")
//   .attr("cx", (d,i) => xScale(d.region[i]))
//   .attr("cy", d => yLinearScale(d[chosenYAxis]))
//   .attr("r", 5)
//   .attr("fill", "red")
//   .attr("opacity",".5");

//   // append x axis
//   chartGroup.append("text")
//   .attr("transform", `translate(${width / 2}, ${height + 20})`)
//   .attr("y", 30)
//   .attr("x", 20)
//   .attr("value", "region")
//   .classed("active", true)
//   .text("Region");


//   //Create group for three y-axis labels
//   var ylabelsGroup = chartGroup.append("g")
//     .attr("transform", `translate(${0 - margin.left/4}, ${(height / 2)})`);

//   var minTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -20)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "min_temp") // value to grab for event listener
//     .classed("active", true)
//     .classed("aText", true)
//     .text("Min Temperature");

//   var maxTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -40)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "max_temp") // value to grab for event listener
//     .classed("inactive", true)
//     .text("Max Temperature");

//   var avgTempLabel = ylabelsGroup.append("text")
//     .attr("x", - (height / 10))
//     .attr("y", -60)
//     // .attr("dy", "1em")
//     .attr("transform", "rotate(-90)")
//     .attr("value", "avg_temp") // value to grab for event listener
//     .classed("inactive", true)
//     .text("Avg Temperature");

//   // updateToolTip function above csv import
//   var circlesGroup = updateToolTip(chosenYAxis, circlesGroup);

//   // y labels event listeners
//   ylabelsGroup.selectAll("text")
//   .on("click", function() {
    
//     // get value of selection
//     var value = d3.select(this).attr("value");
//     if (value !== chosenYAxis) {

//       // replaces chosenYaxis
//       chosenYAxis = value;

//       console.log(chosenYAxis)

//       //functions here found above csv import
//       //updates y scale with new data
//       yLinearScale = yScale(tempData, chosenYAxis)

//       // updates y axis with transition
//       yAxis = renderaxes(yLinearScale, yAxis)

//       //upates circles with new y value
//       circlesGroup = renderCircles(circlesGroup, yLinearScale, chosenYAxis);

//       // updates tooltups with new info
//       circlesGroup - updateToolTip(chosenYAxis, circlesGroup);
      

//     }
//   })

// })

// // set the dimensions and margins of the graph
// var margin = {top: 40, right: 20, bottom: 50, left: 100};
// var width = 260 - margin.left - margin.right;
// var height = 250 - margin.top - margin.bottom;

// //Read the data
// d3.csv("region_temp.csv", function(data) {

//   // group the data: one line per region
//   var tempData = d3.nest()
//     .key(d => d.region)
//     .entries(data);

//   // console log keys
//   var allKeys = tempData.map(d => d.key)

//   //console.log(allKeys)

//   // Add an svg element for each group
//   var svg = d3.select("#scatter")
//     .selectAll("uniqueChart")
//     .data(tempData)
//     .enter()
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform",`translate(${margin.left}, ${margin.top})`);

//   // Add X axis
//   var x = d3.scaleLinear()
//     .domain(d3.extent(data, d => d.year))
//     .range([ 0, width ]);
//   svg
//     .append("g")
//     .attr("transform", `translate(0,${height})`)
//     .call(d3.axisBottom(x).ticks(3))

//   //Add Y axis
//   var y = d3.scaleLinear()
//     .domain(d3.extent(data, d => (+d.avg_temp * 1.8) + 32))
//     .range([ height, 0 ]);
//   svg.append("g")
//     .call(d3.axisLeft(y));


//   // color palette
//   var color = d3.scaleOrdinal()
//     .domain(allKeys)
//     .range(['limegreen','orange','blue','red','purple','lightblue','green','pink'])

//   // Draw the line
//   svg
//     .append("path")
//       .attr("fill", "none")
//       .attr("stroke", d => color(d.key))
//       .attr("stroke-width", 4.5)
//       .attr("d", d=> d3.line()
//           .x(d => x(d.year))
//           .y(d => y((+d.avg_temp * 1.8) + 32))
//           (d.values)
//       )
//   // Add titles
//   svg
//     .append("text")
//     .attr("text-anchor", "start")
//     .attr("y", -5)
//     .attr("x", 0)
//     .text(d => d.key)
//     .style("fill", d => color(d.key))
// });
  


// set the dimensions and margins of the graph
var margin = {top: 40, right: 20, bottom: 50, left: 100};
var width = 260 - margin.left - margin.right;
var height = 250 - margin.top - margin.bottom;

// Append SVG element
var svg = d3.select("#scatter")
  .selectAll("uniqueChart")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)

// Append group element
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)

//Read the data
d3.csv("region_temp.csv",function(data) {

  // group the data: one line per region
  tempData = d3.nest()
    .key(d => d.region)
    .entries(data);

  // console log keys
  var allKeys = tempData.map(d=> d.key)

  //console.log(allKeys)

  // Add X axis
  var xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year))
    .range([ 0, width ]);

  //Add Y axis
  var yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => (+d.avg_temp * 1.8) + 32))
    .range([ height, 0 ]);

  // Create axes
  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale).ticks(3);

  // append axes
  chartGroup.append("g")
  .attr("transform", `translate(0," ${height})`)
  .call(xAxis)

  chartGroup.append("g")
    .call(yAxis)

  // // Add an svg element for each group
  // var svg = d3.select("#scatter")
  //   .selectAll("uniqueChart")
  //   .data(tempData)
  //   .enter()
  //   .append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //     .attr("transform",
  //           "translate(" + margin.left + "," + margin.top + ")");


    // .append("g")
    // .attr("transform", "translate(0," + height + ")")
    // .call(d3.axisBottom(x).ticks(3));


  // svg.append("g")
  //   .call(d3.axisLeft(y));

  // color palette
  var color = d3.scaleOrdinal()
    .domain(allKeys)
    .range(['limegreen','orange','blue','red','purple','lightblue','green','pink'])

  // line generator
  var line = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale((+d.avg_temp * 1.8) + 32))
      (tempData.values)

  // append line
  chartGroup.append("path")
    .data([tempData])
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", d => color(d.key))
    .attr("stroke-width", 4.5)


  // // Draw the line
  // svg
  //   .append("path")
  //     .attr("fill", "none")
  //     .attr("stroke", function(d){ return color(d.key) })
  //     .attr("stroke-width", 4.5)
  //     .attr("d", function(d){
  //       return d3.line()
  //         .x(function(d) { return x(d.year); })
  //         .y(function(d) { return y((+d.avg_temp * 1.8) + 32); })
  //         (d.values)
  //     })
  // Add titles
  svg
    .append("text")
    .attr("text-anchor", "start")
    .attr("y", -5)
    .attr("x", 0)
    .text(d => d.key)
    .style("fill", d => color(d.key))
});