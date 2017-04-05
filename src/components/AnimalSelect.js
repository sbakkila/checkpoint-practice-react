import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default (props) => {

  return(<form>
    <label for="hi">Select an Animal: </label>
    <select id="hi" onChange={(event) => {props.submitAnimal(event.target.value)}}>
      {props.animals.forEach(animal => {
          <option key={animal}>animal</option>
      })}
    </select>
  </form>)
};
