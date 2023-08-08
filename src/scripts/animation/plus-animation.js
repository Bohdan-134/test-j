const gridData = [
    ["+", "+", "+", "+", "+"],
    ["+", "+", "+", "+", "+"],
    ["+", "+", "+", "+", "+"],
    ["", "+", "+", "+", "+"],
    ["+", "", "+", "+", "+"],
  ];
  
  const tableContainer = document.getElementById("gridTable");
  
  gridData.forEach((rowData) => {
    const row = document.createElement("tr");
  
    rowData.forEach((cellData) => {
      const cell = document.createElement("td");
      cell.textContent = cellData;
  
      row.appendChild(cell);
    });
  
    tableContainer.appendChild(row);
  });
  
  function addAndRemoveClassesWithDelay(element, className, delay) {
    element.classList.add(className);
    setTimeout(() => {
      element.classList.remove(className);
    }, delay);
  }
  
  function handleRandomElements() {
    const allCells = document.querySelectorAll("#gridTable td");
  
    const randomCellRed = allCells[Math.floor(Math.random() * allCells.length)];
    let randomCellBlue;
  
    do {
      randomCellBlue = allCells[Math.floor(Math.random() * allCells.length)];
    } while (randomCellBlue === randomCellRed);
  
    addAndRemoveClassesWithDelay(randomCellRed, "red", 1000);
    setTimeout(() => {
      addAndRemoveClassesWithDelay(randomCellBlue, "blue", 1000);
    }, 1000);
  }
  
  setInterval(handleRandomElements, 3000);
  
  // modal
  
  