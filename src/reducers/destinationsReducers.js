// ici on définit le state inital qui permettra de stocker les infos utiles d'une expatriation
const initialState = {
  users:
    'ici se trouvera le state qui concerne les destinations (pays, ville, situation, date etc...)'
};

// ici on va définir les différents actions qui modifieront notre state
const destinations = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
};
export default destinations;
