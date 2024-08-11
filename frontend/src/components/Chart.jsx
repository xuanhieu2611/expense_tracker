import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"

import { Line } from "react-chartjs-2"
import { useGlobalContext } from "../contexts/globalContext"
import { dateFormat } from "../utils/dateFormat"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)
export default function Chart() {
  const { incomes, expenses } = useGlobalContext()
  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc
      return dateFormat(date)
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income
            return amount
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense
            return amount
          }),
        ],
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  }
  return (
    <div className=" bg-gray-200 border-2 border-white shadow-[0_1px_15px_rgba(0,0,0,0.06)] p-4 border-lg rounded-lg">
      <Line data={data} />
    </div>
  )
}
