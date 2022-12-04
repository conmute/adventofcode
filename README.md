# adventofcode

adventofcode.com tasks solved…

## Setup environment

**Install deno:**

Following basic instructions <https://deno.land/manual@v1.28.3/getting_started/installation>

```sh
brew install deno
```

This is bettern than with `dvm` (Deno Version Manager) because we will have `Deno.<autocompletion>` via typescript.

**Setup coding extension:**

Search for `denoland.vscode-deno` and then run `deno.initializeWorkspace` command to enable in workspace.

## Running things

To run a script is to run this command:

```sh
deno run --allow-read ./day1/index.ts
```

To run test is to run this command:

```sh
deno test --allow-read ./deno/test.spec.ts
```
