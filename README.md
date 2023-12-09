# Enterprise App

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Tools

### [Husky](https://github.com/typicode/husky)

Integration with Git hooks to allow for triggering events during Git lifecyle (ie: git commit).

Was setup initially in project by running `npx husky install`. _This command does not have to be ran again._

### [Lint-Staged](https://github.com/lint-staged/lint-staged)

Used for easily configuring what commands to run during Git staged lifecyle hook. Used in combination with **Husky**.

### [Commitizen](https://github.com/commitizen/cz-cli)

Used to format and assist with Git commit messages.

### [Prettier](https://github.com/prettier/prettier)

CLI tool for formatting files in your project. Keeps formatting consitent with an opinionated approach to reduce decision overhead and keep things simple.

#### Commands

- `npx prettier . --check`
- `npx prettier . --write`

#### Files

1. `.prettierrc`
1. `.prettieignore`
