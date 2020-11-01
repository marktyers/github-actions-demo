#!/bin/bash

# input.sh

NAMES=$(< public/names.csv)
echo $NAMES

echo $NAMES > "public/names2.csv"

echo "please enter your name:"
read NAME
echo $NAME
