# WeatherCard

## Objective

create a React and Express application to display the weather.

This application must have user management.

## Project

### Front

![demo](docs/front-screen.png)

-----
#### schema of component :

![schema of components](docs/schema-react.png)

-----

### API
![swagger](docs/swagger-api.png)

### Architecture du project

![](docs/project-architecture.png)

### Data Model

```js
[
    {
        username: 'Alexis',
        email: 'alexis@devleeschauwer.fr',
        favorites: [
            'Foix',
            'Bastia'
        ],
        hashedPassword: '$2b$10$Uz4Dy3SRzlA3nLp6qgyK8e...',
    }
]
```

### Redis

![redis-bench](docs/redis-bench.png)

## Deploying

![docker-architecture](docs/docker-architecture.png)

```bash
docker-compose up -d
```


