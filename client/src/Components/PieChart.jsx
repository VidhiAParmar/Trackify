import React from 'react'
import {Pie} from "react-chartjs-2"

const PieChart = ({pieData}) => {
  const category = pieData.map((data) => data.category);
  const expenses = pieData.map((data) => data.expense);
  const color = pieData.map((data)=> data.color);
  let hcolor=pieData.map((data)=> data.color);;
  for (let index = 0; index < color.length; index++) {
      hcolor[index]='#b9b2da';
  }
  const options = {
    plugins: {
      legend: {
        display: false, // Display legend to the right side
      },
    },
    maintainAspectRatio: false, // Set to false to allow custom width and height
  };
  return (
   
    <div>
      <Pie
          data={{
            labels: category,
            datasets: [
              {
                data: expenses,
                backgroundColor: color,
                hoverBackgroundColor: hcolor,
              },
            ],
          }}
          options={options}
          width={300}
          height={300}
        />
    </div>
  )
}

export default PieChart
