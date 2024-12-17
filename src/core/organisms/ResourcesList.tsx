const ResourceCard = ({ type, title, description }) => {
    const cardClass =
      "border rounded-lg shadow-sm p-5 bg-white hover:shadow-md transition";
  
    return (
      <div className={cardClass}>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {type === "video" && (
          <span className="text-blue-500 font-medium">[Video Card]</span>
        )}
        {type === "webpage" && (
          <span className="text-green-500 font-medium">[Webpage Card]</span>
        )}
        {type === "insight" && (
          <span className="text-purple-500 font-medium">[Insight Card]</span>
        )}
      </div>
    );
  };
  
  export default ResourceCard;
  