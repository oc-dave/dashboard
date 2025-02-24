import { ArrowUp } from "lucide-react"

export function Analytics() {
  const stats = [
    {
      title: "Total Active Cards",
      value: "26,478",
      change: "+9%",
      period: "this month",
    },
    {
      title: "Total Personalized Cards",
      value: "15,703",
      change: "+8.5%",
      period: "this month",
    },
    {
      title: "Today's Revenue",
      value: "₦9.3M",
      change: "+6%",
      period: "vs yesterday",
    },
    {
      title: "Pending Requests",
      value: "38",
      label: "Requires attention",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.title} className="p-4 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">{stat.title}</p>
          <p className="text-2xl font-semibold mt-2">{stat.value}</p>
          {stat.change && (
            <div className="flex items-center gap-1 mt-2 text-green-500 text-sm">
              <ArrowUp className="h-4 w-4" />
              <span>{stat.change}</span>
              <span className="text-muted-foreground">{stat.period}</span>
            </div>
          )}
          {stat.label && <p className="mt-2 text-sm text-orange-500">{stat.label}</p>}
        </div>
      ))}
    </div>
  )
}

