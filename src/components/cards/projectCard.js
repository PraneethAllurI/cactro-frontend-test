const ProjectCard = ({ projectName, totalBudget, profitability, actualHours, barValue }) => {
    return (
      <div className="w-[200px] h-[150px] bg-white rounded-md p-4 shadow-lg">
        <h3 className="font-bold text-xl mb-2">{projectName}</h3>
        <p>Total Budget: ${totalBudget}</p>
        <p>Profitability: {profitability}%</p>
        <p>Actual Hours: {actualHours} hrs</p>
        <div className="w-full bg-gray-300 h-2 mt-2">
          <div
            className="bg-green-500 h-2"
            style={{ width: `${barValue}%` }}
          ></div>
        </div>
      </div>
    );
  };

  export default ProjectCard;