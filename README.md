<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Technical Requirements

### Technologies Used

- **NestJS**: A framework for building efficient and scalable applications in Node.js. We will use TypeScript to enhance code quality and maintainability.

- **PostgreSQL**: A relational database that provides efficient and reliable storage.

### Environment Configuration

Make sure to create a `.env` file at the project's root with the following variables and their respective values:

| Variable            | Description                              |
|---------------------|------------------------------------------|
| POSTGRES_PASSWORD   | Password for the PostgreSQL user          |
| POSTGRES_USER       | Username for PostgreSQL                   |
| POSTGRES_DB         | PostgreSQL database name                 |

## Important Note

**Before running the project, ensure you have loaded the `.env` file and executed the `init:services` script to initialize the local database instance.**


```bash
$ pnpm run init:services
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

