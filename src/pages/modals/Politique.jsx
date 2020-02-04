import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../context/Context';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    marginBottom: 30
  },
  subtitle: {
    textAlign: 'justify'
  },
  contenu: {
    textAlign: 'justify'
  }
}));

const Politique = () => {
  const classes = useStyles();
  const { show_POLITIQUE, setShow_POLITIQUE } = React.useContext(Context);

  return (
    <Dialog open={show_POLITIQUE} onClose={() => setShow_POLITIQUE(false)} scroll="paper">
      <DialogTitle>Politique de confidentialité</DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          <Typography className={classes.subtitle} color="primary" variant="h6">
            Collecte de l’information
          </Typography>
          <p className={classes.contenu}>
            Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque
            vous vous connectez à votre compte, et / ou lorsque vous vous déconnectez. Les
            informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone.
            En outre, nous recevons et enregistrons automatiquement des informations à partir de
            votre ordinateur et navigateur, y compris votre adresse IP, vos logiciels et votre
            matériel, et la page que vous demandez. Plusieurs offres de services sont répertoriées
            et vous ferez le choix selon votre profil et votre destination.
          </p>
          <Typography className={classes.subtitle} color="primary" variant="h6">
            Utilisation des informations
          </Typography>
          <p className={classes.contenu}>
            Toute les informations que nous recueillons auprès de vous peuvent être utilisées pour :
            <ul>
              <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
              <li>Fournir un contenu publicitaire personnalisé</li>
              <li>Améliorer notre site Web</li>
              <li>Améliorer le service client et vos besoins de prise en charge</li>
              <li>Vous contacter par e-mail</li>
              <li>Administrer un concours, une promotion, ou une enquête</li>
            </ul>
          </p>
          <Typography className={classes.subtitle} color="primary" variant="h6">
            Confidentialité du commerce en ligne
          </Typography>
          <p className={classes.contenu}>
            Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos
            informations personnelles ne seront pas vendues, échangées, transférées, ou données à
            une autre société pour n’importe quelle raison, sans votre consentement, en dehors de ce
            qui est nécessaire pour répondre à une demande.
          </p>
          <Typography className={classes.subtitle} color="primary" variant="h6">
            Divulgation à des tiers
          </Typography>
          <p className={classes.contenu}>
            Nous ne vendons, n’échangeons et ne transférons pas vos informations personnelles
            identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous
            aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties
            conviennent de garder ces informations confidentielles. Nous pensons qu’il est
            nécessaire de partager des informations afin d’enquêter, de prévenir ou de prendre des
            mesures concernant des activités illégales, fraudes présumées, situations impliquant des
            menaces potentielles à la sécurité physique de toute personne, violations de nos
            conditions d’utilisation, ou quand la loi nous y contraint. Les informations
            non-privées, cependant, peuvent être fournies à d’autres parties pour le marketing, la
            publicité, ou d’autres utilisations.
          </p>
          <Typography className={classes.subtitle} color="primary" variant="h6">
            Protection des informations
          </Typography>
          <p className={classes.contenu}>
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de
            vos informations personnelles. Nous protégeons également vos informations hors ligne.
            Les ordinateurs et serveurs utilisés pour stocker des informations personnelles
            identifiables sont conservés dans un environnement sécurisé. Est-ce que nous utilisons
            des cookies ? Oui. Nos cookies améliorent l’accès à notre site et identifient les
            visiteurs réguliers. En outre, nos cookies améliorent l’expérience d’utilisateur grâce
            au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n’est
            en aucune façon liée à des informations personnelles identifiables sur notre site.
          </p>
          <Typography className={classes.subtitle} color="primary" variant="h6">
            Se désabonner
          </Typography>
          <p className={classes.contenu}>
            Nous utilisons l’adresse e-mail que vous fournissez pour vous envoyer des informations
            et mises à jour relatives à votre commande, des nouvelles de l’entreprise de façon
            occasionnelle, des informations sur des produits liés, etc. Si à n’importe quel moment
            vous souhaitez-vous désinscrire et ne plus recevoir d’e-mails, des instructions de
            désabonnement détaillées sont incluses en bas de chaque e-mail.
          </p>
          <Typography className={classes.subtitle} color="primary" variant="h6">
            Consentement
          </Typography>
          <p className={classes.contenu}>
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShow_POLITIQUE(false)} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Politique;
