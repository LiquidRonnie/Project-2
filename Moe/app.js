//Loads data, everything below is within callback: 
d3.text("yearly avg temp.csv", function(text) {
                                
    var years = [];
    
    var climateData = d3.csv.parseRows(text, function(d) {
        var temp = d[0].split('   ').slice(0,2);
        //console.log(temp[0].split('/'))
        years.push(temp[0].split('/')[0]);
        return {date: parseDate(temp[0].replace('/', '-') + '-1'), mean_temp: +temp[1]}  //'-') + '-01'
    });
    var data = d3.csv.parseRows(text);
}
    console.log(climateData)
