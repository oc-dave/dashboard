"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function WeeklyIncome() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [40, 35, 20, 45, 30, 25, 45],
        borderColor: "#22c55e",
        tension: 0.4,
      },
    ],
  }

  return (
    <div className="p-6 rounded-lg bg-muted">
      <h3 className="text-lg font-semibold mb-4">This Week's Income</h3>
      <Line options={options} data={data} />
    </div>
  )
}

