import AccordionItem from "../molecules/AccordionItem";
import SelectBox from "../atoms/SelectBox";
import TimeFrameFilter from "../molecules/TimeFrameFilter";

const FilterPanel = () => {
  const perPageOptions = [
    { value: "10", label: "10 per page" },
    { value: "20", label: "20 per page" },
    { value: "30", label: "30 per page" },
    { value: "50", label: "50 per page" },
    { value: "100", label: "100 per page" },
  ];

  return (
    <aside className="w-full lg:w-1/4 p-5 border-r border-gray-300 bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
      <TimeFrameFilter />
      <AccordionItem title="Health Care Settings">
        <div className="space-y-2">
          <label className="flex items-center text-gray-700">
            <input type="checkbox" className="mr-2" /> Ambulatory
          </label>
          <label className="flex items-center text-gray-700">
            <input type="checkbox" className="mr-2" /> Emergency Care
          </label>
        </div>
      </AccordionItem>

      <AccordionItem title="Resource Centers">
        <div className="space-y-2">
          <label className="flex items-center text-gray-700">
            <input type="checkbox" className="mr-2" /> Standards Overview
          </label>
          <label className="flex items-center text-gray-700">
            <input type="checkbox" className="mr-2" /> Health Equity
          </label>
        </div>
      </AccordionItem>

      <AccordionItem title="Per Page Results">
        <SelectBox options={perPageOptions} defaultValue="10" />
      </AccordionItem>
    </aside>
  );
};

export default FilterPanel;
