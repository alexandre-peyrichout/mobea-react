// ici on définit le state inital qui permettra de stocker les infos utiles d'un user
const initialState = {
  users: 'ici se trouvera le state qui concerne les users (login, signup, table user, etc)'
};

// ici on va définir les différents actions qui modifieront notre state
const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
};
export default users;
