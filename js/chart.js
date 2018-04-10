
    

  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "净值"
      },

      axisX:{
        title: "time",
        gridThickness: 0,
        interval:1, 
        intervalType: "day",        
        valueFormatString: "DD", 
        labelAngle: -20
      },
      axisY:{
        title: "Netvalue"
      },
      data: [
      {        
        type: "line",
        dataPoints: [//array
        {x: new Date(Date.UTC (2018, 03, 1) ), y: 1 },
        {x: new Date( Date.UTC(2018, 03, 2) ), y: 0.95  },
        {x: new Date( Date.UTC(2018, 03, 3) ), y: 0.9 },
        {x: new Date( Date.UTC(2018, 03, 4) ), y: 0.8},
        {x: new Date( Date.UTC(2018, 03, 5) ), y: 0.76},
        {x: new Date( Date.UTC(2018, 03, 6) ), y: 0.85},
        {x: new Date( Date.UTC(2018, 03, 7) ), y: 0.9},
        ]
      },
      {        
        type: "line",
        dataPoints: [//array
        {x: new Date(Date.UTC (2018, 03, 1) ), y: 1 },
        {x: new Date( Date.UTC(2018, 03, 2) ), y: 0.999  },
        {x: new Date( Date.UTC(2018, 03, 3) ), y: 0.9999 },
        {x: new Date( Date.UTC(2018, 03, 4) ), y: 0.980},
        {x: new Date( Date.UTC(2018, 03, 5) ), y: 0.985},
        {x: new Date( Date.UTC(2018, 03, 6) ), y: 0.989},
        {x: new Date( Date.UTC(2018, 03, 7) ), y: 1.001},
        ]
      }
      ]
    });

chart.render();
}
