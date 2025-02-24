"use client"

import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export function CardDistribution() {
  const data = {
    labels: ["Active", "Expired", "Inactive", "Blocked", "Lost"],
    datasets: [
      {
        data: [1200, 600, 400, 150, 100],
        backgroundColor: ["#06b6d4", "#fbbf24", "#2563eb", "#c026d3", "#ef4444"],
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    cutout: "70%",
  }

  return (
    <div className="p-6 rounded-lg bg-muted">
      <h3 className="text-lg font-semibold mb-4">Card Status Distribution</h3>
      <div className="relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-sm text-muted-foreground">Total Cards</p>
          <p className="text-2xl font-semibold">2,450</p>
        </div>
      </div>
    </div>
  )
}

