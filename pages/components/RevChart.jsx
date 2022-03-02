import {Chart as ChartJS, BarElement, LinearScale, CategoryScale, PointElement, LineElement, Tooltip} from 'chart.js'
import { Bar } from 'react-chartjs-2';

ChartJS.register( 
  LinearScale, 
  CategoryScale, 
  BarElement,
  PointElement,
  LineElement,
  Tooltip
)

export default function RevChart() {
    var data= {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'Decembar'],
      datasets: [{
          label: 'Revenue',
          data: [12,22,16,17,11,16,18,19,12,10,18,28],
          backgroundColor: [
              'rgba(255,140,0, .3)'
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