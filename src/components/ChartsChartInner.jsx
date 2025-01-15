import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";

// Register the required components
ChartJS.register(
  LineElement,
  PointElement,
  BarElement,
  LinearScale,
  CategoryScale
);

const ChartsChartInner = () => {
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Line Chart",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const lineOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Bar Chart",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
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

              <Line data={lineData} options={lineOptions} />

              {/* End Line CHart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Bar CHart</h5>
              {/* Bar Chart */}
              <Bar data={barChartData} options={barChartOptions} />
              {/* End Bar CHart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Pie Chart</h5>
              {/* Pie Chart */}
              <canvas id='pieChart' style={{ maxHeight: 400 }} />
              {/* End Pie CHart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Doughnut Chart</h5>
              {/* Doughnut Chart */}
              <canvas id='doughnutChart' style={{ maxHeight: 400 }} />
              {/* End Doughnut CHart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Radar Chart</h5>
              {/* Radar Chart */}
              <canvas id='radarChart' style={{ maxHeight: 400 }} />
              {/* End Radar CHart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Polar Area Chart</h5>
              {/* Polar Area Chart */}
              <canvas id='polarAreaChart' style={{ maxHeight: 400 }} />
              {/* End Polar Area Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Stacked Bar Chart</h5>
              {/* Stacked Bar Chart */}
              <canvas id='stakedBarChart' style={{ maxHeight: 400 }} />
              {/* End Stacked Bar Chart */}
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Bubble Chart</h5>
              {/* Bubble Chart */}
              <canvas id='bubbleChart' style={{ maxHeight: 400 }} />
              {/* End Bubble Chart */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsChartInner;
