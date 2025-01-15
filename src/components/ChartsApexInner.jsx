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
              <div id='columnChart' />
              {/* End Column Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Bar Chart</h5>
              {/* Bar Chart */}
              <div id='barChart' />
              {/* End Bar Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Pie Chart</h5>
              {/* Pie Chart */}
              <div id='pieChart' />
              {/* End Pie Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Donut Chart</h5>
              {/* Donut Chart */}
              <div id='donutChart' />
              {/* End Donut Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Radar Chart</h5>
              {/* Radar Chart */}
              <div id='radarChart' />
              {/* End Radar Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Polar Area Chart</h5>
              {/* Polar Area Chart */}
              <div id='polarAreaChart' />
              {/* End Polar Area Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Radial Bar Chart</h5>
              {/* Radial Bar Chart */}
              <div id='radialBarChart' />
              {/* End Radial Bar Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Bubble Chart</h5>
              {/* Bubble Chart */}
              <div id='bubbleChart' />
              {/* End Bubble Chart */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsApexInner;
