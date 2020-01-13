import React from 'react';

const Context = React.createContext({
  show_FAQ: false,
  show_PROFILE: false,
  show_POLITIQUE: false,
  show_CONTACT: false,
  show_COPYRIGHT: false,
  show_ADD_DESTINATION: false,
  show_DELETE_DESTINATION: false
});

export default Context;
