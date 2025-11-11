# comments-frontend

Aplicación Node.js con Express que entrega una página HTML sencilla y consulta el API de comentarios configurado mediante `BACKEND_API_URL`.

## Requisitos

- Node.js 20 o superior
- npm

## Instalación de dependencias

```bash
npm install
```

## Ejecución local

```bash
BACKEND_API_URL=http://localhost:8080 npm start
```

## Construcción de la imagen Docker

```bash
docker build -t comments-frontend:latest .
```

## Run de la imagen Docker

```bash
docker run -p 8080:80 -e BACKEND_API_URL=http://localhost:8080 comments-frontend:latest
```

## Push la imagen Docker
Ejecuta este comando y usa tus credenciales de Docker Hub:

```bash
docker login
```

```bash
docker tag comments-frontend:latest dpazmino6215/comments-frontend:latest
docker push dpazmino6215/comments-frontend:latest
```
