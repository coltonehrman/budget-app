# Enterprise App

## Tools

### Husky

Integration with Git hooks to allow for triggering events during Git lifecyle (ie: git commit).

Was setup initially in project by running `npx husky install`. _This command does not have to be ran again._

### Lint-Staged

Used for easily configuring what commands to run during Git staged lifecyle hook. Used in combination with **Husky**.

### Prettier

CLI tool for formatting files in your project. Keeps formatting consitent with an opinionated approach to reduce decision overhead and keep things simple.

#### Commands

- `npx prettier . --check`
- `npx prettier . --write`

#### Files

1. `.prettierrc`
1. `.prettieignore`
