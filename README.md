<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## About the Application
<h5>A backend API project using Nestjs that uses Microservices architecture built with RabbitMQ, NoSQL database such as MongoDB to persist data and Docker for containerising the application.</h5>
<ul>
<h5>Purpose of building the App:</h5>
<p>To learn!</p>
<li>Authentication using JWT tokens, store cookies and start session for current user</li>
<li>Scalable architecture and reduce repeatativeness in code base</li>
<li></li>
</ul>


## Installation

```bash
$ npm install
```

## Running the app

### Prerequisites
Make sure to have Docker installed in your machine.
To istall Docker please [refer here](https://docs.docker.com/engine/install/)

```Once Docker installation is successfull head over to next step!!```

```bash
# development
$ docker-compose up --build -V
```
This would pull the necessary docker images from dockerhub and start the docker containers

## API references

```sh
POST http://localhost:3001/auth/users

Request BODY:
{
  "email":"some@email.com",
  "password":"some-password"
}
```

```sh
POST http://localhost:3001/auth/login

Request BODY:
{
  "email":"some@email.com",
  "password":"some-password"
}
```

```sh
POST http://localhost:3000/orders

Request BODY:
{
  "name":"some-product-name",
  "price":0.00,
  "phoneNumber":"+301111111111"
}
```

```sh
GET http://localhost:3000/orders

Response Type:
[
  {
  "name":"some-product-name-1",
  "price":0.00,
  "phoneNumber":"+301111111123"
  },
  {
  "name":"some-product-name-2",
  "price":0.00,
  "phoneNumber":"+301111111234"
  },
  .
  .
  .,
  {
  "name":"some-product-name-N",
  "price":0.00,
  "phoneNumber":"+301111111111"
  }
]
```
