GitHub Actions are defined in yaml files and are located in the `.github/workflows/` directory.

The example shown is simple but shows all the key parts you need to include.

1. Each action file needs to have a name, this one is called **Basic**.
2. Next we specify what git actions will trigger the workflow. In this example it is triggered whenever any branch is pushed to the server.
3. The pipeline consists of one or more **jobs**. This action has a single job called **Test**.
4. Each job needs to run on a server, the `uses` key lets us specify what OS and version to use. In our example we want to use the latest version of Ubuntu.
5. There are some pre-built actions that we can use. Here we use an action called checkout that checks out the latest commit.
6. Now we describe the steps for the action to do. We can insert labels that describe each part of the process.
7. Each step is now defined as lines in a shell script. In our example we are using the `echo` command to print to the console.

## Test Your Understanding

1. Create another label