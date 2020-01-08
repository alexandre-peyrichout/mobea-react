import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Qu'est-ce que MOBEA ?
      </Typography>
      <p className={classes.contenu}>
        Mobea est une application web. Elle permet de simplifier la mobilité de toute personne
        souhaitant s'installer à l'étranger et vous accompagner tout au long de cette expérience de
        vie. Vous verrez apparaitre en fonction de vos besoins, les outils proposés par MOBEA. Dès
        votre inscription, vous pouvez planifier votre ou vos expatriation(s) en simultané sur une
        carte. Plusieurs offres de services sont répertoriées et vous ferez le choix selon votre
        profil et votre destination.
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Est-ce que MOBEA est une application gratuite ?
      </Typography>
      <p className={classes.contenu}>Evidemment ! c'est affirmatif.</p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Sur quels téléphones puis-je l'utiliser ?
      </Typography>
      <p className={classes.contenu}>
        Mobea couvre les iphones avec IOS et les téléphones Android aussi.
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Quand utiliser Mobea ?
      </Typography>
      <p className={classes.contenu}>
        Nous recommandons de laisser l'application active 24/7 avec notre communauté HappExpat.
        N'importe laquelle est votre situation à l'étranger : expat, étudiant ou expat junior à
        l'international, couple expat avec ou sans enfants, senior(s) retraité(s), femme expat ou
        conjoint d'expat, voyageurs ... vous allez adorer l'appli mobea. Cela peut être très utile
        de partager vos conseils, retours, avis en temps réel sur un endroit ou un produit/ service
        avec votre entourage et les autres utilisateurs ou partager votre passion et/ou loisir avec
        les nouveaux arrivés dans votre ville " Happy expat" et les aider à s'intégrer dans leur
        nouvel environnement.
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Comment s'assurer de la précision des informations partagées sur la plateforme ?
      </Typography>
      <p className={classes.contenu}>
        Il est important d'activer à la fois le GPS et le wifi sur votre téléphone (même non
        connecté à un réseau donné). Nous plateforme est alimentée en temps réel par les
        utilisateurs. C'est pourquoi, les informations sont mises à jour en continu. Vous avez
        besoin d'être connecté au sein de l'application et votre téléphone allumé pour être localisé
        et partager vos news et celles des Happy Expat.
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Comment inviter quelqu'un ?
      </Typography>
      <p className={classes.contenu}>
        L'ajout de vos amis ou futurs amis vous sera proposé lors de la création de votre compte en
        renseignant leurs noms ou en les sélectionnant directement depuis vos contacts. Si vous
        désirez en ajouter de nouveaux à postériori, vous le pouvez le faire très simplement depuis
        les paramètres de l'application. Dans le menu de votre profil, cliquer sur "Inviter un
        contact".
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Dans quels pays le service est-il disponible ?
      </Typography>
      <p className={classes.contenu}>
        Au départ, nous serons présents dans les grandes métropoles. Par la suite, notre objectif
        est d'être présent aux quatre coins du monde dès que tu trouveras une once de connexion aux
        données mobile ou un accès à réseau Wifi.
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Comment contacter votre équipe ?
      </Typography>
      <p className={classes.contenu}>Rien de plus simple : contact@mobea.co</p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Comment supprimer mon compte et l'ensemble des données associées ?
      </Typography>
      <p className={classes.contenu}>
        Envoyez-nous un mail contact@mobea.co A l'avenir, vous pourrez le faire depuis les
        paramètres de l'application. Si vous le faites pour une toute autre raison que de changer de
        smartphone, nous serions ravis de connaitre les raisons qui vous poussent à le supprimer
        afin d'améliorer sans cesse le service. Cette app est le fruit d’une équipe passionnée,
        entièrement dédiés à rendre votre expatriation simplifiée. Vos remarques sont plus
        qu’appréciées.
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Un des membres est hors-ligne. Pourquoi ?
      </Typography>
      <p className={classes.contenu}>
        Généralement, c’est dû à la perte de sa connexion. Cela peut également être dû à la
        suppression de l’application. Dans tous les cas, n’hésitez pas à lui demander de relancer
        l’application pour le retrouver.
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Comment supprimer un membre ?
      </Typography>
      <p className={classes.contenu}>
        Atteindre la dernière sur l’écran principal pour faire apparaître les paramètres. Cliquez
        sur votre liste de Happy Expat et glissez avec votre doigt sur le prénom que vous souhaitez
        supprimer de la gauche vers la droite.
      </p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Combien de personnes puis-je ajouter à mon réseau ?
      </Typography>
      <p className={classes.contenu}>Aucune limite, alors invitez-en le plus grand nombre !</p>
      <Typography className={classes.subtitle} color="primary" variant="h6">
        Comment faire pour obtenir d’avance d’aide ?
      </Typography>
      <p className={classes.contenu}>
        N’hésitez surtout pas à nous contacter par mail sur : contact@mobea.co pour toute demande
        d’aide, retours d’utilisations ou autres remarques pour continuer d’améliorer le service.
      </p>
    </div>
  );
}
