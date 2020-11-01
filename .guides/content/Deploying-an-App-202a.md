Heroku comes with its own tool to allow you to administer it from the terminal. This is installed via s shell script, see the `setup.sh` file for more details:

```shell
$ heroku -v
  heroku/7.47.0 linux-x64 node-v14.15.0
```

The first task is to create an account on the [heroku website](https://heroku.com) and make sure the account is set up OK by logging in.

Now you need to log in to the CLI tool substituting you own Heroku username and password:

```shell
$ heroku login -i
  heroku: Enter your login credentials
  Email: jdoe@gmail.com
  Password: ********
  Logged in as jdoe@gmail.com
```

Next we create a new Heroku stack. This should be run in the directory containing your package.json file.

```shell
$ heroku create
  Creating app... done, ⬢ calm-coast-89070
  https://calm-coast-89070.herokuapp.com/ | https://git.heroku.com/calm-coast-89070.git
```

Heroku will create your server using a random name for its subdomain. If you want a specific one (for example `doej-sem1`) you can pass this as an extra parameter.

```shell
$ heroku create doej-sem1
  Creating ⬢ doej-sem1... done
  https://doej-sem1.herokuapp.com/ | https://git.heroku.com/doej-sem1.git
```
Running the create command sets up the server in the cloud and also adds a new git remote called `heroku`:

```shell
$ git remote -v
  heroku  https://git.heroku.com/calm-coast-89070.git (fetch)
  heroku  https://git.heroku.com/calm-coast-89070.git (push)
```

## Configuring Your App

For the app to deploy successfull on the Heroku server you need to ensure certain information is provided:

1. You need to enable ES6 modules by adding a `type` key to the `package.json` file with a value of `module`.
2. You need to specify which version of NodeJS should be installed. This is achieved by editing the `package.json` file and adding an `engines` key.
3. All packages required to run the server need to be listed with their correct versions in the `dependencies` section.
4. Any packages used during the development process but not needed to run the app (such as `eslint`) should be in the `devDependencies` section.
5. The launch script should be in the `main` key.
6. Heroku will specify the port to run the server on. This will be stored on the server in an environment variable called `PORT`. Your launch script should use this value if available.

The sample project you are practicing with has already been configured correctly so you can use it as a reference.

## Deploying

Once the app is correctly configured deploying is as simple as making a git push to the heroku repository:

```shell
$ git push heroku master
```

If the app is not working you should consult the log files on the server. To live view the end of the logs file:

```shell
$ heroku logs -t
```

Studying the logs should help you figure out what went wrong.