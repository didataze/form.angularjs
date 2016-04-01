Formulaires dynamiques
Afficher un formulaire construit dynamiquement, d’après une description des champs de saisie en JSON.

Utiliser l’URL suivante pour récupérer la description du formulaire :
https://api.mongolab.com/api/1/databases/forms/collections/forms/51669d15e4b04a20de65fc58?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i

Enregistrer les données saisies par l’utilisateur, en envoyant un objet JavaScript (avec les noms de propriétés tels qu’ils sont spécifiés dans la description du formulaire) via une requête POST à l’adresse suivante :
https://api.mongolab.com/api/1/databases/forms/collections/data?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i
Les objets créés sur le serveur sont visibles à l’adresse : https://mongolab.com/databases/forms/collections/data (login avec angular1/angularjs1)

Afficher un message explicite à côté des champs en erreur.

Contenu de la description du formulaire :
{  "_id": {"$oid": "51669d15e4b04a20de65fc58"},
   "fields": [
       {"property": "prenom", "label": "Prénom", "type": "text", "constraints": {}},
       {"property": "nom", "label": "Nom", "type": "text", "constraints": {"required": true}},
       {"property": "age", "label": "Age", "type": "number", "constraints": {"required": true}},
       {"property": "sexe", "label": "Sexe", "type": "select", "list": {"H": "Homme", "F": "Femme"}}
       {"property": "email", "label": "Adresse mail", "type": "email", "constraints": {}}
   ]
}
=> user: {prenom:”...”, nom:”...”, ...}