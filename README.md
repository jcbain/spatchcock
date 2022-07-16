# Spatchcock

The git for food recipes.

## Installation

### Requirements

- GNU Make => v3.8
- Docker => v20

Spatchcock is a collection of microservices each designed to run independently on their own docker container and all attached to the same network to facilitate communication between them. That being said, each service has an associated `Dockerfile` and can be run independently of the other services. However, the services are designed to work together and it is recommended to run them together. The following instructions serve as the quickest means to get `spatchcock` the app up and running and not the individual services of `spatchcock`.

#### Development environment

1. Download the repository and navigate to it once it is downloaded. _Note, `/path/to` below is a stand in for the path on your system. Please replace with your specific path requirements_

```sh
# change directory to `spatchcock`
cd /path/to/spatchcock
```

2. Create containers by using the `Makefile`. To build containers run:

```sh
make build
```

This will remove any containers with the same names as the ones about to be built as well as build the network to bridge these containers

3. Start `spatchcock` in development mode. Each container can be run in development to make it convenient to develop with.

```sh
make dev
```
