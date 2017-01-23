# typed-cypress

TypeScript type definitions for [Cypress](https://www.cypress.io/).
Provided by [StackState](http://www.stackstate.com/).

## Installation

```
typings install github:StackVista/typed-cypress dt~mocha --global --save
```

This should write to `typings.json` something like this:

```json
{
  "globalDependencies": {
    "cypress": "github:StackVista/typed-cypress",
    "mocha": "registry:dt/mocha#2.2.5+20161221010438"
  }
}
```

Now, depending on your setup, you may need something like this at the top of your spec files (`integration/*.ts`):

```
/// <reference path="../typings/index.d.ts" />
```
