import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import LandingPage from './pages/LandingPage';
import Context from './context/Context';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState();
  const [destinations, setDestinations] = useState();
  const [checklists, setChecklists] = useState();

  const [show_FAQ, setShow_FAQ] = useState(false);
  const [show_POLITIQUE, setShow_POLITIQUE] = useState(false);
  const [show_PROFIL, setShow_PROFIL] = useState(false);
  const [show_COPYRIGHT, setShow_COPYRIGHT] = useState(false);
  const [show_ADD_DESTINATION, setShow_ADD_DESTINATION] = useState(false);
  const [show_DELETE_DESTINATION, setShow_DELETE_DESTINATION] = useState(false);
  const [show_EDIT_DESTINATION, setShow_EDIT_DESTINATION] = useState(false);
  const [focusList, setFocusList] = React.useState(0); // liste visible sur le dashboard par défaut (index 0 = Logement)
  const [list, setList] = useState([
    {
      title: 'Logement',
      tasks: [
        { checked: false, text: 'lorem ipsum 1' },
        { checked: false, text: 'lorem ipsum 2' },
        { checked: true, text: 'lorem ipsum 3' }
      ]
    },
    {
      title: 'Assurances',
      tasks: [
        { checked: true, text: 'lorem ipsum 1' },
        { checked: false, text: 'lorem ipsum hodvsvdsvsdvsd 2' },
        { checked: true, text: 'lorem ipsum dsvsvsvsvsv3' },
        { checked: false, text: 'lorem ipsum 2' }
      ]
    },
    {
      title: 'Santé',
      tasks: [
        { checked: false, text: 'lorem ipsum 1' },
        { checked: false, text: 'lorem ipsum 2' },
        { checked: false, text: 'lorem ipsum 3' },
        { checked: false, text: 'lorem ipsum 3' },
        { checked: false, text: 'lorem ipsum 3' },
        { checked: false, text: 'lorem ipsum 3' }
      ]
    },
    {
      title: 'Emploi',
      tasks: [
        { checked: true, text: 'lorem ipsum 1' },
        { checked: false, text: 'lorem ipsum 2' },
        { checked: false, text: 'lorem ipsum 2' },
        { checked: false, text: 'lorem ipsum 2' },
        { checked: true, text: 'lorem ipsum 3' }
      ]
    },
    {
      title: 'Administratif',
      tasks: [
        { checked: true, text: 'lorem ipsum 1' },
        { checked: false, text: 'lorem ipsum 2' },
        { checked: true, text: 'lorem ipsum 3' }
      ]
    },
    {
      title: 'Banque',
      tasks: [
        { checked: true, text: 'lorem ipsum 1' },
        { checked: false, text: 'lorem ipsum 2' },
        { checked: true, text: 'lorem ipsum 3' }
      ]
    }
  ]);

  useEffect(() => {
    axios
      .all([
        axios.get(`/api/datas/userData?user=21`),
        axios.get(`/api/datas/userDestinations?user=21`),
        axios.get(`/api/datas/userChecklists?user=21`)
      ])
      .then(
        axios.spread((userData, destinations, checklists) => {
          setUserData(userData.data);
          setDestinations(destinations.data);
          setChecklists(checklists.data);
        })
      );
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          show_FAQ,
          setShow_FAQ,
          show_POLITIQUE,
          setShow_POLITIQUE,
          show_PROFIL,
          setShow_PROFIL,
          show_COPYRIGHT,
          setShow_COPYRIGHT,
          show_ADD_DESTINATION,
          setShow_ADD_DESTINATION,
          show_DELETE_DESTINATION,
          setShow_DELETE_DESTINATION,
          show_EDIT_DESTINATION,
          setShow_EDIT_DESTINATION,
          list,
          setList,
          focusList,
          setFocusList,
          userData,
          setUserData,
          checklists,
          setChecklists,
          destinations,
          setDestinations
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
export default App;
