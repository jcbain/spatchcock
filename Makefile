APPNAME=spatchcock
bar = 
foo = $(bar)


cleanup-network:
	@docker network rm ${APPNAME} || echo "${APPNAME} network doesn't exist. Moving on"

cleanup:
	@docker rm -f ${APPNAME}-server 
	@docker rm -f ${APPNAME}-ui 
	@docker rm -f ${APPNAME}-nginx

build-network: cleanup-network
	@docker network create ${APPNAME} || echo "${APPNAME} network already exists. Moving on"

build: cleanup
	@docker build -t ${APPNAME}-server -f ./server/Dockerfile ./server
	@docker build -t ${APPNAME}-ui -f ./ui/Dockerfile ./ui
	@docker build -t ${APPNAME}-nginx -f ./nginx/dockerfiles/Dockerfile.prod ./nginx

build-dev: build
	@docker build -t ${APPNAME}-nginx -f ./nginx/dockerfiles/Dockerfile.dev ./nginx

dev: build-dev build-network
	@docker run -d --rm --env-file ./server/.env -it --network ${APPNAME} -e NODE_ENV=development -v ${PWD}/server:/app --name ${APPNAME}-server ${APPNAME}-server npm run dev
	@docker run -d --rm --env-file ./ui/.env -it --network ${APPNAME} -p 8080:8080 -e NODE_ENV=development -v ${PWD}/ui:/app --name ${APPNAME}-ui ${APPNAME}-ui npm run start
	@docker run -d --rm -d --env-file ./ui/.env -p 80:80 --network ${APPNAME} --name ${APPNAME}-nginx ${APPNAME}-nginx

run: build build-network
	@docker run --rm -d --env-file ./server/.env -it --network ${APPNAME} --name ${APPNAME}-server ${APPNAME}-server npm start
	@docker run --rm -d --env-file ./nginx/.env -p 80:80 --network ${APPNAME} --name ${APPNAME}-nginx ${APPNAME}-nginx
