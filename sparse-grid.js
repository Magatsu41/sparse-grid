// Define a SparseGrid class to create and manipulate a 2D grid of values
class SparseGrid {
  // Initialize the SparseGrid with the specified number of rows and columns
  constructor(rows, cols) { 
      // Store the number of rows and columns, and create a new Map object to store the values
      this.rows = rows;
      this.cols = cols;
      this.values = new Map(); 
  }
  
  // Check if the specified row and column values are within the bounds of the SparseGrid
  _isValid(row, col) { 
      if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
          // If the row or column is out of bounds, log an error and return false
          console.error(`Attempted to access out of bounds cell at row ${row} col ${col}`); 
          return false; 
      }
      // Otherwise, return true
      return true; 
  } 
  
  // Set the value of the specified cell in the SparseGrid
  set(row, col, value) { 
      // Generate a key to store the value in the Map
      const key = `${row},${col}`; 
      // Check if the cell is within bounds
      if (!this._isValid(row, col)) return; 
      // If the value is null, remove the key from the Map
      if (value === null) { 
          this.values.delete(key); 
      } 
      // Otherwise, set the key-value pair in the Map
      else { 
          this.values.set(key, value); 
      } 
  } 
  
  // Get the value of the specified cell in the SparseGrid
  get(row, col) { 
      // Generate the key to retrieve the value from the Map
      const key = `${row},${col}`; 
      // Check if the cell is within bounds
      if (!this._isValid(row, col)) return null; 
      // Return the value of the specified cell, or null if it doesn't exist
      return this.values.get(key) || null; 
  } 
  
  // Remove all key-value pairs from the SparseGrid
  flush() { 
      this.values.clear(); 
  } 
  
  // Resize the SparseGrid to the specified number of rows and columns
  resize(newRows, newCols) { 
      // If the new size is smaller than the current size, warn the user of potential data loss
      if (newRows < this.rows || newCols < this.cols) { 
          console.warn('Warning: Resizing to a smaller size will cause data loss.'); 
      } 
      // Create a new SparseGrid with the new number of rows and columns
      const newGrid = new SparseGrid(newRows, newCols); 
      // Iterate over the key-value pairs in the current SparseGrid
      this.values.forEach((value, key) => { 
          // Split the key string into row and column values
          const [row, col] = key.split(',').map(Number); 
          // If the row and column values are within bounds of the new SparseGrid, set the key-value pair in the new SparseGrid
          if (row < newRows && col < newCols) { 
              newGrid.set(row, col, value); 
          } 
      }); 
      // Replace the current SparseGrid's properties with the new SparseGrid's properties
      this.rows = newRows;
      this.cols = newCols;
      this.values = newGrid.values; 
  } 
  
  // Print a JSON representation of the SparseGrid
  dump() { 
    // Create an empty object to hold the grid data
    const gridObj = {}; 
    
    // Iterate through all the cells in the grid
    for (let row = 0; row < this.rows; row++) { 
        for (let col = 0; col < this.cols; col++) { 
            // Retrieve the value at the current cell
            const val = this.get(row, col); 
            
            // Store the value in gridObj using a key that is a string representation
            // of the cell's row and column indices separated by a comma
            gridObj[`${row},${col}`] = val; 
        } 
    } 
    
    // Convert the gridObj object to a formatted JSON string and print it to the console
    console.log(JSON.stringify(gridObj, null, 2)); 
  }
}

// Export the module
export default SparseGrid;