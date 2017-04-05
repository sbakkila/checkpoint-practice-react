
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
        selectedMammal: action.animal
      })
    case 'SET_BIRD':
      return Object.assign({}, state, {
        selectedBird: action.animal
      })
    case 'SET_FISH':
      return Object.assign({}, state, {
        selectedFish: action.animal
      })
  }
  return state;
};
