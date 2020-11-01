In the previous example the action didn't do anything useful, it just printed information to the console.

In this exercise you will be creating an action that runs the linter.

Lets look at the script.

1. Notice that we are using another predefined action on line 17 where we specify the version of NodeJS to install.
2. The steps would then be the steps you would run manually or in a shell script:
    1. We install the packages from the package manifest.
	2. We run the linter using the script alias in the package manifest.
	
Before continuing enable this action by changing the branches from `['none']` to `['master']`. This will trigger the action when there is a push on the master branch. Also note that this action is also triggered by a pull request. Again make sure this is triggered by the master branch.

Now make a commit and push to see how the action gets run on the server.

Change line 21 in `index.js` to declare `json` as a variable and not as a constant:

```javascript
let json = await fs.readJson('./public/quotes.json')
```

If you run the linter in the terminal this is flagged as an **error**.

<table ><tbody ><tr><td><details><summary>Commit and push the code: what happens when it runs on the server?
</summary><hr>
The pipeline fails! If you drill down into the details you will see that there are two annotations. The first lets you know that the command triggered an error and the second that the pipeline failed.
</details></td></tr></tbody>
</table>

Change the same line by replacing the `const` but this time adding a semicolon to the end of the line:

```javascript
const json = await fs.readJson('./public/quotes.json');
```

If you run the linter in the terminal this is flagged as a **warning**.

<table ><tbody ><tr><td><details><summary>Commit and push the code: what happens when it runs on the server?
</summary><hr>
The pipeline passes. Warnings don't trigger the non-zero exit code. If you examine the logs on the server you will see that the annotation flags up the warning.
</details></td></tr></tbody>
</table>

## Test Your Understanding

The script is making use of the package manifest to install the packages and run the linter.

<table ><tbody ><tr><td><details><summary>Modify the script so that it only installs the linter. Run the linter by passing the path to the <code>eslint</code> executable.
</summary><hr>
<pre>
- name: install the linter
  run: npm install eslint
- name: run the linter
  run: ./node_modules/.bin/eslint .
</pre>
</details></td></tr></tbody>
</table>

Before continuing disable this action by changing the branches from `['*']` to `['none']`
