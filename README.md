# AngularDockerKube

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

This project is a server side rendered Angular application that is dockerized and deployed to kubernetes.

## Prerequisites
- Node.js
- Angular CLI
- Docker
- Kubernetes
- Minikube
- Virtualbox
- Docker Hub Account
- Docker Desktop
- Brew

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Docker
run `docker build -t angular-docker-kube .` to build the docker image
run `docker run -p 4000:4000 angular-docker-kube` to run the docker image

Navigate to `http://localhost:4000/` to view the application

run `docker build -t yourdockerusername/yourbuildname .` to build the docker image with the tag yourusername/yourbuildname

run `docker push yourdockerusername/yourbuildname` to push the image to docker hub

## Kubernetes
Install minikube by running `brew install minikube`


run `minikube start -vm-driver="virtualbox"` to start minikube with virtualbox as the driver

Create an ui-service.yaml file with the following content:
```
apiVersion: v1
kind: Service
metadata:
  name: name-of-application
spec:
  selector:
    app: frontend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 4000
  type: LoadBalancer
```

Create an ui-deployment.yaml file with the following content:
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ui-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
        - name: frontend
          image: yourdockerusername/yourbuildname:latest
          ports:
            - containerPort: 4000
          livenessProbe:
            httpGet:
              path: /
              port: 4000
            periodSeconds: 10
            initialDelaySeconds: 50
```

run `kubectl apply -f=ui-service.yaml` to deploy the service to kubernetes

run `kubectl apply -f=ui-deployment.yaml` to deploy the application to kubernetes

run `minikube start` to start minikube

run `minikube dashboard` to view the kubernetes dashboard

run `minikube service name-of-application — url` to view the application
