// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((ele, index) => {
    let name = ele;
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => console.log(`Found Waldo at index ${index}!`));