// Import necessary dependencies
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const BarChart = ({ expensesData }) => {
  // Sample data structure: { day: 'Monday', expense: 100 }
  const days = expensesData.map((data) => data.day);
  const expenses = expensesData.map((data) => data.expense);
  let n = days.length;
  let color=expensesData.map((data) => data.expense);
  let hcolor=expensesData.map((data) => data.expense);
  for (let i = 0; i < n; i++) {
    color[i] = '#7B68DB';
    hcolor[i] = '#d77d68'
    
  }


  return (
    <div>
       <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: days,
            datasets: [
                    {
                     // Label for bars
                      label: "daywise/expenses",
                      // Data or value of your each variable
                      data: expenses,
                      // Color of each bar
                      backgroundColor: color,
                      hoverBackgroundColor: hcolor,      
                    },
                  ],
          }}
          // Height of graph
          height={300}
          options={{
                  maintainAspectRatio: false,
                  scales: {
                      yAxes: [
                            {
                              ticks: {
                              // The y-axis value will start from zero
                                    beginAtZero: true,
                                  },
                                },
                            ],
                        },
                        legend: {
                            labels: {
                                fontSize: 15,
                            },
                        },
                    }}
                />
    </div>
  );
};

export default BarChart;
