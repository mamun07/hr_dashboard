import {Chart as ChartJS, BarElement, LinearScale, CategoryScale} from 'chart.js'
import { Bar } from 'react-chartjs-2';
ChartJS.register( LinearScale, CategoryScale, BarElement )

export default function Chart() {
    var data= {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'Decembar'],
      datasets: [{
          label: 'Yearly Earning',
          data: [12,22,16,17,11,16,18,19,12,10,18,28],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  }
  var options = {
    maintainAspectRation: true,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    legend : {
      labels:{
        fontSize: 26
      }
    }
  }
  return (
    <Bar
      data={data}
      height={150}
      options={options}
    />
  )
}