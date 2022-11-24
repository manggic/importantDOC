

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

* To run mongo in some port
```
docker run --name mongoDB -p 4000:27017 -d mongo

* By using this we can run same image on diff port
* 4000 is our port
* 27017 is mongoDB port
* -d stand for detach mode
```

* For getting container logs 
```
docker logs <container-name>
```