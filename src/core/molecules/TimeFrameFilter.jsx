import { useState } from "react";
import DateInputField from "../atoms/DateInputField";

const TimeFrameFilter = ({ onApply }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

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
    </div>
  );
};

export default TimeFrameFilter;
