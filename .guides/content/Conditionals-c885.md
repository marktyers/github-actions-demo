These work in a similar way to other languages.

```shell
if [[ $CONTINUE == "y" ]]; then
   echo "you pressed y"
else
   echo "you didn't press y"
fi
```

As with other languages, the `!` character negates the condition.

```shell
if [[ $CONTINUE != "y" ]]; then
   exit 0
fi
echo "the rest of the script"
```

Empty strings and the number 0 evaluate as false, positive numbers and non-empty strings as true.

You can use the `*` character as a wildcard (represents one or more characters). Study the following code:

```shell
read -p "please enter your university email address: " EMAIL

if [[ $EMAIL == *uni.* ]]; then
	echo "the email address should not contain the \"uni\" part!"
fi
```

### Test Your Understanding

1. Prompt the user for a password (don't echo this to the screen!).
2. If the [length of the password string](https://www.tutorialkart.com/bash-shell-scripting/bash-string-length/) is less than 8 characters warn the user and exit the script with an error.