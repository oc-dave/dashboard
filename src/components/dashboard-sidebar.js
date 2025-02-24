import { 
  LayoutDashboard, 
  Building2, 
  UserCheck, 
  Users, 
  Settings2, 
  CreditCard, 
  List, 
  Layers, 
  Map, 
  User, 
  LogOut 
} from 'lucide-react'

export function DashboardSidebar() {
  return (
    <aside className="w-[206px] h-[500px] border-r border-[#DEDEDF] bg-white flex flex-col p-4">
      <div className="mb-8">
        <img 
          src="/LAPO_Logo_2022-removebg-preview 2.png" 
          alt="LAPO Microfinance Bank Logo" 
          className="w-[138px] h-[45px]"
        />
      </div>

      <nav className="space-y-6 flex-grow">
        <div>
          <p className="text-[8.5px] uppercase text-[#7E8B9C] mb-4 ml-4">MAIN MENU</p>
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg bg-[#F6F6F6] border-[0.6px] border-[#E2E2E2]"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <Building2 className="h-4 w-4" />
              Branches
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <UserCheck className="h-4 w-4" />
              Roles
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <Users className="h-4 w-4" />
              Users
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <Settings2 className="h-4 w-4" />
              Card Scheme
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <CreditCard className="h-4 w-4" />
              Cards
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <List className="h-4 w-4" />
              Authorization List
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <Layers className="h-4 w-4" />
              Authorization Queue
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <Map className="h-4 w-4" />
              Trail
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-[12px] rounded-lg hover:bg-muted text-[#00000080]"
            >
              <User className="h-4 w-4" />
              Account
            </a>
          </div>
        </div>

        <div className="absolute bottom-[180px] w-[206px]">
          <a
            href="/logout"
            className="flex items-center gap-3 px-3 py-2 text-[13px] rounded-lg hover:bg-muted text-[#001735] font-medium"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </a>
        </div>

        <div className="absolute bottom-[72px] left-7">
          <p className="text-[12.5px] uppercase text-[#808080]">POWERED BY</p>
          <img 
            src="/Vector.png" 
            alt="Cardinfra Logo" 
            className="w-[93px] h-[42px] mt-2"
          />
        </div>
      </nav>
    </aside>
  )
}
























































































