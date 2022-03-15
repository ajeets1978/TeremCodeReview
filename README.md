# React Native Code Challenge

A React Native project with CRUD operation for Contractors, using GraphQL.

## Prerequisites

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Expo CLI](https://docs.expo.dev/)

## Installation

```sh
$ git clone https://github.com/ajeets1978/CodeChallenge.git
$ cd CodeChallenge
$ yarn install
```

## Testing

### Unit Tests

`yarn test` will run tests of components and plain JS code.

### End-to-End Tests

- TBD using Detox

## Running

- In one terminal: `cd server; yarn server`
- In another terminal: `yarn start`

## Plans

- Update the List contractor to use Subscription from Graphql to monitor changes and update the screen, instead of using tools like Redux / state or context management.
- Plan to connect graphql with MongoDB or PostgreSQL

- Wish I have that plenty of time to do all this in this code challenge :)

## Trade Off

- Prefer TDD approach but compromised to reverse for the code challenge
