window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "EARNINGS",
      fontSize: 16,
      horizontalAlign: "left",
      padding: 20,
    },
    axisX: {
      valueFormatString: "DD MMM,YY",
    },
    axisY: {
      // title: "Units Sold",
      valueFormatString: "#0",
      suffix: "k",
      stripLines: [
        {
          // value: 60253,
          // label: "Average",
        },
      ],
    },
    legend: {
      cursor: "pointer",
      fontSize: 16,
      itemclick: toggleDataSeries,
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        name: "Total Earnings",
        type: "spline",
        fontSize: 12,
        color: "rgba(83,77,169,.9)",
        // yValueFormatString: " k",
        showInLegend: true,
        dataPoints: [
          { x: 10, y: 10, label: "Sat" },
          { x: 20, y: 30, label: "sun" },
          { x: 30, y: 23, label: "mon" },
          { x: 40, y: 20, label: "tues" },
          { x: 50, y: 50, label: "wednes" },
          { x: 60, y: 30, label: "thurs" },
          { x: 70, y: 58, label: "fri" },
        ],
      },
      {
        name: "Visa Earnings",
        type: "spline",
        fontSize: 12,
        color: "rgba(151,151,216,.9)",
        // yValueFormatString: "#0.## °C",
        showInLegend: true,
        dataPoints: [
          { x: 10, y: 51, label: "Sat" },
          { x: 20, y: 26, label: "sun" },
          { x: 30, y: 39, label: "mon" },
          { x: 40, y: 20, label: "tues" },
          { x: 50, y: 11, label: "wednes" },
          { x: 60, y: 41, label: "thurs" },
          { x: 70, y: 25, label: "fri" },
        ],
      },
      {
        name: "Cash Earnings",
        type: "spline",
        fontSize: 12,
        color: "rgba(254,127,141,.9)",
        // yValueFormatString: "#0.## °C",
        showInLegend: true,
        dataPoints: [
          { x: 10, y: 30, label: "Sat" },
          { x: 20, y: 20, label: "sun" },
          { x: 30, y: 55, label: "mon" },
          { x: 40, y: 20, label: "tues" },
          { x: 50, y: 25, label: "wednes" },
          { x: 60, y: 45, label: "thurs" },
          { x: 70, y: 9, label: "fri" },
        ],
      },
    ],
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

  var chart = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    title: {
      text: "Expenses",
      fontSize: 16,
      horizontalAlign: "left",
      padding: 20,
    },
    legend: {
      markerMargin: 8,
    },
    axisX: {
      interval: 10,
    },
    axisY: {
      valueFormatString: "#0",
      suffix: "k",
    },
    data: [
      {
        type: "spline",
        showInLegend: true,
        legendText: "Total Expenses",
        // xValueFormatString: "DD MMM",
        color: "#F08080",
        dataPoints: [
          { x: 10, y: 10, label: "Sat" },
          { x: 20, y: 25, label: "sun" },
          { x: 30, y: 20, label: "mon" },
          { x: 40, y: 40, label: "tues" },
          { x: 50, y: 22, label: "wednes" },
          { x: 60, y: 18, label: "thurs" },
          { x: 70, y: 50, label: "fri" },
        ],
      },
    ],
  });
  chart.render();

  var chart = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    title: {
      text: "EARNINGS",
      fontSize: 16,
      horizontalAlign: "left",
      padding: 20,
    },
    axisX: {
      valueFormatString: "MMM",
      interval: 1,
      intervalType: "month",
    },
    axisY: {
      includeZero: false,
    },
    axisY: {
      // title: "Units Sold",
      valueFormatString: "#0",
      suffix: "k",
      stripLines: [
        {
          // value: 60253,
          // label: "Average",
        },
      ],
    },
    data: [
      {
        type: "spline",
        color: "rgba(162,0,10,.9)",
        showInLegend: true,
        legendText: "Total Expenses",
        dataPoints: [
          { x: new Date(2012, 00, 1), y: 28 },
          { x: new Date(2012, 01, 1), y: 34 },
          { x: new Date(2012, 02, 1), y: 59 },
          { x: new Date(2012, 03, 1), y: 40 },
          { x: new Date(2012, 04, 1), y: 13 },
          { x: new Date(2012, 05, 1), y: 9 },
          { x: new Date(2012, 06, 1), y: 38 },
          { x: new Date(2012, 07, 1), y: 42 },
          { x: new Date(2012, 08, 1), y: 11 },
          { x: new Date(2012, 09, 1), y: 21 },
          { x: new Date(2012, 10, 1), y: 50 },
          { x: new Date(2012, 11, 1), y: 36 },
        ],
      },
    ],
  });
  chart.render();

  var chart = new CanvasJS.Chart("chartContainer4", {
    animationEnabled: true,
    title: {
      text: "Expenses",
      fontSize: 16,
      horizontalAlign: "left",
      padding: 20,
    },
    legend: {
      markerMargin: 8,
    },
    axisY: {
      // title: "Units Sold",
      valueFormatString: "#",
      suffix: "k",
      stripLines: [
        {
          // value: 60253,
          // label: "Average",
        },
      ],
    },
    axisX: {
      interval: 10,
    },
    data: [
      {
        type: "spline",
        showInLegend: true,
        legendText: "Week wise population",
        dataPoints: [
          { x: 10, y: 51, label: "Sat" },
          { x: 20, y: 26, label: "sun" },
          { x: 30, y: 39, label: "mon" },
          { x: 40, y: 20, label: "tues" },
          { x: 50, y: 11, label: "wednes" },
          { x: 60, y: 41, label: "thurs" },
          { x: 70, y: 25, label: "fri" },
        ],
      },
    ],
  });
  chart.render();
};
