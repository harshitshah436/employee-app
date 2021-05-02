FROM node:16.0.0-alpine

# Make the 'app' folder the current working directory
WORKDIR /app/

# Copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /app/

# npm install and run unit tests
RUN npm ci && npm test

# Db volume for other containers/services
VOLUME ["/app/db"]

EXPOSE 3001
CMD node index.js