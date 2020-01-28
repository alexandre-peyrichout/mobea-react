import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from '../assets/avatar.png';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
import Context from '../context/Context';

// import SaveIcon from '@material-ui/icons/Save';
// const situations = [
//   {
//     value: 'célibataire',
//     label: 'célibataire'
//   },
//   {
//     value: 'marié',
//     label: 'marié'
//   },
//   {
//     value: 'concubinage ou pacsé',
//     label: 'concubinage ou pacsé'
//   },
//   {
//     value: 'séparé',
//     label: 'séparé'
//   },
//   {
//     value: 'divorcé',
//     label: 'divorcé'
//   },
//   {
//     value: 'veuf',
//     label: 'veuf'
//   }
// ];
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

export default function IconLabelButtons(props) {
  const classes = useStyles();
  // const [setSituation] = React.useState();

  // const handleChange = event => {
  //   setSituation(event.target.value);
  // };

  const { userData } = useContext(Context);

  const { info, setInfo } = props;

  return (
    <wrapper>
      <div>
        <Typography color="primary" className={classes.titlePartie}>
          Photo de profil
        </Typography>
        <div className={classes.avatarDiv}>
          <Avatar alt="placeholder" src={AvatarImg} className={classes.bigAvatar} />
        </div>
        <div className={classes.nameDiv}>
          {userData.firstname || info.firstname} {userData.lastname || info.lastname}
        </div>
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
            Télécharger un avatar
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
              defaultValue={userData.email || info.email}
              color="primary"
              onChange={e => setInfo({ email: e.target.value })}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Nom"
              defaultValue={userData.lastname || info.lastname}
              color="primary"
              onChange={e => setInfo({ lastname: e.target.value })}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Prénom"
              defaultValue={userData.firstname || info.firstname}
              color="primary"
              onChange={e => setInfo({ firstname: e.target.value })}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Pays actuel"
              defaultValue={userData.user_country || info.user_country}
              color="primary"
              onChange={e => setInfo({ user_country: e.target.value })}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Ville actuelle"
              defaultValue={userData.user_city || info.user_city}
              color="primary"
              onChange={e => setInfo({ user_city: e.target.value })}
            />
          </div>
        </form>
      </div>
      {/* <form className={classes.root} noValidate autoComplete="off">
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
      </form> */}
    </wrapper>
  );
}
