## About the Application
<h3>A backend API project using Nestjs that uses Microservices architecture built with RabbitMQ, NoSQL database such as MongoDB to persist data and Docker for containerising the application.</h3>
<h3>Purpose of building the App :</h3>
<ul>
<p>To learn</p>
<li>Scalable Microservice architecture and reduce repeatativeness in code for cleaner Codebase</li>
<li>Authentication using JWT tokens, create cookies and session for current user</li>
<li>To Secure routes using various Strategies</li>
<li>Containerised development of application using Docker</li>
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
