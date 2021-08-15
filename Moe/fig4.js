<body>

                                <div id="weatherRadial"><svg width="605" height="730"><g transform="translate(302.5,340)"><g class="textWrapper" transform="translate(-282.5,0)"><text class="title" x="25" y="-300">Global Temperature Anomaly</text><text class="subtitle" x="25" y="-280">January 1850 - August 2016</text><text class="play" x="25" y="-230">▷</text></g><g transform="translate(0,30)"><g><circle class="axisCircles" r="65.9090909090909"></circle><text class="axisText" y="57.90909090909091" dy="0.3em">-1°C</text></g><g><circle class="axisCircles" r="147.72727272727272"></circle><text class="axisText" y="139.72727272727272" dy="0.3em">0°C</text></g><g><circle class="axisCircles" r="229.54545454545453"></circle><text class="axisText" y="221.54545454545453" dy="0.3em">1°C</text></g><text class="january" x="7" y="-275" dy="0.9em">January</text><line class="yearLine" x1="0" y1="-45" x2="0" y2="-275"></line><text class="yearText" x="-22" y="0">1850</text></g><defs><radialGradient id="radial-gradient"><stop offset="0.1" stop-color="#2c7bb6"></stop><stop offset="0.2" stop-color="#00a1c9"></stop><stop offset="0.3" stop-color="#00c4c1"></stop><stop offset="0.4" stop-color="#69e1a8"></stop><stop offset="0.5" stop-color="#cef88f"></stop><stop offset="0.5999999999999999" stop-color="#fcea73"></stop><stop offset="0.7" stop-color="#f7bf47"></stop><stop offset="0.8" stop-color="#f09227"></stop><stop offset="0.9" stop-color="#e66118"></stop><stop offset="1" stop-color="#d7191c"></stop></radialGradient></defs><defs><linearGradient id="legend-weather" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0" stop-color="#2c7bb6"></stop><stop offset="0.11111111111111112" stop-color="#00a1c9"></stop><stop offset="0.22222222222222224" stop-color="#00c4c1"></stop><stop offset="0.3333333333333333" stop-color="#69e1a8"></stop><stop offset="0.4444444444444445" stop-color="#cef88f"></stop><stop offset="0.5555555555555555" stop-color="#fcea73"></stop><stop offset="0.6666666666666666" stop-color="#f7bf47"></stop><stop offset="0.7777777777777778" stop-color="#f09227"></stop><stop offset="0.888888888888889" stop-color="#e66118"></stop><stop offset="1" stop-color="#d7191c"></stop></linearGradient></defs><g class="legendWrapper" transform="translate(0,320)"><rect class="legendRect" x="-200" y="0" rx="4" width="400" height="8" style="fill: url(&quot;#legend-weather&quot;);"></rect><text class="legendTitle" x="0" y="-10" style="text-anchor: middle;">Temperature Anomaly</text><g class="axis" transform="translate(0,10)"><g class="tick" transform="translate(-200,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style="text-anchor: middle;">-1.5°C</text></g><g class="tick" transform="translate(-127.27272727272725,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style="text-anchor: middle;">-1°C</text></g><g class="tick" transform="translate(-54.54545454545453,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style="text-anchor: middle;">-0.5°C</text></g><g class="tick" transform="translate(18.18181818181816,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style="text-anchor: middle;">0°C</text></g><g class="tick" transform="translate(90.90909090909093,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style="text-anchor: middle;">0.5°C</text></g><g class="tick" transform="translate(163.63636363636363,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy=".71em" y="9" x="0" style="text-anchor: middle;">1°C</text></g><path class="domain" d="M-200,6V0H200V6"></path></g></g></g></svg></div>
                                
                                
                                <script> 
                                
                                ///////////////////////////////////////////////////////////////////////////
                                //////////////////// Set up and initiate svg containers ///////////////////
                                /////////////////////////////////////////////////////////////////////////// 
                                
                                var margin = {
                                    top: 70,
                                    right: 20,
                                    bottom: 120,
                                    left: 20
                                };
                                // var width = window.innerWidth - margin.left - margin.right - 20;
                                // var height = window.innerHeight - margin.top - margin.bottom - 20;
                                var width = 625 - margin.left - margin.right - 20;
                                var height = 750 - margin.top - margin.bottom - 20;
                                
                                var domLow = -1.5,  //-15, low end of data
                                    domHigh = 1.25,  //30, high end of data
                                    axisTicks = [-1, 0, 1],   //[-20,-10,0,10,20,30];  [-2,-1,0,1,2,3];  [-1.5,-0.5,0.5,1.5];
                                    duration = 25000; //100000, 50000
                                
                                
                                //SVG container
                                var svg = d3.select("#weatherRadial")
                                    .append("svg")
                                    .attr("width", width + margin.left + margin.right)
                                    .attr("height", height + margin.top + margin.bottom)
                                    .append("g")
                                    .attr("transform", "translate(" + (margin.left + width/2) + "," + (margin.top + height/2) + ")");
                                
                                //Parses a string into a date
                                var parseDate = d3.time.format("%Y-%m-%d").parse;
                                
                                
                                ///////////////////////////////////////////////////////////////////////////
                                //////////////////////////// Create scales ////////////////////////////////
                                ///////////////////////////////////////////////////////////////////////////
                                
                                
                                //Loads data, everything below is within callback: 
                                d3.text("", function(text) {
                                
                                var years = [];
                                
                                var climateData = d3.csv.parseRows(text, function(d) {
                                    var temp = d[0].split('   ').slice(0,2);
                                    //console.log(temp[0].split('/'))
                                    years.push(temp[0].split('/')[0]);
                                    return {date: parseDate(temp[0].replace('/', '-') + '-1'), mean_temp: +temp[1]}  //'-') + '-01'
                                });
                                //var data = d3.csv.parseRows(text);
                                //console.log(climateData);
                                
                                
                                //Set the minimum inner radius and max outer radius of the chart
                                var outerRadius = Math.min(width, height, 500)/2,
                                    innerRadius = outerRadius * 0.1;  //Sets the ratio.  Smaller magnifies differences. 0.1 good, 0.15
                                
                                //Base the color scale on average temperature extremes
                                var colorScale = d3.scale.linear()
                                    .domain([domLow, (domLow+domHigh)/2, domHigh])
                                    .range(["#2c7bb6", "#ffff8c", "#d7191c"])
                                    .interpolate(d3.interpolateHcl);
                                
                                //Scale for the heights of the bar, not starting at zero to give the bars an initial offset outward
                                var distScale = d3.scale.linear()
                                    .range([innerRadius, outerRadius])
                                    .domain([domLow, domHigh]); 
                                
                                //Scale to turn the date into an angle of 360 degrees in total
                                //With the first datapoint (Jan 1st) on top
                                // var angle = d3.scale.linear()
                                //     .range([-180, 180])
                                //     .domain(d3.extent(climateData, function(d) { return d.date; }));
                                
                                //Function to convert date into radians for path function
                                //The radial scale in this case starts with 0 at 90 degrees
                                //http://stackoverflow.com/questions/14404345/polar-plots-using-d3-js
                                var radian = d3.scale.linear()
                                    .range([0, Math.PI*2*(climateData.length/12) ])  
                                    .domain(d3.extent(climateData, function(d) { return d.date; }));
                                
                                
                                ///////////////////////////////////////////////////////////////////////////
                                //////////////////////////// Create Titles ////////////////////////////////
                                ///////////////////////////////////////////////////////////////////////////
                                
                                var textWrapper = svg.append("g").attr("class", "textWrapper")
                                    .attr("transform", "translate(" + Math.max(-width/2, -outerRadius - 170) + "," + 0 + ")");
                                
                                //Append title to the top
                                textWrapper.append("text")
                                    .attr("class", "title")
                                    .attr("x", 25)  //0
                                    .attr("y", -outerRadius - 50)  //-40
                                    .text("Global Temperature Anomaly");
                                
                                //Subtitle:
                                textWrapper.append("text")
                                    .attr("class", "subtitle")
                                    .attr("x", 25)
                                    .attr("y", -outerRadius - 30)
                                    .text('January 1850 - August 2016');
                                
                                //Append play button
                                var play = textWrapper.append("text")
                                    .attr("class", "play")
                                    .attr("x", 25)
                                    .attr("y", -outerRadius + 20)
                                    .text("\u25B7")  //unicode triangle: U+25B2  \u25b2
                                
                                
                                
                                ///////////////////////////////////////////////////////////////////////////
                                ///////////////////////////// Create Axes /////////////////////////////////
                                ///////////////////////////////////////////////////////////////////////////
                                
                                //Wrapper for the bars and to position it downward
                                var barWrapper = svg.append("g")
                                    .attr("transform", "translate(" + 0 + "," + 30 + ")");
                                    
                                //Draw gridlines below the bars
                                var axes = barWrapper.selectAll(".gridCircles")
                                    .data(axisTicks)
                                    .enter().append("g");
                                //Draw the circles
                                axes.append("circle")
                                    .attr("class", "axisCircles")
                                    .attr("r", function(d) { return distScale(d); });
                                //Draw the axis labels
                                axes.append("text")
                                    .attr("class", "axisText")
                                    .attr("y", function(d) { return distScale(d) - 8; })
                                    .attr("dy", "0.3em")
                                    .text(function(d) { return d + "°C"});
                                
                                //Add January for reference
                                barWrapper.append("text")
                                    .attr("class", "january")
                                    .attr("x", 7)
                                    .attr("y", -outerRadius * 1.1)
                                    .attr("dy", "0.9em")
                                    .text("January");
                                //Add a line to split the year
                                barWrapper.append("line")
                                    .attr("class", "yearLine")
                                    .attr("x1", 0)
                                    .attr("y1", -innerRadius * 1.8)  //.65
                                    .attr("x2", 0)
                                    .attr("y2", -outerRadius * 1.1);
                                
                                //Add year in center
                                barWrapper.append("text")
                                    .attr("class", "yearText")
                                    .attr("x", -22)
                                    .attr("y", 0)
                                    //.attr("dy", "0.9em")
                                    .text("1850");
                                
                                ///////////////////////////////////////////////////////////////////////////
                                //////////////// Create radial gradient for the line //////////////////////
                                ///////////////////////////////////////////////////////////////////////////
                                
                                
                                //Extra scale since the color scale is interpolated
                                // var distScale = d3.scale.linear()
                                //     .domain([domLow, domHigh])
                                //     .range([innerRadius, outerRadius]);
                                
                                //Calculate the variables for the temp gradient
                                var numStops = 10;
                                tempRange = distScale.domain();
                                tempRange[2] = tempRange[1] - tempRange[0];
                                tempPoint = [];
                                for(var i = 0; i < numStops; i++) {
                                    tempPoint.push(i * tempRange[2]/(numStops-1) + tempRange[0]);
                                }
                                
                                //Create the radial gradient
                                var radialGradient = svg.append("defs")
                                    .append("radialGradient")
                                    .attr("id", "radial-gradient")
                                    .selectAll("stop") 
                                    .data(d3.range(numStops))               
                                    .enter().append("stop")
                                    .attr("offset", function(d,i) { return distScale(tempPoint[i])/ outerRadius; })      
                                    .attr("stop-color", function(d,i) { return colorScale( tempPoint[i] ); });
                                
                                
                                
                                ///////////////////////////////////////////////////////////////////////////
                                ////////////////////////////// Draw lines /////////////////////////////////
                                ///////////////////////////////////////////////////////////////////////////
                                
                                
                                //Radial line, takes radians as argument
                                //http://stackoverflow.com/questions/18487780/how-to-make-a-radial-line-segment-using-d3-js
                                //http://stackoverflow.com/questions/14404345/polar-plots-using-d3-js
                                var line = d3.svg.line.radial()
                                    .angle(function(d) { return radian(d.date); })  
                                    .radius(function(d) { return distScale(d.mean_temp); });
                                
                                //Append path drawing function to play button
                                play.on("click", function(){
                                
                                    if (d3.select("path.line")) {
                                        d3.select("path.line").remove();
                                    }
                                
                                    //Create path using line function
                                    var path = barWrapper.append("path")
                                        .attr("d", line(climateData))
                                        .attr("class", "line")
                                        .attr("x", -0.75)
                                        .style("stroke", "url(#radial-gradient)")
                                        //.datum(climateData);  attaches all data
                                
                                    var totalLength = path.node().getTotalLength();
                                
                                    path.attr("stroke-dasharray", totalLength + " " + totalLength)
                                        .attr("stroke-dashoffset", totalLength)
                                        .transition()
                                        //Works, but kind of a hack:
                                        .tween("customTween", function() {
                                            return function(t) {
                                                d3.select("text.yearText").text(years[Math.floor(t*years.length-1)])
                                                    .transition()
                                                    .duration(t/1.5);
                                            };
                                        })
                                        .duration(duration)  
                                        .ease("linear")
                                        .attr("stroke-dashoffset", 0);
                                });
                                
                                 
                                ///////////////////////////////////////////////////////////////////////////
                                //////////////// Create the gradient for the legend ///////////////////////
                                ///////////////////////////////////////////////////////////////////////////
                                
                                //Extra scale since the color scale is interpolated
                                var tempScale = d3.scale.linear()
                                    .domain([domLow, domHigh])
                                    .range([0, width]);
                                
                                //Calculate the variables for the temp gradient
                                var numStops = 10;
                                tempRange = tempScale.domain();
                                tempRange[2] = tempRange[1] - tempRange[0];
                                tempPoint = [];
                                for(var i = 0; i < numStops; i++) {
                                    tempPoint.push(i * tempRange[2]/(numStops-1) + tempRange[0]);
                                }//for i
                                
                                //Create the gradient
                                svg.append("defs")
                                    .append("linearGradient")
                                    .attr("id", "legend-weather")
                                    .attr("x1", "0%").attr("y1", "0%")
                                    .attr("x2", "100%").attr("y2", "0%")
                                    .selectAll("stop") 
                                    .data(d3.range(numStops))                
                                    .enter().append("stop") 
                                    .attr("offset", function(d,i) { return tempScale( tempPoint[i] )/width; })   
                                    .attr("stop-color", function(d,i) { return colorScale( tempPoint[i] ); });
                                
                                ///////////////////////////////////////////////////////////////////////////
                                ////////////////////////// Draw the legend ////////////////////////////////
                                ///////////////////////////////////////////////////////////////////////////
                                
                                var legendWidth = Math.min(outerRadius*2, 400);
                                
                                //Color Legend container
                                var legendsvg = svg.append("g")
                                    .attr("class", "legendWrapper")
                                    .attr("transform", "translate(" + 0 + "," + (outerRadius + 70) + ")");
                                
                                //Draw the Rectangle
                                legendsvg.append("rect")
                                    .attr("class", "legendRect")
                                    .attr("x", -legendWidth/2)
                                    .attr("y", 0)
                                    .attr("rx", 8/2)
                                    .attr("width", legendWidth)
                                    .attr("height", 8)
                                    .style("fill", "url(#legend-weather)");
                                    
                                //Append title
                                legendsvg.append("text")
                                    .attr("class", "legendTitle")
                                    .attr("x", 0)
                                    .attr("y", -10)
                                    .style("text-anchor", "middle")
                                    .text("Temperature Anomaly");
                                
                                //Set scale for x-axis
                                var xScale = d3.scale.linear()
                                    .range([-legendWidth/2, legendWidth/2])
                                    .domain([domLow, domHigh] );
                                
                                //Define x-axis
                                var xAxis = d3.svg.axis()
                                    .orient("bottom")
                                    .ticks(5)
                                    .tickFormat(function(d) { return d + "°C"; })
                                    .scale(xScale);
                                
                                //Set up X axis
                                legendsvg.append("g")
                                    .attr("class", "axis")
                                    .attr("transform", "translate(0," + (10) + ")")
                                    .call(xAxis);
                                
                                }); //End data callback
                                
                                </script>
                                
                                
                                
                                
                                
                                </body> 