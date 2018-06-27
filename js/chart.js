

// Load charting api from google
google.charts.load('current', {'packages':['corechart', 'timeline']})

// create request object for data
function getUseData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "https://api.eia.gov/series/?api_key=19f161a829f50e795db12f9a3c37b270&series_id=SEDS.TETCB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawChartLine(theActualData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}

function getRenewData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "https://api.eia.gov/series/?api_key=19f161a829f50e795db12f9a3c37b270&series_id=SEDS.TETCB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawChartLine(theActualData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}


google.charts.setOnLoadCallback(drawChart1);


function drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Total Consumption', 'Renewables'],
          ['2015',803865,234192],
          ['2014',771379,226863],
          ['2013',757189,229666],
          ['2012',752941,220020],
          ['2011',768009,222956],
          ['2010',788887,223518],
          ['2009',766848,213642],
          ['2008',771702,195232],
          ['2007',788461,190489],
          ['2006',778685,185564],
          ['2005',767622,183175],
          ['2004',745810,179462],
          ['2003',741696,188473],
          ['2002',718136,174327],
          ['2001',684966,158038],
          ['2000',668216,194952],
          ['1999',638966,204114],
          ['1998',639254,205485],
          ['1997',597240,231308],
          ['1996',586291,240343],
          ['1995',571483,220211],
          ['1994',544365,215563],
          ['1993',521176,217028],
          ['1992',501598,230779],
          ['1991',499299,212955],
          ['1990',489741,198986],
          ['1989',472473,232261],
          ['1988',444382,113802],
          ['1987',417862,107606],
          ['1986',398095,116356],
          ['1985',379307,110698],
          ['1984',353246,108740],
          ['1983',329216,91705],
          ['1982',315744,104674],
          ['1981',317921,83117],
          ['1980',309694,90049],
          ['1979',295551,69419],
          ['1978',289031,65357],
          ['1977',270767,59953],
          ['1976',252408,56507],
          ['1975',242096,50007],
          ['1974',235482,52429],
          ['1973',237104,56250],
          ['1972',209665,54389],
          ['1971',188564,49968],
          ['1970',171346,51035],
          ['1969',153032,51489],
          ['1968',135509,49556],
          ['1967',119314,44550],
          ['1966',108610,42760],
          ['1965',95878,39916],
          ['1964',87016,39016],
          ['1963',78258,38613],
          ['1962',71216,35826],
          ['1961',62705,34417],
          ['1960',57344,35680]
    ]);

    var options = {
      title: 'Florida Energy Consumption',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}, showTextEvery: 4, direction: -1 },
      vAxis: {minValue: 0, title: 'BTU in Billions'}
      
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

