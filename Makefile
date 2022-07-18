stop:
	docker rm -f spatchcock-server || @echo $(shell "docker rm spatchcock-server failed $$?. moving on")
	docker rm -f spatchcock-ui ||  @echo $(shell "docker rm spatchcock-ui failed $$?. moving on")
	docker rm -f spatchcock-nginx ||  @echo $(shell "docker rm spatchcock-nginx failed $$?. moving on")
	docker network rm spatchcock || @echo $(shell "docker network rm failed $$?. moving on")

build: 
	docker network create spatchcock
	docker build -t spatchcock-server -f ./server/Dockerfile ./server
	docker build -t spatchcock-ui -f ./ui/Dockerfile.dev ./ui
	docker build -t spatchcock-nginx -f ./nginx/dockerfiles/Dockerfile.prod ./nginx

build-dev: 
	docker network create spatchcock
	docker build -t spatchcock-server -f ./server/Dockerfile ./server
	docker build -t spatchcock-ui -f ./ui/Dockerfile ./ui
	docker build -t spatchcock-nginx -f ./nginx/dockerfiles/Dockerfile.dev ./nginx

run: build
	docker run --rm -d --env-file ./server/.env -it --network spatchcock --name spatchcock-server spatchcock-server npm start
	docker run --rm -d --env-file ./nginx/.env -p 80:80 --network spatchcock --name spatchcock-nginx spatchcock-nginx

dev: build-dev
	docker run -d --rm --env-file ./server/.env -it --network spatchcock -e NODE_ENV=development -v ${PWD}/server:/app --name spatchcock-server spatchcock-server npm run dev
	docker run -d --rm --env-file ./ui/.env -it --network spatchcock -p 8080:8080 -e NODE_ENV=development -v ${PWD}/ui:/app --name spatchcock-ui spatchcock-ui npm run start
	docker run --rm -d --env-file ./ui/.env -p 80:80 --network spatchcock --name spatchcock-nginx spatchcock-nginx
