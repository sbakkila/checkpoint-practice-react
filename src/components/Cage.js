import React from 'react';

const animalBackground = (animal) => ({ backgroundImage: `url(./src/img/${animal}.gif`, height: '200px' });

// exporting the constructor function (dumb component)
	// using destructuring to name individual variables from the first parameter objectt (props)
export default (props) => {
  var {selectedAnimal} = props;
  var divStyle = animalBackground(selectedAnimal);
  return(<div style={divStyle} ></div>)
};
