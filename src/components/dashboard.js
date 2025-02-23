import React, { useState } from "react";

//recharts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

//components
import CardDetails from "./cards/cardDetails";
import ProjectCard from "./cards/projectCard";

//material ui
import { Button } from "@mui/material";
import { FileUpload } from "@mui/icons-material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

//date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(null); // Add state for date picker

  const barData = [
    { name: "19 June", value: 1000 },
    { name: "20 June", value: 3000 },
    { name: "21 June", value: 2000 },
    { name: "22 June", value: 2780 },
    { name: "23 June", value: 1890 },
    { name: "24 June", value: 2390 },
  ];

  // Data for Pie Chart
  const pieData = [
    { name: "Over Budget", value: 400 },
    { name: "On Budget", value: 300 },
    { name: "Under Budget", value: 300 },
  ];

  const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Define pie chart colors

  // Sample data for projects
  const projects = [
    {
      name: "Project A",
      totalBudget: 150000,
      profitability: 25,
      actualHours: 1200,
      barValue: 85,
    },
    {
      name: "Project B",
      totalBudget: 180000,
      profitability: 30,
      actualHours: 1000,
      barValue: 60,
    },
    {
      name: "Project C",
      totalBudget: 100000,
      profitability: 15,
      actualHours: 800,
      barValue: 50,
    },
    {
      name: "Project D",
      totalBudget: 200000,
      profitability: 40,
      actualHours: 1500,
      barValue: 90,
    },
  ];
  const projectUpdate = [
    {
      action: "New Feature",
      icon: "🚀", // You can use any icon, here it's a rocket emoji as an example
      number: 10, // This can represent the number of tasks, progress percentage, etc.
    },
    {
      action: "Bug Fix",
      icon: "🐞", // Bug icon (emoji)
      number: 5, // Number of bugs fixed
    },
    {
      action: "Design Update",
      icon: "🎨", // Design palette icon (emoji)
      number: 3, // Number of design updates made
    },
    {
      action: "Code Refactor",
      icon: "🔨", // Hammer icon for refactor (emoji)
      number: 7, // Number of refactors done
    },
  ];
  
  console.log(projectUpdate);
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex bg-gray-100 px-4">
      {/* Main Section - 70% width */}
      <div className="flex-1 p-4">
        {/* Top Section (100px height) */}
        <div className="h-24 rounded-md mb-4">
          <div className="w-full h-screen flex flex-col items-center justify-start bg-gray-100">
            <div className="w-full flex flex-wrap justify-start gap-4 overflow-auto">
              {projectUpdate.map(
                (item, index) => (
                  <CardDetails
                    key={index}
                    icon={<span role="img" aria-label="icon">{item.icon}</span>}
                    number={item.number}
                    caption={item.action}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section (350px height) */}
        <div className="h-[350px] rounded-md">
          <div className="flex space-x-4 p-4">
            {/* Graphical Chart (Line Chart) - 60% width */}
            <div className="w-[60%] h-[300px] bg-white rounded-md p-4 shadow-lg">
              <h2 className="mb-4">Total Revenue</h2>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Donut Chart - 40% width */}
            <div className="w-[40%] h-[300px] bg-white rounded-md p-4 shadow-lg">
              <h2 className="mb-4">Budget</h2>
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#8884d8"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>

                  <Tooltip />

                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="18px"
                    fontWeight="bold"
                    fill="#333"
                  >
                    5 Total Projects
                  </text>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Budget Status Section */}
        <div className="w-full rounded-md flex items-center gap-4">
          <h1 className="text-xl font-bold">Budget Status</h1>

          <div className="flex justify-start items-center gap-4">
            {/* Submit Button */}
            <Button variant="contained" color="primary">
              Add New Project
            </Button>

            {/* File Picker */}
            <Button variant="outlined" component="label">
              <FileUpload className="mr-2" /> Download
              <input type="file" hidden />
            </Button>

            {/* Date Picker */}
            <div className="flex items-center">
              <CalendarTodayIcon className="mr-2" />
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                placeholderText="Select a date"
                className="border p-2 rounded-md" // Styling the date picker
              />
            </div>

            {/* Filter Button */}
            <Button variant="contained" color="secondary">
              Filter
            </Button>
          </div>
        </div>

        {/* New Section Below the Budget Status */}
        <div className="h-[200px] w-full mt-4 flex overflow-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.name}
              totalBudget={project.totalBudget}
              profitability={project.profitability}
              actualHours={project.actualHours}
              barValue={project.barValue}
            />
          ))}
        </div>
      </div>

      {/* Sidebar - 30% width */}
      <div className="w-[150px] h-[480px] text-white flex flex-col items-center justify-center p-4">
        {/* Profile Section */}
        <div className="bg-white text-black w-full h-full flex flex-col items-center justify-center rounded-md shadow-lg">
          {["Praneeth", "Koushik", "Vishwa", "Nishant"].map((item, index) => (
            <div key={index} className="flex flex-col items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full mb-4"
              />
              <span className="text-center">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
