

// Load charting api from google
google.charts.load('current', {'packages':['corechart', 'timeline']})

function getData(){
  // Create a new request object
  let requestRenew = new XMLHttpRequest()
  let requestTotal = new XMLHttpRequest()
  // TODO: obfuscate API key
  let requestRenewUrl = "https://api.eia.gov/series/?api_key=b6b60a6ac15a098ad64d3b59dffc6ce3&series_id=SEDS.REPRB.FL.A"
  let requestTotalUrl ="https://api.eia.gov/series/?api_key=b6b60a6ac15a098ad64d3b59dffc6ce3&series_id=SEDS.TETCB.FL.A"
  // Open a connection
  requestRenew.open('GET', requestRenewUrl, true)
  requestTotal.open('GET', requestTotalUrl, true)
  // Callback for when the request completes
  //TODO: pass both sets of data to the same chart!
  requestRenew.onload = function(){
    let renewData = JSON.parse(requestRenew.response).series[0].data
    drawChart1(renewData)
  }
  requestTotal.onload = function(){
    let totalData = JSON.parse(requestTotal.response).series[0].data
    drawChart2(totalData)
  }
  // Callback for when there's an error
  requestRenew.error = function(err){
    console.log("Renew error is: ", err)
  }
  requestTotal.error = function(err){
    console.log("Total error is: ", err)
  }
  // Send the request to the specified URL
  requestRenew.send()
  requestTotal.send()
}


google.charts.setOnLoadCallback(getData);
// TODO: Format and present data to function!
function drawChart1(newData) {
    newData.unshift(["Year", "Renewable Prodcution"])
    var data = google.visualization.arrayToDataTable(newData);

    var options = {
      title: 'Florida Renewable Production',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}, showTextEvery: 4, direction: -1 },
      vAxis: {minValue: 0, title: 'BTU in Billions'}
      
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

function drawChart2(newData) {
    newData.unshift(["Year", "Total Consumption"])
    var data = google.visualization.arrayToDataTable(newData);

    var options = {
      title: 'Total Florida Energy Consumption',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}, showTextEvery: 4, direction: -1 },
      vAxis: {minValue: 0, title: 'BTU in Billions'}
      
    };

    var chart2 = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart2.draw(data, options);
}

