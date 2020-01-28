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
import axios from 'axios';

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
  const { countries, cities, reasons, situations, userData } = useContext(Context);

  const classes = useStyles();
  const [situation, setSituation] = React.useState();
  const [city, setCity] = React.useState();
  const [reason, setReason] = React.useState();
  const [country, setCountry] = React.useState();
  const [date, setDate] = React.useState();

  const handleChangeCountry = event => {
    setCountry(event.target.value);
  };

  const handleChangeCity = event => {
    setCity(event.target.value);
  };

  const handleChangeDate = event => {
    setDate(event.target.value);
  };

  const handleChangeReason = event => {
    setReason(event.target.value);
  };

  const handleChangeSituation = event => {
    setSituation(event.target.value);
  };

  const fetchLastDestination = () => {
    axios
      .all([axios.get(`/api/destination/last?id=${userData.iduser}`)])
      .then(
        axios.spread(test => {
          const destination = test.data[0].iddestination;
          console.log('valeur de destination' + destination);
          InsertAllLists(test.data[0].iddestination);
        })
      )
      .finally();
  };

  const InsertAllLists = destination => {
    axios
      .all([axios.get(`/api/taskHasDestination/generate/${destination}`)])
      .then(axios.spread(res => console.log(res)))
      .finally();
    // fetch(`/api/taskHasDestination/generate?destination=${JSON.stringify(destination)}`, {
    //   method: 'POST',
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   }),
    //   body: JSON.stringify(destination)
    // })
    //   .then(res => console.log('finished creating lists'))
    //   .catch(err => console.log(err));
  };

  const submitForm = e => {
    e.preventDefault();
    const newDestination = {
      country_idcountry: country,
      situation_idsituation: situation,
      user_iduser: userData.iduser,
      reason_idreason: reason,
      arrival_date: date,
      city_idcity: city
    };
    console.log('données envoyées', newDestination);
    fetch('/api/destination/new', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(newDestination)
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setTimeout(() => {
      fetchLastDestination();
    }, 5000);
  };

  if (countries && cities && reasons) {
    return (
      <Dialog
        open={show_ADD_DESTINATION}
        onClose={() => setShow_ADD_DESTINATION(false)}
        scroll="paper"
      >
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitForm}>
          <DialogTitle>Ajouter une destination</DialogTitle>
          <DialogContent dividers>
            <DialogContentText tabIndex={-1}>
              <wrapper>
                <div>
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
                      onChange={handleChangeDate}
                      defaultValue={date}
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
              type="submit"
              // onClick={() => setShow_ADD_DESTINATION(false)}
            >
              Ajouter
            </Button>
          </DialogActions>
        </form>
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
