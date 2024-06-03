# Simple boilerplate for Postgres and Express

## Run postgresql in docker container

When Docker desktop war properly installed, run:
    
    docker compose up

You may want to change the host port before, in the example ist is *15432*.

## Run the application

Install dependencies with:

    npm install

On terminal set environment variables for `DB_USER` and `DB_PASSWORD`. Change `db/client.js` if you also want to make 
host and port configurable by environment variables. Also, you may want to have a look into https://github.com/motdotla/dotenv 
for configuration management in future projects.

Once the environment variables are properly set, run:

    npm run start

Or add a run configuration in Intellij.

To list all students you can then run a GET request to `http://localhost:3000/students`




