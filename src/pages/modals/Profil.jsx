import React, { useState, useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Context from '../../context/Context';
import ProfilForm from '../../components/ProfilForm';
import SaveIcon from '@material-ui/icons/Save';
import Axios from 'axios';

const Profil = () => {
  const { show_PROFIL, setShow_PROFIL, userData, setReload, reload } = useContext(Context);

  const [info, setInfo] = useState({
    email: userData && userData.email,
    firstname: userData && userData.firstname,
    lastname: userData && userData.lastname,
    user_city: userData && userData.user_city,
    user_country: userData && userData.user_country
  });

  const handleClickSubmit = () => {
    console.log(userData);
    Axios.put(`http://localhost:3000/api/user/${userData.iduser}`, { info })
      .then(function(response) {
        // handle success
        console.log(response);
        setShow_PROFIL(true);
        setReload(reload + 1);
      })
      .then(function() {
        // always executed
      });
  };

  return (
    <Dialog open={show_PROFIL} onClose={() => setShow_PROFIL(false)} scroll="paper">
      <DialogTitle>Mon profil</DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          <ProfilForm info={info} setInfo={setInfo} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShow_PROFIL(false)} color="primary">
          Annuler
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<SaveIcon />}
          onClick={() => handleClickSubmit()}
        >
          Sauvegarder et mettre à jour
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Profil;
