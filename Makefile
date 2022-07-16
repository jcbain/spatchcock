stop:
	docker rm -f spatchcock-server || @echo $(shell "docker rm spatchcock-server failed $$?. moving on")
	docker rm -f spatchcock-ui ||  @echo $(shell "docker rm spatchcock-ui failed $$?. moving on")
	docker network rm spatchcock || @echo $(shell "docker network rm failed $$?. moving on")

build: 
	docker network create spatchcock
	docker build -t spatchcock-server -f ./server/Dockerfile ./server
	docker build -t spatchcock-ui -f ./ui/Dockerfile ./ui

run: build
	docker run --rm --env-file ./server/.env -it --network spatchcock --name spatchcock-server spatchcock-server npm start

dev: build
	docker run -d --rm --env-file ./server/.env -it --network spatchcock -e NODE_ENV=development -v ${PWD}/server:/app --name spatchcock-server spatchcock-server npm run dev
	docker run -d --rm --env-file ./ui/.env -it --network spatchcock -p 8080:8080 -e NODE_ENV=development -v ${PWD}/ui:/app --name spatchcock-ui spatchcock-ui npm run start