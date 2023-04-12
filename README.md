# Sparse Grid

<p align="center">
   <img src="http://jollywood.free.fr/spgd.png" alt="logo"/>
</p>

SparseGrid is a lightweight JavaScript library for working with sparse 2D arrays.

A Sparse Grid is a data structure that represents a grid with potentially many empty cells efficiently. It is used in various applications like game development and simulation.

## Installation

You can install Sparse Grid via [npm](https://www.npmjs.com/package/sparse-grid):

`
    npm install sparse-grid
`

## Usage

### Creating a Sparse Grid

To create a Sparse Grid, you can use the **SparseGrid** constructor:

`
    const SparseGrid = require('sparse-grid');
`

`
    const grid = new SparseGrid(10, 10);  // Creates a 10x10 grid
`

### Setting and Getting Values

You can set values in the Sparse Grid using the **set** method:

`
    grid.set(2, 3, 'hello');
`

And retrieve them using the **get** method:

`
    grid.get(2, 3);  // Returns 'hello'
`

### Resizing the Grid

You can resize the Sparse Grid using the **resize** method:

`
    grid.resize(20, 20);  // Resizes the grid to 20x20
`

If you resize the grid to a smaller size, data may be lost.

### Dumping the Grid

You can print a JSON representation of the Sparse Grid using the **dump** method:

`
    grid.dump();
`

This will print a Json object with the row and column indices as keys and the values in the cells as values.

### Clearing the Grid

You can clear the Sparse Grid using the **flush** method:

`
    grid.flush();
`

This will remove all values from the grid.

## Contributing

Contributions are welcome! Feel free to submit pull requests or issues on the [GitHub repository](https://github.com/Magatsu41/sparse-grid).

## License

Sparse Grid is licensed under the [MIT License](https://opensource.org/license/mit/). See ==LICENSE== for more information.