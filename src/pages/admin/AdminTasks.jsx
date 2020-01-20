import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Contenu', field: 'content' },
      { title: 'Catégorie', field: 'task_type' }
    ],
    data: [
      { content: 'liste des vaccins obligatoires', task_type: 'Santé' },
      {
        content:
          'Résiliez tous les contrats en cours (eau, gaz, électricité, internet, téléphone, assurances, télésurveillance, etc...)',
        task_type: 'Déménagement'
      },
      {
        content: "Informez l'école des enfants pour transférer les dossiers",
        task_type: 'Déménagement'
      },
      {
        content:
          "Prévenez votre propriétaire si vous êtes locataire et fixez la date de l'état des lieux",
        task_type: 'Déménagement'
      },
      {
        content:
          "Vous gardez votre bien immobilier en France, assurez-vous de la gestion foncière par le biais d'une agence ou d'un organisme",
        task_type: 'Déménagement'
      },
      {
        content:
          'Vous vendez votre bien immobilier en France, assurez-vous de trouver la bonne agence pour la vente',
        task_type: 'Déménagement'
      },
      {
        content:
          "Faites le tri dans vos placards : à vendre, à jeter, à donner.\n- Pour donner, pensez à l'application GEEV",
        task_type: 'Déménagement'
      },
      {
        content:
          'Contactez les fournisseurs de services pour les décomptes définitifs et relevés de compteurs : électricité, gaz, eau, redevance télé, impôts locaux',
        task_type: 'Déménagement'
      },
      {
        content:
          'Constituez un dossier "DEMENAGEMENT" pour y ranger tous les documents importants afin de ne pas les égarer',
        task_type: 'Déménagement'
      },
      {
        content: "Faites l'inventaire pièce par pièce de ce qui sera conservé, jeté ou donné",
        task_type: 'Déménagement'
      },
      {
        content:
          'Choisissez la solution de déménagement : le faire soi-même ou faire appel à des déménageurs professionnels',
        task_type: 'Déménagement'
      },
      {
        content:
          'Mettez en vente ou donnez les objets que vous ne voulez pas conserver dans le nouveau logement (GEEV ou BON COIN)',
        task_type: 'Déménagement'
      },
      {
        content:
          'Faites le plein de fournitures pour le déménagement (cartons/scotch/ficelles/marqueurs/journaux)',
        task_type: 'Déménagement'
      },
      {
        content: 'Pensez à identifier les cartons et à désigner leur contenu',
        task_type: 'Déménagement'
      },
      {
        content: 'Il est temps de tout emballer ! Ne gardez que le strict nécessaire',
        task_type: 'Déménagement'
      }
    ]
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/task')
      .then(response => response.data)
      .then(data => setState({ ...state, data: data }))
      .catch(error => console.log(error));
  }, []);

  return (
    <MaterialTable
      title="Liste des tâches à effectuer"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
