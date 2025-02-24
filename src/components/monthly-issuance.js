"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function MonthlyIssuance() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const data = {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Personalized",
        data: [20, 30, 15, 25, 20, 35, 25],
        backgroundColor: "#2563eb",
      },
      {
        label: "Instant",
        data: [30, 40, 20, 35, 25, 45, 35],
        backgroundColor: "#93c5fd",
      },
    ],
  }

  return (
    <div className="p-6 rounded-lg bg-muted">
      <h3 className="text-lg font-semibold mb-4">Monthly Issuance</h3>
      <Bar options={options} data={data} />
    </div>
  )
}

