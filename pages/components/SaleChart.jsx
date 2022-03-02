import {Chart as SaleJS, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend} from 'chart.js'
import { Line } from 'react-chartjs-2';

SaleJS.register( 
  LinearScale, 
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

export default function SaleChart() {
    var data= {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'Decembar'],
      datasets: [
        {
            label: 'Sale',
            data: [5,8,3,12,8,16,12,5,14,4,16,27],
            backgroundColor: [
              'rgba(0,128, 0, 0.4)'
            ],
            fill: true,
            borderColor: [
              'rgba(0,128, 0, 0.4)'
            ],
            tension: 0.1,
            borderWidth: 3,
            borderJoinStyle:'miter'
        },
        {
          label: 'Cost',
            data: [8,9,2,8,5,10,8,2,10,12,8,15],
            backgroundColor: [
             'rgba(255, 0, 0, 0.4)'
            ],
            fill: true,
            borderColor: [
                'rgba(255, 0, 0, 0.4)'
            ],
            tension: 0.1,
            borderWidth: 3
        }
    ]
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
    <Line
      data={data}
      height={150}
      options={options}
    />
  )
}