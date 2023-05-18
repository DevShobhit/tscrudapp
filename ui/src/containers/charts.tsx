import { useQuery } from 'react-query'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Covid Cases Data',
    },
  },
}

export const Charts = (): JSX.Element => {
  const fetchdata = async () => {
    const res = await axios.get(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    )
    return res.data
  }

  const { data, isLoading, isError } = useQuery('chartData', fetchdata)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  const labels = Object.keys(data.cases)
  const casesdata = Object.values(data.cases)
  const recovereddata = Object.values(data.recovered)
  const deathdata = Object.values(data.deaths)

  const chartdata = {
    labels,
    datasets: [
      {
        label: 'Cases',
        data: casesdata,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Recovered',
        data: recovereddata,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
      },
      {
        label: 'Deaths',
        data: deathdata,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <div className='p-6 text-center pt-20 lg:ml-60 '>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg min-h-[80vh]'>
        <Line options={options} data={chartdata} />
      </div>
    </div>
  )
}
