# Stage 1: Build
FROM node:18-slim AS build

# Working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production  
# Keeps it simple; no need to adjust for dev here

# Copy source code
COPY . .

# Stage 2: Run
FROM node:18-slim

# Set NODE_ENV for runtime with a default fallback
ENV NODE_ENV=${NODE_ENV:-production}

# Set working directory and copy files from the build stage
WORKDIR /usr/src/app
COPY --from=build /usr/src/app /usr/src/app

# Use a non-root user
USER node

# Expose port and set PORT environment variable with default value
ENV PORT=${PORT:-8000}
EXPOSE ${PORT}

# Start the app
CMD ["npm", "start"]
