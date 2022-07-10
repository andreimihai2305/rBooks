import React from 'react';
import './Home.css';
import "chart.js/auto";
import {Doughnut} from "react-chartjs-2";


function Home() {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
        }],

        

        // options :{
        //        labels: {
        //           fontColor: 'red' //set your desired color
        //        }
        //  }
      };

    const options = {
      plugins: {
        title: {
          display: true,
          text: "First Chart",
          color: "white"
        },
        background: {color: 'white'},        
        legend: {
          labels: {
            color: 'white',
            font: {
              size: 18
            }
          }
        }
      }
    }


    return (
        <div style={{"maxWidth": "400px"}}>

            <h1>Home</h1>
            <Doughnut data={data}  options={options}/>
        </div>
    );
}

export default Home;