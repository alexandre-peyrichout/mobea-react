import React from 'react';
import { useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Context from '../../context/Context';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    }
  },

  blocUpload: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  titlePartie: {
    borderBottom: '1px solid black',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  avatarDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  bigAvatar: {
    width: 80,
    height: 80,
    border: '1px solid black'
  },
  nameDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  blocTextImage: {
    width: '100%',
    display: 'flex'
  },
  textImage: {
    paddingLeft: 10,
    fontSize: '0.8rem',
    marginBottom: '1rem'
  }
}));

const Add_destination = () => {
  const { show_ADD_DESTINATION, setShow_ADD_DESTINATION } = useContext(Context);
  const { countries, cities, reasons, situations } = useContext(Context);

  const classes = useStyles();
  const [situation, setSituation] = React.useState();
  const [city, setCity] = React.useState();
  const [reason, setReason] = React.useState();
  const [country, setCountry] = React.useState();

  const handleChangeCountry = event => {
    setCountry(event.target.value);
  };

  const handleChangeCity = event => {
    setCity(event.target.value);
  };

  const handleChangeReason = event => {
    setReason(event.target.value);
  };

  const handleChangeSituation = event => {
    setSituation(event.target.value);
  };

  if (countries && cities && reasons) {
    return (
      <Dialog
        open={show_ADD_DESTINATION}
        onClose={() => setShow_ADD_DESTINATION(false)}
        scroll="paper"
      >
        <DialogTitle>Ajouter une destination</DialogTitle>
        <DialogContent dividers>
          <DialogContentText tabIndex={-1}>
            <wrapper>
              <div>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    <TextField
                      id="standard-select"
                      select
                      label="Pays"
                      value={country}
                      onChange={handleChangeCountry}
                      helperText="Sélectionnez le Pays de déstination"
                    >
                      {countries.map(option => (
                        <MenuItem key={option.idcountry} value={option.idcountry}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="standard-select"
                      select
                      label="Ville"
                      value={city}
                      onChange={handleChangeCity}
                      helperText="Sélectionnez la ville de déstination"
                    >
                      {cities
                        .filter(el => el.country_idcountry === country)
                        .map(option => (
                          <MenuItem key={option.idcity} value={option.idcity}>
                            {option.name}
                          </MenuItem>
                        ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="date"
                      label="Date d'arrivée"
                      type="date"
                      defaultValue="2020-01-01"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="standard-select"
                      select
                      label="Raison"
                      value={reason}
                      onChange={handleChangeReason}
                      helperText="Sélectionnez la raison du voyage"
                    >
                      {reasons.map(option => (
                        <MenuItem key={option.idreason} value={option.idreason}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="standard-select"
                      select
                      label="Situation"
                      value={situation}
                      onChange={handleChangeSituation}
                      helperText="Sélectionnez votre situation durant ce voyage"
                    >
                      {situations.map(option => (
                        <MenuItem key={option.idsituation} value={option.idsituation}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </form>
              </div>
            </wrapper>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShow_ADD_DESTINATION(false)} color="primary">
            Annuler
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<AddIcon />}
            onClick={() => setShow_ADD_DESTINATION(false)}
          >
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return (
      <Dialog
        open={show_ADD_DESTINATION}
        onClose={() => setShow_ADD_DESTINATION(false)}
        scroll="paper"
      ></Dialog>
    );
  }
};

export default Add_destination;
