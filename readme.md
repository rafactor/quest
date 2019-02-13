# QUEST

This project is a questionnaire is a key component in a larger application for immigration practitioners or another professional who needs personal information from clients. The professional will be able to select a client in the Customer Component (TBD) and select a Questionnaire to send through the app or create a custom set of questions.

## Prerequisites Accomplished

- Use Node and Express Web Server
- Use Postgres Database (Heroku) and Sequelize
- Has api calls:
 - GET Questionnaires (minimum requirement)
 - GET QUestionnaire by id
 - POST Questionnaire (minimum requirement)
 - DELETE Questionnaire
 - PUT Questionnaire
- Deployed in Heroku
- Use of new technologies
 - Material Design Lite
 - pg-hstore node package - used with sequelize
 - morgan node package -- used to log api calls
 - Styling using SCSS
 - Seed sample files using Sequelize
- Polished frontend with Material Design
- Folder structure that meets MVC Paradigm
- Good quality coding standards 
- Use of dotenv to not expose sensitive information

## Document Schema
- Check database relationship schema document in the documents folder

## Next Steps
- Build create and update functionalities for auxiliar fields (reusable dropdown menus with answers options)
- Build create and update functionalities for Questions inside each Questionnaire, binding option lists from auxiliary table
- Custom configuration panel to select a prospect questionnaire to be on the non-logged page