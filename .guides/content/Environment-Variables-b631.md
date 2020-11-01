There are some values that change depending on the computer that the script is running on. For example, each Codio box has a unique URL so this can't be hard coded into a script that needs to be able to run on different

These are variables that are [defined](https://www.digitalcitizen.life/simple-questions-what-are-environment-variables) at the system (OS) level and are available to any program that is running on that system.

To see the variables currently defined:

```shell
$ printenv
  SSH_CONNECTION=192.168.11.51 56058 10.177.237.206 22
  LANG=en_US.UTF-8
  CODIO_BOX_DOMAIN=quota-karl.codio-box.uk
  USER=codio
  CODIO_HOSTNAME=quota-karl
  HOME=/home/codio
  SSH_CLIENT=192.168.11.51 56058 22
  TERM=xterm
  SHELL=/bin/bash
  LOGNAME=codio
  ...
```

As you can see the information stored here is related to the computer system you are using.

To print a specific variable:

```shell
$ printenv SHELL
```

To search for specific ones you can pipe the output of `printenv` to `grep`:

```shell
$ printenv | grep CODIO
  CODIO_BOX_DOMAIN=quota-karl.codio-box.uk
  CODIO_HOSTNAME=quota-karl
```

> In addition to environment variables, you can also store **shell variables** that are only available to the current shell. To include these in the list use the `set` command.

## Creating Environment Variables

You can create your own environment variables using the following steps.

You first declare a shell variable, for example lets create an `ORG` shell variable to store our organisation name:

```shell
$ ORG="Coventry University"
$ echo $ORG
  Coventry University
```

<table ><tbody ><tr><td><details><summary>Try using the <code>printenv</code> command to display the value of your new variable. What happens and why?
</summary><hr>
Nothing gets displayed (the variable can't be found). This is because we have defined a <strong>shell variable</strong> not an environment variable.
</details></td></tr></tbody>
</table>

To turn the shell variable into an environment variable we use the `export` command:

```shell
$ export ORG
$ printenv ORG
  Coventry University
```

To persist environment variables you need to create the variable and export it each time the shell is loaded. In our case the `.profile` file located in the home directory is run so we need to edit this and add our commands to the end:

```shell
# USER DEFINED ENV VARS
ORG="Coventry University"
export ORG
```

To open the `.profile` file you will need to use the nano editor:

```shell
$ nano ~/.profile
```

After editing the file, close the terminal and re-open then check the new env var is defined.

### Test Your Understanding

1. Create a shell variable containing your name.
2. Turn this into an environment variable and print to the screen.
3. Persist this environment variable by modifying the `.profile` script. Now close and re-open the terminal and check the variable still exists.

## Using Environment Variables in Shell Scripts

Environment variables can be used just like variables you define in the script.

Since you can't guarantee that a given env var is defined, one of the most common scenarios is to check before you use it.

If you study the `environment.sh` script you can see how this is done.

### Test Your Understanding

1. Modify the script to exit non-zero if the script is not being run in a Codio box.
