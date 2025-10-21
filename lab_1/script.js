function myFunction() {
  document.getElementsByClassName("header-nav")[0].style.backgroundColor =
    "lightblue";
}

function tablesort() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("movietable");

  if (!table) {
    alert("Table not found!");
    return;
  }

  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;

    // Start from row 1 (skip header) and go through all data rows
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      // Get the rating cells (column index 1)
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];

      if (x && y) {
        // Compare the numeric values
        if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      // Swap the rows
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function addMovie() {
  var table = document.getElementById("movietable");
  if (!table) {
    alert("Table not found!");
    return;
  }
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "New Movie";
  cell2.innerHTML = "0";

  toggleDiv();
  console.log("Added new movie at row " + newRowIndex);
}

function changeTable() {
  var table = document.getElementById("movietable");
  var nameUserInput = document.getElementById("name");
  var ratingUserInput = document.getElementById("rating");

  if (!table) {
    alert("Table not found!");
    return;
  }

  if (isNaN(ratingUserInput.value)) {
    alert("Please enter a valid number for rating!");
    return;
  }

  targetRow = table.rows[1];
  targetCell1 = targetRow.cells[0];
  targetCell2 = targetRow.cells[1];

  targetCell1.innerHTML = nameUserInput.value;
  targetCell2.innerHTML = ratingUserInput.value;

  toggleDiv();

  console.log(
    "Changed row " +
      rowUserInput +
      ", column " +
      colUserInput +
      " to: " +
      newText
  );
}

function toggleDiv() {
  var divElement = document.getElementById("changeTableData");

  if (divElement.style.display === "none") {
    divElement.style.display = "block";
  } else {
    divElement.style.display = "none";
  }
}
