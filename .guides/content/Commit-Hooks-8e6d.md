The first point where we can run a git hook is at the point where a user makes a commit. There are several hooks that can be triggered:

1. The `pre-commit` hook runs when a user tries to make a commit but before the commit is run. If the script exits non-zero the commit is cancelled.
2. The `prepare-commit-msg` is run next. The commit message will be stored in a file and this filename is passed as a parameter.
3. The `commit-msg` hook runs after `prepare-commit-msg` and before the commit takes place. The path to the file containing the final commit message can be checked here and if necessary it can be changed.
4. The `post-commit` hook runs immediately after the commit has happened.

Let's see this in action. Start by staging all the files in the project.

```shell
$ git add --all
```

Now make a commit but pass an empty commit message:

```shell
$ git commit -m ''
```

Look carefully at the shell output. The lines in capitals refer to the shell scripts being run.

Examine the files in the `.githooks/` directory, can you work out what is happening?

> Top Tip: the hook files don't have an extension so there is no colour highlighting in the editor. Use the dropdown list in the bottom-right of the editor and change the file type from txt to shell.

### Test Your Understanding

1. Prompt the user to enter the summary of their commit. This should be made the commit message.
2. Modify the shell script to ask the user to explain _why_ they are making the changes.
3. Modify the script to finally ask them for details of the changes.
4. This should be written to the commit message file and used as the commit message.