import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  config: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export default function Openselect() {
  const classes = useStyles();
  const [country, setCountry] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className={classes.config}>
      <h5>Configurer mon expatriation</h5>
      <IconButton>
        <SettingsOutlined fontSize="medium" />
      </IconButton>
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Morocco</MenuItem>
          <MenuItem value={20}>Germany</MenuItem>
          <MenuItem value={30}>Tunisia</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}
