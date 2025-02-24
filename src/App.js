import React from "react";
import { Calendar } from "./components/calendar"; // Use named import
import { DashboardSidebar } from "./components/dashboard-sidebar"; // Use named import
import { DashboardHeader } from "./components/dashboard-header"; // Use named import
import QuickAccess from "./components/quick-access"; // Ensure default export is used
import { Analytics } from "./components/analytics"; // Use named import
import { MonthlyIssuance } from "./components/monthly-issuance"; // Use named import
import { WeeklyIncome } from "./components/weekly-income"; // Use named import
import { RecentRequests } from "./components/recent-requests"; // Use named import
import { CardDistribution } from "./components/card-distribution"; // Use named import

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 relative"> {/* Added relative positioning */}
          <DashboardHeader />
          <hr className="border-b border-border mb-6" />
          <div className="flex justify-between items-center mb-6"> {/* Changed to flex for horizontal alignment */}
            <div className="flex flex-col"> {/* Changed to flex-col for vertical alignment */}
              <h1 className="text-2xl font-semibold">Hi Nazeer, what would you like to do today?</h1>
              <div className="last-login">
                Last login: 26/11/2024 14:39:58
              </div>
            </div>
            <Calendar /> {/* Ensure Calendar is a named export */}
          </div>
          {/* New div for QuickAccess */}
          <div className="mt-4"> {/* Add margin top for spacing */}
            <QuickAccess />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <Analytics />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <MonthlyIssuance />
            <WeeklyIncome />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <RecentRequests />
            <CardDistribution />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App; // Ensure App is exported as default