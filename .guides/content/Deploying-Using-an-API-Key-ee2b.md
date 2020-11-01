In the previous exercise you deployed to a Heroku server but to do this you needed to be logged in. Whilst this is a viable solution if you are working with a manual workflow this won't allow you to trigger automatic deployment.

The solution is to use an API key which includes all the necessary credentials needed to connect to the server and deploy the app.

Heroku provide a deploy tool which enables you to authenticate using such a key instead of requiring the use of a username and password. Each API key is unique to that deployment and can be re-generated from time to time.

You will first of all need to install the `dpl` tool. This is written in the Ruby language so the `ruby-dev` toolchain needs to be installed (this was included in the `setup.sh` steps):

```shell
$ sudo gem install dpl
```

Once this set up has been completed, deployment is triggered using the `dpl` tool.

You will need two pieces of information from your Heroku account:

1. The account key `API_KEY`.
2. The name of the Heroku app `APP_NAME`.

To generate an API key you can use the Heroku CLI:

```shell
$ heroku authorizations:create
  Creating OAuth Authorization... done
  Client:      <none>
  ID:          c294adf1-8d2a-4ae4-b205-fade1c4cd32c
  Description: Long-lived user authorization
  Scope:       global
  Token:       122cb378122cb378-a7afdd9751a7 at:  Sun Nov 01 2020 13:20:04 GMT+0000 (GMT) (less than a minute ago)
```

The command below will deploy your app.

```shell
$ dpl --provider=heroku --app=APP_NAME --api-key=API_KEY
```

Try running this from the terminal, substituting the two values for the placeholld trigger the deployment process and the latest version of your app should now be on the live server.
