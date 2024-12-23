import { useState, React } from "react";
import DateInputField from "../atoms/DateInputField";
import { Calendar } from "@/components/components/ui/calendar";

const TimeFrameFilter = ({ onApply }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  // const [date, setDate] = (React.useState < Date) | (undefined > new Date());

  const handleApply = () => {
    onApply({ fromDate, toDate });
  };

  return (
    <div className="space-y-4">
      <DateInputField
        label="From"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />
      <DateInputField
        label="To"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />
      <button
        onClick={handleApply}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Apply
      </button>
      <Calendar
        mode="range"
        selected={'2023-01-01'}
        // onSelect={(date) => setDate(date)}
        className="rounded-md border"
      />
      <Calendar
        mode="range"
        selected={'2023-01-01'}
        // onSelect={(date) => setDate(date)}
        className="rounded-md border"
      />
    </div>
  );
};

export default TimeFrameFilter;
