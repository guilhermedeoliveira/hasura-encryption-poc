SHELL := /bin/bash # Use bash syntax

up:
	docker-compose up -d

down:
	docker-compose down

clean:
	docker-compose down
	docker rmi graphql-engine

build:
	docker-compose build

default: run