const vega = require("vega");
const vegaLite = require("vega-lite");
const fs = require("fs");

async function createChart(data) {
  const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "A bar chart showing company revenues",
    width: 800,
    height: 600,
    data: {
      values: data,
    },
    mark: "bar",
    encoding: {
      x: { field: "company", type: "nominal", axis: { labelAngle: -45 } },
      y: {
        field: "revenue",
        type: "quantitative",
        title: "Revenue (in millions)",
      },
    },
  };

  const vegaSpec = vegaLite.compile(spec).spec;

  const view = new vega.View(vega.parse(vegaSpec), { renderer: "none" });

  const svg = await view.toSVG();

  fs.writeFileSync("company_revenue_chart.svg", svg);
  console.log("Chart image created successfully");
}

module.exports = { createChart };
