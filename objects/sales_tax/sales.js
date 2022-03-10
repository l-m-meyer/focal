/*
* Function calculates the total sales and total tax, grouped by company.
* @param {Array} salesData -- an Array of Objects
* @param {Object} taxRates 
* @return {Ojbect} results
*/
const calculateSalesTax = (salesData, taxRates) => {
  const results = {};

  // iterate over sales data array of objects
  for (const data of salesData) {
    // check if data does not exist in results object
    if (!results.hasOwnProperty('name')) {
      // add company information to results object
      results[data['name']] = {};
      results[data['name']]['totalSales'] = 0;
      results[data['name']]['totalTaxes'] = 0;
    }
    // create totalSales accumulator key to add to results object; could be its own function
    // create totalTaxes accumulator key to add to results object; could be its own function
  } console.log(results);
};

// Function to get total company sales
const getTotalSales = (salesData, results) => {
  let totalSales = 0;
  
  // iterate over salesData array of objects and target value in object
  for (const sale of salesData) {

  }

};

// Function to 

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

calculateSalesTax(companySalesData, salesTaxRates);