# Superformula Back-end Developer Test

Be sure to read **all** of this document carefully, and follow the guidelines within.

## Context

Build a RESTful API that can `create/read/update/delete` user data from a persistence store.

### User Model

```
{
  "id": "xxx",                  // user ID (must be unique)
  "name": "backend test",       // user name
  "dob": "",                    // date of birth
  "address": "",                // user address
  "description": "",            // user description
  "createdAt": ""               // user created date
  "updatedAt": ""               // user updated date
}
```

### Functionality

- The API should follow typical RESTful API design pattern.
- The data should be saved in the DB.
- Provide proper API documentation.
- Proper error handling should be used.

## What We Care About

Use any libraries that you would normally use if this were a real production App. Please note: we're interested in your code & the way you solve the problem, not how well you can use a particular library or feature.

_We're interested in your method and how you approach the problem just as much as we're interested in the end result._

Here's what you should strive for:

- Good use of current Node.js & API design best practices.
- Solid testing approach.
- Extensible code.

If you have not been specifically asked, you may pick either `Implementation Path: Docker Containers` or `Implementation Path: Cloud-native` requirements below.

## Implementation Path: Docker Containers

### Basic Requirements

- Use Node.js `LTS` and any framework of your choice.
- Use any persistence store. NoSQL DB is preferred.
- Write concise and clear commit messages.
- Write clear **documentation** on how it has been designed and how to run the code.

### Bonus

- Provide proper unit tests.
- Add a read only endpoint to fetch location information based off the user's address (use [NASA](https://api.nasa.gov/api.html) or [Mapbox](https://www.mapbox.com/api-documentation/) APIs)
- Use Docker containers.
- Utilize Docker Compose.
- Setup a CircleCI config to build/test/deploy the service.
- Leverage Terraform or other infrastructure management tooling to spin up needed resources.
- Providing an online demo is welcomed, but not required.

### Advanced Requirements

These may be used for further challenges. You can freely skip these if you are not asked to do them; feel free to try out if you feel up to it.

- Use [hapi](https://hapijs.com/) to build the core feature and use a different framework (such as Express or Loopback) to handle HTTP requests.
- Provide a complete user auth (authentication/authorization/etc) strategy, such as OAuth.
- Provide a complete error handling and logging (when/how/etc) strategy.
- Use a NoSQL DB and build a filter feature that can filter records with some of the attributes such as username. Do not use query languages such as MongoDB Query or Couchbase N1QL.

## Implementation Path: Cloud-native

### Basic Requirements

- Create each endpoint as an individual AWS Lambda in Node.js
- Use any AWS Database-as-a-Service persistence store. DynmamoDB is preferred.
- Write concise and clear commit messages.
- Write clear **documentation** on how it has been designed and how to run the code.

### Bonus

- Use Infrastructure-as-code tooling that can be used to deploy all resources to an AWS account. Examples: CloudFormation / SAM, Terraform, Serverless Framework, etc.
- Provide proper unit tests.
- Use API Gateway to expose AWS Lambdas
- Providing an online demo is welcomed, but not required.
- Bundle npm modules into your Lambdas

### Advanced Requirements

These may be used for further challenges. You can freely skip these; feel free to try out if you feel up to it.

- Describe your strategy for Lambda error handling, retries, and DLQs
- Describe your cloud-native logging, monitoring, and alarming strategy across all endpoints
- Build a filter feature that can filter records with some of the attributes such as username.

## Q&A

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think you are done. There is no deadline for this task unless otherwise noted to you directly.

> What if I have a question?

Create a new issue in this repo and we will respond and get back to you quickly.

### Documentation

#### Local development

From the root of the repository, run `yarn` to install package dependencies.

```sh
sls dynamodb install
```

Will install DynamoDB Local

After installing package dependencies and DynamoDB, the backend API service can be run on a local environment by running `yarn start-api`. This command uses [serverless](https://serverless.com), [serverless.yml](https://github.com/cbaron/node-backend-test/blob/master/serverless.yml), and the plugins referenced inside serverless.yml to emulate a local environment for developing against aws lambda methods.

The lambda methods are implemented in Typescript - `yarn check-types` will run the typescript compiler.

##### React client

A [React](https://reactjs.org/) application currently resides in the `client` directory. To run it, run `yarn start-client`.
The application can be accessed at `http://localhost:9000/`.

#### RESTful API

The following routes have been implemented (See User Model above):

- DELETE /user/\${userId}
- GET /user/\${userId}
- PATCH /user/\${userId}
- POST /user

#### Testing

```sh
# start local server
yarn start

# run test suite
yarn test
```

Will run tests using [jest](https://jestjs.io/). Currently, we need to manually spin up the local server to run tests.

#### TODO

- Add linting to repo
- Add CI/CD with linting, type check, tests, deployment to aws
- Add route to get paginated list of users
- Add more robust integration tests
- Add testing server to integration tests
