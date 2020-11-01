#!/bin/bash

# conditionals.sh

echo "press the 'y' key to continue:"
read  -s -n 1 CONTINUE

if [[ $CONTINUE == "y" ]]; then
   echo "you pressed y"
else
   echo "you didn't press y"
fi

if [[ $CONTINUE != "y" ]]; then
   exit 0
fi

echo "the rest of the script"

read -p "please enter your university email address: " EMAIL

if [[ $EMAIL == *uni.* ]]; then
	echo "the email address should not contain the \"uni\" part!"
fi
