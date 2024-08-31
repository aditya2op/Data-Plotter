const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const { createChart } = require("./plot");
const path = require("path");
const fs = require("fs");

const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Generate dummy data
const companies = [
  "TechCorp",
  "InnoSoft",
  "DataDynamics",
  "CloudNine",
  "CyberGuard",
  "AIVentures",
  "BlockChainTech",
  "RoboInc",
  "EcoTech",
  "BioInnovate",
];

const data = companies.map((company) => ({
  company,
  revenue: Math.floor(Math.random() * 1000) + 100, // Random revenue between 100 and 1099
}));

// Write data to CSV
const csvWriter = createCsvWriter({
  path: "dist/company_data.csv",
  header: [
    { id: "company", title: "Company" },
    { id: "revenue", title: "Revenue (in millions)" },
  ],
});

csvWriter
  .writeRecords(data)
  .then(() => {
    console.log("CSV file created successfully");
    return createChart(data);
  })
  .then(() => console.log("Process completed"))
  .catch((err) => console.error("Error:", err));
