import React from "react";
import ApexCharts from "react-apexcharts";
const ChartsApexInner = () => {
  const LineChartConfig = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  const AreachartOptions = {
    series: [
      {
        name: "STOCK ABC",
        data: [
          8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
          8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9,
          8496.25, 8600.65, 8881.1, 9340.85,
        ],
      },
    ],
    option: {
      chart: {
        type: "area",
        height: 350,
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "straight" },
      subtitle: {
        text: "Price Movements",
        align: "left",
      },
      labels: [
        "13 Nov 2017",
        "14 Nov 2017",
        "15 Nov 2017",
        "16 Nov 2017",
        "17 Nov 2017",
        "20 Nov 2017",
        "21 Nov 2017",
        "22 Nov 2017",
        "23 Nov 2017",
        "24 Nov 2017",
        "27 Nov 2017",
        "28 Nov 2017",
        "29 Nov 2017",
        "30 Nov 2017",
        "01 Dec 2017",
        "04 Dec 2017",
        "05 Dec 2017",
        "06 Dec 2017",
        "07 Dec 2017",
        "08 Dec 2017",
      ],
      xaxis: { type: "datetime" },
      yaxis: { opposite: true },
      legend: { horizontalAlign: "left" },
    },
  };
  const ColumnChartOptions = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `$ ${val} thousands`;
          },
        },
      },
    },
  };

  const BarChartOptions = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    },
  };
  const PieChartOptions = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        height: 350,
        type: "pie",
        toolbar: {
          show: true,
        },
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    },
  };

  const DonutChartOptions = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        height: 350,
        type: "donut",
        toolbar: {
          show: true,
        },
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    },
  };

  const RadarChartOptions = {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
    },
  };

  const PolarChartOptions = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
      chart: {
        type: "polarArea",
        height: 350,
        toolbar: {
          show: true,
        },
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
    },
  };

  const RadialChartOptions = {
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // Custom formatter for total
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
  };

  const generateData = (baseval, count, yrange) => {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  };

  const BubbleChartOptions = {
    series: [
      {
        name: "Bubble1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Bubble2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Bubble3",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Bubble4",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    options: {
      chart: {
        height: 333,
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.8,
      },
      xaxis: {
        tickAmount: 12,
        type: "category",
      },
      yaxis: {
        max: 70,
      },
    },
  };
  return (
    <section className='section'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Line Chart</h5>
              {/* Line Chart */}
              <ApexCharts
                options={LineChartConfig.options}
                series={LineChartConfig.series}
                type='line'
                height={350}
              />
              {/* End Line Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Area Chart</h5>
              {/* Area Chart */}
              <ApexCharts
                options={AreachartOptions.option}
                series={AreachartOptions.series}
                type='area'
                height={350}
              />
              {/* End Area Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Column Chart</h5>
              {/* Column Chart */}
              <ApexCharts
                options={ColumnChartOptions.options}
                series={ColumnChartOptions.series}
                type='bar'
                height={350}
              />
              {/* End Column Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Bar Chart</h5>
              {/* Bar Chart */}
              <ApexCharts
                options={BarChartOptions.options}
                series={BarChartOptions.series}
                type='bar'
                height={350}
              />
              {/* End Bar Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Pie Chart</h5>
              {/* Pie Chart */}
              <ApexCharts
                options={PieChartOptions.options}
                series={PieChartOptions.series}
                type='pie'
                height={350}
              />
              {/* End Pie Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Donut Chart</h5>
              {/* Donut Chart */}
              <ApexCharts
                options={DonutChartOptions.options}
                series={DonutChartOptions.series}
                type='donut'
                height={350}
              />
              {/* End Donut Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Radar Chart</h5>
              {/* Radar Chart */}
              <ApexCharts
                options={RadarChartOptions.options}
                series={RadarChartOptions.series}
                type='radar'
                height={350}
              />
              {/* End Radar Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Polar Area Chart</h5>
              {/* Polar Area Chart */}
              <ApexCharts
                options={PolarChartOptions.options}
                series={PolarChartOptions.series}
                type='polarArea'
                height={350}
              />
              {/* End Polar Area Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Radial Bar Chart</h5>
              {/* Radial Bar Chart */}
              <ApexCharts
                options={RadialChartOptions.options}
                series={RadialChartOptions.series}
                type='radialBar'
                height={350}
              />
              {/* End Radial Bar Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Bubble Chart</h5>
              {/* Bubble Chart */}
              <ApexCharts
                options={BubbleChartOptions.options}
                series={BubbleChartOptions.series}
                type='bubble'
                height={333}
              />
              {/* End Bubble Chart */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsApexInner;
