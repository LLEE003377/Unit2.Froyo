
const userInputString = prompt(
    "Enter a list of comma-separated froyo flavors:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  const flavorArray = userInputString.split(",");
  
  const flavorCount = {};
  
  for (let i = 0; i < flavorArray.length; i++) {
    const flavor = flavorArray[i].trim();
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  }
  
  console.log(flavorCount);

  function formatFlavorTable(flavorCount) {
    let table = "Flavor\tQuantity\n";
    
    for (const flavor in flavorCount) {
      table += `${flavor}\t${flavorCount[flavor]}\n`;
    }
    
    return table;
  }
  
  console.log(formatFlavorTable(flavorCount));
  