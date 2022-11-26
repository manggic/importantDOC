

Timing : 02:14:13

Youtube link : https://www.youtube.com/watch?v=rr9cI4u1_88

Commands :

* To pull image 
```
docker pull <image-name>
```

* To list images 
```
 docker image ls 
 docker images
```

* To list running container
```
 docker container ls
 docker ps
```

* To list all container
```
docker container ls -a
```

* To stop container
```
 docker container stop <container-name>
 docker container stop <container-id>
 docker stop <container-name>
```

* To remove all stopped container
```
 docker container prune
```

* To run mongo on some port
```
docker run --name mongoDB -p 4000:27017 -d mongo

* By using this we can run same image on diff port
* 4000 is our port
* 27017 is mongoDB(Image) port
* -d stand for detach mode
```

* For getting container logs 
```
docker logs <container-name>
docker logs <container-id>
```

* For getting list of networks
```
docker network ls
```

* Running container with alias name mongoDB 
```
docker run -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=example --name mongoDB -d mongo 
``` 

* Docker compose command
```
docker-compose -f <file-name> up

* In case of compose we don't need to provide network details as 
both mongodb and mongo-server will be on same network
```

* To bring compose down
```
docker-compose -f <file-name> down
```

* Dockerfile
```
FROM python:3-alpine3.15
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
EXPOSE 3000
CMD python ./index.py
```

* To build Image based on Dockerfile
```
docker build -t manishofficial/hey-flask:latest .
```

* Create container ( Run an Image )
```
docker run -d -p 3000:3000 manishofficial/hey-flask:latest
```

* Push to docker hub
```
docker push manishofficial/hey-flask:latest
```

* To login into Docker acc through cmd
```
docker login
```