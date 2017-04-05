
const initialState = {
    selectedMammal : "Tiger",
    selectedBird : "Eagle",
    selectedFish : "Seahorse",
    mammals: ['Tiger', 'Panda', 'Pig'],
    birds: ['Eagle', 'Flamingo', 'Penguin'],
    fish: [ 'Seahorse', 'Octopus', 'Stingray']
    };

// make sure you understand the parameters here!
export default (state = initialState, action) => {
  switch (action.type){
    case 'SET_MAMMAL':
      return Object.assign({}, state, {
        animal: action.animal
      })
  }
  return state;
};
