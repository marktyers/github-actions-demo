A common task is to read data from and write data to a file. Unix supports a powerful feature called **pipes**.

To read from a file we use the `<` symbol to pipe the contents of the file into a variable:

```shell
NAMES=$(< public/names.csv)
```

To save the contents of the variable to a file we reverse the direction of the "arrow".

```shell
echo $NAMES > "public/names2.csv"
```

<table ><tbody ><tr><td><details><summary>Run the script a few times and examine the <code>names2.csv</code> file. Replace the <code>&gt;</code> with <code>&gt;&gt;</code>. Run the script again a few times and examine the <code>names2.csv</code> file.
</summary><hr>
To <strong>append</strong> the data you would use the <code>&gt;&gt;</code> pipe.
</details></td></tr></tbody>
</table>


The echo command displays the data but, instead of being displayed on-screen, it is "displayed" in the file.

### Test Your Understanding

1. There is a file called `quotes.json` in the `public/` directory. Modify the `input.sh` script to read in the contents of the file and display it in the console.
2. Create a file called `name.csv` in the `public/` directory containing your firstname and lastname separated by a comma.
3. Modify the script to append another first and last name to the same file.

## Prompting the User For Input

There are scenarios where you need to prompt the user to enter information during the execution of a script. The `read` command provides this facility.

```shell
echo "please enter your name:"
read NAME
echo $NAME
```

The script pauses and waits for you to type in a string and press the enter key.

There is a shortcut way to prompt the user and capture the value entered. Replace the code above with the following:

```shell
read -p "please enter your name: " NAME
echo $NAME
```

The `-p` flag allows you to supply the prompt message.

You will come across scenarios where you simply want to detect a single keypress. There is a second flag you can use that will automatically press the enter key after the specified number of characters have been entered by the user.

Add the following code to the script:

```shell
echo "press any key to continue:"
read  -s -n 1 CONTINUE
echo "you pressed the '${CONTINUE}' key"
```

- The `-n` flag specifies a single character
- The `-s` flag specifies **silent mode** where the key is not echoed to the console.

Of course you can use any combination of these flags to suit your specific requirements.

### Test Your Understanding

1. Modify the script to prompt the user for their first name and then their last name.
2. Print their full name to the console.
