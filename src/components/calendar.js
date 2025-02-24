import { Calendar as CalendarIcon } from 'lucide-react';

export function Calendar() {
  return (
    <div className="w-[150px] h-[30px] border-2 border-[#D0D5DD] rounded-md flex items-center p-1"> {/* Removed absolute positioning */}
      <div className="flex items-center gap-2">
        <CalendarIcon className="w-4 h-4 text-[#121212]" />
        <span className="font-satoshi font-semibold text-[#001735]" style={{ fontSize: '11px', lineHeight: '15px' }}>Today</span>
        <div className="border-l border-gray-300 h-4" style={{ width: '1px' }} />
        <span className="font-satoshi font-medium text-[#001735]" style={{ fontSize: '11px', lineHeight: '15px' }}>11 Nov 2024</span>
      </div>
    </div>
  );
}