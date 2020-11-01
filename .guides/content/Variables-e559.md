As with other programming languages we can declare variables to hold data but unlike other languages, shell variables are extremely powerful.

Variables are created where needed without the need for a formal declaration. The convention is to declare all variables using uppercase letters and underscores.

```shell
FULL_NAME="John Doe"
```

To access the contents of a variable you need to add a `$` prefix:

```shell
echo $FULL_NAME
```

Shell supports string concatenation as well by wrapping the variables in `${}` (just like JavaScript).

```shell
echo "my full name is ${FULL_NAME}"
```

### Test Your Understanding

1. Declare two variables, `FIRST` and `LAST` and assign your first and last names.
2. Print out the string `my name is XXX YYY`, replacing the `XXX` with your first name and `YYY` with your last name.
3. Is shell case-sensitive? Carry out an experiment to find out.

## Capturing the Output of a Command

One of the important and widely-used features of shell is the ability to run a shell command and store its output in a variable. It is widely used that there is a powerful shortcut to achieve this.

Any commands you place in `$()` are evaluated before the main command on that line and the output of the execution is then used by the main command. For example:

```shell
NODE_VERSION=$(node -v)
echo NODE_VERSION # prints v14.15.0
```

Earlier versions of bash used backticks instead and you will still find a lot of scripts that use this notation, both are valid:

```shell
NODE_VERSION=`node -v`
```

### Test Your Understanding

1. Modify the script to print the current date and time using the `date` command.
2. Modify your script to just print the date in the format DD/MM/YY. You should consult the **Man Page** using `man date` and [this article](https://www.cyberciti.biz/faq/linux-unix-formatting-dates-for-display/).