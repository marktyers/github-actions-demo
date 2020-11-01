To run a script you use the bash program:

```shell
$ bash simple.sh
```

Try this now.

Every unix system has an `sh` alias that points to the active shell (in our case `bash`). This means you can run the script using the `sh` alias instead.

```shell
$ sh simple.sh
```

> The `echo` command is used to print information to the console. Strings need to be included in double-quotes.

A more common way to run shell scripts is to add a **shebang** to the top of the file. This tells the script what program to use to run it.

If you examine the first line in the `simple.sh` script you can see that the shebang points to the `bash` program. We need to include the full path to this command.

Once this is set up you can run the command using:

```shell
$ ./simple.sh
  -bash: ./simple.sh: Permission denied
```

Something is not right here!

The problem is that, for the shebang to work, the file must be flagged as executable in the file permissions.

```shell
$ ls -l simple.sh 
  -rw-rw-r-- 1 codio codio 81 Oct 31 11:59 simple.sh
```

This shows that the file is readable (`r`) and writable (`w`) but the executable flag (`x`) is not set.

To set the file as excutable:

```shell
$ chmod +x simple.sh 
$ ls -l simple.sh 
  -rwxrwxr-x 1 codio codio 81 Oct 31 11:59 simple.sh
```

You can now see that the execute (`x`) flag is set, so we can run the script like this:

```shell
$ ./simple.sh
```

before continuing please set the permissions and check the shebang is working.

## Exit Codes

When a unix command returns control to its parent process it provides an **exit code**. This is a number between 0-255 and can then be used by the parent process to decide what action to take. If you don't specify this, the script will exist with code `0` which signifies success.

Any non-zero exit code signifies **failure**.

```shell
echo "oops, something went wrong!"
exit 1
```

> All unix commands work in the same manner including the node packages such as `ava` and `eslint`. This is how they tell the system whether the tests passed/failed.

The exit code from the last command or shell script is stored in a special system variable called `$?` and this can be read and used.

```shell
$ ./simple.sh
$ echo $?
  0
```

### Test Your Understanding

Modify the `simple.sh` script to return an exit code of `1`. Run the script and then print out the special variable. Is the script returning the correct value?
