export function RecentRequests() {
    const requests = [
      {
        branch: "Corporate",
        cardType: "Instant",
        quantity: 10,
        status: "Ready",
      },
      {
        branch: "Corporate",
        cardType: "Personalized",
        quantity: 10,
        status: "In Progress",
      },
      {
        branch: "Corporate",
        cardType: "Personalized",
        quantity: 10,
        status: "Acknowledged",
      },
      {
        branch: "Corporate",
        cardType: "Instant",
        quantity: 10,
        status: "Pending",
      },
    ]
  
    return (
      <div className="p-6 rounded-lg bg-muted">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Card Requests</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-muted-foreground">
                <th className="pb-3">Branch</th>
                <th className="pb-3">Card Type</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index} className="text-sm">
                  <td className="py-2">{request.branch}</td>
                  <td>{request.cardType}</td>
                  <td>{request.quantity}</td>
                  <td>
                    <span className={getStatusClass(request.status)}>{request.status}</span>
                  </td>
                  <td>
                    <button className="text-primary hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  function getStatusClass(status) {
    switch (status) {
      case "Ready":
        return "text-green-500"
      case "In Progress":
        return "text-orange-500"
      case "Acknowledged":
        return "text-blue-500"
      case "Pending":
        return "text-muted-foreground"
      default:
        return ""
    }
  }
  
  