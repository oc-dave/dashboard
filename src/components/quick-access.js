import React from "react";
import { CreditCard, Edit, Plus } from "lucide-react"; // Importing necessary icons

const QuickAccess = () => {
  const actions = [
    {
      title: "Manage a Card",
      icon: CreditCard,
    },
    {
      title: "Issue Instant Card",
      icon: CreditCard,
    },
    {
      title: "Issue Personalized Card",
      icon: Edit,
    },
    {
      title: "Review Card Requests",
      icon: Plus,
    },
  ];

  return (
    <div className="w-full h-[106px] bg-white border border-[#E2E2E2] rounded-[10px] shadow-lg"> {/* Removed absolute positioning */}
      <h2 className="ml-4 left-[16px] top-[16px] text-[16px] font-medium text-[#121212]">
        Your Quick Access
      </h2>
      <div className="flex flex-row items-center gap-4 p-4"> {/* Added padding for spacing */}
        {actions.map((action) => (
          <button
            key={action.title}
            className="flex items-center gap-3 p-4 w-full h-[45px] bg-[#F1F7FF] rounded-[4px] hover:bg-muted/80 transition-colors flex-grow"
          >
            <div className="flex items-center justify-center w-[28px] h-[28px] bg-[#014DAF] rounded-full">
              {React.createElement(action.icon, { className: "h-4 w-4 text-white" })}
            </div>
            <span className="text-[14px] font-medium text-[#121212] flex-grow">{action.title}</span>
            <span className="text-gray-500"> &gt;</span> {/* Chevron right icon */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess; // Ensure QuickAccess is exported as default