# Enterprise App

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Tools

### [Husky](https://github.com/typicode/husky)

Integration with git hooks to allow for triggering events during git lifecyle (ie: git commit).

Was setup initially in project by running `npx husky install`. _This command does not have to be ran again._

#### Files

1. `.husky/*`

### [Lint-Staged](https://github.com/lint-staged/lint-staged)

Used for easily configuring what commands to run during git staged lifecyle hook. Used in combination with **husky**.

#### Config

Lives in `package.json`, under **lint-staged**.

### [Commitizen](https://github.com/commitizen/cz-cli)

Used to format and assist with git commit messages.

#### Config

Lives in `package.json`, under **config.commitizen**.

#### Commands

- `git commit` - When running this, **commitzen** will take over because of **husky** hook integration.

### [Prettier](https://github.com/prettier/prettier)

CLI tool for formatting files in your project. Keeps formatting consitent with an opinionated approach to reduce decision overhead and keep things simple.

#### Commands

- `git commit` - When running this, **prettier** will take over because of **husky** hook integration.
- `npx prettier . --check`
- `npx prettier . --write`

#### Files

1. `.prettierrc`
1. `.prettierignore`

#### Config

- `.prettierrc`
