So far in our DevOps journey we have been writing automated scripts that run on our development workstation (our Codio box).

Continuous Integration processes on the other hand are normally run on the server.

We will be referring to  a Continuous Integration / Continuous Delivery pipeline but what does that mean?

A Continuous Integration (CI) pipeline defines a number of steps to carry out on a project after it is pushed to the GitHub server.

When a step completes without any errors the next step is invoked but if a step fails the process exits and the code is flagged with the issue.

The pipeline is triggered whenever the GitHub server received commits pushed from a developer and depending on the results of the pipeline the commit can be given a health rating which can be used to decide whether the code can be deployed or not.

> If you use the **Pull Request** feature in GitHub it can be configured to automatically decline to merge code that is flagged as being in poor health.

There are lots of different tools that can be used to build CI pipelines:

1. GitHub Actions
2. GitLab CI
3. Jenkins
4. Travis

In this tutorial we will be focussing on the use of [GitHub Actions](https://github.com/features/actions).

## Issues

As of the time of writing, Microsoft has delayed the rollout of GitHub Actions to self-hosted enterprise servers (which is what Coventry University is running). As a result of this you will need to perform the following additional steps until this is fixed.

1. You will need to create an account on the [public GitHub server](https://github.com).
2. Create an empty private repository called `github-actions-demo` and copy the clone URL to the clipboard.
3. Add another git remote called `github`.
