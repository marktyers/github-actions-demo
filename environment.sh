#!/bin/bash

# environment.sh

if [ -v ORG ]
then
    echo "organisation: ${ORG}"
else 
    echo "env var not set"
fi
