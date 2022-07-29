import React from 'react';
import "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
import {getChartData, getChartOptions, getDataValue} from "./chartData";





const Home = ({books}) => {
  const labels1 = ["Books in progress", "Saved Books", "Books you've read"];
  // console.log(getDataValue(books, "inProgress"));
  // const data1 = [, ]
  // const chartData1 = getChartData();
  const data = getChartData(labels1, getDataValue(books));
  const options = getChartOptions("Books: ")
  return (
      <section>
          <h1 className='page-title'>Home</h1>
          <div className="charts">
          
            <Doughnut data={data} options={options}/>
            <Doughnut data={data} options={options}/>

          </div>

      </section>
  );
}

export default Home;