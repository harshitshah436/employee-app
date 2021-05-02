FROM node:16.0.0-alpine

# Make the 'app' folder the current working directory
WORKDIR /app/

# Copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /app/

RUN npm ci --production

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.4.0/wait /wait
RUN chmod +x /wait

EXPOSE 3000
CMD /wait && npm start