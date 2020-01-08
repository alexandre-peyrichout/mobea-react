import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from '../assets/avatar.png';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

// import SaveIcon from '@material-ui/icons/Save';
const situations = [
  {
    value: 'célibataire',
    label: 'célibataire'
  },
  {
    value: 'marié',
    label: 'marié'
  },
  {
    value: 'concubinage ou pacsé',
    label: 'concubinage ou pacsé'
  },
  {
    value: 'séparé',
    label: 'séparé'
  },
  {
    value: 'divorcé',
    label: 'divorcé'
  },
  {
    value: 'veuf',
    label: 'veuf'
  }
];
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
  // blocSave: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   marginBottom: 15,
  //   marginTop: 20
  // },
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

export default function IconLabelButtons() {
  const classes = useStyles();
  const [situation, setSituation] = React.useState();

  const handleChange = event => {
    setSituation(event.target.value);
  };

  return (
    <wrapper>
      <div>
        <Typography color="primary" className={classes.titlePartie}>
          Photo de profil
        </Typography>
        <div className={classes.avatarDiv}>
          <Avatar alt="placeholder" src={AvatarImg} className={classes.bigAvatar} />
        </div>
        <div className={classes.nameDiv}>Camille Dupont</div>
        <div className={classes.blocTextImage}>
          <Typography className={classes.textImage} variant="inherit">
            Une image carrée au format 400x400 est recommandée pour un avatar de bonne qualité.
          </Typography>
        </div>
        <div className={classes.blocUpload}>
          <Button
            variant="contained"
            fontSize="small"
            color="primary"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Télécharger un fichier
          </Button>
        </div>
      </div>
      <div>
        <Typography color="primary" className={classes.titlePartie}>
          Mes informations
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="standard-required"
              label="Adresse E-mail"
              defaultValue="test@test"
              color="primary"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Nom"
              defaultValue="Dupont"
              color="primary"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Prénom"
              defaultValue="Camille"
              color="primary"
            />
          </div>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Date de naissance"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </form>
          <div>
            <TextField
              required
              id="standard-required"
              label="Adresse actuelle"
              defaultValue="10 rue des Chenilles"
              color="primary"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Pays actuel"
              defaultValue="France"
              color="primary"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Ville actuelle"
              defaultValue="Bordeaux"
              color="primary"
            />
          </div>
        </form>
        {/* <div className={classes.blocSave}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Sauvegarder et mettre à jour
          </Button>
        </div> */}
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-select"
            select
            label="Situation"
            value={situation}
            onChange={handleChange}
            helperText="Sélectionner votre situation actuelle"
          >
            {situations.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
    </wrapper>
  );
}
