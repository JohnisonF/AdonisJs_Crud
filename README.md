# Description

It's just a simple crud made in AdonisJs Api for testing purposes. Also uses PostgreSQL.

## Start project

You must set a file ```.env``` with the example file and run the following command to migrate with PostgreSQL: ```adonis migration:run```.
Run ```npm i``` to install the packages and ```npm start``` to start the project.

## Endpoints

|    EndPoint        |   HTTP Method   |   Description   |
| ------------------ |:-------------:|:-------------:|
| ```/```            | GET    | Welcome (AdonisJs)  |
| ```/carros```      | GET    | List all the cars  |
| ```/carros```      | POST   | Add a new car  |
| ```/carros/{id}``` | PUT    | Update the informations of a car  |
| ```/carros/{id}``` | DELETE | Delete the car information  |

