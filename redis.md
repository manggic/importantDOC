
### Redis through command line 
<br>

* To start redis server

```
redis-server
```

* To connect to local redis ( default - 127.0.0.1:6379 )
```
redis-cli
```

* To connect to remote redis server
```
redis-cli -h 10.173.1.22 -p 6379

where:
10.173.1.22 - ip/host name
6379 - port
```
* To check all keys in redis
```
KEYS *
```

* To get value/data of a key
```
get <keyname>
```


* To set data in redis
```
set <keyname> <value>
```

* For setting expire to a key
```
set lang hindi ex 10

where:
lang is key
hindi is value
ex for expiry
10 sec
```

* To format data in terminal
```
redis-cli -h 10.173.1.22 -p 6379 get post_2536003 | python -m json.tool

where:
post_2536003 - key
```