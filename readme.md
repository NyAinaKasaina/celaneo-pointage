# Projet "Pointage"

## Modules utilisés
- Express
- Sequelize
- Sqlite3

## Liste des scripts

Dans le répertoire du projet, vous pouvez lancer : 

### `npm install`
Installer les dépendances du projet référencées dans le fichier package.json


### `npm start`

Lancer l'application en mode développement:
Ouvrir le lient URL [http://localhost:3000](http://localhost:3000) via des API Client (notamment postman, pour le développement de cette application).


Les interactions avec le serveur seront visible également dans le terminal.

### `npm test`

Pour lancer les tests avec jest contenus dans le répertoire tests.

## Liste des endpoints
BASE_URI + :
- '/'               : Liste les employés
- '/employees'      : Liste les employés
- '/checkin'        : Pointer en entrée
- '/checkout'       : Pointer en sortie
- '/registrations'  : Liste des enregistrements 'checkin' et 'checkout'
- '/timesheets'     : Liste des feuilles de temps de l'employé connecté

Le fichier nommé "celaneo_pointage.postman_collection.json" est une collection postman contenant l'intégralité des endpoints développés dans ce projet.

Dans le menu "File" de Postman pouvez l'importer et tester chaque endpoint via l'application.