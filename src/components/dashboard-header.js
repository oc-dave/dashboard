import { Bell, Search, User } from 'lucide-react'

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img 
          src="/home-03.png" 
          alt="house-icon" 
          className="w-[18px] h-[18px]"
        />
        <h1 className="text-md font-medium font-satoshi" style={{ color: '#001735'}} >Dashboard</h1> {/* Use custom class */}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-3xl bg-white text-sm focus:outline-none border-2 border-gray-300" // Added grey border
          />
        </div>
        <button className="p-2 hover:bg-muted rounded-full">
          <Bell className="h-5 w-5" style={{color:'#475467'}}/>
        </button>
        <button className="flex items-center gap-2 p-2 hover:bg-muted rounded-full">
        <User className="h-6 w-6" style={{color:'#475467'}} />
        </button>
      </div>
    </header>
  )
}