In the previous exercise you learned how to create a step that performs a useful task.

Before continuing enable this action by changing the branches from `['none']` to `['master']`.

Try make a commit and push. This runs the **Multi-Stage** pipeline. If you drill down in GitHub you will see that  there are two steps: **Linter** and **Step-2**.

Introduce a linting error into the `index.js` file and commit/push. Notice that if one step fails the entire pipeline fails.

## Test Your Understanding

The project includes some simple unit tests that use `ava`. Modify the pipeline and replace the **Step-2** step with one called **Unit Tests**. This should run the unit test suite.
