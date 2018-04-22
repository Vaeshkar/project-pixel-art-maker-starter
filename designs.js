// Grid Variable
var gridHeight, gridWidth;

// Grid method
function makeGrid() {

    // Grab DOM Table
    var table = document.getElementById("pixelCanvas");
    
    // Reset the old Grid
    var Parent = document.getElementById("pixelCanvas");
    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    // Grid generator
    gridHeight = document.getElementById("inputHeight").value;
    gridWidth = document.getElementById("inputWidth").value;
    
    // Loop to generate the Grid
    for (let i = 0; i < gridHeight; i++) {
        let tableRow = table.insertRow(i);
        for (let j = 0; j < gridWidth; j++) {
            let tableColumn = tableRow.insertCell(j);
    // Drawing check
            tableColumn.addEventListener('click', function(event) {
          event.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
            
        }
    }
}

document.getElementById("sizePicker").addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});