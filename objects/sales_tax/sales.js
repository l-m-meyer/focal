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
      results['name'] = data['name'];
      results['totalSales'] = 0;
      results['totalTaxes'] = 0;
    }
    // create totalSales accumulator key to add to results object; could be its own function
    // create totalTaxes accumulator key to add to results object; could be its own function
  }
};

// Function to get total company sales
const getTotalSales = (salesData, results) => {

  // iterate over salesData array of objects and target value in object
  for (const sale of salesData) {
    
  }

};

// Function to 