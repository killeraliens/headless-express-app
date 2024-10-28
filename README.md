Headless Express Template
A Node.js project template designed for rapid development of web applications, featuring a robust set of middleware for handling requests, security, and environment variables, along with a structured logging system.

## Quick Start

1. Clone the repo: `git clone [repository-url]`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Requirements

- Node.js (version 18.x)
- npm

## Features

- **Express**: Simplifies web server creation.
- **Body-parser**: Parses incoming request bodies.
- **Cors**: Enables Cross-Origin Resource Sharing.
- **Dotenv**: Manages environment variables.
- **Helmet**: Increases security by setting HTTP headers.
- **Winston**: Provides a versatile logging library.

## Development Tools

- **TypeScript**: Adds static typing to JavaScript, enhancing development and maintainability.
- **ts-node**: Facilitates running TypeScript directly without pre-compilation.
- **@types**: Type definitions for Express, Body-parser, Cors, and Node, improving IntelliSense and type checking.

## Docker Setup

1. Build the Docker image: `docker build -t your-image-name .`
2. Run the container: `docker-compose up`
3. Alternatively, build and run the container in one step: `docker-compose up --build`

> **Note:** The `--build` flag forces a rebuild of the Docker image before starting the container. If your Dockerfile already includes both the build and run steps, you may not need to use the `--build` flag unless you want to ensure the image is rebuilt from scratch.

Ensure you have a `.env` file for local development environment variables.

## CI/CD with GitHub Actions

### GitHub Secrets

- `DOCKER_HUB_USERNAME`: Your Docker Hub username.
- `DOCKER_HUB_PASSWORD`: Your Docker Hub password.
- `API_URL`: The URL of your API.
- `DB_CONNECTION_STRING`: The connection string for your database.
- `DOCKER_IMAGE_REPOSITORY`: The name of your Docker image repository.

### `deploy.yml`

This GitHub Actions workflow is designed to build and deploy your Docker image to Docker Hub. It differs from the Docker Compose setup by automating the build and push process directly from your GitHub repository.

## Upcoming Enhancements

- Integration with Supertest for streamlined API testing.
- Swagger or OpenAPI documentation integration.
- Keycloak integration for authentication and authorization.
- Separate data service project integration.

## Contributing

Contributions are welcome. Please fork the repository and submit your pull requests.

## License

This project is released under the ISC license.

## Acknowledgements

Gratitude to the open-source community for the tools and libraries that support this project's development.
