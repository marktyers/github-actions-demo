Now you have learned how to write bash scripts we can make use of these in our project.

In this section you will learn about git hooks and practice writing them.

A **Git Hook** is a shell script that runs either before or after git events such as **commit** or **push**.

To create a git hook you need to create a shell script in a specified directory with a specified name. So long as you make it executable and provide the correct _shebang_ it will automatically run at the appropriate time.

Git Hooks are a good way to automatically check your code by running the tests you would normally start manually. In this way you don't need to remember to do this.

If you remember, shell scripts exit with a status of `0` on success and a non-zero number if something went wrong. When your hook scripts run, a non-zero exit code will tell git to abort the current operation allowing you to fix the issue.
