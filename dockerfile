# Base image
FROM node:20-slim as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Expose the port
EXPOSE 4000

# Build the app
RUN npm run build

# Start the server
CMD ["npm", "run", "serve:ssr"]
