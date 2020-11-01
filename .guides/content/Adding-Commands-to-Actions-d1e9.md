In the previous example the action didn't do anything useful, it just printed information to the console.

In this exercise you will be creating an action that runs the linter.

Lets look at the script.

1. Notice that we are using another predefined action on line 17 where we specify the version of NodeJS to install.
2. The steps would then be the steps you would run manually or in a shell script:
    1. We install the packages from the package manifest.
	2. We run the linter using the script alias in the package manifest.
	
Before continuing enable this action by changing the branches from `['none']` to `['master']`. This will trigger the action when there is a push on the master branch. Also note that this action is also triggered by a pull request. Again make sure this is triggered by the master branch.

Now make a commit and push to see how the action gets run on the server.

## Test Your Understanding

The script is making use of the package manifest to install the packages and run the linter.

<table ><tbody ><tr><td><details><summary>Modify the script so that it only installs the linter. Run the linter by passing the path to the <code>eslint</code> executable.
</summary><hr>
<pre>

</pre>
</details></td></tr></tbody>
</table>
