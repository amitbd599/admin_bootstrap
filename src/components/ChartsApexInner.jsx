import React from "react";
import ApexCharts from "react-apexcharts";
const ChartsApexInner = () => {
  const chartConfig = {
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
  return (
    <section className='section'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Line Chart</h5>
              {/* Line Chart */}
              <ApexCharts
                options={chartConfig.options}
                series={chartConfig.series}
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
              <div id='areaChart' />
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
