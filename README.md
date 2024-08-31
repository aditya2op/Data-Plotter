# Data Plotter App

## Description

This Data Plotter App is a Node.js application that generates dummy revenue data for 10 fictional companies, writes this data to a CSV file, and creates an SVG chart to visualize the data.

## Features

- Generates random revenue data for 10 predefined companies
- Writes the generated data to a CSV file
- Creates an SVG bar chart to visualize the company revenues
- Uses Vega and Vega-Lite for flexible and powerful data visualization

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (version 12.0 or later)
- You have a basic understanding of JavaScript and Node.js

## Installing Data Plotter App

To install the Data Plotter App, follow these steps:

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Run the following command to install the necessary dependencies: npm i

## Using Data Plotter App

To use the Data Plotter App, follow these steps:

1. Ensure you're in the project directory
2. Run the following command:
3. The app will generate two files in the project directory:

   - `company_data.csv`: A CSV file containing the generated company revenue data
   - `company_revenue_chart.svg`: An SVG file visualizing the revenue data as a bar chart

4. You can open the SVG file in a web browser to view the chart

## File Structure

- `index.js`: The main script that generates data and orchestrates the CSV writing and chart creation
- `plot.js`: Contains the logic for creating the SVG chart using Vega and Vega-Lite
- `company_data.csv`: (Generated) Contains the dummy data for the 10 companies
- `company_revenue_chart.svg`: (Generated) The SVG chart visualizing the revenue data

## Customizing the App

- To change the companies or the number of companies, modify the `companies` array in `index.js`
- To adjust the revenue range, modify the calculation in the `data` array in `index.js`
- To customize the chart appearance, modify the `spec` object in the `createChart` function in `plot.js`

## Dependencies

- csv-writer: For writing data to CSV files
- vega: For creating the visualization
- vega-lite: For using a concise grammar of graphics to create the chart

## Contributing to Data Plotter App

To contribute to the Data Plotter App, follow these steps:

1. Fork this repository
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request

## Contact

If you want to contact the maintainer of this project, please email [your-email@example.com].

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).
