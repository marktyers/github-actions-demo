GitHub Actions are defined in yaml files and are located in the `.github/workflows/` directory.

The example shown is simple but shows all the key parts you need to include.

1. Each action file needs to have a name, this one is called **Basic**.
2. Next we specify what git actions will trigger the workflow. In this example it is triggered whenever any branch is pushed to the server.
3. The pipeline consists of one or more **jobs**. This action has a single job called **Test**.
4. Each job needs to run on a server, the `uses` key lets us specify what OS and version to use. In our example we want to use the latest version of Ubuntu.
5. There are some pre-built actions that we can use. Here we use an action called checkout that checks out the latest commit.
6. Now we describe the steps for the action to do. We can insert labels that describe each part of the process.
7. Each step is now defined as lines in a shell script. In our example we are using the `echo` command to print to the console.

If you want more than one command to run you need to use a slightly different syntax.

Make a commit and push to the github server.

You will see an **Actions** tab on your GitHub repository page. Click on this and you will see a list of workflows down the left hand side. If you look in this you will find your **Basic** workflow. Click on this to open it.

You will now see the commit you have just made. Click on this to see the details of the Pipeline. Now the left-hand column displays the steps, in this case there is a single step called **Test**. If you click on the **Test** label you can see the steps. Each can be expanded to see the command run and the results.

## Test Your Understanding

<table ><tbody ><tr><td><details><summary>Create another step called <strong>Env Vars</strong> and use this to print out a list of all the environment variables. Test this by committing and pushing.
</summary><hr>
<pre>
- name: env vars
  run: printenv
</pre>
</details></td></tr></tbody>
</table>

<table ><tbody ><tr><td><details><summary>Create another step called <strong>GitHub Variables</strong> and in this step print out the <code>GITHUB_WORKSPACE</code> and <code>GITHUB_EVENT_NAME</code> variables.
</summary><hr>
<pre>
- name: GitHub Variables
  run: |
    echo $GITHUB_WORKSPACE
    echo $GITHUB_EVENT_NAME
</pre>
</details></td></tr></tbody>
</table>

4. 

> Hint: indentation is very important in yaml files. You can use a [YAML Checker]](https://yamlchecker.com) to make sure your indentation and overall syntax is valid before committing and pushing.

Before continuing disable this action by changing the branches from `['*']` to `['none']`
