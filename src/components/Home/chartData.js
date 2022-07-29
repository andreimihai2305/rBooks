import demoBooks from "../demoBooks";

const getChartData = (_labels, _data) => {
  const data = {
      labels: _labels,
      datasets: [{
        label: 'My First Dataset',
        data: _data,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
      }],
    };

    return data;
  
}


const getChartOptions = (titleText) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: titleText,
        color: "white",
        font: {
          size: 20
        }
      },
      background: "white",        
      legend: {
        labels: {
          color: 'white',
          font: {
            size: 18,
  
          }
        }
      }
    }
  };

  return options;
}

const getDataValue = (books) => {
  const inProgress =  books.filter(book => {return book.tags.includes('inProgress')});
  const saved =  books.filter(book => {return book.tags.includes('saved')});
  const read =  books.filter(book => {return book.tags.includes('read')});

  return [inProgress.length, saved.length, read.length];

}

// console.log(getDataValue(demoBooks, "inProgress"));





export {getChartData, getDataValue, getChartOptions};
