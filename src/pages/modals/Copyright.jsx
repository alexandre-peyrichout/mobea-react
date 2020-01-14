import React from 'react';
import { useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Context from '../../context/Context';

const Copyright = () => {
  const { show_COPYRIGHT, setShow_COPYRIGHT } = useContext(Context);

  return (
    <Dialog open={show_COPYRIGHT} onClose={() => setShow_COPYRIGHT(false)} scroll="paper">
      <DialogTitle>Détails</DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>Copyright 2016 - 2020</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShow_COPYRIGHT(false)} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Copyright;
