#node_app_example

###Usage

build:

```
docker build -t my_node_app .
```

start server:

```
docker run -p 8080:8080 -d my_node_app node server.js
```