# Table Schema Design

Migrations are like Git for Database Schemas.

Version control of your schema database.
Migrations keep your DB design in sync with the application code.

> Every change to the DB schema must be recorded in a migration file.

## Migrations

Install the `knex cli` : `npm i -g knex` or `yarn global add knex`

Create a knex configuration file. (knexfile.js) / sort of like package.json Type: `knex init`

Update to teach Knex how to connect to our database

To create a migration type: `knex migrate:make migrationName`

> I need to make a change to the database structure.
> &mdash; The Developer's inner voice

To run a migration type: `knex migrate:latest`

## Seeds

To create a seed: `knex seed:make nameOfSeed`

To run the seeds: `knex seed:run`

del() will delete for your seeds, truncate() will delete and reset the primary keys (in our case, the ID!)
