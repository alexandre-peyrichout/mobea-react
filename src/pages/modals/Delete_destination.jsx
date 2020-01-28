import React from 'react';
import { useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Context from '../../context/Context';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const Add_destination = () => {
  const {
    show_DELETE_DESTINATION,
    setShow_DELETE_DESTINATION,
    destinationSelected,
    setDestinationSelected,
    setArrayOfBadges
  } = useContext(Context);

  const deleteDestination = () => {
    axios
      .delete(`/api/destination/${destinationSelected}`)
      .then(() => setShow_DELETE_DESTINATION(false))
      .then(() => setArrayOfBadges(null))
      .then(() => setDestinationSelected(null));
  };

  return (
    <Dialog
      open={show_DELETE_DESTINATION}
      onClose={() => setShow_DELETE_DESTINATION(false)}
      scroll="paper"
    >
      <DialogTitle>Supprimer cette destination</DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          Êtes-vous sure de vouloir supprimer ce voyage ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setShow_DELETE_DESTINATION(false)}
          color="primary"
          variant="outlined"
        >
          Non
        </Button>
        <Button
          variant="outlined"
          size="medium"
          startIcon={<DeleteIcon />}
          onClick={() => deleteDestination()}
        >
          Oui, je supprime
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Add_destination;
