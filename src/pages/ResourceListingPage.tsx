import FilterPanel from "../core/organisms/FiltersPanel";
import ResourceCard from "../core/organisms/ResourcesList";
import Pagination from "../core/molecules/Pagination";
import { useState, useEffect } from "react";
import SortingDropdown from "../core/molecules/SortingDropdown";
import "../styles/globals.css";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("recent");
  const [resources, setResources] = useState([
    {
      id: 1,
      type: "video",
      title: "Cook County Health Webinar",
      date: "2023-08-20",
    },
    { id: 2, type: "webpage", title: "Standards Overview", date: "2023-07-15" },
    {
      id: 3,
      type: "insight",
      title: "Healthcare Equity Insights",
      date: "2023-09-01",
    },
  ]);

  // Function to handle sorting
  const sortResources = (type) => {
    let sortedResources = [...resources];
    switch (type) {
      case "recent":
        sortedResources.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "alphabetical":
        sortedResources.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "relevance":
        // Add relevance logic if needed (currently defaults to initial state)
        break;
      default:
        break;
    }
    setResources(sortedResources);
  };

  useEffect(() => {
    sortResources(sortType);
  }, [sortType]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="lg:flex bg-gray-100">
      {/* Filter Panel */}
      <FilterPanel />

      {/* Main Content */}
      <main className="p-5 w-full space-y-5">
        {/* Sorting Dropdown */}
        <SortingDropdown onSortChange={(value) => setSortType(value)} />
        <ResourceCard
          type="video"
          title="Cook County Health Webinar"
          description="Join the mental health awareness session."
        />
        <ResourceCard
          type="webpage"
          title="Standards Overview"
          description="Learn about recent health care updates."
        />
        <ResourceCard
          type="insight"
          title="Healthcare Equity Insights"
          description="Explore data-driven equity solutions."
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default Home;
