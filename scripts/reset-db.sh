#!/usr/bin/env bash

set -e

echo "Resetting MongoDB database: instructorapidb..."

docker exec instructorapi-mongo mongosh \
    -u root \
    -p root \
    --authenticationDatabase admin \
    --eval "db.getSiblingDB('instructorapidb').instructors.drop()"

echo "Importing sample data into MongoDB database: instructorapidb..."

docker cp seed/instructors.json instructorapi-mongo:/tmp/instructors.json

MSYS_NO_PATHCONV=1 docker exec instructorapi-mongo mongoimport \
    -u root \
    -p root \
    --authenticationDatabase admin \
    --db instructorapidb \
    --collection instructors \
    --file /tmp/instructors.json \
    --jsonArray

    echo "Database reset and sample data import completed."