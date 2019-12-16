import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, IconButton } from '@material-ui/core';
import VpnKeyOutlined from '@material-ui/icons/VpnKeyOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import AddCircle from '@material-ui/icons/AddCircleOutlineOutlined';
import WorkOutline from '@material-ui/icons/WorkOutlineOutlined';
import Assignment from '@material-ui/icons/AssignmentOutlined';
import AccountBalance from '@material-ui/icons/AccountBalanceOutlined';
import HomeWork from '@material-ui/icons/HomeWorkOutlined';
import SwapCalls from '@material-ui/icons/SwapCallsOutlined';
import QuestionAnswer from '@material-ui/icons/QuestionAnswerOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles(() => ({
  container: {
    padding: '0px',
  },
  avatar: {
  color: 'white',
  backgroundColor: '#6db5a8',
  margin: '10px'
  },
  blocIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50px',
    width: '50px',
    borderRadius: '50%'
  },
  add: {
    border: '1px dashed'
  }
 
}));


export default function Needs() {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <div className={classes.firstBloc}>
      <h5>Besoins</h5>
      <div className={classes.bloc}>
      <div className={classes.blocIcons}>
        <IconButton className={classes.avatar} >
        <Tooltip title="Logement" placement="top">
        <VpnKeyOutlined fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Assurance" placement="top">
        <VerifiedUserIcon fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Santé" placement="top">
        <AddCircle fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Travail" placement="top">
        <WorkOutline fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Administratif" placement="top">
        <Assignment fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Banque" placement="top">
        <AccountBalance fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.add} >
        <Tooltip title="Ajout" placement="top">
        <AddIcon fontSize="medium" />
        </Tooltip>
        </IconButton>  
      </div>
      </div>
      
      </div>
      <div className={classes.secondBloc}>
      <h5>Travail</h5>
      <div className={classes.bloc}>
      <div className={classes.blocIcons}>
        <IconButton className={classes.avatar} >
        <Tooltip title="Télétravail" placement="top">
        <HomeWork fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Reconversion" placement="top">
        <SwapCalls fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.avatar} >
        <Tooltip title="Coacing" placement="top">
        <QuestionAnswer fontSize="medium" />
        </Tooltip>
        </IconButton>
        <IconButton className={classes.add} >
        <Tooltip title="Ajout" placement="top">
        <AddIcon fontSize="medium" />
        </Tooltip>
        </IconButton>
      </div>
      </div>
      </div>
    </Card>
  );
}
