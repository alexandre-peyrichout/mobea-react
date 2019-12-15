import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  title: {
    color: '#fff',
    backgroundColor: '#E8CA52',
    textAlign: 'center'
  },
  subtitle: {
    color: 'rgb(255, 140, 0)'
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Layout>
      <div>
        <Paper className={classes.root}>
          <div>
            <Typography className={classes.title} variant="h4">
              POLITIQUE DE CONFIDENTIALITE
            </Typography>
          </div>
          <br />
          <Typography className={classes.subtitle} variant="h5">
            1.Collecte de l’information
          </Typography>
          Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous
          vous connectez à votre compte, et / ou lorsque vous vous déconnectez. Les informations
          recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone. En outre, nous
          recevons et enregistrons automatiquement des informations à partir de votre ordinateur et
          navigateur, y compris votre adresse IP, vos logiciels et votre matériel, et la page que
          vous demandez. Plusieurs offres de services sont répertoriées et vous ferez le choix selon
          votre profil et votre destination.
          <br />
          <br />
          <Typography className={classes.subtitle} variant="h5">
            2. Utilisation des informations
          </Typography>
          Toute les informations que nous recueillons auprès de vous peuvent être utilisées pour : •
          Personnaliser votre expérience et répondre à vos besoins individuels • Fournir un contenu
          publicitaire personnalisé • Améliorer notre site Web • Améliorer le service client et vos
          besoins de prise en charge • Vous contacter par e-mail • Administrer un concours, une
          promotion, ou une enquête
          <br />
          <br />
          <Typography className={classes.subtitle} variant="h5">
            3. Confidentialité du commerce en ligne
          </Typography>
          Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos
          informations personnelles ne seront pas vendues, échangées, transférées, ou données à une
          autre société pour n’importe quelle raison, sans votre consentement, en dehors de ce qui
          est nécessaire pour répondre à une demande.
          <br />
          <br />
          <Typography className={classes.subtitle} variant="h5">
            4. Divulgation à des tiers
          </Typography>
          Nous ne vendons, n’échangeons et ne transférons pas vos informations personnelles
          identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous
          aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties
          conviennent de garder ces informations confidentielles. Nous pensons qu’il est nécessaire
          de partager des informations afin d’enquêter, de prévenir ou de prendre des mesures
          concernant des activités illégales, fraudes présumées, situations impliquant des menaces
          potentielles à la sécurité physique de toute personne, violations de nos conditions
          d’utilisation, ou quand la loi nous y contraint. Les informations non-privées, cependant,
          peuvent être fournies à d’autres parties pour le marketing, la publicité, ou d’autres
          utilisations.
          <br />
          <br />
          <Typography className={classes.subtitle} variant="h5">
            5. Protection des informations
          </Typography>
          Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos
          informations personnelles. Nous protégeons également vos informations hors ligne. Les
          ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables
          sont conservés dans un environnement sécurisé. Est-ce que nous utilisons des cookies ?
          Oui. Nos cookies améliorent l’accès à notre site et identifient les visiteurs réguliers.
          En outre, nos cookies améliorent l’expérience d’utilisateur grâce au suivi et au ciblage
          de ses intérêts. Cependant, cette utilisation des cookies n’est en aucune façon liée à des
          informations personnelles identifiables sur notre site.
          <br />
          <br />
          <Typography className={classes.subtitle} variant="h5">
            6. Se désabonner
          </Typography>
          Nous utilisons l’adresse e-mail que vous fournissez pour vous envoyer des informations et
          mises à jour relatives à votre commande, des nouvelles de l’entreprise de façon
          occasionnelle, des informations sur des produits liés, etc. Si à n’importe quel moment
          vous souhaitez-vous désinscrire et ne plus recevoir d’e-mails, des instructions de
          désabonnement détaillées sont incluses en bas de chaque e-mail.
          <br />
          <br />
          <Typography className={classes.subtitle} variant="h5">
            7. Consentement
          </Typography>
          En utilisant notre site, vous consentez à notre politique de confidentialité.
        </Paper>
      </div>
    </Layout>
  );
}
