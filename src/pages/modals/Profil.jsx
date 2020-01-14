import React from 'react';
import { useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Context from '../../context/Context';
import ProfilForm from '../../components/ProfilForm';
import SaveIcon from '@material-ui/icons/Save';

const Profil = () => {
  const { show_PROFIL, setShow_PROFIL } = useContext(Context);

  return (
    <Dialog open={show_PROFIL} onClose={() => setShow_PROFIL(false)} scroll="paper">
      <DialogTitle>Mon profil</DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          <ProfilForm />
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
          onClick={() => setShow_PROFIL(false)}
        >
          Sauvegarder et mettre à jour
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Profil;
